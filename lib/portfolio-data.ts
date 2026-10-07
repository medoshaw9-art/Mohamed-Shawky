export const SOCIAL = {
  github: "https://github.com/medoshaw9-art",
  linkedin: "https://www.linkedin.com/in/mohamed-shawky-react/",
  email: "mohamed.shawky@example.com",
}

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export const SKILLS = [
  { name: "HTML", description: "Semantic, accessible markup" },
  { name: "CSS", description: "Modern layouts & animations" },
  { name: "JavaScript", description: "ES6+ and the DOM" },
  { name: "React.js", description: "Component-driven UIs" },
  { name: "Responsive Design", description: "Mobile-first workflows" },
  { name: "Git & GitHub", description: "Version control & collaboration" },
]

export type Experience = {
  kind: "Training" | "Project" | "Training / Professional Experience"
  title: string
  role: string
  description: string
  tech?: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    kind: "Training",
    title: "Frontend Web Development Training",
    role: "Frontend Developer Trainee",
    description:
      "Developed responsive web interfaces and practiced building modern web applications using HTML, CSS, JavaScript and React.",
  },
  {
    kind: "Project",
    title: "Educational Platform Project",
    role: "Frontend Developer",
    description:
      "Built a responsive educational platform for students and teachers with courses, lectures, booking and learning features.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    kind: "Project",
    title: "Personal Projects",
    role: "Frontend Developer",
    description:
      "Built multiple web projects to improve frontend development skills and create real-world user interfaces.",
  },
]

export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  features: string[]
  myRole: string
  focus: string
  image: string
  demo?: string
  github?: string
}

export const PROJECTS: Project[] = [
  {
    id: "educenter",
    title: "EduCenter – Educational Platform",
    description:
      "An educational platform that connects students and teachers. Students can browse courses and lectures, book lessons, and track their learning progress.",
    tech: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React Router",
      "LocalStorage",
    ],
    features: [
      "Login and registration",
      "Student and teacher accounts",
      "Create and manage courses",
      "Add and manage lectures",
      "Book lessons",
      "Track learning progress",
      "Responsive design",
    ],
    myRole: "Frontend Developer",
    focus:
      "Building a user-friendly interface, managing application data, and creating smooth navigation between the platform pages.",
    image: "/projects/educational-platform.png",
    demo: "#",
    github: "https://github.com/medoshaw9-art",
  },
  {
    id: "sign-language-translator",
    title: "Sign Language Translator",
    description:
      "A project designed to convert speech into text and then use the text to display the corresponding sign language through an interactive avatar.",
    tech: ["HTML5", "CSS3", "JavaScript", "React.js", "APIs", "AI"],
    features: [
      "Speech-to-text conversion",
      "Text processing",
      "Sign language mapping",
      "Interactive avatar",
      "API integration",
    ],
    myRole: "Frontend Developer",
    focus:
      "Designing the user interface, integrating APIs, and creating an easy-to-use experience.",
    image: "/projects/sign-language-app.png",
    demo: "#",
    github: "https://github.com/medoshaw9-art",
  },
  {
    id: "user-posts-dashboard",
    title: "User & Posts Dashboard",
    description:
      "A dashboard that displays users and their posts using data retrieved dynamically from an external API.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST API"],
    features: [
      "Fetch data from API",
      "Display users",
      "Display user posts",
      "Dynamic cards",
      "Responsive design",
    ],
    myRole: "Frontend Developer",
    focus:
      "Working with REST APIs and displaying dynamic data in an organized and user-friendly interface.",
    image: "/projects/user-posts-dashboard.svg",
    demo: "#",
    github: "https://github.com/medoshaw9-art",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A professional personal portfolio website designed to showcase my skills, projects, and experience.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Hero section",
      "About section",
      "Skills section",
      "Projects section",
      "Contact section",
      "Responsive design",
      "Modern UI",
    ],
    myRole: "Frontend Developer",
    focus:
      "Creating a modern responsive interface and improving the overall user experience.",
    image: "/projects/personal-portfolio.svg",
    demo: "#",
    github: "https://github.com/medoshaw9-art",
  },
  {
    id: "interactive-ball-animation",
    title: "Interactive Ball Animation",
    description:
      "A simple interactive web page featuring an automatically moving ball created using CSS animations.",
    tech: ["HTML5", "CSS3", "CSS Keyframes"],
    features: [
      "Automatic movement",
      "Smooth animation",
      "CSS Keyframes",
      "Responsive design",
      "No JavaScript required for the animation",
    ],
    myRole: "Frontend Developer",
    focus:
      "Using CSS animations and keyframes to create smooth movement and interactive visual effects.",
    image: "/projects/ball-animation.svg",
    demo: "#",
    github: "https://github.com/medoshaw9-art",
  },
]

export const SERVICES = [
  {
    title: "Frontend Web Development",
    description:
      "Building fast, accessible and maintainable interfaces with modern HTML, CSS and JavaScript.",
  },
  {
    title: "Responsive Website Development",
    description:
      "Websites that look and work great on mobile, tablet and desktop with a mobile-first approach.",
  },
  {
    title: "React Web Applications",
    description:
      "Dynamic, component-based applications built with React and modern frontend practices.",
  },
  {
    title: "Landing Page Development",
    description:
      "High-converting, polished landing pages with clean design and smooth interactions.",
  },
]
