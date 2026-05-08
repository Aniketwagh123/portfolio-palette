import posts from "@/data/posts.json";
import { Section } from "./section";

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
    <Section id="posts" eyebrow="07 — Writing" title="From LinkedIn">
      {items.length === 0 ? (
        <p className="text-muted-foreground">Add LinkedIn embed iframes to <code className="text-foreground">src/data/posts.json</code> to display posts here.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((p, i) => (
            <div key={i} className="border border-hairline rounded-lg overflow-hidden bg-card">
              <iframe
                src={p.src}
                height={p.height}
                width="100%"
                frameBorder={0}
                allowFullScreen
                title={`LinkedIn post ${i + 1}`}
                className="block w-full"
              />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
