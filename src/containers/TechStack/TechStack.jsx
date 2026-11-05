import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {techStack} from "../../portfolio";
import "./TechStack.scss";
import StyleContext from "../../contexts/StyleContext";

export default function TechStack() {
  const {isDark} = useContext(StyleContext);
  if (techStack.viewSkillBars) {
    return (
      <div className="animate-fade-in">
        <div className="main" id="techstack">
          <div className="section-header-center">
            <div className="section-eyebrow">TECH ARSENAL</div>
            <h1
              className={
                isDark ? "dark-mode techstack-heading" : "techstack-heading"
              }
            >
              Technologies &amp; Tools
            </h1>
            <p
              className={
                isDark ? "dark-mode techstack-subtitle" : "techstack-subtitle"
              }
            >
              Comprehensive engineering stack — click highlighted technologies to
              open interactive deep-dives in KnowledgeShelf
            </p>
          </div>

          <div className="techstack-grid">
            {techStack.experience.map((exp, i) => {
              return (
                <div key={i} className="techstack-card">
                  <h3 className="techstack-category-title">{exp.Stack}</h3>
                  <div className="techstack-icons-list">
                    {exp.listoftechs.map((tech, idx) => {
                      const icon = typeof tech === "string" ? tech : tech.icon;
                      const name =
                        typeof tech === "string" ? "Technology" : tech.name;
                      const shelfPath =
                        typeof tech === "object" ? tech.shelfPath : undefined;

                      if (shelfPath) {
                        return (
                          <Link
                            key={idx}
                            to={shelfPath}
                            className="techstack-item-pill techstack-item-link"
                            title={`Explore ${name} in KnowledgeShelf`}
                          >
                            <img
                              src={icon}
                              alt={name}
                              className="techstack-icon"
                            />
                            <span className="techstack-name">{name}</span>
                            <span className="techstack-shelf-arrow">↗</span>
                          </Link>
                        );
                      }

                      return (
                        <div
                          key={idx}
                          className="techstack-item-pill"
                          title={name}
                        >
                          <img
                            src={icon}
                            alt={name}
                            className="techstack-icon"
                          />
                          <span className="techstack-name">{name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
