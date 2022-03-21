//Substring fun
// Complete the function that takes an array of words.
//
//   You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

//smart solution
const nthChar = (words) => words.reduce((previousValue, currentEl, index) => previousValue + currentEl[index], "")

//my solution
function nthChar(words) {
    if (words.length === 0) return ''
    let result = ''
    for (let n = 0, i = 0; i < words.length; n++, i++) {
        result += words[i][n]
    }
    return result
}

console.log((nthChar(['yoda', 'best', 'has'])))//yes