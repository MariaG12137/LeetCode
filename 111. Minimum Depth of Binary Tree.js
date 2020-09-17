/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/
var minDepth = function(root) {
    if(!root) return 0;
    if(!root.left){return minDepth(root.right)+1}
    if(!root.right){return minDepth(root.left)+1}
    return 1+Math.min(minDepth(root.left),minDepth(root.right));
};
==========================================================================================
//second submission
var minDepth = function(root) {
    function depth(node){
        if(!node){
            return 0
        }
        if(!node.left){
            return depth(node.right)+1
        }
        if(!node.right){
            return depth(node.left)+1
        }
        return Math.min(depth(node.left),depth(node.right))+1;
        
    }
    return depth(root)

};
