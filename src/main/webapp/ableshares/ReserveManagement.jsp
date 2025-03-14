<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Reserve Management</title>
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
    		<span class="Reserve-Ledger" style="margin-left: 15px;">Reserve Management</span>
		</div>
		<div class="row" style="margin-top: 30px;">
			<div class="col-xs-12 col-sm-8 col-md-4"> 
				<div class="form-group">
					<label class="date" style="margin-bottom: 8px; white-space:nowrap;">FILTER RESERVES BY</label>
						<select class="form-control Rectangle">
							<option>Type</option>
						</select>
				</div>
			</div>
			<div class="col-xs-12 col-sm-4 col-md-4"> 
				<div class="form-group">
					<label class="date" style="margin-bottom: 8px;">&nbsp</label>
					<select class="form-control Rectangle">
						<option>Status</option>
					</select>
				</div>
			</div>
			
		</div>
	</div>
    <div class="col-md-6" style="float: right; background-color:#181e2e;"> 
		<div class="row" style="float: right; margin-right: 25px; background-color:#181e2e;">
			<div id="container" style="height: 300px; background-color:#181e2e;"></div>
		</div>
	</div>
</div>


<div class="row" style="margin-top: 60px; margin-left: 25px;">
	<div class="col-md-12"> 
		<div class="row">
			<div style= "float: right;">
				<a href="ShowCreateNewProjectPageAS.do" target="_self" style="font-size: 14px; line-height: 2.5; text-decoration:none">
				<i class="fa fa-plus" title="Create New Project"></i> Add Project</a>
			</div>
		</div>
		<table style="background-color:#202639; width: 100%"> 
			<tr>
				<td class="tranche-heading">Reserve Type</td>
				<td class="tranche-heading">Producer</td>
				<td class="tranche-heading">Quantity</td>
				<td class="tranche-heading">Status</td>
				<td class="tranche-heading">Callable Date</td>
				<td class="tranche-heading">Actions</td>
			</tr>
			<tr bgcolor="#121726">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Brazil Potash</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">100,000,000 Mt</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Pledged</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">12/06/2022</td>
				<td class="tranche-heading"><a href="ReserveDetail.jsp" class="btn btn-primary btn-xs">Edit</a>
                    <a href="#" class="btn btn-danger btn-xs">Delete</a></td>
				
				
			</tr>
			<tr bgcolor="#202639">
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Nickel</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">GigaMetals</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">300,000,000 Mt</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Registered</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">N/A</td>
				<td class="tranche-heading" ><a href="#" class="btn btn-primary btn-xs">Edit</a>
                    <a href="#" class="btn btn-danger btn-xs">Delete</a></td>
			</tr>
			<tr bgcolor="#121726">
				<td class="tranche-data-row" style="border-right: 2px solid #333c59;">Oil</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Kara Oil & Gas</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">50,000,000 bbl</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Registered</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">N/A</td>
				<td class="tranche-heading" ><a href="#" class="btn btn-primary btn-xs">Edit</a>
                    <a href="#" class="btn btn-danger btn-xs">Delete</a></td>
			</tr>
			<tr bgcolor="#202639">
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Gold</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Kenville Gold</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">10,000,000 oz</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">Registered</td>
				<td class="tranche-heading" style="border-right: 2px solid #333c59;">N/A</td>
				<td class="tranche-heading" ><a href="#" class="btn btn-primary btn-xs">Edit</a>
                    <a href="#" class="btn btn-danger btn-xs">Delete</a></td>
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
	        type: 'pie'
	    },
	    title: {
	        text: ''
	    },
	    tooltip: {
	        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            dataLabels: {
	                enabled: true,
	                color: '#ffffff',
	                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
	                
	            }
	        }
	    },
	    series: [{
	        name: 'Reserves',
	        colorByPoint: true,
	        data: [{
	            name: 'Nickel',
	            y: 65.41,
	            sliced: true,
	            selected: true
	        }, {
	            name: 'Potash',
	            y: 22.19
	        }, {
	            name: 'Oil',
	            y: 11.23
	        }, {
	            name: 'Gold',
	            y: 1.24
	        }]
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