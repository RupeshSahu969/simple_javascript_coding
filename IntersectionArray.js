let arr1=[1,2,3,4,5,6];
let arr2=[7,8,9,10,11,12,13];

function ArrayTwo(arr1,arr2){
let result= [] ;

for(let i=0; i<arr1.length; i++)
    {
    for(let j=0; j<arr2.length; j++)
    {
        if(arr1[i]==arr2[j]){
            let found=false;
            for(let k=0; k<result.length; k++)
            {
                if(result[k]==arr1[i]){
                    found=true;
                    break;
            }
        }
        if(!found){
            result.push(arr1[i]);
            }
    }
}
}
console.log(result)
}
ArrayTwo(arr1,arr2)