function Prime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log("not Prime");
      return;
    }
  }

  console.log("Prime");
}

let n = 7;
Prime(n); // Output: Prime


// //Print  this prime number 2 se 20 
// function printPrimes(start, end) {
//   for (let num = start; num <= end; num++) {
//     let isPrime = true;

//     if (num < 2) {
//       isPrime = false; 
//     }

//     for (let i = 2; i <= num - 1; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break; // Not prime, exit early
//       }
//     }

//     if (isPrime) {
//       console.log(num);
//     }
//   }
// }

// printPrimes(2, 20);

