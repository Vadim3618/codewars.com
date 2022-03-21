//Nice Array
//A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// smart solution:
function isNice(arr) {
    if (arr.length === 0) return false
    return arr.every(number => arr.includes(number + 1) || arr.includes(number - 1))
}

//my solution
function isNice(arr) {
    if (arr.length === 0) return false
    let result = 0
    for (let i of arr) {
        for (let j of arr) {
            if (i + 1 === j || i - 1 === j) {
                result++
                break
            }
        }
    }
    return (result === arr.length)
}

console.log(isNice([2, 10, 9, 3]))//true
console.log(isNice([3, 4, 5, 7]))//false
