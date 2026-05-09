import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./theme-toggle";
import profile from "@/data/profile.json";

export interface NavSection {
  id: string;
  label: string;
}

const sections: NavSection[] = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certificates" },
  { id: "posts", label: "Writing" },
  { id: "recommendations", label: "Recommendations" },
  { id: "contact", label: "Contact" },
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState<Record<string, number>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Top Bar - Logo and Theme Toggle for Mobile */}
      <header className="fixed md:hidden top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 bg-background/80 backdrop-blur-xl border-b border-hairline">
        <a href="#hero" className="font-serif text-lg tracking-tight hover:text-primary transition-colors">
          {profile.name.split(" ")[0]}<span className="text-primary">.</span>
        </a>
        <ThemeToggle />
      </header>

      {/* Sidebar Navigation - Right side, Hidden on Mobile */}
      <aside className="hidden md:fixed md:right-0 md:top-0 md:h-screen md:w-16 md:flex md:flex-col md:items-center md:justify-center md:z-40 md:bg-background/40 md:backdrop-blur-md md:py-12 md:px-4">
        {/* Theme Toggle */}
        <div className="absolute top-6 right-4 hidden">
          <ThemeToggle />
        </div>

        {/* Timeline - Vertical on Right */}
        <nav className="flex flex-col gap-8 relative h-full justify-center items-center">
        {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`relative flex items-center justify-center group cursor-pointer transition-all duration-300 ${
                activeSection === section.id ? "-translate-y-2 -skew-x-6" : ""
              }`}
              title={section.label}
              onClick={() => handleClick(section.id)}
            >
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-primary scale-150 shadow-lg shadow-primary/50"
                      : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                  }`}
                />
              </div>

              {/* Label - Always Visible */}
              <div
                className={`absolute right-full mr-3 px-3 py-1 rounded text-xs font-medium whitespace-nowrap transition-all duration-300 pointer-events-none ${
                  activeSection === section.id
                    ? "text-foreground opacity-100"
                    : "text-muted-foreground/70 opacity-70"
                }`}
              >
                {section.label}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom accent */}
        <div className="absolute bottom-6 w-12 h-12 rounded-full bg-primary/5 blur-lg" />
      </aside>

      {/* Main content margin for desktop */}
      <style>{`
        
        /* Mobile: right:  padding for fixed header */
        @media (max-width: 767px) {
          main {
            padding-top: 4rem;
          }
        }
      `}</style>
    </>
  );
}
