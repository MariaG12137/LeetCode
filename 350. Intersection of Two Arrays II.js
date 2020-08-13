/*
Given two arrays, write a function to compute their intersection.
*/
var intersect = function(nums1, nums2) {
    let map = new Map();
    let result = [];
    
    for(let num of nums1){
        if (!map.has(num)){
            map.set(num,1)
        }else{
            map.set(num,map.get(num)+1) //put nums1 into map
        }
    }
    for(let num of nums2){
        if(map.has(num)){
            if(map.get(num)!=0){
                result.push(num);
                map.set(num,map.get(num)-1)//get nums2 from map
            }
        }
    }
    console.log(map, result);
    return result;
};
