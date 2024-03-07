const projects = [
  {
    thumbnail: [
      './images/portfolio1.png',
      './images/portfolio2.png',
      './images/portfolio3.png',
    ],
    videoThumbnail: [],
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
    videoThumbnail: [],
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
    videoThumbnail: [],
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
    videoThumbnail: [],
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
    thumbnail: [],
    videoThumbnail: [
      './matlab/findPathAndAnimation-1.png',
      './matlab/findPathAndAnimation-2.mp4',
    ],
    thumbnailDescription: ['Path finding animation'],
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
    thumbnail: [],
    videoThumbnail: [
      './matlab/faceMorphing-1.png',
      './matlab/faceMorphing-2.mp4',
    ],
    thumbnailDescription: ['Face Morphing Video'],
    name: 'Face Morphing',
    description: ['Morph face using Matlab', 'University Porject'],
    stack: ['Matlab', 'Face Morphing'],
    sourceCode:
      'https://github.com/DongningLi/Computer-Graphic/tree/master/morph2pics',
  },
]

export { projects }
