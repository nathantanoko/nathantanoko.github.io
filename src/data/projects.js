import project1PhotoPreview from "../assets/project1_photo_preview.png";
import project2PhotoPreview from "../assets/project2_photo_preview.png";
import project3PhotoPreview from "../assets/project3_photo_preview.png";
import project4PhotoPreview from "../assets/project4_photo_preview.jpeg";

export const projects = [
  {
    slug: "project-one",
    title: "Quality Assurance System",
    period: "March 2025 – January 2026]",
    status: "Completed", // Completed | In Progress | Maintained
    type: "Personal Project",
    role: "Solo Developer",
    stack: ["PHP", "JavaScript", "Bootstrap", "MySQL", "XAMPP"],
    image: project1PhotoPreview,
    overview:
      "The Quality Assurance System is a web-based Quality Control Information System developed to replace manual inspection and reporting processes. The system streamlines inspection workflows, approval processes, and reporting activities while improving data consistency and supporting more efficient operational workflows within the Quality Assurance division.",
    },
  {
    slug: "project-two",
    title: "Coup Game",
    period: "October 2025 - January 2026",
    status: "Completed",
    type: "Academic Team Project",
    role: "Solo Developer",
    stack: ["Python", "JavaScript", "HTML", "CSS", "FAST API"],
    image: project2PhotoPreview,
    overview: "Developed a web-based multiplayer adaptation of the Coup board card game, enabling players to play remotely from different devices while preserving the original gameplay mechanics, character abilities, and turn-based interactions. The system provides synchronized real-time gameplay, matchmaking, and game room management to deliver an engaging online multiplayer experience.",
    sourceUrl: "https://github.com/timothyhenseputra/coup-web",
  },
  {
    slug: "project-three",
    title: "Findora",
    period: "March 2025 - August 2025",
    status: "Completed",
    type: "Academic Team Project",
    role: "Frontend Developer (Team of [N])",
    stack: ["React", "Tailwind CSS"],
    image: project3PhotoPreview,
    overview: "Findora is a web-based Lost and Found management system designed to digitalize item reporting and tracking within university environments. The system streamlines reporting workflows for both item owners and finders, improves accessibility to lost and found information, and simplifies administrative verification through a centralized digital platform.",
    sourceUrl: "https://github.com/arielyrd/findora",
  },
  {
    slug: "project-four",
    title: "PetsKit",
    period: "November 2024 - Desember 2024",
    status: "Completed",
    type: "Capstone Project",
    role: "Cloud Engineer",
    stack: ["Google Cloud Platform", "Express JS", "APP Engine", "Cloud Run", "Cloud Storage", "CLoud Run", "Firestore", "Flask API", "Javascript"],
    image: project4PhotoPreview,
    overview: "P3tsKit is a mobile application developed by the C242-PS104 team to help pet owners identify skin problems in dogs and cats. Users can capture or upload a photo, which is analyzed by a cloud-based machine learning model to detect potential conditions and provide treatment recommendations, enabling faster and more effective pet care.",
    sourceUrl: "https://github.com/P3tsKit",
  },
];
