//Largest 5 digit number in a series

//Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer.

function solution(digits) {
    let result = 0
    for (let i = 0; i < (digits.length - 4); i++) {
        let a = digits.slice(i, i + 5)
        if (+a > result) result = +a
    }

    return result
}

let number = "1234567898765"
console.log(solution(number))//98765
