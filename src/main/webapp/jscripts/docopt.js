/* DocOpt */
//Constructor Class
function DocOpt(objDocOpt, objDocOptBack, strAncMenu, strImgTrigger, objDelete, objCheck, objCheckRow, objProfileRow, objSecurityRow) {
	this.selectedDoc = 0;
	this.msgID = new Array();
	this.profile = new Array();
	this.security = new Array();
	this.checkIn = new Array();
	this.deleteable = new Array();
	this.docID = new Array();
	this.links = new Array();
	this.calls = new Array();
	this.objDocOpt = objDocOpt;
	this.objDocOptBack = objDocOptBack;
	this.ancMenu = strAncMenu;
	this.imgTrigger = strImgTrigger;
	this.objDelete = objDelete;
	this.objCheck = objCheck;
	this.objCheckRow = objCheckRow;
	this.objProfileRow = objProfileRow;
	this.objSecurityRow = objSecurityRow;
	this.add = mtdDocOptAdd;
	this.show = mtdDocOptShow;
	this.hide = mtdDocOptHide;
	this.overRow = mtdDocOptOverRow;
	this.outRow = mtdDocOptOutRow;
	this.clickMenu = mtdDocOptClickMenu;
	this.jumpTo = mtdDocOptJumpTo;
}

function mtdDocOptAdd(i, blnProfile, blnSecurity, varCheckIn, blnDelete, strDocId) {
	var j=this.msgID.length;
	this.msgID[j] = i;
	this.profile[j] = eval(blnProfile);
	this.security[j] = eval(blnSecurity);
	this.checkIn[j] = varCheckIn;
	this.deleteable[j] = eval(blnDelete);
	this.docID[j] = strDocId;
	//alert('1 '+i+' 2 '+blnProfile+' 3 '+blnSecurity+' 4 '+varCheckIn+' 5 '+blnDelete+' 6 '+strDocId);
}

function mtdDocOptShow(i) {
	this.selectedDoc = i;
	//alert('Working for '+i);
	//var obj = eval(this.imgTrigger + i);
	//this.objDocOpt.style.top = obj.offsetTop;
	var imgtrig = document.getElementById('imgTrigger' + i);
	//alert('imgtrigger '+imgtrig.offsetTop);
	var iobjDocOpt = document.getElementById('divDocOpt');
	//alert("iobjDocOpt - snooka "+iobjDocOpt.nodeName);
	iobjDocOpt.style.top = imgtrig.offsetTop+'px';
	//alert('offset top ' +iobjDocOpt.style.top);
	var iobjDocOptBack = document.getElementById('divDocOptBack');	
	iobjDocOptBack.style.top = imgtrig.offsetTop+'px';
	iobjDocOpt.style.left = imgtrig.offsetLeft+'px';
	//alert('offset left ' +iobjDocOpt.style.left);
	iobjDocOptBack.style.left = imgtrig.offsetLeft+'px';
	//alert('Profile '+i+' is '+this.profile[i]);
	if (this.objDelete && this.objCheckRow && this.objProfileRow && this.objSecurityRow) {
	//alert("all objects present")
		j=0;
		if (this.profile[i-1]) {
			j++;
			this.objProfileRow.style.display = 'block';
			//alert('Show Profile');
		} 
		else {
		  this.objProfileRow.style.display = 'block';
		}
		if (this.security[i-1]) {
			j++;
			this.objSecurityRow.style.display = 'none';
		} 
		else {
			this.objSecurityRow.style.display = 'none';
		}
		if (this.deleteable[i-1]) {
			j++;
			this.objDelete.style.display = 'block';
		} 
		else{
			this.objDelete.style.display = 'none';
		}
		if (this.checkIn[i-1]!='no') {
			j++;
			this.objCheckRow.style.display = 'block';
		} 
		else {
			this.objCheckRow.style.display = 'none';
		}
		//set menu back height
		this.objDocOptBack.style.height = eval(3 + 16*(j+4)) + 'px';
	} 
	else {
		//alert("Missing items");
		this.objDocOptBack.style.height = '51px';
	}
	//alert("Do we have check ref  "+this.objCheck+" is this checked out? "+this.checkIn[i-1])
	if (this.objCheck && this.checkIn[i-1]!='no') this.objCheck.innerHTML = eval(this.checkIn[i-1]) ? 'in' : 'out';
	if (this.objDocOpt.filters[0]) {
		this.objDocOpt.filters[0].Apply();
		this.objDocOptBack.filters[0].Apply();
	}
	this.objDocOpt.style.display = 'block';
	this.objDocOptBack.style.display = 'block';
	if (this.objDocOpt.filters[0]) {
		this.objDocOpt.filters[0].Play();
		this.objDocOptBack.filters[0].Play();
	}
}

function mtdDocOptHide() {
	if (this.objDocOpt.contains(window.event.toElement)!= false) return;
	if (this.objDocOpt.filters[0]) {
		this.objDocOpt.filters[0].Apply();
		this.objDocOptBack.filters[0].Apply();
	}
	this.objDocOpt.style.display = 'none';
	this.objDocOptBack.style.display = 'none';
	if (this.objDocOpt.filters[0]) {
		this.objDocOpt.filters[0].Play();
		this.objDocOptBack.filters[0].Play();
	}
}

function mtdDocOptOverRow(objRow, i){
	objRow.style.backgroundColor = '#000000';
	var obj = eval(this.ancMenu + i);
	obj.style.color = '#FFFF99';
	obj.style.fontWeight = 'bold';
}

function mtdDocOptOutRow(objRow, i){
	if (objRow.contains(window.event.toElement)!= false) return;
	objRow.style.backgroundColor = '#cccccc';
	var obj = eval(this.ancMenu + i);
	obj.style.color = '#333333';
	obj.style.fontWeight = 'normal';
}

function mtdDocOptClickMenu(i) {
	str = this.checkIn[this.selectedDoc-1];
	if (str=='no')
		str = '\'' + str + '\'';
	if(this.links[i]=='call')
		eval(this.calls[i] + '(\'' + this.selectedDoc + '\', ' + str + ')');
	else
		document.location.href = this.links[i]+this.selectedDoc;
//alert('docID '+this.docID[this.selectedDoc]);
}

function mtdDocOptJumpTo(i, str, strCall) {
	this.links[i] = str;
	if(str=='call')
		this.calls[i] = strCall;
}