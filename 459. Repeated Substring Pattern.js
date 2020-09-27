/*
Given a non-empty string check if it can be constructed by taking a substring
of it and appending multiple copies of the substring together. You may assume 
the given string consists of lowercase English letters only and its length will not exceed 10000.
*/
//string
var repeatedSubstringPattern = function(s) {
    let i = 0;
    let string = s[i];
    
    while (i<Math.floor(s.length/2)){
        let index = true;
        const length = string.length;
        console.log(string);
        if(s.length%length !=0){
            index = false
        }else{
            for(let i=0; i<s.length-length+1;i+=length){
                console.log(string)
            if(string != s.slice(i,i+length)){
                index = false;
                break;
                }
            }
        }
        
        if(index == true){return true}
        i++;
        string += s[i];
        console.log(string)
    }
    return false
}
==============================================================================
var repeatedSubstringPattern = function(s) {
    let i = 0;
    s= s.split('');
    let string = [s[0]];
    
    while (i<Math.floor(s.length/2)){
        let index = true;
        const length = string.length;
        console.log(string);
        
        if(s.length%length !=0){
            index = false
        }else{
            for(let i=0; i<s.length;i++){
                console.log(string)
            if(string[i%length] != s[i]){
                index = false;
                break;
                }
            }
        }
        
        if(index == true){return true}
        i++;
        string.push(s[i]);
        console.log(string)
    }
    return false
}
==========================================================================================================================================
//second submission
var repeatedSubstringPattern = function(s) {
    
    function compare(string){
        if(s.length%string.length !== 0){
            return false;
        }
        if(s.length===string.length){
            return false;
        }
        let p1 = 0;
        let p2 = 0;
        while(s[p2]){
            if(string[p1] === s[p2]){
                p1++;
                p2++;
                if(!string[p1]){
                    p1=0
                }
            }else{
                return false
            }
        }
        return true
    }
    
    let string='';
    for(let char of s){
        string += char;
        if(compare(string)){
            return true
        }
    }
    return false
};
