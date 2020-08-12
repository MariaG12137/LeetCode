/*
Write a function that takes a string as input and reverse only the vowels of a string.
*/
var reverseVowels = function(s) {
    let i = 0;
    let j = s.length-1;
    s = s.split('');
    const vowels = ['a','e','i','o','u','A','E','I','O','U']; //this will exceeds the time limit, use a set/dictionary instead!
    
    while(i<j){
        if(vowels.includes(s[i]) && vowels.includes(s[j])){
            [s[i],s[j]] = [s[j],s[i]];
            console.log(s,i,j);
            i++;
            j--;
        }else if(!vowels.includes(s[i])){
            i++; 
        }else if(!vowels.includes(s[j])){
            j--;
        }
    }
    return s.join('');
    
};
