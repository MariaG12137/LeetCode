/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/
var findDisappearedNumbers = function(nums) {
    let k = 0;
    let result = [];
    for(let i=0; i<nums.length;i++){
        while(nums[i]!==nums[nums[i]-1]){
            k=nums[i]-1;
            [nums[i],nums[k]]=[nums[k],nums[i]]
        }
    }

    for(let i=0;i<nums.length;i++){
        if(i !== nums[i]-1){
            result.push(i+1)
        }
    }
    return result
    
};
