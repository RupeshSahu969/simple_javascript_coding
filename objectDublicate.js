let arr = [10, 20, 50, 40, 40, 50];

function Data(arr) {
  
  let count = " ";

  let obj = {};

  for (let i = 0; i < arr.length; i++) 
    {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  
  for (let key in obj) {
    if (obj[key] > 1) count += key + " ";
  }
  console.log(count);
}


Data(arr);
