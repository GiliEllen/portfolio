import React, { FC, forwardRef } from "react";
import * as Scroll from "react-scroll";
import MySkills from "./../mySkills/MySkills";
import figure1 from "../../assets/images/Group.svg";
import figure2 from "../../assets/images/Group 2.svg";
import figure3 from "../../assets/images/Group 3.svg";
import AboutCard from "./AboutCard";
import rectengle from "../../assets/images/Rectangle 1.svg";

let Link = Scroll.Link;
interface AboutProps {
  handleClickNav: CallableFunction;
}

const About = () => {
  return (
    <div className="about grid-about">
      {/* @ts-ignore */}
      <div name="about" className="pos-abt"></div>
      <div className="about__container">
        <h1 className="main-header">
          <span className="numbering">0.1.</span> Get To Know Me
        </h1>
        <div className="line"></div>
      </div>

      <div className="container">
        <div className="about__main">
          <div className="about__main__wrapper">
            <p>
              Greetings! I'm Gili, a web developer with a passion for bringing
              fantastical ideas to life on the internet. My journey in web
              development began with my love for fantasy and all things magical.
            </p>
            <p>
              Apart from coding, you can often find me immersing myself in
              fantasy novels or tabletop role-playing games. My love for fantasy
              inspires my creativity and fuels my desire to create unique online
              experiences that captivate users and transport them to enchanting
              digital worlds.
            </p>
          </div>
          <img src={figure2} className="about__main__picture" alt="" />
        </div>

      </div>
    </div>
  );
};

export default About;
