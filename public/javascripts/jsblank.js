'use strict'

let fruits = ["Strawberry", "Banana", "Mango"]
document.getElementsByClassName("Input")[0].innerHTML += fruits

document.getElementsByClassName("Output")[0].innerHTML += "Output Index of Banana is " + fruits.indexOf("Banana")