const about = {
  greeting: 'Hi!',
  name: 'Dongning Li',
  description: ['Developer for Web & BI'],
  social: {
    resume: './files/resume.pdf',
    linkedin: 'https://www.linkedin.com/in/dongningli/',
    github: 'https://github.com/DongningLi',
  },
}

const projects = [
  {
    thumbnail: [
      './images/portfolio1.png',
      './images/portfolio2.png',
      './images/portfolio3.png',
    ],
    thumbnailDescription: ['Index Page', 'Projects Page', 'Experience Page'],
    name: 'Portfolio',
    description: [
      'A website showcasing about myself built using Next.js',
      'Updating daily',
    ],
    stack: ['Next.js', 'TypeScript', 'CSS'],
    sourceCode: 'https://github.com/DongningLi/DongningLi.github.io',
  },
  {
    thumbnail: [
      './images/vr1family-screenshot1.png',
      './images/vr1family-screenshot2.png',
      './images/vr1family-screenshot3.png',
    ],
    thumbnailDescription: ['Admin Page', 'Form Page', 'Detail Page'],
    name: 'VR1Family',
    description: [
      'Admin webpage for managing user requirements using Django and python',
      'Collaborate with classmates from SWE90016 of UniMelb',
    ],
    stack: ['Python', 'Agile', 'Django'],
    sourceCode: 'https://github.com/DongningLi/vr1family-django',
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
    description: [
      'Management system, including login, form and CRUD operations, based on SSH2',
      'Undegraduate graduation thesis',
    ],
    stack: ['SSH2', 'Javascript', 'JAVA'],
    sourceCode: 'https://github.com/DongningLi/bachelorGraduation/tree/master',
  },
  {
    thumbnail: [
      './networkProgramming/npm1.png',
      './networkProgramming/npm2.png',
      './networkProgramming/npm3.png',
    ],
    thumbnailDescription: ['Result', 'Message sending', 'Peer witness'],
    name: 'Gossip Messages',
    description: [
      'Create TCP and UDP servers to receive messages from the clients',
      'University Project',
    ],
    stack: ['Java', 'ASN1', 'bash'],
    sourceCode:
      'https://github.com/DongningLi/networkProgramming/tree/master/NPMilstone5FINALLY',
  },
  {
    videoThumbnail: [
      './matlab/findPathAndAnimation-1.png',
      './matlab/findPathAndAnimation-2.mp4',
    ],
    videoThumbnailDescription: ['Path finding animation'],
    name: 'Find Path and Animation',
    description: [
      'Find path through obstacles and animate the route',
      'University Porject',
    ],
    stack: ['Matlab', 'Path Finding', 'Animation'],
    sourceCode:
      'https://github.com/DongningLi/Computer-Graphic/tree/master/animation',
  },
  {
    videoThumbnail: [
      './matlab/faceMorphing-1.png',
      './matlab/faceMorphing-2.mp4',
    ],
    videoThumbnailDescription: ['Face Morphing Video'],
    name: 'Face Morphing',
    description: ['Morph face using Matlab', 'University Porject'],
    stack: ['Matlab', 'Face Morphing'],
    sourceCode:
      'https://github.com/DongningLi/Computer-Graphic/tree/master/morph2pics',
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
