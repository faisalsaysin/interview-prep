// @ts-nocheck
import React, { memo } from "react";
import { IoClose } from "react-icons/io5";

const Chip = memo(({ id, label, handleRemove }) => {
    console.log("chip rerendered");
    return (
        <div
            id={id}
            className="inline-flex items-center bg-stone-400 rounded-full p-2 cursor-pointer"
        >
            <p className="m-0">{label}</p>
            <IoClose fontSize="large" onClick={() => handleRemove(id)} />
        </div>
    );
});

export default Chip;
