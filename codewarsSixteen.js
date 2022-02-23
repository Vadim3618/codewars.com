//подсчет гласных
function getCount(str) {
   let vowelsCount = 0;//счетчик гласных
   let arrVowels = ['a', 'e', 'i', 'o', 'u']//список гласных
   for (let i = 0; i < str.length; i++) {
      if (arrVowels.includes(str[i].toLowerCase())) vowelsCount++//+1 если буква есть в arrVowels
   }
   return vowelsCount;
}

console.log(getCount('SemtEmber'))

//более прстой способ
function getCount(str) {
   return (str.match(/[aeiou]/ig)||[]).length;
 }