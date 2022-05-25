// Persistent Bugger.

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let result = 0
    while (String(num).length > 1) {
        result++
        let arrNum = String(num).split('')
        num = arrNum.reduce((acc, curr) => {
            return acc * curr
        })
    }
    return result
}

console.log(persistence(999)) //4
console.log(persistence(39)) //3
console.log(persistence(4))//0