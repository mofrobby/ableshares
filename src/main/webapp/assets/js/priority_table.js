/* global $ */
	/* this is js for financial calculations and prioritization */
// priority_table.js

 	var net = []; //container for net cash flows
	
	var finance = new Finance(); //instantiate javascript finance script
	
	$.fn.getType = function(){ 
		return this[0].tagName == "INPUT" ? this[0].type.toLowerCase() : this[0].tagName.toLowerCase(); 
	}
	
	$.fn.createCalculatedFields = function () {
		'use strict';
		//alert('calling numeric-table');
		// populate calculated fields
		populateCalculatedFields();
		
		// populate total column
		populateTotalColumn();

		return this;
	};
	
  	$('.inputSegment')
	.each(function(){
		var $cell = $(this);
	
		var $fieldType = $cell.getType();
		if ($fieldType == 'select') {
			if ($cell.find(":selected") != null) {
				$cell.attr('data-cell_amount', $cell.find(":selected"));
				$cell.data('cell_amount', $cell.find(":selected"));
			}
		} else if ($fieldType == 'radio' || $fieldType == 'checkbox') {
			if ($cell.find(":checked") != null) {
				$cell.attr('data-cell_amount', $cell.find(":checked"));
				$cell.data('cell_amount', $cell.find(":checked"));
			}
		} else if ($fieldType == 'text' || $fieldType == 'textarea') {
			$cell.attr('data-cell_amount', $cell.val());
			$cell.data('cell_amount', $cell.val());
			
			if ($cell.data("cell_format") != null || $cell.val() != null) {
				formatElement($cell, $cell.val(), $cell.data("cell_format"));
			}
		} else {
			formatElement($cell, $cell.html(), $cell.data("cell_format"));			
		}
	});


	$('.inputSegment').on('change', function (evt) {
		var $cell = $(this);
		
		var $fieldType = $cell.getType();
		if ($fieldType == 'select') {
			if ($cell.find(":selected") != null) {
				$cell.attr('data-cell_amount', $cell.find(":selected"));
				$cell.data('cell_amount', $cell.find(":selected"));
			}
		} else if ($fieldType == 'radio' || $fieldType == 'checkbox') {
			if ($cell.find(":checked") != null) {
				$cell.attr('data-cell_amount', $cell.find(":checked"));
				$cell.data('cell_amount', $cell.find(":checked"));
			}
		} else if ($fieldType == 'text' || $fieldType == 'textarea' || $fieldType == 'hidden') {
			$cell.attr('data-cell_amount', $cell.val());
			$cell.data('cell_amount', $cell.val());
			if ($cell.data("cell_format") != null || $cell.val() != null) {
				formatElement($cell, $cell.val(), $cell.data("cell_format"));
			}
		} else {
			formatElement($cell, $cell.html(), $cell.data("cell_format"));			
		}
		
		if ($cell.hasClass('sqlReload')) {
	  		$found = getNextDynamicCell($cell.data('cell_eval_seq'));
			if ($found != null) {
				loadDynamicCell($found);
			}
		}

		populateCalculatedFields();
		
		populateTotalColumn();

		updateFinancialAnalysis();
		
	}).on('validate', function (evt, value) {
		var cell = $(this),
			valid = false,
		    $fieldType = cell.getType();

		if (cell.is(".notFormatted") || $fieldType == 'select' || $fieldType == 'radio' || $fieldType == 'checkbox' || $fieldType == 'input') {
			valid = true;
		} else {
				column = cell.index();
			if (column === 0) {
				valid = !!value && value.trim().length > 0;
			} else {
				valid = !isNaN(parseFloat(value)) && isFinite(value);
				if (valid) {
					cell.attr('data-cell_amount', value);
					cell.data('cell_amount', value);
	
				}
			}
		}
		return valid;
	});

	
function populateCalculatedFields() {
	$('.calculatedSegment')
	.each(function(){
		var $cell = $(this),
			$calculation = $cell.data('calc');
		$cell.text(execute_calculation($calculation, $cell));
		formatElement($cell, $cell.html(), $cell.data("cell_format"));

	});
	
	$('.calculatedField').sort(sort_td)
	.each(function(){
		var $thisCell = $(this),
			$value = "",
			$fieldType = "",
			$calculation = $thisCell.data('cell_js');
		
		$value = execute_calculation($calculation, $thisCell);
		
		$fieldType = $thisCell.getType();
		if ($fieldType == 'radio') {
			$("#"+$thisCell.attr("name")+$value).prop("checked", true).change();
			$thisCell.attr('data-cell_amount', $thisCell.find(":selected"));
			$thisCell.data('cell_amount', $thisCell.find(":selected"));
		} else if ($fieldType == 'checkbox') {
			$("#"+$thisCell.attr("name")+$value).prop("checked", true).change();
			$thisCell.attr('data-cell_amount', $thisCell.find(":checked"));
			$thisCell.data('cell_amount', $thisCell.find(":checked"));
		} else if ($fieldType == 'text' || $fieldType == 'textarea' || $fieldType == 'hidden'){
			$thisCell.val($value);
			$thisCell.attr('data-cell_amount', $thisCell.val());
			$thisCell.data('cell_amount', $thisCell.val());
			formatElement($thisCell, $thisCell.val(), $thisCell.data("cell_format"));
		} else {
			$thisCell.html($value);
			formatElement($thisCell, $thisCell.html(), $thisCell.data("cell_format"));			
		}
	});

	$('.prioritizationCell').sort(sort_td)
	.each(function(){
		var $cell = $(this),
			$result = '',
			$format = $cell.data('cell_format'),
			$calculation = $cell.data('cell_js');
		
		if ($calculation != null && $calculation != "") {
			$result = execute_calculation($calculation, $cell);
			//alert("populateCalculatedFields "+$result);
			
			if ($result == null) {
				$result = '';
			}

			formatElement($cell, $result, $format);
			
			if ($cell.attr('data-cell_value_extracted') == null || $cell.attr('data-cell_value_extracted') == "") {
				$cell.attr('data-cell_value_extracted', $result);
			}
		} else {
			formatElement($cell, $cell.html(), $format);
		}

	});
}

function formatElement($cell, $result, $format) {
	if ($cell.is(".notFormatted")) {
		return;
	}
	var $fieldType = $cell.getType();
	if ($fieldType == 'text' || $fieldType == 'textarea') {
		if ($format == "ICON" && $result != null && typeof($result) !== "boolean" && (/\S/.test($result))) {
			$cell.val('<img src="../img/' + $result + '"/>');
		} else if ($format == "ICON_AWESOME" && $result != null && typeof($result) !== "boolean" && (/\S/.test($result))) {
			$cell.val('<i class="fa fa-'+$result+'">');
		} else {
			if ($format == "MONEY" && $result != null && $result != NaN) {
				$result = cleanMoney($result);
				
				if (isValidNumber($result)) {
					if (parseFloat($result) < 0) {
						$cell.val('('+formatDollar(-round(parseFloat($result), 2), 2)+ ')');	
						$cell.addClass('negative');
					} else {
						$cell.val(formatDollar(round(parseFloat($result), 2), 2));						
						$cell.removeClass('negative');
					}
				}
			} else if ($format == "DECIMAL"  && $result != '' && $result != null && isValidNumber($result)) {
				$cell.val(round(parseFloat($result), 2));
			} else if ($format == "PERCENT" && $result != '' && $result != null && isValidNumber($result)) {
				$cell.val(round(parseFloat($result)*100, 2)+"%");
			} else if ($format == "INTEGER" && $result != '' && $result != null && isValidNumber($result)) {
				$cell.val(round(parseFloat($result), 0));
			} else if ($format == "DATE" && $result != '' && $result != null) {
				$cell.val(formatDate($result));
			} else {
				$cell.val($result);					
			}
			
			// Do this to set input value on the html
			$cell.attr('value', $cell.val());			
		}
	} else {
		if ($format == "ICON" && $result != null && typeof($result) !== "boolean"  && (/\S/.test($result))) {
			$cell.html('<img src="../img/' + $result + '"/>');
		} else if ($format == "ICON_AWESOME" && $result != null && typeof($result) !== "boolean"  && (/\S/.test($result))) {
			$cell.html('<i class="fa fa-'+$result+'">');
		} else {
			if ($format == "MONEY" && $result != null && $result != NaN) {
				$result = cleanMoney($result);
				
				if (isValidNumber($result)) {
					if (parseFloat($result) < 0) {
						$cell.html('('+formatDollar(-round(parseFloat($result), 2), 2)+ ')');	
						$cell.addClass('negative');
					} else {
						$cell.html(formatDollar(round(parseFloat($result), 2), 2));						
						$cell.removeClass('negative');
					}
				}
			} else if ($format == "DECIMAL" && $result != '' && $result != null && isValidNumber($result)) {
				$cell.html(round(parseFloat($result), 2));
			} else if ($format == "PERCENT" && $result != '' && $result != null && isValidNumber($result)) {
				$cell.html(round(parseFloat($result)*100, 2)+"%");
			} else if ($format == "INTEGER" && $result != '' && $result != null && isValidNumber($result)) {
				$cell.html(round(parseFloat($result), 0));
			} else if ($format == "DATE" && $result != '' && $result != null) {
				$cell.html(formatDate($result));
			} else {
				$cell.html($result);					
			}
		}		
	}
}

function sort_td(a, b) {
	if ($(b).data('cell_eval_seq') != null && $(a).data('cell_eval_seq') != null) {
	    return (Number($(b).data('cell_eval_seq')) < Number($(a).data('cell_eval_seq'))) ? 1 : -1;		
	} else {
		return 1;
	}
  }

function testIf (tdCell, cellAddress, comparisonOperator, value) {
	var $cell1Value = 0,
	    $cell2Value = 0,
	    $comparisonExpression = "",
	    $comparisonResult = false,
		$qualifiers = "";

	$qualifiers = cellAddress.split(".");

	$cell1Value = retrieveSegmentValue(tdCell, 
										$qualifiers[0].trim(), 
										$qualifiers[1].trim(), 
										$qualifiers[2].trim());
	if ($cell1Value == null) {
		return false;
	}
	
	if (value.trim().indexOf("value:") != -1) {
		$cell2Value = value.trim().substr(6);
	} else {
		$qualifiers = value.split(".");
		
		$cell2Value = retrieveSegmentValue(tdCell, 
											$qualifiers[0].trim(), 
											$qualifiers[1].trim(), 
											$qualifiers[2].trim());
		
		if ($cell2Value == null) {
			return false;
		}
	}
	
	if($.type($cell1Value) === "string") {
		$cell1Value = $cell1Value.trim();		
	}
	
	if($.type($cell2Value) === "string") {
		$cell2Value = $cell2Value.trim();		
	}
	
	if ($cell1Value == "") {
		if (comparisonOperator != "==" && comparisonOperator != "!=" ) {
			return false;
		}
		$cell1Value = "''";
	} 
	
	if ($cell2Value == "") {
		if (comparisonOperator != "==" && comparisonOperator != "!=" ) {
			return false;
		}
		$cell2Value = "''";
	} 
	
	$comparisonExpression = $cell1Value + comparisonOperator + $cell2Value;
	//alert('$comparisonExpression '+$comparisonExpression);									
	$comparisonResult = eval($comparisonExpression);
	
	return $comparisonResult;
}

function testAlternatives (tdCell, cellAddress, comparisonOperator, value, trueFunction, falseFunction) {
	var $cell1Value = 0,
	    $cell2Value = 0,
	    $comparisonExpression = "",
	    $comparisonResult = false,
		$qualifiers = "",
		$resultValue = null,
		$resultExpression = null;

	$qualifiers = cellAddress.split(".");

	$cell1Value = retrieveSegmentValue(tdCell, 
										$qualifiers[0].trim(), 
										$qualifiers[1].trim(), 
										$qualifiers[2].trim());
	if ($cell1Value == null) {
		return false;
	}
	
	if (value.trim().indexOf("value:") != -1) {
		$cell2Value = value.trim().substr(6);
	} else {
		$qualifiers = value.split(".");
		
		$cell2Value = retrieveSegmentValue(tdCell, 
											$qualifiers[0].trim(), 
											$qualifiers[1].trim(), 
											$qualifiers[2].trim());
		
		if ($cell2Value == null) {
			return false;
		}
	}
	
	if($.type($cell1Value) === "string") {
		$cell1Value = $cell1Value.trim();		
		$cell1Value = "'"+$cell1Value+"'";
	}
	
	if($.type($cell2Value) === "string") {
		$cell2Value = $cell2Value.trim();		
		$cell2Value = "'"+$cell2Value+"'";
	}
	
	if ($cell1Value == "") {
		if (comparisonOperator != "==" && comparisonOperator != "!=" ) {
			return false;
		}
		$cell1Value = "''";
	} 
	
	if ($cell2Value == "") {
		if (comparisonOperator != "==" && comparisonOperator != "!=" ) {
			return false;
		}
		$cell2Value = "''";
	} 
	
	$comparisonExpression = $cell1Value + comparisonOperator + $cell2Value;
	//alert('$comparisonExpression '+$comparisonExpression);									
	$comparisonResult = eval($comparisonExpression);
	
	if ($comparisonResult) {
		if (trueFunction.trim().indexOf("value:") == 0) {
			$resultValue = trueFunction.trim().substr(6);
		} else {
			$resultExpression = trueFunction;
		}
	} else {
		if (falseFunction.trim().indexOf("value:") == 0) {
			$resultValue = falseFunction.trim().substr(6);
		} else {
			$resultExpression = falseFunction;
		}
	}
	
	if ($resultValue == null && $resultExpression != null) {
		$resultValue = execute_calculation($resultExpression, tdCell);		
	}
	
	return $resultValue;
}


function dateRange(tdCell, cellAddress1, cellAddress2) {
	var $cell1Value = 0,
	    $cell2Value = 0,
	    $rangeResult = 0,
		$qualifiers = "";

	$qualifiers = cellAddress1.split(".");

	$cell1Value = retrieveSegmentValue(tdCell, 
										$qualifiers[0].trim(), 
										$qualifiers[1].trim(), 
										$qualifiers[2].trim());
	if (cellAddress2.trim().indexOf("value:") != -1) {
		$cell2Value = cellAddress2.trim().substr(6);
	} else {
		$qualifiers = cellAddress2.split(".");
		
		$cell2Value = retrieveSegmentValue(tdCell, 
											$qualifiers[0].trim(), 
											$qualifiers[1].trim(), 
											$qualifiers[2].trim());
	}
	
	$rangeResult = daysBetweenDates($cell1Value, $cell2Value);
	
	return $rangeResult;
}


function getField(tdCell, cellAddress) {
	var $cell1Value = 0,
		$qualifiers = "";

	$qualifiers = cellAddress.split(".");

	$cell1Value = retrieveSegmentValue(tdCell, 
										$qualifiers[0].trim(), 
										$qualifiers[1].trim(), 
										$qualifiers[2].trim());
	  
	return $cell1Value;
}

function splitDate(tdCell, cellAddress, part) {
	var $cell1Value = 0,
		$parts = [],
		$qualifiers = "";

	$qualifiers = cellAddress.split(".");

	$cell1Value = retrieveSegmentValue(tdCell, 
										$qualifiers[0].trim(), 
										$qualifiers[1].trim(), 
										$qualifiers[2].trim());
	  
	$parts = $cell1Value.trim().split("-");

	return $parts[part-1].trim();
}

function evaluateJs () { 
	
	$('.prioritizationCell').sort(sort_td)
	.each(function(){
		var $tdCell = $(this),
		    $jsTxt = $tdCell.data('cell_js');
		if ($jsTxt.startsWith("testIf")) {
			$tdCell.val(eval($jsTxt));			
		} else {
			execute_calculation($jsTxt, $tdCell);
		}
	});
	
}

function populateTotalColumn() {
	$('.rowTotal')
	.each(function(){
		var $totalCell = $(this),
			$totalRowValue = 0,
			$tomRow = $totalCell.data('tom_tr');
		
		$('#'+$tomRow+' td.inputSegment')
		.each(function(){
			var $thisCell = $(this);
			
			if (isValidNumber(cleanMoney($thisCell.text()))) {
				$totalRowValue = $totalRowValue + parseFloat(cleanMoney($thisCell.text()));
			}
			
		});
		
		$totalCell.text($totalRowValue);
		formatElement($totalCell, $totalCell.text(), $totalCell.data("cell_format"));

	});
}

function updateFinancialAnalysis(){
	//alert('update Financial Analysis ');
	if($('#totalplncost').length != 0)
		$('#totalplncost').val(formatDollar(parseFloat(cleanMoney($('#basicCost td.rowTotal').text())), 2));
	if($('#totalplndben').length != 0)
		$('#totalplndben').val(formatDollar(parseFloat(cleanMoney($('#basicBenefits td.rowTotal').text())), 2));
	//alert('Calculate NPV ');
	calcNPV(); //this comes first as it populates the net cash flow array
	//alert('Calculate IRR ');
	if($('#irrfield').length != 0)
		$('#irrfield').val(round(IRRCalc2(), 2));
	//alert('Calculate PBP ');
	if($('#pbpfield').length != 0)
		$('#pbpfield').val(paybackCalc());
}

function execute_calculation(calculation, cell) {
	var $totalValue = 0,
		$currentValue = "";
	try {
		if (calculation.indexOf("sum(") == 0) {
			var $segments = calculation.slice(4, calculation.length-1).split(",");
			$segments.forEach(function($segment){
					var  $qualifiers = $segment.split(".");
					    
					if ($segment.trim().indexOf("value:") != -1) {
						$totalValue = $totalValue + parseFloat($segment.trim().substr(6));
						
					} else {
						$currentValue = retrieveSegmentValue(cell, 
															$qualifiers[0].trim(), 
															$qualifiers[1].trim(), 
															$qualifiers[2].trim());
						if (isValidNumber($currentValue) || isValidNumber(cleanMoney($currentValue))) {
							$totalValue = $totalValue + parseFloat(cleanMoney($currentValue));							
						}
					}
			});
		} else if (calculation.indexOf("subtract(") == 0) {
			var $counter = 0,
				$segments = calculation.slice(9, calculation.length-1).split(",");
			
			$segments.forEach(function($segment){
					var  $qualifiers = $segment.split(".");
					  
					if ($counter == 0) {
						$currentValue = retrieveSegmentValue(cell, 
															$qualifiers[0].trim(), 
															$qualifiers[1].trim(), 
															$qualifiers[2].trim());
						if (isValidNumber($currentValue) || isValidNumber(cleanMoney($currentValue))) {
							$totalValue = parseFloat(cleanMoney($currentValue));							
						}
					} else {
						
						if ($segment.trim().indexOf("value:") != -1) {
							$totalValue = $totalValue - parseFloat($segment.trim().substr(6));
							
						} else {
							$currentValue = retrieveSegmentValue(cell, 
																$qualifiers[0].trim(), 
																$qualifiers[1].trim(), 
																$qualifiers[2].trim());
							if (isValidNumber($currentValue) || isValidNumber(cleanMoney($currentValue))) {
								$totalValue = $totalValue - parseFloat(cleanMoney($currentValue));							
							}
						}
					}
					$counter++;
			});
		} else if (calculation.indexOf("multiply(") == 0) {
			var $counter = 0,
				$segments = calculation.slice(9, calculation.length-1).split(",");
			
			$segments.forEach(function($segment){
					var  $qualifiers = $segment.split(".");
					  
					if ($counter == 0) {
						$currentValue = retrieveSegmentValue(cell, 
															$qualifiers[0].trim(), 
															$qualifiers[1].trim(), 
															$qualifiers[2].trim());
						if (isValidNumber($currentValue) || isValidNumber(cleanMoney($currentValue))) {
							$totalValue = parseFloat(cleanMoney($currentValue));							
						}
					} else {
						if ($segment.trim().indexOf("value:") != -1) {
							$totalValue = $totalValue * parseFloat($segment.trim().substr(6));
							
						} else {
						
							$currentValue = retrieveSegmentValue(cell, 
																$qualifiers[0].trim(), 
																$qualifiers[1].trim(), 
																$qualifiers[2].trim());
							if (isValidNumber($currentValue) || isValidNumber(cleanMoney($currentValue))) {
								$totalValue = $totalValue * parseFloat(cleanMoney($currentValue));							
							} else {
								$totalValue = 0;
							}
						}
					}
					$counter++;
			});
		} else if (calculation.indexOf("divide(") == 0) {
			var $counter = 0,
				$segments = calculation.slice(7, calculation.length-1).split(",");
			
			$segments.forEach(function($segment){
					var  $qualifiers = $segment.split(".");
					  
					if ($counter == 0) {
						$currentValue = retrieveSegmentValue(cell, 
															$qualifiers[0].trim(), 
															$qualifiers[1].trim(), 
															$qualifiers[2].trim());
						if (isValidNumber($currentValue) || isValidNumber(cleanMoney($currentValue))) {
							$totalValue = parseFloat(cleanMoney($currentValue));							
						}
					} else {
						if ($segment.trim().indexOf("value:") != -1) {
							$totalValue = $totalValue / parseFloat($segment.trim().substr(6));
							
						} else {
							$currentValue = retrieveSegmentValue(cell, 
																$qualifiers[0].trim(), 
																$qualifiers[1].trim(), 
																$qualifiers[2].trim());
							if (isValidNumber($currentValue) || isValidNumber(cleanMoney($currentValue))) {
								$totalValue = $totalValue / parseFloat(cleanMoney($currentValue));							
							} else {
								$totalValue = NaN;
							}
						}
					}
					$counter++;
			});
		} else {
			//alert (calculation);
			var $tdCell = cell;
			$totalValue = eval(calculation);
		}
	}
	catch(err) {
	    alert(calculation +": "+err.message);
	}

	return $totalValue;
}

function avgCol(tdCell, valueArrayDesc) {
	var $valueArray = [],
	    $counter = 0,
		$qualifiers = valueArrayDesc.split("."),
		$tempVal1 = 0,
		row,
		$total = 0;
	
	$valueArray = retrieveSegmentValue(tdCell, 
									   $qualifiers[0].trim(), 
									   $qualifiers[1].trim(), 
									   $qualifiers[2].trim());
		
	for (row = 0; row < $valueArray.length; row++) {
		if (isValidNumber($valueArray[row]) || isValidNumber(cleanMoney($valueArray[row]))) {
			$tempVal1 = parseFloat(cleanMoney($valueArray[row]));	
			$counter++;
			$total = $total + $tempVal1;
		}
	}
			
	if ($counter > 0) {
		$total = $total/$counter;			
	}
	
	tdCell.val($total); 
	tdCell.attr('data-cell_amount', $total);
	tdCell.data('cell_amount', $total);

	return $total;
}

function accumulateRow(tdCell, valueArrayDesc) {
	var $valueArray = [],
		$qualifiers = valueArrayDesc.split("."),
		$tempVal1 = 0,
		$count = 0,
		$total = 0,
		$col = 0;
	
	$col = tdCell.parent().children().index(tdCell);
	//alert($col);
		//var row = $(this).parent().parent().children().index($(this).parent());

	$valueArray = retrieveSegmentValue(tdCell, 
									   $qualifiers[0].trim(), 
									   $qualifiers[1].trim(), 
									   $qualifiers[2].trim());
	//alert($valueArray);
		
	for ($count = 0; $count < $col; $count++) {
		if (isValidNumber($valueArray[$count]) || isValidNumber(cleanMoney($valueArray[$count]))) {
			$tempVal1 = parseFloat(cleanMoney($valueArray[$count]));	
			$total = $total + $tempVal1;
		}
	}
			
	tdCell.val($total); 
	tdCell.attr('data-cell_amount', $total);
	tdCell.data('cell_amount', $total);

	return $total;
}

function sumCol(tdCell, valueArrayDesc) {
	var $valueArray = [],
		$qualifiers = valueArrayDesc.split("."),
		$tempVal1 = 0,
		row,
		$total = 0;
	
	$valueArray = retrieveSegmentValue(tdCell, 
									   $qualifiers[0].trim(), 
									   $qualifiers[1].trim(), 
									   $qualifiers[2].trim());
		
	for (row = 0; row < $valueArray.length; row++) {
		if (isValidNumber(cleanMoney($valueArray[row]))) {
			$tempVal1 = parseFloat(cleanMoney($valueArray[row]));
			$total = $total + $tempVal1;
		}
	}
			
	tdCell.val($total); 
	tdCell.attr('data-cell_amount', $total);
	tdCell.data('cell_amount', $total);

	return $total;
}

function maxCol(tdCell, valueArrayDesc) {
	var $valueArray = [],
		$qualifiers = valueArrayDesc.split("."),
		$tempVal1 = 0,
		row,
		$maxVal = 0;
	
	$valueArray = retrieveSegmentValue(tdCell, 
									   $qualifiers[0].trim(), 
									   $qualifiers[1].trim(), 
									   $qualifiers[2].trim());
		//alert($valueArray);
	for (row = 0; row < $valueArray.length; row++) {
		if ($valueArray[row] != null) {
			if (tdCell.data('cell_format') == "DATE") {
				$tempVal1 = new Date($valueArray[row]);
			} else if (isValidNumber($valueArray[row]) || isValidNumber(cleanMoney($valueArray[row]))) {
					$tempVal1 = parseFloat(cleanMoney($valueArray[row]));	
			}
			if ($tempVal1 > $maxVal) {
				$maxVal = $tempVal1;
			}
		}
	}
			
	tdCell.val($maxVal); 
	tdCell.attr('data-cell_amount', $maxVal);
	tdCell.data('cell_amount', $maxVal);

	return $maxVal;
}

function minCol(tdCell, valueArrayDesc) {
	var $valueArray = [],
		$qualifiers = valueArrayDesc.split("."),
		$tempVal1 = 0,
		row,
		$minVal = 0;
	
	$valueArray = retrieveSegmentValue(tdCell, 
									   $qualifiers[0].trim(), 
									   $qualifiers[1].trim(), 
									   $qualifiers[2].trim());
		
	for (row = 0; row < $valueArray.length; row++) {
		if ($valueArray[row] != null) {
			if (tdCell.data('cell_format') == "DATE") {
				$tempVal1 = new Date($valueArray[row]);
			} else if (isValidNumber($valueArray[row]) || isValidNumber(cleanMoney($valueArray[row]))) {
				$tempVal1 = parseFloat(cleanMoney($valueArray[row]));	
			}
			if ($tempVal1 < $minVal) {
				$minVal = $tempVal1;
			}
		}
	}
			
	tdCell.val($minVal); 
	tdCell.attr('data-cell_amount', $minVal);
	tdCell.data('cell_amount', $minVal);

	return $minVal;
}

function get(tdCell, cellAddress) {
	var $cell1ValueArray = [],
	    $cell2Value = 0,
	    $comparisonExpression = "",
	    $comparisonResult = false,
		$qualifiers = "",
	    $counter = 0,
		row,
		$tempVal1;

	$qualifiers = cellAddress.split(".");

	$cell1ValueArray = retrieveSegmentValue(tdCell, 
										$qualifiers[0].trim(), 
										$qualifiers[1].trim(), 
										$qualifiers[2].trim());
		
	return $cell1ValueArray;
}

function countIf (tdCell, cellAddress, comparisonOperator, value) {
	var $cell1ValueArray = [],
	    $cell2Value = 0,
	    $comparisonExpression = "",
	    $comparisonResult = false,
		$qualifiers = "",
	    $counter = 0,
		row,
		$tempVal1;

	$qualifiers = cellAddress.split(".");

	$cell1ValueArray = retrieveSegmentValue(tdCell, 
										$qualifiers[0].trim(), 
										$qualifiers[1].trim(), 
										$qualifiers[2].trim());
	
	if (value.trim().indexOf("value:") != -1) {
		$cell2Value = value.trim().substr(6);
	} else {
		$qualifiers = value.split(".");
		
		$cell2Value = retrieveSegmentValue(tdCell, 
											$qualifiers[0].trim(), 
											$qualifiers[1].trim(), 
											$qualifiers[2].trim());
		
	}
	  
	if (!isValidNumber($cell2Value) && !isValidNumber(cleanMoney($cell2Value))) {
		return false;
	}
	
	for (row = 0; row < $cell1ValueArray.length; row++) {
		if (isValidNumber($cell1ValueArray[row]) || isValidNumber(cleanMoney($cell1ValueArray[row]))) {
			$tempVal1 = parseFloat(cleanMoney($cell1ValueArray[row]));	
			$comparisonExpression = $tempVal1 + comparisonOperator + cleanMoney($cell2Value);
			//alert('$comparisonExpression '+$comparisonExpression);									
			$comparisonResult = eval($comparisonExpression);
			if ($comparisonResult) {
				$counter++;			
			}
			
		}
	}
	
	return $counter;
}


function NPV(tdCell, npvRate, costsArray, benefitsArray) {
	var $rateValue = 0,
		$basicNetCashFlow = [],
	    $counter = 0,
		$costsValue = [],
		$benefitsValue = [],
		$qualifiers = npvRate.split("."),
		tempVal1 = 0,
		tempVal2 = 0,
		rate = 0,
		disc = 0,
		column,
		total = 0;
	 

		$rateValue = retrieveSegmentValue(tdCell, 
									 $qualifiers[0].trim(), 
									 $qualifiers[1].trim(), 
									 $qualifiers[2].trim());
		if (!isValidNumber($rateValue)) {
			return NaN;
		}
		
		rate = parseFloat($rateValue); //rate
		
		$qualifiers = costsArray.split(".");
		$costsValue = retrieveSegmentValue(tdCell, 
										 $qualifiers[0].trim(), 
										 $qualifiers[1].trim(), 
										 $qualifiers[2].trim());
		
		$qualifiers = benefitsArray.split(".");
		$benefitsValue = retrieveSegmentValue(tdCell, 
										 $qualifiers[0].trim(), 
										 $qualifiers[1].trim(), 
										 $qualifiers[2].trim());

		for (column = 1; column <= $costsValue.length; column++) {
			if (isValidNumber(cleanMoney($benefitsValue[column-1]))) {
				tempVal1 = parseFloat(cleanMoney($benefitsValue[column-1])); //benefits
			} else {
				tempVal1 = 0;
			}
			if (isValidNumber(cleanMoney($costsValue[column-1]))) {
				tempVal2 = parseFloat(cleanMoney($costsValue[column-1])); //cost
			} else {
				tempVal2 = 0;
			}
			tempVal1 = tempVal1-tempVal2;
			$basicNetCashFlow.push(tempVal1);
			disc += ($basicNetCashFlow[column-1]/Math.pow((1+rate), column));
		}
		
		var rnd = round(disc, 0); //rounded, formatted result of NPV

		tdCell.val(rnd); //set value to input field in Financial Analysis above
		tdCell.attr('data-cell_amount', rnd);
		tdCell.data('cell_amount', rnd);
		return rnd;
}

// Returns an array of cells within a specific column
$.fn.column = function(i) {
  return $("tr td:nth-child(" + i + ")", this);
};

//Get value Descriptor3 of the Descriptor2 row on the same column as cell
function retrieveConstantColumn(cell, descriptor2, descriptor3) {
	var $selectedCell = "",
		$selectedAttribute = "",
		$col = [],
		$foundSegmentValue = "";
	
	$selectedCell = descriptor2;
	$selectedAttribute = descriptor3;
	

	// Using that function we can now select all the cells in the first column
	$col = cell.closest("table").column(cell.index()+1);

	// And then iterate over each one and do something
	$col.each(function() {
		var $thisCell = $(this);
		
		if ($selectedCell == $thisCell.data('cell_name'))  {
			$foundSegmentValue = $thisCell.data("cell_"+$selectedAttribute);
			return false;
		}
	});
	
/*	
	cell.closest("tr").find("td")
	.each(function () { 
		var $thisCell = $(this);
		
		if ($selectedCell == $thisCell.data('cell_name'))  {
				$foundSegmentValue = $thisCell.data("cell_"+$selectedAttribute);
				return false;
		}
	});
	*/	
	return $foundSegmentValue;

}

//Get value Descriptor3 of the Descriptor2 column on the same row as cell
function retrieveConstantRow(cell, descriptor2, descriptor3) {
	var $selectedCell = "",
		$selectedAttribute = "",
		$foundSegmentValue = "";
	
	$selectedCell = descriptor2;
	$selectedAttribute = descriptor3;
	
	cell.closest("tr").find("td")
	.each(function () { 
		var $thisCell = $(this);
		
		if ($selectedCell == $thisCell.data('cell_name'))  {
				$foundSegmentValue = $thisCell.data("cell_"+$selectedAttribute);
				return false;
		}
	});
		
	return $foundSegmentValue;

}

//Get array of value Descriptor3 of the Descriptor2 cells on a row of the same table as cell
function retrieveAllColumns(cell, descriptor2, descriptor3) {
	var $selectedCell = "",
		$selectedAttribute = "",
		$foundSegmentValue = [];
	
	$selectedCell = descriptor2;
	$selectedAttribute = descriptor3;
	
	cell.closest("table").find("tr")
	.each(function () { 
		var $thisTr = $(this);
		// check the second td because the first is the title
		if ($thisTr.find("td:eq(1)").data('cell_name') == $selectedCell) {
			$thisTr.find("td")
			.each(function () { 
				var $thisCell = $(this);
				if ($thisCell.data('cell_name') == $selectedCell) {
					$foundSegmentValue.push($thisCell.data("cell_"+$selectedAttribute));
				}
			});	
		}
	});
		
	return $foundSegmentValue;
}

//Get array of value Descriptor3 of the Descriptor2_somevalue column on the same row as cell - 
// used to add multiple years/months of descriptor2
function retrieveAllConstantRows(cell, descriptor2, descriptor3) {
	var $selectedCell = "",
		$selectedAttribute = "",
		$foundSegmentValue = [];
	
	$selectedCell = descriptor2;
	$selectedAttribute = descriptor3;
	
	cell.closest("tr").find("td").sort(sort_td)
	.each(function () { 
		var $thisCell = $(this);
		
		if ($thisCell.data('cell_name').includes($selectedCell+'_'))  {
				$foundSegmentValue.push($thisCell.data("cell_"+$selectedAttribute));
		}
	});
		
	return $foundSegmentValue;

}

//Get array of value Descriptor3 of the Descriptor2 element - 
//used to add multiple years/months of descriptor2
function retrieveAllConstantFields(descriptor2, descriptor3) {
	var $selectedCell = "",
		$fieldType = "",
		$selectedAttribute = "",
		$foundSegmentValue = [];
	
	$selectedCell = descriptor2;
	$selectedAttribute = descriptor3;

	$('.inputSegment') 
	.each(function(){
		var $thisCell = $(this);
		
		if ($selectedCell == $thisCell.attr('name'))  {
			$fieldType = $thisCell.getType();
			if ($fieldType == 'select') {
				if ($thisCell.find(":selected") != null) {
					if ($selectedAttribute == "value") {
						$foundSegmentValue.push($thisCell.find(":selected").val());
					} else if ($selectedAttribute == "text") {
							$foundSegmentValue.push($thisCell.find(":selected").text());
					} else {
						$foundSegmentValue.push($thisCell.find(":selected").data($selectedAttribute));
					}
					//alert($foundSegmentValue);
				}
			} else if ($fieldType == 'radio') {
				if ($thisCell.is(":checked")) {
					if ($selectedAttribute == "value") {
						$foundSegmentValue.push($thisCell.val());
					} else if ($selectedAttribute == "text") {
						$foundSegmentValue.push($thisCell.parent('label').text());
					} else {
						$foundSegmentValue.push($thisCell.data($selectedAttribute));
					}
				}
			} else if ($fieldType == 'checkbox') {
				if ($thisCell.is(":checked")) {
					if ($selectedAttribute == "value") {
						$foundSegmentValue.push($thisCell.val());
					} else if ($selectedAttribute == "text") {
						$foundSegmentValue.push($thisCell.parent('label').text());
					} else {
						$foundSegmentValue.push($thisCell.data($selectedAttribute));
					}
				}
			} else {
				if ($selectedAttribute == "value") {
					$foundSegmentValue.push($thisCell.val());
				} else if ($selectedAttribute == "text") {
						$foundSegmentValue.push($thisCell.text());
				} else {
					$foundSegmentValue.push($thisCell.data($selectedAttribute));
				}
			}
		} else if ($selectedCell == $thisCell.data('cell_name'))  {
			if ($selectedAttribute == "value" || $selectedAttribute == "text") {
				// this is a td, so get the text
				$foundSegmentValue.push($thisCell.text());
			} else {
				$foundSegmentValue.push($thisCell.data($selectedAttribute));
			}
		}
	});
		
	
	$.each($foundSegmentValue, function(){
		var $thisCell = $(this);

		if ($thisCell != null && $.type($thisCell) === "string") {
			$thisCell = $thisCell.trim();
		}
	});
	
	return $foundSegmentValue;
}

//Get array of value Descriptor3 of the Descriptor2 column on a tr that has the same parent_id as the tr of the cell, 
// and has a proj_id - used to find max, min, or avg of column
function retrieveAllConstantColumns(cell, descriptor2, descriptor3) {
	var $selectedCell = "",
		$selectedAttribute = "",
		$parentId = "";
		$foundSegmentValue = [];
	
	$selectedCell = descriptor2;
	$selectedAttribute = descriptor3;
	
	$parentId = cell.closest("tr").data('parent_id');
	
	cell.closest("table").find("tr")
	.each(function () { 
		var $thisRow = $(this);
		if ($thisRow.data('parent_id') == $parentId && $thisRow.data('proj_id') != 0) {
			$thisRow.find("td")
			.each(function () { 
				var $thisCell = $(this);
				
				if ($thisCell.data('cell_name') == $selectedCell)  {
					$foundSegmentValue.push($thisCell.data("cell_"+$selectedAttribute));
				}
			});
		}
	});
		
	return $foundSegmentValue;

}

//Get value Descriptor3 of the Descriptor2 cell of all fields with class "inputSegment"
function retrieveConstant(cell, descriptor2, descriptor3) {
	var $selectedCell = "",
	$selectedAttribute = "",
	$foundSegmentValue = "";

	$selectedCell = descriptor2;
	$selectedAttribute = descriptor3;
	
	$('.inputSegment') 
	.each(function(){
		var $thisCell = $(this);
		
		if ($selectedCell == $thisCell.data('cell_name'))  {
			if ($selectedAttribute == "value") {
				$foundSegmentValue = $thisCell.val();
			} else {
				$foundSegmentValue = $thisCell.data($selectedAttribute);				
			}
			return false;
		}
	});
		
	return $foundSegmentValue;

}

//Get value Descriptor3 of the Descriptor2 cell of all fields with class "inputSegment"
function retrieveConstantField(descriptor2, descriptor3) {
	var $selectedCell = "",
	$fieldType = "",
	$selectedAttribute = "",
	$foundSegmentValue = "";

	$selectedCell = descriptor2;
	$selectedAttribute = descriptor3;
	
	$('.inputSegment') 
	.each(function(){
		var $thisCell = $(this);
		
		if ($selectedCell == $thisCell.attr('name'))  {
			$fieldType = $thisCell.getType();
			if ($fieldType == 'select') {
				if ($thisCell.find(":selected") != null) {
					if ($selectedAttribute == "value") {
						$foundSegmentValue = $thisCell.find(":selected").val();
					} else if ($selectedAttribute == "text") {
						$foundSegmentValue = $thisCell.find(":selected").text();
					} else {
						$foundSegmentValue = $thisCell.find(":selected").data($selectedAttribute);
					}
					//alert($foundSegmentValue);
				}
				return false;
			} else if ($fieldType == 'radio') {
				if ($thisCell.is(":checked")) {
					if ($selectedAttribute == "value") {
						$foundSegmentValue = $thisCell.val();
					} else if ($selectedAttribute == "text") {
						$foundSegmentValue = $thisCell.parent('label').text();
					} else {
						$foundSegmentValue = $thisCell.data($selectedAttribute);
					}
					return false;
				}
			} else if ($fieldType == 'checkbox') {
				if ($thisCell.is(":checked")) {
					if ($selectedAttribute == "value") {
						$foundSegmentValue = $thisCell.val();
					} else if ($selectedAttribute == "text") {
						$foundSegmentValue = $thisCell.parent('label').text();
					} else {
						$foundSegmentValue = $thisCell.data($selectedAttribute);
					}
					return false;
				}
			} else {
				if ($selectedAttribute == "value") {
					$foundSegmentValue = $thisCell.val();
				} else if ($selectedAttribute == "text") {
					$foundSegmentValue = $thisCell.text();
				} else {
					$foundSegmentValue = $thisCell.data($selectedAttribute);
				}
				return false;
			}
		} else if ($selectedCell == $thisCell.data('cell_name'))  {
			if ($selectedAttribute == "value" || $selectedAttribute == "text") {
				// this is a td, so get the text
				$foundSegmentValue = $thisCell.text();
			} else {
				$foundSegmentValue = $thisCell.data($selectedAttribute);
			}
			return false;
		}
	});
		
	if ($foundSegmentValue != null && $.type($foundSegmentValue) === "string") {
		$foundSegmentValue = $foundSegmentValue.trim();
	}
	
	return $foundSegmentValue;
}

function retrieveSegmentValue(cell, descriptor1, descriptor2, descriptor3) {
	var $selectedState = "",
		$selectedTom = "",
		$selectedPop = "",
		$foundSegmentValue = "";
	try {
		if (descriptor1 == "this_state") {
			$selectedState = cell.data('bdgst');
		} else if (descriptor1 == "constant") {
			//Get value Descriptor3 of the Descriptor2 cell of all td with class "inputSegment"
			return retrieveConstant(cell, descriptor2, descriptor3);
		} else if (descriptor1 == "field") {
			//Get value Descriptor3 of the element with id Descriptor2 of all fields with class "inputSegment"
			return retrieveConstantField(descriptor2, descriptor3);
		} else if (descriptor1 == "field_all") {
			//Get array of value Descriptor3 of the element with name Descriptor2 of all fields with class "inputSegment"
			return retrieveAllConstantFields(descriptor2, descriptor3);
		} else if (descriptor1 == "constant_row") {
			// Get value Descriptor3 of the Descriptor2 column on the same row as cell
			return retrieveConstantRow(cell, descriptor2, descriptor3);
		} else if (descriptor1 == "constant_column") {
			// Get value Descriptor3 of the Descriptor2 row on the same column as cell
			return retrieveConstantColumn(cell, descriptor2, descriptor3);
		} else if (descriptor1 == "constant_row_all") {
			//Get array of value Descriptor3 of the Descriptor2_somevalue column on the same row as cell - 
			// used to add multiple years/months of descriptor2
			return retrieveAllConstantRows(cell, descriptor2, descriptor3);
		} else if (descriptor1 == "constant_column_all") {
			//Get array of value Descriptor3 of the Descriptor2 column on a tr that has the same parent_id as the tr of the cell, 
			// and has a proj_id - used to find max, min, or avg of column
			return retrieveAllConstantColumns(cell, descriptor2, descriptor3);
		} else if (descriptor1 == "all_columns") {
			//Get array of value Descriptor3 of the Descriptor2 cells on a row of the same table as cell
			return retrieveAllColumns(cell, descriptor2, descriptor3);
		} else if (descriptor1 == "all") {
			$selectedState = "";
		} else {
			$selectedState = descriptor1;
		} 
		
		if (descriptor2 == "this_tom") {
			$selectedTom = cell.data('tom');
		} else if (descriptor2 == "all") {
			$selectedTom = "";
		} else {
			$selectedTom = descriptor2;
		} 
		
		if (descriptor3 == "this_segment") {
			$selectedPop = cell.data('pop');
		} else if (descriptor3 == "all") {
			$selectedPop = "";
		} else {
			$selectedPop = descriptor3;
		} 
		
		$('.inputSegment') 
		.each(function(){
			var $thisCell = $(this);
			
			if ((($selectedState == "") || ($selectedState == $thisCell.data('bdgst'))) &&
				(($selectedTom == "") || ($selectedTom == $thisCell.data('tom'))) &&
				(($selectedPop == "") || ($selectedPop == $thisCell.data('pop')))) {
					$foundSegmentValue = cleanMoney($thisCell.text());
					return false;
			}
		});
	}
	catch(err) {
	    alert(descriptor1+"."+descriptor2+"."+descriptor3+": "+err.message);
	}

	return $foundSegmentValue;
}

function loadFinancialData() {
	data_set = { 
			  financialValuesJson: []
	};
	
	$('.inputData')
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

	// check to see if element exists
	if($("#popSegmentAccumulated").length != 0) {
		$('#popSegmentAccumulated').val(JSON.stringify(data_set.financialValuesJson));
		//alert($('#popSegmentAccumulated').val());		
	}
}

	
	function round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}
		
	// change this later to be generic
	function calcNPV(){
		if($("#npvfield").length != 0) {
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
			var rnd = formatDollar(round(disc, 0), 2); //rounded, formatted result of NPV
			//alert('rnd '+rnd);
			$('#npvfield').val(rnd); //set value to input field in Financial Analysis above
		}
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
	
	function daysBetweenDates(startDate, endDate) {

	    startDate = new Date(startDate);
	    endDate = new Date(endDate);

	    // Validate input
	    if (endDate < startDate)
	        return 0;

	    // Calculate days between dates
	    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
	    startDate.setHours(0,0,0,1);  // Start just after midnight
	    endDate.setHours(23,59,59,999);  // End just before midnight
	    var diff = endDate - startDate;  // Milliseconds between datetime objects
	    var days = Math.ceil(diff / millisecondsPerDay);
	    
	    return days
	}

	function formatDate(aDate) {
	    // Get current date
	    var date = new Date(aDate);

	    // Format day/month/year to two digits
	    var formattedDate = ('0' + date.getDate()).slice(-2);
	    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
	    var formattedYear = date.getFullYear().toString().substr(2,2);

	    // Combine and format date string
	    var dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;

	    // Output dateString
	    return dateString;
	}
	
	function isValidNumber(value) {
		if (value != null && isFinite(value) && value != "") {
			return true;
		}
		return false;
	}
	
	function cleanMoney(value) {
		if (value != null && value != NaN) {
			value = value.toString();
			value = value.replace(/[$,)]/g, '');
			value = value.replace('(', '-');
		}
		return value;
	}
	
	function loadDynamicOptions() {	
		if ($('.dynamicSql').length != 0) {
			loadDynamicCell($('.dynamicSql').sort(sort_td).first());
		}
	}
	
	function getNextDynamicCell($sequence) {
		var $found = null;
		$('.dynamicSql').sort(sort_td)
			.each(function(){
				var $cell = $(this),
					$numSeq = 0,
					$evalSeq = 0;
				$numSeq = Number($sequence);
				$evalSeq = Number($cell.data('cell_eval_seq'));
				if (!isNaN($numSeq) && !isNaN($evalSeq) && $evalSeq > $numSeq) {
					$found = $cell;
					return false;
				}
			});
		return $found;
	}
	
	function loadDynamicCell($cell) {		
		var $result = null,
			$paramCollection = [],
			$paramString = $cell.data('param'),
			$resultCollection = [],
		    $found = null,
		    $cellId = $cell.attr('id'),
			url = "ParametricFieldLoad.jsp?cell=" + $cell.attr('id') + "&template=" + $('#formTemplate').val() + "&version=" + $('#formTemplate').data("version") 
		       + "&entityType=" + $('#formTemplate').data("entitytype") + "&fieldType=" + $cell.getType() + "&resultCollection=";
		
		if ($paramString != null && $paramString.trim() != "") {
			$paramCollection = $paramString.split(";");
			
			$paramCollection.forEach(function($paramStatement){
				var  $result = null;

				$result =  execute_calculation($paramStatement, $cell);
				if ($result != null) {
					$resultCollection.push($result);
				} else {
					alert("null parameter error");
				}
			});

			url += $resultCollection;
			//alert(url);

			$.get(url, function(response, status, xhr ) {
				//alert(response.trim());
				if ( status == "error" ) {
				    var msg = "Error: ";
				    alert( msg + xhr.status + " " + xhr.statusText );
				} else
				$cell.replaceWith(response.trim());
				$cell = $('#'+$cellId);
				var $fieldType = $cell.getType();
				if ($fieldType == 'text' || $fieldType == 'textarea' || $fieldType == 'hidden') {
					//alert($cell.val());
				}

			  	if ($cell.hasClass('inputSegment')) {
			  		$cell.on('change', function (evt) {
						var $fieldType = $cell.getType();
						if ($fieldType == 'select') {
							if ($cell.find(":selected") != null) {
								$cell.attr('data-cell_amount', $cell.find(":selected"));
								$cell.data('cell_amount', $cell.find(":selected"));
							}
						} else if ($fieldType == 'radio' || $fieldType == 'checkbox') {
							if ($cell.find(":checked") != null) {
								$cell.attr('data-cell_amount', $cell.find(":checked"));
								$cell.data('cell_amount', $cell.find(":checked"));
							}
						} else if ($fieldType == 'text' || $fieldType == 'textarea' || $fieldType == 'hidden') {
							$cell.attr('data-cell_amount', $cell.val());
							$cell.data('cell_amount', $cell.val());
							if ($cell.data("cell_format") != null || $cell.val() != null) {
								formatElement($cell, $cell.val(), $cell.data("cell_format"));
							}
						} else {
							formatElement($cell, $cell.html(), $cell.data("cell_format"));			
						}
							
						if ($cell.hasClass('sqlReload')) {
					  		$found = getNextDynamicCell($cell.data('cell_eval_seq'));
							if ($found != null) {
								loadDynamicCell($found);
							}
						}
						populateCalculatedFields();
						
						populateTotalColumn();

						updateFinancialAnalysis();
						
					}).on('validate', function (evt, value) {
						var cell = $(this),
							valid = false,
						    $fieldType = cell.getType();

						if (cell.is(".notFormatted") || $fieldType == 'select' || $fieldType == 'radio' || $fieldType == 'checkbox' || $fieldType == 'input') {
							valid = true;
						} else {
								column = cell.index();
							if (column === 0) {
								valid = !!value && value.trim().length > 0;
							} else {
								valid = !isNaN(parseFloat(value)) && isFinite(value);
								if (valid) {
									cell.attr('data-cell_amount', value);
									cell.data('cell_amount', value);
					
								}
							}
						}
						return valid;
					});
				  	
				  	if ($cell.hasClass('dynamicSql')) {
				  		$found = getNextDynamicCell($cell.data('cell_eval_seq'));
						if ($found == null) {
							populateCalculatedFields();
							
							populateTotalColumn();

							updateFinancialAnalysis();
						} else {
							loadDynamicCell($found);
						}
					} else {
						populateCalculatedFields();
						
						populateTotalColumn();

						updateFinancialAnalysis();						
					}
				  	
			  	} else {
				    if ($cell.hasClass('dynamicSql')) {
				  		$found = getNextDynamicCell($cell.data('cell_eval_seq'));
						if ($found == null) {
							populateCalculatedFields();
							
							populateTotalColumn();

							updateFinancialAnalysis();
						} else {
							loadDynamicCell($found);
						}
				    }
			  	}
				
			});
		}
	}