// Q1 fectorial Number

// function factorial(n){
//     if(n ===0) return 1

//     return n * factorial(n-1)
// }
// console.log(factorial(5)) //120


// Q 2 Create an Arrya with ragne of Number

// function rangeNumber(start,end){
//     if(end < start){
//         return []
//     }
//     else{
//         const numbers=rangeNumber(start,end-1)
//         numbers.push(end)
//         return numbers
//     }

// }
// console.log(rangeNumber(0,5)) // [0.1.2.3.4.5]



// Q 3 Fibonacci Number 
// input n=3  output -2 


function fibonacci(n){
    if(n <= 1)
        return n;

    return  fibonacci(n-1)  + fibonacci(n-2) ;

}
console.log(fibonacci(3)) // 2