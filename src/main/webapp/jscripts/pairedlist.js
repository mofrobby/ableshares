
function pairedList(objOne,objTwo)
{
	this.objOne=objOne;
	this.objTwo=objTwo;
	this.obj1values=new Array();
	this.Add=pListAdd;
	this.AddOption=pListAddOption;
	this.Refresh=pListRefresh;
	this.Clear=pListClear;
}

function pListAdd(val,str)
{
	var temp=new pListItem(val,str);
	this.obj1values[this.obj1values.length]=temp;
	this.AddOption(temp,this.objOne);
	return temp;
}

function pListRefresh()
{
	var counter;
	var selItem=this.obj1values[this.objOne.selectedIndex];
	if(!selItem.isSelected)
	{
		selItem.isSelected=true;
		this.Clear(this.objTwo);
		for(counter=0;counter<selItem.ItemList.length;counter++)
		{
			this.AddOption(selItem.ItemList[counter],this.objTwo);
		}
	}
	for(counter=0;counter<this.obj1values.length;counter++)
	{
		if(this.obj1values[counter]!=selItem)
			selItem.isSelected=false;
	}
}

function pListClear(obj)
{
	while(obj.options.length>0)
		obj.options.remove(0);
}



function pListAddOption(listItem,obj)
{
	var tempOption=new Option;
	tempOption.text=listItem.str;
	tempOption.value=listItem.val;
	obj.options.add(tempOption);
}

function pListItem(val,str)
{
	this.val=val;
	this.str=str;
	this.ItemList=new Array();
	this.isSelected=false;
	this.Add=pLItemAdd;
}

function pLItemAdd(val,str)
{
	this.ItemList[this.ItemList.length]=new pListEntry(val,str);
}

function pListEntry(val,str)
{
	this.val=val;
	this.str=str;
}

