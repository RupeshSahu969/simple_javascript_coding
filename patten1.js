let n = 5;

function Patten() {
  for (let i = 1; i <=n; i++) {
    let k = "";
    for (let j = 1; j <= i; j++) {
      k += "*" + " ";
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
