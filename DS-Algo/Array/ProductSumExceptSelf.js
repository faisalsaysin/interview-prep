// Time Complexitity = O(N) and Space Complexity = O(1)
const productExceptSelf_optimal = function (nums) {
    const output = [];
    let prefix = 1;
    for(let i = 0; i < nums.length; i++){
        output[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        output[i] *= postfix;
        postfix *= nums[i];
    }

    return output;
};

// Time Complexitity = O(N) and Space Complexity = O(N)
const productExceptSelf_better = function (nums) {
    const output = [];
    const prefix = [];
    const postfix = [];

    let temp = 1;
    for(let i = 0; i < nums.length; i++){
        temp = temp * nums[i];
        prefix[i] = temp;
    }

    let temp2 = 1;
    for(let i = nums.length-1; i >= 0; i--){
        temp2 = temp2 * nums[i];
        postfix[i] = temp2;
    }

    for(let i = 0; i < nums.length; i++){
        if(i === 0)
            output[i] = postfix[i+1]
        else if (i === nums.length - 1)
            output[i] = prefix[i-1]
        else
            output[i] = prefix[i-1] * postfix[i+1];
    }
    return output;
};

var productExceptSelf_brute = function(nums) {
    const output = [];
    for(let i = 0; i < nums.length; i++){
        let sum = 1;
        for(let j = 0; j < nums.length; j++){
            if(j !== i){
               sum = sum * nums[j];
            }
        }
        output[i] = sum;
    }
    return output;
};