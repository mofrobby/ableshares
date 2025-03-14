function openDoc(strDoc) {
	var intWidth = 600;
	var intHeight = 400;
	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
	window.open(strDoc, '', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=auto,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
}