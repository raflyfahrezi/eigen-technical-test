function getReversedString(str) {
  // Step 1. Use the split() method to return a new array
  const splitted = str.split('')

  // Step 2. Get the number at the end of the array
  const number = splitted[splitted.length - 1]

  // Step 3. Use the reverse() method to reverse the new created array
  const reversed = splitted
    .slice(0, splitted.length - 1)
    .reverse()
    .join('')

  // Step 4. Return the reversed string
  return reversed + number
}

// Step 5. Call the function
console.log(getReversedString('NEGIE1'))
console.log(getReversedString('NAHRAF2'))
