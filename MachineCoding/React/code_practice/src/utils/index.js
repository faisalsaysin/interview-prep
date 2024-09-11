export const generateRandomColor = () => {
    const random = () => Math.floor(Math.random() * 256);
    const r = random().toString(16).padStart(2, "0");
    const g = random().toString(16).padStart(2, "0");
    const b = random().toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
};

export const getRandomColors = (limit) => {
    const colorPaellete = {};

    for (let i = 0; i < limit; i++) {
        let color = generateRandomColor();
        while (color in colorPaellete) {
            color = generateRandomColor();
        }
        colorPaellete[i] = color;
    }
    return Object.values(colorPaellete);
};

export const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
