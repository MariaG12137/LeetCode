/*
Given an integer array, you need to find one continuous subarray that
if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.
*/
var findUnsortedSubarray = function(nums) {
    let numsSort = [...nums];
    numsSort.sort((a,b)=>a-b);
    
    let result = 0;
    for(let i=0;i<nums.length;i++){
        console.log(nums[i],numsSort[i])
        if(nums[i]!=numsSort[i]){
            result = i;
            break;
        }
    }
    
    for(let i=nums.length-1;i>result;i--){
        if(nums[i]!=numsSort[i]){
            result = i-result+1;
            break;
        }
    }
    
    return result
    
};
============================================================================
var findUnsortedSubarray = function(nums) {
    let numsSort = [...nums];
    numsSort.sort((a,b)=>a-b);
    
    let start = null;
    let end = null
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=numsSort[i]){
            if(start==null){
                start = i;
                end = i
            }else{
                end = i
            }
        }
    }
    console.log(start,end)
    
    return (start!=null)?end-start+1:0
    
};
