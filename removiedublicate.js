// removie dublicate from soted Array
//Give an interger array nums stored in non decending order
//the dublicate in-place such that each uniqe element appears only once.

//input: nums = [1, 1, 2]
//output: 2, nums = [1, 2, _]
//input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]


function removeDuplicates(nums) {

    if(nums.length ===0) return 0;

    let i=0;

    for(let j=1; j<nums.length; j++){
        if(nums[i] !== nums[j]){ 
            i++;
            nums[i] = nums[j];
        }

    }

    return i + 1;

}

console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1, 2, _]
