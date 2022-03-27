// Remove First and Last Character


function removeChar(str) {
    let newStr = ''
    for (let i = 1; i < str.length - 1; i++) {
        newStr += str[i]
    }
 return newStr;
}

// or
// function removeChar(str) {
//     return str.slice(1, -1);
// }

console.log(removeChar('eloquent'))// 'loquen'
console.log(removeChar('country'))// 'ountr'
console.log(removeChar('person'))// 'erso'
