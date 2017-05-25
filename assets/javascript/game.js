


//Generate random number 
var randomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
console.log(randomNumber);

var currentRound = 0;
var wins = 0;
var losses = 0;


//display wins and losses
$('#numberWins').html(wins);
$('#numberLosses').html(losses);


//display in div called random
$("#target").html(randomNumber);


//generate random number for each crystal
var green = Math.floor(Math.random() * ((12-1)+1) + 1);
var orange = Math.floor(Math.random() * ((12-1)+1) + 1);
var blue = Math.floor(Math.random() * ((12-1)+1) + 1);
var red = Math.floor(Math.random() * ((12-1)+1) + 1);




//start new round
function newRound(){
	randomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
	console.log(randomNumber);
	$("#target").html(randomNumber);
	green= Math.floor(Math.random()*((12-1)+1) + 1);
	orange= Math.floor(Math.random()*((12-1)+1) + 1);
	blue= Math.floor(Math.random()*((12-1)+1) + 1);
	red= Math.floor(Math.random()*((12-1)+1) + 1);
	currentRound = 0;
	$("#currentRound").html(currentRound);
  } 

//adds the wins to the userTotal
function youWin(){
alert("You're a winner!");
  wins++; 
  $('#numberWins').html(wins);
 
}
//addes the losses to the userTotal
function youLose(){
alert ("Sorry :( You lost!");
  losses++;
  $('#numberLosses').html(losses);
  
}



$("#green").on("click", function(){
	
	console.log("clicked green: ", green);
// currentRound = currentRound + green;
currentRound += green;


console.log("currentRound", currentRound);	
$("#currentRound").html(currentRound);

    //sets win/lose conditions
        if (currentRound == randomNumber){
          youWin();
          newRound();
        }
        else if ( currentRound > randomNumber){
          youLose();
          newRound();
        }   
});

$("#orange").on("click", function(){
	console.log("clicked orange: ", orange);

	currentRound += orange;

	console.log("currentRound", currentRound);
	$("#currentRound").html(currentRound);	

	//sets win/lose conditions
        if (currentRound == randomNumber){
          youWin();
          newRound();
        }
        else if ( currentRound > randomNumber){
          youLose();
          newRound();
        }   	
});

$("#blue").on("click", function(){
	console.log("clicked blue: ", blue);

	currentRound += blue;

	console.log("currentRound", currentRound);
	$("#currentRound").html(currentRound);	

	//sets win/lose conditions
        if (currentRound == randomNumber){
          youWin();
          newRound();
        }
        else if ( currentRound > randomNumber){
          youLose();
          newRound();
        }   	
});

$("#red").on("click", function(){
	console.log("clicked red: ", red);

	currentRound += red;

	console.log("currentRound", currentRound);
	$("#currentRound").html(currentRound);

	//sets win/lose conditions
        if (currentRound == randomNumber){
          youWin();
          newRound();
        }
        else if ( currentRound > randomNumber){
          youLose();
          newRound();
        }   		
});


