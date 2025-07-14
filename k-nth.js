let arr=[1,2,4,5,6,7,8,9,10];
let k=2;

function kthElement(arr, k) {

    arr.sort((a,b)=>a-b);

    for(let i=0; i<arr.length; i++) {
        if (i === arr.length - k) {
            console.log(arr[i]);
            return arr[i];
        }
    }   

}
kthElement(arr, k); //  9