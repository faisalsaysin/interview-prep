// Space - O(26) Time - O(N)
const characterReplacement_efficient = function (s, k) {
    let l = 0,
        r = 0,
        max = 0,
        maxLen = 0,
        n = s.length;
    const freq = {};
    while (r < n) {
        if (s.charAt(r) in freq) {
            freq[s.charAt(r)]++;
        } else {
            freq[s.charAt(r)] = 1;
        }
        max = Math.max(max, freq[s.charAt(r)]);
        const changes = r - l + 1 - max;
        if (changes > k) {
            freq[s.charAt(l)]--;
            l++;
        }

        if (changes <= k) {
            maxLen = Math.max(maxLen, r - l + 1);
        }
        r++;
    }
    return maxLen;
};

// Space - O(26) Time - O(N2)
const characterReplacement_brute = function (s, k) {
    let n = s.length;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        const freq = {};
        let max = 0;
        for (let j = i; j < n; j++) {
            if (s[j] in freq) {
                freq[s[j]]++;
            } else {
                freq[s[j]] = 1;
            }
            max = Math.max(max, freq[s[j]]);
            const changes = j - i + 1 - max;
            if (changes <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            } else {
                break;
            }
        }
    }
    return maxLen;
};
