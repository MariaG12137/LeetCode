/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
*/
var isToeplitzMatrix = function(matrix) {
    let index = 0;
    function compare(l1,l2){
        for(let i=0; i<l1.length;i++){
            index = i+1;
            console.log(i,index)
            if(l2[index] == undefined){
                break;
            }
            if(l1[i]!== l2[index] ){
                return false
            }
        }
        return true;
    }
    
    for(let i=0;i<matrix.length-1;i++){
        if(compare(matrix[i],matrix[i+1])==false){
            return false;
        }
    }
    return true;
};
