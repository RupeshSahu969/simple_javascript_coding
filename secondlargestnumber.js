let arr=[2,3,4,5,6,7]

function Array(arr){
    let max=-Infinity;
    let second=-Infinity;

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > max ){
            second =max;

            max =arr[i]
        }
        else if(arr[i] > second  && arr[i] < max){
            second = max
        }
    }
console.log(second)


}
Array(arr)