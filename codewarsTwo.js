//493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digital_root(n) {
   if (n < 10) return n;
   sum = 0;
   for (e = 0, n = String(n); e < n.length; e++) {
      sum += +n[e];
   }
   return digital_root(sum);
}
alert(digital_root(456));
