/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter
in pattern and a non-empty word in str.
*/
var wordPattern = function(pattern, str) {
    let stringArr = str.split(' ');
    let patternArr = pattern.split('');
    
    let helper = function(input){
        let pattern = '';
        let arr = [];
        for(let i=0; i<input.length;i++){
            if(!arr.includes(input[i])){ //use includes for arrays, .has for maps, 
                arr.push(input[i]);
            }
            pattern += arr.indexOf(input[i]);
        }
        return pattern;
    }
    return helper(stringArr) === helper(patternArr);
};
