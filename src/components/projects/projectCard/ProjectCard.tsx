import React, { FC, useEffect, useState } from "react";
import { Project } from "../../../information/projects";
import github from "../../../assets/images/github.svg";

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, idx }) => {
  const [dir, setDir] = useState<any>("row");
  const [src, setSrc] = useState<string>();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    if (idx % 2 === 0) {
      setDir("row");
    } else {
      setDir("row-reverse");
    }
    if (windowSize < 500) {
      setDir("column-reverse");
    }
    setSrc(project.image);
  }, []);

  function handleHover() {
    setSrc(project.hover);
  }

  function handleLeave() {
    setSrc(project.image);
  }

  return (
    <div className="project" style={{ flexDirection: dir }}>
      <div
        className="project__main"
        style={
          dir === "left" ? { paddingRight: "37px" } : { paddingLeft: "25px" }
        }
      >
        <h2 className="project__main__feature">feature project</h2>
        <h1 className="project__main__header">{project.header}</h1>
        <p className="project__main__info">{project.info}</p>
        <div className="tech_list">
          {project.tech.map((technology) => {
            return <p>{technology}</p>;
          })}
        </div>
        <a href={project.link}>
          <button className="btn-project">
            <img src={github} alt="github logo" />
            Github
          </button>
        </a>
      </div>
      <div className="project__image-container">
        <img
          src={src}
          alt={project.header}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
