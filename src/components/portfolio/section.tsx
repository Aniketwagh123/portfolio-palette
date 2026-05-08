import { type ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  id, eyebrow, title, children, className = "",
}: { id: string; eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 flex items-end justify-between gap-8 border-b border-hairline pb-6"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">{eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">{title}</h2>
        </div>
        <span className="hidden md:block text-xs text-muted-foreground tabular-nums">/{id}</span>
      </motion.div>
      {children}
    </section>
  );
}
