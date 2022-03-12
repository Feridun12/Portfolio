import React from "react";
import "../styles/TopBar.scss";

function TopBar () {
    return (
        <div className="top-bar">
        <div className="wrapper">
            <div className="nav-bar">
            <a href="#intro">Home</a></div>
            <a href="#about-me">About Me</a>
            <a href="#my-skills">My Skills</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact-me">Contact Me</a>
            </div>
        </div>
    )
}

export default TopBar;