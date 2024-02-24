using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class VidyaGlobalSchool : System.Web.UI.MasterPage
{
    ClsConnection Cnn = new ClsConnection();
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (!IsPostBack)
        //{
        //    InfrastructureBindlist();
        //    ContactInformationBindlist();
        //    ContactInformationBindlist1();
        //}
    }
    //public void InfrastructureBindlist()
    //{
    //    DataTable dt = Cnn.FillTable("select * from [Infrastructure] where status=1", "Detail");
    //    InfrastructureListView.DataSource = dt;
    //    InfrastructureListView.DataBind();
    //}
    //public void ContactInformationBindlist()
    //{
    //    DataTable dt = Cnn.FillTable("select * from [ContactInformation]", "Detail");
    //    ContactInformationListView.DataSource = dt;
    //    ContactInformationListView.DataBind();
    //}

    //public void ContactInformationBindlist1()
    //{
    //    DataTable dt = Cnn.FillTable("select SUBSTRING(SchoolAddress, 1, 51) as SchoolAddress,Email,Phone from [ContactInformation]", "Detail");
    //    ContactInformationListView1.DataSource = dt;
    //    ContactInformationListView1.DataBind();
    //}
}
