/* ver 1.3 - Modified by Tarun to change the main menu items*/
/* ver 1.4 - Modified by Tarun to enable click on Tech Frameworks */
/* ver 1.5 - Modified by Tarun to specify technology framework type as TF */

/*-------------------------------------------
Security Settings
--------------------------------------------*/

   Notice = "DHTML Slide Tree Menu, Copyright (c) - 2001, OpenCube Inc. - www.opencube.com"
   code0 = 538
   code1 = 697
   sequence = "oc94127"
limit_multiple_users=true
sequence="9x88_4"


/*-------------------------------------------
Required menu Settings
--------------------------------------------*/

   menu_width = 150
   menu_height = 400

   scrolldelay = 5
   scrolljump = 2

   scrolldelay_nt = 5
   scrolljump_nt = 1;

   scrolldelay_ns4 = 50;
   scrolljump_ns4 = 6;

   urltarget = "_self"
   start_open_index = "none"
   display_urls_in_statusbar = true

   onload_statement = "none"
   codebase = "/AppArch/jscripts/"



/*-------------------------------------------
Required menu indenting and margins
--------------------------------------------*/

   main_itemheight = "auto"
   main_extend_height = 55

   sub_itemheight = "auto"
   sub1_indentwidth = 15
   sub2_indentwidth = 10

   main_marginleft = 5
   main_margin_topbottom = 5
   sub_marginleft = 0
   sub_margin_topbottom = 0



/*-------------------------------------------
Required font Settings
--------------------------------------------*/

   main_textcolor = "#FFFFFF"
   main_fontfamily = "Verdana"
   main_fontsize = 10
   main_textdecoration = "normal"
   main_fontweight = "bold"
   main_fontstyle = "normal"
   main_hl_textcolor = "#FF9900"
   main_hl_textdecoration = "underline"

   sub_textcolor = "#333333"
   sub_fontfamily = "Verdana"
   sub_fontsize = 10
   sub_textdecoration = "normal"
   sub_fontweight = "normal"
   sub_fontstyle = "normal"
   sub_hl_textcolor = "#000000"
   sub_hl_textdecoration = "underline"


/*---------------------------------------------
Required and optional background Settings
-----------------------------------------------*/


   /*---Required Settings---------*/ 

      //background_color = "#CECF9C"
      background_color = "#FFFFCC"
      //main_item_bgcolor = "#666666"
      main_item_bgcolor = "rgb(206, 207, 156)" //TechFW is in green color 
      main_hl_item_bgcolor = "transparent"
  
      sub_item_bgcolor = "#FFFFCE"
      sub_hl_item_bgcolor = "transparent"

 
   /*---Optional Settings---------*/

      //main_background_color = "#000000"
      sub_background_color = "#FFFFCE"

      //main_background_image = "/AppArch/images/mainbg.gif"
      //sub_level1_background_image = "/AppArch/images/samp2_subbg.gif"
      //sub_level2_background_image = "/AppArch/images/samp2_subbg.gif"

      //main_background_image = "/AppArch/images/mainbg.gif"
      //ie5fix_sub_level1_background_image = "/AppArch/images/ie5fix_samp2_subbg.gif"
      //ie5fix_sub_level1_bg_image_height = 130
      //ie5fix_sub_level2_background_image = "/AppArch/images/ie5fix_samp2_subbg.gif"
      //ie5fix_sub_level2_bg_image_height = 130   
	

      main_clipbg_after_items = true



/*-------------------------------------------
Required border settings -- set 'main_use_border'
and 'sub_use_border' to false for no borders
--------------------------------------------*/


   /*---All browsers Border settings-------------------*/
   
      main_use_border = true
      main_border_color = "#000000"
      main_hl_border_color = "#000000"

      sub_use_border = false;
      sub_border_color = "#ffffff"
      sub_hl_border_color = "#ff0000"


   /*---border offset distance (netscape 4.x bug workaround) 
        adjust untill right border is visible at edge----*/
      
      main_ns4fix_rightborder_offset = -2
      sub_ns4fix_rightborder_offset = -1


   /*---IE 5-up Only additional border settings---------*/
  
      main_use_2pixel_topbottom_border = false
      main_leftright_border_width = 1
      sub_leftright_border_width = 1



/*---------------------------------------------
Optional Icon /AppArch/images
-----------------------------------------------*/

   icon_image0 = "/AppArch/images/samp2_downarrow.gif"
   icon_image_wh0 = "13,8"
   icon_rollover0 = "/AppArch/images/samp2_downarrow_hl.gif"
   icon_rollover_wh0 = "13,8"

   icon_image1 = "/AppArch/images/samp2_downarrow.gif"
   icon_image_wh1 = "13,10"
   icon_rollover1 = "/AppArch/images/samp2_downarrow_hl.gif"
   icon_rollover_wh1 = "13,10"

   icon_image2 = "/AppArch/images/samp2_downarrow.gif"
   icon_image_wh2 = "13,10"
   icon_rollover2 = "/AppArch/images/samp2_downarrow_hl.gif"
   icon_rollover_wh2 = "13,10"

   icon_image3 = "/AppArch/images/samp2_downarrow.gif"
   icon_image_wh3 = "13,10"
   icon_rollover3 = "/AppArch/images/samp2_downarrow.gif"
   icon_rollover_wh3 = "13,10"	
	

/*----------------------------------------------
Applet Overide Settings and additional applet
specific parameters - prefix any available parameter
name with 'applet_' to overide the setting when
running in applet mode
------------------------------------------------*/


   /*------for design purposes only---------*/

      //set the following param to true for 
      //testing the script in applet form.    
      ie5up_run_as_applet = false;
    

   /*------overriden script parameters---------*/
  
      applet_main_itemheight = 25
      applet_main_background_image = "/AppArch/images/samp2_app_mfix_mbg.gif"
      applet_main_use_border = false

   /*------Additional Applet Specific Parameters--*/

      applet_topoffset = -1;      

      applet_main_icon_indent = 7
      //applet_sub_icon_indent = 0

      applet_load_message_color = "#000000"
      applet_load_message = "Loading /AppArch/images..."

      applet_main_font = "Helvetica, bold, 14" 
      applet_sub_font = "Helvetica, plain, 12"

   

/********************************************
THE FOLLOWING SECTIONS DEFINE THE ACTUAL
STRUCTURE AS WELL AS TEXT, URLS, AND ICONS 
THAT MAKE THE TREE MENU. - FOR HELP WITH 
INDEXING YOUR ITEMS REFER TO THE DOCUMENTATION.
*********************************************/

/*-------------------------------------------
Main Menu Item Settings
--------------------------------------------*/
urltarget="fraMain"

//main_text0 = "OOAD"
//icon_index0 = 0
//url0 = "ViewFrameworkOverview.do?frameworkType=TF&frameworkID=3&pageRequest=OOAD Technology Framework"


main_text0 = "Security Tech FW"
icon_index0 = 1
url0 = "ViewFrameworkOverview.do?frameworkType=TF&frameworkID=1&pageRequest=Security Technology Framework"



main_text1 = "Web Services Tech FW"
icon_index1 = 2
url1 = "ViewFrameworkOverview.do?frameworkType=TF&frameworkID=2&pageRequest=Web Services Technology Framework"




/*---------------------------------------------
Sub Menu Item Settings
-----------------------------------------------*/

// OOAD 
subdesc0_0 = "Phase View"
subdesc0_1 = "Activities"
subdesc0_2 = "Components"
subdesc0_3 = "Best Practices"
subdesc0_4 = "Documents"
subdesc0_5 = "View All"

icon_index0_0 = 1
icon_index0_1 = 1
icon_index0_2 = 1
icon_index0_3 = 1
icon_index0_4 = 1
icon_index0_5 = 1

url0_0 = "/AppArch/BrowseFrameworksSplitView.do?messageType=Security Technology&fwID=1&fwType=TF"
url0_1 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=1&elementName=Activities&phaseID=All&pageRequest=Security Tech FW"
url0_2 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=1&elementName=Components&phaseID=All&pageRequest=Security Tech FW"
url0_3 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=1&elementName=Best Practices&phaseID=All&pageRequest=Security Tech FW"
url0_4 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=1&elementName=Documents&phaseID=All&pageRequest=Security Tech FW"
url0_5 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=1&elementName=All&phaseID=All&pageRequest=Security Tech FW"

/////////////
/////////Security
subdesc1_0 = "Phase View"
subdesc1_1 = "Activities"
subdesc1_2 = "Components"
subdesc1_3 = "Best Practices"
subdesc1_4 = "Documents"
subdesc1_5 = "View All"

icon_index1_0 = 1
icon_index1_1 = 1
icon_index1_2 = 1
icon_index1_3 = 1
icon_index1_4 = 1
icon_index1_5 = 1

url1_0 = "/AppArch/BrowseFrameworksSplitView.do?messageType=Web Services Technology&fwID=2&fwType=TF"
url1_1 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=Activities&phaseID=All&pageRequest=Web Services Tech FW"
url1_2 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=Components&phaseID=All&pageRequest=Web Services Tech FW"
url1_3 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=Best Practices&phaseID=All&pageRequest=Web Services Tech FW"
url1_4 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=Documents&phaseID=All&pageRequest=Web Services Tech FW"
url1_5 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=All&phaseID=All&pageRequest=Web Services Tech FW"

/////////////
////////Web Services
subdesc2_0 = "Phase View"
subdesc2_1 = "Activities"
subdesc2_2 = "Components"
subdesc2_3 = "Best Practices"
subdesc2_4 = "Documents"
subdesc2_5 = "View All"

icon_index2_0 = 1
icon_index2_1 = 1
icon_index2_2 = 1
icon_index2_3 = 1
icon_index2_4 = 1
icon_index2_5 = 1

url2_0 = "/AppArch/BrowseFrameworksSplitView.do?messageType=Web Services Technology&fwID=2&fwType=TF"
url2_1 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=Activities&phaseID=All&pageRequest=Web Services Tech FW"
url2_2 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=Components&phaseID=All&pageRequest=Web Services Tech FW"
url2_3 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=Best Practices&phaseID=All&pageRequest=Web Services Tech FW"
url2_4 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=Documents&phaseID=All&pageRequest=Web Services Tech FW"
url2_5 = "/AppArch/FrameworkBrowser.do?frameworkType=TF&frameworkID=2&elementName=All&phaseID=All&pageRequest=Web Services Tech FW"

