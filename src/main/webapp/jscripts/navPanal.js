
//NavPanal Constructor
function NavPanal(strBack, strNext, strSubmit, strSave, strCancel, fnCallBack, fnInstructSync){
	this.step = 0;
	this.panals = new Array();
	this.labels = new Array();
	this.fnCallBack = fnCallBack;
	this.saveAnc = strSave;
	this.cancelAnc = strCancel;
	this.backAnc = strBack;
	this.nextAnc = strNext;
	this.submitAnc = strSubmit;
	this.add = mtdNPAdd;
	this.addFinal = mtdNPAddFinal;
	this.go = mtdNPGo;
	this.goCommit = mtdNPGoCommit;
	this.sync = mtdNPSync;

//adds a new panal
function mtdNPAdd(strIfr, strLabel) {
	i = this.panals.length;
	this.panals[i] = strIfr;
	this.labels[i] = strLabel;
}

//adds a final navigation image (doesn't add a panal, but adds an image
function mtdNPAddFinal(strLabel) {
	i = this.panals.length;
	this.labels[i] = strLabel;
}

//navigates forward and back (-1 or 1)
function mtdNPGo(varVal) {
	//call the callback function at this point
	//alert(this.labels[this.step]+" "+ varVal);
	this.fnCallBack(this.labels[this.step], varVal)
}

//navigates forward and back (-1 or 1)
//	this should be called from the callback function if all is ok to move on, needs to pass the same varVal back in
function mtdNPGoCommit(varVal) {
	if (varVal=='submit')
	{		
		var frame = eval('ifrNavTabs');
		if (frame.frameElement)		//IE5.5 can get in this way
		{
		
		frame = frame.frameElement;
		//alert(frame.src);
		frame.src = "InitiateProjectSubmit.html";
		varVal = 1;
		}
	}
	this.step += eval(varVal);
	this.sync();
	//sync the instructions
	//fnInstructSync(this.labels[this.step]);
}

//sync visual elements
function mtdNPSync() {
	//buttons
	obj = eval('document.all.'+ this.backAnc +'.style');
	objC = eval('document.all.'+ this.cancelAnc +'.style');
	if (this.step==0 || this.step>=this.panals.length)
		obj.display = 'none';
	else
		obj.display = 'inline';
	obj = eval('document.all.'+ this.nextAnc +'.style');
	objS = eval('document.all.'+ this.submitAnc +'.style');
	objK = eval('document.all.'+ this.saveAnc +'.style');
	if (this.step==this.panals.length-1) {
		obj.display = 'none';
		objS.display = 'inline';
		objK.display = 'inline';
	} else {
		if (this.step>=this.panals.length) {
			obj.display = 'none';
			objS.display = 'none';
			objK.display = 'none';
			objC.display = 'none';
		} else {
			obj.display = 'inline';
			objS.display = 'none';
			objK.display = 'none';
			objC.display = 'inline';
		}
	}
	if (this.step<this.panals.length) {
		//hide all corresponding divs
		for (i=0; i<this.panals.length; i++) {
			if (obj)
				obj = eval('document.all.'+ this.panals[i]);
			obj.style.display = 'none';
		}
		//show correct div
		obj = eval('document.all.'+ this.panals[this.step]);
		if (obj)
			obj.style.display = 'block';
	}
	//render navigation stages
	for (i=0; i<this.labels.length; i++) {
		objImg = eval('document.all.trwNav' + this.labels[i]);
		objDiv = eval('document.all.divNav' + this.labels[i]);
		objImgArr = eval('document.all.trwNav' + this.labels[i] + 'Arrow');
		if (objImg) {
			objImg.style.display = 'block';
			if (i==this.step)
				objDiv.style.filter = 'alpha(opacity=100)';
			else
				objDiv.style.filter = 'alpha(opacity=' + eval(60-Math.abs(i-this.step)*10) + ')';
		}
		if (objImgArr)
			objImgArr.style.display = 'block';
	}
}


}
