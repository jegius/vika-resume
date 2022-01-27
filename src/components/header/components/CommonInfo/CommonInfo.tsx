import React from "react";
import './CommonInfo.css';

function CommonInfo() {
    return (
        <div className="CommonInfo">
            <h2 className="CommonInfo__name">Виктория Алексеева</h2>
            <h4 className="CommonInfo__job-title">QA Инженер</h4>
            <div className="CommonInfo__labels">
                <div className="CommonInfo__label">замужем</div>
                <div className="CommonInfo__label">31 год</div>
                <div className="CommonInfo__label">готова к релокации</div>
            </div>
        </div>
    );
}

export default CommonInfo;