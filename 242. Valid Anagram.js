/**
Given two strings s and t , write a function to determine if t is an anagram of s.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){return false};
    let mapS = new Map();
    let mapT = new Map();
    
    function countChar(map,string){
        for(let char of string){
            if (map.has(char)){
                map.set(char,map.get(char)+1);
            }else{
                map.set(char,0)
            }
        }
        return map;
    }
    console.log(countChar(mapS,s));
    console.log(countChar(mapT,t));
    
    for(let char of s){
        if((!mapT.has(char)) || mapS.get(char) != mapT.get(char)){
            return false
        }
    }
    return true;
};
==================================================================================================
var isAnagram = function(s, t) {
    if(s.length != t.length){return false};
    let sSort = s.split('').sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    let tSort = t.split('').sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    for(let i=0; i<sSort.length;i++){
        if(sSort[i] != tSort[i]){
            return false;
        }
    }
    return true;
}
