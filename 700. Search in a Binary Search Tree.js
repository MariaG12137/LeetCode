/*
Given the root node of a binary search tree (BST) and a value. 
You need to find the node in the BST that the node's value equals
the given value. Return the subtree rooted with that node. 
If such node doesn't exist, you should return NULL.
*/
var searchBST = function(root, val) {
    let result = null;
    function search(node,val){
        
        if (!node) return;
        if(node.val == val){
            result = node;
        }
        if(node.val > val){
            search(node.left,val)
        }
        if(node.val< val){
            search(node.right,val)
        }    
    }
    search(root,val);
    return result;
};
=======================================================================================================
//second submission
    var searchBST = function(root, val) {
    function traverse(node){
        if(!node) return null;
        
        if(node.val === val){
            return node
        }
        return traverse(node.left) || traverse(node.right);
    }
    return traverse(root);
};
================================================================================================================
var searchBST = function(root, val) {
    function traverse(node){
        if(!node) return null;
        
        if(node.val === val){
            return node
        }
        if(node.val<val){
            return traverse(node.right)
        }
        if(node.val >val){
            return traverse(node.left)
        }
    }
    return traverse(root);
};
