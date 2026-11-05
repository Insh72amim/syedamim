import React, {useContext} from "react";
import "./codingProfile.scss";
import {codingProfile} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import CodingProfileCard from "../../components/CodingProfileCard/CodingProfileCard";

export default function CodingProfile() {
  const {isDark} = useContext(StyleContext);
  if (!codingProfile.display) {
    return null;
  }

  return (
    <div className="animate-fade-in">
      <div className="main" id="codingprofile">
        <div className="section-header-center">
          <div className="section-eyebrow">PROBLEM SOLVING</div>
          <h1
            className={
              isDark
                ? "dark-mode codingProfile-heading"
                : "codingProfile-heading"
            }
          >
            {codingProfile.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode codingProfile-subtitle"
                : "codingProfile-subtitle"
            }
          >
            {codingProfile.subtitle}
          </p>
        </div>
        <div className="codingProfile-section">
          {codingProfile.codingProfileCards.map((card, i) => {
            return (
              <CodingProfileCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  profile: card.profile,
                  bulletPoints: card.bulletPoints
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
