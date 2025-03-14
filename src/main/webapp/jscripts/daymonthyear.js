//Constructor Class
function DateBox(objMonth, objDay, objYear, intMonthStart, intDayStart, intYearStart, intYearFrom, intYearTo) {
	objMonth.DateBox = this;
	objDay.DateBox = this;
	objYear.DateBox = this;
	// Add properties to reference the selectboxes
	this.objMonth = objMonth;
	this.objDay = objDay;
	this.objYear = objYear;
	this.monthStart = intMonthStart;
	this.dayStart = intDayStart;
	this.yearStart = intYearStart;
	this.yearFrom = intYearFrom;
	this.yearTo = intYearTo;
	this.daysInMonth = new Array();
	this.daysInMonth[1] = 31;this.daysInMonth[2] = 29;this.daysInMonth[3] = 31;this.daysInMonth[4] = 30;
	this.daysInMonth[5] = 31;this.daysInMonth[6] = 30;this.daysInMonth[7] = 31;this.daysInMonth[8] = 31;
	this.daysInMonth[9] = 30;this.daysInMonth[10] = 31;this.daysInMonth[11] = 30;this.daysInMonth[12] = 31;
	this.DBOther = null;
	this.compare = null;
	this.filler = new Array();
	// methods
	this.getMonth = mtdGetMonth;
	this.getDay = mtdGetDay;
	this.getYear = mtdGetYear;
	this.setMonth = mtdSetMonth;
	this.setDay = mtdSetDay;
	this.setYear = mtdSetYear;
	this.addMonth = mtdAddMonth;
	this.addDay = mtdAddDay;
	this.addYear = mtdAddYear;
	this.fill = mtdDBFill;
	this.check = mtdDBCheck;
	this.lessEq = mtdLessEq;
	this.greaterEq = mtdGreaterEq;
	this.autoFill = mtdAutoFill;
}

function mtdGetMonth() {return eval(this.objMonth.options[zeroOrBigger(this.objMonth.selectedIndex)].value);}
function mtdGetDay() {return eval(this.objDay.options[zeroOrBigger(this.objDay.selectedIndex)].value);}
function mtdGetYear() {return eval(this.objYear.options[zeroOrBigger(this.objYear.selectedIndex)].value);}
function mtdSetMonth(i) {this.objMonth.selectedIndex = i;}
function mtdSetDay(i) {
	i = Math.min(i, this.objDay.options.length-1);
	this.objDay.selectedIndex = i;
}
function mtdSetYear(i) {this.objYear.selectedIndex = i;}
function mtdAddMonth(intValue, varText, intOption) {addOption(this.objMonth, intValue, varText, intOption);}
function mtdAddDay(intValue, varText, intOption) {addOption(this.objDay, intValue, varText, intOption);}
function mtdAddYear(intValue, varText, intOption) {addOption(this.objYear, intValue, varText, intOption);}

function mtdLessEq(objDB) {
	this.DBOther = objDB;
	this.compare = false;
}
function mtdGreaterEq(objDB) {
	this.DBOther = objDB;
	this.compare = true;
}

//fills up the lists
function mtdDBFill() {
	//wipe
	this.objDay.length = 0;
	this.objMonth.length = 0;
	this.objYear.length = 0;
	//month
	var monthNames = new Array();
	monthNames[1]='Jan';monthNames[2]='Feb';monthNames[3]='Mar';monthNames[4]='Apr';
	monthNames[5]='May';monthNames[6]='Jun';monthNames[7]='Jul';monthNames[8]='Aug';
	monthNames[9]='Sep';monthNames[10]='Oct';monthNames[11]='Nov';monthNames[12]='Dec';
	for (var i=1; i<=12; i++)
		this.addMonth(i, monthNames[i], i-1);
	this.setMonth(this.monthStart-1);
	//year
	for (var i=this.yearFrom; i<=this.yearTo; i++)
		this.addYear(i, i, i-this.yearFrom);
	this.setYear(this.yearStart-this.yearFrom);
	//days
	this.daysInMonth[2] = isLeapYear(this.getYear()) ? 29 : 28;
	for (var i=1; i<=this.daysInMonth[this.monthStart]; i++)
		this.addDay(i, i, i-1);
	this.setDay(this.dayStart-1);
}

// Call from onChange event
function mtdDBCheck(blnDontCheck) {
	//propogate correct days
	this.daysInMonth[2] = isLeapYear(this.getYear()) ? 29 : 28;
	var intMonth = this.daysInMonth[this.getMonth()];
	//move selected day if it's getting wiped.
	if (this.objDay.options[zeroOrBigger(this.objDay.selectedIndex)].value > intMonth-1)
		this.objDay.selectedIndex = intMonth-1;
	var intCurrentDayLength = this.objDay.length;
	this.objDay.length = intMonth;	// wipe old values
	// write new days if needed
	for (i=intCurrentDayLength; i < intMonth; i++)
		addOption(this.objDay, i+1, i+1, i);
	//Check > or <
	if (this.DBOther!=null && !blnDontCheck) {
		var blnChange = false;
		if (this.compare) {
			obj1 = this.DBOther;
			obj2 = this;
		} else {
			obj1 = this;
			obj2 = this.DBOther;
		}
		if (obj1.getYear()>obj2.getYear())
			blnChange = true;
		else {
			if (obj1.getYear()==obj2.getYear()) {
				if (obj1.getMonth()>obj2.getMonth())
					blnChange = true;
				else {
					if (obj1.getMonth()==obj2.getMonth()) {
						if (obj1.getDay()>obj2.getDay())
						blnChange = true;
					}
				}
			}
		}
		if (blnChange) {
			this.DBOther.setYear(this.getYear()-this.yearFrom);
			this.DBOther.setMonth(this.getMonth()-1);
			this.DBOther.setDay(this.getDay()-1);
			this.DBOther.check(true);
			this.DBOther.setYear(this.getYear()-this.yearFrom);
			this.DBOther.setMonth(this.getMonth()-1)
			this.DBOther.setDay(this.getDay()-1);
		}
	}
	// auto fill
	for (var i=0; i<this.filler.length; i++) {
		if (!blnDontCheck) {
			if ((this.getMonth()-1+this.filler[i][1])>=0) {
				this.filler[i][0].setYear(this.getYear()-this.yearFrom+this.filler[i][3]);
				this.filler[i][0].setMonth(this.getMonth()-1+this.filler[i][1]);
				this.filler[i][0].check(true);	//check now to fill in the day list with the corrcet number of days
				this.filler[i][0].setDay(this.getDay()-1+this.filler[i][2]);
			} else {
				this.filler[i][0].setYear(this.getYear()-this.yearFrom+this.filler[i][3]-1);
				this.filler[i][0].setMonth(this.getMonth()-1+this.filler[i][1]+12);
				this.filler[i][0].check(true);	//check now to fill in the day list with the corrcet number of days
				this.filler[i][0].setDay(this.getDay()-1+this.filler[i][2]);
			}
		}
	}
}

function isLeapYear(i) { if (i == Math.round(i/4)*4) return true; else return false;}
function zeroOrBigger(i) {return (Math.abs(i) + i)/2;}
// Adds an option to a list
function addOption(objList, intValue, varText, intOption) {
	var o = new Option;
	o.value = intValue;
	o.text = varText;
	objList.options[intOption] = o;
}

// to auto fill other dateboxes with a relative value
function mtdAutoFill(id, objDB, intMonth, intDay, intYear) {
	this.filler[id] = new Array();
	this.filler[id][0] = objDB;
	this.filler[id][1] = intMonth;
	this.filler[id][2] = intDay;
	this.filler[id][3] = intYear;
}