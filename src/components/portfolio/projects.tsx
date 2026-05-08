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
      <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative bg-background p-8 md:p-10 text-left transition-colors hover:bg-muted/40"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">
                {p.type}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">{p.summary}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.slice(0, 4).map(t => (
                <span key={t} className="text-xs text-muted-foreground border border-hairline rounded-full px-2.5 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={o => !o && setActive(null)}>
        <DialogContent className="max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{active.type}</p>
                <DialogTitle className="font-serif text-3xl tracking-tight">{active.title}</DialogTitle>
                <DialogDescription className="text-base text-foreground/80 leading-relaxed pt-2">
                  {active.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Tech</p>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map(t => (
                    <span key={t} className="text-xs border border-hairline rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>
              {(active.links?.live || active.links?.repo) && (
                <div className="mt-6 flex gap-3">
                  {active.links?.live && (
                    <a href={active.links.live} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  )}
                  {active.links?.repo && (
                    <a href={active.links.repo} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                      <Github className="h-4 w-4" /> Repo
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
