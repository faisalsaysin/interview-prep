// O(N) 
const twoSum_optimal = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    while(l < r){
        const sum = numbers[l] + numbers[r]
        if(sum == target){
            return [l+1, r+1];
        }
        else if(sum > target){
            r--;
        } else {
            l++;
        }
    }
};

// O(N2) 
const twoSum_brute = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            const sum = numbers[i] + numbers[j]
            if (sum == target) {
                return [i+1, j+1];
            } else if (sum > target) {
                break;
            }
        }
    }
};