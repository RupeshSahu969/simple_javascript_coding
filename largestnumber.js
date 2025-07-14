let arr=[1,2,3,5,70,7]

function Lar(arr){
    // if(arr.length == 0) return undefined
    let  max=arr[0]
    
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > max)
        {
            max =arr[i]
        }
    }

    console.log(max)

}
Lar(arr)