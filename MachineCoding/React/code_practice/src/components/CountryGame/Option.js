import React from "react";

const Option = ({ id, label, handleClick, borderColor }) => {
    return (
        <button
            id={id}
            className={`bg-slate-300 text-black hover:bg-slate-400 border-2 ${borderColor}`}
            onClick={() => handleClick(id)}
        >
            {label}
        </button>
    );
};

export default Option;
