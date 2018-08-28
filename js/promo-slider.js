var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
var previous =  document.querySelector(".slide-button-back");
var next =  document.querySelector(".slide-button-next");

function pauseSlideshow() {
    clearInterval(slideInterval);
}

function nextSlide() {
    goToSlide(currentSlide+1);
}
 
function previousSlide() {
    goToSlide(currentSlide-1);
}
 

function goToSlide(n) {
    slides[currentSlide].classList.remove("showing");
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].classList.add("showing")
}

 
next.onclick = function() {
	pauseSlideshow();
    nextSlide();
};

previous.onclick = function() {
	pauseSlideshow();
    previousSlide();
};