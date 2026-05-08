import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import achievements from "@/data/achievements.json";
import { Section } from "./section";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="06 — Highlights" title="Achievements">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
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
              {a.image ? (
                <motion.img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Trophy className="h-12 w-12 text-muted-foreground/30" />
                </div>
              )}
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-7">
              <Trophy className="h-5 w-5 text-primary mb-3" />
              <p className="font-serif text-lg md:text-xl tracking-tight mb-2 line-clamp-2">
                {a.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {a.description}
              </p>
              {a.date && (
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {a.date}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
