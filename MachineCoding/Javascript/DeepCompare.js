const deepCompare = (obj1, obj2) => {
    if (obj1 === obj2) return true;

    if (
        typeof obj1 !== "object" ||
        obj1 === null ||
        typeof obj2 !== "object" ||
        obj2 === null
    )
        return false;

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) return false;

    for (const key of obj1Keys) {
        if (!obj2Keys.includes(key) || !deepCompare(obj1[key], obj2[key]))
            return false;
    }

    return true;
};

function deepEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!deepEqual(arr1[i], arr2[i])) return false;
        } else if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function equal(arr, arr2) {
    if (arr.length !== arr2.length) return false;

    const frequency = {};
    for (let num of arr) {
        if (num in frequency) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    for (let num of arr2) {
        if (!(num in frequency)) {
            return false;
        }
        frequency[num]--;

        if (frequency[num] === 0) {
            delete frequency[num];
        }
    }
    return Object.keys(frequency) === 0 ? true : false;
}
