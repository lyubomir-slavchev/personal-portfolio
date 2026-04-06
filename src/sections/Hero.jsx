import { Button } from "@/components/Button.jsx";
import { ArrowRight, Download, UserRoundPlus, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton.jsx";

const skills = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "CSS",
  "Vite",
  "Strapi",
  "REST APIs",
  "SEO Optimization",
  "Google Analytics",
  "Meta Pixel",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animete-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Developer
              </span>
            </div>

            {/* Headline */}
            <div className=" space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 ">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I specialize in building responsive, user-friendly websites that
                bring your vision to life. Let's create something amazing
                together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-400">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="/public/Lyubomir-Slavchev-resume.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
              <span>Follow me on GitHub:</span>
              {[
                {
                  icon: UserRoundPlus,
                  href: "https://github.com/lyubomir-slavchev",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animate-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I Work With
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee ">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground-50 hover:text-muted-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
