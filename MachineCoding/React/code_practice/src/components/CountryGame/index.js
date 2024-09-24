"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import Option from "./Option";
import { DATA } from "./data";
import { objectToArray, randomizeArray } from "./utils";

const CountryGame = () => {
    const [gameData, setGameData] = useState([]);
    const [selected, setSelected] = useState([]);
    const [correct, setCorrect] = useState([]);
    const [incorrect, setIncorrect] = useState([]);
    const [correctSelections, setCorrectSelections] = useState(new Set());

    useEffect(() => {
        setGameData(randomizeArray(objectToArray(DATA)));
    }, []);

    const handleOnClick = (id) => {
        if (selected.length) {
            if (id === selected[0]) return;
            setSelected((prev) => [...prev, id]);
            if (DATA[selected[0]] === id || DATA[id] === selected[0]) {
                setCorrect(() => [id, selected[0]]);
                setTimeout(() => {
                    setCorrectSelections(
                        (prevSet) => new Set([...prevSet, id, selected[0]])
                    );
                    setSelected([]);
                    setCorrect([]);
                }, 1000);
            } else {
                setIncorrect(() => [id, selected[0]]);
                setTimeout(() => {
                    setSelected([]);
                    setIncorrect([]);
                }, 1000);
            }
        } else {
            setSelected((prev) => [...prev, id]);
        }
    };

    return (
        <div className="flex flex-wrap gap-5 items-center justify-center">
            {gameData &&
                gameData.length > 0 &&
                gameData.map((option) => {
                    const isSelected = selected.includes(option);
                    const isCorrect = correct.includes(option);
                    const isIncorrect = incorrect.includes(option);
                    const borderColor = isCorrect
                        ? "border-green-500"
                        : isIncorrect
                        ? "border-red-500"
                        : isSelected
                        ? "border-blue-500"
                        : "border-[#414141]";
                    if (correctSelections.has(option)) return;
                    return (
                        <Option
                            key={option}
                            label={option}
                            id={option}
                            borderColor={borderColor}
                            handleClick={handleOnClick}
                        />
                    );
                })}
        </div>
    );
};

export default CountryGame;
