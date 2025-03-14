/*!
 * Copyright HillTopSI
 *
 * Date: 2014-09-25
 */

function setContractorUp(objForm, divId) {		
	
	//init_person_form(objForm);		
	init_form(objForm);		
	
	//alert('form initiated');
	cDefaultErrorMsg = "Please check your input values"		
	
		eval('objForm.txtctrname' + divId + '.required = true');
		//txtctrcontact
		eval('objForm.txtctrphone' + divId + '.minLen = 6');
		eval('objForm.txtctrphone' + divId + '.maxLen = 25');
		eval('objForm.txtctrphone' + divId + '.format = "numeric"');
		eval('objForm.txtctrphone' + divId + '.includedChars = "- .()+"');
		eval('objForm.comments2' + divId + '.maxLen = 256');
}

function openAddContractor(divId, currentSelectContractor, dropDownParam){	
	document.getElementById(divId).style.display = 'block';	
	document.getElementById("dropDownParam").value = dropDownParam;	
	document.getElementById("currentSelectContractor").value = currentSelectContractor;
}

function hideAddContractor(divId){	
	//document.getElementById(divId).style.display = 'none';
	var targetModal = document.getElementById(divId);
	$(targetModal).modal('toggle');
	
}

function contractorChange() {
	var currentSelectContractor = document.getElementById("currentSelectContractor").value;		
	var currentSelectElement = null;		
	var currentSelectElementSpan = null;		

	if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
		currentSelectElement = document.getElementById(currentSelectContractor);
		currentSelectElementSpan = document.getElementById(currentSelectContractor + "Span");
		var newspan = document.createElement("span");
		newspan.innerHTML = xmlHttp.responseText;
		currentSelectElementSpan.innerHTML = '';
		currentSelectElementSpan.appendChild(newspan);
		fireBrowserEvent(currentSelectElement, 'change');
	}
}

function addContractorLoadUp(divId) {
	var addContractorForm = document.getElementById(divId + 'Id');	
	//alert('about to validate')	;
	var obj = addContractorForm.validate();		
	if(obj){	
		var name = addContractorForm.elements['txtctrname'+divId].value;
		var contact = addContractorForm.elements['txtctrcontact'+divId].value;
		var phone = addContractorForm.elements['txtctrphone'+divId].value;
		var comments = addContractorForm.elements['comments2'+divId].value;
				
		var dropDownParam = document.getElementById("dropDownParam").value;
		var currentSelectContractor = document.getElementById("currentSelectContractor").value;

		if (typeof XMLHttpRequest != "undefined") {
			xmlHttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		if (xmlHttp == null) {
			alert("Browser does not support XMLHTTP Request")
			return;
		}
		
			var url = "ContractorLoad.jsp";
			url += "?name="+name+"&contact="+contact+"&phone="+phone+"&comments="+comments+"&selectContractor="+currentSelectContractor+dropDownParam;
			//alert("URL "+url)
			xmlHttp.onreadystatechange = contractorChange;
			xmlHttp.open("GET", url, true);
			xmlHttp.send(null);			

			hideAddContractor(divId);
			updateRelatedDropdowns();
	}
}

