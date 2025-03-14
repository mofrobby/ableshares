/* Tabber */
//Constructor Class
function Tabber(objHolder) {
	//properties
	this.h = objHolder;
	this.searchTab = true;			//if true then assignment tab is visible
	this.explorerTab = false;			//if true then collectors tab is visible
        this.extSearch = false;
	//methods
	this.showExplorer = mtdShowExplorer;
	this.showSearch = mtdShowSearch;
	this.showExtSearch = mtdShowExtSearch;
	this.showQuickSearch = mtdShowQuickSearch;
	this.check = mtdCheck;
}

//show collector tab
function mtdShowExplorer(objInstance) {	//need objInstance as this may be called through mtdCheck.
	if (objInstance==null)
		objInstance=this;
	objInstance.searchTab = false;
	objInstance.explorerTab = true;
	var objTemp = eval(objInstance.h.explorerTab);
	objTemp.style.display = "block";
	objTemp = eval(objInstance.h.searchTab);
	objTemp.style.display = "none";
	objTemp = eval(objInstance.h.applet);
	objTemp.style.display = "block";
	objTemp = eval(objInstance.h.search);
	objTemp.style.display = "none";
	objTemp = eval(objInstance.h.extSearch);
	objTemp.style.display = "none";
}

//show assignment tab
function mtdShowSearch(objInstance) {
	if (objInstance==null)
		objInstance=this;
	objInstance.explorerTab = false;
	objInstance.searchTab = true;
	var objTemp = eval(objInstance.h.searchTab);
	objTemp.style.display = "block";
	objTemp = eval(objInstance.h.explorerTab);
	objTemp.style.display = "none";
	if(this.extSearch)
	{
		objTemp = eval(objInstance.h.extSearch);
		objTemp.style.display = "block";
	}
	else
	{
		objTemp = eval(objInstance.h.search);
		objTemp.style.display = "block";
	}
	objTemp = eval(objInstance.h.applet);
	objTemp.style.display = "none";
}//45

function mtdShowExtSearch(objInstance) {
	if (objInstance==null)
		objInstance=this;
	this.extSearch = true;
	var objTemp = eval(objInstance.h.search);
	objTemp.style.display = "none";
	objTemp = eval(objInstance.h.extSearch);
	objTemp.style.display = "block";
	
}

function mtdShowQuickSearch(objInstance) {
	if (objInstance==null)
		objInstance=this;
	this.extSearch = false;
	var objTemp = eval(objInstance.h.extSearch);
	objTemp.style.display = "none";
	objTemp = eval(objInstance.h.search);
	objTemp.style.display = "block";
	
}


function mtdPopulateHistory(value) {
	var objTemp = eval(this.h.history);
	objTemp.qSearch.bidNumber.value = value;
}






//check that the search is shown (refresh/resize workaround)
function mtdCheck() {if (this.searchTab) mtdShowSearch(this);}

/* Arrows */
//Constructor Class
function Arrows() {
	this.Arrows = new Array();
	for (var i=0;i<4;i++)
		this.Arrows[i] = new Image;
	this.Arrows[0].src = 'img/butArrowsLeftOver.gif';
	this.Arrows[1].src = 'img/butArrowsLeftOff.gif';
	this.Arrows[2].src = 'img/butArrowsRightOver.gif';
	this.Arrows[3].src = 'img/butArrowsRightOff.gif';
	this.Out = mtdAOut;
	this.Over = mtdAOver;
}
function mtdAOut(bln, obj) {obj.src = bln ? this.Arrows[1].src : this.Arrows[3].src;}				
function mtdAOver(bln, obj) {obj.src = bln ? this.Arrows[0].src : this.Arrows[2].src;}