// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a, b) {
   let num = a + b
   let binary = (num % 2).toString()
   for (; num > 1;) {
      num = parseInt(num / 2)
      binary = (num % 2) + (binary)
   }
   return binary
}
console.log(addBinary(5, 9))

// solution 2 (smart)
// return (a + b).toString(2)