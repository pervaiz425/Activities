
var currentImage = 0;
var imgArr = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
var container = document.getElementById("content");
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

nextButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    currentImage++;
    if (currentImage > imgArr.length - 1) {
        currentImage = 0;
    }
    var swapFunc = swap;
    swapFunc();
});

previousButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    currentImage--;
    if (currentImage < 0) {
        currentImage = imgArr.length - 1;
    }
    var swapFunc = swap;
    swapFunc();
});

function swap()
{
    container.innerHTML = "<img src='slides/" + imgArr[currentImage] + `' class='fadeinimg' alt='slideshow image' id='myimage'>`;
}