// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 


// Sequential algorithm

// var searchInsert = function(nums, target) {
//     let position = 0;
//     for(const num of nums){
//         if(num === target){
//             return nums.indexOf(target)
//         }else if(num < target){
//             position = nums.indexOf(num)+1
//         }
//     }
//     return position
// };

var searchInsert = function(nums, target) {
    let lo = 0, hi= nums.length-1;
 
    while(lo<hi){
        let mid =  Math.floor((hi-lo)/2)
        console.log(mid)
        if(target < nums[mid]){
            hi=mid
        }else{
            lo=mid
        }
    }
 
     return nums[lo]==target?lo:-1
 };

 searchInsert([1,2,3,4,5,6],3)
