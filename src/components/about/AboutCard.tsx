import React, {FC} from "react";

interface AboutCardProps {
  paragraph: string;
  svg: string;
}

const AboutCard:FC<AboutCardProps> = ({paragraph, svg}) => {
  return (
    <div className="about-card">
      <div className="about-card__image-container">
        <img src={svg} alt="" />
      </div>
      <div className="about-card__main">
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default AboutCard;
