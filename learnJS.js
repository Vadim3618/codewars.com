function unique(arr) {
   let setUnique = new Set()
   for (let i of arr) setUnique.add(i)
   return setUnique
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
   "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

console.log(unique(values))

function aclear(arr) {
   let set = new Set()
   for (let el of arr) {
      let sorted = el.toLowerCase().split('').sort().join('')
      set.add(sorted)
   }
   return set
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
console.log(aclear(arr))