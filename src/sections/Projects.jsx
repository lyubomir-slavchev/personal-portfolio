import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "BL-mebel",
    description:
      "Built and deployed a complete e-commerce platform for a custom furniture brand as a solo developer. Developed a high-performance React (Vite) frontend and implemented a headless Strapi CMS for dynamic product and content management. Created custom Strapi plugins to import and transform product data from CSV files, automating catalog management. Integrated the Econt delivery API for shipping workflows, implemented Google Analytics and Meta Pixel for user tracking and marketing insights, and prepared Stripe payment architecture for future activation. Designed the system to be scalable and extensible while leveraging AI tools to accelerate development and debugging.",
    image: "./public/blmebel.png",
    tags: [
      "React",
      "JavaScript",
      "Vite",
      "Strapi",
      "REST APIs",
      "Econt API",
      "Meta Pixel Integration",
      "Google Analytics",
    ],
    link: "https://blmebel.com",
    github: "#",
  },
  {
    title: "Movie Library Web App",
    description:
      "Developed a Movie Library web application using React and Vite, consuming a public movie database API to fetch and display dynamic movie data. Built a responsive, component-based interface using Material UI (MUI) for consistent design and improved user experience. Implemented React hooks, state management, API data handling, and dynamic routing to manage movie listings and detailed views. Structured the application for scalability and maintainability while ensuring clean UI and efficient data rendering.",
    image: "/public/movie-library.png",
    tags: ["React", "Vite", "Material UI", "API Integration"],
    link: "https://movie-library-p634.vercel.app/",
    github: "https://github.com/lyubomir-slavchev/Movie-Library",
  },
  {
    title: "E-Commerce React Application",
    description:
      "Developed a single-page e-commerce application using React and Vite. Implemented reusable components, product listings, and shopping cart functionality with global state management using the Context API. Built authentication flows (signup/login) with session persistence using localStorage. Implemented routing with React Router, including dynamic product pages, and created cart features such as quantity updates, item removal, and checkout flow. Applied React hooks, custom hooks, and conditional rendering to manage application state and user interactions.",
    image: "/public/ecommerse-website.png",
    tags: ["React", "Vite", "JavaScript", "React Router"],
    link: "https://ecommerse-website-react-project.vercel.app/",
    github:
      "https://github.com/lyubomir-slavchev/ecommerse-website-react-project",
  },
  {
    title: "Music Player",
    description:
      "Developed a React-based music player that provides seamless audio playback with intuitive controls for play, pause, and track switching. Integrated dynamic state handling to manage the current track, playback status, and progress updates in real time. Designed a clean, component-driven interface to enhance user experience and ensure maintainable code structure. This project demonstrates proficiency in working with browser media APIs, managing complex UI state, and building interactive front-end applications.",
    image: "/public/musicplayer.png",
    tags: ["React", "JavaScript"],
    link: "#",
    github: "https://github.com/lyubomir-slavchev/Music-Player",
  },
  {
    title: "Memory Card Game",
    description:
      "Built a browser-based memory game with React that challenges users to select unique cards without repeating choices. Implemented randomized card rendering, real-time score tracking, and loss/reset conditions to create a smooth gameplay loop. Structured the application using reusable components and managed application state efficiently with React Hooks. This project demonstrates strong understanding of front-end logic, user interaction handling, and creating clean, maintainable UI code.",
    image: "/public/memory-game.png",
    tags: ["React", "JavaScript"],
    link: "#",
    github: "https://github.com/lyubomir-slavchev/React-Memory-Card-Game",
  },
];

export const Projects = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animte-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>{" "}
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, showcasing my skills in frontend
            development and design.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(1 + index) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FolderGit2 className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a href="https://github.com/lyubomir-slavchev">View All Projects</a>
            <ArrowUpRight className="w-4 h-4" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
