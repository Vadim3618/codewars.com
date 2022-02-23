//вернуть длину кратчайшего слова из предложения слов, разделенных только пробелами
function findShort(s) {
   s = s.split(' ')//созд массив(слова разделяем по пробелу)
   let len = Infinity//числовое значение бесконечность
   for (let i = 0; i < s.length; i++) {
      if (s[i].length < len) len = s[i].length//ищем слово с наименьшей длиной
   }
   return len
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'))//3
console.log(findShort('bitcoin world maybe knows perhaps'))//5
console.log(findShort('bitcoin take over on'))//2