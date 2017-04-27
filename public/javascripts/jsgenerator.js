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

//Aufgabe 5
let fruits5 = ["Apple", "Banana", "Orange"]
document.getElementsByTagName("p")[5].innerHTML += fruits5

fruits5.pop()
fruits5.shift()
fruits5.unshift("Strawberry")
fruits5.push("Mango")
document.getElementsByTagName("p")[6].innerHTML += fruits5

//Aufgabe 6
let fruits6 = ["Strawberry", "Banana", "Mango"]
document.getElementsByClassName("Input6")[0].innerHTML += fruits6


document.getElementsByClassName("Output6")[0].innerHTML += "Index of Banana is " + fruits6.indexOf("Banana")