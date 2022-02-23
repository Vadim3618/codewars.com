// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
   let newDNA = ''
   for (let i = 0; i < dna.length; i++) {
      (dna[i] == "A") ? newDNA += 'T' : (dna[i] == "T") ? newDNA += "A" : (dna[i] == "G") ? newDNA += 'C' : newDNA += 'G'
   }
   return newDNA
}
console.log(DNAStrand('ATGC'))
