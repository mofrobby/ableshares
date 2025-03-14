// constructor for messages
function WFMessage(id, name, description, initiator) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.initiator = initiator;
	// build the selected array - keeping it open-ended for dynamic content
	// methods
	this.actions = new Array();
	this.IsValidName = mtdIsNameValid;
	this.AddMemberRow=mtdAddMemberRow;
	this.print = mtdPrint;
	this.printActions = mtdPrintActions;
	this.clearActions = mtdClearActions;
	this.addAction = mtdAddAction;
	this.hasActions = mtdHasActions;
	this.getHTML = mtdGetHTML;
	// link the object to the table
	

	
}

// method to select/deselect rows. 

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

function mtdPrint(){
	
	//alert('id: '+this.id+', name: '+this.name+', desc: '+ this.description+', init: '+ this.initiator);
	
}

function mtdPrintActions(){
	var actionsstr;
	for(var j=0;j<this.actions.length;j++){
		actionsstr = actionsstr+this.actions[j].toString();
	}
	//alert('actions '+actionsstr);
	
}

function mtdClearActions(){
	//alert('Clearing Actions');
	this.actions = [];
}

function mtdAddAction(action)
{
	
	this.actions[this.actions.length]=new Array(action);
	
}

function mtdHasActions()
{
	
	if(this.actions.length > 0){
		return true;
	}
	else{
		return false;
	}
	
}


function getRoleNames(roles){
	var str = '';
	//alert('roles ' +roles);
	if(roles){
		var strrep = String(roles);
		var personRegExp = new RegExp(",");
		if(personRegExp.test(strrep)){ //this has multiple roles
			$.each(strrep.split(","), function(t,e){
				var rolestr = userRoles.get(e);
				//alert('rolestr multiple ='+rolestr);
				str += rolestr+', ';
			});
			str = str.replace(/,\s*$/, "");
		}
		else{
			var strrep = String(roles);
			var rolestr = userRoles.get(strrep);
			str += rolestr;
			//alert('rolestr single ='+rolestr);
		}
	}
	
	
	
	return str;
	
}


function mtdGetHTML() {
	
	var strHTML = '<tr> ';
	if(this.hasActions()){
		var rownum = this.actions.length;
		//strHTML += 'rowspan="'+rownum+'">';
		strHTML += '<td rowspan="'+rownum+'">'+this.name+'</td>';
		for (var i = 0; i < this.actions.length; i++) {
			var actobj = this.actions[i];
			//alert('size of action ='+actobj.length);
			var wrapped = actobj[0];
			var rolenames = getRoleNames(wrapped.permroles);
			strHTML += '<td class="text-center">'+wrapped.name+'</td><td class="text-center">'+wrapped.rqdstate+'</td><td class="text-center">'+rolenames+'</td><td class="text-center">'+wrapped.resultmess+'</td><td class="text-center">'+wrapped.resultstate+'</td>';
			strHTML += '</tr>';
			if(i+1 == this.actions.length){
				//alert('No more actions')
			}
			else{
				strHTML += '<tr>';
			}
		}
	}
	else{
		strHTML += '<td>'+this.name+'</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
	}
	//first find initiator as root
	//alert('strHTML2 = '+strHTML);
	return strHTML;
	
}




