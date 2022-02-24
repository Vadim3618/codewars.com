//Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

//my solution
function oddOrEven(array) {
   let sum = 0
   for (let i of array) {
      sum += i
   }
   return (sum % 2 == 0) ? "even" : "odd"
}


// solution 2
let oddOrEven = arr => {
   return arr.reduce((sum, item) => sum + item, 0) % 2 == 0 ? "even" : "odd"
}

console.log(oddOrEven([1024, 1, 2]))
console.log(oddOrEven([1024, 1, 3]))