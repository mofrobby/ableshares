var varTBBackColor, varTBBorderColor

function toolLaunch(strURL) {
	var intWidth = 610;
	var intHeight = 411;
	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
	window.open(strURL, '', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=auto,resizable=no,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
}

function toolOver(objAnc) {
	varTBBackColor = objAnc.style.backgroundColor;
	varTBBorderColor = objAnc.style.borderColor;
	objAnc.style.backgroundColor ='#cccccc';
	objAnc.style.borderColor ='#666666';
	if (objAnc.all[0].style && objAnc.all[1].style) {	
		objAnc.all[0].style.display ='none';
		objAnc.all[1].style.display ='inline';
	}
}

function toolOut(objAnc) {
	objAnc.style.backgroundColor = varTBBackColor;
	objAnc.style.borderColor = varTBBorderColor;
	if (objAnc.all[0].style && objAnc.all[1].style) {	
		objAnc.all[0].style.display ='inline';
		objAnc.all[1].style.display ='none';
	}
}

function toolClick(strURL, strTarget) {
	parent.frames[strTarget].location.href = strURL;
}