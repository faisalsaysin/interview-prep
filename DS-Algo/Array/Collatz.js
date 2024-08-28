/**
 * The improved version has memoization done so that expensive calculations can be saved and used to remove redundant calculations.
 * Time Complexity - O(NlogN) 
 * Space Complexity - O(1) brute_force & O(N) efficient
 */

function collatz_efficient(n, memo) {
    let length;
    if (n === 1) {
        return 1;
    }
    if (n in memo) {
        return memo[n];
    }
    if (n % 2 === 0) {
        length = collatz_efficient(n / 2, memo) + 1;
    } else {
        length = collatz_efficient((3 * n + 1), memo) + 1;
    }
    memo[n] = length;
    return length;
}

function collatz_brute(n) {
    let count = 0;
    let temp = n;
    while (temp !== 1) {
        if (temp % 2 === 0) {
            temp = temp / 2;
        } else {
            temp = (temp * 3) + 1;
        }
        count++;
    }
    return count + 1;
}

function findLongestCollatz() {
    let maxLength = 0;
    let number;
    const memo = {};
    for (let i = 10; i <= 10000; i++){
        // const currentLength = collatz_brute(i)
        const currentLength = collatz_efficient(i, memo)
        if (currentLength > maxLength) {
            maxLength = currentLength;
            number = i;
        }
    }
    return {number, maxLength}
}

console.log(findLongestCollatz());
