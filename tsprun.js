$(document).ready( function() {
	var xcoord = [];
	var ycoord = [];
	var canvas = $("#canvas").get(0);
	var ctx = canvas.getContext("2d");

	//do not put this in the css
	ctx.canvas.width = 600;
	ctx.canvas.height = 400;


	var dotX = [0];
	var dotY = [0];
	
	$("#canvas").click( function() {
		var x = event.pageX;
		var y = event.pageY;
		
		//get context of canvas
		var canvas = $("#canvas").get(0);
		var ctx = canvas.getContext("2d");
		
		//add point to canvas (write this)
		 
		ctx.fillRect(x,y,4,4);
		
		//add point to arrays
		xcoord.push(x);
		ycoord.push(y);

	});
	
	$("#draw").click( function() {
		//do algorithm
		
		//nearest neighbor 
		var xtour = [];
		var ytour = [];
		xtour.push(xcoord[0]);
		ytour.push(ycoord[1]);
		
		for (var i = 0; i < xcoord.length; i++) {
			var nearest = 0;
			var indexofnearest = 0;
			for (var j = 0; j<xtour.length; j++) {
				var distance = distance(xtour[j],xcoord[i],ytour[j],ycoord[i]);
				if (distance < nearest) {
					nearest = distance;
					indexofnearest = j;
				}
			}
			
			
		}
}		
		
		
		//draw lines between points
		var canvas = $("#canvas").get(0);
		var ctx = canvas.getContext("2d");	
		ctx.strokeStyle = "#55C"; //change color of line
		ctx.lineWidth = 4; //change width of line
		
		
		//draw a line between every point
		
	});
});

function distance(x1, x2, y1, y2) 
{
	return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
	
	
}
