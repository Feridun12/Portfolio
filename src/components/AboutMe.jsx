import React from "react";
import profile from "../images/profile-pic.jpg"
import "../styles/AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-left-side">
        <div className="about-me-profile-pic">
          <img
            className="profile-pic"
            src={profile}
            alt="a pic of me in the about part"
          />
        </div>
      </div>
      <div className="about-me-right-side">
        <h1 className="about-me-title">About me</h1>
        <p>
          I have started learning programming as a result of many finance and
          economics related jobs requiring programming languages like SQL that
          interact with databases. Therefore, I have decided to develop myself
          in this field and joined a software development bootcamp to learn
          about programming under professional supervision which let me to love
          web development. I think programming industry have more opportunities
          than any other industry and I am ready to catch them! 
          
          Ash-1999 "Gotta catch em all"
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
