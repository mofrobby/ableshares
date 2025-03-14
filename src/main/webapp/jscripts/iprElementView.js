//ver 1.0 - Neiland Wright
 
 //Constructor Class
    function Elementview(docViewType) {
    	//properties
    	this.docViewType = docViewType;				//display name
    		 
        // methods
        this.openDoc = mtdOpenDoc;
    	
    }
    
    
    function mtdOpenDoc(strDoc) {
    	
    	var intWidth = 800;
    	var intHeight = 400;
    	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
    	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
    	window.open(strDoc, '', 'toolbar=no,location=no,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
    }
    function mtdOpenDocSelf(strDoc) {
    	
    	var intWidth = 800;
    	var intHeight = 400;
    	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
    	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
    	window.open(strDoc, '_self', 'toolbar=no,location=no,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=no,copyhistory=no');
    }
    function mtdOpenMilestoneDoc(strDoc) {
    	
    	var intWidth = 1000;
    	var intHeight = 430;
    	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
    	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
    	window.open(strDoc, '', 'toolbar=no,location=no,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
    }
    
