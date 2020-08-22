/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same 
structure and node values with a subtree of s. A subtree of s is a tree consists of 
a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
*/
var isSubtree = function(s, t) {
    if(!s && !t) return true;
    if(!s) return false;
    if(!t) return true;
    
    function compare(a,b){   //See if two trees are exactly the same
        if(a == null && b==null) return true; //lowest level child when node.left/node.right == null
        if(a == null || b==null) return false; //IMPORTANT: when one tree reach the end, and the over is not
        return a.val == b.val && compare(a.left,b.left) && compare(a.right,b.right);
    }
    
    let same = false;
    function match(a,b){ //match the nodes
        if(!a || !b) return false;
        if(a.val == b.val){
            if(compare(a,b)) {
                same = true;
            }
        }
        match(a.left,b);
        match(a.right,b);
    }
    match(s,t);
    return same;

};
