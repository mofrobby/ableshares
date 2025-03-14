// TableDisplayToolbarButton Class Javascripts

// Check Box Functions - 

function checkAll(aMasterChkBox)
{
	var frmObject;
	var i;
	frmObject = document.all.tableForm;
	if (aMasterChkBox.checked == true)
	{
	    for (i=0; i<frmObject.elements.length; i++)
	    	frmObject.elements(i).checked = true;
	}
	else
	{
	   	for (i=0; i<frmObject.elements.length; i++)
			frmObject.elements(i).checked = false;	  
	}
}

function sendCheckedItems(strAction)
{
	frmObject = document.all.tableForm;
	frmObject.action = strAction;
	frmObject.submit();
}

//called from button click to toggle visibility of all info panels
function toggleInfoPanels(blnInfoPanel) {
	var i = 0;
	while (eval("document.all.trwInfoPanel"+ i)) {
		obj = eval("document.all.trwInfoPanel"+ i);
		obj.style.display = blnInfoPanel ? 'block' : 'none';
		i++;
	}
}