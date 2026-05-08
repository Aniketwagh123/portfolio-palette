import { ExternalLink } from "lucide-react";
import certs from "@/data/certifications.json";
import { Section } from "./section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="05 — Credentials" title="Certifications">
      <ul className="divide-y divide-hairline border-y border-hairline">
        {certs.map((c, i) => (
          <li key={i} className="flex items-center justify-between py-5 gap-4">
            <div>
              <p className="font-serif text-lg md:text-xl tracking-tight">{c.name}</p>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm text-muted-foreground tabular-nums">{c.date}</span>
              {c.url && (
                <a href={c.url} target="_blank" rel="noreferrer" className="text-primary hover:underline" aria-label="Verify">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
