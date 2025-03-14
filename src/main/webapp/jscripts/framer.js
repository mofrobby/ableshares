/* Framer */
//Constructor
function Framer() {
	//properties
	this.frames = new Array();	//array of pointers to the frameUnit objects
	//methods
	this.add = mtdAdd;
	this.sync = mtdSync;
	this.toggle = mtdToggle;

//adds a frame
function mtdAdd(strFrame, strFS, intLittle, intLarge, blnExpanded) {
	objF = this.frames[this.frames.length] = new frameUnit();
	objF.frame = strFrame;
	objF.frameset = strFS;
	objF.little = intLittle;
	objF.large = intLarge;
	objF.expanded = blnExpanded;
	return objF;
}

//syncs the correct Frameset, used when the frame is collapsed and the user types a new url, and then navigates back to this page. otherwise the frame would be wide and the collapsed bar is shown.
function mtdSync(i) {
	this.frames[i].toggle();
}

//toggles a frame (zero based)
function mtdToggle(i, bln) {
	this.frames[i].toggle(bln);
}

//Constructor
function frameUnit() {
	this.frame = "";
	this.frameset = "";
	this.little = 0;
	this.large = 0;
	this.expanded = true;
	//
	this.frameBorderOn = null;
	this.frameBorderOff = null;
	this.frameSpacingOn = null;
	this.frameSpacingOff = null;
	this.borderOn = null;
	this.borderOff = null;
	//
	this.blocks = new Array();			//array of strings that eval to objects to be toggled
	this.blocksState = new Array();	//array of booleans, which state the block should be toggled
	//methods
	this.addBlock = mtdAddBlock;
	this.toggle = mtdToggle;
	
	//adds a block to the list
	function mtdAddBlock(strObj, bln) {
		this.blocks[this.blocks.length] = strObj;
		this.blocksState[this.blocksState.length] = bln;
	}
	
	//Toggle the frame
	function mtdToggle(bln) {
		//save the current size if collapsing
		if (this.expanded) {	
			obj = eval(this.frame);
			if (obj.document.body)
				this.large = obj.document.body.offsetWidth;
		}
		//if bln is null then we are Syncing, not toggling
		if (bln!=null)
			this.expanded = bln;
		objFS = eval(this.frameset);
		if (this.expanded) {
			if (this.frameBorderOn)
				objFS.frameBorder = this.frameBorderOn;
			if (this.frameSpacingOn)
				objFS.frameSpacing = this.frameSpacingOn;
			if (this.borderOn)
				objFS.border = this.borderOn;
			objFS.cols = this.large + ",*";
		} else {
			if (this.frameBorderOff)
				objFS.frameBorder = this.frameBorderOff;
			if (this.frameSpacingOff)
				objFS.frameSpacing = this.frameSpacingOff;
			if (this.borderOff)
				objFS.border = this.borderOff;
			objFS.cols = this.little + ",*";
		}
		//shows and hides all blocks
		for (i=0; i<this.blocks.length; i++) {
			if (this.blocksState[i])
				str = this.expanded ? "block" : "none";
			else
				str = this.expanded ? "none" : "block";
			obj = eval(this.blocks[i]);
			if (obj)
				obj.style.display = str;
		}
	}
}

}