import React from "react";
import TopBar from "./Navbar/TopBar";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Intro from "./Intro";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Projects />
        <Testimonials />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
