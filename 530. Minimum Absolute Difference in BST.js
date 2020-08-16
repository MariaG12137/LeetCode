/*
Given a binary search tree with non-negative values, 
find the minimum absolute difference between values of any two nodes.
*/
var getMinimumDifference = function(root) {
    let result = [];
    function compare(node){
        if(!node){return}
        result.push(node.val)
        compare(node.left);
        compare(node.right);   
    }
    compare(root);
    result = result.sort((a,b)=>b-a);
    let min = Infinity;
    for(let i=0; i<result.length-1;i++){
        if (result[i]-result[i+1]<min){
            min = result[i]-result[i+1]
        }
    }
    return min;
};
=========================================================================================
//Binary search tree inorder traversal: always smallest to largest
var getMinimumDifference = function(root) {
    let prev = -Infinity, minDiff = Infinity;
    const recursive = (node) => {
        if(!node) return;
        recursive(node.left);
        minDiff = Math.min(minDiff, node.val - prev);
        prev = node.val;
        recursive(node.right);
    }
    recursive(root);
    return minDiff;
};
