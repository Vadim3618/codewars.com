//содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр
function XO(str) {
   let x = 0
   let o = 0
   for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() == 'x') x++
      if (str[i].toLowerCase() == 'o') o++
   }
   if (x == o) return true
   else return false
}


console.log(XO('oxox'))//true
console.log(XO('oxoxe'))//true
console.log(XO('xooxx'))//false
console.log(XO(''))//true по правилу задания

//второе решение через массив и метод filter
let XO = str => {
   str = str.toLowerCase().split('');
   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
 }//метод filter создает новый массив с тру значениеми(x === 'x') и (x === 'o') и сравнивает их длину


