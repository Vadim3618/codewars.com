//обрезать число с конца до тех пор, пока оно не поделится без остатка на 3, иначе вернуть null
let prevMultOfThree = n => {
   let arr = [];
   while (n % 3 != 0) {
      arr = n.toString().split('')//n меняем тип с номер на стрроку,и каждую цифру добавляем в масиив новым элементом
      arr.pop();//удалил посл элем из массива
      n = +arr.join('');//склеил массив обратно в число
   }
   return n === 0 ? null : n;//по условию задачи если число изначально не удовл условию while ретурним null
}
console.log(prevMultOfThree(25));//null
console.log(prevMultOfThree(1244));//12

//не мое решение, но лучше моего
const prevMultOfThree = n => {
   if (n === 0) return null;
   if (n % 3 === 0) return n;
   return prevMultOfThree(+n.toString().slice(0, -1))
}