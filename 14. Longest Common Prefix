/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/
var longestCommonPrefix = function(strs) {
    if(strs.length ===0){return ""}
    else{
    let minLen = strs[0].length;
    let minIndex = 0;
        
    for(let i=0; i<strs.length;i++){
      
        if(strs[i].length < minLen){
            minLen = strs[i].length;
            minIndex = i;
        }
    } 
    //find the shortest string, then compare the longer strings with it
    //let shortestChar = strs.sort((a,b) => a.length - b.length)[0]

    let map = new Map();
    let commonString = strs[minIndex];
    
    for(let val of strs){
        for (let i=0; i<val.length;i++){
            if(commonString[i] == val[i]){
                continue;
            }else{
                commonString = commonString.slice(0,i);
                break;
            }
        }
    }
    return commonString;
    }
};
