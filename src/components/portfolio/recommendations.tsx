import { Quote } from "lucide-react";
import recs from "@/data/recommendations.json";
import { Section } from "./section";

export function Recommendations() {
  return (
    <Section id="recommendations" eyebrow="08 — Social Proof" title="Kind words">
      <div className="grid md:grid-cols-2 gap-6">
        {recs.map((r, i) => (
          <figure key={i} className="border border-hairline rounded-lg p-8 bg-card/40">
            <Quote className="h-5 w-5 text-primary mb-4" />
            <blockquote className="font-serif text-xl md:text-2xl leading-snug tracking-tight">
              "{r.quote}"
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="text-foreground">{r.author}</span>
              <span className="text-muted-foreground"> — {r.role}, {r.company}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
