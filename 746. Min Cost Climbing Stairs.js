/*
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost 
to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.
*/
var minCostClimbingStairs = function(cost) {
    let stepCost = [];
    stepCost[0]=cost[0];
    stepCost[1]=cost[1]
    
    for(let i=2; i<cost.length;i++){
        stepCost[i] = Math.min(stepCost[i-1],stepCost[i-2])+cost[i];
    }
    console.log(stepCost)
    return Math.min(stepCost[stepCost.length-1], stepCost[stepCost.length-2])
};
========================================================================================
var minCostClimbingStairs = function(cost) {
    let min1 = cost[0];
    let min2 = cost[1];
    let temp = 0;
    
    for(let i=2; i<cost.length;i++){
        temp = Math.min(min1,min2);
        min1 = min2;
        min2 = temp+cost[i]
    }
    return Math.min(min1,min2)
};
