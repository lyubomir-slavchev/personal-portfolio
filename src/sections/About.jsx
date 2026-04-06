import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg-cols-2 gap-16 items-center">
          {/*  Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in animate">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the Future,
              <br />
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a junior Frontend Developer with a strong interest in
                building modern, responsive, and user-friendly web applications.
                Currently studying Informatics and Software Science at the
                Technical University of Sofia, I have hands-on experience
                working with React and Vite to create dynamic and interactive
                interfaces.
              </p>
              <p>
                Through personal and university projects, including a full
                e-commerce platform, I have developed a solid foundation in
                component-based architecture, state management, and API
                integration. These experiences have strengthened my
                problem-solving skills and ability to deliver functional,
                scalable applications.
              </p>
              <p>
                I enjoy improving UI/UX, writing clean and maintainable code,
                and continuously learning new technologies. I am eager to grow
                as a developer, contribute to real-world projects, and gain
                experience in a professional development environment.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My mission is to create modern, responsive, and user-friendly
                web applications by leveraging clean, maintainable code and
                innovative UI/UX design, while continuously learning and
                contributing to real-world projects that make a meaningful
                impact.”
              </p>
            </div>
          </div>

          {/*  Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(1 + index) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  {<item.icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
