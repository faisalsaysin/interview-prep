function curry(func) {
    return function anotherCurry(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }
        return function (...nextArgs) {
            return anotherCurry(...args, ...nextArgs);
        };
    };
}

function infiniteCurry(a) {
    return function (b) {
        if (b) {
            return infiniteCurry(a + b);
        }
        return a;
    };
}
