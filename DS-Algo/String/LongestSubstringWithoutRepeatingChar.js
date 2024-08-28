// time - O(N) and space - O(N)
//cadbzabcd
var lengthOfLongestSubstring = function (s) {
    let max = 0,
        l = 0,
        r = 0;
    const hashMap = Object.create(null);
    while (r < s.length) {
        const char = s.charAt(r);
        if (char in hashMap) {
            if (hashMap[char] >= l) {
                l = hashMap[char] + 1;
            }
        }
        max = Math.max(max, r - l + 1);
        hashMap[char] = r;
        r = r + 1;
    }
    return max;
};

//time - O(N2) and space - O(256)
const lengthOfLongestSubstring_brute = function (s) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = Array(255).fill(false);
        for (let j = i; j < s.length; j++) {
            const ascii = s[j].charCodeAt(0);
            if (arr[ascii]) {
                break;
            }
            max = Math.max(max, j - i + 1);
            arr[ascii] = true;
        }
    }
    return max;
};
