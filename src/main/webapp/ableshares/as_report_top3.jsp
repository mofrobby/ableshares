<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>





<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

    <head>
    <title>Report Top</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="../assets/js/jquery-1.10.2.js"></script>    
    <script src="../assets/js/bootstrap.min.js"></script>    
    <script language='javascript'>
<!--


function changeFY() {	
	
	var val = document.fmOpPicture.FY.value;
	//alert('val ' +val);
	if (typeof XMLHttpRequest != "undefined") {
		xmlHttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (xmlHttp == null) {
		alert("Browser does not support XMLHTTP Request")
		return;
	}
	var url = "../Ajax/FYOPUpdate.jsp?fy="+val;
	xmlHttp.onreadystatechange = stateChange;
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function stateChange() {
	if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
		document.getElementById("graybox").innerHTML = xmlHttp.responseText;		
	}
}


// -->
</script>
    <!-- BOOTSTRAP STYLES-->
    <link href="../assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONTAWESOME STYLES-->
    <link href="../assets/css/font-awesome.css" rel="stylesheet" />
    
    <style>
<!--
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
.date {
  height: 12px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: #c8c8c8;
}
.Rectangle {
  width: 200px;
  background-color: #181e2e;
  color: #ffffff;
  border: 1px solid #5be2ff;
  -webkit-appearance:none;
   -moz-appearance: none;
  text-indent: 3px;
  text-overflow: '';
  background-image:url(../img/as_img/blue_caret.png);
  background-repeat: no-repeat;
  background-position: right center;
  outline: none;
}
.Rectangle:focus {
  outline: none; 
}
.tranche-heading {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #c8c8c8;
}

.spacer {
	margin-top: 37px;
}
.spacersm {
	margin-top: 20px;
}
-->
</style>
    </head>

    <body style="background-color:#181e2e; margin-top: 45px; margin-right: 50px; margin-lft: 25px;">
    <form name="fmReport" id="fmReport" action="GetISSOReport.do" target="_new">
      <div id="page-inner">
        <div class="row">
          <div class="col-md-12" id="heading">
            <span class="Reserve-Ledger" style="margin-left: 15px;">Reports</span>
          </div>
        </div>
        <!-- /. ROW  -->
         <hr />
        <div class="row">
          <div class="col-md-12">
            <div class="panel panel-primary" style="background-color: #121726; border: 0;">
              <div class="panel-heading" style="background-color: #202639; border-bottom: 2px solid #333c59;"> <span class="Reserves-Summary" >Report Options</span>
                <div style="height: 20px; margin-bottom: 20px; float: right;">
               		<a href="ReportWizard.jsp" target="_self" class="date"><i class="fa fa-plus" title="This allows you to create a new report"></i> Create New Report</a>
               	</div>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="form-group">                  
                     <div class="col-md-3">
                      <label><span id="spnselRpt" class="date">REPORTS</span></label><img name="imgsselRptErr" src="../img/icoErrorBlank.gif" width=9 height=9 border=0>
			  				  	<select id="report" name="report" class="form-control Rectangle">							
									<option value="0" data-visible_yr="false" data-visible_bu="false" data-visible_proj="false">--Select--</option>
									<option value="1" data-visible_yr="true" data-visible_bu="true" data-visible_proj="true">Project Finance Activity</option>
									<option value="5" data-visible_yr="true" data-visible_bu="true" data-visible_proj="true">Transaction Report</option>																	
						  			
								
															
							</select>
                    </div>
                    
                    <!-- END FY REPLACEABLE SECTION-->
                   <div class="col-md-2"  id="yrDiv">
                    	  <label>Fiscal Year</label>
	                      <select name="fy" id="fy" class="form-control">   
	 					 																	
	                      </select>
                    </div>
                    <div class="col-md-3" id="buDiv">
	                      <label>Business Unit</label>
	                      <select name="directorate" id="directorate" class="form-control">                        
							
	                      </select>
                    </div>
                    <div class="col-md-3" id="projDiv">
                    	<div id="prj" style="display: block;">
                    		<label>Project Name</label>
		                    	<select id="project" name="project" class="form-control">
									<option value="0" selected>All</option>										
								</select>
                    	</div>
                    </div>
                    
                    
                   </div>
                </div>
                 <div class="row spacersm" >   
                    <div class="col-md-4"><label>&nbsp;</label><a id="genreport" class="btn btn-default" style="background-color: #333c59; border: 0; color: #ffffff;"><span class="tranche-heading">Generate Report</span></a></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    
<script language='javascript'>

//document.getElementById('heading').focus();
        $(document).ready(function() {
    		$("#yrDiv").hide();
    		$("#buDiv").hide();
    		$("#projDiv").hide();
        });
        
$("#genreport").click(function() {
	//alert('called');
	var selectedOption = $("#report option:selected");
	var selectedValue = selectedOption.val();
	var selectedProj = $("#project option:selected");
	var projValue = selectedProj.val();
	if(selectedValue == '0'){
		confirm('You must select a report.');
		
	}
	else if(selectedValue == '3' && projValue == '0'){
		confirm('You must select a specific project for this report.');
	}
	else{
		$("#fmReport").submit();
	}
});

$("#report").change(function() {
	var selectedOption = $("#report option:selected");
	var selectedValue = selectedOption.val();
	var selectedText = selectedOption.text();
	//alert('selectedText '+selectedText);
	$("#project").prop('disabled', false);
	$("#project").val('0');
	$("#directorate").prop('disabled', false);
	$("#directorate").val('All');
});

function stateChange(data) {	
		document.getElementById("prj").innerHTML = data;	
}

$("#directorate").change(function() {
	var selectedOption = $("#directorate option:selected");
	var selectedValue = selectedOption.val();
	var selectedText = selectedOption.text();
	var selectedfy = $("#fy option:selected");
	var selectedFyValue = selectedfy.val();	

	$("#project").empty();
	
	$.post("../Ajax/ProjBRUpdate.jsp",
	{
		directorate: selectedText,
		fy: selectedFyValue
	},
	function(data, status){
		//alert("Data: "+ data + "\nStatus: " + status);
		stateChange(data) ;
	});
});

function modifyVisibility() {
	if ($("#report").find(':selected').data('visible_yr') == false) {
		$("#yrDiv").hide();
	} else {
		$("#yrDiv").show();
	}
	if ($("#report").find(':selected').data("visible_bu") == false) {
		$("#buDiv").hide();
	} else {
		$("#buDiv").show();
	}
	if ($("#report").find(':selected').data("visible_proj") == false) {
		$("#projDiv").hide();
	} else {
		$("#projDiv").show();
	}
}
</script>
</body>
</html>