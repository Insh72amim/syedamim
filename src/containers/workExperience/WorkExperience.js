import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <div className="animate-fade-in">
          <div className="experience-container" id="workExperience">
            <div className="section-header-center">
              <div className="section-eyebrow">CAREER PATH</div>
              <h1 className="experience-heading">Work Experience</h1>
              <p className={isDark ? "dark-mode experience-subtitle" : "experience-subtitle"}>
                Engineering high-scale financial distributed systems, microservices &amp; cloud infrastructure
              </p>
            </div>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                      techStack: card.techStack
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
