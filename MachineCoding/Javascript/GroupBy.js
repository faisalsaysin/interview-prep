function groupBy(arr, key) {
    const group = {};
    for (let i = 0; i < arr.length; i++) {
        const keyName = arr[i][key];
        if (!(keyName in group)) {
            group[keyName] = [];
        }
        const { [key]: _, ...restData } = arr[i];

        group[keyName].push(restData);
    }
    return group;
}

/**
 * 
 * const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 22 }
];

Output: { 21: ['Alice', 'Bob'], 22: ['Charlie'] }
 */

function groupBy(arr) {
    const group = {};
    for (let i = 0; i < arr.length; i++) {
        const keyName = arr[i].age;
        if (!(keyName in group)) {
            group[keyName] = [];
        }

        group[keyName].push(arr[i].name);
    }
    return group;
}
