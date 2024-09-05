Function.prototype.myCall = function (context, ...args) {
    context.fn = this;
    context.fn(...args);
};

Function.prototype.myApply = function (context, args) {
    if (!Array.isArray(args)) {
        throw new Error("args should be an array");
    }
    context.fn = this;
    context.fn(...args);
};

Function.prototype.myBind = function (context, ...args) {
    context.fn = this;
    return function (...nextArgs) {
        context.fn(...args, ...nextArgs);
    };
};
