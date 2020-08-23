/*
Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

*/
var fairCandySwap = function(A, B) {
    let set = new Set();
    let sumA = A.reduce((sum,acc)=>sum+acc);
    let sumB = B.reduce((sum,acc)=>sum+acc);
    let diff = (sumB -sumA)/2;
    for(let num of A){
        set.add(num+diff);
    }
    for(let num of B){
        if(set.has(num)){
            return[num-diff,num]
        }
    }
};
