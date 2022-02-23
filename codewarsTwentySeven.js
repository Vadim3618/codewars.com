//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function getSum(a, b) {
   let tmp = 0
   if (a < b) for (a; a <= b; a++) tmp += a
   else for (b; a >= b; a--) tmp += a
   return tmp
}

console.log(getSum(-1, 3))//5
console.log(getSum(3, 0))//6

// solution while
// function getSum(a, b) {
//    tmp = 0
//    if (a < b) while (a <= b) tmp += a++
//    else while (a >= b) tmp += a--
//    return tmp
// }