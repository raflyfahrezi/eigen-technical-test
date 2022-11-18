const getLongestWord = (str) => {
  // Step 1. Use the split() method to return a new array
  const words = str.split(' ')

  // Step 2. Use the reduce() method to compare the lengths of the words
  const sorted = words.sort((a, b) => b.length - a.length)

  // Step 3. Return the longest word
  return { text: sorted[0], length: sorted[0].length }
}

// Step 4. Call the function
const word1 = getLongestWord('Saya sangat senang mengerjakan soal algoritma')
console.log(`${word1.text} with ${word1.length} characters`)

const word2 = getLongestWord(
  'Saya sangat senang mengerjakan soal tentang kepemimpinan'
)
console.log(`${word2.text} with ${word2.length} characters`)
