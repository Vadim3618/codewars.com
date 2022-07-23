// Simple Fun #170: Sum Groups

// Task
// Given an array of integers, sum consecutive even numbers and consecutive odd numbers. Repeat the process while it can be done and return the length of the final array.
//
//     Example
// For arr = [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]
//
// The result should be 6.
//
//     [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]  -->
// 2+2+6       0+2+0     5+5+7+7       3+3+9
//     [2, 1,   10,    5,    2,        24,     4,   15   ] -->
// 2+24+4
//     [2, 1,   10,    5,             30,           15   ]
// The length of final array is 6

//my solution
function sumGroups(arr) {
    // debugger
    let flag = true
    while (flag) {
        flag = false
        for (let i = 0; i < arr.length - 1; i++) {
            let cut = 0//накидываем сколько нужно вырезать символов в методе splise
            let sum = arr[i]//сумма вырезанных элементов
            if (arr[i] % 2 === 0) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (!(arr[j] % 2)) {
                        cut++
                        sum += arr[j]
                        flag = true
                        if (j === arr.length - 1) {
                            arr.splice(i, cut + 1, sum)
                            break
                        }
                    } else {
                        if (cut) arr.splice(i, cut + 1, sum)
                        break
                    }
                }
            } else {
                for (let k = i + 1; k < arr.length; k++) {
                    if (arr[k] % 2) {
                        cut++
                        sum += arr[k]
                        flag = true
                        if (k === arr.length - 1) {
                            arr.splice(i, cut + 1, sum)
                            break
                        }
                    } else {
                        if (cut) arr.splice(i, cut + 1, sum)
                        break
                    }
                }
            }
        }
    }
    return arr.length
}

console.log(sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]))//6

console.log(sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 3, 3, 3, 9, 2]))//5

console.log(sumGroups([1]))//1

console.log(sumGroups([2]))//1

console.log(sumGroups([1, 2]))//2

console.log(sumGroups([1, 1, 6, 6]))//1