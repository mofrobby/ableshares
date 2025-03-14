/*!
 * Copyright HillTopSI
 *
 * Date: 2014-09-25
 */

function setOrgUp(objForm, divId) {		
	
	//init_person_form(objForm);		
	init_form(objForm);		
	
	//alert('form initiated');
	cDefaultErrorMsg = "Please check your input values"		
	
		eval('objForm.selOrgName' + divId + '.required = true');
		eval('objForm.selOrgType' + divId + '.required = true');
		eval('objForm.selOrgType' + divId + '.excludedChars = "-"');
		eval('objForm.txtAddress1' + divId + '.alternateError = "imgAddress'+ divId + 'Err"');
		eval('objForm.txtAddress1' + divId + '.alternateErrorHighlight = "spnAddress'+ divId + '"');
		eval('objForm.txtAddress2' + divId + '.alternateError = "imgAddress'+ divId + 'Err"');
		eval('objForm.txtAddress2' + divId + '.alternateErrorHighlight = "spnAddress'+ divId + '"');
		eval('objForm.selState' + divId + '.alternateError = "imgtxtProvince'+ divId + 'Err"');
		eval('objForm.selState' + divId + '.alternateErrorHighlight = "spntxtProvince'+ divId + '"');
		eval('objForm.txtProvince' + divId + '.maxLen = 30');
		eval('objForm.txtPhone' + divId + '.minLen = 6');
		eval('objForm.txtPhone' + divId + '.maxLen = 25');
		eval('objForm.txtPhone' + divId + '.format = "numeric"');
		eval('objForm.txtPhone' + divId + '.includedChars = "- .()+"');
		eval('objForm.txtFax' + divId + '.minLen = 6');
		eval('objForm.txtFax' + divId + '.maxLen = 25');
		eval('objForm.txtFax' + divId + '.format = "numeric"');
		eval('objForm.txtFax' + divId + '.includedChars = "- .()+"');
		eval('objForm.txtEmail' + divId + '.maxLen = 150');
		eval('objForm.txtEmail' + divId + '.format = "email"');
		eval('objForm.txtAddress1' + divId + '.maxLen = 100');
		eval('objForm.txtAddress2' + divId + '.maxLen = 100');
		eval('objForm.txtCity' + divId + '.maxLen = 50');
		eval('objForm.txtPostalZip' + divId + '.minLen = 5');
		eval('objForm.txtPostalZip' + divId + '.maxLen = 15');
		eval('objForm.tarcomments' + divId + '.maxLen = 256');
}

function openAddOrg(divId, currentSelectOrg, dropDownParam){	
	//document.getElementById(divId).style.display = 'block';	
	document.getElementById("dropDownParam").value = dropDownParam;	
	document.getElementById("currentSelectOrg").value = currentSelectOrg;
}

function hideAddOrg(divId){	
	//document.getElementById(divId).style.display = 'none';	
	var targetModal = document.getElementById(divId);
	$(targetModal).modal('toggle');
}

function orgChange() {
	var currentSelectOrg = document.getElementById("currentSelectOrg").value;		
	var currentSelectElement = null;		
	var currentSelectElementSpan = null;		

	if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
		currentSelectElement = document.getElementById(currentSelectOrg);
		currentSelectElementSpan = document.getElementById(currentSelectOrg + "Span");
		var newspan = document.createElement("span");
		newspan.innerHTML = xmlHttp.responseText;
		currentSelectElementSpan.innerHTML = '';
		currentSelectElementSpan.appendChild(newspan);
		fireBrowserEvent(currentSelectElement, 'change');
	}
}

function addOrgLoadUp(divId) {
	var addOrgForm = document.getElementById(divId + 'Id');	
	//alert('about to validate')	;
	var obj = addOrgForm.validate();		
	if(obj){	
		var selOrgName = addOrgForm.elements['selOrgName'+divId].value;
		var selParentOrg = addOrgForm.elements['selParentOrg'+divId].value;
		var selOrgType = addOrgForm.elements['selOrgType'+divId].value;
		var selOrgLevel = addOrgForm.elements['selOrgLevel'+divId].value;
		var email = addOrgForm.elements['txtEmail'+divId].value;
		var phone = addOrgForm.elements['txtPhone'+divId].value;
		var fax = addOrgForm.elements['txtFax'+divId].value;
		var selTitle = addOrgForm.elements['selTitle'+divId].value;
		var txtAddress1 = addOrgForm.elements['txtAddress1'+divId].value;
		var txtAddress2 = addOrgForm.elements['txtAddress2'+divId].value;
		var txtCity = addOrgForm.elements['txtCity'+divId].value;
		var txtProvince = addOrgForm.elements['txtProvince'+divId].value;
		var selState = addOrgForm.elements['selState'+divId].value;
		var selCountry = addOrgForm.elements['selCountry'+divId].value;
		var txtPostalZip = addOrgForm.elements['txtPostalZip'+divId].value;
		var tarcomments = addOrgForm.elements['tarcomments'+divId].value;
				
		var dropDownParam = document.getElementById("dropDownParam").value;
		var currentSelectOrg = document.getElementById("currentSelectOrg").value;

		if (typeof XMLHttpRequest != "undefined") {
			xmlHttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		if (xmlHttp == null) {
			alert("Browser does not support XMLHTTP Request")
			return;
		}
		
			var url = "OrgInsert.jsp";
			url += "?selOrgName="+selOrgName+"&selParentOrg="+selParentOrg+"&selOrgType="+selOrgType+"&selOrgLevel="+selOrgLevel+"&email="+email+"&phone="+phone+"&fax="+fax+"&selTitle="+selTitle+
			"&txtAddress1="+txtAddress1+"&txtAddress2="+txtAddress2+"&txtCity="+txtCity+"&txtProvince="+txtProvince+"&selState="+selState+"&selCountry="+selCountry+
			"&txtPostalZip="+txtPostalZip+"&tarcomments="+tarcomments+"&selectOrg="+currentSelectOrg+dropDownParam;
			//alert("URL "+url)
			xmlHttp.onreadystatechange = orgChange;
			xmlHttp.open("GET", url, true);
			xmlHttp.send(null);			

			hideAddOrg(divId);
			updateRelatedDropdowns();
	}
}

