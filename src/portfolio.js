/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shivendra's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shivendra Pratap Portfolio",
    type: "website",
    url: "https://myportfolio-lake-pi.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Shivendra Pratap",
  logo_name: "ShivendraPratap",
  nickname: "Shiv",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ZFAPv5P_IOnago_rmhpa1WZ5BjZ7EMBU/view?usp=sharing",
  portfolio_repository: "https://github.com/shivendra911/myportfolio",
  githubProfile: "https://github.com/shivendra911",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shivendra911",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivendra--pratap/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@directpick7088",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:shivendrapratapsp3@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Shivendra_91",
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
      fileName: "BackendImg",
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
      fileName: "CloudSystemsImg",
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
      fileName: "ProgrammingToolsImg",
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
      profileLink: "https://leetcode.com/u/shivendrap09/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/shivendraprata32",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/shivendra_911",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/shivendrapratapsp3",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@shivendrapratapsp3",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/shivendrapratap0911",
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
      title: "Cloud Computing",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1aV2zTF23-dXBuUM78lIZsNAMgvH_JlJ2/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#8C151599",
    },
    {
      title: "Data Analytics with Python",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1gKgKhQB_HnwTwIcgNyBTiVXbFfdkaiJd/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#8C151599",
    },
    {
      title: "Computer Communications Specialization",
      subtitle: "- University of Colorado System (Coursera)",
      logo_path: "cu_logo.png",
      certificate_link:
        "https://coursera.org/share/569f8a8a8daabb365e8e949b0c610206",
      alt_name: "University of Colorado",
      color_code: "#CFB87C",
    },

    {
      title: "Introduction to Hardware and Operating Systems",
      subtitle: "- IBM (Coursera)",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/89b18a3b73f43d18df056bd4ec2f312f",
      alt_name: "IBM",
      color_code: "#9bd0f6ff",
    },
    {
      title: "Packet Switching Networks and Algorithms",
      subtitle: "- University of Colorado System (Coursera)",
      logo_path: "cu_logo.png",
      certificate_link:
        "https://coursera.org/share/ff38bb039fc4cce2a891fc918f2d8bab",
      alt_name: "University of Colorado",
      color_code: "#CFB87C",
    },
    {
      title: "TCP/IP and Advanced Topics",
      subtitle: "- University of Colorado System (Coursera)",
      logo_path: "cu_logo.png",
      certificate_link:
        "https://coursera.org/share/1ab2102eca969e4585e2a273b3603c6f",
      alt_name: "University of Colorado",
      color_code: "#CFB87C",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "- Google (Coursera)",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/9cdd42fae85c13a5c87b94871b4be9cc",
      alt_name: "Google",
      color_code: "#CFB87C",
    },
    {
      title: "Peer-to-Peer Protocols and Local Area Networks",
      subtitle: "- University of Colorado System (Coursera)",
      logo_path: "cu_logo.png",
      certificate_link:
        "https://coursera.org/share/7de4e42b40d381b51bf93f08679124d8",
      alt_name: "University of Colorado",
      color_code: "#CFB87C",
    },
    {
      title: "Fundamentals of Network Communication",
      subtitle: "- University of Colorado System (Coursera)",
      logo_path: "cu_logo.png",
      certificate_link:
        "https://coursera.org/share/5ea59915568e71268d411492e0e4988e",
      alt_name: "University of Colorado",
      color_code: "#CFB87C",
    },
    {
      title: "Computer Architecture",
      subtitle: "- University of Colorado System (Coursera)",
      logo_path: "PU_logo.png",
      certificate_link: "https://www.coursera.org/learn/comparch/home/module/1",
      alt_name: "University of Colorado",
      color_code: "#CFB87C",
    },
    {
      title: "Computational Theory Language Principle & Finite Automata Theory",
      subtitle: "- Infosys Springboard",
      logo_path: "infosys_logo.jpg",
      certificate_image: "Computational.pdf",
      id: "computational-theory",
      alt_name: "Infosys Springboard",
      color_code: "#8abcee99",
    },
    {
      title: "ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM",
      subtitle: "- Infosys Springboard",
      logo_path: "infosys_logo.jpg",
      certificate_image: "ChatGPT.pdf",
      id: "chatgpt",
      alt_name: "Infosys Springboard",
      color_code: "#b8daf899",
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
            "Research work on Language Identification in Low Resource Indian Languages using machine learning and natural language processing techniques. The paper has been accepted for publication.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Major Projects",
      experiences: [
        {
          title: "Automated Road Extraction using Satellite Images",
          company: "Computer Vision Project",
          company_url: "",
          logo_path: "pytorch_logo.png",
          duration: "2025 - Present",
          location: "Academic Project",
          description:
            "Developing a deep learning system using PyTorch to extract road networks from multitemporal satellite imagery using computer vision segmentation techniques.",
          color: "#f39c12",
        },
        {
          title: "AI Powered Guest List Manager",
          company: "AI Application Project",
          company_url: "",
          logo_path: "flask_logo.png",
          duration: "2025",
          location: "Personal Project",
          description:
            "Built an AI powered event management system using Flask backend and NLP techniques to automate guest list handling and interaction.",
          color: "#16a085",
        },
        {
          title: "Parking Occupancy Pattern Analysis",
          company: "Data Science Project",
          company_url: "",
          logo_path: "python_logo.png",
          duration: "2025",
          location: "Academic Project",
          description:
            "Analyzed urban parking occupancy data to identify patterns and support intelligent transportation planning using data science techniques.",
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
      id: "road-extraction",
      name: "Automated Road Extraction Using Multitemporal Satellite Images",
      description:
        "Deep learning project using PyTorch for automated road extraction from multitemporal satellite imagery. The system focuses on computer vision segmentation techniques to detect road networks from remote sensing data.",
      languages: ["Python", "PyTorch", "Computer Vision"],
      image_path: "road-extraction.png",
      githubUrl:
        "https://github.com/shivendra911/Automated-Road-Extraction-Using-Multitemporal-Satellite-Images",
    },
    {
      id: "flask-rag-llm",
      name: "Flask CRUD RAG LLM Application",
      description:
        "Backend application integrating Retrieval-Augmented Generation (RAG) with LLM workflows using Flask. Designed to experiment with AI-driven knowledge retrieval systems.",
      languages: ["Python", "Flask", "LLM", "RAG"],
      image_path: "flask-rag-llm.png",
      githubUrl: "https://github.com/shivendra911/Flask-CRUD-RAG-LLM",
    },
    {
      id: "parking-analysis",
      name: "Parking Occupancy Pattern Analysis for Urban Transport Management",
      description:
        "Data analysis project studying urban parking occupancy patterns to identify trends and optimize transportation planning using data science techniques.",
      languages: ["Python", "Data Analysis", "Machine Learning"],
      image_path: "parking-analysis.png",
      githubUrl:
        "https://github.com/shivendra911/Parking-Occupancy-Pattern-Analysis-for-Urban-Transport-Management",
    },
    {
      id: "language-identification",
      name: "Language Identification in Low Resource Indian Languages",
      description:
        "Machine learning project for identifying Indian languages from low-resource datasets using NLP techniques.",
      languages: ["Python", "NLP", "Machine Learning"],
      image_path: "language-identification.png",
      githubUrl:
        "https://github.com/shivendra911/Language-Identification-in-Low-Resource-Indian-Language",
    },
    {
      id: "guest-list-manager",
      name: "AI Powered Guest List Manager",
      description:
        "AI-powered event management system with chatbot integration built using Flask and NLP techniques to automate guest list organization.",
      languages: ["Python", "Flask", "NLP"],
      image_path: "guest-list-manager.png",
      githubUrl:
        "https://github.com/shivendra911/AI_Powered_guest-list-manager",
    },
    {
      id: "linux-automation",
      name: "Linux System Administration Automation (RHCSA)",
      description:
        "Collection of shell scripts designed for automating Linux administration tasks in Red Hat environments including system monitoring and configuration.",
      languages: ["Bash", "Linux", "RHEL"],
      image_path: "linux-automation.png",
      githubUrl:
        "https://github.com/shivendra911/RHCSA-Linux-System-Administration",
    },
    {
      id: "page-replacement",
      name: "Page Replacement Algorithm Simulator",
      description:
        "Interactive simulator demonstrating operating system page replacement algorithms such as FIFO, LRU and Optimal.",
      languages: ["TypeScript", "Operating Systems"],
      image_path: "page-replacement.png",
      githubUrl:
        "https://github.com/shivendra911/Page-Replacement-Algorithm-Simulator",
    },
    {
      id: "ai-performance-analyzer",
      name: "AI Performance Analyzer",
      description:
        "Tool for evaluating machine learning model performance using metrics such as accuracy, precision, recall and F1-score.",
      languages: ["Python", "Machine Learning"],
      image_path: "ai-performance-analyzer.png",
      githubUrl: "https://github.com/shivendra911/AI-Performance-Analyzer",
    },
    {
      id: "ascii-forge",
      name: "ASCIIFORGE",
      description:
        "Python-based tool that converts images or text into ASCII art representations.",
      languages: ["Python"],
      image_path: "ascii-forge.png",
      githubUrl: "https://github.com/shivendra911/ASCIIFORGE",
    },
    {
      id: "portfolio",
      name: "Personal Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills and technical work.",
      languages: ["React", "Next.js"],
      image_path: "portfolio.png",
      githubUrl: "https://github.com/shivendra911/myportfolio",
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
      name: "Language Identification in Low Resource Indian Languages",
      createdAt: "2026-01-01T00:00:00Z",
      description:
        "Research paper accepted for publication on machine learning approaches for identifying low-resource Indian languages using NLP.",
      url: "#",
      image_path: "publication-architecture.png",
    },
  ],
};

const opensourceContributions = {
  experiences: [
    {
      title: "ASCII Forge",
      company: "PyPI / Open Source",
      company_url: "https://github.com/shivendra911/ASCIIFORGE",
      duration: "2024",
      location: "GitHub",
      description:
        "Professional ASCII Art Generation Toolkit published on PyPI. Converts images to ASCII art and generates animated text art with CLI support and customizable styles.",
      logo_path: "ascii-forge.png",
      color: "#24292e",
    },
    {
      title: "Contextual Audio Editing Package",
      company: "Open Source",
      company_url: "https://github.com/shivendra911",
      duration: "2024",
      location: "GitHub",
      description:
        "Python package that adds contextual audio feedback based on editing content and situational themes to enhance user interaction.",
      logo_path: "python_logo.png",
      color: "#24292e",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shivendra_vector2.png",
    description:
      "I am available on almost every social media platform. You can follow me, I will be happy to interact with you.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@shivendrapratapsp3",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Uttar Pradesh, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/vS6LpU7y2E8xW7E8A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8887602163",
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
