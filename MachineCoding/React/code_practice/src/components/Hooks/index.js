// @ts-nocheck
"use client";
import React from "react";

// useMemo - Starts
const UseMemoUsage = () => {
    const [count, setCount] = React.useState(0);
    const [input, setInput] = React.useState("");

    const calculate = (num) => {
        console.log("calculating...");
        let result = 0;
        for (let i = 0; i < 100000; i++) {
            result += i;
        }
        return result * num;
    };

    const calculatedCount = React.useMemo(() => calculate(count), [count]);

    return (
        <div>
            <h2>useMemo Usage</h2>
            <div>
                <p>count : {count}</p>
                <p>calculated count : {calculatedCount}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>
                    Calculate
                </button>
            </div>
            <div>
                <p>input value: {input}</p>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </div>
    );
};

// useMemo - Ends

// useCallback - Starts
const UseCallbackUsage = () => {
    const [count, setCount] = React.useState(0);
    const [input, setInput] = React.useState("");

    const handleClick = React.useCallback(() => {
        setCount((prev) => prev + 1);
    }, [count]);

    return (
        <div>
            <h2>useCallback Usage</h2>
            <div>
                <p>count is : {count}</p>
                <UseCallbackUsageChild handleClick={handleClick} />
            </div>
            <div>
                <p>input is: {input}</p>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </div>
    );
};

const UseCallbackUsageChild = React.memo(({ handleClick }) => {
    console.log("rendering");
    return <button onClick={handleClick}>Click Me</button>;
});

// useCallback - Ends

// useReducer - Starts
const UseReducerUsage = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD": {
                return state + 1;
            }
            case "SUB": {
                return state - 1;
            }
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, 0);

    return (
        <>
            <h2>useRef Usage</h2>
            <h3>{state}</h3>
            <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
            <button onClick={() => dispatch({ type: "SUB" })}>Sub</button>
        </>
    );
};

// useReducer - Ends

// useRef - Starts
const UseRefUsage = () => {
    const [count, setCount] = React.useState(0);
    const countRef = React.useRef(null);
    const inputRef = React.useRef(null);

    const handleClick = () => {
        countRef.current = count;
        setCount((prev) => prev + 1);
    };

    React.useEffect(() => {
        if (inputRef) {
            inputRef.current.focus();
            console.log(inputRef);
        }
    }, []);
    return (
        <div>
            <h2>useRef Usage</h2>
            <div>
                <p>
                    count is : {count} and prev value is :{" "}
                    {countRef ? countRef.current : "N/A"}
                </p>
                <button onClick={handleClick}>Add</button>
            </div>
            <div>
                <p>On load focus</p>
                <input type="text" ref={inputRef} />
            </div>
        </div>
    );
};
// useRef - Ends

const Hooks = () => {
    return (
        <div className="flex flex-wrap justify-around">
            <div>
                <UseMemoUsage />
            </div>
            <div>
                <UseCallbackUsage />
            </div>
            <div>
                <UseReducerUsage />
            </div>
            <div>
                <UseRefUsage />
            </div>
        </div>
    );
};

export default Hooks;
