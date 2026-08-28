import project1PhotoPreview from "../assets/project1_photo_preview.png";
import project2PhotoPreview from "../assets/project2_photo_preview.png";
import project3PhotoPreview from "../assets/project3_photo_preview.png";
import project4PhotoPreview from "../assets/project4_photo_preview.png";
import project5PhotoPreview from "../assets/project5_photo_preview.png";
import project6PhotoPreview from "../assets/project6_photo_preview.png";
import project7PhotoPreview from "../assets/project7_photo_preview.png";

export const projects = [
  {
    slug: "project-one",
    title: "Quality Assurance System",
    period: "March 2025 – March 2026]",
    status: "Completed",
    type: "Intership Project",
    role: "Fullstack Developer",
    stack: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL", "XAMPP"],
    image: project1PhotoPreview,
    overview:
      "The Quality Assurance System is a web-based Quality Control Information System developed to replace manual inspection and reporting processes. The system streamlines inspection workflows, approval processes, and reporting activities while improving data consistency and supporting more efficient operational workflows within the Quality Assurance division.",
  },
  {
    slug: "project-two",
    title: "Coup Game",
    period: "October 2025 - January 2026",
    status: "Completed",
    type: "Team Project",
    role: "Solo Developer",
    stack: ["Python", "JavaScript", "HTML", "CSS", "FAST API"],
    image: project2PhotoPreview,
    overview: "Developed a web-based multiplayer adaptation of the Coup board card game, enabling players to play remotely from different devices while preserving the original gameplay mechanics, character abilities, and turn-based interactions. The system provides synchronized real-time gameplay, matchmaking, and game room management to deliver an engaging online multiplayer experience.",
    sourceUrl: "https://github.com/timothyhenseputra/coup-web",
  },
  {
    slug: "project-five",
    title: "Meal Finder",
    period: "January 2026",
    status: "Completed",
    type: "Personal Project",
    role: "Fullstack Developer",
    stack: ["React", "Tailwind CSS", "Javascript", "HTML", "CSS"],
    image: project5PhotoPreview,
    overview: "Meal Finder is a web application that helps users discover and explore different meal options based on their preferences and dietary restrictions. The application features a user-friendly interface, comprehensive recipe database, and personalized recommendations to enhance the dining experience.",
    sourceUrl: "https://github.com/nathantanoko/Meal-Finder",
  },
  {
    slug: "project-three",
    title: "Findora",
    period: "March 2025 - August 2025",
    status: "Completed",
    type: "Team Project",
    role: "Backend Developer",
    stack: ["React", "Tailwind CSS", "Javascript", "HTML", "CSS"],
    image: project3PhotoPreview,
    overview: "Findora is a web-based Lost and Found management system designed to digitalize item reporting and tracking within university environments. The system streamlines reporting workflows for both item owners and finders, improves accessibility to lost and found information, and simplifies administrative verification through a centralized digital platform.",
    sourceUrl: "https://github.com/arielyrd/findora",
  },
  {
    slug: "project-four",
    title: "P3tsKit",
    period: "November 2024 - Desember 2024",
    status: "Completed",
    type: "Team Project",
    role: "Cloud Engineer",
    stack: ["Google Cloud Platform", "Express JS", "APP Engine", "Cloud Run", "Cloud Storage", "CLoud Run", "Firestore", "Flask API", "Javascript"],
    image: project4PhotoPreview,
    overview: "P3tsKit is a mobile application developed by the C242-PS104 team to help pet owners identify skin problems in dogs and cats. Users can capture or upload a photo, which is analyzed by a cloud-based machine learning model to detect potential conditions and provide treatment recommendations, enabling faster and more effective pet care.",
    sourceUrl: "https://github.com/P3tsKit",
  },
  {
    slug: "project-six",
    title: "FitCalc",
    period: "March 2023 - April 2023",
    status: "Completed",
    type: "Personal Project",
    role: "Fullstack Developer",
    stack: ["Java", "SQLite"],
    image: project6PhotoPreview,
    overview: "FitCalc is an android application designed to help users calculate and track their Body Mass Index (BMI) based on their weight and height. It stores calculation results and provides BMI category information and a history feature, allowing users to review and monitor their previous results.",
    sourceUrl: "https://github.com/nathantanoko/FitCalc",
  },
  {
    slug: "project-seven",
    title: "B-Calc",
    period: "January 2023 - February 2023",
    status: "Completed",
    type: "Personal Project",
    role: "Fullstack Developer",
    stack: ["Dart", "Flutter"],
    image: project7PhotoPreview,
    overview: "B-Calc is a calculator application that provides standard arithmetic, temperature conversion, and time unit conversion in a single application. It also includes local calculation history management, allowing users to view and delete previous results.",
    sourceUrl: "https://github.com/nathantanoko/B-Calc",
  },
];
