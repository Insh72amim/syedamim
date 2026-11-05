import React, {useContext, useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {BookOpen, Search, User} from "lucide-react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import SearchModal from "../common/SearchModal";
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
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewCodingProfile = codingProfile.display;
  const isShelfMode = location.pathname.startsWith("/shelf");

  useEffect(() => {
    const handleKeyDown = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="headroom-wrapper">
        <header className={isDark ? "dark-menu header" : "header"}>
          <div className="header-container">
            <div className="header-left-group">
              <Link to="/" className="logo">
                <span className="logo-name">{greeting.username}</span>
              </Link>

              <div className="mode-switcher-pill" role="navigation" aria-label="Platform Mode">
                <Link
                  to="/"
                  className={`mode-switch-item ${!isShelfMode ? "active" : ""}`}
                >
                  <User size={14} />
                  <span>Portfolio</span>
                </Link>
                <Link
                  to="/shelf"
                  className={`mode-switch-item shelf-pill ${isShelfMode ? "active" : ""}`}
                >
                  <BookOpen size={14} />
                  <span>KnowledgeShelf</span>
                </Link>
              </div>
            </div>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label
              className="menu-icon"
              htmlFor="menu-btn"
              style={{color: "white"}}
            >
              <span
                className={isDark ? "navicon navicon-dark" : "navicon"}
              ></span>
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
                <a href="#knowledgeshelf">KnowledgeShelf</a>
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
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="header-search-btn"
                  title="Search Portfolio & KnowledgeShelf (⌘K)"
                >
                  <Search size={14} />
                  <span className="search-btn-label">Search</span>
                  <kbd className="search-kbd">⌘K</kbd>
                </button>
              </li>
              <li>
                <span className="toggle-menu-link">
                  <ToggleSwitch />
                </span>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

export default Header;
