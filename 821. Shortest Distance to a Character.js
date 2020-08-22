/*
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
*/
var shortestToChar = function(S, C) {
    let index = [];
    for(let i=S.length-1; i>=0;i--){
        if (S[i] == C){
            index.push(i);
        }
    }
    let p1 = index.pop();
    let p2 = p1;
    
    if(index.length !== 0){
        p2 = index.pop();
    }
    let count = 2;
    let result = [];
    for(let i=0; i<S.length;i++){
        if(S[i]!=C){
            result.push(Math.min(Math.abs(i-p1),Math.abs(i-p2)))
        }else{
            result.push(0);
            if(count >0){
                count--
            }
            if(count == 0 && index.length !== 0){
                if(p1<p2){
                    p1=index.pop();
                }else{
                    p2=index.pop();
                }
            }   
        }
    }
    return result

}
