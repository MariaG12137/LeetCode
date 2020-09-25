/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
*/
var reverseString = function(s) {
    for(let i=0; i<Math.floor(s.length/2);i++){
        [s[i],s[s.length-1-i]] = [s[s.length-1-i],s[i]];
    }
};
==============================================================================================================================
//second submissoin
var reverseString = function(s) {
    let l=0;
    let r=s.length-1;
    while(l<r){
        [s[l],s[r]]=[s[r],s[l]];
        l++;
        r--
    }
};
