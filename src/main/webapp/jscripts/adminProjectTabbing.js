/* adminProjectTabbing.js */
function showElements(arg){	
	var id = document.frmAdmin.prj_data_id.value;	
	parent.fraBot.location.href = "ShowProjectItems.do?projectDataID="+id+"&projectItemType="+arg;	
};

$(document).ready(function () {
	$('#Project_Tabs').find('a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	showElements(2);
});