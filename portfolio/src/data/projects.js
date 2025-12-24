import bash from "../assets/bash.png";
import CanvasQuest from "../assets/wizard.png";
import financeImg from "../assets/finance.png";
import cityviewImg from "../assets/cityview.png";

export const projects = [
  {
    id: "braizen",
    title: "Braizen",
    cardModifier: "project-card--braizen",
    image: null, // braizen uses CSS background
    developedUsing: "Developed using Python, Streamlit",
    description:
      "A web application designed to assist in the early detection of brain tumors by classifying MRI scans and providing users with detailed information about detected tumor types.",
    learnMore: { url: "https://devpost.com/software/braizen", className: "braizen-details" },
    liveDemo: { url: "https://www.youtube.com/watch?v=JSGOsNMHmwA", className: "braizen-live-demo" },
  },
  {
    id: "powershell",
    title: "Mock PowerShell",
    cardModifier: "project-card--powershell",
    image: bash,
    imageClassName: "element-ztdltzpjvu",
    developedUsing: "Developed a Unix-like shell in C",
    description:
      "Emulates functionalities of standard shells and provides an interface for users to access OS services like file and process management.",
    learnMore: { url: "https://github.com/mikey6002/OperatingSystems_Project2_Shell", className: "powershell-learn" },
  },
  {
    id: "canvas-quest",
    title: "Canvas Quest",
    cardModifier: "project-card--canvas",
    image: CanvasQuest,
    imageClassName: "element-efd",
    developedUsing: "JavaScript, HTML, CSS, Python, Flask, and SQL",
    description:
      "A web application that gamifies the academic experience by transforming coursework into an interactive role-playing game.",
    learnMore: { url: "https://capstone-projects-2024-fall.github.io/project-ai-study-rpg-game/", className: "canvas-learn-more" },
    liveDemo: { url: "https://www.youtube.com/watch?v=8Rgt0mLH1pk", className: "canvas-live-demo" },
  },
  {
    id: "finance-tracker",
    title: "Personal Finance Tracker",
    cardModifier: "project-card--finance",
    image: financeImg,
    imageClassName: "finance",
    developedUsing: "Developed with Python and KivyMD",
    description:
      "Designed to help users manage their finances by tracking income, expenses, savings and investments with clear insights and charts.",
    learnMore: { url: "https://github.com/mikey6002/Personal-Finance-Tracker", className: "braizen-details" },
  },
  {
    id: "crime-prediction",
    title: "Los Angeles Crime Prediction",
    cardModifier: "project-card--crime",
    image: null, // crime uses CSS background
    developedUsing: "Built with Python, Pandas, Scikit-Learn",
    description:
      "Uses machine learning to predict crime patterns and identify hotspot areas to inform prevention strategies.",
    learnMore: { url: "https://github.com/mikey6002/Techwise_AI_ML", className: "braizen-details" },
  },
  {
    id: "city-view",
    title: "City View Pizza Prototype",
    cardModifier: "project-card--cityview",
    image: cityviewImg,
    imageClassName: "cvp-logo",
    developedUsing: "Figma prototype",
    description:
      "Reimagined the digital experience for City View Pizza to enhance online ordering, menu navigation, and customer engagement.",
    learnMore: { url: "https://www.figma.com/design/7W8SL2JKKzEuoJJEgwR71n/Design-Workshop", className: "city-view-learn-m" },
  },
];
