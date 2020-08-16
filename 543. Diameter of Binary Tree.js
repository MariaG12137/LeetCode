/*
Given a binary tree, you need to compute the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes 
in a tree. This path may or may not pass through the root.
*/
var diameterOfBinaryTree = function(root) {
    let diam = 0;
    
    function depth(node){
        if(!node) return 0;
        return Math.max(depth(node.left), depth(node.right))+1
    }
    function diameter(node){
        if(!node) return;
        diam = Math.max(diam, depth(node.left)+depth(node.right));
        diameter(node.left);
        diameter(node.right);
    }

    diameter(root);
    return diam
};
