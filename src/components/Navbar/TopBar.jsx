import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import "../Navbar/styles/TopBar.scss";

function TopBar() {
  return (
    <div className="top-bar">
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default TopBar;

/* <a href="#intro">Home</a>
        <a href="#about-me">About Me</a>
        <a href="#my-skills">My Skills</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact-me">Contact Me</a> */
