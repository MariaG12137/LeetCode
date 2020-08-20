/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
*/

var validPalindrome = function (s) {
    let l = 0, r = s.length-1, correction = 1;
    while (l < r) {
        if (s[l] === s[r]) l++, r--;
        else if (s[l+1] === s[r] && s[l+2] === s[r-1] && correction) l++, correction--;//The second condition ensures moving left is correct
        else if (s[l] === s[r-1] && correction) r--, correction--;//if moving left is not correct, we proceed to moving right;
        else return false;
    }
    return true;
};
