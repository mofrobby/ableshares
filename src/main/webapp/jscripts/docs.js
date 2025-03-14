function addDoc(data,workspaceid) {
	if (data == importList.data)	// imported docs
		//alert("Preparing to add document");
		//kabinga();
		//obj = window.open('attachMessageTest.html', 'copypop', 'width=560,height=275');
		//fraImportDocs.document.all.docUpload.style.display = "block";		
		importDoc(-1, false, 3,'new', 'unknown');		
		refreshAdd(fraImportDocs.document.all.dataTable, importList.data);
		//window.captureEvents('onClose')
		
		//window.open('upload_document.jsp?Caller=MessageAdd&folderId='+workspaceid, 'copypop', 'width=560,height=275')
		//window.open('/messages/messAttachdocsPopup.asp', 'copypop', 'width=399,height=399')
	//else							// imported docs
		//window.open('upload_document.jsp?Caller=MessageAdd&folderId='+workspaceid, 'copypop', 'width=560,height=275')
}

function viewDoc(data) {
	var count = 0
	var cur
	for (var i=0; i < data.length; i++) {
		if (data[i][1]) {
			count++
			cur = i
		}
	}
	if (count < 1) {
		alert("You must select one document to view.")
		return
	}
	if (count > 1) {
		alert("You must select only one document to view.")
		return
	}
	alert(data[cur][0])
	var viewpop = window.open("", "", "width=300, height=200")
}

function removeDoc(strData, dt) {
	var tArray = new Array() // array representing a container for documents not selected for removal
	var rArray = new Array()  // array representing a container for documents that have been selected for removal
	var data = eval(strData)
	for (var i=0; i < data.length; i++) {
		if (!data[i][1]) { //data[i][1] is the flag indicating if the document was selected
			tArray[tArray.length] = data[i]
			//alert( "not being removed "+i);
			 
		}
		else{
		//collect doc ids being removed in an array - turn to string and submitted for removal from session object
		//we must be sure to screen out the entries with a -1 docID - this means I removed a file input line before 
		//selecting a document
			//alert(data[i][0])
			if(data[i][0] > -1){
				//alert('placing document in the array')	
				rArray[rArray.length] = data[i]				
			}
		}
		//alert( "being removed "+i);
	}
	eval(strData + ' = tArray')
	data = tArray
	//alert('data = '+data.length);
	refreshDocs(dt, data)
	var oFrame	=	document.all("fraImportDocs");
		oFrame.src = 'RemoveImportDoc.do?removeImportDocs='+rArray.join()	
}

function removeActivity(strData, dt) {
	var tArray = new Array() // array representing a container for documents not selected for removal
	var rArray = new Array()  // array representing a container for documents that have been selected for removal
	var data = eval(strData)
	for (var i=0; i < data.length; i++) {
		if (!data[i][1]) { //data[i][1] is the flag indicating if the document was selected
			tArray[tArray.length] = data[i]
			//alert( "not being removed "+i);
			 
		}
		else{
		//collect doc ids being removed in an array - turn to string and submitted for removal from session object
		//we must be sure to screen out the entries with a -1 docID - this means I removed a file input line before 
		//selecting a document
			//alert(data[i][0])
			if(data[i][0] > -1){
				//alert('placing document in the array')	
				rArray[rArray.length] = data[i]				
			}
		}
		//alert( "being removed "+i);
	}
	eval(strData + ' = tArray')
	data = tArray
	//alert('data = '+data.length);
	refreshDocs(dt, data)
	//var oFrame	=	document.all("fraImportDocs");
		//oFrame.src = '/AppArch/RemoveImportDoc.do?removeImportDocs='+rArray.join()	
}