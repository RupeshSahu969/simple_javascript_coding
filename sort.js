
let arr=[1,416,3,318,4,37,7,5]
let temp;

function Array(arr){

    for(let i=0; i<arr.length; i++)
    {
        for(let j=i; j<arr.length; j++)
        {
            if(arr[i] > arr[j])
            {
                temp =arr[i]
                arr[i]=arr[j]
                arr[j]=temp

            }
        }
    }
    console.log(arr)


}
 
Array(arr)

