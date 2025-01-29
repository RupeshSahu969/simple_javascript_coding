let n = 5; // Number of rows

function generatePattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = ""; // Reset the string for each row
    for (let j = 1; j <= i; j++) {
      str += "*"; // Add '*'
      if (j < i) {
        str += "0"; // Add '0' after '*' except for the last column
      }
    }
    console.log(str); // Print the current row
  }
}

generatePattern(n);


// output:
// *
// *0
// *0*0
// *0*0*0
// *0*0*0*0
