//вернуть колво гласных из данной строки(2 способа)
function getCount(str) {
   let vowelsCount = 0;
   //    let strLower = str.toLowerCase();//исключаем ошибку при строке с заглавными буквами
   //    for (let i = 0; i < strLower.length; i++) {
   //       if (strLower[i] == 'a' || strLower[i] == 'e' || strLower[i] == 'i' || strLower[i] == 'o' || strLower[i] == 'u') {
   //          vowelsCount++;
   //       }
   //    }
   let arrVowels = ["a", "e", "i", "o", "u"];
   for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < arrVowels.length; j++) {
         if (str[i] == arrVowels[j]) vowelsCount++;
      }
   }
   return vowelsCount;
}
console.log(getCount('Hello World!'));

