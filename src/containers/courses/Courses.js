import React, {useContext} from "react";
import "./Course.scss";
import StyleContext from "../../contexts/StyleContext";
import {coursesSection} from "../../portfolio";

export default function Courses() {
  const {isDark} = useContext(StyleContext);
  if (!coursesSection || !coursesSection.display) {
    return null;
  }
  return (
    <div className="animate-fade-in">
      <div className="main" id="courses">
        <div className="courses-main-div">
          <div className="section-header-center">
            <div className="section-eyebrow">CONTINUOUS LEARNING</div>
            <h1
              className={
                isDark
                  ? "dark-mode courses-heading"
                  : "courses-heading"
              }
            >
              Course Certificates Repository
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode courses-subtitle"
                  : "courses-subtitle"
              }
            >
              Specialized technical certifications and ongoing continuous learning
            </p>
          </div>
          <iframe
            title="Course Completion Certificates"
            className="courses-iframe"
            src="https://drive.google.com/embeddedfolderview?id=1h6Yw4udZ4vYqo7INV_RM9SWcTDWHhyJm#grid"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
