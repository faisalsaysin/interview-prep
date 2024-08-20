// Time Complexitity = O(N) and Space Complexity = O(1)
// Uses Two pointer solution
function BestTimeToBuyStockII_efficient(arr) {
    let right = 1;
    let profit = 0;
    while (right > arr.length) {
        if (arr[right] > arr[right - 1]) {
            profit += arr[right] > arr[right - 1];
        }
        right++;
    }
    return profit;
}