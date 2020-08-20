/*
Given a sorted (in ascending order) integer array nums of n elements
and a target value, write a function to search target in nums. If target exists,
then return its index, otherwise return -1.
*/
var search = function(nums, target) {
    let i = 0;
    let j = nums.length-1;
    let p=0;
    while(i<=j){
        p = Math.floor((i+j)/2);
        if(nums[p]== target){
            return p
        }else if(nums[p]>target){
            j=p-1;
        }else{
            i=p+1
        }
    }
    return -1;
};
