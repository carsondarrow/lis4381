<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="My online portfolio that illustrates skills acquired while working through various project requirements.">
		<meta name="author" content="Carson Darrow">
		<link rel="icon" href="favicon.ico">

		<title>Creative Portfolio</title>

		<?php include_once("css/include_css.php"); ?>	

		<!-- Carousel styles -->
		<style type="text/css">
			html
			{
				height: 100%;
			}
			body 
			{
				background-image: linear-gradient(to bottom right, #72A0C1, #72A0C1, #72A0C1);
				background-image: linear-gradient(to right,#72A0C1, #E6F7FF, #72A0C1);
			}

		 h2
		 {
			 margin: 0;     
			 color: #435483;
			 padding-top: 50px;
			 font-size: 53px;
			 font-family: "trebuchet ms", sans-serif;    
		 }
		 h3
		 {
			 text-shadow: 1px 1px #000000;
			 color: #982932;
		 }
		 h4
		 {
			padding: 30px;
			text-shadow: 1px 1px #000000;
			font-size: 25px;
			 color: #982932;
		 }
		 h5
		 {
			text-shadow: 2px 1px #000000;
			font-size: 25px;
			 color: #982932; 
		 }
		 a.Info
		 {
			margin-Bottom: 50px;
			-webkit-appearance: button;
			 -moz-appearance: button;
			 appearance: button;
			 
			 padding: 5px;
			 color: #982932;
		 }
		 .item
		 {
			 background: #333;   
			 text-align: center;
			 height: 400px !important;
		 }
		 .carousel
		 {
			 margin: 20px 0px 20px 0px;
		 }
		 .bs-example
		 {
			 margin: 20px;
		 }
		</style>

	</head>
	<body>

		<?php include_once("global/nav_global.php"); ?>
		
		<div class="container">
			<div class="starter-template">
				<div class="page-header">
					<?php include_once("global/header.php"); ?>	
				</div>

				<!-- Start Bootstrap Carousel  -->
				<div class="bs-example">
					<div
						id="myCarousel"
								class="carousel"
								data-interval="3000"
								data-pause="hover"
								data-wrap="true"
								data-keyboard="true"			
								data-ride="carousel">
						
    				<!-- Carousel indicators -->
						<ol class="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
							<li data-target="#myCarousel" data-slide-to="1"></li>
							<li data-target="#myCarousel" data-slide-to="2"></li>
						</ol>   
						<!-- Carousel items -->
						<div class="carousel-inner">

							
							<div class="active item" style="background: url(img/bitbucket.png); background-size: cover;">
								<div class="container">
									<div class="carousel-caption">
										<h3>Bitbucket Repository with Projects</h3>
										<a href="https://bitbucket.org/cbd19a/lis4381/src/" class="Info">Click for Info</a>
										<p></p>
                        </div>
                      </div>
                    </div>
              
							<div class="item" style="background: url(img/linkedin.png); background-size: cover;">
								<div class="carousel-caption">
									<h3>Linkedin: Carson Darrow</h4>
									<a href="https://www.linkedin.com/in/carson-darrow-280823199" class="Info">Click for Info</a>
									<p>  </p>								
								</div>
							</div>

							<div class="item" style="background: url(img/github.png); background-size: cover;">
								<div class="carousel-caption">
									<h4>Github Main</h5>
									<p></p>
									<a href="https://github.com" class="Info">Click for Info</a>							
								</div>
							</div>

						</div>
						<!-- Carousel nav -->
						<a class="carousel-control left" href="#myCarousel" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left"></span>
						</a>
						<a class="carousel-control right" href="#myCarousel" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right"></span>
						</a>
					</div>
				</div>
				<!-- End Bootstrap Carousel  -->
				
				<?php
				include_once "global/footer.php";
				?>

			</div> <!-- end starter-template -->
    </div> <!-- end container -->

		<?php include_once("js/include_js.php"); ?>	
	  
  </body>
</html>
