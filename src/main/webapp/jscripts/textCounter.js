/* Text Counter */
//Constructor
function textCounter() {
	//methods
	this.textCounter = mtdTextCounter;
	this.setcolor = mtdSetcolor;
	

//textcounter function
function mtdTextCounter(field,counter,maxlimit,linecounter) {
	// text width//
	var fieldWidth =  parseInt(field.offsetWidth);
	var charcnt = field.value.length;        

	// trim the extra text
	if (charcnt > maxlimit) { 
		field.value = field.value.substring(0, maxlimit);
	}

	else { 
	// progress bar percentage
	var percentage = parseInt(100 - (( maxlimit - charcnt) * 100)/maxlimit) ;
	document.getElementById(counter).style.width =  parseInt((fieldWidth*percentage)/100)+"px";
	document.getElementById(counter).innerHTML="Limit: "+percentage+"%"	
	// color correction on style from CCFFF -> CC0000	
	this.setcolor(document.getElementById(counter),percentage,"background-color");
	}
}

function mtdSetcolor(obj,percentage,prop){
	
	obj.style[prop] = "rgb(80%,"+(100-percentage)+"%,"+(100-percentage)+"%)";
}

}

function KeyCount(txt, z) {
    var newS = new String(txt.value);
    var i;
    var sp = document.getElementById("spCount" + z);

    if (newS.length > 256) {
        alert("You have reached the maxium length for this field.");
        sp.innerHTML = newS.length;
        return 0;
    }
    sp.innerHTML = "<strong>" + newS.length + "</strong>";
}
