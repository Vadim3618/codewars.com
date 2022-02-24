// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.
//my solution
function addBinary(a, b) {
   let num = a + b
   let binary = []
   while (num > 0) {
      if (num % 2 == 1) binary.unshift(1)//push 1 to begining array
      else binary.unshift(0)//push 0 in started array
      num = Math.floor(num / 2)//remove remainder
   }
   return binary.join('')//output sting
}

console.log(addBinary(5, 9))

// solution 2 (smart)
// function addBinary(a, b) {
//    return (a + b).toString(2)
// }