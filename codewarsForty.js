// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

//solution 1
var number = function (arr) {
   let result = []
   for (let i = 0, j = 1; i < arr.length; i++, j++) {
      result.push(`${j}${': '}${arr[i]}`)
   }
   return result
}

//solution 2
const number = arr => {
   return arr.map(function (item, index) {
      return (index + 1) + ": " + item;
   })
}

console.log(number(["a", "b", "c"]))// => ["1: a", "2: b", "3: c"]