try{
$(document).ready(function(){

	$("#myDesktop li:empty").hide();

	var thirdItem = $("#selectedLevel4").parent(".submenu:eq(0)").parent("li:eq(0)");
	$(thirdItem).attr("id","selectedLevel3").children(".submenu").slideDown();

	var secondItem = $("#selectedLevel3").parent(".submenu:eq(0)").parent("li:eq(0)");
	$(secondItem).attr("id","selectedLevel2").children(".submenu").slideDown();

	var firstItem = $("#selectedLevel2").parent(".submenu").parent("li:eq(0)");
	$(firstItem).attr("id","selectedLevel1").children(".submenu").slideDown();


	$("#selectedLevel1").children(".submenu:eq(0)").slideDown();
	$("#selectedLevel2").children(".submenu:eq(0)").slideDown();
	$("#selectedLevel3").children(".submenu:eq(0)").slideDown();

	$(".pickState").click(function(){
			$("#modal").show();
	});
	$(".closePickState").click(function(){
		$("#modal").hide();
	});

	// redraw the external link icon in IE7 to be at the end of the line due to box model bug
	var IE7 = (navigator.appVersion.indexOf("MSIE 7.")==-1) ? false : true;
	if (IE7 == true)
	{
	$('a.externalLink').append("<span style='margin-left:4px;position:relative;top:3px;'><img src='/common/images/ico_external_link_green.gif' alt ='External Link Icon' /></span>");
	$('a.externalLink').removeClass('externalLink');
	}
	//check to see if the date container has text within a li tag
	//this checks if the ul has any items
	$(".searchFilters").each(function(){
		var thisItem = $(this).children(".list").children("ul").children("li").text();
		if(thisItem == ''){
			$(this).hide();
		}
	});
	$(".searchFilters.dateSelect").show();
	//this takes care of clicking on buttons in the refine menu
	$(".searchFiltersHead").toggle(function(){
		$(this).next(".list, .dateList").hide();
		$(this).addClass("closed");
	},function(){
		$(this).next(".list, .dateList").show();
		$(this).removeClass("closed");
	});
});

//following function changes background image for Labs pages.
function changeDivImage(pageLabel)
{
	if(pageLabel == 'compliance_checker' || pageLabel == 'research_labsHome' ){
		document.getElementById("masthead").style.backgroundImage = "url(/research-portal/portalresources/images/TopBannerLabs.jpg)";
	}

	//generic logic for all research Labs pages
	if ( pageLabel.indexOf('researchLabs') == 0 ){
		document.getElementById("masthead").style.backgroundImage = "url(/research-portal/portalresources/images/TopBannerLabs.jpg)";
	}
}
//SEEI Navigation function.
function seeiNavigation(itemSelected, hideStateMenu, stateId, stateLabel, stateSubMenu){
	if(itemSelected != 'null'){
		var itemsArray = itemSelected.split(",");
		for(i = 0; i < itemsArray.length; i++){
			$('#sAndILeftNavContainer li[id*="'+itemsArray[i]+'"]').attr('id', 'selectedLevel'+(i+1));
		}

		$("#selectedLevel1").children(".submenu:eq(0)").slideDown();
		$("#selectedLevel2").children(".submenu:eq(0)").slideDown();
		$("#selectedLevel3").children(".submenu:eq(0)").slideDown();

		if(hideStateMenu == 'true'){
			$("#STATE").hide();
		}

		if(stateId != 'null' && stateLabel != 'null'){
			var s = $("#selectedLevel3 a").attr('href');
			$("#selectedLevel3 a:eq(0)").attr('href', s+stateId);
			$("#selectedLevel3 a:eq(0)").html(stateLabel);

			var liObj = $("#selectedLevel3").children(".submenu").children();
			liObj.each(function(index){
				var liId = $(this).attr('id');
				var hrefValue = $("#"+liId+" a").attr('href');
				$("#"+liId+" a").attr('href', hrefValue+stateId);
			});
		}

		if(stateSubMenu != 'null'){
			var stateSubMenuArray = stateSubMenu.split(",");
			if(stateSubMenuArray != '' && stateSubMenuArray != 'null'){
				for(i=0; i<stateSubMenuArray.length; i++){
					$('#selectedLevel3 li[id*="'+stateSubMenuArray[i]+'"]').hide();
				}
			}
		}
	}
}
function initSkin(){ initPortletDeleteButtons();}
}catch(err){}


function setFontSizeRegular (id) {
    var mySplitResult = id.split(",");
    var i = 0;
    for(i = 0; i < mySplitResult.length; i++){
    var contentDiv = getContentDiv(mySplitResult[i]);
    contentDiv.style.fontSize = "100%";
    getRegularFontSizeAnchor (contentDiv).className = "fontSizeSelected";
    getMediumFontSizeAnchor (contentDiv).className = "fontSizeUnselected";
    getLargeFontSizeAnchor (contentDiv).className = "fontSizeUnselected";
    $('#researchAreaList li').css('height','auto');
    }
}
function setFontSizeMedium (id) {
    var mySplitResult = id.split(",");
    var i = 0;
    for(i = 0; i < mySplitResult.length; i++){
    var contentDiv = getContentDiv(mySplitResult[i]);
    contentDiv.style.fontSize = "120%";
    getRegularFontSizeAnchor (contentDiv).className = "fontSizeUnselected";
    getMediumFontSizeAnchor (contentDiv).className = "fontSizeSelected";
    getLargeFontSizeAnchor (contentDiv).className = "fontSizeUnselected";
    $('#researchAreaList li').css('height','auto');
    }
}
function setFontSizeLarge (id) {
    var mySplitResult = id.split(",");
    var i = 0;
    for(i = 0; i < mySplitResult.length; i++){
    var contentDiv = getContentDiv(mySplitResult[i]);
    contentDiv.style.fontSize =  "150%";
    getRegularFontSizeAnchor (contentDiv).className = "fontSizeUnselected";
    getMediumFontSizeAnchor (contentDiv).className = "fontSizeUnselected";
    getLargeFontSizeAnchor (contentDiv).className = "fontSizeSelected";
    $('#researchAreaList li').css('height','248px');
    }
}
function getRegularFontSizeAnchor (contentDiv) {
	return document.getElementById("regularFontSizeAnchor");
}
function getMediumFontSizeAnchor (contentDiv) {
	return document.getElementById("mediumFontSizeAnchor");
}
function getLargeFontSizeAnchor (contentDiv) {
	return document.getElementById("largeFontSizeAnchor");
}
function getContentDiv (id) {
	return document.getElementById(id);
}
// for empty search results tables
function hidePrintLink () {
$(".printIcon").hide();
}


try{
$(document).ready(function(){
/*concept cloud display hide function*/
$(".relatedConcepts h2").toggle(function(){
		$(this).removeClass().addClass("relatedDown");
		$(this).parent().removeClass().addClass("relatedConceptsNoBorder");
		$(".relateConceptLinks").hide();
	},function()
	{
		$(this).removeClass().addClass("relatedRight");
		$(this).parent().removeClass().addClass("relatedConcepts");
		$(".relateConceptLinks").show();
});

/* Refine search top 10 facets function */
$('.list ul').each(function(){
	var count = $(this).children().length;
	var showText = 'Show all categories (' + count + ')';
	var hideText = 'Show fewer categories';
	if (count > 9) {
	var lis = $(this).append($('<span class="facetMore"></span>').text(showText).click(function(){
	lis.toggle();
	$(this).text($(this).text() === showText ? hideText : showText);
		})).find('li:gt(9)').toggle();
	}
});
/* menu accordion function*/
$(".searchProposalsNavigation .content .levelOneTop").click(function(){
	$(".selected").removeClass("selected");
	$(".proposalMenu .last").hide();
	$(".searchProposalsNavigation .content .topLevelSubNav, .proposalMenu ul").slideUp();
	$(this).addClass("selected");
	$(this).next().slideDown();
});

$(".topMenu").click(function(){
	$(".proposalMenu .selected").removeClass("selected");
	$(this).addClass("selected");
	$(".proposalMenu .last").hide();
	$(this).siblings(".last").show();
	$(".proposalMenu .hide, .showProposalMenu").slideUp();
	$(this).next().slideDown();

	var nextCount= $(this).parent().children(".nextTen1").children().length;
	$(this).siblings(".last").children("a").text("Show Next " +nextCount);

	var i = 0;
	var a = 1;
	var holder;

/*begin function for last item clicked*/
$(".proposalMenu .last").click(function(){
	if (holder != this) {
      i = 0;
      a = 1;
	}
	holder = this;

	var indexId = ++i;
	var indexIdLevel2 = ++a;
	var  numberLeft = $(this).parent().children(".nextTen"+indexIdLevel2+"").children().length;

	$(this).parent().children(".nextTen"+indexId+"").slideDown();

	$(this).children("span").text(numberLeft);
	if(numberLeft == 0){
       $(this).hide();
	}
	else{
	    $(this).show();
	    $(this).children("a").text("Show Next " +numberLeft);
	}
});
	/*end function for last item clicked*/
});
/*end menu accordion function*/
});} catch(err){}


$(document).ready(function(){
	// Add the caption titles for the thickbox meta data
	if ($('.imageSubmitted').length) {
		$('.imageSubmitted').prepend('<span><b>Submitted by: </b></span>');
	}
	if ($('.imageTitle').length) {
		$('.imageTitle').prepend('<span><b>Image Title: </b></span>');
	}
	if ($('.imageCaption').length) {
		$('.imageCaption').prepend('<span><b>Caption: </b></span>');
	}
	if ($('.imageCredit').length) {
		$('.imageCredit').prepend('<span><b>Credit: </b></span>');
	}
	if ($('.imagePermisssions').length) {
		$('.imagePermisssions').prepend('<span></span>');
	}else {}

	try{
		galleriaOfJustice();

		var photoTotal = $(".photoGallery li").size();
		// If there is only one photo, add the currentNumber span so we still have a counter for the caption divs
		if (photoTotal == 1) {
			$("#photoGalleryHeader").append('<span class="currentNumber" style="display:none">1</span>');
		}
		else {}
		$("#photoGalleryHeader .totalNumber").text(photoTotal);

		$('.nav').css('display','none'); // hides the nav initially

		$('ul.photoGallery').galleria({
			history   : false, // deactivates the history object for bookmarking, back-button etc.
			clickNext : false, // helper for making the image clickable. Let's not have that in this example.
			insert    : undefined, // the containing selector for our main image.
								   // If not found or undefined (like here), galleria will create a container
								   // before the ul with the class .galleria_container (see CSS)
			onImage   : function() { $('.photoGalleryNav').css('display','block'); } // shows the nav when the image is showing
		});

		$("ul.photoGallery li").click(function () {
			// this changes the "(1 of 6)" count
			var index = $(".photoGallery li").index(this); //grabs the current photo li item

			var showLargeImage = $(".largeGalleryImages a").eq(index).attr("href");	//create a variable that chooses the proper large image and gives me the href  source.

			var showLargeTitle = $(this).children("img").attr("alt");

			$(".galleria_container .replaced").wrap("<a href=\""+showLargeImage+"\" title=\""+showLargeTitle+"\" class='thickbox'></a>");

			thickBoxJustice();

			$("#photoGalleryHeader .currentNumber").text(index+1); // replaces the count in the header
		});

		$(".previousImage").click(function(){
			var numberValue = $("#photoGalleryTop .currentNumber").text();

			var numberPrevious = parseFloat(numberValue - 1);
			if(numberPrevious > 0){
				$("#photoGalleryTop .currentNumber").text(numberPrevious);
			}
			else{
				$("#photoGalleryTop .currentNumber").text(photoTotal);
			}

			var imagePrevious = $(".largeGalleryImages a").eq(numberPrevious-1).attr("href");

			//create a variable for the alt tag on the image
			var endIndex = photoTotal - 1;
			var imagePreviousTotal = $(".largeGalleryImages a").eq(endIndex).attr("href");

			if(numberValue == 1){
				var showLargeTitlePrev = $(".photoGallery img").eq(photoTotal-1).attr("alt");
				$(".galleria_container .thickbox").attr("href", imagePreviousTotal);
				$(".galleria_container .thickbox").attr("title", showLargeTitlePrev);
			}
			else{
				var showLargeTitlePrev = $(".photoGallery img").eq(numberPrevious-1).attr("alt");
				$(".galleria_container .thickbox").attr("href", imagePrevious);
				$(".galleria_container .thickbox").attr("title",  showLargeTitlePrev);
			}
		});

		$(".nextImage").click(function(){
			var numberValue = $("#photoGalleryTop .currentNumber").text();
			var numberNextInt = parseFloat(numberValue);
			var numberNext = numberNextInt+1;

			if(numberNext < photoTotal){
				$("#photoGalleryTop .currentNumber").text(numberNext);
			}
			else if(numberNext == photoTotal){
				$("#photoGalleryTop .currentNumber").text(photoTotal);
			}
			else{
				$("#photoGalleryTop .currentNumber").text(1);
			}

			var imageNext = $(".largeGalleryImages a").eq(numberValue).attr("href");
			//create a variable for the alt tag of the image
			if(numberNext > photoTotal){
				var showLargeTitleNext = $(".photoGallery img").eq(0).attr("alt");
				$(".galleria_container .thickbox").attr("href", imageNext);
				$(".galleria_container .thickbox").attr("title", showLargeTitleNext);
			}
			else{
				var showLargeTitleNext = $(".photoGallery img").eq(numberNext-1).attr("alt");
				$(".galleria_container .thickbox").attr("href", imageNext);
				$(".galleria_container .thickbox").attr("title", showLargeTitleNext);
			}
		});
}catch(err){}
try{
	galleriaVideoOfJustice();

	var videoTotal = $(".videoGallery li").size();
	// If there is only one video, add the currentNumberVideo span so we still have a counter for the caption divs
	if (videoTotal == 1) {
		$("#videoGalleryHeader").append('<span class="currentNumberVideo" style="display:none">1</span>');
	}else {}
	$("#videoGalleryHeader .totalNumberVideo").text(videoTotal);
	$('.videoGalleryNav').css('display','none'); // hides the nav initially

	$('ul.videoGallery').galleriavideo({
		history   : false, // deactivates the history object for bookmarking, back-button etc.
		clickNext : false, // helper for making the image clickable. Let's not have that in this example.
		insert    : undefined, // the containing selector for our main image.
							   // If not found or undefined (like here), galleria will create a container
							   // before the ul with the class .galleria_container (see CSS)
		onImage   : function() { $('.videoGalleryNav').css('display','block');} // shows the nav when the image is showing
	});

	$("ul.videoGallery li").click(function () {
		// this changes the "(1 of 6)" count
		var indexVideo = $(".videoGallery li").index(this); //grabs the current video li item
		//create the video link
		wrapVideoLink(indexVideo);

		$("#videoGalleryTop .currentNumberVideo").text(indexVideo+1); // replaces the count in the header
	});

	$("#videoGalleryTop .previousVideo").click(function(){
		var numberValueVideo = $("#videoGalleryTop .currentNumberVideo").text();
		var numberPreviousVideo = parseFloat(numberValueVideo - 1);
		if(numberPreviousVideo > 0){
			$("#videoGalleryTop .currentNumberVideo").text(numberPreviousVideo);
		}
		else{
				$("#videoGalleryTop .currentNumberVideo").text(videoTotal);
		}

		var videoPrevious = $(".largeGalleryVideos a").eq(numberPreviousVideo-1).attr("href");
		//create a variable for the alt tag on the image
		var endIndexVideo = videoTotal - 1;
		var videoPreviousTotal = $(".largeGalleryVideos a").eq(endIndexVideo).attr("href");

		if(numberValueVideo == 1){
			var showLargeTitlePrevVideo = $(".videoGallery img").eq(videoTotal-1).attr("alt");
			$(".galleriavideo_container .thickbox").attr("href", videoPreviousTotal);
			$(".galleriavideo_container .thickbox").attr("title", showLargeTitlePrevVideo);
		}
		else{
			var showLargeTitlePrevVideo = $(".videoGallery img").eq(numberPreviousVideo-1).attr("alt");
			$(".galleriavideo_container .thickbox").attr("href", videoPrevious);
			$(".galleriavideo_container .thickbox").attr("title",  showLargeTitlePrevVideo);
		}
		//create the video link
		wrapVideoLink(numberPreviousVideo-1);
	});

	$(".nextVideo").click(function(){
		var numberValueVideo = $("#videoGalleryTop .currentNumberVideo").text();
		var numberNextIntVideo = parseFloat(numberValueVideo);

		//create the video link
		wrapVideoLink(numberNextIntVideo);

		var numberNextVideo = numberNextIntVideo+1;
		if(numberNextVideo < videoTotal){
			$("#videoGalleryTop .currentNumberVideo").text(numberNextVideo);
		}
		else if(numberNextVideo == videoTotal){
			$("#videoGalleryTop .currentNumberVideo").text(videoTotal);
		}
		else{
			$("#videoGalleryTop .currentNumberVideo").text(1);
		}

		var imageNext = $(".largeGalleryVideos a").eq(numberValueVideo).attr("href");
		//create a variable for the alt tag of the image

		if(numberNextVideo > videoTotal){
			var showLargeTitleNextVideo = $(".videoGallery img").eq(0).attr("alt");
			$(".galleriavideo_container .thickbox").attr("href", imageNext);
			$(".galleriavideo_container .thickbox").attr("title", showLargeTitleNextVideo);
		}
		else{
			var showLargeTitleNextVideo = $(".videoGallery img").eq(numberNextVideo-1).attr("alt");
			$(".galleriavideo_container .thickbox").attr("href", imageNext);
			$(".galleriavideo_container .thickbox").attr("title", showLargeTitleNextVideo);
		}
	});

	if (videoTotal >= 1) {
		wrapVideoLink("0");
	}}catch(err){}
});
/********************************************
* Function to call the video links function
* Call wrapGallery method after 250ms delay.
* This delay is required for gallery to load
********************************************/
function wrapVideoLink(indexVideo) {
	setTimeout("wrapGallery("+indexVideo+")",600);
}
/********************************************
* Function to create the video links
* Call wrapGallery method after 250ms delay.
* This delay is required for gallery to load
********************************************/
function wrapGallery(indexVideo) {
	var showVideo = $(".largeGalleryVideos a").eq(indexVideo).attr("href");
	var showVideoTitle = $(".largeGalleryVideos a").eq(indexVideo).attr("title");
	var showVideoAlt = $(".largeGalleryVideos a").eq(indexVideo).attr("alt");
	var fnOnClick = $(".largeGalleryVideos a").eq(indexVideo)[0].getAttributeNode("onclick").value;
	
	if(fnOnClick==null || fnOnClick=='undefined' || fnOnClick=='') {
		wrapVideoLink(indexVideo);
	}
	
	$(".galleriavideo_container .replaced").after("<a onClick=\""+fnOnClick+"\" rel='gallery' class='thickbox' href=\""+showVideo+"\" title=\""+showVideoTitle+"\" alt=\""+showVideoAlt+"\"></a>");
	thickBoxVideoJustice(); 
}