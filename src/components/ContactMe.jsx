import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import "../styles/ContactMe.scss";

function ContactMe() {
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
            <img
              src="/Users/gadmer/projects/portfolio/portfolio/src/images/linkedin-logo.jpg"
              alt="linkedin-logo"
            />
          </a>
          <a
            className="github-logo"
            href="https://github.com/Feridun12"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size="40px" color="black" />
          </a>
          <a
            className="twitter-logo"
            href="https://twitter.com/FCanselen"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare size="40px" color="black" />
          </a>
        </div>
      </div>
      <div className="contact-right-side">
        <div className="form">
          <p id="contact-paragraph">Get in touch with me!</p>
          <form id="contact-form">
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
            <textarea id="contact-message-area" rows="5" placeholder="Your message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
