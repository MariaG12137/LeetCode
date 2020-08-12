/*
Given a binary tree, return all root-to-leaf paths.
*/
var binaryTreePaths = function(root) {
    if(!root){return []}
    const arr = [];
    //must declare a new function, because if we recursively call the binaryTreePaths, the arr and temp will be emptied for every recursive call
    const recur = (node,temp) => {
        console.log(node);
        temp += `${node.val}`;
        if(!node.left && !node.right){
            arr.push(temp); //arr is static, so we don't need to carry it with our recur function
        }else{
            temp += '->';
        }
        if(node.left != null) {recur(node.left,temp)};
        if(node.right != null) {recur(node.right,temp)};
    }
    recur(root,'');
    return arr
};
