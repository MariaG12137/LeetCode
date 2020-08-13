/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of
the two subtrees of every node never differ by more than 1.
*/
var sortedArrayToBST = function(nums, start=0, end = nums.length-1) {
    if(start<=end){
        let mid = Math.floor((start+end)/2); //BST always starts at the middle
        let root = new TreeNode(nums[mid]);
        root.left = sortedArrayToBST(nums,start,mid-1); //Use Pre-order recursion.(top to bottom) The recursion call will fill root bottom to top 
        root.right = sortedArrayToBST(nums,mid+1,end);
        return root;
    }
    return null;
};
