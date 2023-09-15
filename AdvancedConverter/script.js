var convertType = "miles";
var heading = document.querySelector("h1");
var intro = document.querySelector("p");
var answerDiv = document.querySelector("#answer");
var form = document.querySelector("#convert");

document.addEventListener("keydown", (event) => {
    var key = event.code;
    if (key === "KeyK") {
        convertType = "kilometers";
        heading.innerHTML = "Kilometers to Miles Converter";
        intro.innerHTML =
            "Type in a number of kilometers and click the button to convert the distance to miles.";
    } else if (key === "KeyM") {
        convertType = "miles";
        heading.innerHTML = "Miles to Kilometers Converter";
        intro.innerHTML =
            "Type in a number of miles and click the button to convert the distance to kilometers.";
    }
});
//We can also represent this as:
//window.addEventListener("keydown", function(event) { ...
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let dist = parseFloat(document.getElementById("distance").value);
    if (dist) {
        if (convertType === "miles") {
            answerDiv.innerHTML =
                dist + " miles = " + (dist * 1.60934).toFixed(3) + " kilometers";
        } else {
            answerDiv.innerHTML =
                dist + " kilometers = " + (dist * 0.621371).toFixed(3) + " miles";
        }
    } else {
        answerDiv.innerHTML = "Please enter a valid number";
    }
});
//we can also represent this as: form.addEventListener("submit", function(event) { ...