const MATRIX = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]

const MATRIX2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const getDiagonal = (matrix) => {
  // Step 1. Initialize variables
  let diagonal1 = 0
  let diagonal2 = 0

  // Step 2. Loop through the matrix for the first diagonal
  for (let i = 0; i < matrix.length; i++) {
    diagonal1 += matrix[i][i]
  }

  // Step 3. Loop through the matrix for the second diagonal
  for (let i = matrix.length - 1; i >= 0; i--) {
    diagonal2 += matrix[i][matrix.length - 1 - i]
  }

  // Step 4. Return the sum of the two diagonals
  return diagonal1 - diagonal2
}

// Step 5. Run the function
console.log(getDiagonal(MATRIX))
console.log(getDiagonal(MATRIX2))
