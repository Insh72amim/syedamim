import React from "react";
import "./ExperienceCard.scss";

function renderHighlightedText(text) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return (
        <span key={index} className="exp-keyword-highlight">
          {content}
        </span>
      );
    }
    return part;
  });
}

export default function ExperienceCard({cardInfo, isDark}) {
  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "exp-bullet dark-mode-text" : "exp-bullet"}
          >
            {renderHighlightedText(item)}
          </li>
        ))
      : null;
  };

  return (
    <div
      className={
        isDark
          ? "experience-card-dark experience-card-pro"
          : "experience-card experience-card-pro"
      }
    >
      <div className="exp-card-header">
        <div className="exp-company-info">
          {cardInfo.companylogo && (
            <div className="exp-logo-wrapper">
              <img
                className="exp-logo-img"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
              />
            </div>
          )}
          <div>
            <h3 className="exp-role-title">{cardInfo.role}</h3>
            <h4 className="exp-company-name">{cardInfo.company}</h4>
          </div>
        </div>
        <div className="exp-date-badge">
          <span>{cardInfo.date}</span>
        </div>
      </div>

      <div className="exp-card-body">
        {cardInfo.desc && (
          <p className={isDark ? "exp-desc dark-mode-text" : "exp-desc"}>
            {renderHighlightedText(cardInfo.desc)}
          </p>
        )}
        <ul className="exp-bullets-list">
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>

      {cardInfo.techStack && cardInfo.techStack.length > 0 && (
        <div className="exp-card-footer">
          <span className="exp-tech-label">Technologies:</span>
          <div className="exp-tech-list">
            {cardInfo.techStack.map((tech, idx) => {
              const icon = typeof tech === "string" ? tech : tech.icon;
              const name = typeof tech === "string" ? "Technology" : tech.name;
              return (
                <div key={idx} className="exp-tech-pill" title={name}>
                  <img src={icon} alt={name} className="exp-tech-icon" />
                  <span className="exp-tech-name">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
