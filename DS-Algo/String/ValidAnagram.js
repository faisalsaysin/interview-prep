//If string contains unicode characters

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    s = s.normalize("NFC");
    t = t.normalize("NFC");

    const freq = {};
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = (freq[s[i]] || 0) + 1;
        freq[t[i]] = (freq[t[i]] || 0) - 1;
    }

    for (let key in freq) {
        if (freq[key] !== 0) return false;
    }

    return true;
};

// Time - O(NlogN)and Space - O(1)
const isAnagram_compromise = function (s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
};

// Time - O(S + T)and Space - O(S)
const isAnagram_better = function (s, t) {
    const freq = {};
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = (freq[s[i]] || 0) + 1;
        freq[t[i]] = (freq[t[i]] || 0) - 1;
    }

    for (let key in freq) {
        if (freq[key] !== 0) {
            return false;
        }
    }
    return true;
};

// Time - O(S + T)and Space - O(S + T)
const isAnagram_good = function (s, t) {
    const freq1 = {};
    const freq2 = {};
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        freq1[s[i]] = s[i] in freq1 ? freq1[s[i]] + 1 : 1;
        freq2[t[i]] = t[i] in freq2 ? freq2[t[i]] + 1 : 1;
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }
    return true;
};
