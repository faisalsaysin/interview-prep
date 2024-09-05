import { useState, useMemo } from "react";
import Box from "./Box";
import Over from "./Over";
import { getRandomColors, shuffle } from "../utils";

const Game = ({ total }) => {
    const [activeColors, setActiveColors] = useState("");
    const [rounds, setRounds] = useState(0);
    const [revealedColors, setRevealedColors] = useState(new Set());
    const colors = getRandomColors(total / 2);
    const boxes = useMemo(() => {
        const pairedColors = shuffle([...colors, ...colors]);
        return pairedColors.map((color, index) => {
            return {
                id: index,
                bgColor: color,
            };
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [total]);
    const handleBoxClick = (color) => {
        if (activeColors.length === 0) {
            setActiveColors(color);
            return;
        }

        if (color === activeColors) {
            setRevealedColors((prev) => new Set(prev.add(color)));
            setActiveColors("");
        } else {
            setTimeout(() => {
                setActiveColors("");
            }, 400);
        }
        setRounds((prev) => prev + 1);
    };
    return (
        <div className="container">
            {revealedColors.size === total / 2 ? (
                <Over rounds={rounds} />
            ) : (
                <div>
                    <h2>Memory Game</h2>
                    <div className="boxes">
                        {boxes &&
                            boxes.length > 0 &&
                            boxes.map((box) => (
                                <Box
                                    activeColors={activeColors}
                                    revealedColors={revealedColors}
                                    key={box.id}
                                    onClick={handleBoxClick}
                                    {...box}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Game;
