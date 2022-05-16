// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
// that occur more than once in the input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    const arr = {}
    if (text === '') return 0
    for (let i = 0; i < text.length; i++) {
        text[i].toLowerCase() in arr ? arr[text[i].toLowerCase()] += 1 : arr[text[i].toLowerCase()] = 1
    }
    return Object.values(arr).reduce((acc, curr) => {
        return curr > 1 ? ++acc : acc
    }, 0)
}

console.log(duplicateCount(""))// 0
console.log(duplicateCount("abcde"))// 0
console.log(duplicateCount("aabbcde"))// 2
console.log(duplicateCount("aabBcde"))// 2
console.log(duplicateCount("Indivisibility"))// 1
console.log(duplicateCount("Indivisibilities"))// 2