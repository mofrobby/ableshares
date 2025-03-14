//Constructor Class
function Messageview(messageViewType) {
	//properties
	this.messageViewType = messageViewType;				//display name
	this.askExpertHeadings = new Array('Topic','Category','From','Date','Watch');
	this.generalMessageHeadings = new Array('Description','Date');
	this.gapMessageHeadings = new Array('Thread ID','Subject','From','Date','Watch');
	this.techDocHeadings = new Array('Document','Number','Version','Edited','Size','Author');
	this.serviceRequestHeadings = new Array('Request #','Subject','Created By','Last Updated','Status');
	this.topicHeadings = new Array('Thread','Started By','Replies','Views','Last Post');
		
		// methods
		this.getColumnHeadingsHTML = mtdGetColumnHeadingsHTML;
		this.getFilterBarHTML = mtdGetFilterBarHTML;
		this.getMessageRowsHTML = mtdGetMessageRowsHTML;
		this.openExpertMessage = mtdOpenExpertMessage;

}

// Returns the HTML as a string
function mtdGetFilterBarHTML() {

	var strHTML = '';
	var varcol = 1;
	var lookOption = new Array('Keyword', 'Category', 'Status');
	var categoryOption = new Array('Other Stuff');
	var newAskExpertLink ='';
	
	
	if (this.messageViewType !=null && this.messageViewType != 'Topic') {	//if the value passed is valid	
		strHTML += '<table cellpadding=0 cellspacing=0 class="borDkGray" width="100%">';
		
		strHTML += '<tr><td class="bLiGray"><table><tr>';
		strHTML += '<td><span class="tBlackMini">Look for:</span></td>';
		strHTML += '<td><img src="x.gif" height=25 width=1 border=0></td>';
		strHTML += '<td class="tBlackMini" nowrap><select class="xForm" style="width=120">';
		strHTML += '<option selected>All</option>';
		for(x=0; x<lookOption.length ; x++){
			
							strHTML += '<option>'+lookOption[x]+'</option>';
		}
		strHTML += '</select></td>';
		strHTML += '<td><img src="x.gif" height=25 width=1 border=0></td>';
		strHTML += '<td><span class="tBlackMini">Value:</span></td>';
		strHTML += '<td class="tBlackMini" nowrap><select class="xForm" style="width=120">';
		strHTML += '<option selected>All</option>';
		for(x=0; x<categoryOption.length ; x++){
			
							strHTML += '<option>'+categoryOption[x]+'</option>';
		}
		strHTML += '</select></td>';
		strHTML += '<td><img src="x.gif" height=25 width=3 border=0></td>';
		strHTML += '<td class="bLiGray" nowrap><button style="width:80px;" class=btnGraySmall onclick="" title="Find Now" >&nbsp;Find Now&nbsp;<img src="img/toolbar/icoArrow.gif" align=absmiddle width=13 height=12></button>&nbsp;</td>';
		strHTML += '</tr></table></td>';					 
		strHTML += '<td class="bLiGray" align="right"><table><tr>';
		if (this.docViewType=='TechLib') {
			strHTML += '<td colspan=3><img src="x.gif" height=25 width=1 border=0></td>';		
		}
		else if(this.messageViewType=='AskAnExpert') {
			strHTML += '<td><span class="tBlackMini">Actions:</span></td>';
			strHTML += '<td><img src="x.gif" height=25 width=1 border=0></td>';
			strHTML += '<td class="bLiGray" nowrap><button style="width:54px;" class=btnGraySmall onclick="openAEMessage();" title="Create New Thread"> <img src="img/AskanExpertSm.gif" align=absmiddle width=18 height=14>&nbsp;New</button>&nbsp;</td>';
		}
		else if(this.messageViewType=='Resolve Gaps') {
			strHTML += '<td><span class="tBlackMini">Actions:</span></td>';
			strHTML += '<td><img src="x.gif" height=25 width=1 border=0></td>';
			strHTML += '<td class="bLiGray" nowrap><button style="width:54px;" class=btnGraySmall onclick="mtdOpenNewResolveGap();" title="Create New Thread"><img src="img/icoGaps.gif" align=absmiddle width=15 height=14>&nbsp;New</button>&nbsp;</td>';
		}
		else if(this.messageViewType=='Requests') {
			strHTML += '<td><span class="tBlackMini">Actions:</span></td>';
			strHTML += '<td><img src="x.gif" height=25 width=1 border=0></td>';
			strHTML += '<td class="bLiGray" nowrap><button style="width:54px;" class=btnGraySmall onclick="mtdOpenNewServiceRequest();" title="Create New Request"><img src="img/AskanExpertSm.gif" align=absmiddle width=18 height=14>&nbsp;New</button>&nbsp;</td>';
		}
		strHTML += '</tr></table></td> </tr>';
		strHTML += '</table>';
}
return strHTML;
}


function mtdGetColumnHeadingsHTML() {
	var strHTML = '';
	var varcol = 1;
	
	if (this.messageViewType !=null) {	//if the value passed is valid	
		strHTML += '<tr><td valign="bottom"><table cellpadding=0 cellspacing=0 border=0 width="100%"><tr class="bYellow" height=23>';
		if (this.messageViewType=='TechLib') {
			for (var x=0; x<this.techDocHeadings.length; x++) {
								      
               strHTML += '<td class="tDkGraySmallBld">&nbsp;'+this.techDocHeadings[x]+'</td>';
			   strHTML += '<td class="tDkGraySmallBld"><img src="img/t.gif" width=1 height=23></td>';
			}		
			strHTML += '<td><img src=x.gif width=83 height=1></td>';						
			strHTML += '</tr>';
			strHTML += '<tr class="bLiGray"><td colspan=18><img src="x.gif" width=1 height=1></td></tr>';
		}
		else if (this.messageViewType=='Topic') {
			for (var x=0; x<this.topicHeadings.length; x++) {
								      
               strHTML += '<td class="tDkGraySmallBld">&nbsp;'+this.topicHeadings[x]+'</td>';
			   strHTML += '<td class="tDkGraySmallBld"><img src="img/t.gif" width=1 height=23></td>';
			}		
			strHTML += '<td><img src=x.gif width=83 height=1></td>';						
			strHTML += '</tr>';
			strHTML += '<tr class="bLiGray"><td colspan=18><img src="x.gif" width=1 height=1></td></tr>';
		}
		else if (this.messageViewType=='AskAnExpert') {
			for (var x=0; x<this.askExpertHeadings.length; x++) {
								      
               strHTML += '<td class="tDkGraySmallBld">&nbsp;'+this.askExpertHeadings[x]+'</td>';
			   if(x < (this.askExpertHeadings.length-1))
			   strHTML += '<td class="tDkGraySmallBld"><img src="img/t.gif" width=1 height=23></td>';
			}		
			//strHTML += '<td><img src=x.gif width=83 height=1></td>';						
			strHTML += '</tr>';
			strHTML += '<tr class="bLiGray"><td colspan=18><img src="x.gif" width=1 height=1></td></tr>';
		}
		else if (this.messageViewType=='Resolve Gaps') {
			for (var x=0; x<this.gapMessageHeadings.length; x++) {
								      
               strHTML += '<td class="tDkGraySmallBld">&nbsp;'+this.gapMessageHeadings[x]+'</td>';
			   if(x < (this.gapMessageHeadings.length-1))
			   strHTML += '<td class="tDkGraySmallBld"><img src="img/t.gif" width=1 height=23></td>';
			}		
			//strHTML += '<td><img src=x.gif width=83 height=1></td>';						
			strHTML += '</tr>';
			strHTML += '<tr class="bLiGray"><td colspan=18><img src="x.gif" width=1 height=1></td></tr>';
		}
		else if (this.messageViewType=='Requests') {
			for (var x=0; x<this.serviceRequestHeadings.length; x++) {
								      
               strHTML += '<td class="tDkGraySmallBld">&nbsp;'+this.serviceRequestHeadings[x]+'</td>';
			   if(x < (this.serviceRequestHeadings.length-1))
			   strHTML += '<td class="tDkGraySmallBld"><img src="img/t.gif" width=1 height=23></td>';
			}		
			//strHTML += '<td><img src=x.gif width=83 height=1></td>';						
			strHTML += '</tr>';
			strHTML += '<tr class="bLiGray"><td colspan=18><img src="x.gif" width=1 height=1></td></tr>';
		}
	}			
				
	return strHTML;
}

function mtdGetMessageRowsHTML(rowColor, docLocInArray, icoFilename, isLocked, docName, docNum, docVersion, entryDate, size, auth, ctr) {
	var strHTML = '';	
	var doc = "'file:///"+docLocInArray+"'"; // This appends the doc management system filepath to a standard browser file href
	ctr = Math.round(ctr);
	//alert(ctr);
	if (this.messageViewType !=null) {	//if the value passed is valid	
		strHTML += '<tr height=23 class='+rowColor+'> ';
		if (this.messageViewType=='TechLib') {
		
			strHTML += '<td height=23 valign=middle><nobr>&nbsp;<a href="javascript:download();"><span class=tBlackSmall><img src="'+icoFilename+'" width=16 height=16 hspace=3 align=absmiddle border=0><img src="img/icoLockOpen.gif" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
			strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
            strHTML += '<td nowrap><a href="javascript:download();" class="tBlackSmall">'+docNum+'</a></td>';
            strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
           	strHTML += '<td nowrap><a href="javascript:download();" class="tBlackSmall">'+docVersion+'</a></td>';
           	strHTML += ' <td><img src="img/t.gif" width=1 height=23></td>';
            strHTML += '<td nowrap><a href="javascript:download();" class="tBlackSmall">'+entryDate+'</a></td>'; 
			strHTML += '<td><img src="img/t.gif" width=1 height=23></td>'; 
			strHTML += '<td nowrap><a href="javascript:download();" class="tBlackSmall">'+size+'</a></td> '; 
			strHTML += '<td><img src="img/t.gif" width=1 height=23></td>'; 
			strHTML += '<td nowrap><a href="javascript:download();" class="tBlackSmall">Bobby Manfreddy</a></td>';  
			strHTML += '<td><img src="img/t.gif" width=1 height=23></td>'; 
			strHTML += '<td nowrap height=17 valign=middle><img src=x.gif height=17 width=1><a href="javascript:objMenu.show('+ctr+');"><img src="img/butOptionsDrop.gif" id="imgTrigger'+ctr+'" style="position:absolute;" width="83" height="17" alt="Document Options" border="0"></a></td>';  			        
			strHTML += '</tr>';
         //	strHTML += '<tr class="t"><td colspan=18><img src="x.gif" width=1 height=1></td></tr>';
         	strHTML += '<tr class="bDkYellow"><td colspan=14><img src="x.gif" width=1 height=1></td></tr>'; 
		}
		if (this.messageViewType=='AskAnExpert') {
		
		
			strHTML += '<td height=23 valign=center><nobr>&nbsp;<a href="expertFolderMes.html"><span class=tBlackSmall><img src="img/AskanExpertSm.gif" align=absmiddle width=18 height=14 border=0>'+docName+'</span></a>&nbsp;</nobr></td>';
            strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
            strHTML += '<td nowrap><a href="expertFolderMes.html" class="tBlackSmall">category</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
          	strHTML += '<td nowrap><a href="expertFolderMes.html" class="tBlackSmall">'+auth+'</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
            strHTML += '<td nowrap><a href="expertFolderMes.html" class="tBlackSmall">'+entryDate+'</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
          	strHTML += '<td nowrap><input type="checkbox" unchecked></td>';			  			        
			strHTML += '</tr>';         
         	strHTML += '<tr class="bDkYellow"><td colspan=14><img src="x.gif" width=1 height=1></td></tr>'; 
		}
		if (this.messageViewType=='Resolve Gaps' )  {		
		
			strHTML += '<td height=23 valign=center><nobr>&nbsp;<span class=tBlackSmall><img src="img/icoGaps.gif" align=absmiddle width=15 height=14 border=0>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Resolve Gaps">'+docNum+'</a></span>&nbsp;</nobr></td>';
            strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
            strHTML += '<td nowrap><a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Resolve Gaps" class="tBlackSmall">'+docName+'</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
          	strHTML += '<td nowrap><a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Resolve Gaps" class="tBlackSmall">'+auth+'</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
            strHTML += '<td nowrap><a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Resolve Gaps" class="tBlackSmall">'+entryDate+'</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
          	strHTML += '<td nowrap><input name="watchBox'+docNum+'" type="checkbox" unchecked onClick="mtdShowImage('+docNum+');"><img src="x.gif" name="eyeglasses'+docNum+'" border="0" width="31" height="11"></td>';			  			        
			strHTML += '</tr>';         
         	strHTML += '<tr class="bDkYellow"><td colspan=14><img src="x.gif" width=1 height=1></td></tr>'; 
		}
		if (this.messageViewType=='Requests')  { //size in this case will be the document comments field which is the status		
		
			strHTML += '<td height=23 valign=center><nobr>&nbsp;<span class=tBlackSmall><img src="img/AskAnExpertSm.gif" align=absmiddle width=18 height=14 border=0>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Service Request">'+docNum+'</a></span>&nbsp;</nobr></td>';
            strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
            strHTML += '<td nowrap><a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Requests" class="tBlackSmall">'+docName+'</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
          	strHTML += '<td nowrap><a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Requests" class="tBlackSmall">'+auth+'</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
			strHTML += '<td nowrap><a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Requests" class="tBlackSmall">'+entryDate+'</a></td>';
          	strHTML += '<td><img src="img/t.gif" width=1 height=23></td>';
          	strHTML += '<td nowrap><a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Requests" class="tBlackSmall">'+size+'</a></td>';			  			        
			strHTML += '</tr>';         
         	strHTML += '<tr class="bDkYellow"><td colspan=14><img src="x.gif" width=1 height=1></td></tr>'; 
		}
		
	}
	return strHTML;
}			 
					

function mtdOpenExpertMessage() {
	//alert(messageView);
	var intWidth = 600;
	var intHeight = 400;
	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
	window.open("/AppArch/messaskexpert.html", '', 'toolbar=no,location=no,directories=no,status=yes,menubar=yes,scrollbars=auto,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
}

function mtdOpenNewResolveGap() {
	//alert(messageView);
	var intWidth = 620;
	var intHeight = 475;
	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
	window.open("/AppArch/NewMessage.do?messageTypeID=1&messageParentID=-1", '', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=auto,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
}

function mtdOpenNewServiceRequest() {
	//alert(messageView);
	var intWidth = 640;
	var intHeight = 481;
	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
	window.open("/AppArch/NewMessage.do?messageTypeID=2&messageParentID=-1", '', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
}

function mtdFormatAASR(docNum) {
	var places = 4;
	var endString = "";
	var addedZeros = 0;
	var n = docNum.length;
	//alert('docNum ' +n);
	if (n < places){
		addedZeros = places - n;
		//alert('added zeros '+addedZeros);
	}
	for(var i =0; i < addedZeros; i++){
		endString+='0';
	}
	return endString+docNum;
	
}

function mtdShowImage(docNum) {
	var box = eval('document.all.watchBox'+docNum);
	if(box.checked){		
		var icon = 'img/eyeglasses.gif';	
		eval('document.images.eyeglasses'+docNum+'.src = "' + icon + '"');
	}
	else{
		var icon = 'x.gif';	
		eval('document.images.eyeglasses'+docNum+'.src = "' + icon + '"');
	}	
	
}

