import { motion } from "framer-motion";
import { ExternalLink, Award, Trophy } from "lucide-react";
import certs from "@/data/certifications.json";
import achievements from "@/data/achievements.json";
import { Section } from "./section";

export function Certifications() {
  const combined = [
    ...certs.map((c) => ({ ...c, type: "certification" })),
    ...achievements.map((a) => ({ ...a, type: "achievement" })),
  ];

  return (
    <Section id="certifications" eyebrow="05 — Credentials" title="Certificates & Achievements">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {combined.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl bg-background border border-hairline transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-muted">
              {item.image ? (
                <motion.img
                  src={item.image}
                  alt={item.type === "certification" ? item.name : item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  {item.type === "certification" ? (
                    <Award className="h-12 w-12 text-muted-foreground/30" />
                  ) : (
                    <Trophy className="h-12 w-12 text-muted-foreground/30" />
                  )}
                </div>
              )}
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-7">
              {item.type === "certification" ? (
                <Award className="h-5 w-5 text-primary mb-3" />
              ) : (
                <Trophy className="h-5 w-5 text-primary mb-3" />
              )}
              <p className="font-serif text-lg md:text-xl tracking-tight mb-2 line-clamp-2">
                {item.type === "certification" ? item.name : item.title}
              </p>
              
              {item.type === "certification" ? (
                <>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.issuer}
                  </p>
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-hairline">
                    <span className="text-xs text-muted-foreground tabular-nums font-medium">
                      {item.date}
                    </span>
                    <div className="flex items-center gap-2">
                      {item.score && (
                        <span className="text-xs text-primary font-medium">
                          {item.score}
                        </span>
                      )}
                      {item.url && (
                        <a
                          href={item.url}
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
                </>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  {item.date && (
                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      {item.date}
                    </p>
                  )}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
