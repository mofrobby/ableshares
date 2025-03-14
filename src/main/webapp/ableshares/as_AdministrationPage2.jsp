<%@ page contentType="text/html; charset=utf-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
       <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- AdministrationPage.jsp -->
    <title>Admin</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="../assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="../assets/css/font-awesome.css" rel="stylesheet" />
     <!-- MORRIS CHART STYLES-->
   
        <!-- CUSTOM STYLES-->
    <link href="../assets/css/custom.css" rel="stylesheet" />
     <!-- GOOGLE FONTS-->
   <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
   
<style>
.Reserve-Ledger {
  font-family: Roboto;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
	}
.Reserves-Summary {
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}


</style>
</head>

<body style="background-color:#181e2e; margin-top: 45px; margin-right: 50px; margin-lft: 25px;">
                <div class="row">
                    <div class="col-md-12" id="heading">
                    <span class="Reserve-Ledger" style="margin-left: 15px;">Administration</span>                                            
                    </div>
                </div>
                 <!-- /. ROW  -->
                 <hr />
                 
                 <div class="row">
                 	 <div class="col-md-6 col-sm-12 col-xs-12">           
						<div class="panel panel-back noti-box" style="background-color:#202639; color: #ffffff;">
		                <span class="pull-left">
		                          <i class="fa fa-users fa-3x"></i>              
		                </span>
		                <div class="text-box" >
		                    <p class="main-text"><span class="Reserves-Summary" style="margin-left: 5px;">User Administration</span></p>
		                    <ul>
		                    <li> <a href="../app/PersonnelAdmin_Upd.jsp" style="color: #55ffa9">Personnel Accounts</a></li>
						   
		                    <li><a href="../app/PasswordChange.jsp" style="color: #55ffa9">Password Change</a></li>
						   				  
								 <li><a href="../app/UserAdmin_Upd.jsp" style="color: #55ffa9">User Accounts</a></li>
								 <li><a href="../app/NewLocationWizard.jsp" style="color: #55ffa9">Access Management</a></li>
								 <li><a href="../app/UserActivity.jsp" style="color: #55ffa9">User Activity Report</a></li>
						  
					  		<li><a href="../app/UserDelegation.jsp" style="color: #55ffa9">User Delegation</a></li>
		                    <li> <a href="../app/UserProxyProfiles.jsp" style="color: #55ffa9">User Proxy Profiles</a></li>
							
		                    
		                    </ul>
		                    
		                </div>
		             </div>
		             
		             <div class="panel panel-back noti-box" style="background-color:#202639; color: #ffffff;">
		                <span class="pull-left">
		                          <i class="fa fa-gear fa-3x"></i>              
		                </span>
		                <div class="text-box" >
		                    <p class="main-text"><span class="Reserves-Summary" style="margin-left: 5px;">Site Administration</span></p>
		                    <ul>
		                    <!-- <li><a href="IprConfig.jsp" class="tDkGraySmallUnd">Presentation Configuration</a> -->
		                    <li><a href="ActionManagement.jsp" style="color: #55ffa9">Action Management</a></li>
		                    <li><a href="blockchain_admin.jsp" style="color: #55ffa9">Blockchain Administration</a></li>
		                    <li><a href="CollaborationWorkflows.jsp" style="color: #55ffa9">Collaboration Workflows</a></li>
		                    <li><a href="connector-table.jsp" style="color: #55ffa9">Connectors and Data Feeds</a></li>
		                    <li><a href="Dashboard_Admin.jsp" style="color: #55ffa9">Dashboard Management</a></li>
		                    <li><a href="EventDrivenWorkflows.jsp" style="color: #55ffa9">Event Driven Workflows</a></li>
		                    <li><a href="ProjectTemplates.jsp" style="color: #55ffa9">Form Templates</a></li>
		                    <li><a href="MessageTypes.jsp" style="color: #55ffa9">Message Types</a></li>
		                    <li><a href="ReserveManagement.jsp" style="color: #55ffa9">Reserve Management</a></li>
		                    </ul>
		                    
		                </div>
		             </div>
		             <div class="panel panel-back noti-box" style="background-color:#202639; color: #ffffff;">
		                <span class="pull-left"><i class="fa fa-sitemap fa-3x"></i></span>
		                <div class="text-box" >
		                    <p class="main-text"><span class="Reserves-Summary" style="margin-left: 5px;">Frameworks</span></p>
		                    <ul>
			                    <li><a href="Elements.jsp?fw=6" style="color: #55ffa9">Framework Templates</a></li>
			                    <li><a href="FrameworkOrg.jsp?fw=2&name=Security" style="color: #55ffa9">Framework Administration</a></li>
		                    </ul>
		                </div>
		             </div>
		         </div>
		         
		        <div class="col-md-6 col-sm-12 col-xs-12">           
					<div class="panel panel-back noti-box" style="background-color:#202639; color: #ffffff;">
		                <span class="pull-left">
		                          <i class="fa fa-table fa-3x"></i>              
		                </span>
		                <div class="text-box" >
		                    <p class="main-text"><span class="Reserves-Summary" style="margin-left: 5px;">Reports Management</span></p>
		                    <ul>
		                    <li><a href="ReportWizard.jsp" style="color: #55ffa9">Report Wizard</a></li>
		                   
							<li><a href="ReportSetAdministration.jsp" style="color: #55ffa9">Report Set Management</a></li>
							
		                    
		                    </ul>
		                    
		                </div>
		             </div>
		             <div class="panel panel-back noti-box" style="background-color:#202639; color: #ffffff;">
		                <span class="pull-left">
		                          <i class="fa fa-building-o fa-3x"></i>              
		                </span>
		                <div class="text-box" >
		                    <p class="main-text"><span class="Reserves-Summary" style="margin-left: 5px;">Organization Administration</span></p>
		                    <ul>
		                    <li><a href="OrganizationAdmin_Upd.jsp" style="color: #55ffa9">Organization Management</a></li>
		                    <li><a href="OrgRoleAdmin.jsp" style="color: #55ffa9">Organization Role Management</a></li>
		                    <li><a href="PortfolioManager.jsp" style="color: #55ffa9">Portfolios</a></li>
							<li><a href="PriTableFormatAdmin.jsp" style="color: #55ffa9">Prioritization Table Format Management</a></li>		
							<li><a href="PriCalculatedTypeAdmin.jsp" style="color: #55ffa9">Prioritization Calculation Types</a></li>
		                    <li><a href="POPAdmin.jsp" style="color: #55ffa9">Period of Performance Types</a></li>
		                    <li><a href="BudgetStateAdmin.jsp" style="color: #55ffa9">Budget States</a></li>
		                    <li><a href="TypeOfMoneyAdmin.jsp" style="color: #55ffa9">Types of Money</a></li>
		                    <li><a href="BudgetConfigurationAdmin.jsp" style="color: #55ffa9">Budget Configurations</a></li>
		                    <li><a href="UnarchiveProcurements.jsp" style="color: #55ffa9">Unarchive Procurements</a></li>
		                    </ul>
		                    
		                </div>
		             </div>
		             <div class="panel panel-back noti-box" style="background-color:#202639; color: #ffffff;">
                		<span class="pull-left">
                          <i class="fa fa-gavel fa-3x"></i>              
                		</span>
			                <div class="text-box" >
			                    <p class="main-text"><span class="Reserves-Summary" style="margin-left: 5px;">Risk & Compliance</span></p>
			                    <ul>
			                    	<li><a href="GetCOPProjectData.do?directorate=All&fy=2018&directorateID=0&header=0" style="color: #55ffa9">Project Risk Rollup</a></li>
			                    	<li><a href="RiskTemplates.jsp" style="color: #55ffa9">Risk Templates</a></li>
			                    	<li><a href="FlaggedTransactions.jsp?id=295&name=Operations & Maintenance" style="color: #55ffa9">Transaction Anomalies</a></li>
			                    	
			                    </ul>
			                    
			                </div>
             		</div>
             		
		     </div>
		         
	</div>	         
		     
     <!-- /. WRAPPER  -->
    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
    <!-- JQUERY SCRIPTS -->
    <script src="../assets/js/jquery-1.10.2.js"></script>
      <!-- BOOTSTRAP SCRIPTS -->
    <script src="../assets/js/bootstrap.min.js"></script>
    <!-- METISMENU SCRIPTS -->
    <script>
    
    document.getElementById('heading').focus();
    
    </script>
   
</body>
</html>
