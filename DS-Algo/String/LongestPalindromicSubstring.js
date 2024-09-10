// O(N2)
var expandFromCenter = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return r - l - 1;
};

var longestPalindrome = function (s) {
    if (!s || s.length < 1) return "";
    let start = 0,
        end = 0,
        result = "";

    for (let i = 0; i < s.length; i++) {
        //even length
        const len1 = expandFromCenter(s, i, i);

        //odd length
        const len2 = expandFromCenter(s, i, i + 1);

        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
};
