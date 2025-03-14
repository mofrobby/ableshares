var selectedFolderId = -1;  //used in attach documents to remember the last folder that the applet was opened to.

function doSubmit(arg) {
  if(arg != 'blog'){
	if (this.memberList)
		frmMessage.hdnRecipients.value = memberList.data.join()
	if (this.attachList)
		frmMessage.hdnAttachDocs.value = attachList.data.join()
	if (this.importList)		
		frmMessage.hdnImportDocs.value = importList.data.join()
  }

	var chkboxes = checkCheckBoxes();
	
	var obj = frmMessage.validate();	
	if(chkboxes){	
	
		var arr = new Array();
		if(frmMessage.webLogiccheckbox.checked)
			arr[arr.length] = frmMessage.webLogiccheckbox.value 
		if(frmMessage.webSpherecheckbox.checked)
			arr[arr.length++] = frmMessage.webSpherecheckbox.value 
		if(frmMessage.portalcheckbox.checked)
			arr[arr.length++] = frmMessage.portalcheckbox.value 
		if(frmMessage.dotnetcheckbox.checked)
			arr[arr.length++] = frmMessage.dotnetcheckbox.value 
		if(frmMessage.cwscheckbox.checked)
			arr[arr.length++] = frmMessage.cwscheckbox.value 
		if(frmMessage.allcheckbox.checked)
			arr[arr.length++] = frmMessage.allcheckbox.value 
		if(frmMessage.notsurecheckbox.checked)
			arr[arr.length++] = frmMessage.notsurecheckbox.value 
		frmMessage.hdnFWCheckBoxes.value = arr.join();	
	}
	if(obj){
	//buf = ""
	//for (var i=0; i<frmMessage.length; i++) {
		//buf += frmMessage[i].name + " = " + frmMessage[i].value + '\n'
	//}
	
	
	//alert(buf)
	 frmMessage.submit() 
	//	
	}
	
	//window.close();
   

}

function doServiceRequestUpdate() {
//The first condition verifies whether this will require a new thread to be created
//If there is a Parent ID then this is a child and gets directed to 'Update'
	if(frmMessage.hdnMessageParent.value > 0){
	   frmMessage.action = "/AppArch/UpdateServiceRequest.do";
	}
	if (this.memberList)
		frmMessage.hdnRecipients.value = memberList.data.join()
	if (this.attachList)
		frmMessage.hdnAttachDocs.value = attachList.data.join()
	if (this.importList){
		var text = "";
		
		for(var i = 0; i < importList.data.length; i++){
			text+=importList.data[i][0];
			text+="|";
			text+=importList.data[i][1];
			text+="|";
			text+=importList.data[i][2];
			text+="|";
			text+=importList.data[i][3];
			text+="|";
			text+=importList.data[i][4];
			if(i != importList.data.length-1)
			text+="|";
			
			//+"|"+importList.data[i][1]+"|"importList.data[i][2]+"|"importList.data[i][3]+"|"importList.data[i][4]+"|");	
		frmMessage.hdnImportDocs.value = text;
		
		}
	}
	var obj = frmMessage.validate();
	if(obj){
		frmMessage.submit();
	}
}

function doParentRequestUpdate() {

	   frmMessage.action = "/AppArch/UpdateServiceRequest.do";
	   frmMessage.newMessage.value = "false";
	
	if (this.memberList)
		frmMessage.hdnRecipients.value = memberList.data.join()
	if (this.attachList)
		frmMessage.hdnAttachDocs.value = attachList.data.join()
	if (this.importList){
		var text = "";
		
		for(var i = 0; i < importList.data.length; i++){
			text+=importList.data[i][0];
			text+="|";
			text+=importList.data[i][1];
			text+="|";
			text+=importList.data[i][2];
			text+="|";
			text+=importList.data[i][3];
			text+="|";
			text+=importList.data[i][4];
			if(i != importList.data.length-1)
			text+="|";
			
			//+"|"+importList.data[i][1]+"|"importList.data[i][2]+"|"importList.data[i][3]+"|"importList.data[i][4]+"|");	
		frmMessage.hdnImportDocs.value = text;
		
		}
	}
	var obj = frmMessage.validate();
	if(obj){
		frmMessage.submit();
	}
}


function doRecommendationUpdate() {
	frmMessage.action = "/AppArch/UpdateRecommendation.do";
	if (this.memberList)
		frmMessage.hdnRecipients.value = memberList.data.join()
	if (this.attachList)
		frmMessage.hdnAttachDocs.value = attachList.data.join()
	if (this.importList){
		var text = "";
		
		for(var i = 0; i < importList.data.length; i++){
			text+=importList.data[i][0];
			text+="|";
			text+=importList.data[i][1];
			text+="|";
			text+=importList.data[i][2];
			text+="|";
			text+=importList.data[i][3];
			text+="|";
			text+=importList.data[i][4];
			if(i != importList.data.length-1)
			text+="|";
			
			//+"|"+importList.data[i][1]+"|"importList.data[i][2]+"|"importList.data[i][3]+"|"importList.data[i][4]+"|");	
		frmMessage.hdnImportDocs.value = text;
		
		}
	}
	frmMessage.submit();
}


function doServiceRequestSubmit() {
	if (this.memberList)
		frmMessage.hdnRecipients.value = memberList.data.join()
	if (this.attachList)
		frmMessage.hdnAttachDocs.value = attachList.data.join()
	if (this.importList){
		var text = "";		
		for(var i = 0; i < importList.data.length; i++){
			text+=importList.data[i][0];
			text+="|";
			text+=importList.data[i][1];
			text+="|";
			text+=importList.data[i][2];
			text+="|";
			text+=importList.data[i][3];
			text+="|";
			text+=importList.data[i][4];
			if(i != importList.data.length-1)
			text+="|";
			
			//+"|"+importList.data[i][1]+"|"importList.data[i][2]+"|"importList.data[i][3]+"|"importList.data[i][4]+"|");	
		frmMessage.hdnImportDocs.value = text;
		
		}
	}
	
	//var chkboxes = checkCheckBoxes();
	//var obj = frmMessage.validate();	
	if(false){	
	
		var arr = new Array();
		if(frmMessage.webLogiccheckbox.checked)
			arr[arr.length] = frmMessage.webLogiccheckbox.value 
		if(frmMessage.webSpherecheckbox.checked)
			arr[arr.length++] = frmMessage.webSpherecheckbox.value 
		if(frmMessage.portalcheckbox.checked)
			arr[arr.length++] = frmMessage.portalcheckbox.value 
		if(frmMessage.dotnetcheckbox.checked)
			arr[arr.length++] = frmMessage.dotnetcheckbox.value 
		if(frmMessage.cwscheckbox.checked)
			arr[arr.length++] = frmMessage.cwscheckbox.value 
		if(frmMessage.allcheckbox.checked)
			arr[arr.length++] = frmMessage.allcheckbox.value 
		if(frmMessage.notsurecheckbox.checked)
			arr[arr.length++] = frmMessage.notsurecheckbox.value 
		frmMessage.hdnFWCheckBoxes.value = arr.join();	
	}
	//buf = ""
	//for (var i=0; i<frmMessage.length; i++) {
	//	buf += frmMessage[i].name + " = " + frmMessage[i].value + '\n'
	//}
	
	
	//alert(buf)
	frmMessage.submit() 
	//	
	
	
	//window.close();
   

}

