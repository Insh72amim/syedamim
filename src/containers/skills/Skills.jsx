import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="animate-fade-in">
        <div className="skills-header-center">
          <div className="section-eyebrow">CAPABILITIES</div>
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            Core Engineering &amp; Architecture
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>
        </div>
      </div>

      <div className="skills-main-div">
        <div className="animate-fade-in">
          <div className="skills-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-data">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
                </svg>
              </div>
              <h3 className="pillar-title">Distributed Data Pipelines</h3>
              <p className="pillar-desc">
                High-throughput ingestion across Snowflake, APIs &amp; Data
                Lakes with Scala, Java, Presto &amp; Parquet.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-ai">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
              <h3 className="pillar-title">AI &amp; LLM Engineering</h3>
              <p className="pillar-desc">
                RAG pipelines, agent workflows &amp; multi-model LLM integrations
                with LangChain, OpenAI &amp; Claude.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-services">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="pillar-title">Scalable Microservices</h3>
              <p className="pillar-desc">
                Event-driven microservices with Spring Boot, NestJS, Kafka,
                Redis &amp; PostgreSQL.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-cloud">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <h3 className="pillar-title">Cloud &amp; DevOps Telemetry</h3>
              <p className="pillar-desc">
                Containerized deployments on AWS EKS with Kubernetes, Argo CD,
                Prometheus &amp; Grafana.
              </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="skills-text-div">
            <h3 className="skills-overview-title">Key Capabilities</h3>
            <SoftwareSkill />
            <div className="skills-bullet-list">
              {skillsSection.skills.map((skill, i) => {
                return (
                  <div key={i} className="skill-bullet-item">
                    <span className="bullet-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <p
                      className={
                        isDark ? "dark-mode skills-text" : "skills-text"
                      }
                    >
                      {typeof skill === "string"
                        ? skill.replace(/^➜\s*/, "")
                        : skill}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
