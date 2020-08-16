/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of
the original BST is changed to the original key plus sum of all keys greater than the original key in BST.
*/
//Inorder traverse left to right
var convertBST = function(root) {
    let sum = 0;
    
    function total(node){
        if(!node) return;
        total(node.left);
        sum += node.val;
        total(node.right)
    }
    total(root);
    
    let minus = 0;
    function great(node){
        if(!node) return null;
        great(node.left);
        
        minus += node.val;
        node.val = node.val+sum-minus;
        
        great(node.right);   
    }
    great(root);

    return root
};
========================================================================================
//Inorder traverse right to left
var convertBST = function(root) {
    let sum = 0;

    function great(node){
        if(!node) return null;
        great(node.right);
     
        sum += node.val;
        node.val = sum;
        
        great(node.left);   
    }
    great(root);

    return root
};
