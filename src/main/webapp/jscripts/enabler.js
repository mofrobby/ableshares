function Enabler(objImg, objFrm, strYes, strNo){
	this.imgYes = new Image;
	this.imgNo = new Image;
	this.imgYes.src = strYes;
	this.imgNo.src = strNo;
	this.objImg = objImg;
	this.form = objFrm;
	this.addDrop = mtdEnAddDrop;
	this.addText = mtdEnAddText;
	this.check = mtdEnCheck;
}
function mtdEnAddDrop(obj){
	obj.onchange = this.check;
	obj.enabler = this.instance;
	obj.goEnabler = true;
}
function mtdEnAddText(obj){
	obj.onkeyup = this.check;
	obj.enabler = this.instance;
	obj.goEnabler = true;
}
function mtdEnCheck() {
	this.enabler = this.enabler ? this.enabler : this;
	var e;
	var bln=false;
	for (var i=0; i<this.enabler.form.elements.length; i++) {
		e = this.enabler.form.elements(i);
		if (e.goEnabler){
			switch(e.type) {
				case 'select-one':
					if (e.selectedIndex!=0) bln=true;
					break;
				case 'text':
					if(e.value.length!=0) bln=true;
			}
		}
	}
	this.enabler.objImg.src = bln ? this.enabler.imgYes.src : this.enabler.imgNo.src;
	this.enabler.objImg.style.cursor = bln ? 'auto' : 'default';
	this.enabler.objImg.onclick = bln ? null : noLink;
	this.enabler.objImg.disabled = !bln;
}

function noLink () {
	return false
}
