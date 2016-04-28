var xcoord = [];
var ycoord = [];

$(document).ready( function() {
	$("#canvas").click( function() {
	//get context of canvas
	var canvas = $("#canvas").get(0);
	var ctx = canvas.getContext("2d");
		
	//add point to canvas
	var x = event.pageX - canvas.offsetLeft;
	var y = event.pageY - canvas.offsetTop;
		 
	//add point to arrays
	xcoord.push(x);
	ycoord.push(y);
	
	ctx.fillRect(x,y,5,5);

	});
});


$(document).ready( function() {
	$("#canvas").click( function() {
	
	//get context of canvas
	var canvas = $("#canvas").get(0);
	var ctx = canvas.getContext("2d");
	
	var canvas2 = $("#canvas2").get(0);
	var ctx2 = canvas2.getContext("2d");
	
	var canvas3 = $("#canvas3").get(0);
	var ctx3 = canvas3.getContext("2d");
	
	var x = event.pageX - canvas.offsetLeft;
	var y = event.pageY - canvas.offsetTop;
	
	arrayX.push(x);
	arrayY.push(y);
	
	var pixelSize = 2;
	ctx.fillRect(x,y,pixelSize,pixelSize);
	ctx2.fillRect(x,y,pixelSize,pixelSize);
	ctx3.fillRect(x,y,pixelSize,pixelSize);
	
	});
});