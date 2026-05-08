import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import projects from "@/data/projects.json";
import { Section } from "./section";

type Project = (typeof projects)[number];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects" eyebrow="03 — Selected Work" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative text-left overflow-hidden rounded-2xl bg-background border border-hairline transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            {/* Image Container */}
            <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
              {p.image ? (
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <ArrowUpRight className="h-12 w-12 text-muted-foreground/30" />
                </div>
              )}
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-7 flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                  {p.type}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              
              <h3 className="font-serif text-lg md:text-xl tracking-tight mb-2 line-clamp-2">
                {p.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-grow">
                {p.summary}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {p.tech.slice(0, 3).map(t => (
                  <span
                    key={t}
                    className="text-xs text-muted-foreground border border-hairline rounded-full px-2 py-0.5 bg-background/50"
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 3 && (
                  <span className="text-xs text-muted-foreground border border-hairline rounded-full px-2 py-0.5">
                    +{p.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={o => !o && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {active && (
            <>
              {/* Modal Image */}
              {active.image && (
                <div className="relative w-full h-64 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <DialogHeader>
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2 font-medium">
                  {active.type}
                </p>
                <DialogTitle className="font-serif text-3xl tracking-tight">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-base text-foreground/80 leading-relaxed pt-3">
                  {active.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-medium">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground border border-hairline rounded-full px-3 py-1.5 bg-background/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {(active.links?.live || active.links?.repo) && (
                  <div className="flex gap-3 pt-2">
                    {active.links?.live && (
                      <a
                        href={active.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> View Live
                      </a>
                    )}
                    {active.links?.repo && (
                      <a
                        href={active.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="h-4 w-4" /> Repository
                      </a>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
