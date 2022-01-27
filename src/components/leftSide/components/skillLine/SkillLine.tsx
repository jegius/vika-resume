import React from "react";
import './SkillLine.css';

interface SkillLineProps {
    level: number;
    title: string;
}

function detectColor(skillLevel: number): string {
    const LOW_LEVEL = 30;
    const HIGHT_LEVEL = 50;

    if (skillLevel <= LOW_LEVEL) {
        return '#fa4f5b';
    } else if ((skillLevel >= LOW_LEVEL) && (skillLevel <= HIGHT_LEVEL)) {
        return '#ffc620';
    } else {
        return '#009899';
    }
}

function SkillLine({level, title}: SkillLineProps) {
    return (
        <div className="SkillLine">
            <h4 className="SkillLine__title">{title}</h4>
            <div className="SkillLine__line">
                <span className="SkillLine__point" style={{
                    left: `${level}%`,
                    backgroundColor: detectColor(level),
                }}/>
            </div>
        </div>
    );
}

export default SkillLine;