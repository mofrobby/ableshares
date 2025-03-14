function WM_toggle() {

  this.wm_toggle = mtdToggle;
  this.OutRow = mtdOutRow;
  this.OverRow = mtdOverRow;
  this.Over = mtdOver;
  this.Out = mtdOut;	
  this.toggle = mtdExpToggle;
  
}

function mtdOutRow(objRow, i){
	objRow.style.backgroundColor = '#FFFFCC';
	objRow.style.color = '#000000';
	
}

function mtdOverRow(objRow, i){
	objRow.style.backgroundColor = '#FF9900';
	//objRow.style.color = '#FFFFCC';
	
}



function mtdToggle(id){
	alert('toggle '+id);
if (document.getElementById)
{
    if(document.getElementById(id).style.display == 'none')
    {
      document.getElementById(id).style.display = 'block';
    } 
    else 
    {
      document.getElementById(id).style.display = 'none';
    }
} 

}

function mtdExpToggle(bln){
	alert(bln);
	if(bln){
	fraBot.divCollapse.style.display = 'none';
	fraBot.divExpand.style.display = 'block';
	fraTop.divFilter.style.display = 'none';
	frsOuter.rows = "45,*";	
	}
	else
	{
	fraBot.divCollapse.style.display = 'block';
	fraBot.divExpand.style.display = 'none';
	fraTop.divFilter.style.display = 'block';
	frsOuter.rows = "390,*";	
	}
}





function mtdOver(bln, id){

    if(!bln)    
      id.src = "img/butExpand.gif";
     else
       id.src = "img/butCollapse.gif";	
    
} 

function mtdOut(bln, id){

    
      id.src = "img/butExpandSm.gif";
    
} 


