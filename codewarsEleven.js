function accum(str) {
   let strSplit = str.split('');//созд массив из строки
   let strMap = strSplit.map((word, i) => firstUp(Array(i + 2).join(word).toLowerCase())).join('-');
   return strMap;
}
let firstUp = (s) => s[0].toUpperCase() + s.slice(1)
// map - копирует символ i+2 раза, т.к. индекс массива начинается с 0, 
// приводим все к нижнему регистру, а потом с помощью firstUp() первый символ к верхнему

console.log(accum('abCd'));
console.log(accum('eidGk'));
console.log(accum('4ejG4hs'));


