const about = {
  name: 'Dongning Li',
  university: 'University of Melbourne',
  course: 'Master of IT',
  description: [
    {
      position: 'Master of IT',
      period: 'Feb 2023 - Now',
      Tasks: [
        'Projects for AI process in python with agile: algorithms implementation, software project',
      ],
    },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dongningli/',
    github: 'https://github.com/DongningLi',
  },
}

const projects = [
  {
    thumbnail: './images/portfolio.png',
    name: 'Portfolio',
    description: ['Portfolio based on Nextjs.'],
    stack: ['Next.js', 'React', 'CSS'],
    sourceCode: 'https://github.com/DongningLi/DongningLi.github.io',
  },
  {
    thumbnail: './images/vr1family-screenshot.png',
    name: 'VR1Family',
    description: [
      'Collaborate with classmates from SWE90016. VR1Family information system (for SPM assignment)',
    ],
    stack: ['Python', 'Agile', 'Django'],
    sourceCode: 'https://github.com/DongningLi/vr1family-django',
  },
  {
    thumbnail: './images/bachelorSystem.png',
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
  'JavaScript',
  'Firebase',
  'PHP',
  'SASS',
  'Material UI',
  'Database',
  'Git',
  'Cyber Security',
  'BI System',
  'Project Management',
]

const contact = {
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
