import React from "react";
import './ListHeader.css';

interface HeaderProps {
    text: string;
    inverted?: boolean;
}

function ListHeader({text, inverted = false}: HeaderProps) {
    return (
        <h3 className="ListHeader" style={{
            color: inverted ? '#919193' : '#009899'
        }}>
            {text}
        </h3>
    );
}

export default ListHeader;