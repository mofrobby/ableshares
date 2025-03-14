/* global $ */
	/* this is an example for validation and change events */
	$.fn.numericInputExample = function () {
		'use strict';
		//alert('calling numeric-table');
		var dataRows = [];
		dataRows.push(document.getElementById('pc'));
		dataRows.push(document.getElementById('pe'));
		var dataRows2 = [];
		dataRows2.push(document.getElementById('ben'));
		dataRows2.push(document.getElementById('sum'));
		//alert('datarow size '+dataRows.length)
		var element = $(this),
			footer = element.find(document.getElementById('sum')),
			footer2 = element.find(document.getElementById('sum2')),  
			initialTotal = function () {
				var column, total, column2, total2;
				for (column = 1; column < footer.children().size(); column++) {
					total = 0;
					//alert('iterating');
					$.each(dataRows, function () {
						var row = $(this);
						total += parseFloat(row.children().eq(column).text());
						//alert('total for row '+column+' = '+total);
					});
					footer.children().eq(column).text(total);
				};
				for (column2 = 1; column2 < footer2.children().size(); column2++) {
					total2 = 0;
					//alert('iterating');
					var iter = 0;
					$.each(dataRows2, function () {
						var row = $(this);
						if(iter == 0){
							total2 += parseFloat(row.children().eq(column2).text());
						}
						if(iter > 0){
							total2 -= parseFloat(row.children().eq(column2).text());
						}
						iter++;
					});
					footer2.children().eq(column2).text(total2);
				};
				//This section handles the sum of each row
				numericInputExample2();
		};
		//this section handles updates to any editable field within the table
		element.find('td').on('change', function (evt) {
			//alert('field changed');
			var cell = $(this),
				column = cell.index(),
				total = 0,
				total2 = 0;
			if (column === 0) {
				return;
			}
			//element.find('tbody tr').each(function () {
			//alert(dataRows.length);
			$.each(dataRows, function () {
				var row = $(this);
				total += parseFloat(row.children().eq(column).text());
				//alert('total dataRows '+total);
			});
			footer.children().eq(column).text(total);
			var iter = 0;
			$.each(dataRows2, function () {
				var row = $(this);
				if(iter == 0){
					total2 += parseFloat(row.children().eq(column).text());
				}
				if(iter > 0){
					total2 -= parseFloat(row.children().eq(column).text());
				}
				iter++;
			});
			footer2.children().eq(column).text(total2);
			//call to function for row sum
			numericInputExample2(); 
			//update derivative Financial Analysis fields
			updateFinancialAnalysis();
			//This commented block handles error generation
			//if (column === 1 && total > 5000) {
			//	$('.alert').show();
			//	return false; // changes can be rejected
			//} else {
			//	$('.alert').hide();
			//	footer.children().eq(column).text(total);
			//}
		}).on('validate', function (evt, value) {
			var cell = $(this),
				column = cell.index();
			if (column === 0) {
				return !!value && value.trim().length > 0;
			} else {
				return !isNaN(parseFloat(value)) && isFinite(value);
			}
		});
		initialTotal();
		return this;
	};

function numericInputExample2() {
		'use strict';
		//alert('running Input 2 ')
		$('#mainTable tr').each(function () {
			        //the value of sum needs to be reset for each row, so it has to be set inside the row loop
			        var sum = 0
			        //find the elements in the current row and sum it 
			        var $tds = $(this).find('td');
		            var row1 = $tds.eq(1).text();
		            sum += parseFloat(row1);
				//alert('adding row 1 '+sum);
		            var row2 = $tds.eq(2).text();
		            sum += parseFloat(row2);
				//alert('adding row 2 '+sum);
		            var row3 = $tds.eq(3).text();
		            sum += parseFloat(row3);
				//alert('adding row 3 '+sum);
			        var row4 = $tds.eq(4).text();
			        sum += parseFloat(row4);
				//alert('adding row 4 '+sum);
			        var row5 = $tds.eq(5).text();
			        sum += parseFloat(row5);
				//alert('adding row 5 '+sum);
			        //set the value of currents rows sum to the total element in the current row
			        if(!isNaN(parseFloat(sum)) && isFinite(sum) ){
			        	//alert('adding to tally '+sum);
			        	//$('#mainTable td:nth-child(6)', this).text(sum);
			        	$tds.eq(6).text(sum);
			        }
	});
	
}

function updateFinancialAnalysis(){
	//alert('update Financial Analysis ');
	$('#totalplncost').val(formatDollar(parseFloat($('#tbltpc').text()), false));
	$('#totalplndben').val(formatDollar(parseFloat($('#tblpb').text()), false));
	//alert('Calacu NPV ');
	calcNPV(); //this comes first as it populates the net cash flow array
	//alert('Calacu IRR ');
	$('#irrfield').val(round(IRRCalc2(), 2));
	//alert('Calacu PBP ');
	$('#pbpfield').val(paybackCalc());
}