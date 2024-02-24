<%@ Page Title="Contact Us - Vidya Global School BhilwaraAchievements - Vidya Global School Bhilwara" Language="C#" MasterPageFile="~/VidyaGlobalSchool.master" AutoEventWireup="true" CodeFile="Contact.aspx.cs" Inherits="Contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <!-- inner page banner -->
    <div class="dlab-bnr-inr overlay-black-middle bg-pt" style="background-image: url(images/banner/bnr1.jpg);">
        <div class="container">
            <div class="dlab-bnr-inr-entry">
                <h1 class="text-white">Contact Us </h1>
                <!-- Breadcrumb row -->
                <div class="breadcrumb-row">
                    <ul class="list-inline">
                        <li><a href="index.aspx">Home</a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <!-- Breadcrumb row END -->
            </div>
        </div>
    </div>
    <!-- inner page banner END -->
    <!-- contact area -->
    <div class="section-full content-inner-2 contact-style-3">
        <div class="container">
            <div class="row m-lr0 contact-form-box">
                
                <div class="col-lg-8 col-md-7 p-lr0">
                    <div class="contact-form bg-white">
                        <div class="section-head text-left">
                            <h3 class="title">Get In Touch</h3>
                            <div class="dlab-separator bg-primary"></div>
                        </div>
                        <div class="dzFormMsg"></div>
                        <div method="post" class="dzForm" action="script/contact.aspx">
                            <input type="hidden" value="Contact" name="dzToDo">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <asp:TextBox ID="txtname" runat="server" required="" class="form-control" placeholder="Your Name"></asp:TextBox>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <asp:TextBox ID="txtEmail" runat="server" type="email" class="form-control" required="" placeholder="Your Email Id"></asp:TextBox>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <asp:TextBox ID="txtnumber" runat="server" required="" class="form-control" placeholder="Phone"  MaxLength="10" onkeypress='return ((event.charCode >= 48 && event.charCode <= 57)||event.keyCode == 8||event.keyCode == 9)'></asp:TextBox>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <asp:TextBox ID="txtmessg" runat="server" class="form-control" required="" placeholder="Your Message..." TextMode="MultiLine" cols="20" Rows="4"></asp:TextBox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="input-group-addon" style="text-align: center !important;">
                                    <asp:Button ID="btnSubmit" runat="server" Text="Submit" class="site-button-secondry" OnClick="btnSubmit_Click" />
                                    <br />
                                    <asp:Label ID="lblmass" ForeColor="Red" runat="server"></asp:Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    </div>
</asp:Content>

