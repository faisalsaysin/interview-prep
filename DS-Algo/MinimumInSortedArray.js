// O(log N) uses Binary search
const findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let ans = nums[0];
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[l] <= nums[mid]) {
            ans = Math.min(ans, nums[l]);
            l = mid + 1;
        } else {
            high = mid - 1;
            ans = Math.min(ans, nums[mid]);
        }
    }
    return ans;
};
