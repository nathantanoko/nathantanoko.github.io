import heroImage from "../assets/nathan_tanoko.png";

export const profile = {
  name: "Nathan Tanoko",
  title: "IT Enthusiast | Software Engineer | Cloud Engineer | Fullstack Developer",
  tagline:
    "Fresh graduate building end-to-end applications and scalable cloud solutions.",
  location: "Bekasi, Indonesia",
  availability: "Open to opportunities",
  email: "tanokonathan@gmail.com",
  github: "https://github.com/nathantanoko",
  linkedin: "https://www.linkedin.com/in/nathan-tanoko",
  instagram: "https://www.instagram.com/nathan_tanoko",
  resumeUrl: {
    title: "Choose your CV version",
    description:
      "Pick the CV format that fits your need. Both links open in a new tab so you can preview or download them directly from Google Drive.",
    links: [
      {
        label: "English CV",
        href: "https://drive.google.com/file/d/1M5UxpbH-Ue_FJ23RyhmdOz1HyQVaeVSN/view?usp=sharing",
      },
      {
        label: "CV Indonesia",
        href: "https://drive.google.com/file/d/18qSrR2MlYVDAadywzJHu-G8rpm9EBhi4/view?usp=sharing",
      },
    ],
  },
  heroImage,
};

export const quickProfile = [
  { label: "Focus", value: "Software Engineer | Cloud Engineer | Fullstack Developer" },
  { label: "Current Status", value: "Fresh Graduate" },
  { label: "Primary Stack", value: "React | Laravel | GCP" },
  { label: "Availability", value: "Open to opportunities" },
];

export const about = {
  background:
    "I developed my interest in software development while studying Information Technology Engineering, where I gained hands-on experience building applications through academic, industry, and cloud computing projects. From developing full-stack systems to designing scalable cloud solutions, I enjoy turning real-world problems into reliable and maintainable software. These experiences have shaped my passion for building end-to-end applications and exploring how cloud technologies can make software more scalable and impactful.",
  currentFocus:
    "Currently focused on building end-to-end applications, strengthening my full-stack development skills, and deepening my understanding of cloud technologies and scalable system architecture.",
  careerDirection:
    "I'm currently looking for opportunities where I can contribute to real-world software products, learn from experienced engineers, and continue growing as a Full-Stack Developer and Cloud Engineer.",
  learningApproach: [
    "Building complete, working projects instead of only following tutorials",
    "Reading documentation directly rather than relying on secondhand explanations",
    "Debugging methodically : reproducing, isolating, then fixing",
    "Using AI tools to explore ideas faster, while making sure I understand every line I ship",
  ],
  workPhilosophy: [
    "Curiosity : I like understanding how things work, not just that they work",
    "Ownership : I follow through on what I start and take responsibility for the results",
    "Continuous learning : Technology moves fast, so I continuously improve and adapt",
    "Collaboration : I believe the best solutions often come from sharing ideas and learning from others",
  ],
};

export const howIWork = {
  intro:
    "My day to day process, from understanding a problem to shipping and iterating on the solution.",
  steps: [
    "Understand the problem",
    "Breakdown requirements",
    "Plan the solution",
    "Explore and research",
    "Implement the solution",
    "Test and debug",
    "Review and refactor",
    "Deploy and iterate",
  ],
  aiUsage: {
    heading: "How I use AI in my workflow",
    body:
      "I use AI tools as a development accelerator and learning partner, not as a replacement for understanding the code I write. I use AI to explore approaches faster, get a second perspective when debugging, and reduce repetitive boilerplate work. I still read, test, review, and make sure I can explain every piece of code that ships.",
    flow: [
      "Idea",
      "Requirement breakdown",
      "Solution Planning",
      "AI-assisted exploration",
      "Implementation",
      "Code review",
      "Testing",
      "Debugging",
      "Refactoring",
      "Deployment",
    ],
  },
};

export const contact = {
  heading: "Let's talk",
  body: "Have an opportunity, project, or idea you'd like to discuss? Feel free to reach out.",
};
