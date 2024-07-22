// function removeDUblicate(arr){
//     let uniqearr=[];
//     let uniqearrlength=0;

//     for(let i=0; i<arr.length; i++){
//         let dublicate=false;

//         for(let j=0; j<uniqearrlength; j++){
//             if(arr[i] === uniqearr[j]){
//                 dublicate=true;
//                 break;

//             }
//         }
//         if(!dublicate){
//             uniqearr[uniqearrlength]=arr[i]
//             uniqearrlength++
//         }
//     }

//     console.log(uniqearr)

// }
// let arr=[1, 2, 2, 3, 4, 4, 5]  // 1,2,3,4,5
// removeDUblicate(arr)


/// use Object

function dubliObject(arr){
    let unique=[]
    let obj={};

for(let i=0; i<arr.length; i++)
{
    if(!obj[arr[i]]){
        unique[unique.length] =arr[i]
        obj[arr[i]] = true
    }

}
console.log(unique)

}
let arr=[1,2,3,4,4,3,2,1,5,6,1,2,3,4,1,2,3,4]
dubliObject(arr)