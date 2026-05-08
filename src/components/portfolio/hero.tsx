import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profile from "@/data/profile.json";

export function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-6xl px-6 pt-12 pb-32 md:pt-36 md:pb-40">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6"
      >
        {profile.location} — Available for work
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
      >
        {profile.name.split(" ").map((w, i) => (
          <span key={i} className={i === 1 ? "italic text-primary" : ""}>
            {w}{i < profile.name.split(" ").length - 1 ? " " : ""}
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 flex items-center gap-4"
      >
        {profile.socials.linkedin && (
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {profile.socials.github && (
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
          </a>
        )}
        <a href={`mailto:${profile.email}`} aria-label="Email"
           className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
          <Mail className="h-4 w-4" />
        </a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
      >
        Scroll <ArrowDown className="h-3 w-3 animate-bounce" />
      </motion.a>
    </section>
  );
}
