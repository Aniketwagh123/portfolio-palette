import { Trophy } from "lucide-react";
import achievements from "@/data/achievements.json";
import { Section } from "./section";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="06 — Highlights" title="Achievements">
      <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
        {achievements.map((a, i) => (
          <div key={i} className="bg-background p-8">
            <Trophy className="h-5 w-5 text-primary mb-4" />
            <p className="font-serif text-xl tracking-tight mb-2">{a.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            {a.date && <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{a.date}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
