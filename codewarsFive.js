//подсчет колва ошибок и колва символов(условие:буквы посл m - error)
function printerError(s) {
   if (s == null) {
      return errorInput
   } else {
      var error = 0;
      for (let i = 0; i < s.length; i++) {
         if (s[i] > 'm') error += 1
      }
   }
   return error + '/' + s.length;
}
console.log(printerError("aagdyjkhlitytrwsgdfkuhmmxyz"));