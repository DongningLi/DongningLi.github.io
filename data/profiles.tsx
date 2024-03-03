const about = {
  greeting: 'Hi!',
  name: 'Dongning Li',
  description: [
    'Developer for Web & BI',
    'Adept in Next.js, Firebase, and Database Warehousing',
  ],
  social: {
    resume: './files/resume.pdf',
    linkedin: 'https://www.linkedin.com/in/dongningli/',
    github: 'https://github.com/DongningLi',
  },
}

const projects = [
  {
    thumbnail: [
      './images/vr1family-screenshot1.png',
      './images/vr1family-screenshot2.png',
      './images/vr1family-screenshot3.png',
    ],
    thumbnailDescription: ['Admin Page', 'Form Page', 'Detail Page'],
    name: 'VR1Family',
    description: [
      'Collaborate with classmates from SWE90016. VR1Family information system (for SPM assignment)',
    ],
    stack: ['Python', 'Agile', 'Django'],
    sourceCode: 'https://github.com/DongningLi/vr1family-django',
  },
  {
    thumbnail: [
      './images/portfolio1.png',
      './images/portfolio2.png',
      './images/portfolio3.png',
    ],
    thumbnailDescription: ['Index Page', 'Projects Page', 'Experience Page'],
    name: 'Portfolio',
    description: ['Portfolio based on Nextjs.'],
    stack: ['Next.js', 'React', 'CSS'],
    sourceCode: 'https://github.com/DongningLi/DongningLi.github.io',
  },
  {
    thumbnail: [
      './images/bachelorSystem1.png',
      './images/bachelorSystem2.png',
      './images/bachelorSystem3.png',
    ],
    thumbnailDescription: [
      'Index Page',
      'Search Information Page',
      'Forum Page',
    ],
    name: 'Management System',
    description: ['Bachelor graduation system based on SSH2.'],
    stack: ['SSH2', 'javascript', 'Database management'],
    sourceCode: 'https://github.com/DongningLi/bachelorGraduation/tree/master',
  },
]

const skills = [
  'Next.js',
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'Firebase',
  'BI System',
  'Database',
  'PHP',
  'Git',
  'Cyber Security',
  'Project Management',
]

const contact = {
  description:
    'I cherish teamwork as a catalyst for collective growth and achievement',
  email: 'et123.woo@gmail.com',
}

const experience = [
  {
    position: 'Front-end Developer',
    period: 'Nov 2023 - Now',
    Tasks: [
      {
        task: 'Implement availability components hook and documentations',
        result: 'Seek new solutions',
      },
      {
        task: 'Modified and summarized components common functions',
        result: 'Contribute to groups',
      },
      {
        task: 'Implement auto-test on form creation including both successful and fail case',
        result: 'Save about 3mins per test',
      },
    ],
  },
  {
    position: 'Software Developer, Network Security Administrator, DBA',
    period: 'Aug 2017 - Feb 2023',
    Tasks: [
      {
        task: 'Design and mantain Business Intelligence system and database',
        result: 'Finished about 40 charts, of saved about 5k each from using',
      },
      {
        task: 'Built an enterprise-level network infrastructure consisted of six layers and five zones',
        result: 'Passes the Chinese classified protection level II',
      },
      {
        task: 'Set up policies and requirements for assets, network and system maintenance',
        result: 'Between 20 to 40 person-hours are saved',
      },
    ],
  },
]

export { about, projects, skills, contact, experience }
