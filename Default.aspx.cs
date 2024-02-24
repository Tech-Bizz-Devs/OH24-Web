using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    ClsConnection Cnn = new ClsConnection();
    public enum MessageType { Success, Error, Info, Warning };
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            list();
        }
    }
    public void list()
    {
        DataTable dt = Cnn.FillTable("select * from [Facilities]", "Detail");
        FacilitesBaindListView.DataSource = dt;
        FacilitesBaindListView.DataBind();
    }


    protected void btnCreate_Click(object sender, EventArgs e)
    {
        string filename1 = "";
        string filename2 = "";
        string filename3 = "";
        string filename4 = "";
        string filename5 = "";
        Cnn.Open();
        int ID = Convert.ToInt32(Cnn.ExecuteScalar("Select  IsNull(Max(id)+1,1) From [Facilities]"));
        if (txtimg.HasFile)
        {

            byte[] image = txtimg.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename1 = ID + "_1.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename1), System.Drawing.Imaging.ImageFormat.Jpeg);
            }
        }
        if (txtimg2.HasFile)
        {

            byte[] image = txtimg2.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename2 = ID + "_2.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename2), System.Drawing.Imaging.ImageFormat.Jpeg);
            }

        }
        if (txtimg3.HasFile)
        {

            byte[] image = txtimg3.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename3 = ID + "_3.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename3), System.Drawing.Imaging.ImageFormat.Jpeg);
            }
        }
        if (txtimg4.HasFile)
        {

            byte[] image = txtimg4.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename4 = ID + "_4.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename4), System.Drawing.Imaging.ImageFormat.Jpeg);
            }

        }
        if (txtimg5.HasFile)
        {

            byte[] image = txtimg5.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename5 = ID + "_5.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename5), System.Drawing.Imaging.ImageFormat.Jpeg);
            }
        }
        Cnn.ExecuteNonQuery("INSERT INTO [Facilities] (id,Facilitiesname,img,img2,img3,img4,img5,rts,Status,Description) values ('" + ID + "','" + txtname.Text + "','" + filename1 + "','" + filename2 + "','" + filename3 + "','" + filename4 + "','" + filename5 + "',getdate(),1,'" + TextBox1.Text + "')");

        Cnn.Close();

        LblErr.Text = "Success !!!";
        Cnn.Close();
        clear();
        list();
        ShowMessage("Record submitted successfully", MessageType.Success);

    }


    protected void ShowMessage(string Message, MessageType type)
    {
        ScriptManager.RegisterStartupScript(this, this.GetType(), System.Guid.NewGuid().ToString(), "ShowMessage('" + Message + "','" + type + "');", true);
    }

    protected void FacilitesBaindListView_ItemCommand(object sender, ListViewCommandEventArgs e)
    {

        if (e.CommandName == "Edit")
        {
            Label lbl_Id = (Label)e.Item.FindControl("lblid");
            Label lbl_Name = (Label)e.Item.FindControl("lblName");
            Label lbl_Description = (Label)e.Item.FindControl("lblDescription");
            FileUpload lbl_img1 = (FileUpload)e.Item.FindControl("lblimg1");
            FileUpload lbl_img2 = (FileUpload)e.Item.FindControl("lblimg2");
            FileUpload lbl_img3 = (FileUpload)e.Item.FindControl("lblimg3");
            FileUpload lbl_img4 = (FileUpload)e.Item.FindControl("lblimg4");
            FileUpload lbl_img5 = (FileUpload)e.Item.FindControl("lblimg5");
            hdnvalue.Value = lbl_Id.Text;
            txtname.Text = lbl_Name.Text;
            TextBox1.Text = lbl_Description.Text;
            txtimg = lbl_img1;
            txtimg2 = lbl_img2;
            txtimg3 = lbl_img3;
            txtimg4 = lbl_img4;
            txtimg5 = lbl_img5;
            btnUpdate.Visible = true;
            btnCreate.Visible = false;
        }

        if (e.CommandName == "Delete")
        {
            Label lbl_Id = (Label)e.Item.FindControl("lblid");
            Cnn.Open();
            Cnn.ExecuteNonQuery("delete from [Facilities] where id= '" + lbl_Id.Text + "'");
            Cnn.Close();
            list();

        }
        if (e.CommandName == "Active")
        {
            Label lbl_id = (Label)e.Item.FindControl("lblid");
            Cnn.Open();
            Cnn.ExecuteNonQuery("update  [Facilities] set status='1' where id='" + lbl_id.Text + "'");
            Cnn.Close();
            list();
        }
        if (e.CommandName == "Deactive")
        {
            Label lbl_id = (Label)e.Item.FindControl("lblid");
            Cnn.Open();
            Cnn.ExecuteNonQuery("update  [Facilities] set status='0' where id='" + lbl_id.Text + "'");
            Cnn.Close();
            list();
        }
    }
    protected void FacilitesBaindListView_ItemDeleting(object sender, ListViewDeleteEventArgs e)
    {

    }
    protected void FacilitesBaindListView_ItemEditing(object sender, ListViewEditEventArgs e)
    {

    }
    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        string filename1 = "";
        string filename2 = "";
        string filename3 = "";
        string filename4 = "";
        string filename5 = "";
        Cnn.Open();
        string mid = hdnvalue.Value.ToString();
        if (txtimg.HasFile)
        {

            byte[] image = txtimg.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename1 = mid + "_1.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename1), System.Drawing.Imaging.ImageFormat.Jpeg);
            }
            Cnn.ExecuteNonQuery("update [Facilities] set img='" + filename1 + "'  WHERE id='" + mid + "'");
        }
        if (txtimg2.HasFile)
        {

            byte[] image = txtimg2.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename2 = mid + "_2.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename2), System.Drawing.Imaging.ImageFormat.Jpeg);
            }
            Cnn.ExecuteNonQuery("update [Facilities] set img2='" + filename2 + "'  WHERE id='" + mid + "'");
        }
        if (txtimg3.HasFile)
        {

            byte[] image = txtimg3.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename3 = mid + "_3.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename3), System.Drawing.Imaging.ImageFormat.Jpeg);
            }
            Cnn.ExecuteNonQuery("update [Facilities] set img3='" + filename3 + "'  WHERE id='" + mid + "'");
        }
        if (txtimg4.HasFile)
        {

            byte[] image = txtimg4.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename4 = mid + "_4.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename4), System.Drawing.Imaging.ImageFormat.Jpeg);
            }
            Cnn.ExecuteNonQuery("update [Facilities] set img4='" + filename4 + "'  WHERE id='" + mid + "'");
        }
        if (txtimg5.HasFile)
        {

            byte[] image = txtimg5.FileBytes;
            ImageHandler imageHandler = new ImageHandler();
            filename5 = mid + "_5.jpg";
            Bitmap bmpmain = imageHandler.CreateThumbnail(image, false, 390, 210);
            if (bmpmain != null)
            {
                bmpmain.Save(Server.MapPath("~/image/" + filename5), System.Drawing.Imaging.ImageFormat.Jpeg);
            }
            Cnn.ExecuteNonQuery("update [Facilities] set img5='" + filename5 + "'  WHERE id='" + mid + "'");
        }
        else
        {
            Cnn.ExecuteNonQuery("update [Facilities] set Facilitiesname='" + txtname.Text + "',Description='" + TextBox1.Text + "'  WHERE id='" + mid + "'");
        }
        Cnn.Close();
        list();
        clear();
        btnUpdate.Visible = false;
        btnCreate.Visible = true;
    }
    private void clear()
    {
        txtname.Text = "";
        TextBox1.Text = "";
    }
    protected void FacilitesBaindListView_PagePropertiesChanging(object sender, PagePropertiesChangingEventArgs e)
    {
        DataPager1.SetPageProperties(e.StartRowIndex, e.MaximumRows, false);
        list();
    }
}