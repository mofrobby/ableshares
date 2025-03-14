
function download(nrtid) 
{
	var destURL = document.location.pathname 
	var ctrl = document.WebTransferCtrl
	ctrl.DestinationURL = "/utilities/ViewDoc.do"
	ctrl.SessionID =  document.cookie
	ctrl.NrtID = nrtid
	ctrl.Server = document.location.hostname 
	ctrl.Protocol = document.location.protocol
	ctrl.Download() 
}


function decodeParamString(paramString) 
{
	return paramString.replace(/\|/g, "&")
}


function doLookup(attributeID, parentName, title, formName, fieldName, dependents) {
	// alert("doLookup(attributeID=" + attributeID + ", parentName=" + parentName + ", title=" + title + ", formName=" + formName + ", fieldName=" + fieldName + ", dependents=" + dependents + ")")
    if( navigator.appName != "Netscape" )
    {
		var form = document.forms(formName)
		if (form) {
			var parentValue = ""
			var parent = form.elements("p-" + parentName)
			if (parent) {
				if (parent.type == "select-one") {
					parentValue = parent.options[parent.selectedIndex].value
				} else {
					parentValue = parent.value
				}
			}
			// Get database name, if any
			var databaseName = ""
			var databaseField = form.elements("p-database")
			if (databaseField) {
				databaseName = databaseField.value
			}
			var params = formName + "," + fieldName + "," + dependents
			document.lookupApplet.setLookupType(attributeID, this, "lookupCallback", parentValue, title, params, databaseName)
		}
    }
}