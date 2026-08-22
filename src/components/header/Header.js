import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection,
  codingProfile
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewCodingProfile = codingProfile.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <div className="header-container">
          <a href="/" className="logo">
            <span className="logo-name">{greeting.username}</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{color: "white"}}
          >
            <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
          </label>
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {viewSkills && (
              <li>
                <a href="#skills">Skills</a>
              </li>
            )}
            {viewExperience && (
              <li>
                <a href="#experience">Experience</a>
              </li>
            )}
            <li>
              <a href="#techstack">Tech Stack</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            {viewCodingProfile && (
              <li>
                <a href="#codingprofile">Coding</a>
              </li>
            )}
            {viewAchievement && (
              <li>
                <a href="#achievements">Achievements</a>
              </li>
            )}
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <span className="toggle-menu-link">
                <ToggleSwitch />
              </span>
            </li>
          </ul>
        </div>
      </header>
    </Headroom>
  );
}
export default Header;
