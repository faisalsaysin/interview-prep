function frequency(stringOrArray) {
    const freqMap = {};
    for (let i = 0; i < stringOrArray.length; i++) {
        if (stringOrArray[i] in freqMap) {
            freqMap[stringOrArray[i]]++;
        } else {
            freqMap[stringOrArray[i]] = 1;
        }
    }
    return freqMap;
}
