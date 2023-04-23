import idigital from "../assets/images/projects/idigital.svg";
import idigitalHover from "../assets/images/projects/idigital-hover.svg";
import dnd from "../assets/images/projects/dnd.svg";
import dndHover from "../assets/images/projects/dnd-hover.svg";
import gamenight from "../assets/images/projects/game-night.svg";
import gamenightHover from "../assets/images/projects/game-night-hover.svg";

export interface Project {
  header: string;
  image: string;
  info: string;
  link: string;
  tech: string[];
  hover: string
}

export const projects: Project[] = [
  {
    header: "iDigital-project",
    image: idigital,
    info: "This is a fullstack development project that I built with another developer to create a fully functional idigital store. The project allows users to browse idigital products, add them to their cart, and checkout using Stripe.",
    link: "https://github.com/GiliEllen/idigital-project",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express", "MySQL"],
    hover: idigitalHover
  },
  {
    header: "Game-night",
    image: gamenight,
    info: "This app is a fullstack project that allows users to log in and schedule game nights events, where other users can sign up to.",
    link: "https://github.com/GiliEllen/GameNight-React-Node.js-Redux-MySQL",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express", "MySQL"],
    hover: gamenightHover
  },
  {
    header: "DnD App",
    image: dnd,
    info: "This web application allows users to create an account, create or join a room and invite friends, and then manage a DND campaign. I'm currently working on a new version with React.js.",
    link: "https://github.com/GiliEllen/Dnd-Mega-Project",
    tech: ["Node.js", "Express", "MongoDB"],
    hover: dndHover
  },
];
