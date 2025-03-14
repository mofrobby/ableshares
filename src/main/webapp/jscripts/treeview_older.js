/*
		Treeview
		all functions other than the constructor are internal
*/

//Constructor Class
function Treeview(strFolderID, strName, objParent, intFolder, strURL, strTarget, strDesc, intFolderTypeID) {
	//gloabals
	var root;
	//properties
	if (intFolder==null) intFolder=0;
	this.folderType = intFolder;	//for which type of image to display
	this.folderTypeID = intFolderTypeID;	//extra folder type for data movement reasons
	this.folderID = strFolderID;	//the iManage FolderID passed along
	this.name = strName;					//display name
	this.desc = strDesc;					//description
	this.url = strURL;						//URL link (can be null)
	this.target = strTarget;			//URL link's target frame (can be null)
	this.pixelTop = 0;						//position from top of frame
	// methods
	this.add = mtdAdd;												//adds a node
	this.allParentsOpen = mtdAllParentsOpen;	//returns boolean
	this.prevSibling = mtdPrevSibling;				//returns previous sibling node
	this.nextSibling = mtdNextSibling;				//returns next sibling node
	this.rename = mtdRename;									//renames node
	this.remove = mtdRemove;									//deletes the node
	
	if (objParent!=null) {				//if this isn't the root
		this.parent = objParent;
		this.kidNumber = objParent.kids.length;
		objParent.kids[this.kidNumber] = this;
		root = this.parent.root;
		this.root = root;		//set local root variable
		root.nodeCount++;								//update root's node count
		this.nodeId = root.nodeCount;		//unique Id of node, starts at 1 for the root
		if (root.dynamic) {
			checkTreeIds();									//check all nodes are correct
			sortFolders(this.parent);				//put node in correct place
			this.parent.open = true;
		}
	} else {	//if this is the root
		//globals
		root = this;
		//properties
		this.root = root;
		this.nodeId = 1;				//unique node Id
		this.nodeCount = 1;			//total number of nodes
		this.kidNumber = 0;
		this.parent = null;
		this.selectedNode = null;
		this.document = null;
		this.instanceName = '';
		this.pixelTopCurr = 0;	//internal pixel top counter
		this.dynamic = false;		//for dynamic additions
		// methods
		this.canAddHere = mtdCanAddHere;
		this.canRemoveHere = mtdCanRemoveHere;
		this.canRenameHere = mtdCanRenameHere;
		this.getHTML = mtdGetHTML;
		this.getNodeById = mtdGetNodeById;
		this.getNodeTag = mtdGetNodeTag;
		this.refreshHTML = mtdRefreshHTML;
		this.highlightAllNodes = mtdHighlightAllChildren;
		this.unhighlightAllNodes = mtdUnHighlightAllChildren;
		this.populateToFrom = mtdPopulateToFrom;
		this.hideAll = mtdHideAll;
		this.selectNode = mtdSelectNode;
		this.expand = mtdExpand;
		this.toggleTree = mtdToggleTree;
		this.expandByFolderID = mtdExpandByFolderID;
		this.getDataString = mtdGetDataString;
		//images
		this.images = new Array();	// build the tree images for the fabric of the folder
		this.icons = new Array();		// build the tree icons for the folders
		buildImages(this.images, this.icons);
}

//////////////////////
//  Local Functions //
//////////////////////

//checks entire tree to be sure nodeIds, kidNumbers and kid arrays all are correct
function checkTreeIds(objN) {
	if (objN==null) {
		objN=root;
		root.nodeCount = 1;
	}
	if (objN.kids!=null) {
		for (var i=0; i<objN.kids.length; i++) {
			root.nodeCount++;
			objN.kids[i].nodeId = root.nodeCount;
			objN.kids[i].kidNumber = i;
			checkTreeIds(objN.kids[i]);
		}
	}
}

//bubble sorts all the sub folders of the passed node alphabetically. not recursive (i.e. subfolders are not sorted)
function sortFolders(objN) {
	if (objN.kids) {
		blnChanged = true;
		while (blnChanged) {
			blnChanged = false;
			for (i=0; i<objN.kids.length-1; i++) {	//loops through all kids
				objKid = objN.kids[i];
				objNext = objKid.nextSibling();
				if (objNext) {
					if (objKid.name>objNext.name) {	//nodes are in wrong order, swap
						blnChanged = true;
						objKid.kidNumber++;
						objNext.kidNumber--;
						objN.kids[objKid.kidNumber-1] = objNext;
						objN.kids[objKid.kidNumber] = objKid;
						var KidId = objKid.nodeId;
						var NextId = objNext.nodeId;
						var KidDelta = 1 + getLastOffspring(objNext).nodeId - NextId;	//account for both swapping nodes might have any number of kids
						var NextDelta = KidId-NextId;
						objKid.nodeId += KidDelta;
						objNext.nodeId += NextDelta;
						adjustChildNodes(objKid, KidDelta);
						adjustChildNodes(objNext, NextDelta);
					}
				}
			}
		}
	}
}

//adjust all children of a node, adding intDelta to all their nodeIds.
function adjustChildNodes(objN, intDelta) {
	if (objN) {
		if (objN.kids) {
			for (var i=0; i<objN.kids.length; i++) {
				objN.kids[i].nodeId += intDelta;
				adjustChildNodes(objN.kids[i], intDelta);
			}
		}
	}
}

//returns the last child's child's child (etc) recusrsive function.
function getLastOffspring(objN) {
	if (objN.kids) {
		objN = objN.kids[objN.kids.length-1];
		objN = getLastOffspring(objN);
	}
	return objN;
}


//////////////////////
//     Methods      //
//////////////////////

//returns boolean
function mtdCanAddHere() {
	if (!root.dynamic)
		return true;
	objN = root.getNodeById(root.selectedNode);	//get selected node
	return (objN!=root && objN.folderType!=1);		//return false if dynamic add occurs on root or messaging level
}
//returns boolean
function mtdCanRemoveHere() {
	objN = root.getNodeById(root.selectedNode);	//get selected node
	return (objN!=root && objN.folderType==0);	//return false if root or message or year folders
}
//returns boolean
function mtdCanRenameHere() {
	objN = root.getNodeById(root.selectedNode);	//get selected node
	return (objN!=root && objN.folderType==0);	//return false if root or message or year folders
}


//returns pervious sibling node
function mtdPrevSibling() {
	return this.kidNumber != 0 ? this.parent.kids[this.kidNumber-1] : null;
}

//returns next sibling node
function mtdNextSibling() {
	if (this.parent)
		return this.kidNumber < this.parent.kids.length-1 ? this.parent.kids[this.kidNumber+1] : null;
	else
		return null;
}

//renames the node
function mtdRename(strName, strDesc) {
	if (!root.canRenameHere)
		return false
	this.name = strName;
	this.desc = strDesc;
	sortFolders(this.parent);
	root.selectedNode = this.nodeId;
}

//delete the node
function mtdRemove() {
	if (!root.canRemoveHere())
		return false;
	if (this!=root) {
		objKS = this.parent.kids;
		this.parent.kids = objKS.slice(0, this.kidNumber).concat(objKS.slice(this.kidNumber+1));
		if (this.parent.kids.length==0)
			this.parent.kids=null;	//need to explicitly delete it
		if (this.parent==root)
			root.selectedNode = null;
		else
			root.selectedNode = this.parent.nodeId;
		checkTreeIds();		//check all nodes are correct
	}
}

//hides/shows all of the tree
function mtdToggleTree(bln) {
	if (bln) this.refreshHTML();
	else this.hideAll();
}

//Expands and contracts a node
function mtdExpand(intNodeId) {
	var objNode = this.getNodeById(intNodeId);		// Node that was clicked
	if(objNode!=null) {	//check we got it okay.
		objNode.open = !objNode.open;
		var objTag = this.getNodeTag(objNode, true);
		//change the plus to a minus and v.v.
		if (objNode.nextSibling()==null) {	//node is at the end of a branch - set images
			if (objNode.kids!=null) {	//node has kids
				if (objNode.open)				//this node is open
					objTag.src=this.images[4].src;
				else	//this node is closed
					objTag.src=this.images[6].src;
			}
		} else {	//node is in the middle of a branch - set images
			if (objNode.kids!=null) {	//node has kids
				if (objNode.open)				//this node is open
					objTag.src=this.images[5].src;
				else	//this node is closed
					objTag.src=this.images[7].src;
			}
		}
	}
	this.refreshHTML();
}

//adds the tree images to the array
function buildImages(aimg, aico) {
	for (i=0;i<8;i++)
		aimg[i] = new Image;
	aimg[0].src = 'img/tree/e.gif';
	aimg[1].src = 'img/tree/join.gif';	//was 3
	aimg[2].src = 'img/tree/joinbot.gif';
	aimg[3].src = 'img/tree/line.gif';
	aimg[4].src = 'img/tree/minusbot.gif';
	aimg[5].src = 'img/tree/minusjoin.gif';
	aimg[6].src = 'img/tree/plusbot.gif';
	aimg[7].src = 'img/tree/plusjoin.gif';
	for (i=0;i<22;i++)
		aico[i] = new Image;
	aico[0].src = 'img/tree/icoFolderClosed.gif';	//standard Folder - Center
	aico[1].src = 'img/tree/icoFolderOpen.gif';
	aico[2].src = 'img/tree/icoFolderMessagesClosed.gif';	//Sort
	aico[3].src = 'img/tree/icoFolderMessagesOpen.gif';
	aico[4].src = 'img/tree/icoFolderContainerClosed.gif';	//Cabient
	aico[5].src = 'img/tree/icoFolderContainerOpen.gif';
	aico[6].src = 'img/tree/folderPubclosed.gif';	//Sup Group
	aico[7].src = 'img/tree/folderPubopen.gif';
	aico[8].src = 'img/tree/icoFolderGeneralClosed.gif';	//GI
	aico[9].src = 'img/tree/icoFolderGeneralOpen.gif';
	aico[10].src = 'img/tree/icoMgtStruct.gif';	//Region
	aico[11].src = 'img/tree/icoMgtStruct.gif';
	aico[12].src = 'img/tree/icoCompanies.gif';	//District
	aico[13].src = 'img/tree/icoCompanies.gif';
	aico[14].src = 'img/tree/icoCompany.gif';	//Division
	aico[15].src = 'img/tree/icoCompany.gif';
	aico[16].src = 'img/tree/icoUPSEmp.gif';	//Employees
	aico[17].src = 'img/tree/icoUPSEmp.gif';
	aico[18].src = 'img/tree/icoAreas.gif';	//Areas
	aico[19].src = 'img/tree/icoAreas.gif';
	aico[20].src = 'img/tree/icoTruck.gif';	//Truck
	aico[21].src = 'img/tree/icoTruck.gif';
}

//selects a node in the tree
function mtdSelectNode(intNodeId, blnNotFire) {
	var objImg, objNode;
	objNode = this.getNodeById(intNodeId);
	if (this.selectedNode != null) {	//unselect old node
		objImg = this.getNodeTag(this.selectedNode, false);
		objImg.src = this.icons[this.getNodeById(this.selectedNode).folderType].src;
		objImg.parentElement.style.fontWeight = '';
		undoRow(objImg.parentElement);
		var node = this.getNodeById(this.selectedNode);	
		if (node==null) node=this;	
		this.unhighlightAllNodes(node);
	}
	this.selectedNode = intNodeId;
	objImg = this.getNodeTag(intNodeId, false);
	objImg.src = this.icons[objNode.folderType+1].src;
	objImg.parentElement.style.fontWeight = 'bold';
	doRow(objImg.parentElement);
	var node = this.getNodeById(this.selectedNode);	
	if (node==null) node=this;
	//populateToFrom(node.name);		
	this.highlightAllNodes(node);
	parent.frmSplitcon.selRegion.options.length = 0;
		parent.frmSplitcon.selDistrict.options.length = 0;
		parent.frmSplitcon.selDiv.options.length = 0;
		parent.frmSplitcon.selSLIC.options.length = 0;
		parent.frmSplitcon.selSort.options.length = 0;
		parent.frmSplitcon.selSupGrp.options.length = 0;	
	this.populateToFrom(node);
	if ((objNode.target!=null)&&(objNode.url!=null)&&(!blnNotFire))
		objNode.target.location.href = objNode.url;	//load the page
}

//returns the node from an Id value
function mtdGetNodeById(intNodeId, objNode) {
	var node;
	if (objNode==null) objNode=this; //if this is the root
	if (objNode.nodeId<intNodeId) {
		if (objNode.nextSibling()==null || objNode.nextSibling().nodeId > intNodeId) {
			if (objNode.kids!=null)
				node = mtdGetNodeById(intNodeId, objNode.kids[0]);		//drop down the branch recursivly
		} else
			node = mtdGetNodeById(intNodeId, objNode.nextSibling());	//go to the next node recursivly
	} else
		node = objNode;
	return node;
}

//returns a pointer to the actual node tag in the DOM
//can either be passed a Treeview node itself or a nodeId
function mtdGetNodeTag(intNodeId, blnNode){
	if (intNodeId.nodeId!=null) intNodeId = intNodeId.nodeId;
	if (blnNode=='div')
		return eval(this.document + '.all.divNode' + intNodeId);	//the whole div
	else {
		if (blnNode)
			return eval(this.document + '.imgNode' + intNodeId);		//Node (the plus or minus or join
		else
			return eval(this.document + '.imgFold' + intNodeId);		//the folder itself
	}
}

// Returns the HTML as a string
function mtdGetHTML(objBranch) {
	var strH = '';
	if (objBranch==null) {	//if this is the root
		objBranch=this;
		if (this.selectedNode != null)	// if a folder is selected then open it's parents
			openParents(this.getNodeById(this.selectedNode), false);
	}
	if (objBranch.kids!=null) {
		for (var x=0; x<objBranch.kids.length; x++) {
			var objKid = objBranch.kids[x];
			strH += '<div class="divNode" ';
			strH += 'id="divNode' + objKid.nodeId + '" style="'
			if (!objKid.allParentsOpen()) {	//set the visibility as we might be refreshing it in Netscape
				strH += 'visibility:hidden';
				objKid.pixelTop = root.getNodeById(objKid.nodeId-1).pixelTop;
			} else {
				strH += 'visibility:visible';
				objKid.pixelTop = root.getNodeById(objKid.nodeId-1).pixelTop + 16;
			}
			strH += '; top:'+objKid.pixelTop+'px;"';	//set the top
			strH += '><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><nobr>';			
			strH += backBranch(objKid);
			if (objKid.nextSibling()==null)	//node is at the end of a branch
				if (objKid.kids==null)		//node has no kids
					strH += '<img src="'+root.images[2].src+'" width=18 height=16 align=left hspace=0>';
				else	//node has kids
					if (objKid.open)			//this node is open
						strH += '<span style="cursor:hand;"><img name="imgNode' + objKid.nodeId + '" src="'+root.images[4].src+'" width=18 height=16 border=0 align=left hspace=0 onclick="'+root.instanceName+'.expand(' + objKid.nodeId + ');"></span>';
					else	//this node is closed
						strH += '<span style="cursor:hand;"><img name="imgNode' + objKid.nodeId + '" src="'+root.images[6].src+'" width=18 height=16 border=0 align=left hspace=0 onclick="'+root.instanceName+'.expand(' + objKid.nodeId + ');"></span>';
			else	//node is in the middle of a branch
				if (objKid.kids==null)		//node has no kids
					strH += '<img src="'+root.images[1].src+'" width=18 height=16 align=left hspace=0>';
				else {		//node has kids
					if (objKid.open)			//this node is open
						strH += '<span style="cursor:hand;"><img name="imgNode' + objKid.nodeId + '" src="'+root.images[5].src+'" width=18 height=16 border=0 align=left hspace=0 onclick="'+root.instanceName+'.expand(' + objKid.nodeId + ');"></span>';
					else	//this node is closed
						strH += '<span style="cursor:hand;"><img name="imgNode' + objKid.nodeId + '" src="'+root.images[7].src+'" width=18 height=16 border=0 align=left hspace=0 onclick="'+root.instanceName+'.expand(' + objKid.nodeId + ');"></span>';
				}
			if (root.selectedNode == objKid.nodeId)	// set the foldericon
				strH += '<img src="'+root.icons[objKid.folderType+1].src+'"';
			else
				strH += '<img src="'+root.icons[objKid.folderType].src+'"';
			if (objKid.url != null)
				strH += ' onclick="'+root.instanceName+'.selectNode(' + objKid.nodeId + ');"'
			strH += ' name="imgFold' +objKid.nodeId+ '" width=18 height=16 border=0 align=left hspace=0>';
			if (objKid.url != null) {
				strH += '<span onclick="'+root.instanceName+'.selectNode(' + objKid.nodeId + ');" class=bldLink';
				if (root.selectedNode == objKid.nodeId) //node is selected
					strH += 'Bld';
				strH += '>' +objKid.name+ '</span>'
			} else
				strH += objKid.name;
			strH += '</nobr></tr></table></div>'; 
			strH += mtdGetHTML(objKid);		//get this nodes kids
		}
	}
	//var bug = window.open(" ", "bug","status=0 toolbar=0");
	//bug.this.writeln(strH);
	return strH;
}

// builds display information for left hand lines by following back up the tree recursivly
function backBranch(objBranch) {
	var strH = '';
	if (objBranch.parent.parent!=null) {
		strH += backBranch(objBranch.parent);
		strH += (objBranch.parent.nextSibling()==null ? '<img src="'+root.images[0].src+'" width=18 height=16 align=left hspace=0>' : '<img src="'+root.images[3].src+'" width=18 height=16 border=0 align=left hspace=0>');
	}
	return strH;
}

// opens all the parents of the selcted folder recursivly
function openParents(objNode, blnUpdateImgs) {
	if (objNode.parent != null) {
		objNode.parent.open = true;
		var objParent = objNode.parent;
		if (blnUpdateImgs && (objParent.parent != null)) {	//toggle the +- images as we go
			var objTag = root.getNodeTag(objParent, true);
			if (objParent.nextSibling()==null) {	//node is at the end of a branch - set images
				if (objParent.kids!=null) {				//node has kids
					if (objParent.open)							//this node is open
						objTag.src=root.images[4].src;
					else	//this node is closed
						objTag.src=root.images[6].src;
				}
			} else {	//node is in the middle of a branch - set images
				if (objParent.kids!=null) {		//node has kids
					if (objParent.open)					//this node is open
						objTag.src=root.images[5].src;
					else	//this node is closed
						objTag.src=root.images[7].src;
				}
			}
		}
		openParents(objParent, blnUpdateImgs);
	}
}

//Adds a branch
function mtdAdd(strFolderID, strName, intFolder, strURL, strTarget, strDesc, intFolderTypeID) {
	if (!root.canAddHere())
		return false;		//return false if dynamic add occurs on root or messaging level
	if (this.kids==null) {
		this.kids = new Array();	//if we are adding the first kid then make an array of kids in the parent.
		this.open = (root == this) ? true : false;		//default closed for non-root. Only a node with kids can have 'open' property.
	}
	var objKid = new Treeview(strFolderID, strName, this, intFolder, strURL, strTarget, strDesc, intFolderTypeID);	//make new Treeview		
	return objKid;
}

// Refreshes the HTML
// call when a node is expanded or contracted
function mtdRefreshHTML(objBranch) {
	if (objBranch==null) {	//if this is the root
		objBranch=this;
		this.pixelTopCurr = this.pixelTop;
	}
	if (objBranch.kids!=null) {	//if node has kids
		for (var x=0; x<objBranch.kids.length; x++) {
			var objChosen = root.getNodeTag(objBranch.kids[x], 'div');
			objChosen = objChosen.style;
			if (!objBranch.kids[x].allParentsOpen())	//hide and show
				objChosen.visibility = 'hidden';
			else {
				objChosen.visibility = 'visible';
				root.pixelTopCurr += 16;
				objChosen.top = root.pixelTopCurr;	//set the div position
			}
			mtdRefreshHTML(objBranch.kids[x]);	//call this nodes kids
		}
	}
}

// Hides the entire tree
function mtdHideAll(objBranch) {
	if (objBranch==null) objBranch=this;		//if this is the root
	 var objChosen = eval(root.document + '.all.divNode' + objBranch.nodeId);	//get the div for the node
			objChosen = objChosen.style;
			objChosen.visibility = 'hidden';
	if (objBranch.kids!=null) {	//call sub branches recursively
		for (var x=0; x<objBranch.kids.length; x++) {
			var objChosen = eval(root.document + '.all.divNode' + objBranch.kids[x].nodeId);	//get the div for the node
			objChosen = objChosen.style;
			objChosen.visibility = 'hidden';
			mtdHideAll(objBranch.kids[x]);	//call this nodes kids
		}
	}
}

//returns true if all parents are open of node, else false
function mtdAllParentsOpen(objBranch) {
	var blnAllPOpen = true;
	if (objBranch==null) objBranch=this;	//if this is the root
	if (objBranch.parent.parent!=null) {	//we don't check that the parent's parnet is open, only two levels below is important
		blnAllPOpen=objBranch.parent.open;
		if (blnAllPOpen && mtdAllParentsOpen(objBranch.parent))	//call parent branches recursively
			blnAllPOpen=true;
		else
			blnAllPOpen=false;
	}
	return blnAllPOpen;
}

//Expands to the node with the corresponding FolderID
//blnFire controls whether link on node is fired
//returns true if node was found, else returns false.
function mtdExpandByFolderID(intFolderId, blnFire, objBranch) {
	//parents are always lower (btw)
	var blnGotIt = false;
	if (objBranch==null)//if this is the root
		objBranch=this;
	if (objBranch.folderID==intFolderId){
		blnGotIt = true;
		if (blnFire!='noselect') {
			openParents(objBranch, true);
			root.selectNode(objBranch.nodeId, !blnFire);
		} else {	//if the node isn't being selected (e.g. hilighted)
			if (objBranch.kids!=null)
				openParents(objBranch.kids[0], true);	//expand folder contents
			else
				openParents(objBranch, true);
		}
		root.refreshHTML();
	} else {
		if (objBranch.kids!=null) {
			for (var x=0; x<objBranch.kids.length; x++) {
				if (!blnGotIt)
					blnGotIt = mtdExpandByFolderID(intFolderId, blnFire, objBranch.kids[x]);		//get this nodes kids
			}
		}
	}
	return blnGotIt;
}

//Returns all the name, desc and folderTypeID for all the nodes in the tree with path data
//  so the tree can be submitted to an ASP form.
//Delimited with *#$#* delimeter seperating nodes
//Node data items delimeted by *$*
function mtdGetDataString() {
	var str = '';
	var d = "*$*"
	for (var i=2; i<=root.nodeCount; i++) {
		if (i>2)
			str += "*#$#*";
		objN = root.getNodeById(i);
		str += getDataPath(objN) +d+ objN.name +d+ objN.desc +d+ objN.folderTypeID;
	}
	return str;
}

function getDataPath(objN) {
	var str = objN.kidNumber;
	if (objN.parent!=root) {
		str = getDataPath(objN.parent) +'.'+ str;
	}
	return str;
}

function mtdHighlightAllChildren(node) {
	if (node.kids!=null) 
	{	//if node has children
		for (var x=0; x<node.kids.length; x++) 
		{
			//alert(node.children[x].nodeId);
			var objImg = eval(this.document + '.imgFold' + node.kids[x].nodeId)
			doRow(objImg.parentElement);				
			if (node.kids[x].kids!=null) 
			{
				var node = this.getNodeById(node.kids[x].nodeId);
				this.highlightAllNodes(node);	
			}
		}
	}
}	

function mtdUnHighlightAllChildren(node) {
	if (node.kids!=null) 
	{	//if node has children
		for (var x=0; x<node.kids.length; x++) 
		{
			//alert(node.children[x].nodeId);
			var objImg = eval(this.document + '.imgFold' + node.kids[x].nodeId)
			undoRow(objImg.parentElement);				
			if (node.kids[x].kids!=null) 
			{
				var node = this.getNodeById(node.kids[x].nodeId);
				this.unhighlightAllNodes(node);	
			}
		}
	}
}

function mtdPopulateToFrom(node){

	if(node)
	{
		
		objId = node.folderID;
		lvl = objId.substring(0,1);
		lvlId = objId.substring(1,objId.length); 
		//alert(lvl+' '+lvlId)
		switch (lvl) 
		{
			case '1':
		
				//alert("This is a region")
				obj = eval('parent.frmSplitcon.selRegion');
				var o = new Option;
				o.value = lvlId;
				o.text = lvlId;
				obj.options[0] = o;
				break
			case '2':
		
				//alert("This is a district")
				obj = eval('parent.frmSplitcon.selDistrict');
				var o = new Option;
				o.value = lvlId;
				o.text = lvlId;
				obj.options[0] = o;
				if(node.parent != null)
				{
					parentNode = node.parent;
					this.populateToFrom(parentNode);
				}

				break
			case '3':
		
				//alert("This is a district")
				obj = eval('parent.frmSplitcon.selDiv');
				var o = new Option;
				o.value = lvlId;
				o.text = lvlId;
				obj.options[0] = o;
				if(node.parent != null)
				{
					parentNode = node.parent;
					this.populateToFrom(parentNode);
				}

				break
			case '4':
		
				//alert("This is a SLIC")
				obj = eval('parent.frmSplitcon.selSLIC');
				var o = new Option;
				o.value = lvlId;
				o.text = lvlId;
				obj.options[0] = o;
				if(node.parent != null)
				{
					parentNode = node.parent;
					this.populateToFrom(parentNode);
				}

				break

			case '5':
		
				//alert("This is a Sort")
				obj = eval('parent.frmSplitcon.selSort');
				var o = new Option;
				o.value = lvlId;
				o.text = lvlId;
				obj.options[0] = o;
				if(node.parent != null)
				{
					parentNode = node.parent;
					this.populateToFrom(parentNode);
				}

				break
			case '6':
		
				//alert("This is a Sup Grp")
				obj = eval('parent.frmSplitcon.selSupGrp');
				var o = new Option;
				o.value = lvlId;
				o.text = lvlId;
				obj.options[0] = o;
				if(node.parent != null)
				{
					parentNode = node.parent;
					this.populateToFrom(parentNode);
				}

				break

		}
		//Tree items and drop down menu items for the MGT STRUCT should be the same
		//for this set of available mgt struct items.  Once the fraTop filter has been applied
		//the remaining visible items that compose the tree should populate the drop-downs as well
		

	}
}




	



}
