/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, 
each group of children is separated by the null value (See examples).
*/
var maxDepth = function(root) {
    if(!root){return 0};
    let nodeMax = 0;
 
    let i=0;
    while(root.children[i]){
        nodeMax = Math.max(nodeMax, maxDepth(root.children[i]));
        i++;
    }

    return nodeMax+1;
};
=============================================================================================
//second submission
var maxDepth = function(root) {
    function depth(node){
        if(!node) return 0;
        
        let nodeDepth =  1;
        for(let child of node.children){
            nodeDepth = Math.max(nodeDepth, 1+depth(child));
        }
        return nodeDepth;
    }
    return depth(root);
};
