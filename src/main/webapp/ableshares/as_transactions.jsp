<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Reserve Transactions</title>
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
.container {
	min-width: 300px;
	max-width: 800px;
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

   </style>
</head>
<body style="background-color:#181e2e; margin-top: 45px; margin-right: 50px; margin-lft: 25px;">
<div class="row">
	<div class="col-md-6" style="vertical-align: top;"> 
   		<div class="row">
    		<span class="Reserve-Ledger" style="margin-left: 15px;">Transactions</span>
		</div>
    	<div class="row" style="margin-top: 20px;">
			<div class="col-md-8"> 
				<div class="form-group">
					<label class="date" style="margin-bottom: 8px;">DATE RANGE</label>
					<input type="text" class="form-control Rectangle-text" id="datetimes" name="datetimes" value="12/06/2018-12/11/2018"/>
				</div>
			</div>
		</div>
		<div class="row" style="margin-top: 30px;">
			<div class="col-xs-12 col-sm-8 col-md-4"> 
				<div class="form-group">
					<label class="date" style="margin-bottom: 8px; white-space:nowrap;">FILTER TRANSACTIONS BY</label>
						<select class="form-control Rectangle">
							<option>Type</option>
						</select>
				</div>
			</div>
			<div class="col-xs-12 col-sm-4 col-md-4"> 
				<div class="form-group">
					<label class="date" style="margin-bottom: 8px;">&nbsp</label>
					<select class="form-control Rectangle">
						<option>Unit Volume</option>
					</select>
				</div>
			</div>
			
		</div>
	</div>
    <div class="col-md-6" style="float: right;"> 
    	<div class="row" style="float: right; margin-right: 25px;">
    		<div class="col-md-3" style="white-space:nowrap;"><span class="Spot-Price-History">Median Confirmation Time</span></div>
			<div class="col-md-3" style="white-space:nowrap;"><span class="D-5D-1M-6M-1Y"><a>1D</a> | <a>5D</a> | <a>1M</a> | <a>6M</a> | <a>1Y</a></span></div>
		</div>
		<div class="row" style="float: right; margin-right: 25px;">
			<div id="container" style="height: 300px"></div>
		</div>
	</div>
</div>


<div class="row" style="margin-top: 60px; margin-left: 25px;">
	<div class="col-md-12"> 
		<table style="background-color:#202639; width: 100%"> 
			<tr>
				<td class="tranche-heading">ID</td>
				<td class="tranche-heading">Timestamp</td>
				<td class="tranche-heading">Type</td>
				<td class="tranche-heading">Project</td>
				<td class="tranche-heading">Lot#</td>
				<td class="tranche-heading">Buyer</td>
				<td class="tranche-heading">Seller</td>
				<td class="tranche-heading">Units(tons)</td>
				<td class="tranche-heading">Value ($USD)</td>
				
			</tr>
			<tr bgcolor="#121726">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/06/2018 13:45pm</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Digital Asset</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">44875</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">SLC Agricola</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">PDB</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000</td>
				<td class="tranche-heading">95,000</td>
				
			</tr>
			<tr bgcolor="#202639">
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/07/2018 14:21pm</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Pledged</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">33453</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Bezah Brasil</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">J&F Investments</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000</td>
				<td class="tranche-heading">95,000</td>
				
			</tr>
			<tr bgcolor="#121726">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920268dO01Lma0Wq</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/07/2018 10:29am</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Digital Asset</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">56643</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">SLC Agricola</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">PDB</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">7,250</td>
				<td class="tranche-heading">83,024</td>
				
			</tr>
			<tr bgcolor="#202639">
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a992011Hk7TopiMd</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/08/2018 12:51pm</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Sale</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">44655</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Campo Razon</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">J&F Investments</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000</td>
				<td class="tranche-heading">95,000</td>
				
			</tr>
			<tr bgcolor="#121726">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a992026U02Lmfy6s0q</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/08/2018 15:18pm</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Digital Asset</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">44875</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">AGP</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Copersucar</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000</td>
				<td class="tranche-heading">95,000</td>
				
			</tr>
			<tr bgcolor="#202639">
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a992026Zp28JgtIf25</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/08/2018 09:24am</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Pledged</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">33453</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Bezah Brasil</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">J&F Investments</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">7,000</td>
				<td class="tranche-heading">95,000</td>
				
			</tr>
			<tr bgcolor="#121726">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a992026d9wPfJ82Gte</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/09/2018 13:32pm</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Digital Asset</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">56643</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Aston Prabivas</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">PDB</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">15,500</td>
				<td class="tranche-heading">153,024</td>
				
			</tr>
			<tr bgcolor="#202639">
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a992026JDeo04Lar8Q</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/09/2018 11:36am</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Sale</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">44665</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Potassio Brasil</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">J&F Investments</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000</td>
				<td class="tranche-heading">95,000</td>
				
			</tr>
			<tr bgcolor="#121726">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a992026mnV72LdtoY3</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/10/2018 09:44am</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Digital Asset</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">44875</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Grupo Amagi</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">PDB</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">13,000</td>
				<td class="tranche-heading">105,000</td>
				
			</tr>
			<tr bgcolor="#202639">
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a99202688Xcv6R3kD2</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/10/2018 16:51pm</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Pledged</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">33453</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Fuente de Juventud</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">PDB</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">7,250</td>
				<td class="tranche-heading">83,000</td>
				
			</tr>
			<tr bgcolor="#121726">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a992026GG927Hj31FC</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/11/2018 17:11pm</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Digital Asset</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">56643</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">SLC Agricola</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Copersucar</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">8,100</td>
				<td class="tranche-heading">87,000</td>
				
			</tr>
			<tr bgcolor="#202639">
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920266Xge801Ors8</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/11/2018 08:21am</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Pledged</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">33453</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Bezah Brasil</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">J&F Investments</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">14,500</td>
				<td class="tranche-heading">145,000</td>
				
			</tr>
		</table>
	</div>
</div>

	



<script src="../assets/js/jquery-1.10.2.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../assets/js/moment.min.js"></script>
	<!-- Include Date Range Picker -->
<script type="text/javascript" src="../assets/js/daterangepicker.js"></script>

<script src="../js/highcharts6.js"></script>
<script src="../js/highcharts-more6.js"></script>


<!-- Morris Chart Dependencies -->
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
            text: 'Seconds'
        }
    },
	 xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            day: '%e. %b'
        },
        title: {
            text: 'Day'
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
        name: '(Avg. Transaction)',
		color: '#55ffa9',
        data: [[Date.UTC(2018, 11, 06),.02], [Date.UTC(2018, 11, 07),.04], [Date.UTC(2018, 11, 08),.03], [Date.UTC(2018, 11, 09),.05], [Date.UTC(2018, 11, 10),.02], [Date.UTC(2018, 11, 11),.04]]
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
  		$('input[name="datetimes"]').daterangepicker({
    		opens: 'left',
			startDate: moment().subtract(7, 'days'),
			endDate: moment()
  		}, function(start, end, label) {
    		console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
			});
		});
	
	  
	
});
	
</script>
	

    
</body>
</html>