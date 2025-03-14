if (document.images) {

	imgSelectAll = new Image()
	imgSelectAll.src = "../img/butSelectAllGrayRegular.gif"
	imgSelectNone = new Image()
	imgSelectNone.src = "../img/butSelectNoneGrayRegular.gif"
	imgEditSelect = new Image()
	imgEditSelect.src = "../img/butEditGrayRegular.gif"
	imgDelete = new Image()
	imgDelete.src = "../img/butDeleteGrayRegular.gif"
	imgBlank = new Image()
	imgBlank.src = "../img/x.gif"

}

function refreshDocs(dt, data, fntSmall, fntMini) {
	if (!dt) {
		alert('no dt')
		return
	}
	if (!data) {
		alert('no data')
		return
	}
	if (!fntSmall)
		var fntSmall = 'tBlackSmall'
	if (!fntMini)
		var fntMini = 'tBlackMini'
	var tempRow
	var tempCell

	// set the selected properties to false for all elements
	setArray(data, false)

	// clear out all existing row entries in the table
	clearMembers(dt)
	
	// iterate through each member array entry and add new rows/cells into the table
	for (var i=0; i < data.length; i++) {
		tempRow = dt.insertRow()
		
		// name
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = '<img src="img/x.gif" width=1 height=3><br>' + data[i][3]
		tempCell.className = fntSmall
		tempCell.vAlign = 'top'

		// size
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = data[i][4]
		tempCell.className = fntSmall
		tempCell.vAlign = 'bottom'
				
		// set the onclick event handler for the entire row
		tempRow.onclick = dt.onclick
		//alert('data length '+data.length);
	}
}


// ver 1.2 - created to display component drill down screens
function createTable(dt, data, fntSmall, fntMini) {
	//alert('create called');
	if (!dt) {
		alert('no dt')
		return
	}
	if (!data) {
		alert('no data')
		return
	}
	if (!fntSmall)
		var fntSmall = 'tBlackSmall'
	if (!fntMini)
		var fntMini = 'tBlackMini'
	var tempRow
	var tempCell

	// set the selected properties to false for all elements
	setArray(data, false)

	// clear out all existing row entries in the table
	clearMembers(dt)
    
    //define widths for columns
    var widthCol1 = 50
    var widthCol2 = 50
    var widthCol3 = 50
	
    //ver 1.2 - Modified to insert extra cell into table
	// iterate through each member array entry and add new rows/cells into the table
	for (var i=0; i < data.length; i++) {
		tempRow = dt.insertRow()
		alert ("data: " + data[i][0] + ", "  + data[i][1] + ", "  + data[i][2] + ", "  + data[i][3] + ", "  + data[i][4]  );
		
        // column1 - at index 2
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = '<img src="x.gif" width=1 height=3><br>' + data[i][2]
		tempCell.innerText =  data[i][2]
		tempCell.className = fntSmall
		tempCell.vAlign = 'top'
        tempCell.width = widthCol1;

		// column2 - at index 3
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerText = data[i][3]
		tempCell.className = fntSmall
		tempCell.vAlign = 'bottom'
        tempCell.width = widthCol2;

		// column3 - at index 4
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
        tempCell.innerText = data[i][4];
		tempCell.className = fntSmall
		tempCell.vAlign = 'bottom'
        tempCell.width = widthCol3;
				
		// set the onclick event handler for the entire row
		tempRow.onclick = dt.onclick
		//alert('data length '+data.length);
	}
}

function refreshAdd(dt, data, fntSmall, fntMini) {
	if (!dt) {
		alert('no dt')
		return
	}
	if (!data) {
		alert('no data')
		return
	}
	if (!fntSmall)
		var fntSmall = 'tBlackSmall'
	if (!fntMini)
		var fntMini = 'tBlackMini'
	var tempRow
	var tempCell
	//alert("refreshAdd called");
	// set the selected properties to false for all elements
	setArray(data, false)

	// clear out all existing row entries in the table
	clearMembers(dt)
	
	// iterate through each member array entry and add new rows/cells into the table
	for (var i=0; i < data.length; i++) {
		tempRow = dt.insertRow()
		
		// name
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		if(data[i][3] == "new"){			
			tempCell.innerHTML = '<img src="../img/x.gif" width=1 height=3><br><input type="file" name="theFile" onChange="document.uploadForm.submit();" class="xForm" style="width:395;">'
			tempCell.className = fntSmall
			tempCell.vAlign = 'bottom'
			tempRow.insertCell()	// blank cell
			tempRow.insertCell()	// blank cell
		}
		else{
		tempCell.innerHTML = '<img src="x.gif" width=1 height=3><br>' + data[i][3]
		tempCell.className = fntSmall
		tempCell.vAlign = 'bottom'

		// size
		tempRow.insertCell()	// blank cell
		tempCell = tempRow.insertCell()
		tempCell.innerHTML = data[i][4]
		tempCell.className = fntSmall
		tempCell.vAlign = 'bottom'
		}	
		// set the onclick event handler for the entire row
		tempRow.onclick = dt.onclick
		
	}
}

function mtdUploadDoc() {
	alert('new');
	location.href = "LoginForm.html";
}

function clearMembers(dt) {
	while(dt.rows.length > 3)
		dt.deleteRow(3)
}



function selectButton(frame) {
	if (frame == "partner") {
		if (fraPartners.document.all.dataTable.mcListBox) {
			if (document.all.btnPartnerSelect.src == imgSelectAll.src) {
				changeImage(document.all.btnPartnerSelect, imgSelectNone, "Select None")
				fraPartners.document.all.dataTable.mcListBox.selectAll()
				setArray(partnerList.data, true)
			} else {
				changeImage(document.all.btnPartnerSelect, imgSelectAll, "Select All")
				fraPartners.document.all.dataTable.mcListBox.selectNone()
				setArray(partnerList.data, false)
			}
		}
	} else if (frame == "member") {
		if (fraMembers.document.all.dataTable.mcListBox) {
			if (document.all.btnMemberSelect.src == imgSelectAll.src) {
				changeImage(document.all.btnMemberSelect, imgSelectNone, "Select None")
				fraMembers.document.all.dataTable.mcListBox.selectAll()
				setArray(memberList.data, true)
			} else {
				changeImage(document.all.btnMemberSelect, imgSelectAll, "Select All")
				fraMembers.document.all.dataTable.mcListBox.selectNone()
				setArray(memberList.data, false)
			}
		}
	} else if (frame == "import") {
		if (fraImportDocs.document.all.dataTable.mcListBox) {
			if (document.all.btnImportSelect.src == imgSelectAll.src) {
				changeImage(document.all.btnImportSelect, imgSelectNone, "Select None")
				fraImportDocs.document.all.dataTable.mcListBox.selectAll()
				setArray(importList.data, true)
			} else {
				changeImage(document.all.btnImportSelect, imgSelectAll, "Select All")
				fraImportDocs.document.all.dataTable.mcListBox.selectNone()
				setArray(importList.data, false)
			}
		}
	} else if (frame == "attach") {
		if (fraAttachDocs.document.all.dataTable.mcListBox) {
			if (document.all.btnAttachSelect.src == imgSelectAll.src) {
				changeImage(document.all.btnAttachSelect, imgSelectNone, "Select None")
				fraAttachDocs.document.all.dataTable.mcListBox.selectAll()
				setArray(attachList.data, true)
			} else {
				changeImage(document.all.btnAttachSelect, imgSelectAll, "Select All")
				fraAttachDocs.document.all.dataTable.mcListBox.selectNone()
				setArray(attachList.data, false)
			}
		}
	}
}

function setArray(array, checked) {
	//alert('setArray called');
	for (var i=0; i < array.length; i++)
	array[i][1] = checked
}

function changeImage(target, source, altTag) {
	if (document.images) {
		target.src = source.src
		target.alt = altTag
	}
}

function importDoc(docid, checked, version, name, size) {
	//alert('testing');
	importList.data[importList.data.length] = new Array(docid, checked, version, name, size)
}

function attachDoc(docid, checked, version, name,size) {
	parent.attachList.data[parent.attachList.data.length] = new Array(docid, checked, version, name,size)
}

function showInviteNewPartner() {
	document.all.divAvailablePartners.style.display = "none"
	document.all.divInviteNewPartner.style.display = "block"
}

function showAvailablePartners() {
	document.all.divInviteNewPartner.style.display = "none"
	document.all.divAvailablePartners.style.display = "block"
}

function invitePartnerSecurity () {
	if (document.frmInvite.validate()) {
		var frm = document.all.frmInvite
		
		// if the max is reached, break out of the loop
		if (memberList.data.length >= 100) {
			alert('You have reached the maximum of 100 members for this group.')
		}
		// copy the new partner to the members list array
		memberList.data[memberList.data.length] = new Array()
		memberList.data[memberList.data.length-1][0] = 0
		memberList.data[memberList.data.length-1][1] = frm.txtFirstName.value
		memberList.data[memberList.data.length-1][2] = frm.txtLastName.value
		memberList.data[memberList.data.length-1][3] = frm.txtDirectorate.value
		memberList.data[memberList.data.length-1][4] = frm.selRole[frm.selRole.selectedIndex].text
	
		refreshMembers()
	}

}

function doInvitePartner() {
	if (document.frmInvite.validate())
		addInvitePartner()
}

function addInvitePartner() {
	var frm = document.all.frmInvite
	
	// if the max is reached, break out of the loop
	if (memberList.data.length >= 100) {
		alert('You have reached the maximum of 100 members for this group.')
	}
	// copy the new partner to the members list array
	memberList.data[memberList.data.length] = new Array()
	memberList.data[memberList.data.length-1][0] = 0
	memberList.data[memberList.data.length-1][1] = frm.txtFirstName.value
	memberList.data[memberList.data.length-1][2] = frm.txtLastName.value
	memberList.data[memberList.data.length-1][3] = frm.txtDirectorate.value
	memberList.data[memberList.data.length-1][4] = frm.selRole[frm.selRole.selectedIndex].text
	
	refreshMembers()
}

