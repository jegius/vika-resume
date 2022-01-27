import React, {ReactNode} from "react";
import './SkillList.css';
import ListHeader from "../listHeader/ListHeader";

interface SkillListProps {
    header?: string;
    children: ReactNode;
}

function SkillList({header, children}: SkillListProps) {
    return (
        <div className="SkillList">
            {
                header && <ListHeader text={header} />
            }
            <div className="SkillList__items">
                {children}
            </div>
        </div>
    );
}

export default SkillList;