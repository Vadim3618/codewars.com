//In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

function getLargerNumbers(a, b) {

    var newArray = [];

    for ( i=0; i<a.length; i++) {
        newArray.push( Math.max( a[i], b[i] ) );
    }

    return newArray;
}


let arr1 = [13, 64, 15, 17, 88]
let arr2 = [23, 14, 53, 17, 80]

console.log(getLargerNumbers(arr1, arr2))// Returns [23, 64, 53, 17, 88]

