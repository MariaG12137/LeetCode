/*
Given a binary array, find the maximum number of consecutive 1s in this array.
*/
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let maxOverall = 0;
    
    for(let num of nums){
        if(num == 1){
            max++;
        }else{
            maxOverall = Math.max(maxOverall,max);
            max = 0
        }
    }
    if(max !=0){
        maxOverall = Math.max(maxOverall,max);
    }
    return maxOverall
};
=========================================================================================================
var findMaxConsecutiveOnes = function(nums) {
    let n=0;
    let max =0;
    for(let num of nums){
        if(num===0){
            n=0;
        }else{
            max = Math.max(max,++n)
        }
    }
    return max
};
