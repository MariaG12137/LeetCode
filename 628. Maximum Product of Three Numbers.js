/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.
*/
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    return Math.max(nums[0]*nums[1]*nums[nums.length-1], nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
  
};
==========================================================================================================================
var maximumProduct = function(nums) {
    let min = [];
    let max = [];
    let array = [];
    
    function getMaxMin(array){ //constant time b/c size of array will be constant
        array.sort((a,b)=>a-b);
        min = array.slice(0,2);
        array.sort((a,b)=>b-a);
        max = array.slice(0,3) 
    }
    
    for(let num of nums){
        if(array.length<5){
            array.push(num)
        }else{
            array.push(num);
            getMaxMin(array);
            array.splice(3,1)
        }
    }
    getMaxMin(array);
 
    return Math.max(min[0]*min[1]*max[0],max[0]*max[1]*max[2])
};
