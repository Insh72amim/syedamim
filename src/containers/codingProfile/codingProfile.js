import React, {useContext} from "react";
import "./codingProfile.scss";
import {codingProfile} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import CodingProfileCard from "../../components/CodingProfileCard/CodingProfileCard";

export default function CodingProfile() {
  const {isDark} = useContext(StyleContext);
  if (!codingProfile.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="codingprofile">
        <div className="codingProfile-main-div">
          <div className="codingProfile-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading codingProfile-heading"
                  : "heading codingProfile-heading"
              }
            >
              {codingProfile.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle codingProfile-subtitle"
                  : "subTitle codingProfile-subtitle"
              }
            >
              {codingProfile.subtitle}
            </p>
          </div>
          <div className="codingProfile-cards-div">
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
    </Fade>
  );
}
