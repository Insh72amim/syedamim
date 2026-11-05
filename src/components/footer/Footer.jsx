import React, {useContext} from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="animate-fade-in">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Created by <a href="https://github.com/Insh72amim">Syed Amim</a>
        </p>
      </div>
    </div>
  );
}
