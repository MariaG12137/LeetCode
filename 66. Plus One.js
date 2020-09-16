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
=================================================================================================================
var plusOne = function(digits) {
    let len = digits.length-1;
    let digit = 0;
    
    function plus(len,incre){
        if(len == -1 && incre==1){
            digits.unshift(1);
            return;
        }
        digit = digits[len];
        if(digit+incre>9){
            digits[len]=digit+incre-10;
            len--;
            plus(len,1);
        }else{
            digits[len]=digit+incre;
            return;
        }
    }
    plus(len,1);
    return digits
};
var plusOne = function(digits) {

    let incre = 1;
    for(let i=digits.length-1; i>=-1;i--){
        if(i==-1){
            digits.unshift(1);
            break;
        }
        if(digits[i] + incre >9){
            digits[i]=digits[i]+incre-10;
        }else{
            digits[i]=digits[i]+incre;
            break;
        }
    }
    return digits
};
