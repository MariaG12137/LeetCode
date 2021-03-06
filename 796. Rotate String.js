/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the 
rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.
Return True if and only if A can become B after some number of shifts on A.
*/
var rotateString = function(A, B) {
    let index = [];
    
    for(let i=0; i<A.length;i++){
        if(A[i] == B[0]){
            index.push(i)
        }
    }
    console.log(index)

    function search(s1,s2){
        if(s1.length ==0 && s2.length==0)return true
        if(index.length==0)return false;
        i=index.pop();
        if((A.slice(i,A.length) + A.slice(0,i))==s2){
            console.log('a',index)
            return true
        }else{
            console.log(A.slice(i,A.length) + A.slice(0,i),index)
            return search(A.slice(i,A.length) + A.slice(0,i),s2);
            }
        }
    return search(A,B)
}
================================================================================================================================
var rotateString = function(A, B) {
    if(A.length!==B.length){
        return false;
    }
    if(A.length===0 && B.length===0){
        return true;
    }
    function compare(p1,p2){
        while(p1<A.length){
            if(B[p2]===undefined){
                p2=0;
            }
            if(A[p1]===B[p2]){
                p1++;
                p2++;
            }else{
                return false
            }
        }
        return true
    }
    
    for(let i=0; i<B.length;i++){
        if(compare(0,i) === true){
            return true;
        }
    }
    return false
};
