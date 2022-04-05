import React, { useEffect, useRef } from "react";
import "../styles/Intro.scss";
import { init } from "ityped";
// import { CgArrowDownR } from "react-icons/cg";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      backSpeed: 50,
      cursorChar: "|",
      strings: [
        " a Fullstack Developer ",
        " an Economist ",
        " a Tech Enthusiast ",
      ],
    });
  }, []);
  return (
    <div className="intro" id="home-page">
      <div className="wrapper">
        <h1 className="name">Feridun Djanselen</h1>
        <h3 id="intro-h3">
          I am <span ref={textRef} />
        </h3>
      </div>
      {/* <a href="#about-me" id="arrow-sign">
        <CgArrowDownR size="40px" color="white" />
        </a> */}
    </div>
  );
}
export default Intro;
