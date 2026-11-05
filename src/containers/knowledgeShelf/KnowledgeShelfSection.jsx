import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {
  BookOpen,
  Database,
  GitBranch,
  Brain,
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";
import StyleContext from "../../contexts/StyleContext";
import "./KnowledgeShelfSection.scss";

const SHELF_TRACKS = [
  {
    title: "Interactive Engineering Books",
    badge: "58+ Chapters",
    icon: BookOpen,
    accent: "amber",
    desc: "Chapter-by-chapter interactive editions with visual diagrams, code walkthroughs, and architectural trade-offs.",
    links: [
      {
        name: "Designing Data-Intensive Applications (DDIA)",
        path: "/shelf/sde-books/ddia"
      },
      {
        name: "Database Internals (B-Trees, LSM, WAL)",
        path: "/shelf/sde-books/database-internals"
      },
      {
        name: "Options, Futures & Derivatives (Hull)",
        path: "/shelf/finance-books/hull-options"
      },
      {
        name: "Deep Learning (Goodfellow)",
        path: "/shelf/ai-books/deep-learning-goodfellow"
      }
    ]
  },
  {
    title: "Distributed Data & Backend Systems",
    badge: "Live Visualizers",
    icon: Database,
    accent: "blue",
    desc: "Production-grade deep dives into streaming architectures, columnar storage, databases, and backend runtimes.",
    links: [
      {
        name: "Apache Kafka + Interactive Visualizer",
        path: "/shelf/data-engineering/kafka"
      },
      {
        name: "Snowflake & Columnar Parquet/Protobuf",
        path: "/shelf/data-engineering/snowflake"
      },
      {
        name: "PostgreSQL, Redis & MongoDB Internals",
        path: "/shelf/databases/sql"
      },
      {
        name: "Spring Boot, Node.js, gRPC & Kubernetes",
        path: "/shelf/backend-engineering/java"
      }
    ]
  },
  {
    title: "System Design (HLD/LLD) & DSA",
    badge: "100+ Problems",
    icon: GitBranch,
    accent: "emerald",
    desc: "Structured interview mastery covering distributed consensus, sharding, GoF design patterns, and 14 algorithmic patterns.",
    links: [
      {
        name: "High-Level System Design & CAP/Paxos",
        path: "/shelf/system-design/scalability"
      },
      {
        name: "Low-Level Design & GoF Patterns",
        path: "/shelf/low-level-design/design-patterns"
      },
      {
        name: "14 Standard Coding Patterns",
        path: "/shelf/dsa/standard-patterns"
      },
      {
        name: "Curated 100+ LeetCode Problem Set",
        path: "/shelf/dsa/leetcode-problems"
      }
    ]
  },
  {
    title: "AI/LLM Engineering, Quant & Math",
    badge: "Simulators",
    icon: Brain,
    accent: "purple",
    desc: "Modern AI/RAG pipelines, prompt engineering, Black-Scholes & Monte Carlo simulators, and foundational math.",
    links: [
      {
        name: "AI & Machine Learning Engineering",
        path: "/shelf/ai-engineering/ml-overview"
      },
      {
        name: "Prompt Engineering & LLM Patterns",
        path: "/shelf/prompt-engineering/prompt-engineering-overview"
      },
      {
        name: "Quantitative Finance & Options Simulators",
        path: "/shelf/finance/finance-overview"
      },
      {
        name: "Linear Algebra & Complex Analysis",
        path: "/shelf/math-books/linear-algebra-lipschutz"
      }
    ]
  }
];

export default function KnowledgeShelfSection() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="animate-fade-in">
      <div className="main" id="knowledgeshelf">
        <div
          className={
            isDark
              ? "ks-showcase-wrapper ks-dark"
              : "ks-showcase-wrapper ks-light"
          }
        >
          <div className="ks-showcase-header">
            <div>
              <div className="section-eyebrow">
                <Sparkles size={13} />
                <span>KNOWLEDGESHELF • INTERACTIVE LEARNING ENGINE</span>
              </div>
              <h2 className="ks-showcase-title">
                Explore My Technical Knowledge Base
              </h2>
              <p className="ks-showcase-subtitle">
                Alongside my engineering work, I built{" "}
                <strong>KnowledgeShelf</strong> — an interactive curriculum of
                40+ deep-dive modules, book companions, and live visualizers
                integrated directly into this platform.
              </p>
            </div>

            <Link to="/shelf" className="ks-primary-cta">
              <Layers size={18} />
              <span>Open Full KnowledgeShelf</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="ks-tracks-grid">
            {SHELF_TRACKS.map((track, idx) => {
              const Icon = track.icon;
              return (
                <div key={idx} className={`ks-track-card accent-${track.accent}`}>
                  <div className="ks-track-top">
                    <div className="ks-track-icon">
                      <Icon size={20} />
                    </div>
                    <span className="ks-track-badge">{track.badge}</span>
                  </div>
                  <h3 className="ks-track-title">{track.title}</h3>
                  <p className="ks-track-desc">{track.desc}</p>
                  <div className="ks-track-links">
                    {track.links.map((item, i) => (
                      <Link key={i} to={item.path} className="ks-module-link">
                        <span>{item.name}</span>
                        <ArrowRight size={13} className="ks-link-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
