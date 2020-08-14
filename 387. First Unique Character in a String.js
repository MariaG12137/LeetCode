/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
*/
var firstUniqChar = function(s) {
    let map = new Map(); //map keys are ordered, objects are not
    
    for(let char of s){
        if (!map.has(char)){
            map.set(char,1)
        }else{
            map.set(char,map.get(char)+1)
        }
    }
    let index = 0;
    for(let i=0; i<s.length;i++){
        if(map.get(s[i]) == 1){
            return i;
        }
    }
    return -1;
};
