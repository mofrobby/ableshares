/*!
 * Copyright HillTopSI
 *
 * Date: 2014-09-25
 */

function setMissionProjectUp(objForm, divId) {		
	
	//init_person_form(objForm);		
	init_form(objForm);		
	//alert (divId);
	
	//alert('form initiated');
	cDefaultErrorMsg = "Please check your input values"		

	eval('objForm.txtCode' + divId + '.required = true');
	eval('objForm.txtName' + divId + '.required = true');
	eval('objForm.selFiscalYear' + divId + '.required = true');
	eval('objForm.txtCode' + divId + '.maxLen = 5');
	eval('objForm.txtCode' + divId + '.format = "alphaNumeric"');
	eval('objForm.txtName' + divId + '.maxLen = 125');
	eval('objForm.txtName' + divId + '.format = "alphaNumeric"');
	eval('objForm.txtName' + divId + '.includedChars = " -_/&"');
	eval('objForm.txtAmtBudgeted' + divId + '.format = "numeric"');
	eval('objForm.txtAmtBudgeted' + divId + '.includedChars = "."');
	eval('objForm.txtDirectorApproved' + divId + '.format = "numeric"');
	eval('objForm.txtDirectorApproved' + divId + '.includedChars = "."');
	eval('objForm.txtProjectApproved' + divId + '.format = "numeric"');
	eval('objForm.txtProjectApproved' + divId + '.includedChars = "."');
}

function openAddMissionProject(divId, currentSelectMissionProject, dropDownParam){	
	document.getElementById(divId).style.display = 'block';	
	document.getElementById("dropDownParam").value = dropDownParam;	
	document.getElementById("currentSelectMissionProject").value = currentSelectMissionProject;
}

function hideAddMissionProject(divId){	
	document.getElementById(divId).style.display = 'none';		
}

function missionProjectChange() {
	var currentSelectMissionProject = document.getElementById("currentSelectMissionProject").value;		
	var currentSelectElement = null;		
	var currentSelectElementSpan = null;		

	if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
		currentSelectElement = document.getElementById(currentSelectMissionProject);
		currentSelectElementSpan = document.getElementById(currentSelectMissionProject + "Span");
		var newspan = document.createElement("span");
		newspan.innerHTML = xmlHttp.responseText;
		currentSelectElementSpan.innerHTML = '';
		currentSelectElementSpan.appendChild(newspan);
		fireBrowserEvent(currentSelectElement, 'change');
	}
}

function addMissionProjectLoadUp(divId) {
	var addMissionProjectForm = document.getElementById(divId + 'Id');	
	//alert('about to validate')	;
	var obj = addPersonForm.validate();		
	if(obj){	

		var txtCode = addMissionProjectForm.elements['txtCode'+divId].value;
		var txtName = addMissionProjectForm.elements['txtName'+divId].value;
		var selFiscalYear = addMissionProjectForm.elements['selFiscalYear'+divId].value;
		var selDirectorateName = addMissionProjectForm.elements['selDirectorateName'+divId].value;
		var selSource = addMissionProjectForm.elements['selSource'+divId].value;
		var txtAmtBudgeted = addMissionProjectForm.elements['txtAmtBudgeted'+divId].value;
		var txtDirectorApproved = addMissionProjectForm.elements['txtDirectorApproved'+divId].value;
		var txtProjectApproved = addMissionProjectForm.elements['txtProjectApproved'+divId].value;
		var chkUnfunded = addMissionProjectForm.elements['chkUnfunded'+divId].value;
		var chkMsRD = addMissionProjectForm.elements['chkMsRD'+divId].value;
		var chkVisible = addMissionProjectForm.elements['chkVisible'+divId].value;
		var dropDownParam = document.getElementById("dropDownParam").value;
		var currentSelectMissionProject = document.getElementById("currentSelectMissionProject").value;

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
		var url = "MissionProjectInsert.jsp";
		url += "?code="+txtCode+"&name="+txtName+"&fiscalYear="+selFiscalYear+"&directorateName="+selDirectorateName+"&source="+selSource+"&amtBudgeted="+txtAmtBudgeted+
		"&directorApproved="+txtDirectorApproved+"&projectApproved="+txtProjectApproved+"&chkUnfunded="+chkUnfunded+"&chkMsRD="+chkMsRD+"&chkVisible="+chkVisible+
		"&selectMissionProject="+currentSelectMissionProject+dropDownParam;
		alert("URL "+url);
		xmlHttp.onreadystatechange = personChange;
		xmlHttp.open("GET", url, true);
		xmlHttp.send(null);			

		hideAddMissionProject(divId);
		updateRelatedDropdowns();
	}
}

