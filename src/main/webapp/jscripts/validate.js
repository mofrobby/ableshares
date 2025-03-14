// Global constants
var cErrInvalid = "invalid"
var cErrMissing = "missing"
var cErrImage = "img/icoError.gif"
var cNoErrImage = "img/icoErrorBlank.gif"
var cTextColorNormal = "#666666"
var cTextColorError = "#ff0000"
var cDefaultErrorMsg = "Login failed."

// Global variable
var gForm = null

function init_form(frmArray) {
	gForm = frmArray
	//alert('init');
	// a property showing that the form has been initialized
	frmArray.vReady = true
	
	// form methods
	frmArray.validate = mtdFormValidate
	frmArray.clearErrors = mtdFormClearErrors
	frmArray.printErrors = mtdFormPrintErrors
	
	// initialize each of the form's elements
	for (var i = 0; i < frmArray.length; i++)
		initialize(frmArray[i])
	return
}

function initialize(obj) {
	// if the form element reference doesn't exist, display error and quit function
	if (!obj) {
		alert('invalid obj')
		return
	}
	
	// ignore radio buttons. they will be initialized using 
	// explicitly-called radio groups (named arrays of radio buttons)
//	if (obj.type == "radio")
//		return
		
	// otherwise continue and set up the new object
	// this property is a check to make sure that the form element
	// has been initialized before make a method call
	obj.ready = true

	// general methods
	obj.checkUsed = mtdCheckUsed
	obj.checkRequired = mtdCheckRequired
	obj.checkOr = mtdCheckOr
	obj.checkXor = mtdCheckXor
	obj.checkXnor = mtdCheckXnor
	obj.checkSand = mtdCheckSand
	
	// type-specific methods
	switch(obj.type) {
		case "text":
		case "password":
			obj.checkLength = mtdTextCheckLength
			obj.checkAlpha = mtdTextCheckAlpha
			obj.checkAlphaUpper = mtdTextCheckAlphaUpper
			obj.checkAlphaLower = mtdTextCheckAlphaLower
			obj.checkAlphaNumeric = mtdTextCheckAlphaNumeric
			obj.checkNonAlpha = mtdTextCheckNonAlpha
			obj.checkNonAlphaNumeric = mtdTextCheckNonAlphaNumeric
			obj.checkNumeric = mtdTextCheckNumeric
			obj.checkNonNumeric = mtdTextCheckNonNumeric
			obj.checkInteger = mtdTextCheckInteger
			obj.checkFloat = mtdTextCheckFloat
			obj.checkEmail = mtdTextCheckEmail
			obj.checkZip = mtdTextCheckZip
			obj.checkPhone = mtdTextCheckPhone
			obj.checkExcludedChars = mtdTextCheckExcludedChars
			obj.checkMatch = mtdTextCheckMatch
			break
		case "textarea":
			obj.checkLength = mtdTextCheckLength
			break
		case "select-one":
			// set the type of each of the options to "select-option"
			// this is used when checking or, xor, xnor, sand against specific options
			for (var s = 0; s < obj.length; s++) {
				obj[s].type = "select-option"
				obj[s].group = obj
				obj[s].checkUsed = mtdCheckUsed
				obj[s].checkRequired = mtdCheckRequired
				obj[s].checkOr = mtdCheckOr
				obj[s].checkXor = mtdCheckXor
				obj[s].checkXnor = mtdCheckXnor
				obj[s].checkSand = mtdCheckSand
			}
			break
		case "select-multiple":
			obj.checkCount = mtdSelectMultipleCheckCount
			// set the type of each of the options to "select-option"
			// this is used when checking or, xor, xnor, sand against specific options
			for (var s = 0; s < obj.length; s++) {
				obj[s].type = "select-option"
				obj[s].group = obj
				obj[s].checkUsed = mtdCheckUsed
				obj[s].checkRequired = mtdCheckRequired
				obj[s].checkOr = mtdCheckOr
				obj[s].checkXor = mtdCheckXor
				obj[s].checkXnor = mtdCheckXnor
				obj[s].checkSand = mtdCheckSand
			}
			break
		case "checkbox":
			break
		case "radio":
			if (!obj.group) {	// if radio button has no group, create the group
				eval('var tempobj = document.' + gForm.name + '.' + obj.name)
				tempobj.name = obj.name
				tempobj.type = "radiogroup"
				tempobj.checkUsed = mtdCheckUsed
				tempobj.checkRequired = mtdCheckRequired
				tempobj.checkOr = mtdCheckOr
				tempobj.checkXor = mtdCheckXor
				tempobj.checkXnor = mtdCheckXnor
				tempobj.checkSand = mtdCheckSand
				for (var r = 0; r < tempobj.length; r++) {
					tempobj[r].ready = true
					tempobj[r].group = tempobj
				}				
			}
			break
		default:
			// special type-specific case for radio buttons.
			// comes in as an array (radio group), 
			// so access the first element to get the type.
			if (obj[0] && obj[0].type == "radio") {
				obj.type = "radiogroup"
				obj.name = obj[0].name
				for (var r = 0; r < obj.length; r++) {
					obj[r].ready = true
					obj[r].group = obj
					obj[r].checkUsed = mtdCheckUsed
					obj[r].checkRequired = mtdCheckRequired
					obj[r].checkOr = mtdCheckOr
					obj[r].checkXor = mtdCheckXor
					obj[r].checkXnor = mtdCheckXnor
					obj[r].checkSand = mtdCheckSand
				}
			}
			break
	}
}

// Validation controller function
function mtdFormValidate() {
	//alert('executing validate');
	this.high_valid = true
	this.mid_valid = true
	this.low_valid = true

	// Wipe all pre-existing errors before form validation
	this.clearErrors()

	//////////////////////////////////////////////// High-level validation
	// Check each of the text input fields
	for (var i = 0; i < this.length; i++) {
		switch(this[i].type) {
			case "text":
			case "password":
			case "textarea":
			case "checkbox":
			case "select-one":
			case "select-multiple":
				if (this[i].ready) {
					if (!this[i].checkRequired())
						this.high_valid = false
				}
				break
			case "radio":
				if (this[i].ready) {
					if (!this[i].group.checkRequired())
						this.high_valid = false
				}
				break
		}
	}

	//////////////////////////////////////////////// Mid-level validation
	// Check each of the text input fields
	for (var i = 0; i < this.length; i++) {
		switch(this[i].type) {
			case "text":
			case "password":
				if (this[i].ready) {
					if (!this[i].checkMatch())
						this.mid_valid = false
					if (!this[i].checkOr())
						this.mid_valid = false
					if (!this[i].checkXor())
						this.mid_valid = false
					if (!this[i].checkXnor())
						this.mid_valid = false
					if (!this[i].checkSand())
						this.mid_valid = false
				}
				break
			case "textarea":
			case "checkbox":
			case "radio":
			case "select-one":
			case "select-multiple":
				if (this[i].ready) {
					if (!this[i].checkOr())
						this.mid_valid = false
					if (!this[i].checkXor())
						this.mid_valid = false
					if (!this[i].checkXnor())
						this.mid_valid = false
					if (!this[i].checkSand())
						this.mid_valid = false
				}
				break
		}
	}	

	//////////////////////////////////////////////// Low-level validation
	// Check each of the text input fields
	for (var i = 0; i < this.length; i++) {
		switch(this[i].type) {
			case "text":
			case "password":
				if (this[i].ready) {
					if (!this[i].checkLength())
						this.low_valid = false
					if (!this[i].checkExcludedChars())
						this.low_valid = false
					if (!this[i].checkAlpha())
						this.low_valid = false
					if (!this[i].checkAlphaUpper())
						this.low_valid = false
					if (!this[i].checkAlphaLower())
						this.low_valid = false4
					if (!this[i].checkAlphaNumeric())
						this.low_valid = false
					if (!this[i].checkNonAlpha())
						this.low_valid = false
					if (!this[i].checkNonAlphaNumeric())
						this.low_valid = false
					if (!this[i].checkNumeric())
						this.low_valid = false
					if (!this[i].checkNonNumeric())
						this.low_valid = false
					if (!this[i].checkInteger())
						this.low_valid = false
					if (!this[i].checkFloat())
						this.low_valid = false
					if (!this[i].checkEmail())
						this.low_valid = false
					if (!this[i].checkZip())
						this.low_valid = false
					if (!this[i].checkPhone())
						this.low_valid = false
				}
				break
			case "textarea":
				if (this[i].ready) {
					if (!this[i].checkLength())
						this.low_valid = false
				}
				break
			case "checkbox":
			case "radio":
			case "select-one":
				break
			case "select-multiple":
				if (this[i].ready) {
					if (!this[i].checkCount())
						this.low_valid = false
				}
				break
		}
	}	
	// if low-level validation fails
	if (!this.high_valid || !this.mid_valid || !this.low_valid) {
		this.printErrors()
		return false
	}
	
	// if you get here, everything is good to go
	return true
}

// Validate required fields
function mtdCheckRequired() {
	if (this.required && !this.checkUsed())
		return (miss(this))
	return true
}

function mtdCheckUsed() {
	switch (this.type) {
		case "text":
		case "password":
		case "textarea":
			if (this.value.length > 0)
				return true
			break
		case "checkbox":
		case "radio":
			if (this.checked)
				return true
			break
		case "radiogroup":
			for (var t = 0; t < this.length; t++) {
				if (this[t].checked)
					return true
			}
			break
		case "select-one":
			if (this[this.selectedIndex].value != "0")
				return true
			break
		case "select-multiple":
			for (var t = 0; t < this.length; t++) {
				if (this[t].selected)
					return true
			}
			break
		case "select-option":
			if (this.selected)
				return true
			break
	}
	return false
}

// Mid-level validation methods
function mtdCheckOr() {
	if (this.or) {
		if (this.checkUsed())
			return true
		for (var i = 0; i < this.or.length; i++) {
			if (this.or[i].checkUsed())
				return true
		}
		for (var i = 0; i < this.or.length; i++)
			inval(this.or[i])
		return (inval(this))
	}
	return true
}

function mtdCheckXor() {
	var count = 0
	if (this.xor) {
		if (this.checkUsed())
			count++
		for (var i = 0; i < this.xor.length; i++) {
			if (this.xor[i].checkUsed())
				count++
		}
		if (count == 0 || count == this.xor.length + 1) {
			for (var i = 0; i < this.xor.length; i++)
				inval(this.xor[i])
			return (inval(this))
		}
	}
	return true
}

function mtdCheckXnor() {
	var count = 0
	if (this.xnor) {
		if (this.checkUsed())
			count++
		for (var i = 0; i < this.xnor.length; i++) {
			if (this.xnor[i].checkUsed())
				count++
		}
		if (count != 0 && count != this.xnor.length + 1) {
			for (var i = 0; i < this.xnor.length; i++)
				inval(this.xnor[i])
			return (inval(this))
		}
	}
	return true
}

// Checking Singular And (if x then y, not if y then x)
function mtdCheckSand() {
	var count = 0
	if (this.sand) {
		if (this.checkUsed()) {
			for (var i = 0; i < this.sand.length; i++) {
				if (this.sand[i].checkUsed())
					count++
			}
			if (count < this.sand.length) {
				for (var i = 0; i < this.sand.length; i++) {
					if (!this.sand[i].checkUsed())
						inval(this.sand[i])
				}
				return false
			}
		}
	}
	return true
}

function mtdTextCheckMatch() {
	if (this.match) {
		for (var i = 0; i < this.match.length; i++) {
			//alert("routine check ");
			if (this.match[i].value != this.value) {
				//alert("routine check " +this.value);
				for (var j = 0; j < this.match.length; j++)
					inval(this.match[j])
				// not invalidating the first element, since this will be
				// used mostly for confirmation matching fields
				// (passwords, email addresses, etc. and we want the error
				// to be on the second (confirmation) field
				// this can be developed later if there is a need for
				// more complicated matching checks
				//return (inval(this))
				return false
			}
		}
	}
	return true
}

//////////////// Text Input Methods
function mtdTextCheckLength() {
	// temp is a version that does not include any white spaces
	var temp = this.value.replace(/\s/g, "");
	
	// if does not meet min length
	if (this.minLen && temp.length < this.minLen) {		
		// non-required fields can be empty even if it has a minLen
		if (this.required || temp.length != 0)
			return (inval(this))
	}
	// if exceeds max length
	if (this.maxLen && temp.length > this.maxLen)
		return (inval(this))
	// otherwise the length is valid
	return true
}

function mtdTextCheckAlpha() {
	if (this.format == "alpha") {
		var temp = this.value.replace(/[a-zA-Z]/g, "")
		temp = includedFilter(this, temp)
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckAlphaUpper() {
	if (this.format == "alphaUpper") {
		var temp = this.value.replace(/[A-Z]/g, "")
		temp = includedFilter(this, temp)
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckAlphaLower() {
	if (this.format == "alphaLower") {
		var temp = this.value.replace(/[a-z]/g, "")
		temp = includedFilter(this, temp)
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckAlphaNumeric() {
	if (this.format == "alphaNumeric") {
		var temp = this.value.replace(/[a-zA-Z0-9]/g, "")
		temp = includedFilter(this, temp)
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckNonAlpha() {
	if (this.format == "nonAlpha") {
		var temp = this.value.replace(/[^a-zA-Z]/g, "")
		temp = includedFilter(this, temp)
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckNonAlphaNumeric() {
	if (this.format == "nonAlphaNumeric") {
		var temp = this.value.replace(/[^a-zA-Z0-9]/g, "")
		temp = includedFilter(this, temp)
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckNumeric() {
	if (this.format == "numeric") {
		var temp = this.value.replace(/[0-9]/g, "")
		temp = includedFilter(this, temp)
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckNonNumeric() {
	if (this.format == "nonNumeric") {
		var temp = this.value.replace(/[^0-9]/g, "")
		temp = includedFilter(this, temp)
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckInteger() {
//return true
	if (this.format == "integer") {
		if (Math.floor(this.value) != this.value)
			return (inval(this))
		// check upper and lower bounds
		if (this.minVal && this.value < this.minVal)
			return (inval(this))
		if (this.maxVal && this.value > this.maxVal)
			return (inval(this))
		if (this.xminVal && this.value <= this.xminVal)
			return (inval(this))
		if (this.xmaxVal && this.value >= this.xmaxVal)
			return (inval(this))
		// check to make sure the sign is correct
		switch(this.sign) {
			case "positive":
				if (this.value < 0)
					return (inval(this))
				break
			case "negative":
				if (this.value > 0)
					return (inval(this))
				break
			case "xpositive":
				if (this.value <= 0)
					return (inval(this))
				break
			case "xnegative":
				if (this.value >= 0)
					return (inval(this))
				break
			default:
				break
		}			
	}
	return true
}

function mtdTextCheckFloat() {
	if (this.format == "float") {
		if (!Math.floor(this.value))
			return (inval(this))
		// check upper and lower bounds
		if (this.minVal && this.value < this.minVal)
			return (inval(this))
		if (this.maxVal && this.value > this.maxVal)
			return (inval(this))
		if (this.xminVal && this.value <= this.xminVal)
			return (inval(this))
		if (this.xmaxVal && this.value >= this.xmaxVal)
			return (inval(this))
		// check to make sure the sign is correct
		switch(this.sign) {
			case "positive":
				if (this.value < 0)
					return (inval(this))
				break
			case "negative":
				if (this.value > 0)
					return (inval(this))
				break
			case "xpositive":
				if (this.value <= 0)
					return (inval(this))
				break
			case "xnegative":
				if (this.value >= 0)
					return (inval(this))
				break
			default:
				break
		}
		// check the number of digits after the decimal point
		if (this.decimalPlace && !this.value.indexOf('.')) {
			var decimal = this.value.slice(this.value.indexOf('.') + 1)
			decimal = decimal.replace(/ /g, '')		// strip out trailing spaces
			if (decimal.length > this.decimalPlace)
				return (inval(this))
		}
	}
	return true
}

function mtdTextCheckEmail() {
	if (this.format == "email") {
		// minimum acceptable string is "x@x.x"
		var temp = this.value.replace(/^[a-zA-Z0-9._-][a-zA-Z0-9._-]*@[a-zA-Z0-9_-][a-zA-Z0-9._-]*\.[a-zA-Z][a-zA-Z]*$/, "")
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckZip() {
	if (this.format == "zip") {
		var temp1 = this.value.replace(/^[0-9]{5}-[0-9]{4}$/, "")
		var temp2 = this.value.replace(/^[0-9]{5}$/, "")
		if (temp1.length > 0 && temp2.length > 0)
			return (inval(this))
	}
	if (this.format == "zip5") {
		var temp = this.value.replace(/^[0-9]{5}$/, "")
		if (temp.length > 0)
			return (inval(this))
	}
	if (this.format == "zip9") {
		var temp = this.value.replace(/^[0-9]{5}-[0-9]{4}$/, "")
		if (temp.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckPhone() {
	if (this.format == "phone") {
		var separator = ""
		if (this.separator)
			separator = this.separator
		var temp1string = '/^[0-9]' + separator + '[0-9]{3}' + separator + '[0-9]{3}' + separator + '[0-9]{4}$/'
		var temp2string = '/^[0-9]{3}' + separator + '[0-9]{3}' + separator + '[0-9]{4}$/'
		var temp3string = '/^[0-9]{3}' + separator + '[0-9]{4}$/'
		var temp1 = this.value.replace(eval(temp1string), "")		// X-XXX-XXX-XXXX
		var temp2 = this.value.replace(eval(temp2string), "")		// XXX-XXX-XXXX
		var temp3 = this.value.replace(eval(temp3string), "")		// XXX-XXXX
		if (temp1.length > 0 && temp2.length > 0 && temp3.length > 0)
			return (inval(this))
	}
	if (this.format == "phone11") {
		var separator = ""
		if (this.separator)
			separator = this.separator
		var temp1string = '/^[1]' + separator + '[0-9]{3}' + separator + '[0-9]{3}' + separator + '[0-9]{4}$/'
		var temp1 = this.value.replace(eval(temp1string), "")		// X-XXX-XXX-XXXX
		if (temp1.length > 0)
			return (inval(this))
	}
	if (this.format == "phone10") {
		var separator = ""
		if (this.separator)
			separator = this.separator
		var temp2string = '/^[0-9]{3}' + separator + '[0-9]{3}' + separator + '[0-9]{4}$/'
		var temp2 = this.value.replace(eval(temp2string), "")		// XXX-XXX-XXXX
		if (temp2.length > 0)
			return (inval(this))
	}
	if (this.format == "phone7") {
		var separator = ""
		if (this.separator)
			separator = this.separator
		var temp3string = '/^[0-9]{3}' + separator + '[0-9]{4}$/'
		var temp3 = this.value.replace(eval(temp3string), "")		// XXX-XXXX
		if (temp3.length > 0)
			return (inval(this))
	}
	return true
}

function mtdTextCheckExcludedChars() {
	if (this.excludedChars) {
		var temp = 'this.value.replace(/[' + this.excludedChars + ']/g, "")'
		if (eval(temp).length != this.value.length)
			return (inval(this))
	}
	return true
}

function mtdSelectMultipleCheckCount() {
	var count = 0
	for (var f = 0; f < this.length; f++) {
		if (this[f].selected)
			count++
	}
	
	if (this.minCount && count < this.minCount)
		return (inval(this))
	if (this.maxCount && count > this.maxCount)
		return (inval(this))
	
	return true
}

//////////////////////////////////////////////////////// Error reporting
function mtdFormPrintErrors() {
	// play the error sound
	if (document.all.errorSoundPlayer && document.errorSound)
		document.all.errorSoundPlayer.src = document.errorSound.src
	
	// display the main error phrase
	displayErrorMessage(cDefaultErrorMsg)

	var firstErr = -1
	for (var e = 0; e < this.length; e++) {
		if (this[e].ready) {
			// just radio elements
			if (this[e].type == "radio") {
				if (this[e].group.error != null) {
					setError(this[e].group)
					// if it's the first error found then try to send it focus and select the contents
					if (firstErr < 0) {
						setFocus(this[e])
						firstErr = e
					}
				}
			} else {
				// all non-radio elements
				if (this[e].error != null) {		// if the object has an error
					setError(this[e])
					// if it's the first error found then try to send it focus and select the contents
					if (firstErr < 0) {
						setFocus(this[e])
						firstErr = e
					}
				}
				if (this[e].type == "select-one" || this[e].type == "select-multiple") {
					for (var f = 0; f < this[e].length; f++) {
						if (this[e][f].error != null) {
							setError(this[e])
							// if it's the first error found then try to send it focus and select the contents
							if (firstErr < 0) {
								setFocus(this[e])
								firstErr = e
							}	
							break
						}
					}
				}
			}
		}
	}
}

function setError(obj) {
	if (obj.alternateError != null) {	// if the object has alternate error image
		if (eval('document.images.' + obj.alternateError))
			eval('document.images.' + obj.alternateError + '.src = "' + cErrImage + '"')
	} else {		// otherwise just use the object name for the error image
		if (eval('document.images.img' + obj.name + 'Err'))
			eval('document.images.img' + obj.name + 'Err.src = "' + cErrImage + '"')
	}
	
	if (obj.alternateErrorHighlight != null) {
		if (eval('document.all.' + obj.alternateErrorHighlight))
			eval('document.all.' + obj.alternateErrorHighlight + '.style.color = "' + cTextColorError + '"')
	} else {				
		if (eval('document.all.spn' + obj.name))
			eval('document.all.spn' + obj.name + '.style.color = "' + cTextColorError + '"')
	}
}
					
function setFocus(obj) {
	if (obj.focus) {
		obj.focus()
		if (obj.select)
			obj.select()
	}
}

function mtdFormClearErrors() {
	if (document.all.mainErrDiv)
		document.all.mainErrDiv.style.visibility = "hidden"
	
	for (var e = 0; e < this.length; e++) {
		// erase the error property of the object
		this[e].error = null
		// and any groups
		if (this[e].group)
			this[e].group.error = null
		// then hide the error image
		if (this[e].alternateError != null) {
			if (eval('document.images.' + this[e].alternateError))
				eval('document.images.' + this[e].alternateError + '.src = "' + cNoErrImage + '"')
		} else {
			if (eval('document.images.img' + this[e].name + 'Err'))
				eval('document.images.img' + this[e].name + 'Err.src = "' + cNoErrImage + '"')
		}
		
		if (this[e].alternateErrorHighlight != null) {
			if (eval('document.all.' + this[e].alternateErrorHighlight))
				eval('document.all.' + this[e].alternateErrorHighlight + '.style.color = "' + cTextColorNormal + '"')
		} else {				
			if (eval('document.all.spn' + this[e].name))
				eval('document.all.spn' + this[e].name + '.style.color = "' + cTextColorNormal + '"')
		}
	}
}

function debug(frmArray) {
	var buffer = ""
	for (var d = 0; d < frmArray.length; d++) {
		buffer = buffer + frmArray[d].name
		buffer = buffer + "  --  [" + frmArray[d].type + "]"
		buffer = buffer + "  --  " + (frmArray[d].ready?"ready":"NOT READY")
		buffer = buffer + "  --  " + (frmArray[d].required?"required":"not required")
		buffer = buffer + "\n"
	}
	alert(buffer)
}

function inval(obj) {
	obj.error = cErrInvalid
	return false
}

function miss(obj) {
	obj.error = cErrMissing
	return false
}

function includedFilter(obj, temp) {
	if (obj.includedChars) {
		var included = obj.includedChars.replace(/\\/g, "\\\\")
		temp = eval('temp.replace(/[' + included + ']/g, "")')
	}
	return temp
}

function error(msg, obj) {
	// first display eror message
	displayErrorMessage(msg)
	// then set focus
	if (obj) {
		setError(obj)
		setFocus(obj)
	}
}

function displayErrorMessage(msg) {
	playErrorSound()
	
	// display the main error phrase
	if (document.all.mainErrDiv) {
		document.all.mainErrDiv.style.visibility = "visible"
		document.all.mainErrDiv.innerHTML = msg
	}
}

function playErrorSound() {
	// play the error sound
	if (document.all.errorSoundPlayer && document.errorSound)
		document.all.errorSoundPlayer.src = document.errorSound.src
}
