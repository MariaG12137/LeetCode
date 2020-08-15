/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
*/
var detectCapitalUse = function(word) {
    let cap = false;
    let allCap = null;
    
    function capital(char){
        if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
            return true
        }else{
            return false
        }
    }
        for(let i = 0; i<word.length;i++){
        if (i==0){
            cap = capital(word[i]);
        }else{
            if(cap == false){
                if(capital(word[i])==true){
                    return false
                }
            }else{
                if(allCap == null && capital(word[i])==true){
                    allCap = true;
                }else if(allCap == null && capital(word[i])==false){
                    allCap =  false
                }else if(allCap == true && capital(word[i])==false){
                    return false
                }else if(allCap == false && capital(word[i])==true){
                    return false
                }  
            }
        }
    }
    console.log(cap,allCap)
    return true;
};
