let students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 88
    },
    {
        name: 'John',
        age: 32,
        isMarried: false,
        scores: 100
    },
    {
        name: 'Alex',
        age: 42,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Bob',
        age: 20,
        isMarried: false,
        scores: 120
    },
]

console.log(students.map(s => s.name))
console.log(myMap(students, s => s.name))//how work method .map
function myMap(arr, callBack) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callBack(arr[i])
    }
    return newArr
}

console.log(students.filter(s => s.scores >= 100))
console.log(myFilter(students, s => s.scores >= 100))//how work method .filter
function myFilter(arr, callBack) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) newArr.push(arr[i])
    }
    return newArr
}

 console.log(students.find(s => s.name === 'Bob'))//return first Bob
 console.log(myFind(students, s => s.name === "Bob"))//how work method .find
 function myFind(arr, callBack) {
     for (let i = 0; i < arr.length; i++) {
         if (callBack(arr[i])) return arr[i]
     }
 }

console.log(students.findIndex(s => s.name === 'Alex'))//return index first Alex
console.log(myFindIndex(students, s => s.name === "Alex"))//how work method .findIndex
function myFindIndex(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) return i
    }
}


console.log(students.map(s => s.name))
console.log(myMaps(students, s => s.name === "Alex"))





