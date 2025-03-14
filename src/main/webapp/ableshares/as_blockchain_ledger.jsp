<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Blockchain Ledger</title>
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
    <link href="../assets/css/timeline.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="../assets/css/daterangepicker.css" />
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
  width: 156px;
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
  width: 19px;
  height: 19px;
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
<body style="background-color:#181e2e; margin-top: 45px; margin-right: 50px;" onload="init()">
<div class="row">
	<div class="col-md-6" style="vertical-align: top;"> 
    	<div class="Reserve-Ledger">Blockchain Ledger</div>
    	<div class="Feed-View" style="margin-top: 40px;"><a href="javascript:alertMeth();" id="time-view">Timeline View</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="" id="feed_view" >Feed View</a></div>
    </div>
    <div class="col-md-6" style="float: right;"> 
    	<div class="row" style="float: right; margin-right: 25px;">
			<div class="col-md-1" style="margin-right: 15px;"><span><img src="../img/as_img/arrow-up.png"/></span></div> 
			<div class="col-md-2">
				<div class="integrity_rating">98%</div>
				<div class="Integrity-Rating" style="white-space: nowrap; text-align: center;">INTEGRITY RATING</div>
			</div>
    	</div>
	</div>
</div>
<div class="row" style="margin-top: 60px;">
	<div class="col-md-2"> 
		<div class="form-group">
			<label class="date">DATE RANGE</label>
			<input type="text" class="form-control Rectangle-text" id="datetimes" name="datetimes" />
		</div>
	</div>
</div>
<div class="row" style="margin-top: 30px;">
	<div class="col-md-2"> 
		<div class="form-group">
			<label class="date">FILTER TRANSACTIONS BY</label>
			<select class="form-control Rectangle">
				<option>Type</option>
			</select>
		</div>
	</div>
	<div class="col-md-2"> 
		<div class="form-group">
			<label class="date">&nbsp</label>
			<select class="form-control Rectangle">
				<option>Unit Volume</option>
			</select>
		</div>
	</div>
	<div class="col-md-2" style="margin-top: 15px;"> 
		<div class="form-group">
			<div class="checkbox">
				<label>
		     		<input class="form-control Rectangle-Copy-7" type="checkbox" name="syncCheck" id="syncCheck" />  <span class="Only-show-sync-issue" style="margin-top: 15px;">Only show sync issues </span>
		    	</label>
		  	</div>
		</div>
	</div>
</div>
<div class="row" style="margin-top: 60px; margin-left: 25px; background-color: #202639">

	<div id="chart" style="position: relative; width: 500px; height: 800px">

</div>

	



<script src="../assets/js/jquery-1.10.2.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../assets/js/moment.min.js"></script>
	<!-- Include Date Range Picker -->
<script type="text/javascript" src="../assets/js/daterangepicker.js"></script>
<script src="../js/InfiniteTLChart.js"></script>

<!-- Morris Chart Dependencies -->

<script>
	
	var time_view_select = false;
	var feed_view_select = false;
	
$("#time-view").on('click', function(e) {
	e.preventDefault();
	time_view_select = true;
	feed_view_select = false;
	$("#feed_view").css('border-bottom','');
	$("#feed_view").css('font-weight', '');
	$("#feed_view").css('color', '#b6b6b6');
	
	$(this).css('border-bottom', '1px solid #55ffa9');
	$(this).css('font-weight', 'bold');
	$(this).css('color', '#ffffff');
	$(this).css('text-decoration', 'none');
	//$( this ).addClass( "myClickState" );
	
});
	
$("#time-view").on({
    mouseenter: function () {
      	$("#time-view").css('font-weight','bold');
		$("#time-view").css('color', '#ffffff');
		$("#time-view").css('underline', 'none');
    },
    mouseleave: function () {
		if(!time_view_select){
        	$("#time-view").css('font-weight','');
			$("#time-view").css('color', '#b6b6b6');
    	}
	}
});
	
$("#feed_view").on({
    mouseenter: function () {
      	$("#feed_view").css('font-weight','bold');
		$("#feed_view").css('color', '#ffffff');
		$("#feed_view").css('underline', 'none');
    },
    mouseleave: function () {
		if(!feed_view_select){
        	$("#feed_view").css('font-weight','');
			$("#feed_view").css('color', '#b6b6b6');
    	}
	}
});
	
	$("#feed_view").on('click', function(e) {
	//alert('feed view');
	e.preventDefault();
	time_view_select = false;
	feed_view_select = true;
	$("#time-view").css('border-bottom','');
	$("#time-view").css('font-weight', '');
	$("#time-view").css('color', '#b6b6b6');
    
	$(this).css('border-bottom', '1px solid #55ffa9');
	$(this).css('font-weight', 'bold');
	$(this).css('color', '#ffffff');
	$(this).css('text-decoration', 'none');
	//$( this ).addClass( "myClickState" );
	
});

	function setClicked(){
		alert('clicked');
	}
	
	$(function() {
  		$('input[name="datetimes"]').daterangepicker({
    		opens: 'left'
  		}, function(start, end, label) {
    		console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
			});
		});
	
	  "use strict";
        var chart, div;

        function init() {
            window.onresize = onScreenResize;
            div = document.getElementById('chart');
            updateDivSize();
            chart = new InfiniteTLChart(div);
        }

        function updateDivSize() {
            div.style.width = window.innerWidth - 20 + 'px';
            div.style.height = window.innerHeight - (100 + getHeight('h1') + getHeight('h3')) + 'px';
        }

        function onScreenResize(e) {
            updateDivSize();
            chart.updateSize();
        }

        function getHeight(tagName) {
            var elements = document.getElementsByTagName(tagName);
            if (elements.length > 0) {
                return parseInt(elements[0].clientHeight, 10);
            } else {
                return NaN;
            }
        }
	
</script>
	

    
</body>
</html>