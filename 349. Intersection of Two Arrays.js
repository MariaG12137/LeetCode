/*
Given two arrays, write a function to compute their intersection.
*/
var intersection = function(nums1, nums2) {
    let set = new Set(); 
    let result = [];
    for(let num of nums1){
        if(nums2.includes(num)){
           set.add(num);
           }
    }

    for(let val of set.values()){
        result.push(val)
    }
    return result;
};
======================================================================================================
//set has slightly better runtime
var intersection = function(nums1, nums2) {
    let set1 = new Set();
    let set2 = new Set();
    let result = [];
    
    for(let num of nums1){
        set1.add(num)
    }
    for(let num of nums2){
        set2.add(num)
    }    
    for(let val of set1.values()){
        if(set2.has(val)){
            result.push(val);
        }
    }
    return result;
};
====================================================================================================================
//second submission
var reverseVowels = function(s) {
    let map = new Map();
    s =s.split('');
    map.set('a').set('e').set('i').set('o').set('u').set('A').set('E').set('I').set('O').set('U');
    let l=0;
    let r=s.length-1;
    
    while(l<r){
        if(map.has(s[l])&& map.has(s[r])){
            [s[l],s[r]]=[s[r],s[l]];
            l++;
            r--
        }
        if(!map.has(s[l])){
            l++
        }
        if(!map.has(s[r])){
            r--
        } 
    }
    return s.join('')
};
