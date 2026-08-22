import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <div className="animate-fade-in">
      <div className="main" id="achievements">
        <div className="section-header-center">
          <div className="section-eyebrow">HONORS &amp; CREDENTIALS</div>
          <h1
            className={
              isDark ? "dark-mode achievement-heading" : "achievement-heading"
            }
          >
            {achievementSection.title}
          </h1>
          <p
            className={
              isDark ? "dark-mode achievement-subtitle" : "achievement-subtitle"
            }
          >
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.codingProfileCards.map((card, i) => {
            return (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
