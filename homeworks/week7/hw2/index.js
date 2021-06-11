document
.querySelector(".faq-block")
.addEventListener("click", function(e) {
	const element = e.target.closest(".faq-item")
	if (element) {
		element.classList.toggle("faq-item--hide")
	}
})