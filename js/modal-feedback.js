var feedbackLink = document.querySelector(".modal-feedback-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackName = feedbackPopup.querySelector("[name=name]");
var feedbackEmail = feedbackPopup.querySelector("[name=email]");
var feedbackMessage = feedbackPopup.querySelector("[name=message]");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

feedbackLink.addEventListener('click', function(evt){
	evt.preventDefault();
	feedbackPopup.classList.add("modal-show");
	feedbackName.focus();
	overlay.classList.add("modal-overlay-show");
});

feedbackForm.addEventListener("submit", function(evt){
			if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value){
			evt.preventDefault();
			feedbackPopup.classList.remove("modal-error");
			feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
			feedbackPopup.classList.add("modal-error"); 
			}	
});

feedbackClose.addEventListener('click', function(evt){
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
});

overlay.addEventListener('click', function(evt){
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode == 27) {
		if (feedbackPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			feedbackPopup.classList.remove("modal-show");
			overlay.classList.remove("modal-overlay-show")
		}
	}
})


