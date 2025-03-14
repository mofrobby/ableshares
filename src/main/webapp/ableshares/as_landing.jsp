<%@page language="java" contentType="text/html"%>
<%@ page import="org.quahadi.imrs.user.User, java.util.TreeMap, java.util.Map" %>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<script language='javascript'>
<!--

var xmlRequest;
if (window.XMLHttpRequest) { // if Mozilla, IE7, Safari etc
    //alert("HTTP");
    xmlRequest = new XMLHttpRequest();
}
else if (window.ActiveXObject) { // if IE6 or below
    try {
        xmlRequest = new ActiveXObject("Msxml2.XMLHTTP")
        //alert("Msxml2.XMLHTTP");
    }
    catch (e) {
        try {
            xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");
            //	alert("Microsoft.XMLHTTP");
        }
        catch (e) {
            alert("You do not have a compatible browser to use this page.\r Use IE 6.0 or greater for best results.");
        }
    }
}
else
    alert("You do not have a compatible browser to use this page.\r Use IE 6.0 or greater for best results.");



// -->
</script>

<head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reserve Ledger</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="../assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="../assets/css/font-awesome.css" rel="stylesheet" />
     <!-- MORRIS CHART STYLES-->
    <link href="../assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
        <!-- CUSTOM STYLES-->
    <link href="../assets/css/ableshares_custom.css" rel="stylesheet" />
    
    
   <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
   <style>
<!--
.nocol {color:#000000; font-family:arial; font-size:13px; text-decoration:none;}

a.disabled {
	pointer-events: none;
	cursor: default;
}

-->
</style>

</head>
<body>
	<div id="wrapper">
    <!-- /. NAV TOP  -->
    	<nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
          <div style="color: white; padding: 15px 50px 5px 50px; float: right;font-size: 12px;"> Last access :  <div id="myElement"></div>  &nbsp; <a href="as_login.jsp" class="btn btn-danger btn-xs">Logout</a> </div>
        </nav>   
    	<nav class="navbar-default navbar-side" role="navigation" id="bar" style="width: 200px; position:absolute;">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
					<li id="imgLogo" class="text-center" style="list-style: none;">
                   		<img src="../img/as_img/ableshares_stacked.png" class="user-image img-responsive" data-toggle="tooltip" title="Click on logo to go to home page"/>
					</li>
					<li>
               			<a href="as_pledged_reserve.jsp" target="fraBody"><i class="fa fa-clipboard" title="Reserve Ledger"></i>Reserve Ledger</a>
                    </li> 
                    <li>
                        <a href="as_transactions.jsp" target="fraBody"><i class="fa fa-exchange" title="Transactions"></i>Transactions</a>
                    </li>
                    <li>
		                <a href="as_pc_sched.jsp" target="fraBody"><i class="fa fa-calendar" title="P&C Schedule"></i>P&C Schedule</a>
                    <li>
                        <a href="as_blockchain_ledger.jsp" target="fraBody"><i class="fa fa-chain" title="Blockchain Ledger"></i>Blockchain Ledger</a>
                    </li>
                    <li>
                        <a  href="as_report_top3.jsp" target="fraBody"><i class="fa fa-bar-chart-o" title="Reports"></i>Reports</a>
                    </li>	
                     <li>
                        <a  href="as_AdministrationPage2.jsp" target="fraBody"><i class="fa fa-tachometer" title="Administration"></i>Administration</a>
                    </li>
                    <li>
                        <a  href="#"><i class="fa fa-search" title="Search"></i><input type="text" style="width: 130px; background-color:#121726; border: 0; border-bottom: 2px dotted #333c59;"></a>
                    </li> 
                    <li style="height:48px;background-color: #121726;">
                        <a href="javascript: minifyme();" class="pull-right" style="height:48px;"><i class="fa fa-arrow-circle-left" title="Collapse"></i></a>
                    </li>
                  	
                </ul>
               
            </div>
            
        </nav>  
        
         <nav class="navbar-default navbar-sideminify" role="navigation" id="clsbar" style="display: none; width: 60px; position: absolute;">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu" style="background-color: #121726;">
					<li id="imgLogo2" class="text-center" style="background-color: #121726;">
                    	<img src="../img/as_img/ableshares_collapse.png" class="user-image img-responsive" data-toggle="tooltip" title="Click on logo to go to home page"/>
					</li>
					<li>
               			<a href="as_pledged_reserve.jsp" target="fraBody"><i class="fa fa-clipboard" title="Reserve Ledger"></i></a>
                    </li> 
                    <li>
                        <a href="as_transactions.jsp" target="fraBody"><i class="fa fa-exchange" title="Transactions"></i></a>
                    </li>
                    <li>
		                <a href="as_pc_sched.jsp" target="fraBody"><i class="fa fa-calendar" title="P&C Schedule"></i></a>
                    <li>
                        <a href="as_blockchain_ledger.jsp" target="fraBody"><i class="fa fa-chain" title="Blockchain Ledger"></i></a>
                    </li>
                    <li>
                        <a  href="as_report_top3.jsp" target="fraBody"><i class="fa fa-bar-chart-o" title="Reports"></i></a>
                    </li>	
                     <li>
                        <a  href="as_AdministrationPage2.jsp" target="fraBody"><i class="fa fa-tachometer" title="Administration"></i></a>
                    </li>
                    <li style="height:48px;background-color: #121726;">
                        <a href="javascript: maxafyme();" class="pull-right" style="height:48px;"><i class="fa fa-arrow-circle-right" title="Expand"></i></a>
                    </li>
                </ul>
            </div>
        </nav> 
        
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
       		<iframe id="fraBody" name="fraBody" src='as_pledged_reserve.jsp' width="100%" height="4000px" scrolling="no" frameBorder="0"></iframe>
        </div>
         <!-- /. PAGE WRAPPER  -->
        </div>
        
        
        
     <!-- /. WRAPPER  -->
    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
    <!-- JQUERY SCRIPTS -->
    <script src="../assets/js/jquery-1.10.2.js"></script>
      <!-- BOOTSTRAP SCRIPTS -->
    <script src="../assets/js/bootstrap.min.js"></script>
    <!-- METISMENU SCRIPTS -->
    <script src="../assets/js/jquery.metisMenu.js"></script>
     <!-- MORRIS CHART SCRIPTS -->
   <script src="../assets/js/custom.js"></script>  
      
    <script>
    $(function () {
			$('[data-toggle="tooltip"]').tooltip();
	});
    $(function () {
    	ellipses1 = $("#bc1 :nth-child(2)")
        if ($("#bc1 a:hidden").length >0) {ellipses1.show()} else {ellipses1.hide()}
	});
    
	
    $('#imgLogo').click( function() {
    	
    	$('#fraBody').attr('src', 'as_pledged_reserve.jsp');
    });
    
	$('#imgLogo2').click( function() {
    	
    	$('#fraBody').attr('src', 'as_pledged_reserve.jsp');
    });
    
    
    window.addEventListener('message', function(e) {
    	var $iframe = jQuery("#fraBody");
    	var eventName = e.data[0];
    	var data = e.data[1];
    	switch(eventName){
    	case 'setHeight':
    		$iframe.height(data);
    		break;
    	}
    }, false);
    
function minifyme(){
    	
    	$('#bar').hide();
    	$('#page-wrapper').css('margin', '0 0 0 60px');
    	$('#clsbar').show();
    }
    
function maxafyme(){
    	$('#clsbar').hide();
    	$('#page-wrapper').css('margin', '0 0 0 200px');
    	$('#bar').show();
    	
    }

function updateBreadcrumbs(){
	xmlRequest.open("GET", "../Ajax/GetBreadcrumbs.jsp", true);
	xmlRequest.onreadystatechange = breadcrumbResult;
	xmlRequest.send(null);	

}

function breadcrumbResult(){
	if (xmlRequest.readyState == 4) {
		var Re = xmlRequest.responseText;
		//alert('Re '+Re);
		$("#bread").html(Re);
	}
}

const getYesterdayDate = () => {
	  const today = new Date();
	  const yesterday = new Date(today);
	  yesterday.setDate(today.getDate() - 1);
	  return yesterday;
	};

	const yesterday = getYesterdayDate();
	console.log(yesterday);
	document.getElementById("myElement").textContent = yesterday.toLocaleString("en-US");
    </script>
   
</body>
</html>
