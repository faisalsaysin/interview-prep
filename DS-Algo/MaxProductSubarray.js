//O(N) 
const maxProduct = function (nums) {
    let prefix = 1;
    let suffix = 1;
    const length = nums.length
    let max = Number.MIN_VALUE;
    for(let i = 0; i < length; i++){
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;
        prefix = prefix * nums[i];
        suffix = suffix * nums[length - i - 1]
        max = Math.max(max, Math.max(prefix, suffix))
    }
    return max;
};