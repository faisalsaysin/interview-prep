import React, { useState, useEffect, useCallback } from "react";

const useDebounce = (func, delay) => {
    const [debounce, setDebounce] = useState(null);
    useEffect(() => {
        if (debounce === null) return;
        const timer = setTimeout(() => {
            func(debounce);
        }, delay);
        return () => clearTimeout(timer);
    }, [debounce, delay]);

    return (value) => setDebounce(value);
};

export default useDebounce;
