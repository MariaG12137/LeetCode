/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while 
preserving the order of characters. No two characters may map to the same character 
but a character may map to itself.
*/
var isIsomorphic = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    let arrayS = [];
    let arrayT = [];
    let mapS = new Map();
    let mapT = new Map();
    let count = 0;
    for(let char of s){
        if (!mapS.has(char)){
            mapS.set(char,count)
            count++
        }
    }
    count = 0;
    for(let char of t){
        if (!mapT.has(char)){
            mapT.set(char,count)
            count++
        }
    }
    for(let char of s){
        arrayS.push(mapS.get(char))
    }
    for(let i=0; i<s.length; i++){
        if(arrayS[i]!= mapT.get(t[i])){
            return false
        }
    }
    return true
};
