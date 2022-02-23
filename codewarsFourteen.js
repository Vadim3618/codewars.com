//последняя выжившая буква в строке
function lastSurvivor(letters, coords) {
   let arrLetters = letters.split('')//типизируем в массив(где элемент каждая буква)
   while (coords.length > 0) {
      let temp = coords.shift()//сохр в переменную превый удаленный элем из coords
      arrLetters.splice(temp, 1)//сплайсим arrLetters с позиции temp с интервалом 1 элемент
   }
   return console.log(arrLetters[0])
}

console.log(lastSurvivor("zbk", arr = [1, 0]))//k

//второй способ через for
function lastSurvivor(letters, coords) {
   letters = letters.split('')//типизируем в массив(где элемент каждая буква)
   for (let i = 0; i < coords.length; i++) {//перебираем элементы coord
      letters.splice(coords[i], 1)//сплайсим letters с позиции coords[i] с интервалом 1
   }
   return letters[0]
}





