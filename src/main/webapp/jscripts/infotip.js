/* InfoTip */
//Constructor Class
function Infotip(objInfo, objInfoBack, objHide) {
	this.head = new Array();
	this.info = new Array();
	this.objInfo = objInfo;
	this.objInfoBack = objInfoBack;
	this.objHide = objHide;
	this.add = mtdInfoAdd;
	this.show = mtdInfoShow;
	this.hide = mtdInfoHide;
}
function mtdInfoAdd(i, strHead, strInfo) {
	this.head[i] = strHead;
	this.info[i] = strInfo;
}

function mtdInfoShow(intID) {
	var str = '<tr><td class=borDkYellowBbPaBurnt nowrap><span class=tBlackSmallBld>' +this.head[intID]+ '</span></td></tr>';
	str += '<tr><td class=pad><span class=tDkBurntSmall>' +this.info[intID]+ '</span></td></tr>';
	str += '</table>';
	this.objInfo.innerHTML = '<table border=0 cellpadding=0 cellspacing=0 id=tblToolTip width=100%>' + str;
	if (this.objHide)
		this.objHide.style.visibility = "hidden";
	this.objInfo.style.visibility = "visible";
	this.objInfoBack.style.visibility = "visible";
}

function mtdInfoHide() {
	var eTo = window.event.toElement;
	if (this.objInfo.contains(eTo)!= false)
		return;
	this.objInfo.innerHTML = '';
	this.objInfo.style.visibility = "hidden";
	this.objInfoBack.style.visibility = "hidden";
	if (this.objHide)
		this.objHide.style.visibility = "visible";
}