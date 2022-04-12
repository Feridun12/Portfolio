import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.jpg";
import twitter from "../images/Twitter-Logo-Square.jpg";
// styling
import "../styles/ContactMe.css";

function ContactMe() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        "service_qaig6p9",
        "template_k3ffr3n",
        formRef.current,
        "EwDY51O29PTZwJTqB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // done ? "I will contact you as soon as possible!" : "cannot submit at the moment.";
  // console.log(done);
  return (
    <div className="contact-me" id="contact-me">
      <div className="contact-left-side">
        <div className="social-media-logos">
          <a
            className="linkedin-logo"
            href="https://www.linkedin.com/in/feridun-canselen-73666b200/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="contact-linkedin-logo" src={linkedin} alt="linkedin-logo" />
          </a>
          <a
            className="github-logo"
            href="https://github.com/Feridun12"
            target="_blank"
            rel="noreferrer"
          >
            <img className="contact-github-logo" src={github} alt="linkedin-logo" />
          </a>
          <a
            className="twitter-logo"
            href="https://twitter.com/FCanselen"
            target="_blank"
            rel="noreferrer"
          >
            <img className="contact-twitter-logo" src={twitter} alt="linkedin-logo" />
          </a>
        </div>
      </div>
      <div className="contact-right-side">
        <div className="form">
          <p id="contact-paragraph">Get in touch with me!</p>
          <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <input
              className="contact-input"
              type="text"
              placeholder="name"
              name="user_name"
            />
            <input
              className="contact-input"
              type="text"
              placeholder="surname"
              name="user_surname"
            />
            <input
              className="contact-input"
              type="text"
              placeholder="subject"
              name="user_subject"
            />
            <input
              className="contact-input"
              type="email"
              placeholder="example@hotmail.com"
              name="user_email"
            />
            <textarea
              id="contact-message-area"
              rows="5"
              placeholder="Your message"
              name="message"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
