  //Simple JS SlideShow
  (function(){
  "use strict";
  
  const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
  let num = 0;
  document.getElementById("next").addEventListener("click", next);
  document.getElementById("previous").addEventListener("click", previous);
  function next() {
      var slider = document.getElementById("myimage");
      num++;
      if(num >= images.length) {
          num = 0;
      }
      slider.src = images[num];
  }
  function previous() {
      var slider = document.getElementById("myimage");
      num--;
      if(num < 0) {
          num = images.length-1;
      }
      slider.src = images[num];
  }
})();

//The functions decalred inside IIFE are not accessible from outside scope thatswhy we cant use them in html file
//For example we cant use onclick="next()" in html file
//So we have to use event listener in IIFE to call the functions
