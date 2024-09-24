export const objectToArray = (obj) => {
    return Object.entries(obj).flat();
};

export const randomizeArray = (arr) => {
    const result = JSON.parse(JSON.stringify(arr));
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};
