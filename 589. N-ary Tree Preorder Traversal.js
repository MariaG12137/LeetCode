/*
Given an n-ary tree, return the preorder traversal of its nodes' values.
*/
var preorder = function(root) {   
    let result = [];
    function traverse(node){
        if(!node) return;
        result.push(node.val);
        let i= 0;
        while(node.children[i]){
            traverse(node.children[i])
            i++
        }
    }
    traverse(root);
    return result;
};
===============================================================================================================
//second submission
var preorder = function(root) {
    let result = [];
    function preOrder(node){
        if(!node){
            return;
        }
        result.push(node.val);
        for(let child of node.children){
            preOrder(child);
        }
    }
    preOrder(root);
    return result
};
