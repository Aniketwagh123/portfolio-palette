import skills from "@/data/skills.json";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Toolkit" title="Skills">
      <div className="grid md:grid-cols-2 gap-12">
        {skills.map(g => (
          <div key={g.group}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{g.group}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map(item => (
                <span key={item}
                  className="text-sm border border-hairline rounded-full px-3.5 py-1.5 hover:border-primary hover:text-primary transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
