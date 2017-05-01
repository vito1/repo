'use strict'
let fruits = ["Strawberry", "Banana", "Mango"]
let fruits2 = ["Apple", "Orange"]

document.getElementsByClassName("Input")[0].innerHTML += fruits + " " + fruits2


document.getElementsByClassName("Output")[0].innerHTML += fruits.concat(fruits2)