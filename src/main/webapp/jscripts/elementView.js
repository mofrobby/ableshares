//ver 1.0 - Neiland Wright
//ver 1.2 - touched by tarun to properly name the rows in comments in "mtdGetDocRowsHTML"
//ver 1.4 - touched by tarun to call Diagrams as Documents
//ver 1.5 - touched by tarun to create CRUD links for various Framework Elements

 
 //Constructor Class
    function Elementview(docViewType) {
    	//properties
    	this.docViewType = docViewType;				//display name
    	//this.componentHeadings = new Array('Component','Description','Type','Cost','Phase','Owner');
    	this.componentHeadings = new Array('Component','Type');
    	//this.activityHeadings = new Array('Name','Description','Roles','Phase','Owner');
        this.activityHeadings = new Array('Name','Phase');
    	this.statusHeadings = new Array('Name','Entry Date','Type','Phase','Author');
    	this.recommendationHeadings = new Array('Description','Author','Last Updated');
    	this.concernHeadings = new Array('Name','Author','Last Updated', 'Addressed', 'Next IPR', 'Order');
        this.diagramHeadings = new Array('Document','Number','Version','Edited','Size','Author');
        this.milestoneHeadings = new Array('Name','Author','Last Updated', 'Status', 'Next IPR', 'Order');
    	this.bestPracticeHeadings = new Array('Best Practice','Framework','Version','Edited','Author');
		this.fwDocumentHeadings = new Array('Document','Framework','Version','Edited','Author');
		this.publicDocHeadings = new Array('Description','Date');
		this.accomplishmentHeadings = new Array('Title','Entry Date', 'Author', 'Next IPR', 'Order');
    		 
        // methods
        this.getColumnHeadingsHTML = mtdGetColumnHeadingsHTML;
        this.getDocRowsHTML = mtdGetDocRowsHTML;
        this.getCrudDocRowsHTML = mtdGetCrudDocRowsHTML;
        this.getDocumentRowsHTML = mtdGetDocumentRowsHTML;
        this.openDoc = mtdOpenDoc;
    	
    }
    
    // Returns the HTML as a string
    function mtdGetColumnHeadingsHTML() {
    	var strHTML = '';
    	var varcol = 1;
    	
    	if (this.docViewType !=null) {	//if the value passed is valid	
    		strHTML += '<tr>';
    		if (this.docViewType=='FWComponents') {    			
    			strHTML =' <tr > ';  
                strHTML +='<!-- title col1 - ID -->  ';
                strHTML +='<td width="5%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>ID</span>&nbsp;</nobr></td>';  
                strHTML +='<!-- title col2 - Name --> '; 
                strHTML +='<td width="30%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Component&nbsp;Name</span>&nbsp;</nobr></td>';  
                strHTML +='<!-- title col3 - Phase -->';  
                strHTML +='<td width="55%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Component Type</span>&nbsp;</nobr></td> '; 
                strHTML +='<!-- title col4 - Edit --> '; 
                strHTML +='<td width="5%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Edit</span>&nbsp;</nobr></td>';  
                strHTML +='<!-- title col5 - Delete -->';  
                strHTML +='<td width="5%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Delete</span>&nbsp;</nobr></td>';  
            strHTML +='</tr>';
            strHTML +='<!-- line with greenx markers aligned right in a <td> -->';
            strHTML +='<tr>';
               strHTML +='<td width="5%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5"  vspace="0" hspace="0"></td>';
                strHTML +='<td width="30%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5"  vspace="0" hspace="0"></td>';
                strHTML +='<td width="55%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5" vspace="0" hspace="0"></td>';
                strHTML +='<td width="5%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5" vspace="0" hspace="0"></td>';                
                strHTML +='<td width="5%" class=bYellow  align="right" valign=bottom ></td>';
            strHTML +='</tr>';			
    		}
			else if (this.docViewType=='Components') {    			
    			strHTML =' <tr > ';  
                strHTML +='<!-- title col1 - Name --> '; 
                strHTML +='<td class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Component&nbsp;Name</span>&nbsp;</nobr></td>';  
                strHTML +='<!-- title col2 - Type -->';  
                strHTML +='<td class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Component Type</span>&nbsp;</nobr></td> '; 
                strHTML +='</tr>';            
            	strHTML +='<tr>';
                strHTML +='<td class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5"  vspace="0" hspace="0"></td>';
                strHTML +='<td class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5"  vspace="0" hspace="0"></td>';
                strHTML +='</tr>';			
    		}
    		else if (this.docViewType=='Activities' ) {
    			 //Commented out by Tarun to make the table static to define columns by percentages. 
                //This would be helpful to align title and data columns in display_iterate_elements.jsp
                //
    			//for (var x=0; x<this.activityHeadings.length; x++) {							
    			//	strHTML += '<td class=bYellow height=18 valign=bottom colspan=1>&nbsp;<span class=tBlackSmallBld>' + this.activityHeadings[x] + '</span>&nbsp;</td>'
    			//}
    			//strHTML += '</tr> <tr>';
    			//for (var y=0; y<this.activityHeadings.length-1; y++) {
    			//	strHTML +='<td class=bYellow height=5><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			//}
    			//strHTML +='<td class=bYellow height=5><img src="../x.gif" height=5 align=right hspace=0></td>'
                strHTML = '<!-- title row starts -->';             
                strHTML +='<tr >   ';
                strHTML +='<!-- title col1 - Name -->  ';
                strHTML +='<td width="60%" class="bYellow" height=23 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>'+this.activityHeadings[0]+'</span>&nbsp;</nobr></td>  ';
                strHTML +='<!-- title col2 - Phase -->  ';
                strHTML +='<td width="20%" class="bYellow" height=23 valign=bottom  width=1><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>  ';
                strHTML +='<td width="20%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>'+this.activityHeadings[1]+'</span>&nbsp;</nobr></td>  ';
                //strHTML +='<!-- title col3 - Owner -->  ';
                //strHTML +='<td width="20%" class="bYellow" height=23 valign=bottom  width=1><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>  ';
                //strHTML +='<td width="20%" class="bYellow" height=18 valign=middle  ><nobr>&nbsp;<span class=tBlackSmallBld>'+this.activityHeadings[2]+'</span>&nbsp;</nobr></td>  ';
                strHTML +='</tr>  ';
                strHTML +='<tr>  ';
                strHTML +='<!-- line separator -->  ';
                strHTML +='<td width="100%" class=bDkYellow colspan=3 height=1 align=right valign=bottom></td>  ';
                strHTML +='</tr>  ';
                strHTML +='<!-- title row ends -->  ';
    		}
			else if (this.docViewType=='FWActivities' ) {
    			strHTML =' <tr > ';  
                strHTML +='<!-- title col1 - ID -->  ';
                strHTML +='<td width="5%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>ID</span>&nbsp;</nobr></td>';  
                strHTML +='<!-- title col2 - Name --> '; 
                strHTML +='<td width="70%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Activity&nbsp;Name</span>&nbsp;</nobr></td>';  
                strHTML +='<!-- title col3 - Phase -->';  
                strHTML +='<td width="10%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Phase</span>&nbsp;</nobr></td> '; 
                strHTML +='<!-- title col4 - SeqNr --> '; 
                strHTML +='<td width="5%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Seq&nbsp;Nr</span>&nbsp;</nobr></td>';  
                strHTML +='<!-- title col5 - Edit --> '; 
                strHTML +='<td width="5%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Edit</span>&nbsp;</nobr></td>';  
                strHTML +='<!-- title col6 - Delete -->';  
                strHTML +='<td width="5%" class="bYellow" height=18 valign=middle ><nobr>&nbsp;<span class=tBlackSmallBld>Delete</span>&nbsp;</nobr></td>';  
            strHTML +='</tr>';
            strHTML +='<!-- line with greenx markers aligned right in a <td> -->';
            strHTML +='<tr>';
               strHTML +='<td width="5%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5"  vspace="0" hspace="0"></td>';
                strHTML +='<td width="70%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5"  vspace="0" hspace="0"></td>';
                strHTML +='<td width="10%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5" vspace="0" hspace="0"></td>';
                strHTML +='<td width="5%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5" vspace="0" hspace="0"></td>';
                strHTML +='<td width="5%" class=bYellow  align="right" valign=bottom ><img src="img/xOlive.gif" width="1" height="5" vspace="0" hspace="0"></td>';
                strHTML +='<td width="5%" class=bYellow  align="right" valign=bottom ></td>';
            strHTML +='</tr>';
    		}
    		else if (this.docViewType=='Status' || this.docViewType=='Project Activities') {
    			for (var x=0; x<this.statusHeadings.length; x++) {							
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=1>&nbsp;<span class=tBlackSmallBld>' + this.statusHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<this.statusHeadings.length-1; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML +='<td class=bYellow height=5><img src="../x.gif" height=5 align=right hspace=0></td>'
    		}
    		else if (this.docViewType=='Accomplishments' || this.docViewType=='Outcomes' || this.docViewType=='Deliverables' || this.docViewType=='Objectives'){
    			for (var x=0; x<this.accomplishmentHeadings.length; x++) {	
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=1>&nbsp;<span class=tBlackSmallBld>' + this.accomplishmentHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<this.accomplishmentHeadings.length-1; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../img/x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML +='<td class=bYellow height=5><img src="../img/x.gif" height=5 align=right hspace=0></td>'
    			
    		}
 		    else if (this.docViewType=='Documents') {
    			for (var x=0; x<this.diagramHeadings.length; x++) {
    				if(x == 5) { varcol = 2; }			
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=' +varcol+'>&nbsp;<span class=tBlackSmallBld>' + this.diagramHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<5; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML += '<td class=bYellow height=5><img src="../x.gif" width=1 height=5 align=right hspace=0></td>';
    			strHTML += '<td class=bYellow height=5 width=65><img src="../x.gif" width=1 height=1></td>';
    		}
			 else if (this.docViewType=='FWDocumentsNoMenu') {
    			for (var x=0; x<this.fwDocumentHeadings.length; x++) {
    				if(x == 4) { varcol = 2; }			
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=' +varcol+'>&nbsp;<span class=tBlackSmallBld>' + this.fwDocumentHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<4; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML += '<td class=bYellow height=5><img src="../x.gif" width=1 height=5 align=right hspace=0></td>';
    			strHTML += '<td class=bYellow height=5 width=65><img src="../x.gif" width=1 height=1></td>';
    		}
			else if (this.docViewType=='FWDocuments') {
    			for (var x=0; x<this.fwDocumentHeadings.length; x++) {
    				if(x == 4) { varcol = 2; }			
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=' +varcol+'>&nbsp;<span class=tBlackSmallBld>' + this.fwDocumentHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<4; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML += '<td class=bYellow height=5><img src="../x.gif" width=1 height=5 align=right hspace=0></td>';
    			strHTML += '<td class=bYellow height=5 width=65><img src="../x.gif" width=1 height=1></td>';
    		}
			else if (this.docViewType=='Administration' || this.docViewType=='AdministrationDoc') {
    			for (var x=0; x<this.diagramHeadings.length; x++) {							
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=1>&nbsp;<span class=tBlackSmallBld>' + this.diagramHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<this.diagramHeadings.length-1; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../img/x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML +='<td class=bYellow height=5><img src="../img/x.gif" height=5 align=right hspace=0></td>'
    		}    
           else	if (this.docViewType=='Best Practices Edit') {
    			for (var x=0; x<this.bestPracticeHeadings.length; x++) {
    				if(x == 4) { varcol = 2; }			
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=' +varcol+'>&nbsp;<span class=tBlackSmallBld>' + this.bestPracticeHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<4; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../img/x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML += '<td class=bYellow height=5><img src="../img/x.gif" width=1 height=5 align=right hspace=0></td>';
                strHTML += '<td class=bYellow height=5 width=65><img src="../img/x.gif" width=1 height=1></td>';
    		}
			else	if (this.docViewType=='Best Practices Browse') {
    			for (var x=0; x<this.bestPracticeHeadings.length; x++) {
    				if(x == 4) { varcol = 2; }			
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=' +varcol+'>&nbsp;<span class=tBlackSmallBld>' + this.bestPracticeHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<4; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../img/x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML += '<td class=bYellow height=5><img src="../img/x.gif" width=1 height=5 align=right hspace=0></td>';                
    		}
    		else if (this.docViewType=='Recommendations') {
    			for (var x=0; x<this.recommendationHeadings.length; x++) {							
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=1>&nbsp;<span class=tBlackSmallBld>' + this.recommendationHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<this.recommendationHeadings.length-1; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML +='<td class=bYellow height=5><img src="../x.gif" height=5 align=right hspace=0></td>'
    		}
			if (this.docViewType=='Announcements' || this.docViewType=='News' || this.docViewType== 'SearchContent') {
			strHTML += '<tr>';
				strHTML += '<td class=bYellow height=18 valign=bottom>&nbsp;<a href="#"><span class=tBlackSmallBldUnd>Description</span></a>&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>';
				strHTML += '<td class=bYellow height=18 valign=bottom>&nbsp;<a href="#"><span class=tBurntSmallBldUnd>Date</span></a>&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom align="right">&nbsp;&nbsp;</td>';
				strHTML += '<td class=bYellow height=18 valign=bottom colspan=2>&nbsp;</td>';
			strHTML += '</tr>';
			strHTML += '<tr>';
				strHTML += '<td class=bYellow height=5 width=65 colspan="6"><img src="../x.gif" width=1 height=1></td>';
			strHTML += '</tr>';
			strHTML += '<tr>';
				strHTML += '<td class=bLiBurnt colspan=6 height=1><img src="../x.gif" width=1 height=1></td>';
			strHTML += '</tr>';
			}
            else if (this.docViewType=='Concerns' || this.docViewType=='Challenges' ) {
    			for (var x=0; x<this.concernHeadings.length; x++) {							
    				strHTML += '<td class=bYellow height=18 valign=bottom colspan=1>&nbsp;<span class=tBlackSmallBld>' + this.concernHeadings[x] + '</span>&nbsp;</td>'
    			}
    			strHTML += '</tr> <tr>';
    			for (var y=0; y<this.concernHeadings.length-1; y++) {
    				strHTML +='<td class=bYellow height=5><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
    			}
    			strHTML +='<td class=bYellow height=5><img src="../x.gif" height=5 align=right hspace=0></td>'
    		}
 		    else if (this.docViewType=='Milestones') {
 			for (var x=0; x<this.milestoneHeadings.length; x++) {							
 				strHTML += '<td class=bYellow height=18 valign=bottom colspan=1>&nbsp;<span class=tBlackSmallBld>' + this.milestoneHeadings[x] + '</span>&nbsp;</td>'
 			}
 			strHTML += '</tr> <tr>';
 			for (var y=0; y<this.milestoneHeadings.length-1; y++) {
 				strHTML +='<td class=bYellow height=5><img src="../x.gif" class=bLiBurnt width=1 height=5 align=right hspace=0></td>'
 			}
 			strHTML +='<td class=bYellow height=5><img src="../x.gif" height=5 align=right hspace=0></td>'
 		}
    		
    	}//193
    	//var bug = window.open(" ", "bug","status=0 toolbar=0");
    	//bug.document.writeln(strHTML);
    	return strHTML;
    }
    
    function mtdGetDocRowsHTML(rowColor, elementLocInArray, elementHref, iconName, elementName, elementDesc, elementType, elementSubType, elementPhase, elementOwner, ctr) {
    	var strHTML = '';
    	var author = '';
 	
    	var addressed = 'No';
 	if(elementType == 'true' || elementType == 'false'){
    		if(elementType == 'true'){
    			addressed = 'Yes';
    		}
 	}
 	else{
 		addressed = elementType;
 	}	 	
    	var doc = "'"+elementHref+"'"; // This appends the doc management system filepath to a standard browser file href
    	if (this.docViewType !=null) {	//if the value passed is valid	
    		strHTML += '<tr>';
    		if (this.docViewType=='Components') {
    			 
    					
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+iconName+'" width=15 height=14 hspace=3 align=absmiddle border=0>'+elementName+'</span></a>&nbsp;</nobr></td>';
    					//strHTML += '<%-- Comp Desc --%>';
    					//strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementDesc+'</a></span>&nbsp;</nobr></td>';
    					
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementType+'</nobr></td>';
    					//strHTML += '<%-- Cost --%>';		
    					//strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementSubType+'</a></span>&nbsp;</nobr></td>';
    					//strHTML += '<%-- Phase --%>';		
    					//strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementPhase+'</a></span>&nbsp;</nobr></td>';
    					//strHTML += '<%-- Owner --%>';
    					//strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementOwner+'</a></span>&nbsp;</nobr></td>';
    					strHTML += '</tr>';
    				    strHTML += '<tr>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					//strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					//strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					//strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					//strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" height=5 align=right hspace=0></td>';
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    					strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
    			}
    			else if (this.docViewType=='Activities' || this.docViewType=='Project Activities' || this.docViewType=='Status') {
    				
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+iconName+'" width=18 height=14 hspace=3 align=absmiddle border=0>'+elementName+'</span></a>&nbsp;</nobr></td>';
    					
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementDesc+'</a></span>&nbsp;</nobr></td>';
    					
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementType+'</nobr></td>';
    					
    						
    					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementPhase+'</a></span>&nbsp;</nobr></td>';
    					
    					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementOwner+'</a></span>&nbsp;</nobr></td>';
    					strHTML += '</tr>';
    				    strHTML += '<tr>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';					
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" height=5 align=right hspace=0></td>';
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    					strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';			
    			}	
    			else if (this.docViewType=='Accomplishments' || this.docViewType=='Outcomes' || this.docViewType=='Deliverables' || this.docViewType=='Objectives'){
    				
					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+iconName+'" width=18 height=14 hspace=3 align=absmiddle border=0>'+elementName+'</span></a>&nbsp;</nobr></td>';
					
					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementDesc+'</a></span>&nbsp;</nobr></td>';
					
					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementOwner+'</a></span>&nbsp;</nobr></td>';
					strHTML += '</tr>';
				    strHTML += '<tr>';
					strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';					
					strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" height=5 align=right hspace=0></td>';
				strHTML += '</tr>';
				strHTML += '<tr>';
					strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../img/x.gif" width=1 height=1></td>';
				strHTML += '</tr>';			
			}	
    		
    			else if (this.docViewType=='Inbox') {
    			
    				
    				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href=javascript:submitByMsgId("")><img src="img/icoEnvUnRead.gif" width="14" height="14" border="0" hspace="4" align=absmiddle><span class=tDkGraySmall>Peep</span></a>&nbsp;</nobr></td>';
    				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href=javascript:submitByMsgId("")><span class=tDkGraySmall>peep</span></a>&nbsp;</nobr></td>';
    				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href=javascript:submitByMsgId("")><span class=tDkGraySmall>Peep</span></a>&nbsp;</nobr></td>';
    				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href=javascript:submitByMsgId("")><span class=tDkGraySmall>Peep</span></a>&nbsp;</nobr></td>';
    				strHTML += '<td class='+rowColor+' rowspan=2 align=right valign=bottom>&nbsp;<a href=javascript:submitByVersion("")><img src="img/butRemoveLiGray.gif" width=51 height=17 alt="Remove Message from Inbox" border=0></a>&nbsp;&nbsp;</td>';
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=5 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>'; 
    					
    			}
 			else if (this.docViewType=='Concerns' || this.docViewType=='Milestones' || this.docViewType=='Challenges') {
    				
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+iconName+'" width=18 height=14 hspace=3 align=absmiddle border=0>'+elementName+'</span></a>&nbsp;</nobr></td>';
    					
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementOwner+'</a></span>&nbsp;</nobr></td>';
    					
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+elementDesc+'</nobr></td>';
    					
    					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+addressed+'</nobr></td>';
    					strHTML += '</tr>';
    				    strHTML += '<tr>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    					strHTML += '</tr>';
    					strHTML += '<tr>';
    					strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    					strHTML += '</tr>';			
    			}
    			
    	}
    	return strHTML;
    }

    function mtdGetCrudDocRowsHTML(rowColor, elementLocInArray, elementID, elementHref, iconName, elementName, elementDesc, elementType, elementSubType, elementPhase, elementOwner, ctr) {
    	var strHTML = '';
    	var author = '';
 	
    	var addressed = 'No';
        if(elementType == 'true' || elementType == 'false'){
            if(elementType == 'true'){
                addressed = 'Yes';
            }
        }else{
            addressed = elementType;
        }	 	
    	var doc = "'"+elementHref+"'"; // This appends the doc management system filepath to a standard browser file href
    	if (this.docViewType !=null) {	//if the value passed is valid	
    		
    		if (this.docViewType=='FWComponents') {
                strHTML += '<!-- Component Item starts -->';
                strHTML += '<tr>';
                strHTML += '   <!-- Component ID -->';
                strHTML += '   <td width="5%" class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<span class=tDkGraySmall>&nbsp;'+elementID+'&nbsp;</span>&nbsp;</nobr></td>';
                strHTML += '   <!-- Component Name -->';
                strHTML += '   <td width="30%" class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<span class=tDkGraySmall><img src="'+iconName+'" hspace=3 align=absmiddle border=0>'+elementName+'</span>&nbsp;</nobr></td>';
                strHTML += '   <!-- Component Type -->';
                strHTML += '   <td width="55%" class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<span class=tDkGraySmall>'+elementType+'</nobr></td>';
                strHTML += '   <!-- Edit -->';
                strHTML += '   <td width="5%" class='+rowColor+' height=18 valign=bottom><span class=tDkGraySmall ><nobr>&nbsp;<a  href="'+elementHref+'">edit</a></nobr></span></td>';
                strHTML += '   <!-- Delete -->';
                strHTML += '   <td width="5%" class='+rowColor+' height=18 valign=bottom><span class=tDkGraySmall ><nobr>&nbsp;<a  href="'+elementHref+'">delete</a></nobr></span></td>';
                strHTML += '</tr>';
                strHTML += '<tr>';
                strHTML += '   <td width="5%" class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
                strHTML += '   <td width="30%" class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
                strHTML += '   <td width="53%" class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
                strHTML += '   <td width="5%" class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
                strHTML += '   <td width="5%" class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
                strHTML += '</tr>';
                strHTML += '<tr>';
                strHTML += '   <td class=bDkYellow colspan=5 height=1><img src="../x.gif" width=1 height=1></td>';
                strHTML += '</tr>';
                strHTML += '<!-- Component Item ends -->';
            }
    	}
    	return strHTML;
    }    
    function mtdGetDocumentRowsHTML(rowColor, docLocInArray, icoFilename, isLocked, docName, docNum, docVersion, entryDate, size, auth, ctr) {
    	var strHTML = '';
    	var author = '';
 	ctr = Math.round(ctr) ;
	var ctr2 = new String(ctr);
	//alert(ctr2);	
    //alert("doc Loc in array");
    	//var doc = ""; // This appends the doc management system filepath to a standard browser file href
    	var doc = "'../file"+docLocInArray+"'";
    	var locked = '../img/icoLockOpen.gif';
    	if(isLocked)
    		locked='../img/icoLockClosed.gif'; 	
    	//alert(doc);
    	if (this.docViewType !=null) {	//if the value passed is valid	
    		strHTML += '<tr>';
 		if (this.docViewType=='Documents') {
    			 
    				
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+icoFilename+'" width=16 height=16 hspace=3 align=absmiddle border=0><img src="'+locked+'" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
    				
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+docNum+'</a></span>&nbsp;</nobr></td>';
    				
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+docVersion+'</a></span>&nbsp;</nobr></td>';
    					
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+entryDate+'</a></span>&nbsp;</nobr></td>';
    						
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+Math.ceil(size/1000)+'K</a></span>&nbsp;</nobr></td>';
    				
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+auth+'</a></span>&nbsp;</nobr></td>';
    																
    				strHTML += '<td class='+rowColor+' height=18 valign=middle>&nbsp;<a href="javascript:objMenu.show('+ctr+');"><img src="img/butOptionsDrop.gif" id="imgTrigger'+ctr+'" style="position:absolute;" width="83" height="17" alt="Document Options" border="0"></a></td>'; 
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" width=92 height=5></td>'
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
        			}
					else if (this.docViewType=='FWDocuments') {
    			 
    				
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+icoFilename+'" width=16 height=16 hspace=3 align=absmiddle border=0><img src="'+locked+'" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
    				
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+docNum+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Document version --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+docVersion+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Last edit date --%>';		
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+entryDate+'</a></span>&nbsp;</nobr></td>';
       				strHTML += '<%-- Author --%>';
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+auth+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%--  Java Script Menu --%>';												
    				strHTML += '<td class='+rowColor+' height=18 valign=middle>&nbsp;<a href="javascript:objMenu.show('+ctr+');"><img src="img/butOptionsDrop.gif" id="imgTrigger'+ctr+'" style="position:absolute;" width="83" height="17" alt="Document Options" border="0"></a></td>'; 
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" width=92 height=5></td>'
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
        			}
					else if (this.docViewType=='FWDocumentsNoMenu') {    			 
    				strHTML += '<%-- Document icon, status and description --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+icoFilename+'" width=16 height=16 hspace=3 align=absmiddle border=0><img src="'+locked+'" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
    				strHTML += '<%-- Document number --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+docNum+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Document version --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+docVersion+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Last edit date --%>';		
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+entryDate+'</a></span>&nbsp;</nobr></td>';					
       				strHTML += '<%-- Author --%>';
 					strHTML += '<td class='+rowColor+'  height=18 width="83" valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall>'+auth+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<%--  Java Script Menu --%>';												
    				strHTML += '<td class='+rowColor+' height=18 valign=middle>&nbsp;<img src="../x.gif" style="position:absolute;" width="83" height="17" border="0"></a></td>'; 
       				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" width=1 height=5 align=right hspace=0></td>';
       				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" width=92 height=5></td>'
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
        			}
					else if (this.docViewType=='Administration') {    			 
    				strHTML += '<%-- Document icon, status and description --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+"'"+docLocInArray+"'"+');"><span class=tDkGraySmall><img src="'+icoFilename+'" width=18 height=16 hspace=3 align=absmiddle border=0><img src="'+locked+'" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
    				strHTML += '<%-- Document number --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+"'"+docLocInArray+"'"+');"><span class=tDkGraySmall>'+docNum+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Document version --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+"'"+docLocInArray+"'"+');"><span class=tDkGraySmall>'+docVersion+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Last edit date --%>';		
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+"'"+docLocInArray+"'"+');"><span class=tDkGraySmall>'+entryDate+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Size --%>';		
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+"'"+docLocInArray+"'"+');"><span class=tDkGraySmall>'+Math.ceil(size/1000)+'K</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Author --%>';
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+"'"+docLocInArray+"'"+');"><span class=tDkGraySmall>'+auth+'</a></span>&nbsp;</nobr></td>';
       				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../img/x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
       				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=6 height=1><img src="../img/x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
    			}
				else if (this.docViewType=='AdministrationDoc') {    			 
    				strHTML += '<%-- Document icon, status and description --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="javascript:mtdOpenDoc('+doc+');"><span class=tDkGraySmall><img src="'+icoFilename+'" width=18 height=16 hspace=3 align=absmiddle border=0><img src="'+locked+'" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
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
       				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
       				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=6 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
    			}
				else if (this.docViewType=='Announcements' || this.docViewType=='News') {
				strHTML += '<tr>';
					
					strHTML += '<td class='+rowColor+' height=23 valign=center rowspan=2><nobr>&nbsp;<span class=tDkGraySmall><img src="'+icoFilename+'" border="0" align="absmiddle" alt="">&nbsp;<a href="javascript:mtdOpenDoc('+"'"+docLocInArray+"'"+');">'+docName+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<td class='+rowColor+' height=23 valign=bottom rowspan=2 width=1><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					
					strHTML += '<td class='+rowColor+' height=18 valign=bottom colspan=4><nobr>&nbsp;<span class=tDkGraySmall>'+entryDate+'</span>&nbsp;</nobr></td>';
				strHTML += '</tr>';
				strHTML += '<tr>';
					strHTML += '<td class='+rowColor+' height=5 colspan="4"><img src="../x.gif" width=1 height=1></td>';
				strHTML += '</tr>';
				strHTML += '<tr>';
					strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
				strHTML += '</tr>';			
			    }
    			else if (this.docViewType=='Public' || this.docViewType=='SearchContent') {
    				strHTML += '<tr>';
                    
                    strHTML += '<td class='+rowColor+' height=23 valign=center rowspan=2><nobr>&nbsp;<span class=tDkGraySmall><img src="'+icoFilename+'" border="0" align="absmiddle" alt="">&nbsp;<a href="javascript:mtdOpenDoc('+doc+');">'+docName+'</a></span>&nbsp;</nobr></td>';
                    strHTML += '<td class='+rowColor+' height=23 valign=bottom rowspan=2 width=1><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
                    
                    strHTML += '<td class='+rowColor+' height=18 valign=bottom colspan=4><nobr>&nbsp;<span class=tDkGraySmall>'+entryDate+'</span>&nbsp;</nobr></td>';
    				strHTML += '</tr>';
    				strHTML += '<tr>';
                    strHTML += '<td class='+rowColor+' height=5 colspan="4"><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
    				strHTML += '<tr>';
                    strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';			
    			}
    			else if (this.docViewType=='Inbox') {
    			
    				
    				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href=javascript:submitByMsgId("")><img src="img/icoEnvUnRead.gif" width="14" height="14" border="0" hspace="4" align=absmiddle><span class=tDkGraySmall>Peep</span></a>&nbsp;</nobr></td>';
    				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href=javascript:submitByMsgId("")><span class=tDkGraySmall>peep</span></a>&nbsp;</nobr></td>';
    				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href=javascript:submitByMsgId("")><span class=tDkGraySmall>Peep</span></a>&nbsp;</nobr></td>';
    				strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href=javascript:submitByMsgId("")><span class=tDkGraySmall>Peep</span></a>&nbsp;</nobr></td>';
    				strHTML += '<td class='+rowColor+' rowspan=2 align=right valign=bottom>&nbsp;<a href=javascript:submitByVersion("")><img src="img/butRemoveLiGray.gif" width=51 height=17 alt="Remove Message from Inbox" border=0></a>&nbsp;&nbsp;</td>';
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+' height=5><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=5 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>'; 					
    			}
    else if (this.docViewType=='Recommendations') {
				
					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Recommendation" target="_new"><span class=tDkGraySmall><img src="'+icoFilename+'" width=18 height=14 hspace=3 align=absmiddle border=0>'+docName+'</span></a>&nbsp;</nobr></td>';
					strHTML += '<%-- Document Author --%>';
					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Recommendation" target="_new"><span class=tDkGraySmall>'+auth+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<%-- Document entry date --%>';
					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Recommendation" target="_new"><span class=tDkGraySmall>'+entryDate+'</nobr></td>';
					strHTML += '</tr>';
				    strHTML += '<tr>';
					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
					strHTML += '</tr>';
					strHTML += '<tr>';
					strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
					strHTML += '</tr>';			
			}
			else if (this.docViewType=='Best Practices Edit') {			 
    
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall><img src="'+icoFilename+'" width=16 height=16 hspace=3 align=absmiddle border=0><img src="'+locked+'" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
    				strHTML += '<%-- Framework --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall>'+docNum+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Document version --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall>'+docVersion+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Last edit date --%>';		
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall>'+entryDate+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Author --%>';
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall>'+auth+'</a></span>&nbsp;</nobr></td>';
					strHTML += '<td class='+rowColor+' height=18 valign=middle>&nbsp;<a href="javascript:deleteEntry('+ctr+');"><img src="img/butDeleteGrayRegular.gif" style="position:absolute;" width="50" height="15" vspace=3 hspace=3 alt="Delete Best Practice" border="0"></a></td>'; 
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" width=72 height=5></td>'
    				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
        			}
					else if (this.docViewType=='Best Practices Browse') {			 
    
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall><img src="'+icoFilename+'" width=16 height=16 hspace=3 align=absmiddle border=0><img src="'+locked+'" border=0 alt="" width=16 height=16 hspace=3 align=absmiddle>'+docName+'</span></a>&nbsp;</nobr></td>';
    				strHTML += '<%-- Framework --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall>'+docNum+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Document version --%>';
 					strHTML += '<td class='+rowColor+' height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall>'+docVersion+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Last edit date --%>';		
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall>'+entryDate+'</a></span>&nbsp;</nobr></td>';
    				strHTML += '<%-- Author --%>';
 					strHTML += '<td class='+rowColor+'  height=18 valign=bottom><nobr>&nbsp;<a href="/AppArch/ViewThreadMessage.do?threadLocation='+ctr+'&threadType=Best Practice" target="_new"><span class=tDkGraySmall>'+auth+'</a></span>&nbsp;</nobr></td>';
					strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
    				strHTML += '<td class='+rowColor+'  height=5><img src="../x.gif" class=bDkYellow width=1 height=5 align=right hspace=0></td>';
       				strHTML += '</tr>';
    				strHTML += '<tr>';
    				strHTML += '<td class=bDkYellow colspan=7 height=1><img src="../x.gif" width=1 height=1></td>';
    				strHTML += '</tr>';
        			}
    			
    	}
    	return strHTML;
    }
    
    
    
    
    function mtdOpenDoc(strDoc) {
    	
    	var intWidth = 800;
    	var intHeight = 400;
    	var intLeft=Math.round((screen.availWidth/2)-(intWidth/2));
    	var intTop=Math.round((screen.availHeight/2)-(intHeight/2));
    	window.open(strDoc, '', 'toolbar=no,location=no,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=no,width='+intWidth+',height='+intHeight+',left='+intLeft+',top='+intTop);
    }
    
    //javascript:getResults(5, '+docLocInArray+');