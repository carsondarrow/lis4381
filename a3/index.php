<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="I present you my creative online portfolio that illustrates skills acquired while working through various project requirements.">
	<meta name="author" content="Carson Darrow">
	<link rel="icon" href="favicon.ico">

	<title>LIS4381 - Assignment3</title>
		<?php include_once("../css/include_css.php"); ?>
</head>

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
	text-shadow: 0.5px 1px #000000;
	padding-top: 50px;
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
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 40px;
}

</style>


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
						* Screenshot of ERD <br/>
						* Screenshot of running application's opening user interface <br/>
						* Screenshot of skillsets 4 - 6 (#4: Decision Structures, #5: Random Number Generator, #6: Methods)
				</p>

				<h4>Concert App</h4>
				<div class="row">
					<div class="colum">
				<img src="img/1.png" alt="Concert App" style="width:25%">

				<img src="img/2.png" alt="Concert App" style= "width:25%">

				<img src="img/4.png" alt="Concert App" style="width:25%">
				
				<img src="img/3.png" alt="Concert App" style="width:25%">

				<img src="img/4.png" alt="Concert App" style="width:25%">

				<img src="img/5.png" alt="Concert App" style="width:25%">
				</div>

				

				<h4>Skillset #4-#6</h4>
				<div class="row">
					<div class="colum">
				<img src="img/ss4.png" class="img-responsive center-block" alt="Skillset 4" style="width:75%">

				<img src="img/ss5.png" class="img-responsive center-block" alt="Skillset 5" style="width:75%">

				<img src="img/ss6.png" class="img-responsive center-block" alt="Skillset 6" style="width:75%">
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
