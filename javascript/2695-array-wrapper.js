/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper{
    constructor(nums){
        this.arr = nums
    }
}
/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let res = 0
    if(this.arr.length === 0) return res
    for(const num of this.arr){
        res += num
    }
    return res
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.arr.join(',')}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */