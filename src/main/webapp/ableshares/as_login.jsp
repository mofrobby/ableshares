<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>ABLEshares Login Page</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- CSS Global Compulsory -->
<link rel="stylesheet" href="../assets/plugins/bootstrap/css/bootstrap.min.css">

<script src="../assets/plugins/jquery/jquery.min.js"></script>
<script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="../assets/js/validator.js"></script>

<style>
.BG {
  background-color: #121726;
}	

.demo-text {
  width: 639px;
  height: 83px;
  font-family: Roboto;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  display: inline-block;
  color: #ffffff;
}
.demo-sub-text {
  width: 537px;
  height: 68px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: normal;
  display: inline-block;
  color: #ffffff;
}
.demo-bullets{
  width: 544.1px;
  height: 156px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  display: inline-block;
  color: #ffffff;
}
ul {
  list-style: none; /* Remove default bullets */
}

ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #55ffa9; /* Change the color */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.image-sliderfade  
{ 
  display: none; 
} 
  
img  
{ 
  vertical-align: middle; 
} 
  
/* Slideshow container */
.container  
{
  margin-top: 50px;
  width: 560px;
  height: 360.5px;
  box-shadow: 0 0 25px 0 #444e70;
} 
  
/* Caption text */
  
/* The dots/bullets/indicators */
.dot  
{ 
  height: 10px; 
  width: 10px; 
  margin: 0 2px; 
  background-color: transparent; 
  border-color:#55ffa9;  
  border-width: 3 px; 
  border-style: solid; 
  border-radius: 50%; 
  display: inline-block; 
  transition: border-color 0.6s ease; 
} 
  
.active  
{ 
  border-color: #666; 
} 
  
/* Animation */
.fade  
{ 
  -webkit-animation-name: fade-image; 
  -webkit-animation-duration: 1.5s; 
  animation-name: fade-image; 
  animation-duration: 1.5s; 
} 
  
@-webkit-keyframes fade-image 
{ 
  from {opacity: .4}  
  to {opacity: 1} 
} 
  
@keyframes fade-image 
{ 
  from {opacity: .4}  
  to {opacity: 1} 
} 
.userbox {
  width: 250px;
  height: 48px;
  background-color: #202639;
  font-color: #ffffff;
}

.Forgot-Username-For {
  width: 282px;
  height: 18px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.Path-2 {
  width: 2px;
  height: 32px;
  border: 1 solid #333c59;
  color: ##333c59;
}
.learn-text {
  margin-top: 50px;
  width: 493px;
  height: 25px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  display: inline-block;
  color: #ffffff;
}
	
</style>


</head>

<body class="BG">

<div class="row">
	<div class="col-md-6" style="margin-top:175px; text-align: center;"> 
		<div><img src="../img/as_img/ableshares_logo.png" /></div>
		<form method="POST" action="as_landing.jsp">
			<div style="text-align: center; display: inline-block; margin-top: 50px">
				<div class="form-group">
					<input type="text" class="form-control userbox" id="username" placeholder="Username" style="color:#fff;">
				</div>
				<div class="form-group" style="margin-top: 25px;">
            		<input type="password" class="form-control userbox" id="inputPassword" placeholder="Password" style="color:#fff;">
        		</div>
        		<div style="margin-top: 55px;"><button type="submit" style="width: 128px; height: 48px; border: 1px solid #55ffa9; background-color: #121726; color: #ffffff;">SIGN IN</button></div>
        		<div class="Forgot-Username-For" style="margin-top: 75px;">Forgot Username? &nbsp;&nbsp;<span class="Path-2">|</span>&nbsp;&nbsp;Forgot Password?</div>
        		
			</div>
		</form>
		<hr style="margin-top: 55px; width:80%; color: #333c59; background-color: #333c59; border: none; height: 2px;"/>
		<div class="learn-text">Interested in learning more about <b>ABLE</b>shares?</div>
		<form>
			<div style="text-align: center; display: inline-block; margin-top: 30px;">
				<table style="width:393px;">
					<tr>
						<td><input type="email" class="form-control userbox" id="email" placeholder="Email" style="color:#fff;"></td>
						<td><button type="submit" style="width: 128px; height: 48px; border: 1px solid #55ffa9; background-color: #121726; color: #ffffff;">SUBMIT</button></td>
					</tr>
				</table>
			</div>
		</form>
	 
	</div>
	<div class="col-md-6"  style="background-color:#181e2e; text-align: center;"> 
		<div class="demo-text" style="margin-top:103px;">A Foundational Change In Project Financing & Asset Management</div>
	
		<div class="demo-sub-text" style="margin-top:50px;">A state-of-the-art, distributed ledger enabled platform providing a new source of financing projects &amp; allowing investors to gain access to new assets.</div>
	
		<div class="demo-bullets" style="margin-top:63px; text-align: left;">
			<ul>
				<li>Opens new sources of funding / channels for large capex natural resource developments</li>
				<br>
				<li>Uses existing market infrastructure and regulations to provide seamless processing while increasing transparency &amp; minimizing risk</li>
				<br>
				<li>Empowers anyone to take positions in previously unavailable assets, including natural resources and reserve minerals</li>
			</ul>
		</div>
		
		<!--HTML Code-->
		<!-- Slideshow Container Div -->
		<div class="container"> 

		  <!-- Full-width images with caption text -->
		  <div class="image-sliderfade fade"> 
			<img src="../img/as_img/reserveledger.png"> 
			<div class="text">Reserve Ledger Dashboard</div> 
		  </div> 

		  <div class="image-sliderfade fade"> 
			<img src="../img/as_img/assetprod.png" > 
			<div class="text">Asset Production & Commitment Schedule</div> 
		  </div> 

		  <div class="image-sliderfade fade"> 
			<img src="../img/as_img/bcledger.png" > 
			<div class="text">Blockchain Interaction</div> 
		  </div> 

		</div> 
		<br> 

		<!-- The dots/circles -->
		<div style="text-align:center"> 
		  <span class="dot"></span>  
		  <span class="dot"></span>  
		  <span class="dot"></span>
		</div>
	
	</div>
</div>






<script>


var slideIndex = 0; 
showSlides(); // call showslide method 
   
function showSlides() 
{ 
    var i; 
  
    // get the array of divs' with classname image-sliderfade 
    var slides = document.getElementsByClassName("image-sliderfade");  
      
    // get the array of divs' with classname dot 
    var dots = document.getElementsByClassName("dot");  
  
    for (i = 0; i < slides.length; i++) { 
        // initially set the display to  
        // none for every image. 
        slides[i].style.display = "none";  
    } 
   
     // increase by 1, Global variable 
    slideIndex++;  
   
     // check for boundary 
    if (slideIndex > slides.length)  
    { 
        slideIndex = 1; 
    } 
   
    for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className. 
                            replace(" active", ""); 
    } 
   
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 
  
    // Change image every 3 seconds 
    setTimeout(showSlides, 3000);  
} 

	
</script>

</body>
</html>
