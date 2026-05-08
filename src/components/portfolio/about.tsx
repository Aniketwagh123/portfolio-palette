import about from "@/data/about.json";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="What I do">
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-foreground/85">
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <ul className="md:col-span-2 space-y-3 text-sm">
          {about.doing.map((d, i) => (
            <li key={i} className="flex gap-3 border-b border-hairline pb-3">
              <span className="text-primary tabular-nums">0{i + 1}</span>
              <span className="text-foreground/80">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
