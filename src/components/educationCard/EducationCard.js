import React, {useContext} from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const {isDark} = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode education-card" : "education-card"}>
      {school.logo && (
        <div className="education-card-left">
          <img
            className="education-roundedimg"
            src={school.logo}
            alt={school.schoolName}
          />
        </div>
      )}
      <div className="education-card-right">
        <h3 className="education-text-school">{school.schoolName}</h3>
        <div className="education-text-subHeader">{school.subHeader}</div>
        <div className="education-meta-row">
          <span className="education-text-duration">{school.duration}</span>
        </div>
        {school.desc && <p className="education-text-desc">{school.desc}</p>}
      </div>
    </div>
  );
}
