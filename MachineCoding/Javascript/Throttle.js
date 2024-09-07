function throttle(func, delay) {
    let canRun = true;
    return function (...args) {
        if (canRun) {
            func.apply(this, args);
            canRun = false;
            setTimeout(() => {
                canRun = true;
            }, delay);
        }
    };
}
