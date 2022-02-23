//Your task is to write a function maskify, which changes all but the last four characters into '#'.git
function maskify(cc) {
   if (cc.length < 5) return cc
   else {
      arr = cc.split('')//[...'9', '3', '5', '6', '1', '6']
      let arrSlice = arr.slice(arr.length - 4, arr.length)//['5', '6', '1', '6']оставил последние 4 символа
      let str = ''
      for (let i = 0; i < cc.length - 4; i++) str += '#'//'...#######'
      return str + arrSlice.join('')
   }
}

console.log(maskify("4556364607935616"))

// maskify("4556364607935616") == "############5616"
// maskify("64607935616") == "#######5616"
// maskify("1") == "1"
// maskify("") == ""