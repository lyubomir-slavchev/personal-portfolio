const experiences = [
  {
    period: "2026",
    role: "Frontend Developer",
    company: "Contractor for 'For the People Creative' ",
    description:
      "Built and deployed a complete e-commerce platform for a custom furniture brand as a solo developer. Developed a high-performance React (Vite) frontend and implemented a headless Strapi CMS for dynamic product and content management. Created custom Strapi plugins to import and transform product data from CSV files, automating catalog management. Integrated the Econt delivery API for shipping workflows, implemented Google Analytics and Meta Pixel for user tracking and marketing insights, and prepared Stripe payment architecture for future activation. Designed the system to be scalable and extensible while leveraging AI tools to accelerate development and debugging.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Strapi",
      "REST APIs",
      "Econt API",
      "Meta Pixel Integration",
      "Google Analytics",
      "Tailwind CSS",
    ],
    current: true,
  },
  {
    period: "2025 - Present",
    role: "Website maintenance and development support across multiple projects",
    company: "Contractor for 'For the People Creative'",
    description:
      "Provided ongoing website maintenance and development support across multiple projects, including bug fixing, SEO optimization, UI improvements, and integration of third-party marketing tools. Responsibilities included fixing frontend and backend bugs to improve site stability and performance, performing SEO optimization through on-page structure, metadata, and performance enhancements to boost search visibility, building and refining UI components and design elements across different websites, and integrating marketing and analytics tools such as Meta Pixel for tracking and campaign optimization.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "Meta Pixel",
      "Google Analytics",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="experience">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that's
            <span className="font-serif italic font-normal text-white">
              {" "}
              just the beginning.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A snapshot of my journey as a junior developer—eager to learn, grow,
            and contribute—building projects, honing my skills, and gaining
            hands-on experience with modern web technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70  via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(1 + index) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium ">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
