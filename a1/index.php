<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="My online portfolio that illustrates skills acquired while working through various project requirements.">
		<meta name="author" content="Carson Darrow.">
    <link rel="icon" href="favicon.ico">

		<title>CD - Assignment1</title>		
		<?php include_once("../css/include_css.php"); ?>	
		<style>

		html
		{
			height: 100%;
		}
			body 
		{
			background-image: linear-gradient(#72A0C1, #E6F7FF, #72A0C1);
			background-image: linear-gradient(to right, #72A0C1, #E6F7FF, #72A0C1);
		}
		
		p
		{
			font-size: 20px;
		}

		h4
		{
			color: #000;
		}

		</style>
  </head>

  <body>

		<?php include_once("../global/nav.php"); ?>
		
		<div class="container">
			<div class="starter-template">
				<div class="page-header">
					<?php include_once("global/header.php"); ?>	
				</div>
				<p class="text-justify">
					<strong>Description:</strong> <br/>
							* Screenshot of JDK Installation <br/>
							* Screenshot of Andoird Studio Installation <br/>
							* Screenshot of Apache Installations 
				</p>

				<h4>Java Installation</h4>
				<img src="img/jdk_install.png" class="img-responsive center-block" alt="JDK Installation" style="width:70%">

				<h4>Android Studio Installation</h4>
				<img src="img/android1.png" class="img-responsive center-block" alt="Android Studio Installation">

				<h4>Apache Installation</h4>
				<img src="img/apache.png" class="img-responsive center-block" alt="Apache Installation" style="width:70%">
				<img src="img/apache2.png" class="img-responsive center-block" alt="Apache Installation" style="width:70%">
				
				<?php include_once "global/footer.php"; ?>

			</div> <!-- starter-template -->
    </div> <!-- end container -->

		<!-- Bootstrap JavaScript
				 ================================================== -->
		<!-- Placed at end of document so pages load faster -->		
		<?php include_once("../js/include_js.php"); ?>			
  </body>
</html>
