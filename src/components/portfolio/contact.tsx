import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import profile from "@/data/profile.json";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32 md:py-40 border-t border-hairline">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">09 — Contact</p>
      <h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-[1]">
        Let's build <span className="italic text-primary">something</span> good.
      </h2>
      <a href={`mailto:${profile.email}`}
         className="group mt-10 inline-flex items-center gap-3 font-serif text-2xl md:text-3xl tracking-tight underline decoration-hairline underline-offset-8 hover:decoration-primary">
        {profile.email}
        <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>
      <div className="mt-12 flex gap-4">
        {profile.socials.linkedin && (
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {profile.socials.github && (
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"
             className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
          </a>
        )}
        <a href={`mailto:${profile.email}`} aria-label="Email"
           className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Crafted with care.</p>
      </div>
    </footer>
  );
}
