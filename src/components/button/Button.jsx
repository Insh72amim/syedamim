import React from "react";
import {Link} from "react-router-dom";
import "./Button.scss";

export default function Button({text, className, href, newTab, variant}) {
  const btnClass = variant ? `main-button btn-${variant}` : "main-button";
  const isInternalRoute = href && href.startsWith("/") && !href.startsWith("/#");
  const isAnchor = href && href.startsWith("#");

  const handleAnchorClick = e => {
    if (!isAnchor) return;
    e.preventDefault();
    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  return (
    <div className={className}>
      {isInternalRoute ? (
        <Link className={btnClass} to={href}>
          {text}
        </Link>
      ) : (
        <a
          className={btnClass}
          href={href}
          onClick={isAnchor ? handleAnchorClick : undefined}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {text}
        </a>
      )}
    </div>
  );
}
