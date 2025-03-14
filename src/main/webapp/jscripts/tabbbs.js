function Tabbbs(intTabs, strDiv) {
	this.tabs = intTabs;
	this.strDiv = strDiv;
	this.show = mtdTabbsShow;
}
function mtdTabbsShow(i) {
	for (j=0; j<this.tabs; j++) {
		obj = eval('document.all.' + this.strDiv + j);
		obj.style.display = i==j ? 'block' : 'none';
	}
}