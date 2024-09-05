import { useState, useEffect } from "react";
import { DEFAULT_COLOR } from "../constants";

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
            className="box"
            onClick={handleClick}
        />
    );
};

export default Box;
