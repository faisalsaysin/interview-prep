//Time - O(N) and Space - O(256)
var minWindow = function (s, t) {
    let minLen = s.length + 1,
        sIndex = -1,
        count = 0,
        l = 0,
        r = 0;
    const freq = {};

    for (let i = 0; i < t.length; i++) {
        if (t[i] in freq) {
            freq[t[i]]++;
        } else {
            freq[t[i]] = 1;
        }
    }

    while (r < s.length) {
        if (s[r] in freq) {
            freq[s[r]]--;
            if (freq[s[r]] >= 0) {
                count++;
            }
        }

        while (count === t.length) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                sIndex = l;
            }

            if (s[l] in freq) {
                freq[s[l]]++;
                if (freq[s[l]] > 0) {
                    count--;
                }
            }
            l++;
        }

        r++;
    }

    return sIndex === -1 ? "" : s.substring(sIndex, sIndex + minLen);
};

// Time - O(N2) and Space - O(256)
const minWindow = function (s, t) {
    let minLen = s.length,
        sIndex = -1;
    for (let i = 0; i < s.length; i++) {
        const freq = {};
        let count = 0;
        for (let j = 0; j < t.length; j++) {
            if (t[j] in freq) {
                freq[t[j]]++;
            } else {
                freq[t[j]] = 1;
            }
        }
        for (let j = 0; j < s.length; j++) {
            if (s[j] in freq) {
                count++;
                freq[s[j]]--;
            }
            if (count === t.length) {
                minLen = Math.min(minLen, j - i + 1);
                sIndex = i;
                break;
            }
        }
    }
    return s.substring(sIndex, sIndex + minLen);
};
