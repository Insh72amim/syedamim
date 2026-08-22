import openaiIcon from "./assets/images/icons/openai.svg";
import anthropicIcon from "./assets/images/icons/anthropic.svg";
import geminiIcon from "./assets/images/icons/gemini.svg";
import langchainIcon from "./assets/images/icons/langchain.svg";
import huggingfaceIcon from "./assets/images/icons/huggingface.svg";
import pytorchIcon from "./assets/images/icons/pytorch.svg";
import pineconeIcon from "./assets/images/icons/pinecone.svg";
import chromaIcon from "./assets/images/icons/chroma.svg";
import ollamaIcon from "./assets/images/icons/ollama.svg";

import cursorIcon from "./assets/images/icons/cursor.svg";
import copilotIcon from "./assets/images/icons/githubcopilot.svg";
import v0Icon from "./assets/images/icons/v0.svg";
import perplexityIcon from "./assets/images/icons/perplexity.svg";

import snowflakeIcon from "./assets/images/icons/snowflake.svg";
import scalaIcon from "./assets/images/icons/scala.svg";
import prestoIcon from "./assets/images/icons/presto.svg";
import parquetIcon from "./assets/images/icons/parquet.svg";
import protobufIcon from "./assets/images/icons/protobuf.svg";
import kafkaIcon from "./assets/images/icons/kafka.svg";
import argocdIcon from "./assets/images/icons/argocd.svg";
import prometheusIcon from "./assets/images/icons/prometheus.svg";
import grafanaIcon from "./assets/images/icons/grafana.svg";
import bugsnagIcon from "./assets/images/icons/bugsnag.svg";
import dockerIcon from "./assets/images/icons/docker.svg";
import kubernetesIcon from "./assets/images/icons/kubernetes.svg";

export const TECH = {
  AI_ML: {
    OpenAI: {
      name: "OpenAI (GPT-4o)",
      icon: openaiIcon
    },
    Claude: {
      name: "Anthropic Claude",
      icon: anthropicIcon
    },
    Gemini: {
      name: "Google Gemini",
      icon: geminiIcon
    },
    LangChain: {
      name: "LangChain",
      icon: langchainIcon
    },
    HuggingFace: {
      name: "Hugging Face",
      icon: huggingfaceIcon
    },
    PyTorch: {
      name: "PyTorch",
      icon: pytorchIcon
    },
    Pinecone: {
      name: "Pinecone Vector DB",
      icon: pineconeIcon
    },
    Chroma: {
      name: "ChromaDB",
      icon: chromaIcon
    },
    Ollama: {
      name: "Ollama (Local LLMs)",
      icon: ollamaIcon
    }
  },
  AITOOLS: {
    Cursor: {
      name: "Cursor AI",
      icon: cursorIcon
    },
    Copilot: {
      name: "GitHub Copilot",
      icon: copilotIcon
    },
    v0: {
      name: "v0 by Vercel",
      icon: v0Icon
    },
    Perplexity: {
      name: "Perplexity AI",
      icon: perplexityIcon
    }
  },
  PROGRAMMINGLANG: {
    JAVA: {
      name: "Java",
      icon: "https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png"
    },
    SCALA: {
      name: "Scala",
      icon: scalaIcon
    },
    PYTHON: {
      name: "Python",
      icon: "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png"
    },
    TS: {
      name: "TypeScript",
      icon: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
    },
    JS: {
      name: "JavaScript",
      icon: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
    },
    CPP: {
      name: "C++",
      icon: "https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png"
    },
    GO: {
      name: "Go",
      icon: "https://user-images.githubusercontent.com/25181517/192149581-88194d20-1a37-4be8-8801-5dc0017ffbbe.png"
    }
  },
  BACKEND: {
    SpringBoot: {
      name: "Spring Boot",
      icon: "https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png"
    },
    SPRING: {
      name: "Spring Framework",
      icon: "https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png"
    },
    Nest: {
      name: "NestJS",
      icon: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/519bfaf3-c242-431e-a269-876979f05574"
    },
    NODEJS: {
      name: "Node.js",
      icon: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
    },
    EXPRESS: {
      name: "Express.js",
      icon: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
    },
    FLASK: {
      name: "Flask",
      icon: "https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png"
    },
    Django: {
      name: "Django",
      icon: "https://github.com/marwin1991/profile-technology-icons/assets/62091613/9bf5650b-e534-4eae-8a26-8379d076f3b4"
    }
  },
  BIGDATA: {
    Snowflake: {
      name: "Snowflake",
      icon: snowflakeIcon
    },
    Presto: {
      name: "Presto",
      icon: prestoIcon
    },
    Kafka: {
      name: "Apache Kafka",
      icon: kafkaIcon
    },
    Parquet: {
      name: "Apache Parquet",
      icon: parquetIcon
    },
    Protobuf: {
      name: "Protocol Buffers",
      icon: protobufIcon
    },
    ElasticSearch: {
      name: "Elasticsearch",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2B_lpEaCJMsSp0qvXPN66bwaVe_zIh03lY9ZCLzVJA&s"
    }
  },
  DATABASES: {
    PSQL: {
      name: "PostgreSQL",
      icon: "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"
    },
    MONGODB: {
      name: "MongoDB",
      icon: "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
    },
    REDIS: {
      name: "Redis",
      icon: "https://user-images.githubusercontent.com/25181517/182884894-d3fa6ee0-f2b4-4960-9961-64740f533f2a.png"
    },
    SQL: {
      name: "MySQL",
      icon: "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
    }
  },
  DEVOPS: {
    AWS: {
      name: "AWS",
      icon: "https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png"
    },
    Kubernetes: {
      name: "Kubernetes",
      icon: kubernetesIcon
    },
    Docker: {
      name: "Docker",
      icon: dockerIcon
    },
    ArgoCD: {
      name: "Argo CD",
      icon: argocdIcon
    },
    Prometheus: {
      name: "Prometheus",
      icon: prometheusIcon
    },
    Grafana: {
      name: "Grafana",
      icon: grafanaIcon
    },
    Bugsnag: {
      name: "Bugsnag",
      icon: bugsnagIcon
    },
    DataDog: {
      name: "DataDog",
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Datadog_logo.svg/440px-Datadog_logo.svg.png"
    },
    Bash: {
      name: "Bash Shell",
      icon: "https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png"
    }
  },
  FRONTEND: {
    React: {
      name: "React",
      icon: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
    },
    Next: {
      name: "Next.js",
      icon: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704"
    },
    Redux: {
      name: "Redux",
      icon: "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png"
    },
    Tailwind: {
      name: "Tailwind CSS",
      icon: "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
    },
    HTML: {
      name: "HTML5",
      icon: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
    },
    CSS: {
      name: "CSS3",
      icon: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
    }
  },
  TESTING: {
    Vitest: {
      name: "Vitest",
      icon: "https://vitest.dev/logo-shadow.svg"
    },
    Jest: {
      name: "Jest",
      icon: "https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png"
    },
    Mocha: {
      name: "Mocha",
      icon: "https://user-images.githubusercontent.com/25181517/201476630-f47cfff6-fdee-4ee1-9092-1793b71b1ca3.png"
    },
    PYTEST: {
      name: "PyTest",
      icon: "https://user-images.githubusercontent.com/25181517/184117132-9e89a93b-65fb-47c3-91e7-7d0f99e7c066.png"
    },
    JUNIT: {
      name: "JUnit",
      icon: "https://user-images.githubusercontent.com/25181517/117533873-484d4480-afef-11eb-9fad-67c8605e3592.png"
    },
    SELENIUM: {
      name: "Selenium",
      icon: "https://user-images.githubusercontent.com/25181517/184103699-d1b83c07-2d83-4d99-9a1e-83bd89e08117.png"
    }
  },
  COMM: {
    Kafka: {
      name: "Apache Kafka",
      icon: kafkaIcon
    },
    RabbitMq: {
      name: "RabbitMQ",
      icon: "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Rabbit.png/_jcr_content/renditions/cq5dam.web.1280.1280.png"
    },
    Grpc: {
      name: "gRPC",
      icon: "https://grpc.io/img/logos/grpc-icon-color.png"
    },
    GraphQl: {
      name: "GraphQL",
      icon: "https://miro.medium.com/v2/resize:fit:400/1*nP2C50GK4_-ly_R_mq3juQ.png"
    },
    WebSockets: {
      name: "WebSockets",
      icon: "https://miro.medium.com/v2/resize:fit:1300/1*4BtGcPz3JauG9qsNXzLMXA.gif"
    },
    WebRtc: {
      name: "WebRTC",
      icon: "https://www.gsma.com/esim/wp-content/uploads/2016/02/webrtc-logo-2-300x147.png"
    },
    ElasticSearch: {
      name: "Elasticsearch",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2B_lpEaCJMsSp0qvXPN66bwaVe_zIh03lY9ZCLzVJA&s"
    }
  }
};
