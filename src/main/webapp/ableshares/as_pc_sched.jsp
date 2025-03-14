<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Asset Production & Commitment Schedule</title>
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
   <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
   <style>
.Reserve-Ledger {
  width: 692px;
  height: 48px;
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
.Rectangle {
  width: 286px;
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
}
.Rectangle:focus {
  outline: none; 
}
.container {
	min-width: 300px;
	max-width: 600px;
	height: 200px;
	margin: 0 auto;
	background-color:#181e2e;
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



   </style>
</head>
<body style="background-color:#181e2e; margin-top: 45px; margin-right: 50px;">
<div class="row">
	<div class="col-md-6"> 
            	<span class="Reserve-Ledger" style="margin-top:45px">Asset Production & Commitment Schedule</span>
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

<div class="row" style="margin-top: 50px;">
	<div class="col-md-12"> 
		<span class="Tranche-1">Tranche 1</span>
			<table width: 100%" style="margin-top: 25px;">
				<tr>
					<td style="text-align: left; height: 84px; padding-top: 20px; background-color:#202639;" valign="top"><span class="Reserves-Summary" style="margin-left: 25px;">Physical</span>
						<table style="margin-top: 25px;">
							<tr>
								<td class="tranche-heading">Yr</td>
								<td class="tranche-heading">Proven Reserves</td>
								<td class="tranche-heading">Target Run Rate</td>
								<td class="tranche-heading">Actual Run Rate</td>
								<td class="tranche-heading">Difference</td>
								<td class="tranche-heading">Available for Redemtion</td>
								<td class="tranche-heading">Shortage/Surplus</td>
							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">1</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #5be2ff; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #5be2ff; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading"></td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">2</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">&nbsp;</td>
								<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #55ffa9;"></td>

							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">3</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #5be2ff; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #5be2ff; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading"></td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">4</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">&nbsp;</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">&nbsp;</td>
								<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #55ffa9;"></td>

							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">5</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">9,800,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">250,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">200,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">-(50,000)</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000</td>
								
								<td class="tranche-heading"></td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">6</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">9,050,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">750,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">750,000</td>
								<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;75,000</td>
								
								<td class="tranche-heading" style="color: #55ffa9;"></td>

							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">7</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">7,300,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">1,500,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">1,750,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">+250,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;175,000</td>
								
								<td class="tranche-heading"></td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">8</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">4,900,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">2,500,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">2,400,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">-(100,000)</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;240,000</td>
								
								<td class="tranche-heading" style="color: #55ffa9;"></td>

							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">9</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">2,400,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">2,500,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">2,500,000</td>
								<td class="tranche-heading" style="color: #5be2ff; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;250,000</td>
								
								<td class="tranche-heading"></td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">7,300,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">1,500,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">1,750,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">+250,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">10%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;175,000</td>
								
								<td class="tranche-heading" style="color: #55ffa9;"></td>

							</tr>
							
						</table>
					
					
					</td>
					<td style="width: 10px;">&nbsp;</td>
					<td style="text-align: left; height: 84px; padding-top: 20px; background-color:#202639;"  valign="top"><span class="Reserves-Summary" style="margin-left: 25px;">Shares</span>
						<table style="margin-top: 25px;">
							<tr>
								<td class="tranche-heading">Eligible</td>
								<td class="tranche-heading">Start Bal</td>
								<td class="tranche-heading">Available</td>
								<td class="tranche-heading">Created</td>
								<td class="tranche-heading">Redeemed</td>
								<td class="tranche-heading">Remaining</td>
								<td class="tranche-heading">Callable</td>
								<td class="tranche-heading">Net Shares Out</td>
							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">315,000</td>
								<td class="tranche-heading" style="color: #ff5353; border-right: 2px solid #333c59;">(2,500)</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">12,500</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">No</td>
								<td class="tranche-heading">312,500</td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">312,500</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">12,500</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">12,500</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">No</td>
								<td class="tranche-heading">325,000</td>

							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">No</td>
								<td class="tranche-heading">325,000</td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">&nbsp;</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">&nbsp;</td>
								<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="color: #55ffa9; border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">No</td>
								<td class="tranche-heading">325,000</td>

							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">20,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">(20,000)</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">20,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">Yes</td>
								<td class="tranche-heading">305,000</td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">305,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">20,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">&nbsp;</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">(50,000)</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">70,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">Yes</td>
								<td class="tranche-heading" >255,000</td>

							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">255,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">70,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">25,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">(75,000)</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">120,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">Yes</td>
								<td class="tranche-heading">205,000</td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">205,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">120,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">100,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">(12,500)</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">32,500</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">Yes</td>
								<td class="tranche-heading" >292,500</td>

							</tr>
							<tr bgcolor="#131828">
								<td class="tranche-data-row" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">292,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">32,500</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;"></td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">32,500</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">Yes</td>
								<td class="tranche-heading">292,500</td>
							</tr>
							<tr bgcolor="#202639">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">325,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">255,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">70,000</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">25,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">(75,000)</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;">120,000</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;">Yes</td>
								<td class="tranche-heading">205,000</td>

							</tr>
							
						</table>
					
					</td>
					<td style="width: 10px;">&nbsp;</td>
					<td style="height: 84px; padding-top: 20px; border: 2px solid #333c59;" valign="top"><span class="Reserves-Summary" style="margin-left: 25px;">&nbsp;</span>
						<table style="margin-top: 25px;">
							<tr>
								<td class="tranche-heading">Eligible vs Proven</td>
								<td class="tranche-heading">Created vs Eligible</td>
								<td class="tranche-heading">Created vs Proven</td>
							</tr>
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">96.2%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.1%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">100.0%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">100.0%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">96.2%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">100.0%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.1%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">78.5%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.1%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.6%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">90.0%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">2.8%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">6.6%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">96.2%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">3.3%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="color: #ff6464;border-right: 2px solid #333c59;border-top: 2px solid #333c59;">13.5%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">90.0%</td>
								<td class="tranche-heading" style="color: #ff6464; border-right: 2px solid #333c59;border-top: 2px solid #333c59;">12.2%</td>
							</tr> 
							<tr bgcolor="#181e2e">
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">4.5%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">90.0%</td>
								<td class="tranche-heading" style="border-right: 2px solid #333c59;border-top: 2px solid #333c59;">6.0%</td>
							</tr> 
						</table>
					</td>
				</tr>
				
			</table>
	</div>
</div>




<script src="../assets/js/jquery-1.10.2.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<!-- Morris Chart Dependencies -->


	

    
</body>
</html>