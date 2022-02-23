//добавлять i (делать из Phone - iPhone) c тремя условиями
// Слово не должно начинаться с буквы «I», например Inspire .
// Количество гласных не должно быть больше или равно количеству согласных, например East obkb Peace . («у» считается согласной)
// Первая буква не должна быть строчной, например, road

function i(word) {
   let vowels = ['a', 'e', 'i', 'o', 'u']
   if (word === '' || word[0].toLowerCase() === 'i' || word[0] === word[0].toLowerCase()) return 'invalid word';
   let arr = word.split('')//[W,o,r,d]
   let count = 0;//в счетчик закидывается колво гласныхк
   for (let i = 0; i < arr.length; i++) {
      if (vowels.includes(arr[i].toLowerCase())) count++
   }
   if (count >= (arr.length / 2)) return 'invalid word'
   arr.unshift("i")
   let str = arr.join('')
   return str
}

console.log(i('World'))
console.log(i('invalid word'))
console.log(i('East'))
