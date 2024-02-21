const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: "Dongning Li",
  university: "University of Melbourne",
  course: "Master of IT",
  description: ["What sounds crazy sounds reasonable."],
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/dongningli/",
    github: "https://github.com/DongningLi",
  },
};

const projects = [
  {
    thumbnail: "/images/portfolio.png",
    name: "Portfolio",
    description: ["Portfolio based on Nextjs."],
    stack: ["Next.js", "React", "CSS"],
    sourceCode: "https://github.com/DongningLi/personal-webpage",
  },
  {
    thumbnail: "",
    name: "VR1Family",
    description: [
      "Collaborate with classmates from SWE90016. VR1Family information system (for SPM assignment)",
    ],
    stack: ["Python", "Agile", "Django"],
    sourceCode: "https://github.com/DongningLi/vr1family-django",
  },
  {
    thumbnail: "",
    name: "Management System",
    description: ["Bachelor graduation system based on SSH2."],
    stack: ["SSH2", "javascript", "Database management"],
    sourceCode: "https://github.com/DongningLi/bachelorGraduation/tree/master",
  },
];

const skills = [
  "Next.js",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "SASS",
  "Material UI",
  "Database",
  "Database Managment",
  "Git",
  "Auto Test",
  "Cyber Security",
  "Network Framework",
  "BI System Build and Maintanance",
  "Project Management",
];

const contact = {
  email: "et123.woo@gmail.com",
};

export { about, projects, skills, contact };
