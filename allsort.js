// bubble sort
// // input nums= [29,14,10,37,14]= [10,14,14,29,37]
// time complexity=o(n^2)
// space complexity= o(1)

function BubbleSort(arr){
    let m=arr.length;

    for(let i=0; i<m; i++)
    {
        for(let j=0; j<m-i-1; j++)
        {
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

// console.log(BubbleSort([29,14,10,37,14])) //[10,14,14,29,37]



/// SelectionSort 

// function SelecttionSort(arr){
//     const n=arr.length;

//     for(let i=0; i<n-1; i++)
//     {
//         let minIndex=i;
//         for(let j=i+1; j<n; j++){
//             if(arr[j] <arr[minIndex]){
//                 minIndex=j;
//             }
//         }
//         if(minIndex !== i){
//             [arr[i],arr[minIndex]] =[arr[minIndex],arr[i]];
//         }
//     }
//     return arr

// }

// console.log(SelecttionSort([29,14,10,37,14])) // //[10,14,14,29,37]


// Ques 3: Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14,33,8,11] ----->>>>>  Output: [8,10,11,14,14,29,33,37]

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // n
    const key = arr[i]; 
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // n
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Space Complexity = O(1)