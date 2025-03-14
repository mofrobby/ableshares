<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Pledged Reserves</title>
 <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reserve Ledger</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="../assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="../assets/css/font-awesome.css" rel="stylesheet" />
        <!-- CUSTOM STYLES-->
    <link href="../assets/css/ableshares_custom.css" rel="stylesheet" />
    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css'>
   <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
   <style>
   .Reserve-Ledger {
  width: 254px;
  height: 48px;
  font-family: Roboto;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  white-space:nowrap;

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
  white-space:nowrap;
}
.Rectangle {
 
  height: 48px;
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
  position: relative;
}
.Rectangle:focus {
  outline: none; 
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
.container {
	min-width: 300px;
	max-width: 600px;
	height: 200px;
	margin: 0 auto;
	background-color:#181e2e;
}
.reference-price {
  width: 128px;
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
.day-ma {
  width: 78px;
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
.prior-close {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: #c8c8c8;
}
.CFR-Brazil {
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.prior {
  font-family: Roboto;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: normal;
  color: #55ffa9;
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
.total-shares {
  width: 107px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  color: #ffffff;
}
.shares-font {
  width: 74px;
  height: 23px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #ffffff;
}
.Pledged {
  height: 24px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #b6b6b6;
}
tot-table {
    width: 100px;
    position: relative;
    top: 0%;
}


   </style>
</head>
<body style="background-color:#181e2e; margin-top: 45px; margin-right: 50px;">
<div class="row">
	<div class="col-md-6"> 
		<div class="row">
			 <div class="col-md-6">
            	<span class="Reserve-Ledger" style="margin-top:45px">Reserve Ledger</span><br>
            	<span class="Shares-outstanding-l">SHARES OUTSTANDING LEDGER</span>
        	</div>
        	<div class="col-md-6">
            	<div class="form-group">
            		<select class="form-control form-control-lg Rectangle">
						<option style="color:#fff;">Brazil Potash - Amazonas</option>
						<option style="color:#fff;">Kenville Gold - Canada</option>
						<option style="color:#fff;">Kessle - Canada</option>
						<option style="color:#fff;">Mayapouras Phosphate - Brazil</option>
						<option style="color:#fff;">San Vincenzo - Brazil</option>
						<option style="color:#fff;">Jebsonville Copper - US</option>
					</select>
				</div>
        	</div>
		</div>
		<div class="row" style="margin-top: 45px; margin-left: 15px;">
			<div class="col-md-3">
				<span class="reference-price" style="width: 128px; height: 14px;">REFERENCE PRICE</span>
				<br>
				<span class="CFR-Brazil">CFR Brazil</span>
			</div>
			<div class="col-md-3">
				<span class="day-ma">30 DAY MA</span>
				<br>
				<span class="CFR-Brazil">305.10/t</span>
			</div>
			<div class="col-md-3">
				<span class="prior-close" >PRIOR CLOSE $/T</span>
					<span class="prior">312.00</span>
			</div>
			
		</div>	
		
	</div>
	<div class="col-md-6" > 
		<div class="row" style="float: right; margin-right: 25px;">
			<div><span class="Spot-Price-History">Spot Price History</span><span class="D-5D-1M-6M-1Y">1D | 5D | 1M | 6M | 1Y</span></div>
		</div>
		<div class="row" style="float: right; margin-right: 25px;">
			<div id="container" style="height: 200px"></div>
		</div>
	</div>
</div>

<div class="row" style="margin-top: 50px;">
	<div class="col-md-12"> 
		<span class="Tranche-1">Tranche 1</span>
		<span class="prior-close" style="margin-left: 31px;">START DATE: </span><span class="prior-close" style="color: #FFFFFF;">01/02/2019</span>
		<span class="prior-close" style="margin-left: 24px;">TYPE: </span><span class="prior-close" style="color: #FFFFFF;">PLEDGED</span>
		<span class="prior-close" style="margin-left: 24px;">CALLABLE: </span><span class="prior-close" style="color: #FFFFFF;">01/02/2024</span>
		<span class="prior-close" style="margin-left: 24px;">TERM: </span><span class="prior-close" style="color: #FFFFFF;">5.07</span>
	</div>
	</div>
</div>
<div class="row" style="margin-top: 21px;">
			<div class="col-md-12"> 
				<table style="background-color:#202639; width: 100%"> 
					<tr>
						<td colspan="8" style="text-align: left; height: 84px; padding-top: 20px;" valign="top"><span class="Reserves-Summary" style="margin-left: 25px;">Reserves Summary</span></td>
						<td rowspan=5><div id="container2" style="min-width: 233px; height: 217px; margin: 0 auto"></div></td>
					</tr>
					<tr>
						<td class="tranche-heading">Date</td>
						<td class="tranche-heading">Proven</td>
						<td class="tranche-heading">Pledged</td>
						<td class="tranche-heading">Haircut</td>
						<td class="tranche-heading">Available</td>
						<td class="tranche-heading">Created</td>
						<td class="tranche-heading">Redeemed</td>
						<td class="tranche-heading">Remaining</td>
						
					</tr>
			<tr bgcolor="#131828">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">01/02/2019</td>
				<td class="tranche-heading" style="color: #5be2ff; border-right: 2px solid #333c59;">10,000,000</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">422,500</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">30.0%</td>
				<td class="tranche-heading" style="color: #5be2ff; border-right: 2px solid #333c59;">325,000</td>
				<td class="tranche-heading" style="color: #5be2ff; border-right: 2px solid #333c59;">315,000</td>
				<td class="tranche-heading" style="color: #ff5353; border-right: 2px solid #333c59;">(2,500)</td>
				<td class="tranche-heading"></td>
				
			</tr>
			<tr bgcolor="#181e2e">
				<td style="border-right: 2px solid #333c59; background-color:#202639">&nbsp</td>
				<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">3,051,000,000</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">&nbsp;</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">&nbsp;</td>
				<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">99,157,500</td>
				<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">96,106,500</td>
				<td class="tranche-heading" style="color: #ff5353; border-right: 2px solid #333c59;">(762,750)</td>
				<td class="tranche-heading" style="color: #55ffa9;">3,813,750</td>
				
			</tr>
			<tr bgcolor="#131828">
				<td class="tranche-data-row" style="background-color:#202639">&nbsp;</td>
				<td class="tranche-data-row" style="background-color:#202639">&nbsp;</td>
				<td class="tranche-data-row" style="background-color:#202639">&nbsp;</td>
				<td class="tranche-data-row" style="background-color:#202639">&nbsp;</td>
				<td class="tranche-data-row" style="background-color:#202639; border-right: 2px solid #333c59;">&nbsp;</td>
				<td class="tranche-heading" style="color: #ffffff; border-right: 2px solid #333c59;">96.92%</td>
				<td class="tranche-heading" style="color: #ff5353; border-right: 2px solid #333c59;">(0.77)%</td>
				<td class="tranche-heading" style="color: #ffffff;">3.85%</td>
				
			</tr>
		
		
		</table>
	</div>
</div>
 <div class="row" style="margin-top: 25px;">
	<div class="col-md-12"> 
	<div class="accordion" id="accordion_general_details" style="margin-top:30px; background-color: #202639;">
				<div class="accordion-group">
					<div class="accordion-heading" style="padding-top: 25px;">
						<a class="accordion-toggle" data-toggle="collapse" data-parent="accordion_general_details" href="#accordion_general_details_body" >
						<span class="Reserves-Summary" style="margin-left: 25px;">Detail&nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-down"></i></span></a>
					</div>
					<div id="accordion_general_details_body" class="accordion-body collapse">
						<div class="accordion-inner">
               				
								<table style="background-color:#202639; width: 100%; margin-top: 25px;">   
			                     	<tr>
			                     		<td style="padding: 0px 10px 5px 25px;"><span class="total-shares">TOTAL SHARES</span></td>
										<td style="padding: 0px 10px 5px 50px;"><span class="total-shares" style="color: #b6b6b6">DETAILS</span></td>
			                     		<td style="padding: 0px 10px 5px 50px;"><span class="total-shares" style="color: #b6b6b6">PRICE</span></td>
			                     		<td style="padding: 0px 10px 5px 50px;"><span class="total-shares" style="color: #b6b6b6; ">IMPLIED BORROWED RATE</span></td>
			                     		<td style="padding: 0px 10px 5px 50px;"><span class="total-shares" style="color: #b6b6b6">CUMULATIVE RESERVE ACTIVITY</span></td>
			                     	</tr>	 
			                     	<tr>
			                     		<td style="padding: 0px 10px 0px 25px;"><span class="shares-font">262,000</span></td>
			                     		<td rowspan="4" valign="top" style="padding: 0px 10px 5px 50px;">
			                     			<table style="width: 100%;">
			                     				<tr>
			                     					<td class="Pledged">Pledged</td>
			                     					<td style="color: #5be2ff; font-size: 11px;">325,000</td> 
			                     					<td>&nbsp;</td>
			                     				</tr>
			                     				<tr>
			                     					<td class="Pledged">Issued</td>
			                     					<td style="color: #5be2ff; font-size: 11px;">262,500</td>
			                     					<td style="color: #ffffff; font-size: 11px;">80.8%</td>
			                     				</tr>
			                     				<tr>
			                     					<td class="Pledged">Remaining</td>
			                     					<td style="color: #5be2ff; font-size: 11px;">(2,500)</td>
			                     					<td style="color: #ffffff; font-size: 11px;">-0.8%</td>
			                     				</tr>
			                     				<tr>
			                     					<td class="Pledged">Redeemed</td>
			                     					<td style="color: #ff5353;  font-size: 11px;">17,500</td>
			                     					<td style="color: #ffffff; font-size: 11px;">3.8%</td>
			                     				</tr>
			                     				 
			                     			</table>
										</td>
			                     		<td rowspan="2" valign="top" style="padding: 0px 10px 5px 50px;">
			                     			<table style="width: 100%; border: 2px solid #333c59;">
			                     				<tr style="border-bottom: 2px solid #333c59; text-align: center;">
			                     					<td class="Pledged">Avg</td>
			                     					<td style="color: #55ffa9; font-size: 11px;">287.44</td> 
			                     				</tr>
			                     				<tr style="text-align: center;">
			                     					<td class="Pledged">W-avg</td>
			                     					<td style="color: #55ffa9; font-size: 11px;">285.23</td>
			                     				</tr>
			                     			</table>
										</td>
			                     		<td rowspan="3" valign="top" style="padding: 0px 10px 5px 50px;">
			                     			<table style="width: 60%; border: 2px solid #333c59;">
			                     				<tr style="border-bottom: 2px solid #333c59; text-align: center;">
			                     					<td class="Pledged">Avg</td>
			                     					<td class="Pledged">287.44</td> 
			                     				</tr>
			                     				<tr style="border-bottom: 2px solid #333c59; text-align: center;">
			                     					<td class="Pledged">Avg</td>
			                     					<td class="Pledged">287.44</td> 
			                     				</tr>
			                     				<tr style="text-align: center;">
			                     					<td class="Pledged">W-avg</td>
			                     					<td class="Pledged">285.23</td>
			                     				</tr>
			                     			</table>
										</td>
			                     		<td rowspan="4" valign="top" >
			                     			<div id="detail-container" style="height: 250px; width: 600px; margin: 0 auto;"></div>
			                     		</td>
			                     	</tr>
			                     	<tr> 
			                     		<td style="padding: 0px 10px 0px 25px;"><span class="total-shares">TOTAL PROCEEDS</span></td>
			                     		
			                     		
			                     		
			                     		<td></td>
			                     	</tr>
			                     	<tr>
			                     		<td style="padding: 0px 10px 0px 25px;"><span class="shares-font">$74,871,619</span></td>
			                     		
			                     		<td></td>
			                     		
			                     		<td></td>
			                     	</tr>
			                     	<tr>
			                     		<td>&nbsp;</td>
			                     		
			                     		<td></td>
			                     		<td></td>
			                     		<td></td>
			                     	</tr>                    
								</table>
						         			                     
				        
			            <div style="margin-top: 10px;">&nbsp;</div>
			           	<div class="row" >
			           		<div class="col-md-12">
							<table style="background-color:#202639; width: 100%"> 	
								<tr>
										<td class="tranche-heading">Date</td>
										<td class="tranche-heading">Type</td>
										<td class="tranche-heading">Shares</td>
										<td class="tranche-heading">Price</td>
										<td class="tranche-heading">Proceeds</td>
										<td class="tranche-heading">Implied Rate</td>
										<td class="tranche-heading">Benchmark($)50k</td>
										<td class="tranche-heading">LP</td>
										<td class="tranche-heading">Status</td>
										<td class="tranche-heading">Tran ID</td>

									</tr>
									<tr bgcolor="#131828">
										<td class="tranche-data-row" style="border-right: 2px solid #333c59;">01/02/2019</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">Initial Creation</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">25,000</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">285</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">7,125,000</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">6.6%</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">305.10</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">BTIG</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">Cleared</td>
										<td class="tranche-heading" >fgh65412hrGt</td>
									</tr>
									<tr bgcolor="#181e2e">
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">01/03/2019</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">Initial Creation</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">35,000</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">290</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">10,150,000</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">4.9%</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">305.10</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">MSUS</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">Cleared</td>
										<td class="tranche-heading" >ilij8951wad</td>

									</tr>
									<tr bgcolor="#131828">
										<td class="tranche-data-row" style="border-right: 2px solid #333c59;">01/04/2019</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">Initial Creation</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">25,000</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">285</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">7,125,000</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">6.6%</td>
										<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;">305.10</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">BTIG</td>
										<td class="tranche-heading" style="border-right: 2px solid #333c59;">Cleared</td>
										<td class="tranche-heading" >uad89102lwgo</td>
									</tr>
									<tr bgcolor="#202639"> 
										<td colspan="10">&nbsp;</td>
									</tr>

							</table>
							</div>
						</div>
				           
					</div>
				</div>
			</div>  
		</div>
	 </div>
</div>

<script src="../assets/js/jquery-1.10.2.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<!-- Morris Chart Dependencies -->
<script src="../js/highcharts6.js"></script>
<script src="../js/highcharts-more6.js"></script>
<script>
	
$(document).ready(function() {	
	
Highcharts.chart('container', {
	chart: {
     backgroundColor: '#181e2e',
     type: 'line'
  },
   title:{
    text:''
   },

    yAxis: {
        title: {
            text: ''
        }
    },
	 xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    legend: {
		itemStyle: {
                 color: '#FFFFFF'
              },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },

    series: [{
        name: 'Benchmark',
		color: '#5be2ff',
        data: [[Date.UTC(2018, 6, 25),275], [Date.UTC(2018, 7, 25),274], [Date.UTC(2018, 8, 25),281], [Date.UTC(2018, 9, 25),284], [Date.UTC(2018, 10, 25),290],[Date.UTC(2018, 11, 25),292] ]
    }, {
        name: '$(USD)',
		color: '#55ffa9',
        data: [[Date.UTC(2018, 6, 25),270], [Date.UTC(2018, 7, 25),274], [Date.UTC(2018, 8, 25),272], [Date.UTC(2018, 9, 25),278], [Date.UTC(2018, 10, 25),279], [Date.UTC(2018, 11, 25),286]]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
	
$(function() {
        // Create the chart
		 Highcharts.setOptions({
     		colors: ['#405166', '#50eda0']
    	});
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container2',
				 backgroundColor: '#131828',
                type: 'pie'
            },
            title: {
                text: ''
            },
			legend: {
				itemStyle: {
						 color: '#FFFFFF'
					  },
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom'
			},
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: [["Created",62],["Available",38]],
                size: '60%',
                innerSize: '60%',
                showInLegend:true,
                dataLabels: {
                    enabled: true,
					color: '#ffffff',
					style: {
						fontFamily: 'Roboto',
                    	fontSize: '18px' 
					},
					connectorColor: '#c8c8c8',
					formatter: function() {
                            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                    }
                }
            }]
        });
    });
	
	Highcharts.setOptions({
     		colors: ['#405166', '#50eda0']
    });
	Highcharts.chart('detail-container', {
	 
    chart: {
         backgroundColor: '#202639'
    },
	 title: {
                text: ''
    },
	legend: {
				itemStyle: {
						 color: '#FFFFFF'
					  },
				layout: 'horizontal',
				align: 'center',
				verticalAlign: 'bottom'
	},
    xAxis: {
        categories: ['1', '2', '3', '4']
    },
    yAxis: [{
		max: 400,
		min: 50,
       labels: {
		   format: '{value}k'
	   },
        title: {
            text: ''
        }
		
    }, {
        
        opposite: true,
        title: {
            text: ''
        },
		labels: {
			format: '{value}mt'
		}
    }],

    series: [{
        data: [55.8, 165.5, 236.4,300.1]
    }, {
        data: [23.0, 55.5, 96.3,140.3],
        yAxis: 1
    }]
});
	
	

});
	
</script>
    
</body>
</html>