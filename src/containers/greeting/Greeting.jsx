import React, {useContext} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, workExperiences, educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function getDynamicDuration(startYear, startMonthIndex) {
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - startYear) * 12 +
    (now.getMonth() - startMonthIndex) +
    1;
  if (totalMonths <= 0) return "Current";
  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;
  if (yrs > 0 && mos > 0) return `${yrs} yr${yrs > 1 ? "s" : ""} ${mos} mo`;
  if (yrs > 0) return `${yrs} yr${yrs > 1 ? "s" : ""}`;
  return `${mos} mo${mos > 1 ? "s" : ""}`;
}

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  const careerTimeline = [
    {
      id: "gs",
      place: "Goldman Sachs",
      role: "Associate (Senior SWE)",
      period: "Aug 2025 – Present",
      duration: getDynamicDuration(2025, 7),
      logo: workExperiences.experience[0]?.companylogo,
      isCurrent: true,
      targetId: "experience"
    },
    {
      id: "storable",
      place: "Storable",
      role: "Software Engineer",
      period: "Apr 2023 – Aug 2025",
      duration: "2 yrs 5 mos",
      logo: workExperiences.experience[1]?.companylogo,
      isCurrent: false,
      targetId: "experience"
    },
    {
      id: "byjus",
      place: "BYJU'S",
      role: "Software Engineer",
      period: "Jun 2022 – Mar 2023",
      duration: "10 mos",
      logo: workExperiences.experience[2]?.companylogo,
      isCurrent: false,
      targetId: "experience"
    },
    {
      id: "bytelearn",
      place: "Bytelearn",
      role: "SWE Intern",
      period: "Nov 2021 – Dec 2021",
      duration: "2 mos",
      logo: workExperiences.experience[3]?.companylogo,
      isCurrent: false,
      targetId: "experience"
    },
    {
      id: "iitp",
      place: "IIT Patna",
      role: "B.Tech",
      period: "Aug 2018 – May 2022",
      duration: "4 yrs",
      logo: educationInfo.schools[0]?.logo,
      isCurrent: false,
      isEdu: true,
      targetId: "education"
    }
  ];
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
              <h1
                className={
                  isDark ? "dark-mode greeting-title" : "greeting-title"
                }
              >
                Syed Amim
              </h1>
              <h2 className="greeting-role">
                Senior Software Engineer{" "}
                <span className="gradient-text">@ Goldman Sachs</span>
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
                    <span className="code-kw">const</span>{" "}
                    <span className="code-var">engineer</span> = &#123;{"\n"}
                    {"  "}
                    <span className="code-key">name</span>:{" "}
                    <span className="code-str">"Syed Amim"</span>,{"\n"}
                    {"  "}
                    <span className="code-key">role</span>:{" "}
                    <span className="code-str">"Senior Software Engineer"</span>
                    ,{"\n"}
                    {"  "}
                    <span className="code-key">company</span>:{" "}
                    <span className="code-str">"Goldman Sachs"</span>,{"\n"}
                    {"  "}
                    <span className="code-key">education</span>:{" "}
                    <span className="code-str">"B.Tech, IIT Patna"</span>,{"\n"}
                    {"  "}
                    <span className="code-key">stack</span>: [
                    <span className="code-str">"Java"</span>,{" "}
                    <span className="code-str">"Spring Boot"</span>,{" "}
                    <span className="code-str">"Scala"</span>,{" "}
                    <span className="code-str">"Snowflake"</span>,{" "}
                    <span className="code-str">"AWS"</span>],{"\n"}
                    {"  "}
                    <span className="code-key">aiStack</span>: [
                    <span className="code-str">"LangChain"</span>,{" "}
                    <span className="code-str">"GPT-4o"</span>,{" "}
                    <span className="code-str">"Claude 3.5"</span>,{" "}
                    <span className="code-str">"RAG"</span>],{"\n"}
                    {"  "}
                    <span className="code-key">certifications</span>: [
                    <span className="code-str">"AWS DVA-C02"</span>]{"\n"}
                    &#125;;
                  </code>
                </pre>
              </div>

              <div className="mini-timeline-section">
                <div className="mini-timeline-header">
                  <span className="mini-timeline-title">
                    CAREER &amp; EDUCATION TIMELINE
                  </span>
                  <span className="mini-timeline-total">4+ Yrs Exp</span>
                </div>
                <div className="mini-timeline-list">
                  {careerTimeline.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.targetId}`}
                      className={`mini-timeline-item ${
                        item.isCurrent ? "is-current" : ""
                      } ${item.isEdu ? "is-edu" : ""}`}
                    >
                      <div className="mini-timeline-track">
                        <span className="mini-timeline-node" />
                        <span className="mini-timeline-line" />
                      </div>
                      <img
                        src={item.logo}
                        alt={item.place}
                        className="mini-timeline-logo"
                      />
                      <div className="mini-timeline-info">
                        <div className="mini-timeline-top">
                          <span className="mini-timeline-place">
                            {item.place}
                          </span>
                          <span className="mini-timeline-duration">
                            {item.duration}
                          </span>
                        </div>
                        <div className="mini-timeline-bottom">
                          <span className="mini-timeline-role">
                            {item.role}
                          </span>
                          <span className="mini-timeline-period">
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
