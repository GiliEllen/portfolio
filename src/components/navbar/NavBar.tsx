import React, { FC, useState } from "react";
import * as Scroll from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

let Link = Scroll.Link;
interface NavBarProps {
  handleClickNav: CallableFunction;
}

const NavBar = () => {
  const handleDownload = () => {
    window.open('portfolio/src/assets/docs/Gili Menahen - Resume - FullStack Developer.pdf')
  }


  return (
    <header className="header">

      <div className="header__content">
        <div className="header__logo">Gili Menahem</div>
        <nav className="header__main">
          <ul className="header__links">
            <li>
              <Link to="intro" smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li>
            <a className="resume" href="portfolio/src/assets/docs/Gili Menahen - Resume - FullStack Developer.pdf" download>Resume</a>
            </li>
          </ul>
        </nav>

        
      </div>
    </header>
  );
};

export default NavBar;
