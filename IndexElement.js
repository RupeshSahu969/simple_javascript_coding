function findIndex(arr, element) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; 
}

console.log(findIndex([10, 20, 30, 40], 30)); // 2
 

