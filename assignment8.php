<!DOCTYPE html>
<html>
<head>
    <title>Assignment 8</title>
    <meta charset="utf-8">
    <meta content="initial-scale=1, minimum-scale=1, width=device-width" name="viewport">
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <link href="css/main.css" rel="stylesheet">
</head>

<body>

	<div class="content-wrap">
        <h2>Filtering and Searching</h2>
        <div class="search-wrap">
            <input id="search" type="text" name="search" placeholder="Search here" oninput="loadTable()">
        </div>
       	<table align = "center" id="table" border="1">
    	</table>
    	<div class="button-group">
			<button onclick="loadTable(1)" >A - M (<span class="AMCount"></span>)</button>
			<button onclick="loadTable(2)">N - Z (<span class="NZCount"></span>)</button>
    	</div>
   	</div>
   
	<script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="js/main.js" ></script>
</body>

</html>