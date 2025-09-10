function merge(arr1,arr2){

let i=0; ;
let j=0;
let merngarray= new Array(arr1.length+arr2.length);
let k=0;

 while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) 
      {
      merngarray[k] = arr1[i];
      i++;
    } else {
      merngarray[k] = arr2[j];
      j++;
    }
    k++;
}
while (i < arr1.length) {
    merngarray[k] = arr1[i];
    i++;
    k++;
  }

  // If there are any remaining elements in arr2
  while (j < arr2.length) {
    merngarray[k] = arr2[j];
    j++;
    k++;
  }
return merngarray;

}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

const result = merge(arr1, arr2);
console.log(result);// [1, 2, 3, 4, 5, 6, 7, 8, 9]