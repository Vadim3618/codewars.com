//принимает 2 строковых числа, складываем, ретурним результат тоже в строке
function sumStr(a, b) {
   let sum = +a + +b;
   return String(sum);
}
console.log(sumStr('-5', '3'));
