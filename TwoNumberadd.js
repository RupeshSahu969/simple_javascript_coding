
// const twoSum=function(num,target){

//     for(let i=0; i<num.length; i++){
//         for(let j=i+1; j<num.length; j++){
//             if(num[i] + num[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// }
const twoSum=function(num,target){

    let obj={}

    for(let i=0; i<num.length; i++){
        var n=num[i]

        if(obj[target -n] >= 0){
            return [obj[target -n ], i]
        }
        else{
            obj[n] = i
        }
    }

}


console.log(twoSum([3,2,4],6))