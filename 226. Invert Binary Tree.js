/*
Invert a binary tree.
*/
var invertTree = function(root) {
    if(!root){return root};
    if(root){
        invertTree(root.left);
        invertTree(root.right);
        [root.left, root.right] = [root.right,root.left];
    }
    return root;
};
