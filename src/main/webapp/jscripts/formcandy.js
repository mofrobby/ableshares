function isFocus(obj) {
	if (obj)
		obj.style.backgroundColor = "#ffffcc";
}

function isBlur(obj) {
	if (obj)
		obj.style.backgroundColor = "#ffffff";
}

function keySubmit(type, obj) {
	switch (type) {
		case "button":
			if ((event.keyCode==13) && obj)
				obj.click()
			break
		case "form":
			if ((event.keyCode==13) && obj)
				obj.submit()
			break
	}
}
