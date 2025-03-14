<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Reserve Detail</title>
 <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- BOOTSTRAP STYLES-->
    <link href="../assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="../assets/css/font-awesome.css" rel="stylesheet" />
        <!-- CUSTOM STYLES-->
    <link href="../assets/css/ableshares_custom.css" rel="stylesheet" />
    <link href="../assets/css/timeline.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="../assets/css/daterangepicker.css" />
    <link href="../assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
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
.Shares-outstanding-l {
  width: 224px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: #c8c8c8;
}
.Spot-Price-History {
  width: 146px;
  height: 22px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.D-5D-1M-6M-1Y {
  width: 183px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: #b6b6b6;
  margin-left: 271px;
}

.D-5D-1M-6M-1Y .text-style-1 {
  font-weight: bold;
  color: #55ffa9;
}
.Rectangle-text {
  background-color: #181e2e;
  color: #ffffff;
  border: 1px solid #5be2ff;
  -webkit-appearance:none;
   -moz-appearance: none;
  text-indent: 3px;
  text-overflow: '';
  outline: none;
}
.Rectangle {
  
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

.Tranche-1 {
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.Reserves-Summary {
  width: 158px;
  height: 22px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.tranche-heading {
  width: 134px;
  height: 33px;
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
.tranche-data-row {
  width: 134px;
  height: 33px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: center;
  color: #ffffff;
}
.integrity_rating {
  width: 88px;
  height: 79px;
  font-family: Roboto;
  font-size: 72px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.Integrity-Rating {
  width: 138px;
  height: 16px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  text-align: center;
  color: #ffffff;
}
.Timeline-View {
  width: 116px;
  height: 24px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.Feed-View > a {
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #b6b6b6;
  outline: 0;
  //border-bottom: 1px solid #55ffa9;
}
.Feed-View > a:hover {
  font-weight: bold;
  color: #ffffff;
  underline: none;
	outline: 0;
}

.myClickState {
  border-bottom: 1px solid #55ffa9;
  font-weight: bold;
  color: #ffffff;
  outline: 0;
  underline: none;
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
.Rectangle-Copy-7 {
  
  background: #202639;
  vertical-align: bottom;
  position: relative;
  top: -1px;
  overflow: hidden;
}
.Only-show-sync-issue {
  height: 19px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  vertical-align: center;
  position: relative;
  top: 5px;
  overflow: hidden;
  color: #ffffff;
}
#map {
	height:500px;
	width: 100%;
}
.panel-custom {
    border-color: #202639;
}
.panel-custom > .panel-heading {
    background: #202639; 
    color: #55ffa9;
    font-size: 14px;
    border-color: #202639;
}
.panel-custom > .panel-body {
    background: #181e2e; 
    border-color: #333c59;
}
#fieldmodal .modal-dialog  {width:75%;}
@media screen and (min-width: 768px) {

#fieldmodal .modal-dialog {
	width:900px;
	top:400px;
	right:200px;
	overflow:hidden;
}
#fieldmodal .modal-header {
	background-color: #181e2e;
	color: #55ffa9;
}
#fieldmodal .modal-body {
	background-color: #202639;
	color: #55ffa9;
}
#fieldmodal .modal-content
{
    background-color: #202639;
}

#fieldmodal .modal-footer
{
    background-color: #202639;
	color: #55ffa9;
}

}

   </style>
</head>
<body style="background-color:#181e2e; margin-top: 45px; margin-right: 50px; margin-lft: 25px;">
<div class="row">
	<div class="col-md-12" style="vertical-align: top;"> 
   		<div class="row">
   			<div class="col-md-8"> 
    			<span class="Reserve-Ledger" style="margin-left: 15px;">Reserve Type: <font style="color:#55ffa9;">Potash</font></span>
    		</div>	
    		<div class="col-md-4">
    			<span class="pull-right"><i class="fa fa-lock fa-lg" style="color: #fff;" title="This allows you to secure access to this information"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-refresh fa-lg" style="color: #fff;" title="This allows you to view lifecycle process"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-folder-open fa-lg" style="color: #fff;" title="This allows you to review research"></i></span>
    		</div>
		</div>
		<div class="col-md-6" style="vertical-align: top;"> 
			<div class="row" style="margin-top: 30px;">
				<div class="col-xs-12 col-sm-6 col-md-6"> 
					<div class="form-group">
						<label class="date" style="margin-bottom: 8px; white-space:nowrap;">ASSET CLASS</label>
							<select class="form-control Rectangle">
								<option selected>Potash</option>
								<option>Nickel</option>
								<option>Gold</option>
								<option>Cobalt</option>
								<option>Oil</option>
							</select>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6"> 
					<div class="form-group">
						<label class="date" style="margin-bottom: 8px; white-space:nowrap;">PRODUCER</label>
						<select class="form-control Rectangle">
							<option selected>Brazil Potash</option>
							<option>GigaMetals</option>
							<option>Kenville Gold</option>
							<option>Kara Oil & Gas</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row" style="margin-top: 30px;">
				<div class="col-xs-12 col-sm-6 col-md-6"> 
					<div class="form-group">
						<label class="date" style="margin-bottom: 8px; white-space:nowrap;">LOCATION LATTITUDE</label>
						<input type="text" class="form-control Rectangle-text" id="lat" name="lat" value="-4.102"/>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6"> 
					<div class="form-group">
						<label class="date" style="margin-bottom: 8px; white-space:nowrap;">LOCATION LONGITUDE</label>
						<input type="text" class="form-control Rectangle-text" id="long" name="long" value="-63.158"/>
					</div>
				</div>
			</div>
			<div class="row" style="margin-top: 30px;">
				<div class="col-xs-12 col-sm-8 col-md-8"> 
					<div class="form-group">
						<label class="date" style="margin-bottom: 8px; white-space:nowrap;">QUANTITY</label>
						<input type="text" class="form-control Rectangle-text" id="qty" name="qty" value="100,000,000"/>
					</div>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4"> 
					<div class="form-group">
						<label class="date" style="margin-bottom: 8px; white-space:nowrap;">MEASURE</label>
						<select class="form-control Rectangle">
							<option selected>Metric Tonne (Mt)</option>
							<option>Ounces (oz)</option>
							<option>Barrel (bbl)</option>
							<option>Gallons (gal)</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row" style="margin-top: 30px;">
				<div class="col-xs-12 col-sm-12 col-md-12"> 
					<div class="form-group">
						<label class="date" style="margin-bottom: 8px; white-space:nowrap;">PROJECT DESCRIPTION</label>
						<textarea class="form-control Rectangle-text" id="qty" name="qty" rows="5">Brazil Potash has raised US$195 million to date to permit a 400km long and 150km wide basin, complete 59km of drilling and acquire the majority of the land required for the plant and port. The project is de-risked and ready for development having completed a Bankable Feasibility Study (BFS), Environmental Impact Assessment (EIA) and Preliminary Social and Environmental License (LP).</textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-6" style="vertical-align: top;"> 
			<div id="map"></div>
		</div>
		
	</div>
    
</div>
<hr>
<div class="row">
	<div class="col-md-12" style="vertical-align: top;"> 
		<div class="col-md-12 col-sm-12 col-xs-12">
        	<div class="panel panel-custom">
        		<div class="panel-heading">
                          Reserve Asset Tranches         
                          <div style="height: 20px; margin-bottom: 20px; float: right;"><a href="#fieldmodal" data-toggle="modal" data-target="#fieldmodal" style="color: #55ffa9;font-family: Roboto; font-size: 12px;"><i class="fa fa-plus" title="This allows you to create a new tranche"></i> Add New Tranche</a></div>                 
        		</div>
        		<div class="panel-body">
        			<div class="table-responsive">
                    	<table class="pretty" id="spendplans">
		                	<thead>
		                		<tr>
					                <th>Tranche ID</th>
					                <th>Lot #</th>
					                <th>Amount</th>
					                <th>Create Date</th>
					                <th>Last Update</th>
					                <th>Action</th>
		                		</tr>
		                	</thead>
		                	<tbody>
				                <tr>
				                	<td>1</td>
				                	<td>1002</td>
				                	<td>50,000,000 Mt</td>
				                	<td>2018-10-11 10:17:02</td>
				                	<td>2019-01-11 14:31:18</td>
				                	<td><a href="javascript:DeletePlan(1);" class="btn btn-danger btn-xs">Delete
																	</a>&nbsp;&nbsp;<a href="#fieldmodal" data-toggle="modal" data-target="#fieldmodal" class="btn btn-warning btn-xs">Edit
																	</a></td>																			
								</tr>
				                <tr>
				                	<td>2</td>
				                	<td>1003</td>
				                	<td>25,000,000 Mt</td>
				                	<td>2018-11-15 08:12:46</td>
				                	<td>2019-01-16 18:03:22</td>
				                	<td><a href="javascript:DeletePlan(1);" class="btn btn-danger btn-xs">Delete
																	</a>&nbsp;&nbsp;<a href="javascript:CopyPlan(1);" class="btn btn-warning btn-xs">Edit
																	</a></td>																			
								</tr>
		                		<tr>
					                <td>3</td>
				                	<td>1006</td>
				                	<td>25,000,000 Mt</td>
				                	<td>2018-12-29 15:41:51</td>
				                	<td>2019-01-16 18:11:04</td>
				                	<td><a href="javascript:DeletePlan(1);" class="btn btn-danger btn-xs">Delete
																	</a>&nbsp;&nbsp;<a href="javascript:CopyPlan(1);" class="btn btn-warning btn-xs">Edit
																	</a></td>																			
								</tr>
		                	</tbody>
                        </table>
                        
                      </div>
        		
        		</div>
			</div>
		</div>
	</div>
</div>

<div class="modal fade border border-success" id="fieldmodal" tabindex="-1" role="dialog" aria-labelledby="fieldModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="color: #55ffa9;">&times;</button>
				<h4 id="myModalLabel">Add Tranche</h4>
			</div>
			<div class="modal-body">
				<h3 style="color: #c8c8c8;">Tranche # 4</h3>
				<div class="row" style="margin-top: 30px;">
					<div class="col-xs-12 col-sm-6 col-md-6"> 
						<div class="form-group">
							<label class="date" style="margin-bottom: 8px; white-space:nowrap;">ASSET CLASS</label>
								<select class="form-control Rectangle">
									<option selected>Potash</option>
									<option>Nickel</option>
									<option>Gold</option>
									<option>Cobalt</option>
									<option>Oil</option>
								</select>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6"> 
						<div class="form-group">
							<label class="date" style="margin-bottom: 8px; white-space:nowrap;">PRODUCER</label>
							<select class="form-control Rectangle">
								<option selected>Brazil Potash</option>
								<option>GigaMetals</option>
								<option>Kenville Gold</option>
								<option>Kara Oil & Gas</option>
							</select>
						</div>
					</div>
				</div>
				<div class="row" style="margin-top: 20px;">
					<div class="col-xs-12 col-sm-8 col-md-4"> 
						<div class="form-group">
							<label class="date" style="margin-bottom: 8px; white-space:nowrap;">QUANTITY</label>
							<input type="text" class="form-control Rectangle-text" id="qty2" name="qty2" value="0"/>
						</div>
					</div>
					<div class="col-xs-12 col-sm-8 col-md-4"> 
						<div class="form-group">
							<label class="date" style="margin-bottom: 8px; white-space:nowrap;">TERM</label>
							<input type="text" class="form-control Rectangle-text" id="term" name="term" value="0"/>
						</div>
					</div>
					<div class="col-xs-12 col-sm-8 col-md-4"> 
						<div class="form-group">
							<label class="date" style="margin-bottom: 8px; white-space:nowrap;">LOT #</label>
							<input type="text" class="form-control Rectangle-text" id="lot" name="lot" value="0"/>
						</div>
					</div>
				</div>
				<div class="row" style="margin-top: 20px;">
					<div class="col-xs-12 col-sm-8 col-md-4"> 
						<div class="form-group">
							<label class="date" style="margin-bottom: 8px; white-space:nowrap;">HAIRCUT</label>
							<input type="text" class="form-control Rectangle-text" id="haircut" name="haircut" value="0"/>
						</div>
					</div>
					<div class="col-xs-12 col-sm-8 col-md-4"> 
						<div class="form-group">
							<label class="date" style="margin-bottom: 8px; white-space:nowrap;">CALLABLE DATE</label>
							<input type="text" class="form-control Rectangle-text" id="callable" name="callable" value="0"/>
						</div>
					</div>
					<div class="col-xs-12 col-sm-8 col-md-4"> 
						<div class="form-group">
							<label class="date" style="margin-bottom: 8px; white-space:nowrap;">INDEX</label>
							<select class="form-control Rectangle">
								<option selected>CFR Brazil</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" id="modalform" class="btn btn-danger" data-dismiss="modal">Cancel</button>&nbsp;&nbsp;<button type="button" id="modalform2" class="btn btn-success">Add</button>
			</div>
		</div>
	</div>
</div>	



<script src="../assets/js/jquery-1.10.2.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../assets/js/moment.min.js"></script>
	<!-- Include Date Range Picker -->
<script type="text/javascript" src="../assets/js/daterangepicker.js"></script>
<script src="../assets/js/dataTables/jquery.dataTables.js"></script>
<script src="../assets/js/dataTables/dataTables.bootstrap.js"></script>
<script src="../js/highcharts6.js"></script>
<script src="../js/highcharts-more6.js"></script>


<!-- Morris Chart Dependencies -->
<script>
	function initMap(){
		var location = {lat: -4.102, lng: -63.158};
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 5, 
			center: location
		});
		var marker = new google.maps.Marker({
			position: location, 
			map: map
		});
	} 
	
	var sTable = $('#spendplans').dataTable( {
		"aLengthMenu": [[10, 20], [10, 20]],
		"iDisplayLength":5,
		"aoColumnDefs": [
			{ "bSortable": false, "aTargets": [ 0 ] }
		],
		"aaSorting": [[5, 'desc']]
	});
</script>
	
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7WusnnBOwlygSUadW_3d29-0ImvkmADc&callback=initMap"></script>   
</body>
</html>