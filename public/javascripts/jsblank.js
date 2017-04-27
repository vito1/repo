'use strict'

let fruits = ["Strawberry", "Banana", "Mango"]

document.getElementsByTagName("p")[0].innerHTML += fruits

document.getElementsByTagName("p")[1].innerHTML += "Index of Banana is " + fruits.indexOf("Banana")