'use strict'

let input = document.getElementsByClassName("Input")[0]
let output = document.getElementsByClassName("Output")[0]

let arr = [1,2,3,4,5,4,3,2,1]
input.innerHTML += arr

function findMax() {
	let max = 0
	arr.forEach(function(element) {
		output.innerHTML = ""
		let x = input.innerHTML.replace(element, "<span class='Red'>" + element + "</span>")
		output.innerHTML = x

	})
}
findMax()