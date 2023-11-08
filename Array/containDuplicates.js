//contain duplicates 
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
    let mySet = new Set();
    for(let i = 0; i < nums.length; i++){
        if(mySet.has(nums[i])){
            return true; 
        }
        mySet.add(nums[i]);
    }
    return false;
}

let nums = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(nums));