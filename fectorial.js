// factorial method

let n = 5;

function Fectorial(n) {
  let ans = 1;
  if (n == 0) return 1;

  for (let i = 2; i <= n; i++) {
    ans = ans * i;
  }

  console.log(ans);
}

Fectorial(n);
