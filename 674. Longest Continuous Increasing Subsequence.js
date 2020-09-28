/*
Given an unsorted array of integers, 
find the length of longest continuous increasing subsequence (subarray).
*/
var findLengthOfLCIS = function(nums) {
    if(nums.length == 0) return 0;
    let count = 0;
    let max = 0;
    for(let i=0; i<nums.length-1;i++){
        if(nums[i]<nums[i+1]){
        count++;
        }else{
            max = Math.max(max,count+1);
            count = 0;
        }
    }
    max = Math.max(max,count+1)
    
    console.log(count,max)
    return max;
};
========================================================================================
var findLengthOfLCIS = function(nums) {
    if(nums.length===0){
        return 0;
    }
    let max = 0;
    let l=0;
    let r=0;
    
    while(nums[r+1]!== undefined){
        if(nums[r+1]>nums[r]){
            r++;
        }else{
            max = Math.max(max,r-l+1);
            l=r+1;
            r=r+1;
        }
    }
    return Math.max(max,r-l+1);
};
