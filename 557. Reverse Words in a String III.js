/*
Given a string, you need to reverse the order of characters in each word 
within a sentence while still preserving whitespace and initial word order.
*/
var reverseWords = function(s) {
    let array = [];
    let result = [];
    for(let char of s){
        if(char != ' '){
            array.push(char);
        }else{
            array.reverse();
            array.push(' ');
            result.push(array.join(''));
            array = [];
        }
    }
    array.reverse();
    result.push(array.join(''));
    
    return result.join('')
};
