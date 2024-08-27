import React, {useContext} from "react";
import "./Course.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Courses() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="courses">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              Course Completion Certificates
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              List of online course certificates :)
            </p>
          </div>
          <iframe
            title="Course Completion Certificates"
            className="achievement-cards-div"
            src="https://drive.google.com/embeddedfolderview?id=1h6Yw4udZ4vYqo7INV_RM9SWcTDWHhyJm#grid"
            style={{
              width: "100%",
              height: "280px",
              border: "1px solid rgba(211, 211, 211, 0.397)",
              borderRadius: "4px",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px" // Replace with the actual value of $lightBoxShadowDark
            }}
          ></iframe>
        </div>
      </div>
    </Fade>
  );
}
