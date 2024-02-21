"use client";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { about, projects, skills, contact } from "@/data/profiles";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { name } = about;

  const toggleNavList = () => {
    if (showNavList) {
      document.body.classList.remove("disable-scroll");
      setScrolled(true);
    } else {
      document.body.classList.add("disable-scroll");
      setScrolled(false);
    }
    setShowNavList(!showNavList);
  };

  const hideNavList = () => {
    document.body.classList.remove("disable-scroll");
    setShowNavList(false);
  };

  return (
    <nav className="center nav">
      <div className="nav__content">
        <ul
          style={{ display: showNavList ? "flex" : "none" }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <strong>
              <a href="#top" onClick={hideNavList} className="link">
                {name || "About Me"}
              </a>
            </strong>
          </li>

          {projects.length && (
            <li className="nav__list-item">
              <a
                href="#projects"
                onClick={hideNavList}
                className="link link--nav"
              >
                Projects
              </a>
            </li>
          )}

          {skills.length && (
            <li className="nav__list-item">
              <a
                href="#skills"
                onClick={hideNavList}
                className="link link--nav"
              >
                Skills
              </a>
            </li>
          )}

          {contact.email && (
            <li className="nav__list-item">
              <a
                href="#contact"
                onClick={hideNavList}
                className="link link--nav"
              >
                Contact
              </a>
            </li>
          )}
        </ul>

        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__button .nav.shadow"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
