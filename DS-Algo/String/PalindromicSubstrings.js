// O(N2)
var expandFromCenter = function (s, l, r) {
    let count = 0;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        count++;
        l--;
        r++;
    }
    return count;
};

var countSubstrings = function (s) {
    let totalPalindromes = 0;
    for (let i = 0; i < s.length; i++) {
        //odd length palindromes
        totalPalindromes += expandFromCenter(s, i, i);
        //even length palindromes
        totalPalindromes += expandFromCenter(s, i, i + 1);
    }
    return totalPalindromes;
};

// O(N3)
var checkPalindrome = function (s, left, right) {
    let l = left,
        r = right;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

var countSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (checkPalindrome(s, i, j)) {
                count++;
            }
        }
    }
    return count;
};
