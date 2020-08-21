/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.
*/
var pivotIndex = function(nums) {
    if(nums.length==1) return 0;
    let l = 0;
    let r = nums.length-1;
    let sum = [nums[0]];
    
    for(let i = 1; i<nums.length; i++){
        sum[i]=sum[i-1]+nums[i]
    }
    if(0 == sum[nums.length-1]-nums[0]){
        return 0;
    }
    for(let i=0;i<nums.length;i++){
        if(sum[i]*2 == sum[nums.length-1]-nums[i+1]){
            return i+1
        }
    }
    console.log(sum)
    return -1
    
};
