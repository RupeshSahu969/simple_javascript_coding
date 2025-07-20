let arr=[1,2,2,3,3,3,4,4]

function countFrequency(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) 
    {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  console.log(freq)
}
countFrequency(arr)  // { '1': 1, '2': 2, '3': 3, '4': 2 }

// function Array(arr){
    
//     let obj={}

//     for(let i=0; i<arr.length; i++)
//     {
//         if(obj[arr[i]] == undefined){
//             obj[arr[i]] =1;
//         }
//         else{
//             obj[arr[i]]++ ;
//         }
//     }
//     for(key in obj){
//         console.log(key+":"+obj[key])
//     }
//     // console.log(obj)

// }
// Array(arr)