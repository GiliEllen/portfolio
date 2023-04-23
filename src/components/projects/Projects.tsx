import React from "react";
import { projects } from "../../information/projects";
import ProjectCard from "./projectCard/ProjectCard";

const Projects = () => {
  return (
    //@ts-ignore
    <div className="projects grid-projects" name="projects">
      <div className="projects__header">
        <h1 className="header__main"><span className="numbering">03.</span> some projects i've built</h1>
        <div className="line"></div>
      </div>
      <div className="projects__container">
        {projects.map((project, idx) => {
          return (
            <ProjectCard
              project={project}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
