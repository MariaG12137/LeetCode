/*
Given an array nums, write a function to move all 0's to
the end of it while maintaining the relative order of the non-zero elements.
*/
var moveZeroes = function(nums) {
    let countZero = 0;
    let countTaken = 0;
    for(let num of nums){
        if(num == 0){
            countZero++;
        }else{
            nums[countTaken]=num;
            countTaken++;
        }
    }
  
    nums.splice(countTaken,countZero);
    for(let i=0;i<countZero;i++){
        nums.push(0);
    }
};
