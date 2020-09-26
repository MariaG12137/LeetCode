/*
Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original
string by deleting some (can be none) of the characters without disturbing the 
relative positions of the remaining characters. (ie, "ace" is a subsequence of
"abcde" while "aec" is not).
*/
var isSubsequence = function(s, t) {
    let i=0;
    let j=0;
    
    while(j<t.length && i<s.length){
        if(t[j]!= s[i]){
            j++;
        }else{
            i++;
            j++;
        }
    }
    return i==s.length
};
//for follow up, store t in a hash map
=======================================================================================================================
var isSubsequence = function(s, t) {
    
    let p1=0;
    let p2=0;
    while(s[p1]&&t[p2]){
        if(s[p1] !== t[p2]){
            p2++;
        }else{
            p1++;
            p2++
        }
    }
    return !s[p1]
};
