import React from "react";
import './Resume.css';
import Header from "../header/Header";
import LeftSide from "../leftSide/LeftSide";
import RightSide from "../rightSide/RightSide";
import Footer from "../footer/Footer";

function Resume() {
    return (
        <div className="Resume">
            <Header/>
            <div className="Resume__main">
                <LeftSide/>
                <RightSide/>
            </div>
            <Footer/>
        </div>
    );
}

export default Resume;