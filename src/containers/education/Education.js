import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section main" id="education">
        <div className="section-header-center">
          <div className="section-eyebrow">ACADEMIC BACKGROUND</div>
          <h1 className="education-heading">Education</h1>
        </div>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
