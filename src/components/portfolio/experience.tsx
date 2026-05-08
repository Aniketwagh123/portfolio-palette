import experience from "@/data/experience.json";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've been">
      <ol className="space-y-12">
        {experience.map((e, i) => (
          <li key={i} className="grid md:grid-cols-5 gap-6 md:gap-12">
            <div className="md:col-span-1 text-sm text-muted-foreground tabular-nums">
              {e.start} — {e.end}
            </div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-2xl tracking-tight">
                {e.role} <span className="text-muted-foreground">· {e.company}</span>
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{e.location}</p>
              <ul className="mt-4 space-y-2 text-foreground/80 text-[15px] leading-relaxed">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2 h-px w-4 bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
