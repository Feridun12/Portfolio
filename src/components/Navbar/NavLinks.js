import React from "react";
import { motion } from "framer-motion";

function NavLinks(props) {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className="links">
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#home-page">Home</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#about-me">About Me</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#projects">Projects</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#testimonials">Testimonials</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://drive.google.com/file/d/1_MndIijJPro1qUeMIU4YFmMNT5VhqmZQ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
        CV
        </a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#contact-me">Contact Me</a>
      </motion.li>
    </ul>
  );
}

export default NavLinks;
