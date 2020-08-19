/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
*/
var averageOfLevels = function(root) {
    let total = [];
    let count = [];
    
    function average(node,level){
        if(!node) return;
 
        if(total[level] === undefined){
            total[level] = node.val;
            count[level] = 1;
        }else{
            total[level] += node.val;
            count[level] += 1;
        }
        
        average(node.left,level+1);
        average(node.right,level+1)
    }
    average(root,0);
    console.log(total,count);
    for(let i=0; i<total.length;i++){
        total[i] = total[i]/count[i]
    }
    return total;
};
