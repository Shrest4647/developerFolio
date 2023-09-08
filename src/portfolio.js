/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sunil Shrestha",
  title: "Hi all, I'm Sunil",
  subTitle: emoji(
    `An enthusiastic and self-motivated Mobile/Web Developer, passionate to learn and implement the
    cutting edge technology with Cloud Computing and Artificial Intelligence, having a problem solving
    mindset, good communication skills, strong foundations of data structure and algorithm, capable of
    planning the project and leading the team.
    `
  ),
  resumeLink: "/pdf/shrest_resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shrest4647",
  linkedin: "https://www.linkedin.com/in/shrest/",
  gmail: "shrest464760+portfolio@gmail.com",
  gitlab: "#",
  facebook: "https://www.facebook.com/shrest.sunil.3",
  // medium: "#",
  stackoverflow: "https://stackoverflow.com/users/10908399/sunil-shrest",
  twitter: "https://twitter.com/4647sunil",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / OAuth / Stripe"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pulchowk Engineering College",
      logo: require("./assets/images/ioe.jpg"),
      subHeader: "Bachelors in Computer Engineering",
      duration: "November 2017 - April 2022",
      desc: "Participated in the events and competitions organized by the college. \n Orgnaized events and competitions.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Developer",
      company: "Logic Information System Nepal",
      companylogo: require("./assets/images/lisLogo.png"),
      date: "April 2022 - Present",
      desc: "Leading innovation and collaboration in a dynamic software development environment. Responsibilities include:",
      descBullets: [
        "Architecting a cutting-edge Web Based Code Execution and Evaluation System utilizing React, Flask, and MongoDB, ensuring seamless event execution.",
        "Revolutionizing project management with in-house tools, boosting efficiency and transparency in workflows.",
        "Driving the adoption of containerization with Docker for React and Laravel applications, ensuring rapid and secure deployments.",
        "Designing GraphQL APIs with the .NET Framework, empowering resource planning and optimization."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Logic Information System Nepal",
      companylogo: require("./assets/images/lisLogo.png"),
      date: "October 2021 - March 2022",
      desc: "Embarked on a transformative journey in software development with a focus on:",
      descBullets: [
        "Pioneering a cross-platform mobile application using Flutter, enhancing user experiences with intuitive design and functionality.",
        "Harnessing the power of Deep Learning to train a sentiment analysis model, unveiling hidden insights from text data.",
        "Crafting captivating user interfaces through meticulous wireframing and UI/UX designs in Figma."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Sireto Technology",
      companylogo: require("./assets/images/siretoLogo.png"),
      date: "August 2021 - October 2021",
      desc: "Contributed to the evolution of an open-source project and ventured into innovative territory by:",
      descBullets: [
        "Pioneering the development of a Cloud Firewall service for Linux VMs, safeguarding digital assets with Nftables technology.",
        "Empowering monitoring capabilities by creating an interactive dashboard for Linux VMs using Next.js and TailwindCSS.",
        "Establishing seamless communication with Restful APIs and gRPC connections, ensuring effective Linux VM management."
      ]
    },
    {
      role: "Flutter Developer, Independent Contractor",
      company: "Techniti Nepal",
      companylogo: require("./assets/images/technitiLogo.png"),
      date: "Nov 2021 to Dec 2021",
      desc: "Played a pivotal role in delivering mobile excellence, including:",
      descBullets: [
        "Crafting a user-friendly mobile application and successfully launching it on Google Play Store, garnering positive user feedback.",
        "Implementing cutting-edge features to enhance user engagement and satisfaction.",
        "Collaborating closely with the client to ensure the project's alignment with their vision and goals."
      ]
    },
    {
      role: "Web Developer, Independent Contractor",
      company: "ZAO Bakehouse",
      companylogo: require("./assets/images/zaoLogo.png"),
      date: "April 2022 - August 2022",
      desc: "Brought the world of baked goods online, creating a delightful e-commerce experience by:",
      descBullets: [
        "Designing and developing a visually appealing and user-friendly e-commerce website for a bakery shop, increasing online sales.",
        "Implementing secure payment gateways and optimizing the checkout process for a seamless customer journey.",
        "Collaborating with the client to showcase their products effectively and create a unique online presence."
      ]
    },
    {
      role: "Web Developer, Independent Contractor",
      company: "Gloria School",
      companylogo: require("./assets/images/gloriaLogo.png"),
      date: "April 2020 - Dec 2020",
      desc: "Empowered education and digital learning, contributing to the school's online presence by:",
      descBullets: [
        "Creating a visually appealing school website using WordPress, providing easy access to information for students and parents.",
        "Configuring and customizing an e-learning platform using Moodle, enabling online courses and resources for remote learning.",
        "Collaborating with school staff to ensure the website and e-learning platform met the specific needs of the educational institution."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME RECENT BIG ORGANIZED PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/rocketImage.jpg"),
      projectName: "Publication Management Portal",
      projectDesc:
        "Software Engineering and Database Management System\n\nRole: Full Stack Developer\n\nThis project was developed for managing the articles, papers, and other formal publications published in different journals by the faculty members of the institution of Pulchowk Engineering Campus.",
      footerLink: []
    },
    {
      image: require("./assets/images/crops.jpg"),
      projectName: "Crop Recommendation Using ML (AgroRecon)",
      projectDesc:
        "Minor Project\nRole: Angular 9 Frontend Developer\nThis project is a Web-based application that employs computational model ANN as learners to recommend a crop for site-specific parameters with high accuracy and efficiency.",
      footerLink: []
    },
    {
      image: require("./assets/images/lotus.jpg"),
      projectName: "Realization of Mental Hygiene Using Deep Learning",
      projectDesc:
        "Major Project\nRole: Flutter Developer\nThis project is an Android application that employs the power of Deep Learning in the field of health to perform sentiment analysis and identify the symptoms of depression, and recommend proper methods for personal growth, development, and motivation.",
      footerLink: []
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Foodle Project",
      subtitle: "Winner of HACK-A-WEEK at LOCUS Events, Pulchowk (2020)",
      image: require("./assets/images/locusLogo.jpg"),
      imageAlt: "Foodle Project Logo",
      footerLink: []
    },
    {
      title: "AWS Academy Cloud Foundations",
      subtitle: "Amazon Web Services - August 2021",
      image: require("./assets/images/awsColudLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/0790fe10-85bd-4701-afe5-b9bcb3ccfebf?source=linked_in_profile"
        }
      ]
    },
    {
      title: "Browser-based Models with TensorFlow.js",
      subtitle: "Coursera - July 2021",
      image: require("./assets/images/deeplearning-ai-logo.png"),
      imageAlt: "TensorFlow Logo",
      footerLink: [
        {
          name: "Course Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/PF9J2BEZ4J5F"
        }
      ]
    },
    {
      title: "Natural Language Processing in TensorFlow",
      subtitle: "Coursera - February 2022",
      image: require("./assets/images/deeplearning-ai-logo.png"),
      imageAlt: "TensorFlow Logo",
      footerLink: [
        {
          name: "Course Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/PF9J2BEZ4J5F"
        }
      ]
    },
    {
      title: "DevOps Foundations",
      subtitle: "LinkedIn Learning Certification",
      image: require("./assets/images/linkedinLogo.png"),
      imageAlt: "LinkedIn Learning Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/242201f9a3d7db0c86d2a38d74af20c1c9c45daa4c3522fbf0022f7fb574019b"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+977-9860464760",
  email_address: "shrest464760@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "4647sunil", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
