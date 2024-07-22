let arr = [1, 2, 3, 4,5,7];

function Missing(arr) {

  let n = arr.length + 1;

  let k = (n * (n + 1)) / 2;

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  let miss = k - count;
  console.log(miss);
}

Missing(arr);
