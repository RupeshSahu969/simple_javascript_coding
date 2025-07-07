function Dublicate(arr) {
  
  let sum = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++)
       {
         if (arr[i] == arr[j]) {
          sum += arr[i] + " ";
      }
    }
  }
  console.log(sum);
}
let arr = [1, 2, 3, 4, 4, 3, 2, 1, 5, 6, 7]; 

Dublicate(arr);


// function findDuplicates(arr) {
//   let map = {};
//   let result = "";

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (map[num]) {
//       // If it’s the second time, only then add to result
//       if (map[num] === 1) {
//         result += num + " ";
//       }
//       map[num]++;
//     } else {
//       map[num] = 1;
//     }
//   }

//   console.log("Duplicate elements:", result);
// }

// let arr = [1, 2, 3, 4, 4, 3, 2, 1, 5, 6, 7];

// findDuplicates(arr);
