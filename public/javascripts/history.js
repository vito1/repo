"use strict"
let info = document.getElementsByClassName("Info")[0]
let intro = document.getElementsByClassName("IntroSection")[0]

info.addEventListener("click", function() {
	console.log("hi")
	intro.classList.toggle("visible")
})