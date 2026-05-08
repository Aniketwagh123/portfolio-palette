import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import posts from "@/data/posts.json";
import { Section } from "./section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function parseIframe(html: string): { src: string; height: number } | null {
  const srcMatch = html.match(/src="([^"]+)"/);
  const heightMatch = html.match(/height="(\d+)"/);
  if (!srcMatch) return null;
  // only allow LinkedIn embed origin
  const src = srcMatch[1];
  if (!/^https:\/\/www\.linkedin\.com\/embed\//.test(src)) return null;
  return { src, height: heightMatch ? parseInt(heightMatch[1], 10) : 540 };
}

export function Posts() {
  const items = (posts as string[]).map(parseIframe).filter(Boolean) as { src: string; height: number }[];

  return (
    <Section id="posts" eyebrow="07 — Writing" title="From LinkedIn" className="[2rem]">
      {items.length === 0 ? (
        <p className="text-muted-foreground">Add LinkedIn embed iframes to <code className="text-foreground">src/data/posts.json</code> to display posts here.</p>
      ) : (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items.map((p, i) => (
              <CarouselItem key={i} className="pl-4 basis-auto max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-lg overflow-hidden bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-[550px] flex flex-col"
                >
                  {/* Dark overlay wrapper for iframe */}
                  <div className="relative overflow-hidden rounded-lg bg-background flex items-center justify-center flex-1">
                    <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none rounded-lg" />
                    <iframe
                      src={p.src}
                      height={500}
                      width={350}
                      frameBorder={0}
                      allowFullScreen
                      title={`LinkedIn post ${i + 1}`}
                      className="block brightness-75 contrast-125 dark:brightness-90 dark:contrast-110 h-full"
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </Section>
  );
}
