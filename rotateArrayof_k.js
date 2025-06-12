
// Rotate an array of size n by k elements
// Example:
// // input : num =[1, 2, 3, 4, 5, 6, 7], k = 3
// // output: [5, 6, 7, 1, 2, 3, 4]

// // input num=[-1,-100, 3, 99], k = 2
// // output: [3, 99, -1, -100]

function rotateArray(num, k) {
  let size = num.length;

  if (size > k) {
    k = k % size;
  }

  reverse(num, 0, size - 1);
  reverse(num, 0, k - 1);
  reverse(num, k, size - 1);

  return num;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

function reverse(num, left, right) {
  while (left < right) {
    let temp = num[left];
    num[left++] = num[right];
    num[right--] = temp;
  }
}

// function rotateArray(num,k){

//     let size=num.length;

//     if(size > k){
//         k=k%size
//     }

//     let temp = num.slice(size-k);
//     for(let i=size-1; i>=k; i--){
//         num[i] = num[i-k];
//     }
//     for(let i=0; i<k; i++){
//         num[i] = temp[i];
//     }
//     return num;

// }

// console.log(rotateArray([-1,-100,3,99],2))
