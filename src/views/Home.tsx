import React, { useRef } from "react";
import NavBar from "../components/navbar/NavBar";
import About from "../components/about/About";
import Intro from "../components/intro/Intro";
import MySkills from "../components/mySkills/MySkills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    //@ts-ignore
    <div className="home" name="home">
      {/* <div className="sm"></div> */}
      <div className="header--background"></div>
      <div className="session">
        <NavBar />
        <Intro />
        {/* <div name="about" className="about"> */}
        <About />
        <MySkills />
        {/* </div> */}
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
