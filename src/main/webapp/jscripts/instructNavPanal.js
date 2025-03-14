
//NavPanal Constructor
function NavPanal(){
	this.step = 0;
	this.panals = new Array();
	this.labels = new Array();
	//this.fnCallBack = fnCallBack;	
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
	if (varVal==this.panals.length)
	{		
		var frame = eval('ifrNavCheck');
		if (frame.frameElement)		//IE5.5 can get in this way
		{
		
		frame = frame.frameElement;
		//alert(frame.src);
		frame.src = "InitiateProjectSubmit.html";
		
		}
	}
		this.step = eval(varVal);
		this.sync();
		
		
	
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
	//this.step += eval(varVal);
	this.sync();
	//sync the instructions
	//fnInstructSync(this.labels[this.step]);
}

//sync visual elements
function mtdNPSync() {
	
	if (this.step<this.panals.length) {
		//hide all corresponding divs
		for (i=0; i<this.panals.length; i++) {
			var obj = eval('document.all.'+ this.panals[i]);
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
