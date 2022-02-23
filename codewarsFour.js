// function highAndLow(numbers) {
//    let arrNum = numbers.split(' ')
//    let max = +arrNum[0];
//    for (let i = 0; i < arrNum.length; i++) {
//       if (max < +arrNum[i]) max = +arrNum[i];
//    }
//    let min = +arrNum[0];
//    for (let e = 0; e < arrNum.length; e++) {
//       if (min > +arrNum[e]) min = +arrNum[e];
//    }
//    console.log(`'${max} ${min}'`);
// }
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

function highAndLow(numbers) {
   let arrNum = numbers.split(' ');
   let sorted = arrNum.sort(function (a, b) {
      return +b - +a;
   });
   return `${sorted[0]} ${sorted[sorted.length - 1]}`
}

