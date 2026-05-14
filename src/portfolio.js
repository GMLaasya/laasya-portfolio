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
  username: "G M Laasya",
  title: "Hi all, I'm G M Laasya ",
  subTitle: emoji(
  "Computer Science Engineering student passionate about Artificial Intelligence, secure systems, and problem solving."
),

resumeLink: "/G_M_Laasya_Resume(24.03.2026).pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GMLaasya",
  linkedin: "https://www.linkedin.com/in/g-m-laasya-083162293/",
  gmail: "mailto:23211a0586@bvrit.ac.in",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "PASSIONATE COMPUTER SCIENCE ENGINEERING STUDENT INTERESTED IN ARTIFICIAL INTELLIGENCE, CYBERSECURITY, AND INTELLIGENT SYSTEMS",

  skills: [
    "⚡ Build AI-powered and intelligent applications",
    "⚡ Develop secure systems using encryption techniques",
    "⚡ Work with Java, Python, SQL, and problem-solving",
    "⚡ Explore research-driven and real-world technology solutions"
  ],

  softwareSkills: [
    {
      skillName: "C"
    }
    {
      skillName: "Java"
    },
    {
      skillName: "Python"
    },
    {
      skillName: "SQL"
    },
    {
      skillName: "HTML"
    },
    {
      skillName: "CSS"
    },
    {
      skillName: "JavaScript"
    }
  ],
  display: true
};
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  title: "Experience",
  subtitle: "INTERNSHIPS AND PRACTICAL LEARNING EXPERIENCE",

  experience: [
    {
      role: "AI Summer Intern",
      company: "Mirai School of Technology",
      date: "2026",
      desc:
        "Gained hands-on experience with AI tools, frameworks, and real-world project development. Worked on applying AI concepts to practical problem-solving while strengthening knowledge in intelligent systems and emerging technologies.",

      descBullets: [
        "Explored AI tools and frameworks",
        "Worked on real-time AI-based projects",
        "Strengthened practical AI knowledge"
      ]
    }
  ],

  display: true
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
  subtitle: "SOME OF THE PROJECTS I HAVE WORKED ON",

  projects: [
    {
      image: "documentAI",
      projectName: "Verified Document Intelligence System",
      projectDesc:
        "AI-powered document analysis assistant that enables users to upload PDFs and query their content intelligently. The system performs self-verification, confidence scoring, and performance tracking to reduce hallucinated responses in traditional AI systems.",
      footerLink: [
        {
          name: "Tech Stack",
          url: "Python | Streamlit | LangChain | FAISS | Ollama (Phi-3)"
        }
      ]
    },

    {
      image: "resumeAI",
      projectName: "AI-Powered Resume and Job Description Matcher",
      projectDesc:
        "Intelligent resume matching system that helps job seekers and recruiters by comparing resumes with job descriptions to identify the best fit using AI-driven matching techniques.",
      footerLink: [
        {
          name: "Tech Stack",
          url: "Python | HTML | CSS"
        }
      ]
    },

    {
      image: "journeyAI",
      projectName: "JourneyX AI Planner",
      projectDesc:
        "AI-powered travel planning application that generates personalized itineraries, estimated budgets, and travel recommendations based on destination, preferences, dates, and user inputs.",
      footerLink: [
        {
          name: "Tech Stack",
          url: "Lovable | n8n | OpenAI API"
        }
      ]
    }
  ],

  display: true
};
  

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements & Certifications",
  subtitle:
    "RESEARCH CONTRIBUTIONS, CERTIFICATIONS, AND ACADEMIC ACHIEVEMENTS",

  achievementsCards: [
    {
      title:
        "Quantum Safe Encryption for Securing Healthcare Data",
      subtitle:
        "Published research paper in the 2025 3rd World Conference on Communication & Computing (WCONF). Developed a quantum-safe encryption framework using CRYSTALS-Kyber, Diffie-Hellman key exchange, and AES encryption for securing healthcare data.",

      footerLink: [
        {
          name: "View Publication",
          url: "https://doi.org/10.1109/WCONF64849.2025.11233562"
        }
      ]
    },

    {
      title:
        "Salesforce Certified Agentforce Specialist",
      subtitle:
        "Professional certification in Salesforce Agentforce technologies (Dec 2025).",

      footerLink: []
    },

    {
      title:
        "SQL and Relational Databases 101",
      subtitle:
        "Completed certification by IBM Developer Skills Network focused on SQL fundamentals and relational databases (May 2025).",

      footerLink: []
    },

    {
      title:
        "Frontend with JavaScript",
      subtitle:
        "Completed certification by TASK focused on frontend development concepts using JavaScript (Feb 2025).",

      footerLink: []
    },

    {
      title:
        "Java Foundations Certificate",
      subtitle:
        "Completed Oracle Academy certification covering Java fundamentals and programming concepts (Sep 2024).",

      footerLink: []
    },

    {
      title:
        "Generative AI",
      subtitle:
        "Completed Google Cloud certification focused on Generative AI concepts and applications (Aug 2024).",

      footerLink: []
    }
  ],

  display: true
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Feel free to connect for internships, collaborations, or opportunities.",
  number: "+91 8106871348",
  email_address: "23211a0586@bvrit.ac.in"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
