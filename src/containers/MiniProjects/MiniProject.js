import React, {useContext} from "react";
import "./MiniProject.scss";
import {miniProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StandardProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!miniProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{miniProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {miniProjects.subtitle}
          </p>

          <div className="mini-projects-container">
            {miniProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode mini-project-card-dark mini-project-card"
                      : "mini-project-card mini-project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="mini-project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="mini-card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={
                        isDark ? "dark-mode mini-card-title" : "mini-card-title"
                      }
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark
                          ? "dark-mode mini-card-subtitle"
                          : "mini-card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
