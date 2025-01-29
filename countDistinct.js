let arr = [1, 2, 2, 2, 3, 4, 5,5];

function countDuplicateDistinct(arr) {

  let obj = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  
  for (let key in obj) {
    if (obj[key] > 1) {
      count++;
    }
  }


  console.log(count);
}

countDuplicateDistinct(arr);
