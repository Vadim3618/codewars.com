//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)

//my solution
function solution(str, ending) {
   let j = str.length - 1
   let i = ending.length - 1
   while (i >= 0) {
      if (ending[i] === str[j]) {
         i--
         j--
      } else return false
   }
   return true
}

//solution 2 
// function solution(str, ending){
//    return str.endsWith(ending);
//  }

console.log(solution('abcde', 'cde'))//true
console.log(solution('abcde', 'abc'))//false



