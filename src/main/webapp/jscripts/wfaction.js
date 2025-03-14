// constructor for actions
function WFAction(name, rqdstate, permroles, resultmess, resultstate) {
	
	this.name = name;
	this.rqdstate = rqdstate;
	this.permroles = permroles;
	this.resultmess = resultmess;
	this.resultstate = resultstate;
	
	
	this.IsValidName = mtdIsNameValid;
	this.printAction = mtdPrintAction;
	
	
}



function mtdIsNameValid(messName)
{
	var count=0;
	for(count=0;count<this.validRoles.length;count++)
	{
		if(this.validRoles[count]==roleid || this.validRoles[count]==0)
			return true;
	}
	return false;
}

function mtdPrintAction(){
	//alert('name: '+this.name+', rqdstate: '+ this.rqdstate+', permroles: '+ this.permroles+', resultmess: '+this.resultmess+', resultstate: '+ this.resultstate);
}


