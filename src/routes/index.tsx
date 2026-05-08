import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/portfolio/theme-provider";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Certifications } from "@/components/portfolio/certifications";
import { Achievements } from "@/components/portfolio/achievements";
import { Posts } from "@/components/portfolio/posts";
import { Recommendations } from "@/components/portfolio/recommendations";
import { Contact, Footer } from "@/components/portfolio/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aniket S. Wagh — Salesforce Developer & Solutions Engineer" },
      { name: "description", content: "Portfolio of Aniket S. Wagh — Salesforce developer building thoughtful, scalable enterprise solutions." },
      { property: "og:title", content: "Aniket S. Wagh — Portfolio" },
      { property: "og:description", content: "Salesforce developer & solutions engineer. Selected work, writing, and ways to get in touch." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Achievements />
          <Posts />
          <Recommendations />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
