import React, { useState } from "react";
import htmlSVG from "../../assets/images/skills/html-5.svg";
import cssSVG from "../../assets/images/skills/css-3.svg";
import jsSVG from "../../assets/images/skills/javascript.svg";
import tsSVG from "../../assets/images/skills/typescript.svg";
import reactSVG from "../../assets/images/skills/react.svg";
import reduxSVG from "../../assets/images/skills/redux.svg";
import gitSVG from "../../assets/images/skills/git.svg";
import githubSVG from "../../assets/images/skills/github.svg";
import sassSVG from "../../assets/images/skills/sass.svg";
import expressSVG from "../../assets/images/skills/express.svg";
import mongoDBSVG from "../../assets/images/skills/mongodb.svg";
import nodeSVG from "../../assets/images/skills/nodejs.svg";
import mysqlSVG from "../../assets/images/skills/mysql.svg";
import SkillContainer from "./SkillContainer";

const MySkills = () => {
  const [imgArray, setImageArray] = useState([htmlSVG, cssSVG, jsSVG, tsSVG]);
  const [imgArray2, setImageArray2] = useState([
    reactSVG,
    reduxSVG,
    sassSVG,
    gitSVG,
  ]);
  const [imgArray3, setImageArray3] = useState([
    nodeSVG,
    expressSVG,
    mongoDBSVG,
    mysqlSVG,
  ]);

  return (
    <div className="skills grid-skills">
      <div className="skills__header">
        <h1 className="skills__main">
          <span className="numbering">02.</span> a few technologies I’ve been
          working with
        </h1>

        <div className="line"></div>
      </div>
      <div className="skills__container">
        <div className="skills__container__row">
          {imgArray.map((img) => {
            return <SkillContainer svg={img} />;
          })}
        </div>
        <div className="skills__container__row">
          {imgArray2.map((img) => {
            return <SkillContainer svg={img} />;
          })}
        </div>
        <div className="skills__container__row">
          {imgArray3.map((img) => {
            return <SkillContainer svg={img} />;
          })}
        </div>
      </div>
      <div className="skills__segment">
        <div className="skills__header">
          <h1 className="skills__main">other stuff i know</h1>
          <div className="line"></div>
        </div>
        <div className="other-stuff">
          <p>Responsive desgin</p>
          <p>Figma</p>
          <p>Following UX/UI</p>
          <p>Desgin Patterns</p>
          <p>BEM</p>
          <p>and more...</p>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
