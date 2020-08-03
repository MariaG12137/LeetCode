/*
Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/
var plusOne = function(digits) {
    let len = digits.length;
    digits[len-1] += 1;
    let i = len-1;
    
    while (digits[i] === 10){
        digits[i] = 0;
        if(digits[i-1] != undefined){
            digits[i-1] += 1;
        }else{
            digits.unshift(1);
        }
        i--;
    }

    return digits
};
