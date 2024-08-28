// Time Complexitity = O(N) and Space Complexity = O(1)
// Uses Two pointer solution
function TimeToBuyStock_efficient(arr) {
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;
    while (sell < arr.length) {
        if (arr[sell] > arr[buy]) {
            const profit = arr[sell] - arr[buy];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            buy = sell;
        }
        sell += 1;
    }
    return maxProfit;
}

// Time Complexitity = O(N x M) and Space Complexity = O(1)
function TimeToBuyStock_brute(arr) {
    let buy;
    let sell;
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const profit = arr[j] - arr[i]
            if (profit > maxProfit) {
                maxProfit = profit;
                buy = i
                sell = j
            }         
        }        
    }
    return maxProfit
}

console.log(TimeToBuyStock_brute([7,6,4,3,1]));