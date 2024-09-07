//Time O(N) and Space - O(1)

const isAlphaNumeric = function (char) {
    const code = char.charCodeAt(0);
    if (
        (code >= 97 && code <= 122) ||
        (code >= 65 && code <= 90) ||
        (code >= 48 && code <= 57)
    ) {
        return true;
    }
    return false;
};

const isPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        while (l < r && !isAlphaNumeric(s[l])) {
            l++;
        }
        while (r > l && !isAlphaNumeric(s[r])) {
            r--;
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
