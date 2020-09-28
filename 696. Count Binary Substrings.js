/*
Give a string s, count the number of non-empty (contiguous) substrings that
have the same number of 0's and 1's, and all the 0's and all the 1's in these 
substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.
*/
var countBinarySubstrings = function(s) {
    let zero = [];
    let one = [];
    let count = 0;
    let zeroOn = 1;
    
    for(let i=0; i<s.length;i++){
        if(s[i] == '0'){
            if(zero.length == 0 || s[i-1]==0){
                zero.push(s[i])
            }else{
                zero = [];
                zero.push(s[i])
            }
            if(one.length != 0){
                one.pop();
                count++
            }
        }
        if(s[i]=='1'){
            if(one.length == 0 || s[i-1]==1){
                one.push(s[i])
            }else{
                one = [];
                one.push(s[i])
            }
            
            if(zero.length != 0){
                zero.pop();
                count++;
            }
        }
    }
    return count
};
==============================================================================
var countBinarySubstrings = function(s) {
    let zero = 0;
    let one = 0;
    let count = 0;
    
    for(let i=0; i<s.length;i++){
        if(s[i] == '0'){
            if(zero == 0 || s[i-1]==0){
                zero++;
            }else{
                zero = 0;
                zero++;
            }
            if(one > 0){
                one--;
                count++
            }
        }
        if(s[i]=='1'){
            if(one == 0 || s[i-1]==1){
                one++;
            }else{
                one = 0;
                one++;
            }
            
            if(zero > 0){
                zero--;
                count++;
            }
        }
    }
    return count
};
======================================================================================================================
var countBinarySubstrings = function(s) {
    let prev = 0;
    let curr = 1;
    let ans = 0;
    
    for(let i=1; i<s.length;i++){
        if(s[i]===s[i-1]){
            curr++;
        }else{
            ans += Math.min(prev,curr);
            prev = curr;
            curr = 1;
        }
    }
    ans += Math.min(prev,curr);
    
    return ans;
}
