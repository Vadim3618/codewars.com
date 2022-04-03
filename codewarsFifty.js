// Stop gninnipS My sdroW!
//   Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//   Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords = (str) => {
    let arr = str.split(' ')//["Hey","fellow","warriors"]
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].length > 4 ? newArr.push(arr[i].split('').reverse().join('')) : newArr.push(arr[i])
    }
    return newArr.join(' ')
}

// const spinWords = (str) => {
//     return str.split(' ').map(word => {
//         return word.length > 4 ? word.split('').reverse().join('') : word
//     }).join(' ')
// }

// const spinWords = (str) => {
//     return str.split(' ').map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ')
// }

console.log(spinWords("Hey fellow warriors"))//"Hey wollef sroirraw"
console.log(spinWords("You are almost to the last test"))//"You are tsomla to the last test"
