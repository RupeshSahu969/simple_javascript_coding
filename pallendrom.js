let p = "asddsa";

function Paildrom(p) {
  
  let bag = "";

  for (let i = p.length - 1; i >= 0; i--) 
    {
    bag += p[i];
  }

  if (p == bag) {
    console.log("paildrom");
  } else {
    console.log("not paildrom");
  }
  
} 

Paildrom(p);
 

// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
  
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
