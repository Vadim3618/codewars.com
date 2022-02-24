//Given the triangle of consecutive odd numbers:
// 1
// 3      5
// 7      9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

//My solution
function rowSumOddNumbers(n) {
   let arr = []
   let start = (n * n) - (n - 1)//formula for counting the first number in stign odd numbers
   while (n > 0) {
      arr.push(start)
      start += 2
      n--
   }
   return arr.reduce((sum, item) => sum + item, 0)//sum every element at array
}

console.log(rowSumOddNumbers(1))//1
console.log(rowSumOddNumbers(2))//8
console.log(rowSumOddNumbers(3))//27
console.log(rowSumOddNumbers(4))//64
console.log(rowSumOddNumbers(5))//125
console.log(rowSumOddNumbers(6))//216
console.log(rowSumOddNumbers(7))//343
console.log(rowSumOddNumbers(8))//512

//solution 2 (smart)
let rowSumOddNumbers = n => n ** 3









