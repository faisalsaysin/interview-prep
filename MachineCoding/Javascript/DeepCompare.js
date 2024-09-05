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
