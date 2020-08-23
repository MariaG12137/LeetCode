/*
Given an array nums of n integers, are there elements a, b, c in nums
such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
*/
var threeSum = function(nums) {
    let map = new Map();
    let result = [];
    let finalResult = [];
    let val = null;
    nums.sort((a,b)=>a-b);
    console.log(nums);
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],[]);
            let j=i+1;
            let k = nums.length-1;
            console.log(nums[j],nums[k],nums[i])
            while(j<k){
               if(nums[j]+nums[k]> -nums[i]){
                    k--;
                }else if(nums[j]+nums[k]<-nums[i]){
                    j++;
                }else {
                    if(!map.get(nums[i]).includes(nums[j])){
                        map.get(nums[i]).push(nums[j]);
                        map.get(nums[i]).push(nums[k])
                    }
                    j++;
                    k--;
                }
            }  
        }
    }
    for(let entry of map.entries()){
        while(entry[1].length !== 0){
            result.push(entry[0]);
            result.push(entry[1].pop());
            result.push(entry[1].pop());
            finalResult.push(result);
            result = [];
        }
    }
    return finalResult
};
===============================================================================================================
