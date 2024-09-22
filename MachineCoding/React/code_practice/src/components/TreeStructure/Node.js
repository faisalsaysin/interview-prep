import React, { useState } from "react";
import Tree from "./index";
import Icons from "./Icons";

const Node = ({ id, children, label, href }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = children && children.length > 0;
    return (
        <li className="list-none cursor-pointer" id={id}>
            <div className="flex items-center gap-1">
                <Icons
                    hasChildren={hasChildren}
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <a className="text-[#0097e6] hover:underline" href={href}>
                    {label}
                </a>
            </div>
            {hasChildren && isOpen && (
                <div className="node-content">
                    <Tree data={children} />
                </div>
            )}
        </li>
    );
};

export default Node;
