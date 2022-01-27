import React from "react";
import './Header.css';
import CommonInfo from "./components/CommonInfo/CommonInfo";
import Avatar from "./components/Avatar/Avatar";

function Header() {
    return (
        <div className="Header">
            <div className="Header__left">
                <Avatar/>
            </div>
            <div className="Header__right">
                <div className="Header__item" />
                <CommonInfo/>
                <div className="Header__item">
                    <h3 className="Header__about-me"> О СЕБЕ </h3>
                </div>
            </div>
        </div>
    );
}

export default Header;