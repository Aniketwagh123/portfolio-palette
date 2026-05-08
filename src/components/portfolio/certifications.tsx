import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import certs from "@/data/certifications.json";
import { Section } from "./section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="05 — Credentials" title="Certifications">
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl bg-background border border-hairline transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            {/* Image Container */}
            <div className="relative h-40 overflow-hidden bg-muted">
              {c.image ? (
                <motion.img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Award className="h-12 w-12 text-muted-foreground/30" />
                </div>
              )}
            </div>

            {/* Content Container */}
            <div className="p-6">
              <Award className="h-5 w-5 text-primary mb-3" />
              <p className="font-serif text-lg tracking-tight mb-1 line-clamp-2">
                {c.name}
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                {c.issuer}
              </p>
              
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-hairline">
                <span className="text-xs text-muted-foreground tabular-nums font-medium">
                  {c.date}
                </span>
                <div className="flex items-center gap-2">
                  {c.score && (
                    <span className="text-xs text-primary font-medium">
                      {c.score}
                    </span>
                  )}
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="Verify"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
