/**
 * The improved version uses a collection to reduce time complexity.
 * Time Complexity - O(N2) brute_force & O(N) efficient
 * Space Complexity - O(1) brute_force & O(N) efficient
 */

function twoSum_brute(arr, sum) {
    for (let i = 0; i < arr.length; i++){
        const part = sum - arr[i];
        for (let j = 0; j < arr.length; j++){
            if (arr[j] === part && j !== i) {
                return [j, i];
            }
        }
    }
}

function twoSum_efficient(arr, sum) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++){
        const part = sum - arr[i];
        if (map.has(part)) {
            return [map.get(part), i]
        }
        map.set(arr[i], i);
    }
}

console.log(twoSum_efficient([2,7,11,15], 9));