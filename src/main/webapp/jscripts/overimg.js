function OverImg(){
	this.imgOff = new Array();
	this.imgOver = new Array();
	this.add = mtdOverImgAdd;
	this.off = mtdOverImgOff;
	this.over = mtdOverImgOver;
}
function mtdOverImgAdd(i, strOff, strOver){
	this.imgOff[i] = new Image;
	this.imgOff[i].src = strOff;
	this.imgOver[i] = new Image;
	this.imgOver[i].src = strOver;
}
function mtdOverImgOver(i, obj){obj.src = this.imgOver[i].src;}
function mtdOverImgOff(i, obj){obj.src = this.imgOff[i].src;}