//true если число квадратное
var isSquare = function (n) {
   if (n >= 0 && Math.sqrt(n) % 1 === 0) return console.log(true);
   else return console.log(false);
}
isSquare(25);
isSquare(0);
isSquare(4);
isSquare(16);
isSquare(26);//false