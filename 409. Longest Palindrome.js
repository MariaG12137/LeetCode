/*
Given a string which consists of lowercase or uppercase letters, find the length 
of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.
*/
var longestPalindrome = function(s) {
    let map = new Map();
    for(let char of s){
        if(!map.has(char)){
            map.set(char,1)
        }else{
            map.set(char,map.get(char)+1)
        }
    }
    let sum = 0;
    let rem = 0;
    for(let value of map.values()){
        sum += Math.floor(value/2)*2;
        if(rem == 0){
            if(value%2==1){
                rem =1;
            }
        }
    }
    return sum+rem
};
===================================================================================================
var longestPalindrome = function(s) {
    let map = new Map();
    let sum = 0;
    for(let char of s){
        if(!map.has(char)){
            map.set(char,1)
        }else{
            if(map.get(char)!=0){
                map.set(char,map.get(char)-1);
                sum +=2;
            }else{
                map.set(char,map.get(char)+1)
            }
        }
    }
    for(let value of map.values()){
        if (value == 1) return sum +1
    }

    return sum
};
