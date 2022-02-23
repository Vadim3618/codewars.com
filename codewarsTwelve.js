//определить век по году
function century(year) {
   let century = Math.floor((year - 1) / 100) + 1;
   return century;
}

console.log(century(1805));//19
console.log(century(1900));//19
console.log(century(1799));//18