/*
Given a binary tree, return the bottom-up level order traversal of 
its nodes' values. (ie, from left to right, level by level from leaf to root).
*/
//iterative
var levelOrderBottom = function(root) {
    let arr = [];
    
    function traverse(node, level){
        if(!node){
            return;
        }
        
        if(arr[level] === undefined){
            arr.push([node.val])
        }else{
            arr[level].push(node.val)
        }
        
        traverse(node.left, level+1);
        traverse(node.right,level+1);
    }
    traverse(root,0);
    return arr.reverse();
===================================================================================================================
//recursive 
var levelOrderBottom = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [];
    
    queue.push(root);
    let curr = root;
    
    
    while (queue.length > 0) {
        const currentSize = queue.length;
        let level = [];
        
        for (i = 0; i < currentSize; i++) {
            let curr = queue.shift();

            level.push(curr.val);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        result.unshift(level); // push the level to the front of the array to get the bottom up levels
    }
    
    return result;
};
