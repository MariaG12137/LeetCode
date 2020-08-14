/*
Find the sum of all left leaves in a given binary tree.
*/
var sumOfLeftLeaves = function(root,isLeft = false) {
    if(!root){return 0}
    if(isLeft &&!root.left && !root.right){return root.val}
    
    let sum = 0;
    sum += sumOfLeftLeaves(root.left,true)
    sum += sumOfLeftLeaves(root.right,false)
    return sum;
};
