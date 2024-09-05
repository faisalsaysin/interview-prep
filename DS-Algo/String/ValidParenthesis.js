// Time - O(N) and Space - O(N)

const isValid = function (s) {
    const braces = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"],
    ]);

    const output = [];
    for (let i = 0; i < s.length; i++) {
        if (braces.has(s[i])) {
            output.push(braces.get(s[i]));
        } else {
            if (s[i] !== output.pop()) {
                return false;
            }
        }
    }
    if (output.length !== 0) {
        return false;
    }
    return true;
};
