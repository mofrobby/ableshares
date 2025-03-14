function refreshExpenses(dt, expdata, header) {
	//alert('refreshExpenses called');
	if (!dt)
		var dt = document.all.expenses
	//if (!fntSmall)
	//	var fntSmall = 'tBlackSmall'
	//if (!fntMini)
	//	var fntMini = 'tBlackMini'
	var tempRow
	var tempCell

	// set the selected properties to false for all elements
	//setArray(expenseList.data, false)

	// clear out all existing row entries in the table
	clearExpenseMembers(dt)
	
	// iterate through each member array entry and add new rows/cells into the table
	//alert('startpt '+header);
	for (var i=0; i < expenseList.data.length; i++) {
		tempRow = dt.insertRow(header++);
		
		// name
		tempRow.style.backgroundColor = "#ffffff";
		tempRow.id = "r"+i
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = expenseList.data[i][0] 
		//alert('td 0 ' +expenseList.data[i][0]);
		//tempCell.className = 'bWhite';

		//tempCell.vAlign = 'bottom'

		// organization
		
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = expenseList.data[i][1]
		//alert('td 1 ' +expenseList.data[i][1]);
		//tempCell.className = 'bWhite';
		//tempCell.vAlign = 'bottom'
		
		
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = expenseList.data[i][2]
		//alert('td 2 ' +expenseList.data[i][2]);
		//tempCell.className = 'bWhite';
		//tempCell.vAlign = 'bottom'
		
		
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = expenseList.data[i][3]
		//alert('td 3 ' +expenseList.data[i][3]);
		//tempCell.className = 'bWhite';
		//tempCell.vAlign = 'bottom'
		
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = expenseList.data[i][4]
		//alert('td 4 ' +expenseList.data[i][4]);
		//tempCell.className = 'bWhite';
		//tempCell.vAlign = 'bottom'

				
		
		// role
	/*	tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = memberList.data[i][5]
		tempCell.className = fntSmall
		tempCell.vAlign = 'bottom'

		if (memberList.data[i][8]) {
			// read radio button
			
			tempRow.insertCell()	// blank cell
			tempCell = tempRow.insertCell()
			if (memberList.data[i][6])		// write permission true
				tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio1 onClick="setSecurity(this)" src="img/icoRadioOff.gif">'
			else							// or false
				tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio1 onClick="setSecurity(this)" src="img/icoRadioOn.gif">'
			tempCell.className = fntMini
			tempCell.vAlign = 'bottom'
			tempCell.onclick = dt.onclick
			
			// read/write radio button
			tempCell = tempRow.insertCell()	// blank cell
			tempCell.innerHTML = '<img src="img/dotGray.gif" height=100% width=1 align=right>'
			tempCell = tempRow.insertCell()
			if (memberList.data[i][6])		// write permission true
				tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio2 onClick="setSecurity(this)" src="img/icoRadioOn.gif" hspace=4>'
			else							// or false
				tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio2 onClick="setSecurity(this)" src="img/icoRadioOff.gif" hspace=4>'
			tempCell.className = fntMini
			tempCell.vAlign = 'bottom'
			tempCell.onclick = dt.onclick
		} else {
			// read radio button
			
			tempRow.insertCell()	// blank cell
			tempCell = tempRow.insertCell()
				tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio1 src="img/icoRadioDisabled.gif">'
			tempCell.className = fntMini
			tempCell.vAlign = 'bottom'
			tempCell.onclick = dt.onclick
			
			// read/write radio button
			tempCell = tempRow.insertCell()	// blank cell
			tempCell.innerHTML = '<img src="img/dotGray.gif" height=100% width=1 align=right>'
			tempCell = tempRow.insertCell()
			tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio2 src="img/icoRadioOn.gif" hspace=4>'
			tempCell.className = fntMini
			tempCell.vAlign = 'bottom'
			tempCell.onclick = dt.onclick
		}*/
		
		// set the onclick event handler for the entire row
		tempRow.onclick = dt.onclick
	}
}

function addUser() {
	var dupe = false
	//for (var i=0; i < partnerList.data.length; i++) {
	for(var t=0; t < partnerList.countSelected(); t++){
	 //3 is where the component nameis located
	// if (i == partnerList.getSelected() && !dupe){
		//alert(partnerList.getSelected());
		var selected = partnerList.getSelected()	
		if (partnerList.data[selected][3]) {
			
			// if the max is reached, break out of the loop
			if (memberList.data.length >= 100) {
				alert('You have reached the maximum of 100 members for this group.')
				break
			}
			// ignore if the entry is already in the members array
			for (var n=0; n < memberList.data.length; n++) {
				if (memberList.data[n][0] == partnerList.data[selected][0]) {  //validate keys do not match
					dupe = true
					alert('Duplicate Entry'+' 1. '+memberList.data[n][3]+' 2. '+partnerList.data[selected][3]);
					break
				}
			}
			//if (dupe) {
			//	dupe = false
			//	continue
			//}
			//alert(partnerList.countSelected());
			//for(var t=0; t < partnerList.countSelected(); t++){
			if (!dupe){
			// copy the partner entries over to the members list array
			memberList.data[memberList.data.length] = new Array()
			for (var m=0; m < partnerList.data[selected].length; m++)
			{
				//alert('inside');
				
				memberList.data[memberList.data.length-1][m] = partnerList.data[selected][m]
				
			}//end for
		  }//end if
		 // }//end for
		}
	}
	refreshMembers()
}

function deleteUser() {
	var tArray = new Array()
	//for (var i=0; i < memberList.data.length; i++) {
	//alert(memberList.data[i][3]);
	for(var t=0; t < memberList.data.length; t++){
	 //3 is where the component nameis located
	// if (i == partnerList.getSelected() && !dupe){
		
		var selected = memberList.getSelected()
		//alert('selected '+selected);	
		if (memberList.data[selected][3]) {
			if (t == selected) {
				//alert("Removing "+memberList.data[t][3]);
			}
			else{
			 tArray[tArray.length] = memberList.data[t];
			}
		}//end if
	}
	memberList.data = tArray
	refreshMembers()
}

function checkChanges() {
	var tArray = new Array()
	// make a duplicate of the memberList array
	for (var i=0; i < memberList.data.length; i++) {
		tArray[i] = new Array()
		for (var j=0; j < memberList.data[0].length; j++)
			tArray[i][j] = memberList.data[i][j]
	}
	tArray.sort(compareName)
	if (tArray.join() != memberList.dataStart)
		return confirm('You did not save your changes.\nIf you continue you will lose the changes that you have made.\n\nClick "Ok" to continue. Click "Cancel" to stay on this page.')
}

function compareName(a, b) {
	var s1 = a[3] + a[2] + a[4] + a[5]
	var s2 = b[3] + b[2] + b[4] + b[5]
	return doCompare(s1, s2)
}

function clearExpenseMembers(dt) {
	//alert('clear called ');
	//clear between 5 and 
	while(dt.rows.length > 8)
		dt.deleteRow(6)
}

function doCompare(s1, s2) {
	if (s1 > s2)
		return 1
	else
		return -1
}
