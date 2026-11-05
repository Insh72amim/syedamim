/* Personal Portfolio Data for Syed Amim */

import splashAnimation from "./assets/lottie/splashAnimation.json";
import {TECH} from "./tech";
import yaftImg from "./assets/images/yaft.svg";
import knowledgeshelfImg from "./assets/images/knowledgeshelf.svg";
import localhubImg from "./assets/images/localhub.svg";
import certificateVaultImg from "./assets/images/certificate_vault.svg";
import iitpImg from "./assets/images/iitp.png";
import cbseImg from "./assets/images/cbse.png";
import goldmanSachsImg from "./assets/images/goldmansachs.png";
import storableImg from "./assets/images/storable.png";
import byjusImg from "./assets/images/byjus.png";
import bytelearnImg from "./assets/images/bytelearn.png";
import pghImg from "./assets/images/pgh.png";
import mpChextImg from "./assets/images/mp_chext.jpg";
import mmImg from "./assets/images/mm.png";
import mpJaImg from "./assets/images/mp_ja.jpg";
import mpZaImg from "./assets/images/mp_za.png";
import mpBmImg from "./assets/images/mp_bm.png";
import mpLkImg from "./assets/images/mp_lk.jpg";
import awsdvaImg from "./assets/images/awsdva.png";
import storableLearningImg from "./assets/images/storablelearning.png";
import ssaImg from "./assets/images/ssa.jpg";
import codeforcesImg from "./assets/images/codeforces.png";
import codechefImg from "./assets/images/codechef.png";

// Splash Screen
const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Syed Amim",
  title: "Hey, I'm Syed Amim",
  subTitle:
    "Senior Software Engineer & Associate at Goldman Sachs with 4+ years of experience building high-scale distributed systems, enterprise microservices, and AI-powered solutions. Specialized in Java, Spring Boot, Scala, Snowflake, Kafka, AWS, TypeScript, and modern AI/LLM engineering workflows.",
  resumeLink:
    "https://drive.google.com/file/d/1_wr00uhNkuEgKBQsgZmpaZaIsXtf8DNa/view",
  hubLink: "https://localhub.site",
  shelfLink: "/shelf",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Insh72amim",
  linkedin: "https://www.linkedin.com/in/syed-amim/",
  instagram: "https://www.instagram.com/isyedamim/",
  facebook: "https://www.facebook.com/syed.amim.786",
  gitlab: "https://gitlab.com/amim.insherah",
  twitter: "https://twitter.com/amiminsherah",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What do I do ?",
  subTitle:
    "ENTERPRISE DISTRIBUTED SYSTEMS, BIG DATA PIPELINES & AI/LLM SOLUTIONS",
  skills: [
    "Architect and maintain large-scale compliance and financial data pipelines across Snowflake, APIs, and Data Lakes using Scala, Java, and Parquet/Protobuf.",
    "Build resilient, high-throughput microservices using Spring Boot, NestJS, Node.js, and event-driven architectures with Apache Kafka, Redis, and PostgreSQL/MongoDB.",
    "Design and integrate AI/LLM workflows, Retrieval-Augmented Generation (RAG) pipelines, and autonomous AI agent systems using LangChain, OpenAI GPT-4o, Claude 3.5, and Gemini APIs.",
    "Leverage cutting-edge AI-assisted developer tools (Cursor, GitHub Copilot, Claude Code) to accelerate delivery, code quality, and test coverage.",
    "Containerize, orchestrate, and deploy cloud infrastructure on AWS (EKS, ECS, Elastic Beanstalk), Kubernetes, and automated CI/CD with Argo CD and GitHub Actions.",
    "Establish end-to-end observability, distributed tracing, and metrics telemetry with Grafana, Prometheus, Datadog, and Bugsnag."
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL & DBs",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS Cloud",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AI & LLMs",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indian Institute of Technology, Patna",
      logo: iitpImg,
      subHeader: "Bachelor of Technology (B.Tech)",
      duration: "Aug 2018 - May 2022",
      desc: "Relevant Coursework: CS102 Programming and Data Structures, CS244 Data Science, CS384 Python, Algorithms & Systems",
      descBullets: []
    },
    {
      schoolName: "Rose Public School, CBSE",
      logo: cbseImg,
      subHeader: "Senior Secondary",
      duration: "May 2015 - April 2017",
      desc: "",
      descBullets: []
    }
  ]
};

// Function to extract tech items (supports both objects and icon strings)
function listOfTechs(obj) {
  return Object.values(obj);
}

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "AI & LLM Engineering",
      listoftechs: listOfTechs(TECH.AI_ML)
    },
    {
      Stack: "AI Developer Tools",
      listoftechs: listOfTechs(TECH.AITOOLS)
    },
    {
      Stack: "Programming Languages",
      listoftechs: listOfTechs(TECH.PROGRAMMINGLANG)
    },
    {
      Stack: "Backend & Distributed Systems",
      listoftechs: listOfTechs(TECH.BACKEND)
    },
    {
      Stack: "Big Data & Messaging",
      listoftechs: listOfTechs(TECH.BIGDATA)
    },
    {
      Stack: "Databases & Caching",
      listoftechs: listOfTechs(TECH.DATABASES)
    },
    {
      Stack: "Cloud & DevOps",
      listoftechs: listOfTechs(TECH.DEVOPS)
    },
    {
      Stack: "Frontend & UI",
      listoftechs: listOfTechs(TECH.FRONTEND)
    },
    {
      Stack: "Testing & Automation",
      listoftechs: listOfTechs(TECH.TESTING)
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate, Compliance Division ‑ Team Nile",
      company: "Goldman Sachs",
      companylogo: goldmanSachsImg,
      date: "Aug 2025 – Present",
      desc: "Building and maintaining **large-scale compliance data pipelines** for **Team Nile**, ingesting **AWM and GBM trade data** across **REST APIs**, **Snowflake**, and **Data Lakes** for global trade surveillance.",
      descBullets: [
        "Architected and maintained large-scale compliance ingestion pipelines for **Team Nile**, ingesting **AWM and GBM trade feeds** from **APIs**, **Snowflake**, **relational databases**, and **Data Lakes**.",
        "Standardized heterogeneous multi-asset trade data (**futures, equities, FICC cuts**) into structured **Parquet** and **Protocol Buffers (Protobuf)** formats for unified compliance surveillance.",
        "Engineered transformation and data enrichment workflows utilizing **Scala**, **Java**, **Snowflake**, and **Presto**, ensuring high-integrity auditability across trade lifecycles.",
        "Migrated equities ingestion from fragmented source feeds to a centralized **EDM Web API pull** backed by **GBM Snowflake APIs**, improving pipeline reliability and data freshness.",
        "Partnered with **AWM**, **GBM**, and **Compliance stakeholders** to onboard schema updates, resolve ingestion bottlenecks, and harden surveillance datasets."
      ],
      techStack: [
        TECH.PROGRAMMINGLANG.JAVA,
        TECH.PROGRAMMINGLANG.SCALA,
        TECH.PROGRAMMINGLANG.PYTHON,
        TECH.BIGDATA.Snowflake,
        TECH.BIGDATA.Presto,
        TECH.BIGDATA.Parquet,
        TECH.BIGDATA.Protobuf,
        TECH.DEVOPS.AWS,
        TECH.AI_ML.OpenAI
      ]
    },
    {
      role: "Software Engineer",
      company: "Storable",
      companylogo: storableImg,
      date: "Apr 2023 – Aug 2025",
      desc: "Led backend engineering of core **insurance data platform** serving **20M+ tenants**, automated cron synchronizations, and event-driven microservices.",
      descBullets: [
        "Spearheaded development of a high-throughput insurance platform for **20 million tenants**, enabling real-time policy search, enrollment, and automated certificate generation using **Spring Boot**, **Hibernate**, **PostgreSQL**, **Redis**, and **AWS**, doubling operational efficiency.",
        "Architected a scheduler-driven synchronization engine executing **30+ background cron tasks** across **Zoho**, facility management systems, and third-party insurance carriers with idempotent audit trails.",
        "Built event-driven **Apache Kafka** messaging workflows and self-service enrollment portals, eliminating data drift and driving a **20% revenue boost**.",
        "Migrated enterprise telemetry from Datadog to **Bugsnag** and **Grafana**, while managing containerized deployments on **AWS EKS**, **Kubernetes**, and **Elastic Beanstalk** across **10+ microservices**."
      ],
      techStack: [
        TECH.BACKEND.SpringBoot,
        TECH.PROGRAMMINGLANG.JAVA,
        TECH.PROGRAMMINGLANG.TS,
        TECH.DATABASES.PSQL,
        TECH.DATABASES.REDIS,
        TECH.BIGDATA.Kafka,
        TECH.DEVOPS.AWS,
        TECH.DEVOPS.Kubernetes,
        TECH.DEVOPS.Grafana,
        TECH.DEVOPS.Bugsnag
      ]
    },
    {
      role: "Software Engineer",
      company: "BYJU'S",
      companylogo: byjusImg,
      date: "June 2022 – March 2023",
      desc: "Engineered scalable student onboarding and engagement backend microservices handling high-concurrency production workloads.",
      descBullets: [
        "Designed and launched an interactive student onboarding module using **Spring Boot**, **Spring Data MongoDB**, **React**, and **Redux**, increasing feature adoption by **60%** and reducing support tickets by **40%**.",
        "Architected **25+ production REST APIs** handling over **50,000 RPM**, optimized with **MongoDB composite indexing**, **Redis caching layers**, and **Spring AOP logging**.",
        "Configured automated **CI/CD pipelines** using **Argo CD** and **Argo Workflows**, migrating containerized services from **AWS ECS** to **AWS EKS** with robust **JWT Spring Security**."
      ],
      techStack: [
        TECH.PROGRAMMINGLANG.JAVA,
        TECH.BACKEND.SpringBoot,
        TECH.DATABASES.MONGODB,
        TECH.DATABASES.REDIS,
        TECH.FRONTEND.React,
        TECH.FRONTEND.Redux,
        TECH.DEVOPS.Docker,
        TECH.DEVOPS.AWS,
        TECH.DEVOPS.ArgoCD
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Bytelearn",
      companylogo: bytelearnImg,
      date: "Nov 2021 – Dec 2021",
      desc: "Engineered dynamic question management services and test suites for adaptive learning platforms.",
      descBullets: [
        "Developed high-performance **REST APIs** using **Python** and **Flask** to dynamically query and serve structured learning datasets.",
        "Implemented comprehensive automated test suites with **Pytest**, achieving **>90% code coverage** and improving CI reliability."
      ],
      techStack: [
        TECH.PROGRAMMINGLANG.PYTHON,
        TECH.BACKEND.FLASK,
        TECH.TESTING.PYTEST
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "false",
  display: true
};

// Major Projects
const bigProjects = {
  title: "Projects",
  subtitle:
    "Full-Stack SaaS platforms, high-throughput microservices, developer ecosystems, and automation tools",
  projects: [
    {
      image: pghImg,
      projectName: "PGHandle Ecosystem & Property Cloud",
      projectDesc:
        "Complete enterprise property management SaaS featuring an Owner Console, Resident Guest Portal, automated billing, digital KYC, and tenant marketplace. Built with NestJS, TypeScript, React, PostgreSQL, and AWS.",
      footerLink: [
        {
          name: "Live App",
          url: "https://pghandle.in"
        },
        {
          name: "Owner Console",
          url: "https://app.pghandle.in"
        },
        {
          name: "Guest Portal",
          url: "https://guest.pghandle.in"
        },
        {
          name: "Backend API",
          url: "https://github.com/Insh72amim/pghandlebe"
        }
      ]
    },
    {
      image: yaftImg,
      projectName: "YAFT Financial Intelligence Platform",
      projectDesc:
        "Personal finance management platform featuring Next.js 15, multi-account ledger, cash flow analytics, transaction parsing, and budgeting engine with NestJS Swagger REST APIs.",
      footerLink: [
        {
          name: "Live on LocalHub",
          url: "https://localhub.site"
        },
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/yaft"
        }
      ]
    },
    {
      image: knowledgeshelfImg,
      projectName: "KnowledgeShelf Technical Platform",
      projectDesc:
        "Interactive technical learning engine and engineering collection covering System Design (DDIA), Distributed Systems, Data Engineering, DSA, Quantitative Finance, and Machine Learning.",
      footerLink: [
        {
          name: "Open KnowledgeShelf",
          url: "/shelf",
          internal: true
        },
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/mylearningcollection"
        }
      ]
    },
    {
      image: localhubImg,
      projectName: "LocalHub Microservice & Dev Platform",
      projectDesc:
        "Central developer command center, service discovery, and routing gateway orchestrating multi-app microservice ecosystems, Swagger API docs, and MinIO S3 object storage.",
      footerLink: [
        {
          name: "Live Hub",
          url: "https://localhub.site"
        },
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/localhub"
        }
      ]
    },
    {
      image: mpChextImg,
      projectName: "AI LLM Navigator & Chrome Extension",
      projectDesc:
        "A smart browser extension designed to navigate and orchestrate multi-model LLM workflows (OpenAI, Claude, Gemini), organize custom prompts, and streamline AI interactions in real-time.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/chrome-ext"
        }
      ]
    },
    {
      image: mmImg,
      projectName: "MovieMania WebApp",
      projectDesc:
        "Full-stack movie rating, review, and trailer streaming platform with high-concurrency search and caching. Developed using React, Java, Spring Boot, and MongoDB.",
      footerLink: [
        {
          name: "Frontend Code",
          url: "https://github.com/Insh72amim/moviemaniaFE"
        }
      ]
    },
    {
      image: mpJaImg,
      projectName: "Job AutoFiller",
      projectDesc:
        "Python automation script using Selenium that parses structured profile JSON and auto-fills multi-step job application portals end-to-end.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/jobautofiller"
        }
      ]
    },
    {
      image: mpZaImg,
      projectName: "Meeting Joiner Bot",
      projectDesc:
        "Automated Node.js cron service that syncs with Google Calendar API and autonomously joins scheduled virtual meetings on time.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/meetingjoiner"
        }
      ]
    },
    {
      image: mpBmImg,
      projectName: "Bookmark Mango",
      projectDesc:
        "A modular NestJS REST backend providing fast CRUD operations, tag categorization, and search index for web bookmarks.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/BookmarkManager-NestJs"
        }
      ]
    },
    {
      image: mpLkImg,
      projectName: "Loop Kitchen Monitor",
      projectDesc:
        "Real-time uptime and order monitoring system for multi-location restaurant platforms built with Node.js, Express, and MongoDB.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/loop-kitchen"
        }
      ]
    }
  ],
  display: true
};

const miniProjects = {
  title: "Mini Projects & Automation",
  subtitle: "Productivity automations, intelligent scrapers, and micro-tools",
  projects: [],
  display: false
};

// Achievement Section
const achievementSection = {
  title: "Achievements & Certifications",
  subtitle:
    "Professional Certifications, Corporate Honors, and Engineering Milestones",

  codingProfileCards: [
    {
      title: "AWS Certified Developer ‑ Associate (DVA‑C02)",
      subtitle:
        "Demonstrates validated expertise in AWS architecture, microservice development, serverless deployment, security, and cloud debugging.",
      image: awsdvaImg,
      imageAlt: "AWS Certified Developer Associate Logo",
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://www.credly.com/badges/11be9b3b-5f3b-4b34-a44d-6e3565a15a3d"
        },
        {
          name: "AWS Certification",
          url: "https://aws.amazon.com/certification/certified-developer-associate/"
        }
      ]
    },
    {
      title: "Storrior Scholar Award",
      subtitle:
        "Awarded at Storable for leading technical learning initiatives and rapid mastery in cloud, distributed systems, and modern architecture during team migration.",
      image: storableLearningImg,
      imageAlt: "Storrior Scholar Award",
      footerLink: [
        {
          name: "Storable",
          url: "https://www.storable.com/"
        }
      ]
    },
    {
      title: "Storrior Spotlight Award",
      subtitle:
        "Awarded for outstanding engineering contributions, proactive problem-solving, and driving core insurance microservice delivery beyond expectations.",
      image: ssaImg,
      imageAlt: "Storrior Spotlight Award",
      footerLink: [
        {
          name: "Storable",
          url: "https://www.storable.com/"
        }
      ]
    },
    {
      title: "Course Certificates & Credentials Vault",
      subtitle:
        "Verified repository of specialized certifications covering Distributed Systems, Cloud Architecture, Java/Spring ecosystems, Microservices, and AI/ML.",
      image: certificateVaultImg,
      imageAlt: "Course Certificates Vault",
      footerLink: [
        {
          name: "Open Drive Vault ↗",
          url: "https://drive.google.com/drive/folders/1h6Yw4udZ4vYqo7INV_RM9SWcTDWHhyJm?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Coding Profiles Section
const codingProfile = {
  title: "Competitive Programming & Problem Solving",
  subtitle: "1000+ Algorithmic Problems Solved Across Global Platforms",

  codingProfileCards: [
    {
      title: "LeetCode",
      subtitle:
        "Solved 1000+ problems spanning Dynamic Programming, Graph Theory, Trees, and Complex Data Structures.",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
      imageAlt: "LeetCode logo",
      profile: {
        name: "LeetCode Profile",
        url: "https://leetcode.com/Insh72Amim/"
      },
      bulletPoints: []
    },
    {
      title: "Codeforces",
      subtitle:
        "Peak rating of 1512 (Specialist) | Regularly competed in Div. 2 and Div. 3 algorithmic contests.",
      image: codeforcesImg,
      imageAlt: "Codeforces logo",
      profile: {
        name: "Codeforces Profile",
        url: "https://codeforces.com/profile/syedamim1"
      },
      bulletPoints: []
    },
    {
      title: "CodeChef",
      subtitle:
        "Peak rating of 1841 (4-Star Programmer) | Solved competitive math and algorithmic challenges.",
      image: codechefImg,
      imageAlt: "CodeChef Logo",
      profile: {
        name: "CodeChef Profile",
        url: "https://www.codechef.com/users/smia72"
      },
      bulletPoints: []
    },
    {
      title: "HackerRank",
      subtitle:
        "Earned 5-Star Gold Badges in Problem Solving, Java, and Python with high accuracy.",
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-1024.png",
      imageAlt: "HackerRank Logo",
      profile: {
        name: "HackerRank Profile",
        url: "https://www.hackerrank.com/profile/amim_insherah"
      },
      bulletPoints: []
    },
    {
      title: "GeeksForGeeks",
      subtitle:
        "Active problem solver covering core Computer Science fundamentals, System Design, and Algorithms.",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png",
      imageAlt: "GeeksForGeeks Logo",
      profile: {
        name: "GeeksForGeeks Profile",
        url: "https://www.geeksforgeeks.org/user/amiminsherah"
      },
      bulletPoints: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs & Technical Writing",
  subtitle:
    "Passionate about sharing technical insights on system architecture, cloud, and modern web development.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const contactInfo = {
  title: "Get In Touch",
  subtitle:
    "Interested in discussing high-scale distributed systems, AI solutions, or open opportunities? Feel free to reach out.",
  number: "+91-82288XXXXX",
  email_address: "amim.insherah@gmail.com"
};

const twitterDetails = {
  userName: "amiminsherah",
  display: true
};

const isHireable = true;

const coursesSection = {
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  miniProjects,
  achievementSection,
  blogSection,
  coursesSection,
  contactInfo,
  twitterDetails,
  isHireable,
  codingProfile
};
