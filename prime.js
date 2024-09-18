function Prime(n) {
    // if (n <= 1) {
    //     console.log("not Prime");
    //     return;
    // }

    for (let i = 2; i < n; i++)
         {
        if (n % i == 0) {
            console.log("not Prime");
            // return;
        }
    }

    console.log("Prime");
}

let n = 5;
Prime(n); // Output: not Prime

// n = 11;
// Prime(n); // Output: Prime
