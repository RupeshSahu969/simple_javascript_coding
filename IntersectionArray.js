let arr1 = [1,2,2,1];
let arr2 = [2,2];


function ArrayTwo(arr1, arr2) {
  let result = [];
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        // Avoid adding duplicates
        if (!result.includes(arr1[i])) {
          result.push(arr1[i]);
        }
      }
    }
  }
  
  console.log(result);
}

ArrayTwo(arr1, arr2); // 2

// let arr1=[1,2,3,4,5,6]
// let arr2=[4,5,6,7,8,9]

// function Array(arr1,arr2)
// {
//     for(let i=0; i<arr1.length; i++)
//     {
//         let iscommon=false;
        
//         for(let j=0; j<arr2.length; j++)
//         {
//             if(arr1[i] == arr2[j]){
//                 iscommon=true;
//                 break;
//             }
//         }
//          if(iscommon){
//         let d=false;
//         for(let k=0; k<i ; k++){
//             if(arr1[k] == arr1[i])
//             {
//                 d=true;
//                 break;
//             }
//         }
//         if(!d){
//             console.log(arr1[i])
//         }
//     }
//     }
    
   
// }
// Array(arr1,arr2)
