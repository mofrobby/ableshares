/* ToolTip */
//Constructor Class
function Tooltip(strL, strR, strAlign, objTT, objTTBack) {
	this.msgID = new Array();
	this.left = new Array();
	this.right = new Array();
	this.leftHead = strL;
	this.rightHead = strR;
	this.objTT = objTT;
	this.objTTBack = objTTBack;
	this.align = strAlign;
	this.add = mtdTTAdd;
	this.show = mtdTTShow;
	this.hide = mtdTTHide;
}
function mtdTTAdd(i, strLeft, strRight) {
	var j=this.msgID.length;
	this.msgID[j] = i;
	this.left[j] = strLeft;
	this.right[j] = strRight;
}

function mtdTTShow(intID) {
	var str = '<tr><td class=borDkYellowBbPaBurnt nowrap><span class=tBlackSmallBld>' +this.leftHead+ '</span></td><td class=borDkYellowBbPaBurnt nowrap><span class=tBlackSmallBld>' +this.rightHead+ '</span></td></tr>';
	for(var i=0; i<this.right.length; i++) {
		if(this.msgID[i]==intID) {
			str += '<tr><td nowrap class=borDkYellowB><span class=tDkBurntSmall>' +this.left[i]+ '</span></td><td nowrap class=borDkYellowB><span class=tDkBurntSmall>' + this.right[i] + '</span></td></tr>';
		}
	}
	str += '</table>';
	this.objTT.innerHTML = '<table border=0 cellpadding=0 cellspacing=0 id=tblToolTip>' + str;
	this.objTTBack.innerHTML = '<table border=0 cellpadding=0 cellspacing=0 id=tblToolTipBack>' + str;
	this.objTT.style.pixelTop = window.event.clientY + document.body.scrollTop + 5;
	this.objTTBack.style.pixelTop = this.objTT.style.pixelTop +2;
	var intAlign=0;
	switch (this.align) {
		case 'left':
			intAlign -= document.all.tblToolTip.offsetWidth +15;
			break;
		case 'center':
			intAlign -= document.all.tblToolTip.offsetWidth/2;
	}
	this.objTT.style.pixelLeft = window.event.clientX + document.body.scrollLeft + intAlign;
	this.objTTBack.style.pixelLeft = this.objTT.style.pixelLeft +2;
	this.objTT.style.visibility = "visible";
	this.objTTBack.style.visibility = "visible";
}

function mtdTTHide() {
	this.objTT.innerHTML = '';
	this.objTTBack.innerHTML = '';
	this.objTT.style.pixelTop = 0;
	this.objTTBack.style.pixelTop = 0;
	this.objTT.style.visibility = "hidden";
	this.objTTBack.style.visibility = "hidden";
}