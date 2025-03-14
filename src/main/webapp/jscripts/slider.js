
//Slider constructor
function Slider(intCount) {
	this.toggle = mtdSLToggle;
	this.chosen = null;
	this.init = mtdSLInit;
	
function mtdSLToggle(intClicked){
	this.chosen = intClicked;
	for (i=0; i<intCount; i++) {
		obj = eval('document.all.divSlideButton' + i);
		if (i>intClicked)
			obj.style.top = document.body.clientHeight+(i-intCount)*25;
		else
			obj.style.top = (i+1)*25;
			
		obj = eval('document.all.divSlidePanal' + i);
		if (i==intClicked)
			obj.style.visibility = 'visible';
		else
			obj.style.visibility = 'hidden';
	}
}

function mtdSLInit() {
	for (i=0; i<intCount; i++) {
		obj = eval('document.all.divSlidePanal' + i);
		obj.style.top = 25*(i+2);
	}
}

}