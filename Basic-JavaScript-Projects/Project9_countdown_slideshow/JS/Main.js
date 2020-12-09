var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) { 
  var i;
  var slides = document.getElementsByClassName("mySlides");   // selects all elements with class "mySlides"
  var dots = document.getElementsByClassName("dot");          // selects all elements with class "dots"

  if (n > slides.length) {slideIndex = 1}      // if n is greater than number of slides, set index to 1
                                               // note: slideIndex must be declared

  console.log('display Index: ', slideIndex);        //not needed- just confirming slide index

  if (n < 1) {slideIndex = slides.length}     // if n is less than 1, set index to total number of slides

  console.log('display Length: ', slides.length);  // not needed - just confirming the value of the slide length ( 3 ) 

  for (i = 0; i < slides.length; i++) {        // loops over slides, setting the display to none,  ( essentially hiding them )
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";       // display the slide at current slide index, subtract one to make the number index 0
  dots[slideIndex-1].className += " active";
}


