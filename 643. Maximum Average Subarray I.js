/*
Given an array consisting of n integers, find the contiguous subarray of given length k
that has the maximum average value. And you need to output the maximum average value.
*/
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    let window = [];
    for (let i=0; i<=nums.length-k; i++){
        for(let j=0; j<k;j++){
            window.push(nums[i+j]);
        }
        max = Math.max(max,window.reduce((acc,cur)=>acc+cur)/k);
        window = [];
    }
    return max
};
===================================================================================
var findMaxAverage = function(nums, k) {
    let currSum = nums.slice(0 , k).reduce((r, n) => r + n, 0); //Initiate window
    let bestSum = currSum;
    for (let i = 1; i < nums.length - k + 1; i++) {
        currSum = currSum - nums[i - 1] + nums[i + k - 1] //slide window
        bestSum = Math.max(bestSum, currSum);
    }
    return bestSum / k;
};
