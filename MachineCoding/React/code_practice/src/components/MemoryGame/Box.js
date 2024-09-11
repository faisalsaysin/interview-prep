import React from "react";
import { useState, useEffect } from "react";
import { DEFAULT_COLOR } from "@/constants";

const Box = ({ bgColor, id, onClick, revealedColors, activeColors }) => {
    const isRevealed = revealedColors.has(bgColor);
    const [backgroundColor, setBackgroundColor] = useState(
        isRevealed ? bgColor : DEFAULT_COLOR
    );

    useEffect(() => {
        if (!isRevealed && activeColors.length === 0) {
            setBackgroundColor(DEFAULT_COLOR);
        }
    }, [isRevealed, activeColors]);

    const handleClick = () => {
        if (backgroundColor !== DEFAULT_COLOR) {
            return;
        }

        setBackgroundColor(bgColor);
        onClick(bgColor);
    };
    return (
        <div
            key={id}
            style={{ backgroundColor: backgroundColor }}
            className=" w-[100px] h-[100px] border transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer border-solid border-[black]"
            onClick={handleClick}
        />
    );
};

export default Box;
