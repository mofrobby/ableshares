/* global $ */
	/* this is js for financial calculations and prioritization */
// numeric-table2.js

 	var net = []; //container for net cash flows
	
	var finance = new Finance(); //instantiate javascript finance script
	
	
	$('.segmentData')
	.each(function(){
		var $cell = $(this),
			$calculation = $cell.data('calc'),
			$value = cleanMoney($cell.text());
	
		if ($value != null && $value != NaN) {
			if (parseFloat($value) < 0) {
				$cell.text('('+formatDollar(-round(parseFloat($value), 2), 2)+ ')');	
				$cell.addClass('negative');
			} else {
				$cell.text(formatDollar(round(parseFloat($value), 2), 2));						
				$cell.removeClass('negative');
			}
		} else {
			$cell.text($value);			
			
		}
	});
		
	$.fn.numericInputExample = function () {
		'use strict';
		//alert('calling numeric-table');
		// populate calculated fields
		populateCalculatedFields();
		
		// populate total column
		populateTotalColumn();

		//this section handles updates to any editable field within the table
		$('.inputSegment').on('change', function (evt) {
			var cell = $(this);
			populateCalculatedFields();
			
			populateTotalColumn();

			//update derivative Financial Analysis fields
			updateFinancialAnalysis();
			
			if (cell.html() != null && cell.html() != NaN) {
				if (parseFloat(cell.html()) < 0) {
					cell.html('('+formatDollar(-round(parseFloat(cell.html()), 2), 2)+ ')');	
					cell.addClass('negative');
				} else {
					cell.html(formatDollar(round(parseFloat(cell.html()), 2), 2));						
					cell.removeClass('negative');
				}
			}
			
		}).on('validate', function (evt, value) {
			var cell = $(this),
				column = cell.index(),
				validation = false;
			if (column === 0) {
				validation = !!value && value.trim().length > 0;
			} else {
				validation = !isNaN(parseFloat(value)) && isFinite(value);
			}
			return validation;
		});
		
		//initialTotal();
		
		return this;
	};

function populateCalculatedFields() {
	$('.calculatedSegment')
	.each(function(){
		var $cell = $(this),
			$calculation = $cell.data('calc'),
			$value = execute_calculation($calculation, $cell);
		
		if ($value != null && $value != NaN) {
			if (parseFloat($value) < 0) {
				$cell.text('('+formatDollar(-round(parseFloat($value), 2), 2)+ ')');	
				$cell.addClass('negative');
			} else {
				$cell.text(formatDollar(round(parseFloat($value), 2), 2));						
				$cell.removeClass('negative');
			}
		} else {
			$cell.text($value);			
			
		}
	});
}


function populateTotalColumn() {
	$('.rowTotal')
	.each(function(){
		var $totalCell = $(this),
			$totalRowValue = 0,
			$tomRow = $totalCell.data('tom_tr');
		
		$('#'+$tomRow+' td.segmentData')
		.each(function(){
			var $thisCell = $(this);

			$totalRowValue = $totalRowValue + parseFloat(cleanMoney($thisCell.text()));
		});
		
		if ($totalRowValue != null && $totalRowValue != NaN) {
			if (parseFloat($totalRowValue) < 0) {
				$totalCell.text('('+formatDollar(-round(parseFloat($totalRowValue), 2), 2)+ ')');	
				$totalCell.addClass('negative');
			} else {
				$totalCell.text(formatDollar(round(parseFloat($totalRowValue), 2), 2));						
				$totalCell.removeClass('negative');
			}
		} else {
			$totalCell.text($totalRowValue);			
			
		}
	});
}

function updateFinancialAnalysis(){
	//alert('update Financial Analysis ');
	$('#totalplncost').val(formatDollar(parseFloat(cleanMoney($('#basicCost td.rowTotal').text())), 2));
	$('#totalplndben').val(formatDollar(parseFloat(cleanMoney($('#basicBenefits td.rowTotal').text())), 2));
	//alert('Calacu NPV ');
	calcNPV(); //this comes first as it populates the net cash flow array
	//alert('Calacu IRR ');
	$('#irrfield').val(round(IRRCalc2(), 2));
	//alert('Calacu PBP ');
	$('#pbpfield').val(paybackCalc());
}



function execute_calculation(calculation, cell) {
	var $totalValue = 0;
	
	if (calculation.indexOf("sum(") == 0) {
		var $segments = calculation.slice(4, calculation.length-1).split(",");
		$segments.forEach(function($segment){
				var  $qualifiers = $segment.split(".");
				    
				$totalValue = $totalValue + parseFloat(retrieveSegmentValue(cell, 
																			$qualifiers[0].trim(), 
																			$qualifiers[1].trim(), 
																			$qualifiers[2].trim()));
		});
	} else if (calculation.indexOf("subtract(") == 0) {
		var $counter = 0,
			$segments = calculation.slice(9, calculation.length-1).split(",");
		
		$segments.forEach(function($segment){
				var  $qualifiers = $segment.split(".");
				  
				if ($counter == 0) {
					$totalValue = parseFloat(retrieveSegmentValue(cell, 
																 $qualifiers[0].trim(), 
																 $qualifiers[1].trim(), 
																 $qualifiers[2].trim()));					
				} else {
					
					$totalValue = $totalValue - parseFloat(retrieveSegmentValue(cell, 
																				$qualifiers[0].trim(), 
																				$qualifiers[1].trim(), 
																				$qualifiers[2].trim()));
				}
				$counter++;
		});
	} else if (calculation.indexOf("multiply(") == 0) {
		var $counter = 0,
			$segments = calculation.slice(9, calculation.length-1).split(",");
		
		$segments.forEach(function($segment){
				var  $qualifiers = $segment.split(".");
				  
				if ($counter == 0) {
					$totalValue = parseFloat(retrieveSegmentValue(cell, 
																 $qualifiers[0].trim(), 
																 $qualifiers[1].trim(), 
																 $qualifiers[2].trim()));					
				} else {
					
					$totalValue = $totalValue * parseFloat(retrieveSegmentValue(cell, 
																				$qualifiers[0].trim(), 
																				$qualifiers[1].trim(), 
																				$qualifiers[2].trim()));
				}
				$counter++;
		});
	} else if (calculation.indexOf("divide(") == 0) {
		var $counter = 0,
			$segments = calculation.slice(7, calculation.length-1).split(",");
		
		$segments.forEach(function($segment){
				var  $qualifiers = $segment.split(".");
				  
				if ($counter == 0) {
					$totalValue = parseFloat(retrieveSegmentValue(cell, 
																 $qualifiers[0].trim(), 
																 $qualifiers[1].trim(), 
																 $qualifiers[2].trim()));					
				} else {
					
					$totalValue = $totalValue / parseFloat(retrieveSegmentValue(cell, 
																				$qualifiers[0].trim(), 
																				$qualifiers[1].trim(), 
																				$qualifiers[2].trim()));
				}
				$counter++;
		});
	} else {
		$totalValue = eval(calculation);
	}
	
	return $totalValue;
}

function retrieveSegmentValue(cell, budgetState, tom, popSegment) {
	var $selectedState = "",
		$selectedTom = "",
		$selectedPop = "",
		$foundSegmentValue = "";
	
	if (budgetState == "this_state") {
		$selectedState = cell.data('bdgst');
	} else if (budgetState == "all") {
		$selectedState = "";
	} else {
		$selectedState = budgetState;
	} 
	
	if (tom == "this_tom") {
		$selectedTom = cell.data('tom');
	} else if (tom == "all") {
		$selectedTom = "";
	} else {
		$selectedTom = tom;
	} 
	
	if (popSegment == "this_segment") {
		$selectedPop = cell.data('pop');
	} else if (popSegment == "all") {
		$selectedPop = "";
	} else {
		$selectedPop = popSegment;
	} 
	
	$('.segmentData') 
	.each(function(){
		var $thisCell = $(this);
		
		if ((($selectedState == "") || ($selectedState == $thisCell.data('bdgst'))) &&
			(($selectedTom == "") || ($selectedTom == $thisCell.data('tom'))) &&
			(($selectedPop == "") || ($selectedPop == $thisCell.data('pop')))) {
				$foundSegmentValue = cleanMoney($thisCell.text());
				return false;
		}
	});
		
	return $foundSegmentValue;
}

function loadFinancialData() {
	data_set = { 
			  financialValuesJson: []
	};
	
	$('.inputSegment')
	.each(function(){
		var $cell = $(this),
			$finValueId = $cell.data('fin_value_id'),
			$finValue = cleanMoney($cell.text());
		
		if ($finValueId == null || $finValueId == '0') {
			data_set.financialValuesJson.push({
				typeOfMoneyId: $cell.data('tom_id'),
				budgetStateId: $cell.data('bdgst_id'),
				pOPSegmentId: $cell.data('pop_id'),
				financialValueAmount: $finValue
			});							
		} else {
			data_set.financialValuesJson.push({
				financialValueId: $finValueId,
				financialValueAmount: $finValue
			});				
		}
		
	});

	$('#popSegmentAccumulated').val(JSON.stringify(data_set.financialValuesJson));
	//alert($('#popSegmentAccumulated').val());
}

	
	function round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}
		
	function calcNPV(){
		net = []; //zero out the net cash values
		var rate = parseFloat($('#npvRate').val());  
		var disc = 0;
		var column;
		var total = 0;
		var element = $('#mainTable_Planned');
		var netcash = element.find(document.getElementById('basicNetCashFlow'));
		for (column = 1; column < netcash.children().size()-1; column++) {
			val1 = parseFloat(cleanMoney(netcash.children().eq(column).text())); //benefits
			//alert('val 1 '+val1);
			net.push(val1);
		}
		//apply formula for cash flows
		for(column = 0; column < net.length; column++){
			var t = column;
			disc += (net[column]/Math.pow((1+rate), column+1));
			//alert('disc '+disc);
		}
		var rnd = formatDollar(round(disc, 0) ,2); //rounded, formatted result of NPV
		//alert('rnd '+rnd);
		$('#npvfield').val(rnd); //set value to input field in Financial Analysis above
	}
	
	function IRRCalc2() {
		
		//var irrCalc = finance.IRR(net[0],net[1],net[2],net[3],net[4]);
		var irrCalc = finance.IRR.apply(this, net);
		//alert('irr rtn = '+irrCalc);
		if(!isNaN(parseFloat(irrCalc)) && isFinite(irrCalc)){
			return irrCalc;
		}
		else{
			return 0;
		}
	//min = 0.0;
	//max = 1.0;
	//var tries = 0;
	//do { 
	// guest = (min + max) / 2;
	// NPV = 0;
	 //alert('net length '+net.length);
	// for (var j=0; j<net.length; j++) {
	//       NPV += net[j]/Math.pow((1+guest),j);
	// }
	// if (NPV > 0) {
	//   min = guest;
	// }
	// else {
	//   max = guest;
	// }
	// tries++;
	//} while(Math.abs(NPV) > 0.01 || tries < 2000);
	//alert('tries ' +tries);
	//return guest * 100;
	}
	
	function paybackCalc(){
		//alert('calling payback');
		var num = net.length;
		//return round(finance.PP(num, net[0], net[1], net[2], net[3], net[4]), 2);
		var param = [];
		param[0] = num;
		for (i = 0; i < net.length; i++) {
			param[i+1] = net[i];
		}
		return round(finance.PP.apply(this, param), 2);
		
		
	}
			
	function formatDollar(num,addFloat) {
		var valueDollar = "",
			dollarFormatter = new Intl.NumberFormat('en-US', {
			  style: 'currency',
			  currency: 'USD',
			  minimumFractionDigits: addFloat
			  // the default value for minimumFractionDigits depends on the currency
			  // and is usually already 2
			});
		
		valueDollar = dollarFormatter.format(num);
		
	    return valueDollar;
	}		
	
	
	/**
	* A handler to create a json string out of the financial tab data
	*/
	function buildFinancialInput(){
		
		
		$('#fin_desc_notes').val()
		$('#fin_funding_status').val()
		$('#fin_rec_action').val()
		$('#fin_hurdle_rate').val()
		
		$('#txtFinancial').val();
		
	}

	function cleanMoney(value) {
		if (value != null) {
			value = value.replace(/[$,)]/g, '');
			value = value.replace('(', '-');
		}
		return value;
	}
	

	//instantiate the Financial Plan table widget and perform initial calculations which populate Total Planned Cost and Total Planned Benefits above
	$('#mainTable_Planned').editableTableWidget().numericInputExample().find('td:first').focus(); 
	$("#mainTable_Planned td:last-child").css({background:"#ccc"})
	//set up table widget to show an input field when selected
	$('#textAreaEditor').editableTableWidget({editor: $('<textarea>')});
	//initially set the values for the Financial Analysis
	$('#totalplncost').val(formatDollar(parseFloat(cleanMoney($('#basicCost td.rowTotal').text())), 2));
	$('#totalplndben').val(formatDollar(parseFloat(cleanMoney($('#basicBenefits td.rowTotal').text())), 2));
	calcNPV(); //this comes first as it populates the net cash flow array
	$('#irrfield').val(round(IRRCalc2(), 2));
	$('#pbpfield').val(paybackCalc());
