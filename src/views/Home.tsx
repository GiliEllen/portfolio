import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import About from "../components/about/About";
import Intro from "../components/intro/Intro";
import MySkills from "../components/mySkills/MySkills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import figure2 from "../assets/images/Group 2.svg";

const Home = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setIsMobile(width <= 768)
  }, [width])

  return (
    //@ts-ignore
    <div className="home" name="home">
      {/* <div className="sm"></div> */}
      <div className="header--background"></div>
      <div className="session">
        <NavBar />
        <Intro />
        {/* <div name="about" className="about"> */}
        
        <About isMobile={isMobile}/>
        <MySkills />
        {/* </div> */}
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
