//constructor
function ConfirmArray(frmSource, frmTarget) {
	this.source = frmSource
	this.target = frmTarget
	this.array = new Array()
	this.add = mtdConfirmArrayAdd
	this.copy = mtdConfirmArrayCopy
}

function mtdConfirmArrayAdd(objSource, objTarget) {
	this.array[this.array.length] = new Array()
	var os = eval('this.source.' + objSource)
	if (!os) {
		alert('invalid source: ' + this.source.name + '.' + objSource)
		return
	}
	if (!objTarget)
		objTarget = objSource
	var ot = eval('this.target.' + objTarget)
	if (!ot) {
		alert('invalid target: ' + this.target.name + '.' + objTarget)
		return
	}
	
	this.array[this.array.length-1][0] = os
	this.array[this.array.length-1][1] = ot
}

function mtdConfirmArrayCopy() {
	var preSource = null
	for (var i=0; i < this.array.length; i++) {
		preSource = null
		preSource = getSource(this.array[i][0])
		setTarget(this.array[i][1], preSource)
	}
}

function getSource(obj) {
	if (!obj)
		return
	var type = getType(obj)
	switch(type) {
		case "select-one":
			return obj[obj.selectedIndex].text
		case "select-multiple":
			var buf = ""
			for (var m=0; m < obj.length; m++) {
				if (obj[m].selected)
					buf += obj[m].text + '\n'
			}
			return buf
		case "text":
			return obj.value
		case "textarea":
			return obj.value
		case "radio":
			return obj.checked
	}
}

function setTarget(obj, dataSource) {
	if (!obj)
		return
	var type = getType(obj)
	switch(type) {
		case "text":
			obj.value = dataSource
			break
		case "textarea":
			obj.value = dataSource
			break
		case "radio":
			obj.checked = dataSource
			obj.disabled = true
			break
		default:
			obj.innerHTML = ""
			obj.innerHTML = dataSource
			break
	}
}

function getType(obj) {
	return obj.type
}

function goConfirm() {
	if (document.frmMessage.vReady && !document.frmMessage.validate())
		return
	if (document.all.divMessageData)
		document.all.divMessageData.style.display='none';
	if (document.all.divSelectRecipients)
		document.all.divSelectRecipients.style.display='none';
	if (document.all.divConfirmData)
		document.all.divConfirmData.style.display='block';
	if (document.images.imgConfirm)
		document.images.imgConfirm.src = "img/picHeadConfirm.gif";
	objConfirm.copy()
	if (document.fraRecipientsConfirm)
		refreshMembers(document.fraRecipientsConfirm.document.all.dataTable, 'tGray80Small', 'tGray80Mini')
	if (this.attachList && this.importList)
		var mArray = mergeArrays(attachList.data, importList.data, 5)
	if (document.fraConfirmDocs)
		refreshDocs(document.fraConfirmDocs.document.all.dataTable, mArray, 'tGray80Small', 'tGray80Mini')
}

function mergeArrays(a1, a2, size) {
	var tArray = new Array()
	for (var i=0; i < a1.length; i++) {
		tArray[tArray.length] = new Array()
		for (var s=0; s < size; s++)
			tArray[tArray.length-1][s] = a1[i][s]
	}
	for (var i=0; i < a2.length; i++) {
		tArray[tArray.length] = new Array()
		for (var s=0; s < size; s++)
			tArray[tArray.length-1][s] = a2[i][s]

	}
	return tArray
}

function goMessage() {
	var ok = true
	if (memberList) {
		for (var i=0; i < memberList.data.length; i++) {
			if (!memberList.data[i][6]) {
				ok = true
				break
			}
		}
		if (!ok) {
				alert('You must choose at least one "To" recipient for this message.')
				return;
		}
	}
	
	if (document.all.divConfirmData)
		document.all.divConfirmData.style.display='none';
	if (document.all.divSelectRecipients)
		document.all.divSelectRecipients.style.display='none';
	if (document.all.divMessageData)
		document.all.divMessageData.style.display='block';
	if (document.images.imgConfirm)
		document.images.imgConfirm.src = "x.gif";

}

function goRecipients() {
	document.all.divConfirmData.style.display='none';
	document.all.divMessageData.style.display='none';
	document.all.divSelectRecipients.style.display='block';
	document.images.imgConfirm.src = "x.gif";
}
