//является ли строка изограммой (без повотряющихся букв) регистр не важен
function isIsogram(word) {
   let strLetters = ''//строка для добавления уникальных букв
   if (word == '') return true//''-изограмма по правилу задачи
   for (let i = 0; i < word.length; i++) {
      if (!strLetters.includes(word[i].toLowerCase())) strLetters += word[i]
      //сравниваем букву с буквами в strLetters, если её там нет, то добавляем и её
      else return false
   }
   return true
}
console.log(isIsogram('qwertyuiop;lkjhgfdsa'))//true
console.log(isIsogram('qwertyT'))//false
console.log(isIsogram(''))//true


