import React from "react";
import "./CodingProfileCard.scss";

export default function CodingProfileCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode codingprofile-card" : "codingprofile-card"}>
      <div className="codingprofile-top">
        <div className="codingprofile-image-div">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || cardInfo.title}
            className="card-image-codingprofile"
          />
        </div>
        <h3 className="codingprofile-title">{cardInfo.title}</h3>
      </div>
      {cardInfo.description && (
        <p className="codingprofile-desc">{cardInfo.description}</p>
      )}
      {cardInfo.profile && cardInfo.profile.url && (
        <div className="codingprofile-card-footer">
          <span
            className="codingprofile-tag"
            onClick={() =>
              openUrlInNewTab(cardInfo.profile.url, cardInfo.profile.name)
            }
          >
            {cardInfo.profile.name} ↗
          </span>
        </div>
      )}
    </div>
  );
}
