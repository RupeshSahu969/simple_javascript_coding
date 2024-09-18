let p = "asddsa";

function Paildrom(p) {
  let bag = "";

  for (let i = p.length - 1; i >= 0; i--) {
    bag += p[i];
  }

  if (p == bag) {
    console.log("paildrom");
  } else {
    console.log("not paildrom");
  }
}

Paildrom(p);
