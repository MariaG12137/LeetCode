/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.
*/
var isMonotonic = function(A) {
    let increase = true;
    let decrease = true;
    for(let i=0; i<A.length-1;i++){
        if(A[i]>A[i+1]){
            increase = false;
        }
    }
    for(let i=A.length-1; i>0;i--){
        if(A[i]>A[i-1]){
            decrease = false;
        }
    }
    return increase || decrease 
};
