//O(NlogN + O(N2))
const threeSum = function(nums) {
    const output = [];
    nums = nums.sort((a, b) => a-b);
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        let l = i+1;
        let r = nums.length - 1;
        while(l < r){
            const sum = nums[i] + nums[l] + nums[r];
            if(sum > 0){
                r = r - 1;
            } else if( sum < 0){
                l = l + 1;
            } else {
                output.push([nums[i], nums[l], nums[r]])
                while(nums[l] == nums[l+1] && l < r){
                    l = l + 1
                }
                while(nums[r] == nums[r-1] && l < r){
                    r = r - 1
                }
                l++;
                r--;
            }            
        }
    }
    return output
};