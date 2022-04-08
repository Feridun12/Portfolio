import React from "react";
import "../styles/AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-left-side">
        <div className="profile-bground-pic"></div>
        <div className="about-me-profile-pic">
          <img
            className="profile-pic"
            src="https://scontent.fecn1-1.fna.fbcdn.net/v/t1.6435-9/62371332_2470882449641014_3512762066731532288_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hwe2X5KcCh4AX-6YogV&_nc_ht=scontent.fecn1-1.fna&oh=00_AT-XsbTLny0xzMlDUL4ALCqVLfi3fVSxvnydCT1SHlNpNg&oe=62743682"
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
