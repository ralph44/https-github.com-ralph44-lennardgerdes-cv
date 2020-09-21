module.exports = {
  siteTitle: 'Hi! Ich bin Lennard!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Lennard Gerdes',
  twitterUsername: '_franciscodf',
  githubUsername: 'ralph44',
  authorAvatar: '/images/Lennard_Gerdes.JPG',
  authorDescription: `Lebenslanger Problemlöser und Autodidakt. Wissbegierig besonders im Bereich Künstliche Intelligenz und Maschinelles Lernen. 
  Passionierter Programmierer mit der besonderen Eigenschaft Muster in Daten und Prozessen zu erkennen. Das Thema Automatisierung, sei es im Beruf oder im Haus, steht besonders im Fokus.`,
  skills: [
    {
      name: 'Python',
      level: 90
    },
    {
      name: 'Tensorflow',
      level: 80
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'Docker',
      level: 50
    },
    {
      name: 'Bash',
      level: 75
    },
    {
      name: 'Git',
      level: 75
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "CompanyMind",
      begin: {
        month: 'sep',
        year: '2019'
      },
      duration: "Aktueller Job",
      occupation: "Data Scientist",
      description: "Geschäftsprozesse mit maschinellen Lernen optimieren und neu überdenken."
  
    },  {
      company: "",
      begin: {
        month: 'Feb',
        year: '2018'
      },
      duration: "1 Monat",
      occupation: "Wissenschaftlicher Mitarbeiter an der Jade Hochschule, Wilhelmshaven",
      description: "Untersuchung von Reinforcement Learning Frameworks für Unternehmensprozesse"
  
    }, {
      company: "Senacor, Bonn",
      begin: {
        month: 'Mai',
        year: '2018'
      },
      duration: '3 Monate',
      occupation: "Praktikum Berater",
      description: "Testautomatisierung im Banking-Frontend"
    },
  ],
  bildung: [
    /* more jobs here */
    {
      company: "Jade Hochschule, Wilhelmshaven",
      begin: {
        month: 'sep',
        year: '2019'
      },
      duration: "10 Semester ",
      occupation: "Wirtschaftsinformatik",
      description: "Abschluss: Bachelor of Science"
  
    },  {
      company: "Technische Universität, Braunschweig",
      begin: {
        month: 'Okt',
        year: '2013'
      },
      duration: "1 Semester",
      occupation: "Wirtschaftsinformatik",
      description: ""
  
    }, {
      company: "Technische Universität, Braunschweig",
      begin: {
        month: 'okt',
        year: '2012'
      },
      duration: '2 Semester',
      occupation: "Wirtschaftsingenieurwesen Elektrotechnik",
      description: ""
    }, {
      company: "Integrierte Gesamtschule, Wilhelmshaven",
      begin: {
        month: 'JULI',
        year: '2012'
      },
      duration: '2 Jahre',
      occupation: "Abitur",
      description: "Abitur mit den Leistungsfächern Mathematik, Chemie und Biologie"
  
    }, 
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://de.linkedin.com/in/lennard-gerdes-6b46b51aa",
    github: "https://github.com/ralph44",
    email: "lennard.gerdes@t-online.de"
  },
  siteUrl: 'https://ralph44.github.io/lennardgerdes-cv',
  pathPrefix: '/lennardgerdes-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-171142318-3',
  background_color: '#ffffff',
  theme_color: '#94E8B4',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    }
    // {
    //   label: 'Portifolio',
    //   url: '/portifolio',
    // }
  ]
}