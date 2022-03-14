import React from "react";
import "../Navbar/styles/TopBar.scss";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="wrapper">
        <a href="#intro">Home</a>
        <a href="#about-me">About Me</a>
        <a href="#my-skills">My Skills</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact-me">Contact Me</a>
      </div>
    </div>
  );
}

export default TopBar;
