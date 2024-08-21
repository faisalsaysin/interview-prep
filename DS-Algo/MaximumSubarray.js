// Kadane's Algorithm
// O(N) - along with max sub array
const maxSubArray_optimal_cross_question = function (nums) {
    let sum = nums[0];
    let max = nums[0];
    let start = 0;
    let end = 0;
    let s = 0;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] > sum + nums[i]){
            sum = nums[i]
            s = i;
        } else {
            sum += nums[i];
        }
        
        if(sum > max){
            max = sum;
            start = s;
            end = i;
        }
    }    
    return max;
};

const maxSubArray_optimal = function (nums) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] > sum + nums[i]){
            sum = nums[i]
        } else {
            sum += nums[i];
        }
        
        if(sum > max){
            max = sum;
        }
    }    
    return max;
};

// O(N2)
const maxSubArray_better = function (nums) {
    let max = Number.MIN_VALUE;
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j < nums.length; j++){
            sum += nums[j];
            max = Math.max(max, sum);
        }
    }
    return max;
};

// O(N3)
const maxSubArray_brute = function (nums) {
    let max = Number.MIN_VALUE;
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length; j++){
            let sum = 0;
            for(let k = i; k <= j; k++){
                sum += nums[k];
                max = Math.max(max, sum);
            }
        }
    }
    return max;
};