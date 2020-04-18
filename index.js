var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors =generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}); 

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textConten = pickedColor;
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i]
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new colors from array
    pickedColor = pickColor();
    //change color display to match picked color
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i =0; i < squares.length ; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

//add initial colors to squares
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of picked square
        var clickedColor = this.style.background;
        //compare with the var pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!";
            changeColors(clickedColor);
            resetButton.textContent = "Play Again?"
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "try again";
        }
    });
}
function changeColors(color) {
    //loop through all the colors
    for (var i = 0; i < squares.length; i++) {
        //change all the colors to given color
        squares[i].style.background = color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an arr
    var arr = []
    //repeat num of times
    for (var i = 0; i < num; i++) {
        //get random colors and push into arr
        arr.push(randomColor())
    }
    //return arr
    return arr;
}

function randomColor() {
    //pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
