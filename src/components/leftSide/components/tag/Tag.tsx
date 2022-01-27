import './Tag.css';

import React from "react";

interface TagProps {
    text: string;
}

function Tag({text}: TagProps) {
    return (
        <div className="Tag">
            {text}
        </div>
    );
}

export default Tag;