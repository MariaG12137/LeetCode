/*
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
*/
var flipAndInvertImage = function(A) {
    const length = A.length;
    
    for(let i=0; i<length;i++){
        for(let j=0; j<Math.floor(length/2);j++){
            [A[i][j],A[i][length-1-j]]=[A[i][length-1-j],A[i][j]]
        }
    }
    for(let i=0; i<length;i++){
        for(let j=0; j<length;j++){
            if(A[i][j]==0){
                A[i][j]=1;
            }else{
                A[i][j]=0
            }
        }
    }
    return A;
};
======================================================================================
var flipAndInvertImage = function(A) {
    const length = A.length;
    
    for(let i=0; i<length;i++){
        for(let j=0; j<Math.floor(length/2);j++){
            [A[i][j],A[i][length-1-j]]= [!A[i][length-1-j],!A[i][j]]
        }
        if(length%2==1){
            j = Math.floor(length/2);
            A[i][j]=!A[i][j]
        }
    }
    return A;
};
