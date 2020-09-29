/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
*/
var leafSimilar = function(root1, root2) {
    let leaf1 = [];
    let leaf2 = [];
    function traverse(node,leaf){
        if(!node) return;
        if(node.left==null && node.right==null){
            leaf.push(node.val);
        }
        traverse(node.left,leaf);
        traverse(node.right,leaf)
    }
    traverse(root1,leaf1);
    traverse(root2,leaf2);
    
    return leaf1.join(' ') === leaf2.join(' ')
};
=============================================================================================
//second submission
var leafSimilar = function(root1, root2) {
    function traverse(node){
        if(!node){
            return [];
        }
        if(!node.left && !node.right){
            return [node.val];
        }
        return traverse(node.left).concat(traverse(node.right));
    }
    return traverse(root1).join(' ')===traverse(root2).join(' ')
};
