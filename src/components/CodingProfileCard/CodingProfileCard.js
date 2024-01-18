import React from "react";
import "./CodingProfileCard.scss";

export default function CodingProfileCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={isDark ? "dark-mode codingprofile-card" : "codingprofile-card"}
    >
      <div className="codingprofile-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image-codingprofile"
        ></img>
      </div>
      <div className="codingprofile-card-footer">
        <span
          className={
            isDark ? "dark-mode codingprofile-tag" : "codingprofile-tag"
          }
          onClick={() =>
            openUrlInNewTab(cardInfo.profile.url, cardInfo.profile.name)
          }
        >
          {cardInfo.profile.name}
        </span>
      </div>
      <div className="codingprofile-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
      </div>
      {cardInfo.bulletPoints.map(bpt => {
        return (
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
            {bpt}
          </li>
        );
      })}
    </div>
  );
}
