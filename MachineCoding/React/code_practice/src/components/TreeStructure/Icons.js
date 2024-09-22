import React from "react";
import { FaCircle, FaChevronRight } from "react-icons/fa";

const Icons = ({ hasChildren, onClick, isOpen }) => {
    return hasChildren ? (
        <FaChevronRight
            className={isOpen ? "rotate-90" : ""}
            style={{ height: "12px" }}
            onClick={onClick}
        />
    ) : (
        <FaCircle style={{ height: "8px" }} />
    );
};

export default Icons;
