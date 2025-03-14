function Linker(objAnchor, objImage, imgEnabled, imgDisabled) {
	// Properties
	this.anchor = objAnchor
	this.image = objImage
	this.imageEnabled = imgEnabled
	this.imageDisabled = imgDisabled
	
	// Methods
	this.setLink = mtdSetLink
	this.clearLink = mtdClearLink
	
//	this.clearLink()
}

function mtdSetLink(strLink) {
	if (strLink && strLink != "&startIndex=1&sortBy=") {
		this.anchor.href = strLink
		this.anchor.onclick = null
		this.image.src = this.imageEnabled
	} else {
		this.clearLink()
	}
}

function mtdClearLink() {
	this.anchor.href = "#"
	this.anchor.onclick = parent.nolink
	this.image.src = this.imageDisabled
}

// this function cancels links (anchors)
function nolink() {
	return false
}
