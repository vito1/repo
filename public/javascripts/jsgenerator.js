'use strict'
//Aufgabe 1
let fruits = ['Apple', 'Banana']

document.getElementsByTagName("p")[0].innerHTML = fruits

//Aufgabe 2
let fruits1 = ['Apple', 'Banana']

document.getElementsByTagName("p")[1].innerHTML = fruits1[fruits.length - 1]

//Aufgabe 3
let fruits3 = ['Apple', 'Banana']

fruits3.forEach(function(index, element, array) {
	document.getElementsByTagName("p")[2].innerHTML += index + " " + element + "<br>"
})

//Aufgabe 4 
let fruits4 = ['Apple', 'Banana']
document.getElementsByTagName("p")[3].innerHTML += fruits4

fruits4.push('Orange')
document.getElementsByTagName("p")[4].innerHTML += fruits4