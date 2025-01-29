

function dubliObject(arr) {
  let unique = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      unique[unique.length] = arr[i];
      obj[arr[i]] = true;
    }
  }
  console.log(unique);
}


let arr = [1, 2, 3, 4, 4, 3, 2, 1, 5, 6];
dubliObject(arr);
