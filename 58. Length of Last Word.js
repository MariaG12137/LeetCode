/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word 
(last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.
*/
var lengthOfLastWord = function(s) {
    s = s.split('').reverse();
    
    while(s[0] == ' '){
        s.shift();
    }
    
    let count = 0;
    for(let i=0; i<s.length;i++){
        if (s[i] !== ' ' ){
            count++;
        }else{
            break;
        }
    }
    return count
};

var lengthOfLastWord = function(s) {
    let count = 0;
    while(s[s.length-1] == ' '){
        s = s.slice(0,s.length-1);
    }

    for(let i=s.length-1;i>=0;i--){
        if(s[i] !== ' '){
            count++;
        }else{
            break
        }
    }
    return count;
};
=========================================================================================================================
//second submission
var lengthOfLastWord = function(s) {
    let result = 0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]!==' '){
            result++;
        }else{
            if(result !== 0){
                break
            }
        }
    }
    return result
};
