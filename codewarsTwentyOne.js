//отфильровать и вернуть массив только с number
function filter_list(l) {
   let filtered = []
   for (let i = 0; i < l.length; i++) {
      if (typeof l[i] == 'number') filtered.push(l[i])
   }
   return filtered
}

console.log(filter_list([1, 'wdc', '', 3, 34, '35',]))

//решение через метод filter
function filter_list(l) {
   return l.filter(item => typeof item == 'number')
//filter создает новый массив с item-ами у которых тру условие
}