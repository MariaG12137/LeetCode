/*
In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.
*/
var largeGroupPositions = function(S) {
    S = S+'A';
    let count = 0;
    let char = S[0];
    let result = [];
    for(let i=0; i<S.length;i++){
        if(S[i]!==char){
            if (i-count >= 3){
                result.push([count,i-1])
            }
            char=S[i];
            count = i;
        }
    }
    return result
};
