"use client";
import React from "react";
import Node from "./Node";

const Tree = ({ data }) => {
    return (
        <ul className="pl-4">
            {data &&
                data.length > 0 &&
                data.map((node) => <Node key={node.id} {...node} />)}
        </ul>
    );
};

export default Tree;
