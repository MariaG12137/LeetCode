/*
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.
*/
var minDiffInBST = function(root) {
    let min = Infinity;
    let last = -Infinity;
  
    function search(node){
        if(min==1 || !node)return;
        search(node.left)
        min = Math.min(min,node.val-last);
        last = node.val;
        search(node.right)
        
    }
    search(root);
    return min;
};
