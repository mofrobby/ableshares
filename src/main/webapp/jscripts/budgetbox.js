// constructor for Multi-Columned List Box
function MCListBox(table, headCount, hlColor, uhlColor) {
	// properties
	this.table = table
	this.headCount = headCount
	this.highlightColor = hlColor ? hlColor : "#FBFBB9"
	this.unhighlightColor = uhlColor ? uhlColor : "#ffffff"
	this.drag = false		// currently unused

	// build the selected array - keeping it open-ended for dynamic content	
	this.selectedArray = new Array()
	for (var i = this.headCount; i < this.table.rows.length; i++)
		this.selectedArray[i - this.headCount] = false
	this.data = new Array()
	
	// methods
	this.highlight = mtdHighlight
	this.unhighlight = mtdUnhighlight
	this.switchSelect = mtdSwitchSelect
	this.dragSelect = mtdDragSelect	
	this.selectAll = mtdSelectAll
	this.selectNone = mtdSelectNone
	this.getSelected = mtdGetSelected
	this.isAllSelected = mtdIsAllSelected
	this.isNoneSelected = mtdIsNoneSelected
	this.countSelected = mtdCountSelected
	this.validRoles = new Array();
	this.IsValidRole = mtdIsValidRole
	this.AddMemberRow=mtdAddMemberRow
	// link the object to the table
	this.table.mcListBox = this

	// set the cursor style for
	this.table.style.cursor = "default"
}

// method to select/deselect rows. 
function mtdSwitchSelect(row) {
	//alert('switch select called');
	for (var i = this.headCount; i < this.table.rows.length; i++) {
		if (this.table.rows[i] == row) {
			if (this.table.rows[i].style.backgroundColor == this.highlightColor) {
				this.unhighlight(i)
				this.selectedArray[i - this.headCount] = false
				return (i * -1)
			} else {
				this.highlight(i)
				this.selectedArray[i - this.headCount] = true
				//if(this.selectedArray.length == 1) {// Only show edit if one is selected
				//parent.changeImage(parent.document.all.btnEditSelect, imgEditSelect, "Edit Selected Activity")
				//}
				//else if(this.selectedArray.length > 1){
					//parent.changeImage(parent.document.all.btnEditSelect, imgBlank, "")
				//}
				return i
			}
		}
	}
}

function mtdIsValidRole(roleid)
{
	var count=0;
	for(count=0;count<this.validRoles.length;count++)
	{
		if(this.validRoles[count]==roleid || this.validRoles[count]==0)
			return true;
	}
	return false;
}

function mtdAddMemberRow(userid,checked,firstname,lastname,organization,role,cc,email,placeholder,roleid)
{
	var valid=this.IsValidRole(roleid);
	this.data[this.data.length]=new Array(userid,checked,firstname,lastname,organization,role,(valid && !cc)?cc:!cc,email,valid,roleid)
	
}

function mtdAddComponentRow(one,two,three,four)
{
	var valid=this.IsValidRole(roleid);
	this.data[this.data.length]=new Array(userid,checked,firstname,lastname,organization,role,(valid && !cc)?cc:!cc,email,valid,roleid)
	
}


function mtdHighlight(row) {
	this.table.rows[row].style.backgroundColor = this.highlightColor
}

function mtdUnhighlight(row) {
	this.table.rows[row].style.backgroundColor = this.unhighlightColor
}

function mtdDragSelect(row) {		// currently unused
	if (this.drag) {
		for (var i = this.headCount; i < this.table.rows.length; i++) {
			if (this.table.rows[i] == row) {
				if (this.table.rows[i].style.backgroundColor == this.highlightColor) {
					this.table.rows[i].style.backgroundColor = this.unhighlightColor
					this.selectedArray[i - this.headCount] = false
				} else {
					this.table.rows[i].style.backgroundColor = this.highlightColor
					this.selectedArray[i - this.headCount] = true
				}				
			}
		}
	}
}

function mtdSelectAll() {
	for (var i = this.headCount; i < this.table.rows.length; i++) {
		this.table.rows[i].style.backgroundColor = this.highlightColor
		this.selectedArray[i - this.headCount] = true
	}
}

function mtdSelectNone() {
	for (var i = this.headCount; i < this.table.rows.length; i++) {
		this.table.rows[i].style.backgroundColor = this.unhighlightColor
		this.selectedArray[i - this.headCount] = false
	}
}

function mtdGetSelected() {
	//var tempArray = new Array()
	var num_selected ;
	for (var i = this.headCount; i < this.table.rows.length; i++) {
		if (this.selectedArray[i - this.headCount]){
			//tempArray[tempArray.length] = i - this.headCount
			num_selected = i - this.headCount;
			}
	}
	
	return num_selected;
}

function mtdCountSelected() {
	var count = 0
	for (var i = this.headCount; i < this.table.rows.length; i++) {
		if (this.selectedArray[i - this.headCount])
			count++
	}
	return count
}

function mtdIsAllSelected() {
	for (var i = this.headCount; i < this.table.rows.length; i++) {
		if (!this.selectedArray[i - this.headCount])	// if anything is not selected, return false
			return false
	}
	return true
}

function mtdIsNoneSelected() {
	for (var i = this.headCount; i < this.table.rows.length; i++) {
		if (this.selectedArray[i - this.headCount])		// if anything is selected, return false
			return false
	}
	return true
}
