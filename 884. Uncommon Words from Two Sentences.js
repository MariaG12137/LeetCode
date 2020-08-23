/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.
*/
var uncommonFromSentences = function(A, B) {
    A = A+ ' ';
    B = B+' ';
    let result = [];
    let word = '';
    let map = new Map();
    
    for(let char of A){
        if(char !== ' '){
            word += char;
        }
        else{
            if(map.has(word)){
                map.set(word,0);
            }else{
               map.set(word,1) 
            }
            word = '';
        }
    }
    
    for(let char of B){
        if(char !== ' '){
            word += char;
        }else{
            if(map.has(word)){
                map.set(word,0);
            }else{
                map.set(word,1);
            }
            word = '';
        }
    }
    
    for(let entry of map.entries()){
        if(entry[1]==1){
            result.push(entry[0])
        }
    }
    return result
};
