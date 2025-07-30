// Open and close the contact form
function openForm() {
    document.getElementById("my-form").style.display = "block";
}

function closeForm() {
    document.getElementById("my-form").style.display = "none";
}

// Setup to display the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// Changes the slide when the left or right arrows are clicked
function plusSlide(n) {
    showSlides(slideIndex += n);
}

// Change the slide when one of the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Controls what image of slideshow to show and updates the slideshow dots to
// reflect which image is being shown
function showSlides(n) {
    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1;} // reset slideIndex if it is greater than slideshow length
    if (n < 1) {slideIndex = slides.length}; // reset slideIndex if it goes below one

    // Loop through the slides and set to not display
    // and removes "active" class from all dots
    for (var i=0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the image in the slideshow per slideIndex
    // along with setting the dot associtated with the image to "active"
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}