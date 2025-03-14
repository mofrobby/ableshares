/*
		Treeview
		all functions other than the constructor are internal
*/

//Constructor Class
function Treeview(strName, objParent, strURL, strTarget) {
	//properties
	this.name = strName;				//display name
	this.url = strURL;					//URL link (can be null)
	this.target = strTarget;		//URL link's target frame (can be null)
	this.pixelTop =0;			//position from top of frame
	// methods
	this.add = mtdAdd;
	this.allParentsOpen = mtdAllParentsOpen; //returns boolean
	if (navigator.appVersion.indexOf("Win") != -1){
		this.gblnIsIE = true;
	} else{
		this.gblnIsIE = false;
	  }
	if (objParent!=null) {				//if this isn't the root
		this.parent = objParent;
		this.childNumber = objParent.children.length;
		objParent.children[this.childNumber] = this;
		if (this.childNumber>0)			//set next sibiling
			objParent.children[this.childNumber-1].nextSibling = this;
		this.nextSibling = null;
		this.rootNode = this.parent.rootNode;			//set root node
		this.rootNode.nodeCount++;			//update root's node count
		this.nodeId = this.rootNode.nodeCount;		//unique Id of node, starts at 1 for the root
		//this.previousSibling = this.childNumber != 0 ? objParent.children[this.childNumber - 1] : null ;  //should work, but not needed
	} else {	//if this is the root
		this.nodeId = 1;				//unique node Id
		this.nodeCount = 1;			//total number of nodes
		this.parent = null;
		this.childNumber = 0;
		this.nextSibling = null;
		this.selectedNode = null;
		this.rootNode = this;
		this.document = null;
		this.instanceName = 'this';
		this.pixelTopCurr = 0; //internal pixel top counter
		// methods
		this.getHTML = mtdGetHTML;
		this.getNodeById = mtdGetNodeById;
		this.refreshHTML = mtdRefreshHTML;
		this.hideAll = mtdHideAll;
		this.selectNode = mtdSelectNode;
		this.expand = mtdExpand;
		this.toggleTree = mtdToggleTree;
		//this.getLastNode = mtdGetLastNode;	//don't need to use this, it works though
		this.getTreeBottom = mtdGetTreeBottom;
		this.images = new Array();	// build the tree images
		buildImages(this.images);
	} //59
}
//61
//hides/shows all of the tree
function mtdToggleTree(bln) {
	if (bln) this.refreshHTML();
	else this.hideAll();
}

//Expands and contracts a node
function mtdExpand(intNodeId) {
	var objNode = this.getNodeById(intNodeId);		// Node that was clicked
	objNode.open = !objNode.open;
	
	this.refreshHTML();
}

//adds the tree images to the array
function buildImages(aimg) {
	for (i=0;i<10;i++)
		aimg[i] = new Image;
	aimg[0].src = '../img/tree/e.gif';
	aimg[1].src = '../img/tree/folderclosed.gif';
	aimg[2].src = '../img/tree/folderopen.gif';
	aimg[3].src = '../img/tree/join.gif';
	aimg[4].src = '../img/tree/joinbot.gif';
	aimg[5].src = '../img/tree/line.gif';
	aimg[6].src = '../img/tree/minusbot.gif';
	aimg[7].src = '../img/tree/minusjoin.gif';
	aimg[8].src = '../img/tree/plusbot.gif';
	aimg[9].src = '../img/tree/plusjoin.gif';	
} //90

//selects a node in the tree
function mtdSelectNode(intNodeId) {
	var objImg;
	
	//document.write("intnodeID " + this.selectedNode);
	if (this.selectedNode != null) {	//unselect old node
		objImg = eval(this.document + '.imgFold' + this.selectedNode)
		objImg.src = this.images[1].src;
		
	}
	this.selectedNode = intNodeId;
	objImg = eval(this.document + '.imgFold' + intNodeId)
	objImg.src = this.images[2].src;
	//document.write("ill");
	//alert("href ="+this.getNodeById(intNodeId).url);
	//alert("target = "+parent.frames[3].document.title);
	parent.frames[3].location.href = this.getNodeById(intNodeId).url;	//load the page
	
}

//returns the node from an Id value
function mtdGetNodeById(intNodeId, objNode) {
	var node;
	if (objNode==null) objNode=this; //if this is the root
	if (objNode.nodeId<intNodeId) {
		if (objNode.nextSibling==null || objNode.nextSibling.nodeId > intNodeId)
			node = mtdGetNodeById(intNodeId, objNode.children[0]);	//drop down the branch recursivly
		else
			node = mtdGetNodeById(intNodeId, objNode.nextSibling);		//go to the next node recursivly
	} else
		node = objNode;
	return node;
} //120

//returnd the div for Netscape to push the page down as the scrollbar won't pop in otherwise
//finds the last node on the tree
function mtdGetTreeBottom() {
	if (navigator.appVersion.indexOf("Win") != -1)
		return '';
	return '<div id="divTreeBottom" style="position:absolute; top:' + eval((this.nodeCount)*16+this.pixelTop) + '"></div>';
}

// Returns the HTML as a string
function mtdGetHTML(objBranch) {
	var strHTML = '';
	
	if (objBranch==null) {	//if this is the root
		objBranch=this;
		if (this.selectedNode != null)	// if a folder is selected then open it's parents
			openParents(this.getNodeById(this.selectedNode));
	}
	if (objBranch.children!=null) {
		for (var x=0; x<objBranch.children.length; x++) {
			strHTML += '<div ';
			strHTML += 'id="divNode' + objBranch.children[x].nodeId + '" style="'
			if (!objBranch.children[x].allParentsOpen()) {	//set the visibility as we might be refreshing it in Netscape
				strHTML += 'display:none';
				objBranch.children[x].pixelTop = objBranch.rootNode.getNodeById(objBranch.children[x].nodeId-1).pixelTop;
			} else {
				strHTML += 'display:block';
				objBranch.children[x].pixelTop = objBranch.rootNode.getNodeById(objBranch.children[x].nodeId-1).pixelTop + 16;
			} //148
			strHTML += '; top:'+objBranch.children[x].pixelTop+'px;"'//set the top
			strHTML += '><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><nobr>'+'\n';
			strHTML += backBranch(objBranch.children[x]) + '\n';
			if (objBranch.children[x].nextSibling==null)	//node is at the end of a branch
				if (objBranch.children[x].children==null)	//node has no children
					strHTML += '<img src="'+objBranch.rootNode.images[4].src+'" width="18" height="16" border=0 align="left" hspace="0">'+ '\n';
				else	//node has children
					if (objBranch.children[x].open) {	//this node is open
						strHTML += '<a href="javascript:objTN.expand(' + objBranch.children[x].nodeId + ');">'+'\n';  //
						strHTML += '<img name="imgNode' + objBranch.children[x].nodeId + '" src="'+objBranch.rootNode.images[6].src+'" width="18" height="16" border=0 align="left" hspace="0">';
						strHTML += '</a>';
					} else {	//this node is closed
						strHTML += '<a href="javascript:objTN.expand(' + objBranch.children[x].nodeId + ');">'+ '\n'; //javascript:parent.'+objBranch.rootNode.instanceName+'.expand(' + objBranch.children[x].nodeId + ');
						strHTML += '<img name="imgNode' + objBranch.children[x].nodeId + '" src="'+objBranch.rootNode.images[8].src+'" width="18" height="16" border=0 align="left" hspace="0">'+ '\n';
						strHTML += '</a>'+ '\n';
					}
			else	//node is in the middle of a branch
				if (objBranch.children[x].children==null)		//node has no children
					strHTML += '<img src="'+objBranch.rootNode.images[3].src+'" width="18" height="16" border=0 align="left" hspace="0">';
				else {		//node has children
					if (objBranch.children[x].open) {	//this node is open
						strHTML += '<a href="javascript:objTN.expand(' + objBranch.children[x].nodeId + ');">';
						strHTML += '<img name="imgNode' + objBranch.children[x].nodeId + '" src="'+objBranch.rootNode.images[7].src+'" width="18" height="16" border=0 align="left" hspace="0">';
						strHTML += '</a>';
					} else {	//this node is closed 160
						strHTML += '<a href="javascript:objTN.expand(' + objBranch.children[x].nodeId + ');">';
						strHTML += '<img name="imgNode' + objBranch.children[x].nodeId + '" src="'+objBranch.rootNode.images[9].src+'" width="18" height="16" border=0 align="left" hspace="0">';
						strHTML += '</a>';
					}
				}
			if (objBranch.children[x].url != null) 	//draw the node info
				strHTML += '<a href="javascript:objTN.selectNode(' + objBranch.children[x].nodeId + ');" class=tBlack>';  //objTN.selectNode(' + objBranch.children[x].nodeId + ')
			if (objBranch.rootNode.selectedNode == objBranch.children[x].nodeId)	// set the foldericon
				strHTML += '<img src="'+objBranch.rootNode.images[2].src+'"';
			else			
				strHTML += '<img src="'+objBranch.rootNode.images[1].src+'"';
			
			strHTML += ' name="imgFold' +objBranch.children[x].nodeId+ '" width="18" height="16" border=0 align="left" hspace="0">';
			strHTML += objBranch.children[x].name;
			if (objBranch.children[x].url != null)
				strHTML += '</a>';
			strHTML += '</nobr></tr></table></div>'; //+ String.fromCharCode(13);		//needs this carridge return for a resize problem in Netscape
			strHTML += mtdGetHTML(objBranch.children[x]);		//get this nodes children
		}
	}//193
	
	alert(strHTML);
	return strHTML;
}

// builds display information for left hand lines by following back up the tree recursivly
function backBranch(objBranch) {
	var strHTML = '';
	if (objBranch.parent!=null) {
		strHTML += backBranch(objBranch.parent);
		strHTML += (objBranch.parent.nextSibling==null ? '<img src="'+objBranch.rootNode.images[0].src+'" width="18" height="16" border=0 align="left" hspace="0">' : '<img src="'+objBranch.rootNode.images[5].src+'" width="18" height="16" border=0 align="left" hspace="0">');
	}
	return strHTML;
} //206

// opens all the parents of the selcted folder recursivly
function openParents(objNode) {
	if (objNode.parent != null) {
		objNode.parent.open = true;
		openParents(objNode.parent);
	}
}
//215
//Adds a branch
function mtdAdd(strName, strURL, strTarget) {
	//if we are adding the first child then make an array of children in the parent. We add it here and not the constructor to save resources
	//We add open here as only a node with children can have this property.
	if (this.children==null) {
		this.children = new Array();
		this.open = (this.rootNode == this) ? true : false;		//default closed for non-root
	}
	//make new Treeview object
	var objChild = new Treeview(strName, this, strURL, strTarget);
	return objChild;
}

// Refreshes the HTML
// call when a node is expanded or contracted
function mtdRefreshHTML(objBranch) 
{
	if (objBranch==null) {	//if this is the root
		objBranch=this;   //objTN;
		this.pixelTopCurr = this.pixelTop;
	}
	//alert(objBranch.rootNode.document.title);
	if (objBranch.children!=null) 
	{	//if node has children
		for (var x=0; x<objBranch.children.length; x++) 
		{
						
			var objChosen = eval(objBranch.rootNode.document + '.all.divNode' + objBranch.children[x].nodeId); 	//get the div for the node .document + '.all.divNode' + objBranch.children[x].nodeId);
			//objChosen = this.gblnIsIE ? objChosen.style : objChosen;
			if (!objBranch.children[x].allParentsOpen())                         //if all parents are not open then set this invisible
			{	//hide and show
				objChosen.style.display = 'none';
			} 
			else 
			{
				objChosen.style.display = 'block';
				objBranch.rootNode.pixelTopCurr += 16;
				objChosen.top = objBranch.rootNode.pixelTopCurr;	//set the div position
				
				if (objBranch.children[x].nextSibling==null) 
				{	//node is at the end of a branch - set images
					
					if (objBranch.children[x].children!=null) 
					{	//node has children
						if (objBranch.children[x].open) 
						{		//this node is open
							objChosen = eval(objBranch.rootNode.document + '.imgNode' + objBranch.children[x].nodeId + '');
							objChosen.src=objBranch.rootNode.images[6].src;
						} 
						else 
						{	//this node is closed
							objChosen = eval(objBranch.rootNode.document + '.imgNode' + objBranch.children[x].nodeId + '');
							objChosen.src=objBranch.rootNode.images[8].src;
							
						}
					}
				} 
				else 
				{	//node is in the middle of a branch - set images
					if (objBranch.children[x].children!=null) 
					{	//node has children
						if (objBranch.children[x].open) 
						{	//this node is open
							objChosen = eval(objBranch.rootNode.document + '.imgNode' + objBranch.children[x].nodeId + '');
							objChosen.src=objBranch.rootNode.images[7].src;
						} 
						else 
						{	//this node is closed
							objChosen = eval(objBranch.rootNode.document + '.imgNode' + objBranch.children[x].nodeId + '');
							objChosen.src=objBranch.rootNode.images[9].src;
						}
					}
				}
			}
			mtdRefreshHTML(objBranch.children[x]);	//call this nodes children
		}
	}
}




// Hides the entire tree
function mtdHideAll(objBranch) {
	if (objBranch==null) objBranch=this;		//if this is the root
	if (objBranch.children!=null) {	//call sub branches recursively
		for (var x=0; x<objBranch.children.length; x++) {
			var objChosen = eval(objBranch.rootNode.document + '.all.divNode' + objBranch.children[x].nodeId);	//get the div for the node
			objChosen = "IE4" ? objChosen.style : objChosen;
			objChosen.visibility = 'hidden';
			mtdHideAll(objBranch.children[x]);	//call this nodes children
		}
	}
}

//returns true if all parents are open of node, else false
function mtdAllParentsOpen(objBranch) {
	var blnAllPOpen = true;
	if (objBranch==null) objBranch=this;	//if this is the root
	if (objBranch.parent!=null) {	//we don't check that the parent is open, only one level below is important
		blnAllPOpen=objBranch.parent.open;
		if (blnAllPOpen && mtdAllParentsOpen(objBranch.parent))	//call parent branches recursively
			blnAllPOpen=true;
		else
			blnAllPOpen=false;
	}
	return blnAllPOpen;
}
