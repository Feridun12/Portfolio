import React from "react";
import avatar from "../images/avatar.png";
import linkedin from "../images/linkedin-logo.png";
// import arrowSymbol from "../images/arrow-symbol.png";
import "../styles/Testimonials.scss";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1 id="testimonials-h1">Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            {/* <img src={arrowSymbol} alt="arrow"/> */}
            <img className="user-pic" src={avatar} alt="personal pic of the person" />
            <a
              href="https://www.linkedin.com/in/erselaker/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="testi-linkedin" src={linkedin} alt="linkedin logo" />
            </a>
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            tenetur, quasi commodi accusantium nam laudantium. Amet in
            doloremque error? Earum quod corporis aliquam reiciendis expedita
            nulla recusandae, delectus excepturi aperiam.
          </div>
          <div className="bottom">
            <h3>Ersel Aker</h3>
            <h4 id="testimonial-title">Founder of CyprusCodes</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
