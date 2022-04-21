// Tribonacci Sequence

function tribonacci(sign, n) {
    let a = sign[0]
    let b = sign[1]
    let c = sign[2]
    for (let i = 4; i <= n; i++) {
        let d = a + b + c
        sign.push(d)
        a = b
        b = c
        c = d
    }
    return n === 0 ? [] : n === 1 ? sign.slice(0, 1) : n === 2 ? sign.slice(0, 2) : sign
}

console.log(tribonacci([1, 1, 1], 10))//,[1,1,1,3,5,9,17,31,57,105])
console.log(tribonacci([0, 0, 1], 10))//,[0,0,1,1,2,4,7,13,24,44])
console.log(tribonacci([0, 1, 1], 10))//,[0,1,1,2,4,7,13,24,44,81])
console.log(tribonacci([1, 0, 0], 10))//,[1,0,0,1,1,2,4,7,13,24])
console.log(tribonacci([0, 0, 0], 10))//,[0,0,0,0,0,0,0,0,0,0])
console.log(tribonacci([1, 2, 3], 10))//,[1,2,3,6,11,20,37,68,125,230])
console.log(tribonacci([3, 2, 1], 10))//,[3,2,1,6,9,16,31,56,103,190])
console.log(tribonacci([3, 2, 1], 1))//,[3])
console.log(tribonacci([3, 2, 1], 0))//,[])

// Fibonacci Sequence

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}