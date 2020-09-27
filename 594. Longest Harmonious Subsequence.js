/*
We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.
*/
var findLHS = function(nums) {
    let map = new Map();

    
    for(let num of nums){
        if(!map.has(num)){
            map.set(num,{'num':0,'small':0,'big':0})
        }
    }
    
    for(let num of nums){
        for(let key of map.keys()){
            if(num==key-1){
                map.get(key)['small'] += 1;
            }
            if(num==key+1){
                map.get(key)['big'] += 1;
            }
            if(num== key){
                map.get(num)['num']+=1;
            }
        }
    }

    console.log(map)
    let result = 0;
    for(let value of map.values()){
        if (value.big !=0){
            result = Math.max(value.num+value.big,result)
        }
        if(value.small != 0){
            result = Math.max(value.num+value.small, result)
        }
    }
    return result;

};
===============================================================================================================
var findLHS = function(nums) {
    let map = new Map();

    for(let num of nums){
        if(!map.has(num)){
            map.set(num,1)
        }else{
            map.set(num,map.get(num)+1)
        }
    }
    console.log(map);
    let result = 0;
    for(let key of map.keys()){
        if(map.has(key+1)){
            result = Math.max(result,map.get(key)+map.get(key+1))
        }
        if(map.has(key-1)){
            result = Math.max(result,map.get(key)+map.get(key-1))
        }
    }
    
    return result;

};
==========================================================================================================================
var findLHS = function(nums) {
    let result = 0;
    let map = new Map();
    
    for(let num of nums){
        if(!map.has(num)){
            map.set(num,[1,0,0])
        }else{
            map.get(num)[0]++;
        }
    }
    
    for(let num of nums){
        if(map.has(num-1)){
            map.get(num-1)[2]++;
        }
        if(map.has(num+1)){
            map.get(num+1)[1]++;
        }
    }

    for(let value of map.values()){
        if(value[1]!==0 || value[2]!==0){
            result = Math.max(result,value[0]+value[1],value[0]+value[2])
        }
    }
    
    return result
};
