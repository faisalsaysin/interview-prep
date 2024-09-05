Array.prototype.myMap = function (cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
};

Array.prototype.myFilter = function (cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.myReduce = function (cb, initial) {
    let acc = initial !== undefined ? initial : this[0];
    let startIndex = initial !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }
};

Array.prototype.myFlat = function (depth = 1) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            result = result.concat(this[i].myFlat(depth - 1));
        } else {
            result.push(this[i]);
        }
    }
    return result;
};
