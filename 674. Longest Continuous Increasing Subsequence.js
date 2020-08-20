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
