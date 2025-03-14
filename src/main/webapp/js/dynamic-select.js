// Dynamic Select Library
// (c) 2009-2011 Xul.fr
// GNU GPL 3 License


// Ajax funtion to load a file.
// dynamic-select.js

function dataRead(url, fun)
{ 
	var xhr = createXHR();
	xhr.onreadystatechange=function()
	{ 
		if(xhr.readyState == 4)
		{
			if(xhr.status == 200)
			{
				fun(xhr.responseText);
			}
		} 
	}; 

	url = url + "?nocache=" + Math.random();
	xhr.open("GET", url , true);
	xhr.send(null); 
} 

// Event activated when an option is selected. Not used here.

function selectoption()
{
	var selected = document.getElementById("select1").selectedIndex;
	// var title = document.select1[selected].text;
	// not used for now
}

function activateCheck(id, target)
{
	var selected = document.getElementById(id).selectedIndex;
	//alert('selected '+selected);
	if(selected == 0 || selected == 1 || selected == 5){
		//$('#modalOpen0').prop('disabled', function(i, v) { 
		//	alert(v);
		//	return true; 
			
		//});
		//$('#modalOpen0').attr('disabled','disabled');
		$('#modalOpen0').addClass('disabled');
		$('#modalOpen1').addClass('disabled');
		
	}
	else{
		//$('#modalOpen0').prop('disabled', function(i, v) { 
		//	alert(v);
			//return false; 
		//});
		$('#modalOpen0').removeClass('disabled');
		$('#modalOpen1').removeClass('disabled');
		
		
	}
}

function openModal(id)
{
	if(id == 0){
		$('#myModal').modal('show');
		var str = $("#tabpermitted0").val();
		//alert(str);
		if(str){
			//clear modal select
			clearSelect();
			var array = str.split('|')
			for(i = 0; i < array.length; i++)  // this is required for IE
			{
				//alert('values '+array[i]);
				adddynamicoption(array[i]);
			}
		}
	}
	if(id == 1){
		$('#lookup').modal('show');
		var str = $("#tabpermitted1").val();
		//alert(str);
		if(str){
			//clear modal select
			clearSelect();
			var array = str.split('|')
			
			$("#selOptionTypeId").val(array[0]);
			$("#tarsqlcodetag").val(array[1]);
			$("#tarsqlparamtag").val(array[2]);
			$("#tarjscodetag").val(array[3]);
			$("#tarclasscodetag").val(array[4]);
			$("#tardatacodetag").val(array[5]);
			$("#tardisplayformattag").val(array[6]);
		}
	}
	$("#lineid").val(id);
	

}

function clearSelect(){
	var select = document.getElementById("select1");
	var length = select.options.length;
	for (i = 0; i < length; i++) {
	  select.options[i] = null;
	}
}

function postModalValues(){
	//getvalue from hidden field created in open modal routine
	//var lineid = $("#lineid").val();
	//alert('lineid ' +lineid)
	var targetLine = document.getElementById("tabpermitted0");
	var modalused = document.getElementById("whichmodal");
	modalused.value = modalused.value+'mymodal';
	var optlist = document.getElementById("select1");	
	var size = optlist.options.length;
	var delimited = '';
	for(i = 0; i < size; i++)  // this is required for IE
	{
		if(delimited.length > 1){
			delimited = delimited+'|'+optlist.options[i].text;
		}
		else{
			delimited = optlist.options[i].text;
		}
		//alert('delimted '+delimited);
	}
	targetLine.value = delimited;
	 $('#myModal').modal('hide');
}
//Second Modal for existing lookups
function postLookupValues(){
	//getvalue from hidden field created in open modal routine
	//var lineid = $("#lineid").val();
	//alert('lineid ' +lineid)
	var targetLine = document.getElementById("tabpermitted1");
	var optlist = document.getElementById("selOptionTypeId");	
	var tarText = document.getElementById("tarsqlcodetag");
	var tarParam = document.getElementById("tarsqlparamtag");
	var jstar = document.getElementById("tarjscodetag");
	var classtar = document.getElementById("tarclasscodetag");
	var datatar = document.getElementById("tardatacodetag");
	var formattar = document.getElementById("tardisplayformattag");
	var modalused = document.getElementById("whichmodal");
	modalused.value = modalused.value+'lookup';
	var strOption = optlist.options[optlist.selectedIndex].value;
	var delimited = '';
	delimited = strOption;
	delimited = delimited+'|'+tarText.value+'|'+tarParam.value+'|'+jstar.value+'|'+classtar.value+'|'+datatar.value+'|'+formattar.value;
		//alert('delimted '+delimited);
	targetLine.value = delimited;
	 $('#lookup').modal('hide');
}

// Add a new option to the list

function addoption()
{
	var optlist = document.getElementById("select1");
	var title = document.getElementById('title').value;
	//alert(title);
	var size = optlist.options.length;
	//alert(size);
	
	for(i = 0; i < size; i++)  // this is required for IE
	{
		if(optlist.options[i] == null || optlist.options[i].text == "")
		{
			optlist.options[i] = new Option(title);
			return;
		}
	}
	optlist.options[size] = new Option(title);

}

function adddynamicoption(opt)
{
	var optlist = document.getElementById("select1");
	var size = optlist.options.length;
	if(opt){
		for(i = 0; i < size; i++)  // this is required for IE
		{
			if(optlist.options[i] == null || optlist.options[i].text == "")
			{
				optlist.options[i] = new Option(opt);
				return;
			}
		}
		optlist.options[size] = new Option(opt);
	}

}

// Creating the options in select from loaded file

function populate(content)
{
	content = content.replace(" ", "");
	var lst = content.split("<br>");
	var optlist = document.getElementById("select1");
	for(i = 0; i < lst.length; i++)
	{
		if(lst[i] == "") continue;
		optlist.options[i] = new Option(lst[i]);
	}
}

// Load the data and populate the select

function initialize()
{
	//dataRead("dynamic-select.txt", populate);
}


// Delete an entry

function deloption()
{
	var optlist = document.getElementById("select1");
	var selected = optlist.selectedIndex;
	var last = optlist.options.length - 1;

	for(i = selected; i < last; i++)
	{
		optlist.options[i] = new Option(optlist.options[i + 1].text);
	}

	optlist.options[last] = null;

}

// Moving up an option
// The text is just exchanged with the previous one in the list

function moveup()
{
	var optlist = document.getElementById("select1");
	var i = optlist.selectedIndex;

	if(i == 0) return; // can't move

	var title = optlist.options[i-1].text;
	optlist.options[i-1].text = optlist.options[i].text;
	optlist.options[i].text = title;
	optlist.selectedIndex = i - 1;

}


function loadapage(element, res)
{
	// action is unchanged, but if you choose dynamically the page to load, assign it here
	//element.form.action = "";
	element.form.submit()
}

// Write to the server

function dataWrite(url, data, fun, element)
{ 
	var xhr = createXHR();

	xhr.onreadystatechange=function()
	{ 
		if(xhr.readyState == 4)
		{
			if(fun != null) fun(element, xhr.responseText);
		}
	}; 
	xhr.open("POST",url, true);		
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(data); 
} 


// Saving the list of options

function savelist(element)
{
	var title = "";
	var url = "";
	var data = "";

	var optlist = document.getElementById("select1");
	var size = optlist.options.length;

	for(i = 0; i < size; i++)
	{
		title = optlist.options[i].text;
		if(title == "") continue;

			
		if(data != "") data +="&";
		data += "tab" + String(i) + "=" + title;
	}    	 
	
	dataWrite("dynamic-save.php", data, loadapage, element);
 		
}
	
// Starts the job by populating the SELECT with a list of options	

window.onload=initialize;
