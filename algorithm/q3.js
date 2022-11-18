const INPUT = ['xc', 'dz', 'bbb', 'dz']
const QUERY = ['bbb', 'ac', 'dz']

const INPUT2 = ['ab', 'ab', 'abc']
const QUERY2 = ['ab', 'abc', 'bc']

const countWords = (input, query) => {
  // Step 1. Create empty array
  const result = []

  // Step 2. Loop through the query and input
  for (let i = 0; i < query.length; i++) {
    let count = 0

    // Step 3. Check if the query is in the input
    for (let j = 0; j < input.length; j++) {
      if (query[i] === input[j]) {
        count++
      }
    }

    // Step 4. Push the count to the result
    result.push(count)
  }

  // Step 5. Return the result
  return result
}

// Step 6. Call the function
console.log(countWords(INPUT, QUERY))
console.log(countWords(INPUT2, QUERY2))
