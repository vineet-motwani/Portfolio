import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  linux,
  dart,
  flutter,
  omnifoods,
  gssoc,
  trainity,
  recommender,
  unicollab,
  typescript
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Apps Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Open Source Contributor",
    company_name: "GirlScript Summer of Code",
    icon: gssoc,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developed a game using Vanilla Javascript, HTML5 and CSS3 which involved using CSS properties to complete required tasks",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and code management and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst Apprenticeship",
    company_name: "Trainity",
    icon: trainity,
    iconBg: "#E6DEDD",
    date: "December 2021 - April 2022",
    points: [
      "Learned and applied concepts of Data Analytics to gain insights from real-world data using SQL.",
      "Used Python libraries to visualise the insights thus obtained.",
      "Used Microsoft Excel to clean the data and obtain insights using Excel functions",
    ],
  },
];

const projects = [
  {
    name: "Unicollab",
    description:
      "Mobile app platform that connects students from different colleges and universities of same branches to collaborative online and study togethter.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "WebRTC",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: unicollab,
    source_code_link: "https://github.com/vineet-motwani/Unicollab",
  },
  {
    name: "Recommender System",
    description:
      "Web-based platform that allows users to easily look for attires similar to the ones provided by user via an image using deep learning.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "ResNet50",
        color: "green-text-gradient",
      },
    ],
    image: recommender,
    source_code_link: "https://github.com/vineet-motwani/Ml_DL_Projects/tree/main/Recommender-System",
  },
  {
    name: "Omnifoods",
    description:
      "A Front-end UI (non-functional) for a dummy Restaurant chain called Omnifoods, which a provides a smooth and serence experience to the customer.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "jQuery",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: omnifoods,
    source_code_link: "https://github.com/vineet-motwani/Web-Dev-Projects/tree/main/Front-end-projects/Restaurant_Omnifoods",
  },
];

export { services, technologies, experiences, projects };
