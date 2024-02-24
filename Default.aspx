<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<%--<%@ Register Assembly="CKEditor.NET" Namespace="CKEditor.NET" TagPrefix="CKEditor" %>--%>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div class="content-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="page-head-line">Facilites Form </h1>
                        </div>
                    </div>
                    <div class="row">
                        <asp:Label ID="lblError" runat="server" class="form-label"></asp:Label>
                        <asp:HiddenField ID="hdnvalue" runat="server" />
                        <div class="col-md-12  grid-margin stretch-card" runat="server" id="box">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div style="border: 1px solid #efefef; padding: 1em;">
                                                        <div class="row g-2">
                                                            <asp:Label ID="LblErr" runat="server"></asp:Label>
                                                            <div class="col-md-12">
                                                                <asp:Label ID="Label2" runat="server" Text="Facilities Name" class="form-label"></asp:Label>
                                                                <asp:TextBox ID="txtname" runat="server" class="form-control"></asp:TextBox>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <asp:Label ID="Label1" runat="server" Text="Facilities Image" class="form-label"></asp:Label>
                                                                <asp:FileUpload ID="txtimg" runat="server" class="form-control" />
                                                            </div>
                                                            <div class="col-md-12">
                                                                <asp:Label ID="Label4" runat="server" Text="Activitie2 Image" class="form-label"></asp:Label>
                                                                <asp:FileUpload ID="txtimg2" runat="server" class="form-control" />
                                                            </div>
                                                            <div class="col-md-12">
                                                                <asp:Label ID="Label5" runat="server" Text="Activitie3 Image" class="form-label"></asp:Label>
                                                                <asp:FileUpload ID="txtimg3" runat="server" class="form-control" />
                                                            </div>
                                                            <div class="col-md-12">
                                                                <asp:Label ID="Label6" runat="server" Text="Activitie4 Image" class="form-label"></asp:Label>
                                                                <asp:FileUpload ID="txtimg4" runat="server" class="form-control" />
                                                            </div>
                                                            <div class="col-md-12">
                                                                <asp:Label ID="Label7" runat="server" Text="Activitie5 Image" class="form-label"></asp:Label>
                                                                <asp:FileUpload ID="txtimg5" runat="server" class="form-control" />
                                                            </div>
                                                            <div class="col-md-12">
                                                                <asp:Label ID="Label3" runat="server" Text="Facilities Description" class="form-label"></asp:Label>
                                                                <asp:TextBox ID="TextBox1" runat="server" class="form-control"></asp:TextBox>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-center">
                                                    <asp:Button ID="btnCreate" runat="server" Text="Create" Class=" btn-lg btn btn-primary btn-icon-text" OnClick="btnCreate_Click" />
                                                    <asp:Button ID="btnUpdate" runat="server" Text="Update" Class=" btn-lg btn btn-danger btn-icon-text" OnClick="btnUpdate_Click" Visible="false" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Sr No.</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Update</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <asp:HiddenField ID="LblId" runat="server" />
                                                    <asp:ListView ID="FacilitesBaindListView" runat="server" OnItemCommand="FacilitesBaindListView_ItemCommand" OnItemDeleting="FacilitesBaindListView_ItemDeleting" OnItemEditing="FacilitesBaindListView_ItemEditing" GroupPlaceholderID="groupPlaceHolder1" OnPagePropertiesChanging="FacilitesBaindListView_PagePropertiesChanging">

                                                        <ItemTemplate>
                                                            <tr>
                                                                <asp:Label ID="lblid" runat="server" Text='<%# Eval("ID") %>' Visible="false"></asp:Label>
                                                                <asp:Label ID="lblDescription" runat="server" Text='<%# Eval("Description") %>' Visible="false"></asp:Label>
                                                                <asp:Label ID="lblName" runat="server" Text='<%# Eval("FacilitiesName") %>' Visible="false"></asp:Label>
                                                                <asp:FileUpload ID="lblimg1" runat="server" Text='<%# Eval("img") %>' Visible="false" />
                                                                <asp:FileUpload ID="lblimg2" runat="server" Text='<%# Eval("img2") %>' Visible="false" />
                                                                <asp:FileUpload ID="lblimg3" runat="server" Text='<%# Eval("img3") %>' Visible="false" />
                                                                <asp:FileUpload ID="lblimg4" runat="server" Text='<%# Eval("img4") %>' Visible="false" />
                                                                <asp:FileUpload ID="lblimg5" runat="server" Text='<%# Eval("img5") %>' Visible="false" />

                                                                <td><%# Container.DataItemIndex+1 %></td>
                                                                <td><%# Eval("FacilitiesName") %></td>
                                                                <td><%# Eval("Description") %></td>
                                                                <%--  <td>
                                                                    <img src="assets/Facilities/<%#Eval("img") %>" style="height: 100px; width: 100px; border-radius: 10%;">
                                                                    <%-- <img src="assets/Facilities/<%#Eval("img2") %>" style="height: 50px; width: 50px; border-radius: 50%;">
                                                            <img src="assets/Facilities/<%#Eval("img3") %>" style="height: 50px; width: 50px; border-radius: 50%;">
                                                            <img src="assets/Facilities/<%#Eval("img4") %>" style="height: 50px; width: 50px; border-radius: 50%;">
                                                            <img src="assets/Facilities/<%#Eval("img5") %>" style="height: 50px; width: 50px; border-radius: 50%;">-%>
                                                                </td>--%>
                                                                <td>
                                                                    <asp:LinkButton ID="Active" runat="server" CommandName="Deactive" CssClass="btn btn-danger" Visible='<%# Eval("Status").ToString() =="True" ? true : false %>'>Deactive</asp:LinkButton>
                                                                    <asp:LinkButton ID="Deactive" runat="server" CommandName="Active" CssClass="btn btn-success" Visible='<%# Eval("Status").ToString() =="False" ? true : false %>'>Active</asp:LinkButton>
                                                                </td>
                                                                <td>
                                                                    <asp:LinkButton ID="LinkButton2" runat="server" CommandName="Edit" CssClass="btn btn-dark btn-icon-text">Edit</asp:LinkButton>

                                                                </td>
                                                                <td>
                                                                    <asp:LinkButton ID="LinkButton1" runat="server" CommandName="Delete" CssClass="btn btn-secondary">Delete</asp:LinkButton>

                                                                </td>

                                                            </tr>
                                                        </ItemTemplate>
                                                    </asp:ListView>
                                                    <asp:PlaceHolder runat="server" ID="groupPlaceHolder1"></asp:PlaceHolder>
                                                    <tr>
                                                        <td colspan="3">
                                                            <asp:DataPager ID="DataPager1" runat="server" PagedControlID="FacilitesBaindListView" PageSize="1">
                                                                <Fields>
                                                                    <asp:NextPreviousPagerField ButtonType="Link" ShowFirstPageButton="false" ShowPreviousPageButton="true"
                                                                        ShowNextPageButton="false" />
                                                                    <asp:NumericPagerField ButtonType="Link" />
                                                                    <asp:NextPreviousPagerField ButtonType="Link" ShowNextPageButton="true" ShowLastPageButton="false"
                                                                        ShowPreviousPageButton="false" />
                                                                </Fields>
                                                            </asp:DataPager>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </form>
</body>
</html>
