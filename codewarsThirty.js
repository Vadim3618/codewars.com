// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//solution 1
function openOrSenior(data) {
   let result = []
   for (let i = 0; i < data.length; i++) {
      (data[i][0] >= 55 && data[i][1] > 7) ? result.push('Senior') : result.push('Open')
   }
   return result
}

// solution 2
function openOrSenior(data) {
   return data.map(([age, rank]) => (age >= 55 && rank > 7) ? 'Senior' : 'Open')
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))