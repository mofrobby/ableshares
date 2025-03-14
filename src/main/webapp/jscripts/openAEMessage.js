function openAEMessage() {
	//alert('message');
	var intWidth = 610;
	var intHeight = 444;
	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
	window.open('messaskexpert.html', '', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=auto,resizable=no,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
}