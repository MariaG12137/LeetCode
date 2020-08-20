/*
Design a HashSet without using any built-in hash table libraries.
*/
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.arr = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(!this.arr.includes(key)){
        this.arr.push(key)
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    for (let i=0;i<this.arr.length;i++){
        if(this.arr[i]==key){
            this.arr.splice(i,1)
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if(this.arr.includes(key)){
        return true;
    }
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
