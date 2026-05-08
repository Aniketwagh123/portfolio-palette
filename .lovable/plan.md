
# Aniket S. Wagh — Portfolio Plan

A single-page, JSON-driven portfolio with an editorial-minimal aesthetic. Dark by default with a light-mode toggle. All content lives in JSON files under `src/data/` so you can edit anything without touching components.

## Design direction

- **Aesthetic**: Editorial minimal — generous whitespace, large serif display type for headings (Fraunces), clean sans for body (Inter), thin hairline dividers, asymmetric grids.
- **Palette**:
  - Dark: near-black background `oklch(0.14 0 0)`, warm off-white text, single warm accent (amber/ochre).
  - Light: warm paper background `oklch(0.98 0.01 80)`, deep ink text, same accent.
- **Motion**: Subtle fade/slide on scroll (framer-motion), magnetic hover on project cards, smooth section anchoring.
- **Layout**: Max-width 1200px, sticky minimal top nav with section anchor links + theme toggle, single long page.

## Section order (single page, anchor-scrolling nav)

1. **Hero** — name, role, one-line bio, location, social links, scroll cue.
2. **About** — what I do, longer bio, current focus.
3. **Experience** — vertical timeline (company, role, dates, highlights).
4. **Projects** — animated minimal cards in a grid; each card shows title, type tag (`Personal` or company name like `Apexon`), short blurb. Click → modal with full description, tech stack, images, links.
5. **Skills** — grouped chips (e.g., Languages, Frameworks, Cloud, Tools).
6. **Certifications** — compact list with issuer + date + verify link.
7. **Achievements** — bullet highlights with icons.
8. **Posts** — LinkedIn embed grid; reads an array of iframe embed codes from JSON and renders them safely.
9. **Recommendations** — testimonial cards (quote, author, role, company, optional photo).
10. **Contact** — email, LinkedIn, GitHub, simple call-to-action.

Footer: copyright + built-with note.

## JSON data files (`src/data/`)

- `profile.json` — name, role, tagline, bio, location, email, socials.
- `about.json` — longer about text + "what I do" bullets.
- `experience.json` — array `{ company, role, start, end, location, bullets[] }`.
- `projects.json` — array `{ id, title, type: "Personal" | "Apexon" | …, summary, description, tech[], images[], links{ live?, repo? } }`.
- `skills.json` — array `{ group, items[] }`.
- `certifications.json` — array `{ name, issuer, date, url }`.
- `achievements.json` — array `{ title, description, date? }`.
- `posts.json` — array of LinkedIn iframe embed strings (you paste `<iframe …>` snippets from LinkedIn's "Embed this post").
- `recommendations.json` — array `{ quote, author, role, company, avatar? }`.

All files seeded with realistic placeholder content based on a Salesforce/tech profile so you can edit in place.

## Tech / structure

- React + TanStack Start (existing), Tailwind v4, shadcn/ui, framer-motion, lucide-react.
- Single route `src/routes/index.tsx` composes section components.
- Components in `src/components/portfolio/`: `Nav`, `Hero`, `About`, `Experience`, `Projects` (+ `ProjectCard`, `ProjectModal` using shadcn `Dialog`), `Skills`, `Certifications`, `Achievements`, `Posts` (sanitized iframe renderer), `Recommendations`, `Contact`, `Footer`, `ThemeToggle`.
- Theme: `next-themes`-style toggle via a tiny `ThemeProvider` writing `class="dark"` on `<html>`; persisted in localStorage; defaults to dark.
- Design tokens added to `src/styles.css` (oklch) for both themes; no raw color classes in components.
- SEO: route `head()` with title, description, og tags.
- Accessibility: semantic landmarks, focus-visible rings, prefers-reduced-motion respected.

## Security note for LinkedIn embeds

`posts.json` will accept full `<iframe …></iframe>` strings. The `Posts` component will parse out `src`, `width`, `height` and re-render a clean `<iframe>` (sandboxed `allow="..."`) rather than dangerously injecting raw HTML — keeps it safe and consistent.

## Out of scope (for now)

- No backend / Lovable Cloud — pure static, JSON-driven.
- No contact form submission (just mailto + social links). Easy to add later.
- No CMS — JSON edits only.

After you approve, I'll scaffold all files in one pass.
