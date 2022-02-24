// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//my solution
const binaryArrayToNumber = arr => {
   arr = arr.reverse()
   let sum = 0//accumulator
   let eps = 0//degree
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) sum += (arr[i] + 2 ** eps - 1)
      eps++//increase degree
   }
   return sum
}

console.log(binaryArrayToNumber([1, 1, 1, 1]))//15