function Dublicate(arr){
    let sum=""

    for(let i=0; i<arr.length; i++)
    {
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                sum += arr[i]+" ";
            }
        }
    }
    console.log(sum)
}
let arr=[1,2,3,4,4,3,2,1,5,6,7]  //1,2,3,4
Dublicate(arr)
