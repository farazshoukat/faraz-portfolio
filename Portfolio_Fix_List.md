# Portfolio Fix List

---

## Critical Fixes (Must Fix Immediately)

- [ ] Fix: Contact form `handleSubmit` in `contact.tsx` is fake — it simulates success with `setTimeout` and never sends data. Integrate a real service (Resend, EmailJS, Formspree, or a `/api/contact` route with Nodemailer).
- [ ] Fix: Every project's "Code" button links to `https://github.com/farazshoukat` (the profile root), not individual repos. Create separate repos for each project and link them, or remove the Code button entirely.
- [ ] Fix: Footer email is `mailto:faraz@example.com` (still a placeholder). Replace with `farazshoukat1@gmail.com`.
- [ ] Fix: Footer LinkedIn URL is `https://linkedin.com/in/farazshoukat` (wrong handle). Replace with `https://www.linkedin.com/in/faraz-shoukat-539161289/`.
- [ ] Fix: "Faraz AI" chatbot is a hardcoded keyword-matching switch statement disguised as AI. A recruiter who inspects it will see through it immediately. Either (a) wire it to the actual Anthropic/Groq API with a system prompt about you, or (b) remove the chatbot section entirely and replace it with a testimonials/recommendations section.
- [ ] Fix: Demo links `https://plant-disease-demo.vercel.app` and `https://flutter-app-demo.web.app` are dead/placeholder URLs. Remove `demo` props until real deployments exist.
- [ ] Fix: `package.json` → `"name": "my-v0-project"`. Rename to `"faraz-portfolio"`. Exposes that site was AI-generated.
- [ ] Fix: `layout.tsx` metadata contains `generator: 'v0.app'`. Remove this line entirely.

---

## High Priority Fixes

- [ ] Fix: Portfolio projects don't match CV projects. The CV lists Job Copilot, Multilingual AI Support Agent, AI Portfolio & CV Generator, and FarmGuardian — none of these appear on the portfolio. Replace generic student projects with actual production work.
- [ ] Fix: Current job (Lean Automation, Nov 2025–Present) is missing from the Experience section on the live site. The section shows an outdated "FYP Lead" role as the top entry instead.
- [ ] Fix: `og:url` in `layout.tsx` metadata is `https://farazshoukat.dev` but the site lives at `portfolio-website-faraz.vercel.app`. Either buy and configure the domain, or fix the og:url to match the actual URL.
- [ ] Fix: No `og:image` defined. Add a 1200×630 OG image (your photo + name + title) to `public/` and reference it in metadata. Without it, LinkedIn/Twitter shares show no preview.
- [ ] Fix: No `robots.txt` or `sitemap.xml` in `public/`. Add both for basic SEO.
- [ ] Fix: No profile photo anywhere on the portfolio. Add a real headshot to the About or Hero section. A portfolio with no face looks abandoned.
- [ ] Fix: `.next/` build folder is included in the ZIP and likely committed to the repo. Add `.next/` to `.gitignore` and purge it from history.
- [ ] Fix: `pnpm-lock.yaml` (92 bytes, essentially empty) and `package-lock.json` both exist. Pick one package manager (npm or pnpm) and delete the other lockfile.

---

## Medium Priority Fixes

- [ ] Fix: `use-toast.ts` is duplicated in both `hooks/use-toast.ts` and `components/ui/use-toast.ts`. Keep one copy in `hooks/` and import from there.
- [ ] Fix: `use-mobile.tsx` duplicated in both `hooks/` and `components/ui/`. Same fix as above.
- [ ] Fix: `components/ui/` contains ~40+ shadcn components, the majority of which are unused (Calendar, Carousel, Chart, ContextMenu, Drawer, InputOTP, Menubar, Resizable, Sidebar, etc.). Delete unused components to reduce bundle surface area and make the codebase readable.
- [ ] Fix: `.vscode/launch.json` is included in the ZIP/repo. Add `.vscode/` to `.gitignore`.
- [ ] Fix: All project data is hardcoded inside `projects.tsx`. Extract to `lib/data/projects.ts` with a typed `Project[]` export so content is separated from rendering.
- [ ] Fix: All skills/percentages data is hardcoded inside `skills.tsx`. Move to `lib/data/skills.ts`.
- [ ] Fix: Skills section uses progress bars with self-rated percentages (e.g., Python 92%, Java 85%). Hiring managers distrust self-rated bars. Replace with a clean tag/badge grid grouped by category, no percentages.
- [ ] Fix: Experience section shows "Peer Mentor & Teaching Assistant" as a real job card. Remove it or move it to the Education section. It dilutes professional experience.
- [ ] Fix: Project images are all generic stock photos unrelated to the actual projects. Replace with real screenshots, demo GIFs, or architecture diagrams of your own work.
- [ ] Fix: "Networks" filter category in Projects showcases Cisco/OSPF/BGP work. You are now a Full Stack AI engineer — this category misleads recruiters about your current focus. Remove or archive it.

---

## Low Priority Improvements

- [ ] Fix: No `error.tsx` or `not-found.tsx` page defined in the `app/` directory. Add at minimum a custom 404 page.
- [ ] Fix: No `loading.tsx` defined. Add a skeleton loader for the root route.
- [ ] Fix: `next.config.mjs` is likely at defaults. Add `images: { remotePatterns: [] }` config and set `output: 'standalone'` for Docker compatibility given your DevOps experience.
- [ ] Fix: Images rendered with plain `<img>` tags in `projects.tsx`. Replace with Next.js `<Image>` component from `next/image` for automatic optimization, lazy loading, and format conversion.
- [ ] Fix: No `aria-label` on icon-only buttons (e.g., the trash icon in the chatbot header, the scroll arrow). Add accessibility labels.
- [ ] Fix: Suggested questions in the chatbot disappear after the first message (`messages.length <= 1`). They should reappear after clearing chat, but the UX is confusing. Show them always in a sidebar or persistent chips area.
- [ ] Fix: GitHub profile location shows "Lahore" but you are in Abbottabad. Fix profile location.
- [ ] Fix: GitHub bio is cut off: "passionate about AI, machine learning," — incomplete sentence. Complete and update it to reflect current role at Lean Automation.

---

## UI/UX Fixes

- [ ] Fix: Hero rotating roles include "N8N Automation" — this is a tool name, not a job title. Replace with "Automation Engineer" or "Backend Engineer".
- [ ] Fix: Hero description says "Machine Learning, Flutter, and modern networking technologies" — Flutter and networking are no longer your primary focus. Update to "Next.js, AI agents, and N8N automation".
- [ ] Fix: Chatbot section appears *after* the Contact section in the page order. Move the chatbot above Contact so it serves as a pre-contact engagement tool.
- [ ] Fix: No testimonials or references section. Add a "What clients/colleagues say" section with 2–3 quotes from LinkedIn recommendations.
- [ ] Fix: Footer says "Built with using Next.js" — missing the ❤️ emoji between "with" and "using". Fix to "Built with ❤️ using Next.js...".
- [ ] Fix: Certification links in Education section all point to `href="#"` (dead links). Link each cert to its Udemy/Coursera certificate URL, or remove the link entirely.
- [ ] Fix: Navigation has no active-section highlight on scroll. Add IntersectionObserver-based active link highlighting.

---

## Code & Architecture Fixes

- [ ] Fix: `chatbot.tsx` `findBestMatch()` is O(n) string scanning with no fuzzy matching, typo tolerance, or LLM fallback. If you keep the chatbot, at minimum add Levenshtein distance matching or integrate a real LLM API call.
- [ ] Fix: `contact.tsx` `handleSubmit` calls `await new Promise(resolve => setTimeout(resolve, 1500))` and then hardcodes `setSubmitStatus("success")`. This is not a working form. Remove the fake delay and implement real form submission.
- [ ] Fix: No environment variable validation (no `env.ts` with zod). If you add a real API key (chatbot, email), protect it with server-side validation.
- [ ] Fix: No ESLint config file visible. Run `npx eslint --init` and add a lint step to CI. Current codebase has no enforced code style.
- [ ] Fix: No `tsconfig` `strict: true`. Enable strict TypeScript mode — you list TypeScript as a core skill.
- [ ] Fix: `layout.tsx` imports `Analytics` from `@vercel/analytics/next` but wraps it *outside* `ThemeProvider`. Move `<Analytics />` inside `<body>` after `{children}` — current placement is functionally fine but architecturally inconsistent.

---

## Performance Fixes

- [ ] Fix: Framer Motion `animate` on background blobs in `hero.tsx` runs on the CPU thread. Add `style={{ willChange: 'transform' }}` and use `useReducedMotion()` hook to disable animations for users with motion sensitivity preferences.
- [ ] Fix: All section images loaded as plain `<img>` tags with no `width`, `height`, or `loading="lazy"`. This causes layout shift (CLS) and blocks render. Switch to `next/image`.
- [ ] Fix: No bundle analysis configured. Run `npx @next/bundle-analyzer` — with framer-motion, recharts, and 40+ radix components installed, the bundle is likely over 500KB. Prune unused dependencies.
- [ ] Fix: `framer-motion` is version `12.26.1` and imported globally. Use dynamic imports with `next/dynamic` for animation-heavy sections to reduce initial JS payload.

---

## Content & Wording Fixes

- [ ] Fix: Rewrite "I build intelligent applications and scalable solutions using Machine Learning, Flutter, and modern networking technologies." → "I build AI-powered web applications and automation pipelines using Next.js, LLMs, and N8N."
- [ ] Fix: Rewrite about section: "My expertise spans across Machine Learning algorithms (NLP, CNN, LLM, clustering, model tuning), mobile development, and RAGS, LLMs." — "RAGS" should be "RAG". Fix capitalization and remove redundancy.
- [ ] Fix: Rewrite "Helping comunnities is my passion." — fix typo: "communities". Also this is a filler sentence; delete it entirely.
- [ ] Fix: Rewrite CV/layout metadata description: "Computer Networks Specialist" — you are not presenting yourself as a networks specialist anywhere else. Remove this or replace with "N8N Automation Engineer".
- [ ] Fix: Rewrite metadata `keywords`: missing "Next.js", "TypeScript", "N8N", "LLM", "RAG" — all of which are your current primary skills and searchable terms.
- [ ] Fix: Rewrite CV title "Full Stack Developer" — the CV metadata title says "AI & ML Engineer" but the CV header says "Full Stack Developer". Pick one primary title and keep it consistent across CV, portfolio, LinkedIn, and GitHub.
- [ ] Fix: Add missing metric to Lean Automation experience entry: the portfolio entry says "N8N Automation Engineer" only — add the "~70% reduction in manual tasks" and "15+ integrations" metrics from the CV bullet points.
- [ ] Fix: Add missing detail: FarmGuardian FYP is described as "Digital Farming Assistant" on portfolio but the CV calls it an "AI-powered digital farming assistant" — the portfolio description is vague. Add that it uses a CNN trained on 87,000+ images with 94% accuracy and offline inference for low-connectivity environments.
- [ ] Fix: Rewrite "3+ years of combined academic and freelance experience" in About — actual paid professional experience is ~6 months (two internships + current job). Change to "2+ years building AI/ML projects with professional experience at Lean Automation and two AI internships."
- [ ] Fix: Add missing section: the portfolio has no dedicated section for the three production projects from the CV (Job Copilot, Multilingual AI Support Agent, AI Portfolio & CV Generator). These are your strongest pieces of work. Add them.

---

## Advanced Improvements (Optional but Valuable)

- [ ] Fix: Add a "Now" section or banner showing current role at Lean Automation with a link to the company website — signals you are actively employed, not just a student.
- [ ] Fix: Replace keyword-matching chatbot with a real Groq API call using a system prompt that describes your background. Total implementation is ~30 lines and costs fractions of a cent per conversation.
- [ ] Fix: Add GitHub contribution graph or pinned repos widget to the portfolio to show real activity — currently GitHub profile has 1 follower, 0 pinned repos showing, and an empty-template README.
- [ ] Fix: Add a blog or "Writing" section with 1–2 technical articles (dev.to or Hashnode). Candidates who write stand out at the junior level.
- [ ] Fix: Set up a custom domain (`farazshoukat.dev` is referenced in og:url but not live). Register it and configure Vercel to serve from it — it's ~$10/year and makes every link professional.
- [ ] Fix: Add `RESUME.pdf` as a tracked file in the repo root and set up a GitHub Action to auto-deploy it on push — currently the download link exists but the file must be manually re-uploaded on every CV change.
