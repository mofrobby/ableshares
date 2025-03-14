//Constructor Class
function Docview(docViewType) {
	//properties
	this.docViewType = docViewType;				//display name
	this.secureDocHeadings = new Array('Document','Number','Version','Edited','Size','Author');
	this.publicDocHeadings = new Array('Description','Date');
	this.inboxDocHeadings = new Array('From','Subject','Date');
		
		// methods
		this.getColumnHeadingsHTML = mtdGetColumnHeadingsHTML;
		this.getDocRowsHTML = mtdGetDocRowsHTML;
		this.openDoc = mtdOpenDoc;
	
}

// Returns the HTML as a string
function mtdGetColumnHeadingsHTML() {
	var strHTML = '';
	var varcol = 1;
	
	if (this.docViewType !=null) {	//if the value passed is valid	
		strHTML += '<tr>';
		if (this.docViewType=='Secure') {
			for (var x=0; x<this.secureDocHeadings.length; x++) {
				if(x == 5) { varcol = 2; }			
				strHTML += '<td class=bYellow height=18 valign=bottom colspan=' +varcol+'>&nbsp;<span class=tBlackSmallBld>' + this.secureDocHeadings[x] + '</span>&nbsp;</td>'
			}
			strHTML += '</tr> <tr>';
			for (var y=0; y<5; y++) {
				strHTML +='<td class=bYellow height=5><img src="x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
			}
			strHTML += '<td class=bYellow height=5><img src="x.gif" width=1 height=5 align=right hspace=0></td>';
			strHTML += '<td class=bYellow height=5 width=65><img src="x.gif" width=1 height=1></td>';
		}
		if (this.docViewType=='Inbox') {
			for (var x=0; x<this.inboxDocHeadings.length; x++) {
				if(x == 2) { varcol = 2; }			
				strHTML += '<td class=bYellow height=18 valign=bottom colspan=' +varcol+'>&nbsp;<span class=tBlackSmallBld>' + this.inboxDocHeadings[x] + '</span>&nbsp;</td>'
			}
			strHTML += '</tr> <tr>';
			for (var y=0; y<2; y++) {
				strHTML +='<td class=bYellow height=5><img src="../img/x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
			}
			strHTML += '<td class=bYellow height=5><img src="../img/x.gif" width=1 height=5 align=right hspace=0></td>';
			strHTML += '<td class=bYellow height=5 width=65><img src="../img/x.gif" width=1 height=1></td>';
		}
		if (this.docViewType=='Public') {
			strHTML += '<tr>';
				strHTML += '<td class=bYellow height=18 valign=bottom>&nbsp;<a href="#"><span class=tBlackSmallBldUnd>Description</span></a>&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom><img src="x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>';
				strHTML += '<td class=bYellow height=18 valign=bottom>&nbsp;<a href="#"><span class=tBurntSmallBldUnd>Date</span></a>&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom align="right">&nbsp;&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom colspan=2>&nbsp;</td>';
			strHTML += '</tr>';
			strHTML += '<tr>';
				strHTML += '<td class=bYellow height=5 width=65 colspan="6"><img src="x.gif" width=1 height=1></td>';
			strHTML += '</tr>';
			strHTML += '<tr>';
				strHTML += '<td class=bLiBurnt colspan=6 height=1><img src="x.gif" width=1 height=1></td>';
			strHTML += '</tr>';
		}
		if (this.docViewType=='SearchContent') {
			strHTML += '<tr>';
				strHTML += '<td class=bYellow height=18 valign=bottom>&nbsp;<a href="#"><span class=tBlackSmallBldUnd>Description</span></a>&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom><img src="x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>';
				strHTML += '<td class=bYellow height=18 valign=bottom>&nbsp;<a href="#"><span class=tBurntSmallBldUnd>Type</span></a>&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom align="right">&nbsp;&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom colspan=2>&nbsp;</td>';
			strHTML += '</tr>';
			strHTML += '<tr>';
				strHTML += '<td class=bYellow height=5 width=65 colspan="6"><img src="x.gif" width=1 height=1></td>';
			strHTML += '</tr>';
			strHTML += '<tr>';
				strHTML += '<td class=bLiBurnt colspan=6 height=1><img src="x.gif" width=1 height=1></td>';
			strHTML += '</tr>';
		}
		
	}//193
	//var bug = window.open(" ", "bug","status=0 toolbar=0");
	//bug.document.writeln(strHTML);
	return strHTML;
}

function mtdGetDocRowsHTML(rowColor, docLocInArray, icoFilename, isLocked, docName, docNum, docVersion, entryDate, size, auth, ctr) {
	var strHTML = '';
	var author = '';
	ctr = Math.round(ctr) ;	
	var doc = "'../Viewer"+docLocInArray+"'"; // This appends the doc management system filepath to a standard browser file href
	var email = "'EmailView.do?loc="+docLocInArray+"&docNum="+docNum+"&date="+entryDate+"'";
	var locked = '../img/icoLockOpen.gif';
	if(isLocked)
		locked='../img/icoLockClosed.gif'; 	
	//alert('creating html rows');
	if (this.docViewType !=null) {	//if the value passed is valid	
		strHTML += '<tr>';
		if (this.docViewType=='Secure') {
			 
					strHTML += '<%-- Document icon, status and description --%>';
					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+icoFilename+'" width=16 height=16 hspace=3 align=absmiddle border=0><img src="'+locked+'" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
					strHTML += '<%-- Document number --%>';
					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+docNum+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<%-- Document version --%>';
					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+docVersion+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<%-- Last edit date --%>';		
					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+entryDate+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<%-- Size --%>';		
					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+Math.ceil(size/1000)+'K</a></span>&nbsp;</nobr></td>';
					strHTML += '<%-- Author --%>';
					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+auth+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<%--  Java Script Menu --%>';												
					strHTML += '<td class='+rowColor+' height=18 valign=middle>&nbsp;<a href="javascript:objMenu.show('+ctr+');"><img src="img/butOptionsDrop.gif" id="imgTrigger'+ctr+'" style="position:absolute;" width="83" height="17" alt="Document Options" border="0"></a></td>'; 
				strHTML += '</tr>';
				strHTML += '<tr>';
					strHTML += '<td class='+rowColor+'  height=5><img src="x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="x.gif" width=92 height=5></td>'
				strHTML += '</tr>';
				strHTML += '<tr>';
					strHTML += '<td class=bDkYellow colspan=7 height=1><img src="x.gif" width=1 height=1></td>';
				strHTML += '</tr>';
			}
			else if (this.docViewType=='Public' || this.docViewType=='SearchContent') {
				strHTML += '<tr>';
					strHTML += '<%-- Document icon, description --%>';
					strHTML += '<td class='+rowColor+' height=23 valign=center rowspan=2><nobr>&nbsp;<span class=tDkGraySmall><img src="'+icoFilename+'" border="0" align="absmiddle" alt="">&nbsp;<a href="javascript:mtdOpenDoc('+doc+');">'+docName+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<td class='+rowColor+' height=23 valign=bottom rowspan=2 width=1><img src="x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<%-- Document entry date --%>';
					strHTML += '<td class='+rowColor+' height=18 valign=bottom colspan=4><nobr>&nbsp;<span class=tDkGraySmall>'+entryDate+'</span>&nbsp;</nobr></td>';
				strHTML += '</tr>';
				strHTML += '<tr>';
					strHTML += '<td class='+rowColor+' height=5 colspan="4"><img src="x.gif" width=1 height=1></td>';
				strHTML += '</tr>';
				strHTML += '<tr>';
					strHTML += '<td class=bDkYellow colspan=7 height=1><img src="x.gif" width=1 height=1></td>';
				strHTML += '</tr>';			
			}
			else if (this.docViewType=='Inbox') {
			
				if(icoFilename == '../img/icoEnvUnRead.gif'){
					auth = '<b>'+auth+'</b>'
				}
				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+email+');"><img src="'+icoFilename+'" width="14" height="14" border="0" hspace="4" align=absmiddle><span class=tDkGraySmall>'+auth+'</span></a>&nbsp;</nobr></td>';
				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+email+');"><span class="tDkGraySmall">'+docName+'</span></a>&nbsp;</nobr></td>';
				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+email+');"><span class="tDkGraySmall">'+entryDate+'</span></a>&nbsp;</nobr></td>';				
				strHTML += '<td class='+rowColor+' rowspan=2 align=right valign=bottom>&nbsp;<a href="RemoveInboxItems.do?docNum='+docNum+'"><img src="../img/butRemoveLiGray.gif" width=51 height=17 alt="Remove Message from Inbox" border=0></a>&nbsp;&nbsp;</td>';
				strHTML += '</tr>';
				strHTML += '<tr>';
				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" width=1 height=1></td>';
				strHTML += '</tr>';
				strHTML += '<tr>';
				strHTML += '<td class=bDkYellow colspan=5 height=1><img src="../x.gif" width=1 height=1></td>';
				strHTML += '</tr>'; 
					
			}
	}
	return strHTML;
}

function mtdOpenDoc(strDoc) {
	
	var intWidth = 600;
	var intHeight = 400;
	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
	window.open(strDoc, '', 'toolbar=no,location=no,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
}

//javascript:getResults(5, '+docLocInArray+');