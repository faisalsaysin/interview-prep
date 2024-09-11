"use client";
import React from "react";

const Stopwatch = () => {
    const [time, setTime] = React.useState(0);
    const [counting, setCounting] = React.useState(false);

    React.useEffect(() => {
        let timer;
        if (counting) {
            timer = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [counting]);

    const handleStart = () => {
        setCounting(true);
    };
    const handlePause = () => {
        setCounting(false);
    };
    const handleReset = () => {
        setCounting(false);
        setTime(0);
    };
    return (
        <div className="container">
            <h1>{time}</h1>
            <div>
                <button disabled={counting} onClick={handleStart}>
                    Start
                </button>
                <button disabled={!counting} onClick={handlePause}>
                    Pause
                </button>
                <button
                    disabled={time === 0 && !counting}
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
