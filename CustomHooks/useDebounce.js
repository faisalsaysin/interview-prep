import React from "react";

const useDebouce = (callback, delay) => {
    const [debounceValue, setDebounceValue] = React.useState();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            callback(debounceValue);
            return () => clearTimeout(timer);
        }, delay);
    }, [debounceValue]);

    return (value) => setDebounceValue(value);
};

export default useDebouce;
