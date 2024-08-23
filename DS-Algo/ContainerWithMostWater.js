//O(N)
const maxArea_optimal = function (height) {
    let l = 0;
    const length = height.length
    let r = length - 1;
    let max = 0;
    while(l < r){
        const min = Math.min(height[l], height[r]);
        const sum = min * Math.abs(r - l);
        max = Math.max(max, sum);
        if(height[l] > height[r]){
            r--;
        } else {
            l++;
        }
    }
    return max;
};

//O(n2)
const maxArea_brute = function (height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i+1; j < height.length; j++) {
            const sum = Math.min(height[j], height[i]);
            max = Math.max(max, sum * (j - i));
        }        
    }
    return max;
};