module.exports = {
  title: 'Jurjen Biewenga',
  header: "Hi, my name is Jurjen Biewenga",
  description: "I'm a software developer with several years of experience in C#, Unity and an affinity for tool development",
  name: 'Jurjen Biewenga',
  footerTitle: 'Freelance developer',
  email: 'me@jurjenbiewenga.com',
  cta: {
    label: 'Resume',
    url: 'https://github.com/JurjenBiewenga/jsonresume/raw/master/resume.pdf',
  },
  socials: [
    { icon: 'github-circled', url: 'https://github.com/JurjenBiewenga' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
    { icon: 'lin-squared', url: 'https://www.linkedin.com/in/jurjen-biewenga-2b1b9796/' }
  ],
  projects: [
    {
      name: 'Bodybuilder',
      description: 'Bodybuilder is a project for the University of Groningen where you have to micro-manage your own space station hospital and solve math equations related to prosthesis development.',
      tags: ['C#', 'Unity', '.net'],
      alt: 'Bodybuilder Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'Bodybuilder.png',
      url: ''
    },
    {
      name: 'ViRTuE WindTech',
      description: 'ViRTuE WindTech is a research and development project to develop and test a wind turbine technician training in virtual reality. The player will be trained in the basic engineering of a wind turbine and how to safely maintain and repair a wind turbine.',
      tags: ['C#', 'Unity', '.net'],
      alt: 'ViRTuE WindTech Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'ViRTuE WindTech.png',
      url: ''
    },
    {
      name: 'Domo',
      description: 'Domo is an FOSS home automation framework and is designed to be modular and easy to develop for.',
      tags: ['C#', 'IronPython', 'Python', '.net'],
      alt: 'Domo Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'GitHub-Mark-120px-plus.png',
      url: 'https://github.com/vinhui/Domo'
    },
    {
      name: 'Machinate',
      description: "Machinate is a real time strategy game where the player can construct a network of a variety of Nodes that are connected by the player's wishes. This to increase influence within a three dimensional environment to increase capabilities that allow the player to overcome obstacles like other enemy networks and/or single larger enemies.",
      tags: ['Unity', 'C#', 'IronPython', 'Python', '.net'],
      img: 'Machinate.png',
      url: ''
    },
    {
      name: '#ScreamsAtGlasses - Global Game Jam 2017',
      description: "A game in which two participants take on the role of old fashioned, seasoned, veteran opera singers. With their literal ear shattering voices that can destroy wineglasses. Both players have their own tower made of many glasses but some are not like the others. A couple of glasses clearly belong to the opponent and you can't live with that. By using your well trained voice, you pinpoint the exact frequency at which those glasses will break. With each broken glass the tower gets ever so slightly less stable. Before you know it, the whole tower comes crashing down and only a few glasses remain on your table.",
      tags: ['Unity', 'C#', '.net'],
      img: 'ScreamsAtGlasses.png',
      url: 'http://globalgamejam.org/2017/games/screamsatglasses'
    },
    {
      name: 'Project VRROOM Green Energy',
      description: "In collaberation with VRROOM and Polygon Interactive, we have developed a serious game to educate and inform about the importance of balancing green and fossil energies during Eurosonic.",
      tags: ['Unity', 'C#', '.net', 'SteamVR', 'HTC Vive', 'VR'],
      img: 'Vrroom.png',
      url: ''
    },
    {
      name: 'ExMan-3D South Africa',
      description: "ExMan-3D is a serious game where you play the role of the manager of your own catering company. This game is going to assist with the classes given at the Potchefstroom Campus. The main purpose of the game is helping students and trainees to learn how to handle difficult situations and how to make the best choice to keep everyone involved happy. To do this, the game consists of fully voice acted dialogue and interactions with a world entirely in 3D for the player to walk around in.",
      tags: ['Unity', 'C#', '.net'],
      img: 'ExMan-3D.png',
      url: ''
    },
    {
      name: 'Global Game Jam 2016 - Necromagic',
      description: "With great power comes great responsibility. Combine resources to summon your minions and send them off towards the other necromancer. They will try to do the same! Do you have what it takes to control your minions and fence off the other necromancer?",
      tags: ['Unity', 'C#', '.net'],
      img: 'Necromagic.png',
      url: 'http://globalgamejam.org/2016/games/necromagic'
    },
    {
      name: 'Project Yarr',
      description: "Yarr the game takes place in medieval carribean, and tells the story of a man who’s life, ship and dignity has been taken away by the captain of the Flying Dutchman. Your Role is to regain your dignity and recapture the most infamous ship of the seven seas.",
      tags: ['Unity', 'C#', '.net'],
      img: 'yarrgame.jpg',
      url: ''
    },
    {
      name: 'Bucket List',
      description: "The Bucket List VR app allows you to experience an amazing selection of Virtual Reality bucket list activities without having to worry about the travel, cost or dangers normally involved in these activities.",
      tags: ['Unity', 'C#', '.net', 'GearVR', 'VR'],
      img: 'Bucketlist.jpg',
      url: 'https://devpost.com/software/bucket-list'
    },
    {
      name: 'Moonwalker',
      description: "Moonwalker is a virtual reality training application designed to stimulate the muscles in your leg, using the Oculus Rift Dk1/2 and the Kinect V2 it detects your movements and rewards you for doing the correct exercises.",
      tags: ['Unity', 'C#', '.net', 'Kinect', 'Oculus Rift', 'VR'],
      img: '',
      url: '' 
    },
  ],
  experiences: [
    {
      title: 'Tools Programmer @ Seriously',
      tags: ['Unity', 'C#', '.net'],
      description: "Working with developers and designers to create and support the tools they need to streamline and improve the development processes",
      timeline: 'Sept 2020 - Present',
    },
    {
      title: 'Software Engineer @ CleVR',
      tags: ['Unity', 'WPF', 'C#', '.net', 'VR'],
      description: "Revamped the software installation/build process to minimize user error and increase speed.\nDeveloped and released several products using Unity and WPF.",
      timeline: 'Feb 2018 - Aug 2020',
    },
    {
      title: 'Lunosis',
      tags: ['Unity', 'C#', '.net', 'VR', 'VR Training'],
      description: "Freelance software development with a focus on VR",
      timeline: 'Jun 2015 - Aug 2020',
    }
  ]
}
