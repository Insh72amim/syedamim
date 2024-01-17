import React from "react";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/techstack.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import "./TechStack.scss";

export default function TechStack() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Tech Stack</h1>
            {techStack.experience.map((exp, i) => {
              return (
                <div key={i} className="skill">
                  <h3 className="subtech">{exp.Stack}</h3>
                  <div class="list-of-image">
                    {exp.listoftechs.map(url => {
                      return (
                        <img
                          src={url}
                          alt="alternatetext"
                          className="image-prop"
                        ></img>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
