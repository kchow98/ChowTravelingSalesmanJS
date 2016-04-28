/** 
This is my Traveling Salesman Problem in Javascript
@author Kevin Chow
@version 4/27/16
 */

var xcoord = [];
var ycoord = [];

var xNeighbor = [];
var yNeighbor = [];

var xIncrease = [];
var yIncrease = [];	
/*
This passage of code sets up the canvas and then adds any points that are clicked into
the coordinate arrays
*/
$(document).ready( function() {
	$("#canvas").click( function() {
	//get context of canvas
	var canvas = $("#canvas").get(0);
	var ctx = canvas.getContext("2d");
	
	var x = event.pageX - canvas.offsetLeft;
	var y = event.pageY - canvas.offsetTop;
	
	xcoord.push(x);
	ycoord.push(y);
	
	ctx.fillRect(x,y,3,3);
	});
	
	/**
	Nearest neighbor heuristic:  Read in the next point, and add it to the current tour after
	the point to which it is closest. (If there is more than one point to which it is 
	closest, insert it after the first such point you discover.)
	*/
	$("#Neighbor").click( function() {
	
	var canvas = $("#canvas").get(0);
	var ctx = canvas.getContext("2d");
	
	//add the first point clicked
	xNeighbor.push(xcoord[0]);
	yNeighbor.push(ycoord[0]);
	xcoord.splice(0,1);
	ycoord.splice(0,1);
	
	var numOfPoints = xcoord.length;
	
	for(i=0;i<numOfPoints;i++)
	{
		//nearest is the first at the start (by default)
		var index = 0;
		var nearest = distance(xcoord[0],ycoord[0],xNeighbor[i],yNeighbor[i]);
		for(j=1;j<xcoord.length;j++)
		{

			var dist = distance(xcoord[j],ycoord[j],xNeighbor[i],yNeighbor[i]);
			if (dist < nearest)
			{
				least = dist;
				index = j;

			}

		}
		xNeighbor.push(xcoord[index]);
		yNeighbor.push(ycoord[index]);
		xcoord.splice(index,1);
		ycoord.splice(index,1);

				
	}
	ctx.strokeStyle = "#E6E6FA"; 
	ctx.lineWidth = 3; 
	for(var i = 0; i < xNeighbor.length - 1; i++)
	{
		ctx.moveTo(xNeighbor[i],yNeighbor[i]);
		ctx.lineTo(xNeighbor[i+1],yNeighbor[i+1]);
		ctx.stroke();
	}
	
	});
	
	/**
	Smallest increase heuristic:  Read in the next point, and add it to the current tour 
	after the point where it results in the least possible increase in the tour length. 
	(If there is more than one point, insert it after the first such point you discover.)
	*/
	$("#Increase").click( function() {
	
	var canvas = $("#canvas").get(0);
	var ctx = canvas.getContext("2d");
	
	//add the first two points clicked
	xIncrease.push(xcoord[0]);
	yIncrease.push(ycoord[0]);
	xIncrease.push(xcoord[1]);
	yIncrease.push(ycoord[1]);

	
	

	var length = distance(xIncrease[0],yIncrease[0],xIncrease[1],yIncrease[1]);

	var numOfPoints = xcoord.length;
	
	for(i=0;i<numOfPoints;i++)
	{
		
		var index = 0;
		var tempLength = length + distance(xcoord[i],ycoord[i],xIncrease[0],yNeighbor[0]);
		
		for(j=1;j<xcoord.length + 1;j++)
		{
			var dist = length + distance(xcoord[i],ycoord[i],xIncrease[j],yNeighbor[j]);
			
			if (dist < tempLength)
			{
				dist = tempLength;
				index = j;

			}

		}
		console.log(xIncrease);

		xIncrease.splice(index,0,xcoord[i]);
		yIncrease.splice(index,0,ycoord[i]);
		console.log(xIncrease);
	}
	

	ctx.strokeStyle = "#E6E6FA"; 
	ctx.lineWidth = 3; 
	for(var i = 0; i < xIncrease.length-1; i++)
	{
		ctx.moveTo(xIncrease[i],yIncrease[i]);
		ctx.lineTo(xIncrease[i+1],yIncrease[i+1]);
		ctx.stroke();
	}
	
	});

});

/**
The distance between two points, using the great distance formula from algebra!
*/
function distance(x1, y1, x2, y2)
{
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}




