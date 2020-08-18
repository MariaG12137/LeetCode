/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.
*/
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    return Math.max(nums[0]*nums[1]*nums[nums.length-1], nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
  
};
