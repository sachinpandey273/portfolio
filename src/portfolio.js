/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sachin Pandey's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sachin Pandey Portfolio",
    type: "website",
    url: "https://portfolio-09-beta.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Sachin Pandey",
  logo_name: "SachinPandey",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1T4pIf_mlJ1JJgrub3YHdOXqSoXTPi4s0/view?usp=drive_link",
  portfolio_repository: "https://github.com/sachinpandey273/portfolio-09",
  githubProfile: "https://github.com/sachinpandey273",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sachinpandey273",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sachinpandey01/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@lpu.shortout",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:pthesachin@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/pthesachin",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Studied Supervised and Unsupervised Learning algorithms",
        "⚡ Experience with Natural Language Processing (NLP) and Computer Vision",
        "⚡ Building ML models using Python, Scikit-Learn, and PyTorch",
        "⚡ Applying machine learning to real-world datasets and research problems",
      ],
      softwareSkills: [
        {
          skillName: "NLP",
          fontAwesomeClassname: "mdi:brain",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Computer Vision",
          fontAwesomeClassname: "mdi:eye",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Backend & Application Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing backend applications using Python",
        "⚡ Building APIs and integrating machine learning models into applications",
        "⚡ Working with PostgreSQL databases for data storage and management",
      ],
      softwareSkills: [
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "FastAPI ",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "SQLAlchemy",
          fontAwesomeClassname: "simple-icons:sqlalchemy",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
      ],
    },
    {
      title: "Cloud & Systems",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Studying Cloud Computing and distributed systems",
        "⚡ Experience working in Linux environments (Red Hat / RHEL)",
        "⚡ Managing servers, packages, and development environments in Linux",
        "⚡ Learning deployment of ML systems on cloud infrastructure",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Programming & Tools",
      fileName: "DesignImg",
      skills: [
        "⚡ Languages: Python, C++, Java",
        "⚡ ML Libraries: NumPy, Pandas, Scikit-Learn, PyTorch",
        "⚡ Tools: Git, Linux, Jupyter Notebook, VS Code",
        "⚡ NLP Libraries: NLTK, spaCy, Transformers",
        "⚡ Computer Vision Libraries: OpenCV, Pillow",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "spaCy",
          fontAwesomeClassname: "simple-icons:spacy",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Pillow",
          fontAwesomeClassname: "simple-icons:pillow",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/sachinpandey273/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/pthesachin",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/sachinpandey27",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/sachinpandey273",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@sachinpandey01/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/volupan",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "lpu_logo.png",
      alt_name: "LPU",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Studying core computer science subjects such as Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡ Focused on Machine Learning, including Supervised Learning, Unsupervised Learning, Natural Language Processing (NLP), and Computer Vision.",
        "⚡ Hands-on experience with Python-based ML development using libraries like NumPy, Pandas, Scikit-Learn, and PyTorch.",
        "⚡ Practical experience working in Linux environments (Red Hat / RHEL) and building applications using Flask and PostgreSQL.",
        "⚡ Currently exploring Cloud Computing and deployment of machine learning systems.",
      ],
      website_link: "https://www.lpu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      subtitle: "- Infosys Springboard",
      logo_path: "infosys_logo.jpg",
      certificate_image: "Computational.pdf",
      id: "computational-theory",
      alt_name: "Infosys Springboard",
      color_code: "#8abcee99",
    },
    {
      title: "Master Generative AI & Generative AI Tools (ChatGPT & more)",
      subtitle: "- Infosys Springboard",
      logo_path: "infosys_logo.jpg",
      certificate_image: "MasterGenAI.pdf",
      id: "master-genai",
      alt_name: "Infosys Springboard",
      color_code: "#a8d8ea99",
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      subtitle: "- Infosys Springboard",
      logo_path: "infosys_logo.jpg",
      certificate_image: "Build.pdf",
      id: "build",
      alt_name: "Infosys Springboard",
      color_code: "#94d0f899",
    },
    {
      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      subtitle: "- Infosys Springboard",
      logo_path: "infosys_logo.jpg",
      certificate_image: "ChatGPT.pdf",
      id: "chatgpt",
      alt_name: "Infosys Springboard",
      color_code: "#b8daf899",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "- Google (Coursera)",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/F393U0UP9P80",
      alt_name: "Google",
      color_code: "#CFB87C",
    },
    {
      title: "Fundamentals of Network Communication",
      subtitle: "- University of Colorado System (Coursera)",
      logo_path: "cu_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/MY3RT34ZEZY7",
      alt_name: "University of Colorado",
      color_code: "#CFB87C",
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      subtitle: "- IBM (Coursera)",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/N4SX8HOX2ZT3",
      alt_name: "IBM",
      color_code: "#9bd0f6ff",
    },
    {
      title: "Peer-to-Peer Protocols and Local Area Networks",
      subtitle: "- University of Colorado System (Coursera)",
      logo_path: "cu_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VQ80602WE653",
      alt_name: "University of Colorado",
      color_code: "#CFB87C",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Research, Projects and Technical Practice",
  description:
    "I am a BTech Computer Science student focused on Machine Learning, NLP, Computer Vision and Linux systems. My work involves building AI projects, experimenting with ML models and developing backend applications using Python and Flask in Linux environments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research",
      work: true,
      experiences: [
        {
          title: "Research Paper Author",
          company: "Academic Research",
          company_url: "",
          logo_path: "research_logo.png",
          duration: "2025 - Present",
          location: "Lovely Professional University",
          description:
            "Research work on Automated E-Gazette Summarization using Machine Learning and Natural Language Processing techniques. The study focuses on extracting and generating concise summaries from government gazette documents to improve information accessibility and readability. The paper has been applied for publication.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Major Projects",
      experiences: [
        {
          title: "Real-Time Heart Rate Estimation using Facial Video",
          company: "deep learning model",
          company_url: "",
          logo_path: "DEEP-EPHYS.png",
          duration: "2025 - Present",
          location: "Academic Project",
          description:
            "A deep-learning–based system for real-time, non-contact heart rate estimation using remote photoplethysmography (rPPG). This project implements the DeepPhys model, leveraging convolutional neural networks to extract subtle color variations from facial video frames and convert them into accurate pulse signals..",
          color: "#f39c12",
        },
        {
          title: "Math Solver AI",
          company: "AI Application Project",
          company_url: "",
          logo_path: "math-solver.png",
          duration: "2025",
          location: "Personal Project",
          description:
            "An interactive web application that leverages the power of Google's Gemini Pro Vision model to solve complex mathematical problems from images. Users can upload an image containing a math problem, and the AI will analyze it to provide a detailed, step-by-step solution.",
          color: "#16a085",
        },
        {
          title: "ParkFlow",
          company: "Smart Parking Reservation System",
          company_url: "",
          logo_path: "parkflow.png",
          duration: "2025",
          location: "Academic Project",
          description:
            "ParkFlow is a comprehensive smart parking reservation system designed to help users easily find and manage available parking spaces. By streamlining the search and booking process, it improves convenience for drivers and reduces the time and emissions wasted circling for a spot.",
          color: "#2980b9",
        },
      ],
    },
    {
      title: "Technical Practice",
      experiences: [
        {
          title: "Linux System Administration Practice",
          company: "Personal Lab",
          company_url: "",
          logo_path: "linux_logo.png",
          duration: "2024 - Present",
          location: "Linux Environment",
          description:
            "Hands-on experience with Linux systems including Red Hat RHEL environments. Practicing shell scripting, system automation and server configuration.",
          color: "#f1c40f",
        },
        {
          title: "Machine Learning Experiments",
          company: "Self Study",
          company_url: "",
          logo_path: "ml_logo.png",
          duration: "2024 - Present",
          location: "Personal Projects",
          description:
            "Studying and implementing supervised learning, unsupervised learning, NLP and computer vision models using Python, Scikit-learn and PyTorch.",
          color: "#8e44ad",
        },
        {
          title: "Backend Development Practice",
          company: "Personal Projects",
          company_url: "",
          logo_path: "flask_logo.png",
          duration: "2024 - Present",
          location: "Development Environment",
          description:
            "Developing backend applications using Python Flask and PostgreSQL, and integrating machine learning models into web applications.",
          color: "#27ae60",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on Machine Learning, AI systems, Linux automation and backend development. I enjoy building intelligent applications using Python and experimenting with deploying them in Linux environments and scalable systems.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "real-time-heart-rate",
      name: "Real-time heart rate estimation using facial video",
      description:
        "A deep-learning–based system for real-time, non-contact heart rate estimation using remote photoplethysmography (rPPG). This project implements the DeepPhys model, leveraging convolutional neural networks to extract subtle color variations from facial video frames and convert them into accurate pulse signals.",
      languages: ["Python", "Deep Learning", "Computer Vision"],
      image_path: "heart-rate.png",
      githubUrl: "https://github.com/sachinpandey273/Real-time-heart-rate-estimation-via-DeepPhys",
    },
    {
      id: "parkflow",
      name: "ParkFlow",
      description:
        "ParkFlow is a comprehensive smart parking reservation system designed to help users easily find and manage available parking spaces. By streamlining the search and booking process, it improves convenience for drivers and reduces the time and emissions wasted circling for a spot.",
      languages: ["Python", "Web Development"],
      image_path: "parkflow.png",
      githubUrl: "https://github.com/sachinpandey273/parkflow",
    },
    {
      id: "math-solver-ai",
      name: "Math Solver AI",
      description:
        "An interactive web application that leverages the power of Google's Gemini Pro Vision model to solve complex mathematical problems from images. Users can upload an image containing a math problem, and the AI will analyze it to provide a detailed, step-by-step solution.",
      languages: ["React", "Gemini AI"],
      image_path: "math-solver.png",
      githubUrl: "https://github.com/sachinpandey273/math-solver-ai",
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Research work related to Machine Learning and Natural Language Processing.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "language-identification-research",
      name: "Gazette Summarization via Multi-Objective Reinforcement Learning",
      createdAt: "2026-01-01T00:00:00Z",
      description:
        "Research paper accepted for publication on machine Research work on Automated E-Gazette Summarization using Machine Learning and Natural Language Processing techniques. The study focuses on extracting and generating concise summaries from government gazette documents to improve information accessibility and readability. The paper has been applied for publication. approaches for identifying low-resource Indian languages using NLP.",
      url: "#",
      image_path: "gazette.png",
    },
  ],
};

const opensourceContributions = {
  experiences: [],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shivendra_vector2.png",
    profile_image_path_dark: "shivendra_vector52.png",
    description:
      "I am available on almost every social media platform. You can follow me, I will be happy to interact with you.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@pthesachin",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bihar, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/vS6LpU7y2E8xW7E8A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8102954150",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  opensourceContributions,
  contactPageData,
};
