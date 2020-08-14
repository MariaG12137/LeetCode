/*
Given an integer, return its base 7 string representation.
*/
var convertToBase7 = function(num) {
    let sign = num>0?1:-1;
    let rem = 0;
    num = Math.abs(num);
    let result = [];
    
    while(num>0){
        rem = num%7;
        result.push(rem);
        num = Math.floor((num-rem)/7);
        console.log(num,rem)
    }
    return String(result.reverse().join('')*sign);
};
