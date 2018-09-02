var mapLink = document.querySelector(".modal-map-open");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close")
var overlay = document.querySelector(".modal-overlay");

mapLink.addEventListener('click', function(evt){
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
	overlay.classList.add("modal-overlay-show");
});

mapClose.addEventListener('click', function(evt){
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
});

overlay.addEventListener('click', function(evt){
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
			overlay.classList.remove("modal-overlay-show")
		}
	}
})