var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255 , 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay")

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
            alert("correct");
        } else {
            this.style.background = "#232323";
        }
    });
}

