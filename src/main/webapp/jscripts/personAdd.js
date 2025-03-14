/*!
 * Copyright HillTopSI
 *
 * Date: 2014-09-25
 */

function detectIE() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	var trident = ua.indexOf('Trident/');
	
	if (msie>0) {
		// IE 10 or older - version number
		return parseInt(ua.substring(msie+5, ua.indexOf('.', msie)), 10);
	}
	if (trident>0){
		 // IE11 or newer
		 var rv = ua.indexOf('rv:');
		 return parseInt(ua.substring(rv+3, ua.indexOf('.', rv)), 10);
	}
	return 0; // other browser
}

function fireBrowserEvent(element, eventName) {
	var evt = null;
	var ieVersion = detectIE();
	if (ieVersion == 0 || ieVersion >= 9) {
		// dispatch for ie > 9, firefox, others
		evt = document.createEvent("HTMLEvents");
		evt.initEvent(eventName, true, true); // event type, bubbling, cancelable
		return !element.dispatchEvent(evt);
	} else {
		// dispatch for IE
		return element.fireEvent('on'+eventName);
	}
}

function setPersonUp(objForm, divId) {		
	
	//init_person_form(objForm);		
	init_form(objForm);		
	//alert (divId);
	
	//alert('form initiated');
	cDefaultErrorMsg = "Please check your input values"		
	
		eval('objForm.txtFirstName' + divId + '.required = true');
		eval('objForm.txtLastName' + divId + '.required = true');
		eval('objForm.txtEmail' + divId + '.required = true');
		eval('objForm.txtPhone' + divId + '.required = true');
		eval('objForm.selOrgName' + divId + '.required = true');
		eval('objForm.selOrgName' + divId + 'excludedChars = "-"');
		eval('objForm.txtAddress1' + divId + '.alternateError = "imgtxtAddress1'+ divId + 'Err"');
		eval('objForm.txtAddress1' + divId + '.alternateErrorHighlight = "spntxtAddress1'+ divId + '"');
		eval('objForm.txtAddress2' + divId + '.alternateError = "imgtxtAddress1'+ divId + 'Err"');
		eval('objForm.txtAddress2' + divId + '.alternateErrorHighlight = "spntxtAddress1'+ divId + '"');
		eval('objForm.selState' + divId + '.alternateError = "imgtxtProvince'+ divId + 'Err"');
		eval('objForm.selState' + divId + '.alternateErrorHighlight = "spntxtProvince'+ divId + '"');
		eval('objForm.txtProvince' + divId + '.maxLen = 30');
		eval('objForm.txtFirstName' + divId + '.maxLen = 30');
		eval('objForm.txtFirstName' + divId + '.format = "alpha"');
		eval('objForm.txtFirstName' + divId + '.includedChars = " -"');
		eval('objForm.txtInitial' + divId + '.maxLen = 1');
		eval('objForm.txtInitial' + divId + '.format = "alpha"');
		eval('objForm.txtLastName' + divId + '.maxLen = 30');
		eval('objForm.txtLastName' + divId + '.format = "alpha"');
		eval('objForm.txtLastName' + divId + '.includedChars = " -"');
		eval('objForm.txtPhone' + divId + '.minLen = 6');
		eval('objForm.txtPhone' + divId + '.maxLen = 12');
		eval('objForm.txtPhone' + divId + '.format = "numeric"');
		eval('objForm.txtPhone' + divId + '.includedChars = "- .()+"');
		eval('objForm.txtFax' + divId + '.minLen = 6');
		eval('objForm.txtFax' + divId + '.maxLen = 15');
		eval('objForm.txtFax' + divId + '.format = "numeric"');
		eval('objForm.txtFax' + divId + '.includedChars = "- .()+"');
		eval('objForm.txtEmail' + divId + '.maxLen = 45');
		eval('objForm.txtEmail' + divId + '.format = "email"');
		eval('objForm.txtAddress1' + divId + '.maxLen = 100');
		eval('objForm.txtAddress2' + divId + '.maxLen = 100');
		eval('objForm.txtCity' + divId + '.maxLen = 50');
		eval('objForm.txtPostalZip' + divId + '.minLen = 5');
		eval('objForm.txtPostalZip' + divId + '.maxLen = 15');
}

function openAddPerson(divId, currentSelectName, dropDownParam){	
	document.getElementById(divId).style.display = 'block';	
	//document.getElementById(divId).parent.style.display = 'block';	
	document.getElementById("dropDownParam").value = dropDownParam;	
	document.getElementById("currentSelectName").value = currentSelectName;
}

function hideAddPerson(divId){	
	//document.getElementById(divId).style.display = 'none';		
	//document.getElementById(divId).parent.style.display = 'none';	
	var targetModal = document.getElementById(divId);
	$(targetModal).modal('toggle');
}

function personChange() {
	var currentSelectName = document.getElementById("currentSelectName").value;	
	//alert('currentSelectName = '+currentSelectName);
	var currentSelectElement = null;		
	var currentSelectElementSpan = null;		

	if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
		currentSelectElement = document.getElementById(currentSelectName);
		currentSelectElementSpan = document.getElementById(currentSelectName + "Span");
		var newspan = document.createElement("span");
		newspan.innerHTML = xmlHttp.responseText;
		currentSelectElementSpan.innerHTML = '';
		currentSelectElementSpan.appendChild(newspan);
		fireBrowserEvent(currentSelectElement, 'change');
		if (document.getElementById("newUserId").value == "0") {
			alert("Duplicate user not allowed");
		}	

		updateRelatedDropdowns();
	}
}

function addPersonLoadUp(divId) {
	var addPersonForm = document.getElementById(divId + 'Id');	
	//alert('about to validate')	;
	var obj = addPersonForm.validate();		
	if(obj){	
		var firstName = addPersonForm.elements['txtFirstName'+divId].value;
		var email = addPersonForm.elements['txtEmail'+divId].value;
		var lastName = addPersonForm.elements['txtLastName'+divId].value;
		var phone = addPersonForm.elements['txtPhone'+divId].value;
		var fax = addPersonForm.elements['txtFax'+divId].value;
		var selOrgName = addPersonForm.elements['selOrgName'+divId].value;
		var selTitle = addPersonForm.elements['selTitle'+divId].value;
		var txtAddress1 = addPersonForm.elements['txtAddress1'+divId].value;
		var txtAddress2 = addPersonForm.elements['txtAddress2'+divId].value;
		var txtCity = addPersonForm.elements['txtCity'+divId].value;
		var txtProvince = addPersonForm.elements['txtProvince'+divId].value;
		var selState = addPersonForm.elements['selState'+divId].value;
		var selCountry = addPersonForm.elements['selCountry'+divId].value;
		var txtPostalZip = addPersonForm.elements['txtPostalZip'+divId].value;
		var dropDownParam = document.getElementById("dropDownParam").value;
		var currentSelectName = document.getElementById("currentSelectName").value;

		if (typeof XMLHttpRequest != "undefined") {
			xmlHttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		if (xmlHttp == null) {
			alert("Browser does not support XMLHTTP Request")
			return;
		}
		
		//alert("will do");
			var url = "PersonInsert.jsp";
			url += "?firstName="+firstName+"&lastName="+lastName+"&email="+email+"&phone="+phone+"&fax="+fax+"&selOrgName="+selOrgName+"&selTitle="+selTitle+
			"&txtAddress1="+txtAddress1+"&txtAddress2="+txtAddress2+"&txtCity="+txtCity+"&txtProvince="+txtProvince+"&selState="+selState+"&selCountry="+selCountry+
			"&txtPostalZip="+txtPostalZip+"&selectName="+currentSelectName+dropDownParam;
			//alert("URL "+url);
			xmlHttp.onreadystatechange = personChange;
			xmlHttp.open("GET", url, true);
			xmlHttp.send(null);			

			hideAddPerson(divId);
	}
}

