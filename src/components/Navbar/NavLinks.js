import React from "react";

function NavLinks(props) {
  return (

    <ul className="links">
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#intro">Home</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#about-me">About Me</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#my-skills">My Skills</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#contact-me">Contact Me</a>
      </li>
    </ul>
  );
}

export default NavLinks;
