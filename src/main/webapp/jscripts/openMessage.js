function openMessage(strURL) {
	var intWidth = 620;
	var intHeight = 475;
	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
	window.open(strURL, '', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=auto,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
}