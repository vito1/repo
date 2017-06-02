let assert = require('assert')

let output = []
let arr = ['w', 'y', 'k', 'o', 'p']
let eArr = arr[Symbol.iterator]()
for (let letter of eArr) {
	output.push(letter)
}


assert.deepEqual(arr, output)