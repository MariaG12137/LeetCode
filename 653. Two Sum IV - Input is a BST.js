/*
Given a Binary Search Tree and a target number, 
return true if there exist two elements in the BST such that their
sum is equal to the given target.
*/
//Pre-order traversal with a set
var findTarget = function(root, k) {
    let set = new Set();
    let result = false;
    
    function find(node,k){
        if(!node) return;
        if(set.has(node.val)){
            result = true;
        }else{
            set.add(k-node.val)
        }
        find(node.left,k);
        find(node.right,k);
    }
    find(root,k);
    return result;
};
=================================================================================================
//same as above, but no result variable
var findTarget = function(root, k) {
    let set = new Set();
    
    function find(node,k){
        if(!node) return;
        if(set.has(node.val)){
            return true;
        }else{
            set.add(k-node.val)
        }
        return find(node.left,k) || find(node.right,k);
    }
    return find(root,k) || false;
};
==================================================================================================
//Use a queue, breaks when val found
var findTarget = function(root, k) {
    let set = new Set();
    let queue = [root];
    
    while(queue.length){
        const val = queue.shift();
        if(set.has(val.val)){
            return true;
        }
        else{
            set.add(k-val.val)
        }
        if(val.left){queue.push(val.left)}
        if(val.right){queue.push(val.right)}
    }
    return false;
};
