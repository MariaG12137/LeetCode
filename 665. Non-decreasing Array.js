/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
*/
var checkPossibility = function(nums) {
    if(nums.length<3){return true}
    let index = null;
    for(let i = 0; i<nums.length-1; i++){
        if(nums[i]>nums[i+1]){
            if (index !== null){
                return false
            }else{
                index = i
            }
            
        }
    }
    function increase(arr){
        for(let i=0; i<arr.length-1;i++){
            console.log(arr[i],arr[i+1])
            if(arr[i]>arr[i+1]){
                return false
            }
        }
        return true;
    }

    let numsCopy=[...nums]
    nums.splice(index,1)
    numsCopy.splice(index+1,1);
    return(increase(nums)||increase(numsCopy))
    
};
=====================================================================================================================
var checkPossibility = function(nums) {
    let elemToModify = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            if (nums[i-1] > nums[i+1]) { //change only matters when you have to change the second parameter
                nums[i+1] = nums[i];     //Because it feeds into the next comparasion
            }
            elemToModify++;
        }
        if (elemToModify > 1) return false;
    }     
    return true;
};
