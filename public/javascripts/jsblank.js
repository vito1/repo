'use strict'
let input = document.getElementsByClassName("Input")[0]
let output = document.getElementsByClassName("Output")[0]

let fruits = ["Strawberry", "Banana","Mango"]
input.innerHTML += fruits

output.innerHTML += "Index of Banana is " + fruits.indexOf("Banana")
