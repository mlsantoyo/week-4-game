


//Generate random number 
var randomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
console.log(randomNumber);

var currentRound = 0;

//display in div called random
$("#target").html(randomNumber);


//generate random number for each crystal
var green = Math.floor(Math.random() * ((12-1)+1) + 1);
$()


var orange = Math.floor(Math.random() * ((12-1)+1) + 1);


var blue = Math.floor(Math.random() * ((12-1)+1) + 1);


var red = Math.floor(Math.random() * ((12-1)+1) + 1);


$("#green").on("click", function(){
	console.log("clicked green: ", green);
// currentRound = currentRound + green;
currentRound += green;

console.log("currentRound", currentRound);	
$("#currentRound").html(currentRound);
});

$("#orange").on("click", function(){
	console.log("clicked orange: ", orange);

	currentRound += orange;

	console.log("currentRound", currentRound);
	$("#currentRound").html(currentRound);		
});

$("#blue").on("click", function(){
	console.log("clicked blue: ", blue);

	currentRound += blue;

	console.log("currentRound", currentRound);
	$("#currentRound").html(currentRound);		
});

$("#red").on("click", function(){
	console.log("clicked red: ", red);

	currentRound += red;

	console.log("currentRound", currentRound);
	$("#currentRound").html(currentRound);		
});


