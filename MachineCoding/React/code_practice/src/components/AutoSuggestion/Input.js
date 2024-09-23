import React, { useState } from "react";

const Input = ({ customHandleInput }) => {
    console.log("input rerendered");
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
        customHandleInput(e.target.value);
    };
    return (
        <input name="search" onChange={handleInputValue} value={inputValue} />
    );
};

export default Input;
