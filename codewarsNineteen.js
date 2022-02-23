//возврат центарльной буквы слова, если слово четное то возвращаем 2 центр-е буквы
function getMiddle(word) {
   return (word.length % 2 != 0) ? word[Math.floor(word.length / 2)] : `${word[(word.length / 2) - 1]}${word[word.length / 2]}`
}// если слово нечетное то выводим индекс (длина слова пополам - 1) иначе 2 индекса(длина слова пополам -1)+(длина слова пополам)

console.log(getMiddle('worlds'))//rl
console.log(getMiddle('world'))//r
