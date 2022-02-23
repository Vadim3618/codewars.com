// функция, которая принимает строку и возвращает новую строку, в которой удалены все гласные
function disemvowel(str) {
   let arrVowels = ['a', 'e', 'i', 'u', 'o']
   let newStr = ''//создаем пустую строку чтоб в нее накидывать только согласные
   for (let i = 0; i < str.length; i++) {
      if (!arrVowels.includes(str[i].toLowerCase())) newStr += str[i]//с помощью += накидываем в согласные в newStr
   }
   return newStr
}
console.log(disemvowel('Hello world; HeELLO WORLD'))//Hll wrld; HLL WRLD
