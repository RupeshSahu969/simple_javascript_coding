let str = "Hello World";

let rev = "";

function String(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
}

String(str);




