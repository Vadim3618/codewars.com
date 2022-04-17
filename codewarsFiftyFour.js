// You Got Change?
// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:
//   array[0] ---> represents $1 bills
// array[1] ---> represents $5 bills
// array[2] ---> represents $10 bills
// array[3] ---> represents $20 bills
// array[4] ---> represents $50 bills
// array[5] ---> represents $100 bills
// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.
// const arr = [100, 50, 20, 10, 5, 1]

const giveChange = (amount) => (
  arr.map(el => {
      let result = Math.trunc(amount / el)
      amount %= el
      return result
  }).reverse()
)

// head-on solution
// function giveChange(amount) {
//     const arr = []
//     arr.unshift(Math.trunc(amount / 100))
//     const a100 = amount % 100
//     arr.unshift(Math.trunc(a100 / 50))
//     const a50 = a100 % 50
//     arr.unshift(Math.trunc(a50 / 20))
//     const a20 = a50 % 20
//     arr.unshift(Math.trunc(a20 / 10))
//     const a10 = a20 % 10
//     arr.unshift(Math.trunc(a10 / 5))
//     const a5 = a10 % 5
//     arr.unshift(Math.trunc(a5 / 1))
//     return arr
// }

console.log(giveChange(365)) // => [0,1,1,0,1,3]
console.log(giveChange(217)) // => [2,1,1,0,0,2]
