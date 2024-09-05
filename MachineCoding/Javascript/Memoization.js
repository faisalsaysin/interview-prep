const memoize = (func) => {
    const cache = {};
    return function (...args) {
        const strArgs = JSON.stringify(args);
        if (!cache[strArgs]) {
            cache[strArgs] = func(...args);
        }
        return cache[strArgs];
    };
};
