var buttonDelivery = document.querySelector(".services-button-delivery");
var buttonWarranty = document.querySelector(".services-button-warranty");
var buttonCredit = document.querySelector(".services-button-credit");
var blockDelivery = document.querySelector(".service-info-delivery");
var blockWarranty = document.querySelector(".service-info-warranty");
var blockCredit = document.querySelector(".service-info-credit");

	buttonDelivery.addEventListener("click", function(evt){
	evt.preventDefault();
	buttonCredit.classList.remove("services-button-current");
	buttonWarranty.classList.remove("services-button-current");
	buttonDelivery.classList.add("services-button-current");

	blockWarranty.classList.remove("service-info-current");
	blockCredit.classList.remove("service-info-current");
	blockDelivery.classList.add("service-info-current");
	})

	buttonWarranty.addEventListener("click", function(evt){
	evt.preventDefault();
	buttonDelivery.classList.remove("services-button-current");
	buttonCredit.classList.remove("services-button-current");
	buttonWarranty.classList.add("services-button-current");

	
	blockCredit.classList.remove("service-info-current");
	blockDelivery.classList.remove("service-info-current");
	blockWarranty.classList.add("service-info-current");
	})

	buttonCredit.addEventListener("click", function(evt){
	evt.preventDefault();
	buttonDelivery.classList.remove("services-button-current");
	buttonWarranty.classList.remove("services-button-current");
	buttonCredit.classList.add("services-button-current");

	blockWarranty.classList.remove("service-info-current");
	blockDelivery.classList.remove("service-info-current");
	blockCredit.classList.add("service-info-current");
	})