let n = 5;

function Patten() {
  for (let i = 0; i < n; i++) {
    let k = "";
    for (let j = 0; j <= i; j++) {
      k += "*";
    }
    console.log(k);
  }
}

Patten(n);

// outout
// *
// * *
// * * *
// * * * *
// * * * * *
