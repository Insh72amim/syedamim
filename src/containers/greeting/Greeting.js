import React, {useContext} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="animate-fade-in">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>Associate @ Goldman Sachs | 4+ YOE</span>
              </div>
              <h1 className={isDark ? "dark-mode greeting-title" : "greeting-title"}>
                Syed Amim
              </h1>
              <h2 className="greeting-role">
                Senior Software Engineer <span className="gradient-text">@ Goldman Sachs</span>
              </h2>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div className="button-greeting-div">
                <Button text="Get In Touch" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="View Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    variant="outline"
                  />
                )}
                {greeting.hubLink && (
                  <Button
                    text="localhub.site ↗"
                    newTab={true}
                    href={greeting.hubLink}
                    variant="hub"
                  />
                )}
              </div>
              <div className="social-media-wrapper">
                <SocialMedia />
              </div>
            </div>
          </div>
          
          <div className="greeting-card-div">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-title">syed_amim.ts</span>
                <span className="terminal-badge">TypeScript</span>
              </div>
              <div className="terminal-body">
                <pre>
                  <code>
                    <span className="code-kw">const</span> <span className="code-var">engineer</span> = &#123;{'\n'}
                    {'  '}<span className="code-key">name</span>: <span className="code-str">"Syed Amim"</span>,{'\n'}
                    {'  '}<span className="code-key">role</span>: <span className="code-str">"Senior Software Engineer"</span>,{'\n'}
                    {'  '}<span className="code-key">company</span>: <span className="code-str">"Goldman Sachs"</span>,{'\n'}
                    {'  '}<span className="code-key">education</span>: <span className="code-str">"B.Tech, IIT Patna"</span>,{'\n'}
                    {'  '}<span className="code-key">stack</span>: [<span className="code-str">"Java"</span>, <span className="code-str">"Spring Boot"</span>, <span className="code-str">"Scala"</span>, <span className="code-str">"Snowflake"</span>, <span className="code-str">"AWS"</span>],{'\n'}
                    {'  '}<span className="code-key">aiStack</span>: [<span className="code-str">"LangChain"</span>, <span className="code-str">"GPT-4o"</span>, <span className="code-str">"Claude 3.5"</span>, <span className="code-str">"RAG"</span>],{'\n'}
                    {'  '}<span className="code-key">certifications</span>: [<span className="code-str">"AWS DVA-C02"</span>]{'\n'}
                    &#125;;
                  </code>
                </pre>
              </div>
              <div className="terminal-stats-grid">
                <div className="stat-pill">
                  <span className="stat-value">4+ YOE</span>
                  <span className="stat-label">Experience</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-value">AWS DVA</span>
                  <span className="stat-label">Certified Developer</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-value">IIT Patna</span>
                  <span className="stat-label">B.Tech (2018–2022)</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-value">1000+</span>
                  <span className="stat-label">DSA Solved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
