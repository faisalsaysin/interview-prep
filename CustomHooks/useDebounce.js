import React from "react";

const useDebouce = (callback, delay) => {
    const [debounceValue, setDebounceValue] = React.useState();

    React.useEffect(() => {
        if (debounceValue !== undefined) {
            const timer = setTimeout(() => {
                callback(debounceValue);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [debounceValue]);

    return (value) => setDebounceValue(value);
};

export default useDebouce;
