/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.
*/
var maxDepth = function(root) {
    let max = null;
    if(!root)return null; //if a node dosen't exisit, return null to previous level
    max = Math.max(maxDepth(root.left),maxDepth(root.right)) //get the bigger depth from the 2 subnodes
    return max+1 //if the node exists, return it's max depth, and +1(itself)
};
