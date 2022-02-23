//возвести в квадрат каждую цифру числа и соединить их
function squareDigits(num) {
   let str = num.toString()//'9119'
   let arr = str.split('')//['9','1','1','9']
   let arrSquare = arr.map(item => item * item)//[81, 1, 1, 81]
   str = arrSquare.join('')//'811181'
   return +str
}

console.log(squareDigits(9119))