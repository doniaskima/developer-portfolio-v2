export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  readingMinutes?: number;
  accent: string;
  accentSoft: string;
  body: string[];
  canonicalUrl?: string;
  de?: {
    title?: string;
    excerpt?: string;
    body?: string[];
  };
};

const posts: BlogPost[] = [
  {
    slug: "shipping-faster-with-small-prs",
    title: "Shipping faster with small PRs",
    excerpt:
      "Why shrinking pull requests improved our review cycle, reduced regressions, and made onboarding easier — without sacrificing velocity.",
    publishedAt: "2026-02-12",
    tags: ["Engineering", "Process"],
    readingMinutes: 6,
    accent: "#43d9ad",
    accentSoft: "rgba(67, 217, 173, 0.15)",
    body: [
      "Large pull requests feel productive: you finish a whole feature in one go. In practice, they stall in review, hide risky changes, and discourage honest feedback.",
      "I now aim for one coherent change per PR: a refactor, a bugfix, or a slice of a feature — never all three. Reviews stay under fifteen minutes, and CI failures point to a narrow diff.",
      "The habit that helped most was writing the PR description before coding: what changes, why now, and how to verify. If that paragraph gets long, the change is probably too big.",
    ],
    de: {
      title: "Schneller liefern mit kleinen PRs",
      excerpt:
        "Warum kleinere Pull Requests unsere Reviews beschleunigten, Regressionen reduzierten und Onboarding erleichterten — ohne Tempo zu verlieren.",
      body: [
        "Große Pull Requests wirken produktiv: ein ganzes Feature auf einmal. In der Praxis bleiben sie in der Review hängen, verbergen riskante Änderungen und bremsen ehrliches Feedback aus.",
        "Ich ziele jetzt auf eine kohärente Änderung pro PR: Refactoring, Bugfix oder ein Teil eines Features — nie alles zusammen. Reviews bleiben unter fünfzehn Minuten, und CI-Fehler zeigen auf einen kleinen Diff.",
        "Am meisten half die Gewohnheit, die PR-Beschreibung vor dem Code zu schreiben: was ändert sich, warum jetzt, wie prüfen. Wird der Absatz lang, ist die Änderung meist zu groß.",
      ],
    },
  },
  {
    slug: "nuxt-portfolio-performance-notes",
    title: "Performance notes from this portfolio",
    excerpt:
      "A short rundown of lazy loading, transitions, and keeping the first paint calm on a Nuxt-powered developer site.",
    publishedAt: "2026-01-08",
    tags: ["Nuxt", "Web"],
    readingMinutes: 5,
    accent: "#FEA55F",
    accentSoft: "rgba(254, 165, 95, 0.15)",
    body: [
      "Static and server-rendered pages win for portfolios: readers get HTML fast, and crawlers see real content. I keep client-only flourishes behind small islands so the shell stays light.",
      "Images deserve explicit dimensions and modern formats where possible. A single hero asset should not block the rest of the layout.",
      "Page transitions are easy to overuse. Short, consistent animations read as polish; long ones feel like waiting. I default to quick fades and reserve motion for meaningful state changes.",
    ],
    de: {
      title: "Performance-Notizen zu diesem Portfolio",
      excerpt:
        "Kurz zu Lazy Loading, Übergängen und ruhigem First Paint auf einer Nuxt-Entwicklerseite.",
      body: [
        "Statische und servergerenderte Seiten sind ideal für Portfolios: HTML kommt schnell, Crawler sehen echten Inhalt. Client-only Effekte halte ich in kleinen Inseln, damit die Hülle leicht bleibt.",
        "Bilder brauchen klare Maße und nach Möglichkeit moderne Formate. Ein Hero-Asset soll den Rest des Layouts nicht blockieren.",
        "Seitenübergänge verführen zum Übertreiben. Kurze, einheitliche Animationen wirken poliert; lange wirken wie Warten. Ich nutze schnelle Fades und Bewegung nur bei sinnvollen Zustandswechseln.",
      ],
    },
  },
  {
    slug: "typescript-at-the-boundary",
    title: "TypeScript at the boundary",
    excerpt:
      "Using strict types where data enters your app — APIs, forms, env — and staying pragmatic everywhere else.",
    publishedAt: "2025-11-20",
    tags: ["TypeScript", "Architecture"],
    readingMinutes: 7,
    accent: "#7c9ef0",
    accentSoft: "rgba(124, 158, 240, 0.15)",
    body: [
      "The highest return on TypeScript investment is at boundaries: parse and validate external data once, then trust narrow types inside your domain.",
      "Zod, Valibot, or hand-written guards — pick one pattern and reuse it. The goal is not perfect coverage on day one; it is to make invalid states unrepresentable after the parser.",
      "Inside the app, inference and generics do most of the work. I avoid `any` at the edges and prefer `unknown` plus narrowing when shape is uncertain.",
    ],
    de: {
      title: "TypeScript an der Grenze",
      excerpt:
        "Strikte Typen dort, wo Daten in die App kommen — APIs, Formulare, Env — und pragmatisch im Rest.",
      body: [
        "Der größte Nutzen von TypeScript liegt an Grenzen: externe Daten einmal parsen und validieren, dann schmale Typen in der Domain vertrauen.",
        "Zod, Valibot oder eigene Guards — ein Muster wählen und wiederverwenden. Ziel ist nicht Tag-eins-Perfektion, sondern ungültige Zustände nach dem Parser unmöglich zu machen.",
        "In der App leisten Inference und Generics die Arbeit. Ich vermeide `any` an den Rändern und nutze `unknown` plus Einengung, wenn die Form unsicher ist.",
      ],
    },
  },
];

function localizePost(p: BlogPost, locale: string): BlogPost {
  if (locale !== "de" || !p.de) return p;
  return {
    ...p,
    title: p.de.title ?? p.title,
    excerpt: p.de.excerpt ?? p.excerpt,
    body: p.de.body ?? p.body,
  };
}

export function getAllPosts(locale: string = "en"): BlogPost[] {
  return posts.map((p) => localizePost(p, locale)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string, locale: string = "en"): BlogPost | undefined {
  const p = posts.find((x) => x.slug === slug);
  return p ? localizePost(p, locale) : undefined;
}

export function getAllBlogTags(): string[] {
  const set = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
