import React, { memo } from "react";

// @ts-ignore
const List = memo(({ list, handleSelect }) => {
    console.log("list rerendered");
    return (
        <>
            {list && list.length > 0 && (
                <ul className="list-none m-0 absolute top-11 bg-gray-300 rounded max-h-80 overflow-scroll">
                    {list.map((item) => (
                        <li
                            className="p-2 m-0 hover:bg-gray-400 cursor-pointer"
                            key={item.id}
                            onClick={() => handleSelect(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
});

export default List;
