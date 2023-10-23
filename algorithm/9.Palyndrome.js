/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = x.toString().split('')
    let j = arr.length-1
    for(let i = 0; i<arr.length;i++){
        
        if(arr[i]!==arr[j]) return false
        else{
            j--
        }
    }
    return true
};