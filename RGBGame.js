//number of squares being displayed
var numOfSquares = 6;
//start by making generating a random color list from the function "generatRandomColors
var colors = [];
//set the goal color
var pickedColor;

//selct all 6 of the squares, loop through, and set them to have a color background

//add click event that will check to see if the color matches the correct color, if it doesn't, we will change its background to black until correct color is picked

var squares = document.querySelectorAll(".square");
//change colorDisplay span in html
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//run upon page load
init();

function init(){
//	mode button event listener
	setUpModeButtons();
	setUpSquareListener();
	reset();
	

}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
     modeButtons[0].classList.remove("selected");
	 modeButtons[1].classList.remove("selected");
	this.classList.add("selected");	
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		
		reset();		
		
	});
}
}

function setUpSquareListener(){
	//	set up square listeners
	for(var i = 0; i < squares.length; i++){
//		add initial colors to square
		
		
//		add click listener to squares
		squares[i].addEventListener("click", function(){
//			grab color of clicked square
		var clickedColor = this.style.backgroundColor;	
//			compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "NICE!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
	
	reset();

}


function reset(){
	//generate all new colors
	 colors = generateRandomColors(numOfSquares);
	//pick a new random color
	 pickedColor = pickColor();
//	change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	
	 //change color of squares
	 for(var i = 0; i < squares.length; i++){
		 if(colors[i]){
			squares[i].style.display = "block"; 
			squares[i].style.backgroundColor = colors[i]; 
		 } else {
			 squares[i].style.display = "none";
		 }
		 
	 }
	 h1.style.backgroundColor = "steelblue";
	 
}


//easyBtn.addEventListener("click", function(){
//	hardBtn.classList.remove("selected");
//	easyBtn.classList.add("selected");
//	numOfSquares = 3;
//	colors = generateRandomColors(numOfSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	//hide the buttom squares
//	for(i = 0; i < squares.length; i++){
//		if(colors[i]){
//			squares[i].style.backgroundColor = colors[i];
//		} else {
//			squares[i].style.display = "none";
//		}
//	}
//});
//
//hardBtn.addEventListener("click", function(){
//	easyBtn.classList.remove("selected");
//	hardBtn.classList.add("selected");
//	numOfSquares = 6;
//	colors = generateRandomColors(numOfSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	//hide the buttom squares
//	for(i = 0; i < squares.length; i++){
//	squares[i].style.backgroundColor = colors[i];
//	squares[i].style.display = "block";
//	}
//	
//});

//logic for the reset button
 resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;

	
//function to change the colors once the correct one is chose
function changeColor(color){
//	loop throught all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//function to generate random color form the array

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//function to generate the random color list

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
	//get random color and push into the array
	  arr.push(randomColor());	
		
	}
	//return that array
	return arr;
}

//function to get a random color
function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green from 0 to 255
	var g = Math.floor(Math.random()* 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random()* 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}