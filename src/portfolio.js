/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {TECH} from "./tech";

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Syed Amim",
  title: "Hey, I'm Amim",
  subTitle:
    "A passionate Full Stack Software Developer having an experience of building Web applications and scalable backends with JavaScript, TypeScript, Nodejs, ExpressJs, NestJs, Reactjs,  and NextJs.",
  resumeLink:
    "https://drive.google.com/file/d/1_wr00uhNkuEgKBQsgZmpaZaIsXtf8DNa/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Insh72amim",
  linkedin: "https://www.linkedin.com/in/syed-amim/",
  instagram: "https://www.instagram.com/isyedamim/",
  facebook: "https://www.facebook.com/syed.amim.786",
  gitlab: "https://gitlab.com/amim.insherah",
  twitter: "https://twitter.com/amiminsherah",
  //medium: "https://medium.com/@amim.insherah",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What do I do ?",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH",
  skills: [
    emoji(
      "➜ Create dynamic and user-friendly web user interfaces by utilizing ReactJS and Next.js to ensure high interactivity and responsiveness."
    ),
    emoji(
      "➜ Write end to end APIs with JWT authentications, authorization and other validations which can integrate with both SQL and NoSQL Databases."
    ),
    emoji(
      "➜ Build highly scalable backend systems using cutting edge technologies like kafka and rabbitMq"
    ),
    emoji(
      "➜ Deployment and integration with AWS cloud. Automation of the process with CICD and bash scripts"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institue of Technology Patna",
      logo: require("./assets/images/iitp.png"),
      subHeader: "Bachelor of Technology in Chemical Engineering",
      duration: "Aug 2018 - May 2022",
      cgpa: "7.84",
      desc: "Relevant Coursework : CS102 Programming and Data Structure, CS244 Data Science, CS384 Python",
      descBullets: []
    },
    {
      schoolName: "Rose Public School, CBSE",
      logo: require("./assets/images/cbse.png"),
      subHeader: "Senior Secondary",
      cgpa: "9.10",
      duration: "May 2015 - April 2017",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience
function listOfIcons(obj) {
  return Object.entries(obj).map(i => i[1].icon);
}

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming Languages",
      listoftechs: listOfIcons(TECH.PROGRAMMINGLANG)
    },
    {
      Stack: "Databases",
      listoftechs: listOfIcons(TECH.DATABASES)
    },
    {
      Stack: "Frontend",
      listoftechs: listOfIcons(TECH.FRONTEND)
    },
    {
      Stack: "Backend",
      listoftechs: listOfIcons(TECH.BACKEND)
    },
    {
      Stack: "Testing",
      listoftechs: listOfIcons(TECH.TESTING)
    },
    {
      Stack: "DevOps",
      listoftechs: listOfIcons(TECH.DEVOPS)
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Storable",
      companylogo: require("./assets/images/storable.png"),
      date: "Apr 2023 – Present",
      desc: "Worked in Insurance Service team to develop Insurance service backend system to handle all insurance and fms queries. Developed Insured to Value portal based on business requirements and integrated with other systems. Resolved tech debt items and production issues.",
      descBullets: [
        "Refactored the insurance microservice to use CQRS pattern to follow Domain Driven Design.",
        "Migrated the ORM from prisma to mikro-orm and unit tests from jest to vitest for better performance.",
        "Developed the console application for generating data migration files.",
        "Built queue using bullMq for performing data migration to add more features.",
        "Integrated Kafka Event Bus. Defined Topics, Published and Subscribed to Events.",
        "Developed features into the side-car service for communication with other services.",
        "Automated the installation process of setup via bash script to reduce time by 90%.",
        "Resolved production bugs with the help of DataDog logs to navigate across services.",
        "Tech Stack : TypeScript, NodeJs, NestJs, NextJs, PostgreSQL, Redis, Kafka, AWS"
      ],
      techStack: [
        TECH.PROGRAMMINGLANG.JS.icon,
        TECH.PROGRAMMINGLANG.TS.icon,
        TECH.DATABASES.PSQL.icon,
        TECH.DATABASES.REDIS.icon,
        TECH.BACKEND.NODEJS.icon,
        TECH.BACKEND.Nest.icon,
        TECH.UNITTEST.Vitest.icon,
        TECH.UNITTEST.Jest.icon,
        TECH.FRONTEND.Next.icon,
        TECH.FRONTEND.Tailwind.icon,
        TECH.DEVOPS.AWS.icon,
        TECH.DEVOPS.Kubernetes.icon,
        TECH.DEVOPS.DataDog.icon
      ]
    },
    {
      role: "Software Engineer",
      company: "Byjus",
      companylogo: require("./assets/images/byjus.png"),
      date: "May 2022 – March 2023",
      desc: "Worked in Student Parent Engagement team and developed the dashboard portal for student performance then worked on the onboarding module",
      descBullets: [
        "Developed REST APIs in Node, Express and MongoDb that serves more than 50K RPM.",
        "Improved and redesigned the dashboard APIs with indexing for improved response time",
        "Implemented Unit Testing server using root hooks method with Mocha and chai to build tests.",
        "Increased Code Coverage from 0% to more than 90% for functional unit test cases using nyc",
        "Cached the API response in Redis database with generic functions for different version of APIs.",
        "Developed and published an authentication library using JWT to generate access token.",
        "Performed Load Testing using K6 and developed test scripts of single and multiplex scenarios",
        " Tech Stack : Javascript, NodeJs, MongoDb, Express and ReactJs"
      ],
      techStack: [
        TECH.PROGRAMMINGLANG.JS.icon,
        TECH.DATABASES.MONGODB.icon,
        TECH.BACKEND.EXPRESS.icon,
        TECH.FRONTEND.React.icon,
        TECH.BACKEND.NODEJS.icon,
        TECH.DATABASES.REDIS.icon,
        TECH.FRONTEND.Redux.icon,
        TECH.DEVOPS.Docker.icon,
        TECH.DEVOPS.Grafana.icon
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Bytelearn",
      companylogo: require("./assets/images/bytelearn.png"),
      date: "Nov 2021 – Dec 2021",
      desc: "Worked on Question management team to fetch questions and structure them.",
      descBullets: [
        "Developed REST APIs to fetch questions based on types and requirement paremeters",
        "Written Unit Tests for already developed APIs and Improved the code coverage to > 90%",
        "Tech Stack : Python, Flask, Pytest"
      ],
      techStack: [
        TECH.PROGRAMMINGLANG.PYTHON.icon,
        TECH.BACKEND.FLASK.icon,
        TECH.UNITTEST.PYTEST.icon
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pgh.png"),
      projectName: "PG Handle",
      projectDesc:
        "A single place to enroll a guest, manage the stay cycle, bills, notifications and management of guests.",
      footerLink: [
        {
          name: "frontend Source Code",
          url: "https://github.com/Insh72amim/moviemaniaFE"
        },
        {
          name: "backend Source Code",
          url: "https://github.com/Insh72amim/moviemaniaFE"
        }
      ]
    },
    {
      image: require("./assets/images/mm.png"),
      projectName: "MovieMania",
      projectDesc: "A place to review and rate movies and watch trailors.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/moviemaniaFE"
        }
      ]
    },
    {
      image: require("./assets/images/pharma.png"),
      projectName: "MyPharma",
      projectDesc:
        "Pharma management system to manage medicines, doctors and patients",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Insh72amim/Pharmacy-Management-System"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  codingProfileCards: [
    {
      title: "AWS Developer Associate",
      subtitle:
        "Passed the AWS Developer Associate Exam. It showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS. .",
      image: require("./assets/images/awsdva.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/11be9b3b-5f3b-4b34-a44d-6e3565a15a3d"
        },
        {
          name: "AWS-DVAC02 Exam",
          url: "https://aws.amazon.com/certification/certified-developer-associate/"
        }
      ]
    },
    {
      title: "Storrior Scholar Award",
      subtitle:
        "Recieved 250USD for completing highest LinkedIn learnign hour in my company storable as we migrated to new Technologies.",
      image: require("./assets/images/storablelearning.png"),
      imageAlt: "Google Assistant Action Logo",
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
        "Recieved 250USD for contribution as a developer and going above and beyond",
      image: require("./assets/images/ssa.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Storable",
          url: "https://www.storable.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const codingProfile = {
  title: emoji("Coding Profiles </>"),
  subtitle: "Competitive Programming Profiles and Solving DSA",

  codingProfileCards: [
    {
      title: "LeetCode",
      subtitle:
        "Passed the AWS Developer Associate Exam. It showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS. .",
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
        "Passed the AWS Developer Associate Exam. It showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS. .",
      image: require("./assets/images/codeforces.png"),
      imageAlt: "codeforces logo",
      profile: {
        name: "Codeforces Profile",
        url: "https://codeforces.com/profile/syedamim1"
      },
      bulletPoints: []
    },
    {
      title: "Codechef",
      subtitle:
        "Passed the AWS Developer Associate Exam. It showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS. .",
      image: require("./assets/images/codechef.png"),
      imageAlt: "Codechef Logo",
      profile: {
        name: "CodeChef Profile",
        url: "https://www.codechef.com/users/smia72"
      },
      bulletPoints: []
    },
    {
      title: "HackerRank",
      subtitle:
        "Passed the AWS Developer Associate Exam. It showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS. .",
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
        "Passed the AWS Developer Associate Exam. It showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS. .",
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-8228894267",
  email_address: "amim.insherah@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  codingProfile
};
