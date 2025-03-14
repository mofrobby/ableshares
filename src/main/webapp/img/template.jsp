<%@ taglib uri="/WEB-INF/struts-tiles.tld" prefix="template" %>
<html>
<head>
<title><template:getAsString name='title'/></title>
<script language='javascript' src='../jscripts/docView.js'></script>
<script language='javascript' src='../jscripts/docopt.js'></script>
<link rel=stylesheet href="../global.css" type="text/css">
<style>
<!--
a:hover {text-decoration:underline;}
-->
</style>
</head>
<body bgcolor='#ffffff' >
	<table cellpadding=0 cellspacing=0 border=0 width=100%>	
		
			
			<template:get name='header'/>			
			<template:get name='content'/>
			
		
	</table>
</body>

</html>
