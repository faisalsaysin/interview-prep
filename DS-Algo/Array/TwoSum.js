/**
 * The improved version uses a collection to reduce time complexity.
 * Time Complexity - O(N2) brute_force & O(N) efficient
 * Space Complexity - O(1) brute_force & O(N) efficient
 */

function twoSum_brute(arr, sum) {
    for (let i = 0; i < arr.length; i++){
        const key = sum - arr[i];
        for (let j = 0; j < arr.length; j++){
            if (arr[j] === key && j !== i) {
                return [j, i];
            }
        }
    }
}

const twoSum = function(nums, target) {
    const cache = {};
    for(let i = 0; i < nums.length; i++){
        const key = target - nums[i];
        if(key in cache){
            return [cache[key], i];
        }
        cache[nums[i]] = i;
    }
};

console.log(twoSum_efficient([2,7,11,15], 9));