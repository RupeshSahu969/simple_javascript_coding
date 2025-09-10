// Step 1: Store the numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Step 2: Initialize an empty matrix with fixed dimensions
const matrix = [
    [0, 0, 0], // Row 1
    [0, 0, 0], // Row 2
    [0, 0, 0], // Row 3
];

// Step 3: Fill the matrix in the required column-to-row format
for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        matrix[row][col] = numbers[col * 3 + row]; // Rearrange numbers
    }
}

// Step 4: Print the matrix in the desired format
for (let row = 0; row < 3; row++) 
    {
    let rowString = ""; 
    for (let col = 0; col < 3; col++) {
        rowString += matrix[row][col] + "   "; 
    }
    console.log(rowString.trim()); // Print the row
}

// 1 4 7
// 2 5 8
// 3 6 9  output

