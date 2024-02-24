using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Contact : System.Web.UI.Page
{
    ClsConnection Cnn = new ClsConnection();
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (!IsPostBack)
        //{
        //    ContactInformationBindlist();
        //    ContactInformationBindlist1();
        //}
    }
    //public void ContactInformationBindlist()
    //{
    //    DataTable dt = Cnn.FillTable("select * from [ContactInformation]", "Detail");
    //    ContactInformationListView.DataSource = dt;
    //    ContactInformationListView.DataBind();
    //}


    //public void ContactInformationBindlist1()
    //{
    //    DataTable dt = Cnn.FillTable("select * from [ContactInformation]", "Detail");
    //    ContactInformationListView1.DataSource = dt;
    //    ContactInformationListView1.DataBind();
    //}
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        Cnn.Open();
        int ID = Convert.ToInt32(Cnn.ExecuteScalar("Select  IsNull(Max(id)+1,1) From [Contact]"));

        Cnn.ExecuteNonQuery("INSERT INTO [Contact] (id,Name,Email,Mobile,Message) values ('" + ID + "','" + txtname.Text + "','" + txtEmail.Text + "','" + txtnumber.Text + "','" + txtmessg.Text + "')");

        Cnn.Close();
        MailMessage newmail = new MailMessage();
        MailAddress toadd = new MailAddress("info@vgsbhilwara.com");
        MailAddress fromadd = new MailAddress("code@vgsbhilwara.com");
        newmail.Subject = "New Contact Enquiry From vgsbhilwara.com . ";

        string msg = "User Details :- Name : '" + txtname.Text + "' <br /> Email: '"+txtEmail.Text+"' <br /> Mobile No : '"+txtnumber.Text+"' <br /> Message : '"+txtmessg.Text+"' <br /> This is computer generated E-mail Please Check Website Admin Once! ";



        newmail.Body = msg;
        newmail.To.Add(toadd);
        newmail.From = fromadd;
        newmail.IsBodyHtml = true;
        SmtpClient sserver = new SmtpClient();
        sserver.Host = "mail.aemailsrv.com";
        sserver.Credentials = new NetworkCredential("code@vgsbhilwara.com", "Future@2575");
        sserver.DeliveryMethod = SmtpDeliveryMethod.Network;
        sserver.Port = 25;
       // sserver.EnableSsl = true;
        sserver.Send(newmail);
        lblmass.Text = "Email Sent Successfully!!";
        clear();
    }

    private void clear()
    {
        txtmessg.Text = "";
        txtname.Text = "";
        txtnumber.Text = "";
        txtEmail.Text = "";
    }


}