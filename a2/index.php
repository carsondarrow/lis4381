<!DOCTYPE html>
<html lang="en">
	
  <head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="My online portfolio that illustrates skills acquired while working through various project requirements.">
		<meta name="author" content="Carson Darrow.">
    <link rel="icon" href="favicon.ico">

		<title>LIS4381 - Assignment 2</title>		
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

*{
  box-sizing: border-box;
}

p{
	font-size: 20px;
}

h4{
	color: #000;
	padding: 1px;
}

.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: left;
  display: table;
}

img{
  padding-top: 2px;
  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 20px;
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
						* Assignment requirements as per A1 <br/>
						* Screenshot of running application’s first user interface <br/>
						* Screenshot of running application’s second user interface <br/>
						* Screenshot of skillsets 1 - 3 (#1: Even and Odd, #2: Largest Number, #3: Arrays and Loops)
				</p>

				<h4>Screenshot Recipe App</h4>
				<div>
    				<img src="img/screen_1.png" alt="Recipe 1" style="width:25%">>
    				<img src="img/screen_2.png" alt="Recipe 2" style="width:25%">
				</div>

				<h4>Skillset #1-#3</h4>
				<div class="row">
					<div class="colum">
				<img src="img/Even_or_Odd.png" class="img-responsive center-block" alt="Skillset 1" style="width:75%">

				<img src="img/largestNum.png" class="img-responsive center-block" alt="Skillset 2" style="width:75%">

				<img src="img/arrays_loops.png" class="img-responsive center-block" alt="Skillset 3" style="width:75%">
				</div>	
</div>	

				<?php include_once "global/footer.php"; ?>

			</div> <!-- starter-template -->
    </div> <!-- end container -->

		<!-- Bootstrap JavaScript
				 ================================================== -->
		<!-- Placed at end of document so pages load faster -->		
		<?php include_once("../js/include_js.php"); ?>			
  </body>
</html>
