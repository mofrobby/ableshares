function refreshMembers() {
	var dt = document.fraMembers.document.all.dataTable
	var tempRow
	var tempCell

	// set the selected properties to false for all elements
	setArray(memberList.data, false)
	
	// clear out all existing row entries in the table
	clearMembers(dt)
	
	// iterate through each member array entry and add new rows/cells into the table
	for (var i=0; i < memberList.data.length; i++) {
		tempRow = dt.insertRow()
		
		// name
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = '<img src="x.gif" width=1 height=3><br>' + memberList.data[i][2] + ' ' + memberList.data[i][3]
		tempCell.className = 'tBlackMini'
		tempCell.vAlign = 'bottom'

		// organization
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = memberList.data[i][4]
		tempCell.className = 'tBlackMini'
		tempCell.vAlign = 'bottom'
		
		// role
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = memberList.data[i][5]
		tempCell.className = 'tBlackMini'
		tempCell.vAlign = 'bottom'

		// read radio button
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		if (memberList.data[i][7])		// read only permission true
			tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio1 onClick="setSecurity(this)" src="img/icoRadioOn.gif">'
		else							// or false
			tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio1 onClick="setSecurity(this)" src="img/icoRadioOff.gif">'
		tempCell.className = 'tBlackMini'
		tempCell.vAlign = 'bottom'
		tempCell.onclick = dt.onclick
		
		// read/write radio button
		tempCell = tempRow.insertCell()	// blank cell
		tempCell.innerHTML = '<img src="img/dotGray.gif" height=100% width=1 align=right>'
		tempCell = tempRow.insertCell()
		if (memberList.data[i][7])		// read only permission true
			tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio2 onClick="setSecurity(this)" src="img/icoRadioOff.gif" hspace=4>'
		else							// or false
			tempCell.innerHTML = '<img name=img' + memberList.data[i][0] + 'radio2 onClick="setSecurity(this)" src="img/icoRadioOn.gif" hspace=4>'
		tempCell.className = 'tBlackMini'
		tempCell.vAlign = 'bottom'
		tempCell.onclick = dt.onclick
		
		// set the onclick event handler for the entire row
		tempRow.onclick = dt.onclick
	}
}

function clearMembers() {
	var dt = document.fraMembers.document.all.dataTable
	while(dt.rows.length > 3)
		dt.deleteRow(3)
}

function addUser() {
	var dupe = false
	for (var i=0; i < partnerList.data.length; i++) {
		if (partnerList.data[i][1]) {
			// if the max is reached, break out of the loop
			if (memberList.data.length >= 100) {
				alert('You have reached the maximum of 100 members for this group.')
				break
			}
			// ignore if the entry is already in the members array
			for (var n=0; n < memberList.data.length; n++) {
				if (memberList.data[n][0] == partnerList.data[i][0]) {
					dupe = true
					break
				}
			}
			if (dupe) {
				dupe = false
				continue
			}
			
			// copy the partner entries over to the members list array
			memberList.data[memberList.data.length] = new Array()
			for (var m=0; m < 8; m++)
				memberList.data[memberList.data.length-1][m] = partnerList.data[i][m]
		}
	}
	refreshMembers()
}

function deleteUser() {
	var tArray = new Array()
	for (var i=0; i < memberList.data.length; i++) {
		if (!memberList.data[i][1]) {
			tArray[tArray.length] = memberList.data[i]
		}
	}
	memberList.data = tArray
	refreshMembers()
}

function checkChanges() {
	var tArray = new Array()
	// make a duplicate of the memberList array
	for (var i=0; i < memberList.data.length; i++) {
		tArray[i] = new Array()
		for (var j=0; j < 8; j++)
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

function doCompare(s1, s2) {
	if (s1 > s2)
		return 1
	else
		return -1
}
