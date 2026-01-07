export type ProjectLink = {
  label: string;
  href: string;
  kind?: "live" | "repo" | "demo" | "contact";
};

export type ProjectTimelineItem = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  headline?: string;
  summary?: string;
  description?: string;
  badge?: string;
  period?: string;
  client?: string;
  role?: string;
  tech: string[];
  url?: string;
  image?: string;
  links?: ProjectLink[];
  highlights?: string[];
  tasks?: string[];
  timeline?: ProjectTimelineItem[];
  problem?: string;
  solution?: string;
  impact?: string;
  accent?: string;
  accentSoft?: string;
  detailImage?: string;
};

const curatedProjects: Project[] = [
  {
    slug: "haufe-x360-erp-customizations",
    title: "Haufe X360 - ERP Customizations",
    headline: "Custom pricing, workflows, and data rails for Haufe X360.",
    image: "/x360/x360.png",
    detailImage: "/x360/x360-2.png",
    summary:
      "Extended Haufe X360 with new DAC fields, pricing logic, workflow automation, and quote-to-order alignment for finance and sales teams.",
    badge: "ERP",
    tech: [
      "C#",
      "ASPX",
      "Acumatica BQL",
      "Haufe X360",
      "REST",
      "OData",
      "Microsoft SQL Server",
    ],
    highlights: [
      "Added DAC fields and attributes across AR/AP/SO/IN with validations.",
      "Built Graph extensions and persistence hooks for automation.",
      "Streamlined UI: selectors, role-based visibility, and grid tweaks.",
      "Implemented pricing and freight logic with mapped tax categories.",
      "Synced parent and child payment methods for virtual and real PMs.",
      "Transferred custom text and fields from CRQuote to SOOrder.",
    ],
    tasks: [
      "Assessed client business processes and identified gaps between out-of-the-box ERP capabilities and operational requirements.",
      "Designed and delivered Haufe X360 customizations to align system behavior with company-specific workflows.",
      "Automated business rules, validations, and data synchronization to reduce manual effort and prevent operational errors.",
      "Extended standard functionality in an upgrade-safe manner, avoiding changes to core ERP code.",
      "Implemented smart UI behavior and safeguards to guide users and ensure consistent, correct data entry.",
      "Built and maintained integrations with external systems using APIs and scheduled/background processes.",
      "Ensured reliability through testing, documentation, and maintainable implementation patterns.",
    ],
    timeline: [
      {
        title: "Data model",
        detail:
          "Introduced DAC fields and validations across finance and sales documents.",
      },
      {
        title: "Automation",
        detail:
          "Extended Graphs and hooks to enforce business rules and reduce manual corrections.",
      },
      {
        title: "Experience",
        detail:
          "Tuned selectors, grids, and role-based visibility so the UI matched workflows.",
      },
      {
        title: "Pricing and sync",
        detail:
          "Handled pricing/freight logic and payment method sync to keep orders trustworthy.",
      },
    ],
    problem:
      "Finance and sales teams needed Haufe X360 tailored to their rules without sacrificing data integrity.",
    solution:
      "Added the right fields, validations, automation, and pricing logic so workflows matched the business instead of the other way around.",
    impact:
      "Reduced manual fixes, kept documents in sync, and let teams trust their ERP data.",
    accent: "#FEA55F",
    accentSoft: "rgba(254, 165, 95, 0.15)",
  },
  {
    slug: "jotform-x360-integration",
    title: "JotForm to Haufe X360 Integration",
    headline: "Webhook intake to ERP with validation and retries.",
    image: "/x360/x360.png",
    detailImage: "/x360/x360-2.png",
    summary:
      "Normalized JotForm payloads, deduped submissions, and upserted leads and contacts into Haufe X360 with monitoring and backoff.",
    badge: "Integration",
    tech: [
      "Node.js",
      "TypeScript",
      "Koa",
      "MongoDB",
      "New Relic",
      "Haufe X360 REST",
      "OData",
      "JotForm Webhooks",
    ],
    highlights: [
      "Webhook intake with schema validation and error handling.",
      "Normalization for phones, postal codes, and attribute mapping.",
      "Duplicate detection with safe upserts into X360 via REST/OData.",
      "Salesperson and contact role validation plus ID reconciliation.",
      "Structured logs and monitoring in New Relic with retries and backoff.",
      "End-to-end mapping for leads, contacts, and business accounts.",
    ],
    tasks: [
      "Webhook intake from JotForm with schema validation and error handling.",
      "Normalization: phone formatting, postal code checks, attribute mapping.",
      "Duplicate detection and safe upsert into X360 via REST/OData.",
      "Salesperson and contact role validation; ID reconciliation.",
      "Structured logs/monitoring (New Relic) with retries/backoff.",
      "End-to-end mapping for leads/contacts/business accounts.",
    ],
    timeline: [
      {
        title: "Ingest safely",
        detail: "Validated and normalized inbound JotForm payloads before touching X360.",
      },
      {
        title: "Protect the CRM",
        detail:
          "Detected duplicates, reconciled IDs, and enforced salesperson and role rules.",
      },
      {
        title: "Upsert with guardrails",
        detail:
          "Pushed data to X360 through REST/OData with retries and structured monitoring.",
      },
      {
        title: "Observe",
        detail:
          "Added New Relic traces and logs so issues surfaced quickly with context.",
      },
    ],
    problem:
      "Inbound form submissions were inconsistent and prone to duplication when syncing to the ERP.",
    solution:
      "Wrapped webhook intake with validation, normalization, deduplication, and observable upserts into Haufe X360.",
    impact:
      "Reduced bad records and made lead ingestion repeatable with traceability for ops.",
    accent: "#4D5BCE",
    accentSoft: "rgba(77, 91, 206, 0.16)",
  },
  {
    slug: "portatour-x360-integration",
    title: "Portatour and Haufe X360 Integration",
    headline: "Two-way scheduling sync for sales routes.",
    image: "/x360/x360.png",
    detailImage: "/x360/x360-2.png",
    summary:
      "Kept customers and visit appointments aligned between Portatour and Haufe X360 with safe import/export pipelines.",
    badge: "Integration",
    tech: [
      "C#",
      "ASPX",
      "Haufe X360",
      "Portatour API",
      "REST",
      "Microsoft SQL Server",
    ],
    highlights: [
      "Exported customers from X360 to Portatour with clean upserts.",
      "Imported visit appointments from Portatour deltas back into X360.",
      "Aligned master data and referential integrity to avoid orphan records.",
    ],
    timeline: [
      {
        title: "Model the sync",
        detail:
          "Mapped master data across Portatour and X360 so records matched on either side.",
      },
      {
        title: "Export and upsert",
        detail: "Shipped customer exports with safe upsert logic into Portatour.",
      },
      {
        title: "Import visits",
        detail:
          "Ingested visit deltas from Portatour and preserved referential integrity in X360.",
      },
    ],
    problem:
      "Scheduling and ERP data drifted between Portatour and Haufe X360, creating integrity issues.",
    solution:
      "Built a bidirectional sync with careful upserts, deltas, and validation around master data.",
    impact: "Kept routes and ERP data aligned so teams could trust scheduling.",
    accent: "#67E8F9",
    accentSoft: "rgba(103, 232, 249, 0.18)",
  },
  {
    slug: "industrial-climbers-platform",
    title: "Industrial Climbers Platform",
    headline: "Reward-driven field ops for crews and subcontractors.",
    image: "/x360/industrial-climber-climbs-down-roof-footage.webp",
    summary:
      "Stabilized and evolved the multi-stack platform with a rewards engine and a NestJS microservice that talks to the legacy Spring Boot + React app.",
    period: "Jan 2024 - Jun 2024",
    badge: "Platform Ops",
    role: "Full-stack and mobile",
    tech: [
      "Spring Boot",
      "React",
      "NestJS",
      "RabbitMQ",
      "Flutter",
      "TypeScript",
      "CSS",
    ],
    highlights: [
      "Fixed critical bugs while shipping features across Spring Boot and React.",
      "Built XP/token rewards with gated capabilities for subcontractors.",
      "Introduced a NestJS microservice wired through RabbitMQ events.",
      "Documented flows and components in Storybook, JSDoc, and Markdown.",
    ],
    tasks: [
      "Fixed bugs and built features across the platform.",
      "Maintained and shipped features on the legacy app (Spring Boot + React).",
      "Built a rewards system for subcontractors (XP/tokens) with gated features.",
      "Implemented a new NestJS microservice; inter-service comms via RabbitMQ.",
      "Wrote docs with Storybook, JSDoc, Markdown, and README files.",
    ],
    timeline: [
      {
        title: "Stabilize and triage",
        detail:
          "Patched blocking bugs and shipped incremental fixes on the Spring Boot + React legacy app.",
      },
      {
        title: "Design rewards",
        detail: "Created XP and token flows with role-based gating for subcontractors.",
      },
      {
        title: "Connect services",
        detail:
          "Built a NestJS microservice and connected it to the platform via RabbitMQ messaging.",
      },
      {
        title: "Document",
        detail:
          "Left Storybook entries and Markdown/JSDoc for the new surface area to keep velocity up.",
      },
    ],
    problem:
      "A split stack needed stability while adding a rewards model that motivated subcontractors without breaking day-to-day operations.",
    solution:
      "Hardened the legacy stack, designed and implemented the rewards engine, spun up a NestJS microservice, and documented the moving parts.",
    impact:
      "Unified operations across teams, improved engagement via gated rewards, and reduced onboarding friction thanks to living docs.",
    accent: "#43D9AD",
    accentSoft: "rgba(67, 217, 173, 0.14)",
  },
  {
    slug: "plot",
    title: "Plot",
    headline: "Social video intelligence UI for creators.",
    summary:
      "Frontend contributions that shipped new features and polish for Plot's creator-facing tools and analytics.",
    badge: "Frontend",
    tech: ["React", "TypeScript"],
    url: "https://www.plot.so/",
    highlights: [
      "Delivered feature work and UI fixes across the creator experience.",
      "Added reusable interface pieces to keep new screens consistent.",
      "Polished interaction details and empty states for analytics views.",
    ],
    timeline: [
      {
        title: "Understand and scope",
        detail:
          "Reviewed existing patterns and designs to keep velocity high without breaking the brand.",
      },
      {
        title: "Ship UI",
        detail:
          "Implemented frontend tasks for creator flows with attention to speed and accessibility.",
      },
      {
        title: "Polish",
        detail:
          "Tightened spacing, states, and performance to make the experience feel premium.",
      },
    ],
    problem: "The social video experience needed consistent, fast UI delivery.",
    solution:
      "Implemented new frontend workstreams with reusable pieces and careful state handling.",
    impact:
      "Helped Plot ship features quickly while keeping the interface cohesive.",
    accent: "#8B5CF6",
    accentSoft: "rgba(139, 92, 246, 0.18)",
  },
  {
    slug: "react-crafitify",
    title: "react-crafitify",
    headline: "Composable component library for fast UI assembly.",
    summary:
      "A React component library focused on customization, letting teams drop in opinionated building blocks.",
    badge: "Design System",
    tech: ["React"],
    url: "https://github.com/doniaskima/react-crafitify",
    highlights: [
      "Built adaptable components with clear props and slots.",
      "Emphasized theming hooks so the library fits multiple products.",
      "Documented patterns to keep consuming teams aligned.",
    ],
    timeline: [
      {
        title: "Design primitives",
        detail:
          "Outlined the base patterns and API shape for reusable components.",
      },
      {
        title: "Build",
        detail:
          "Implemented the library with attention to customization and sensible defaults.",
      },
      {
        title: "Document",
        detail: "Wrote usage guidance so new consumers can adopt it fast.",
      },
    ],
    problem:
      "Projects needed reusable UI pieces instead of rebuilding layouts every time.",
    solution:
      "Packaged a composable React kit with theming hooks and documentation.",
    impact:
      "Faster prototyping and consistent interface patterns across apps.",
    accent: "#22D3EE",
    accentSoft: "rgba(34, 211, 238, 0.2)",
  },
  {
    slug: "cmdbook-cli",
    title: "cmdbook-cli",
    headline: "Command Book for saving and finding the shell commands you care about.",
    summary:
      "CmdBook is a small CLI for storing and retrieving shell commands with tags, descriptions, and fast full-text search.",
    description:
      "CmdBook stores your go-to commands in a local SQLite database with FTS5 so you can search, filter, and recall them quickly.",
    badge: "Fun build",
    role: "Personal",
    tech: ["Node.js", "SQLite", "FTS5", "CLI"],
    url: "https://github.com/doniaskima/cmdbook-cli",
    highlights: [
      "Stores commands with descriptions, tags, shell, and working directory.",
      "FTS5 search across commands + descriptions for fast recall.",
      "Favorites, tag filters, and duplicate detection on add.",
      "Export/import as JSON for backup and migration.",
      "Local-only data in ~/.cmdbook/cmdbook.db.",
    ],
    problem:
      "I kept re-Googling the same shell commands and needed a faster way to recall them.",
    solution:
      "Built a local-first command notebook with tags and instant search via SQLite FTS5.",
    impact:
      "Cuts time spent hunting for commands and keeps my favorite snippets in one place.",
    accent: "#F59E0B",
    accentSoft: "rgba(245, 158, 11, 0.2)",
  },
  {
    slug: "ask-cli",
    title: "ask-cli",
    headline: "Natural-language to shell commands with local context awareness.",
    summary:
      "ask is a small terminal assistant that generates shell commands from plain language using your current environment context.",
    description:
      "ask inspects your OS, shell, cwd, visible files, and git status, then calls an OpenAI-compatible API to return precise commands.",
    badge: "Fun build",
    role: "Personal",
    tech: ["Node.js", "OpenAI API", "CLI", "Chalk"],
    url: "https://github.com/doniaskima/ask-cli",
    highlights: [
      "Generates commands with context (OS, shell, cwd, files, git status).",
      "ask and ask explain modes for command creation or explanations.",
      "History log stored in ~/.ask-cli/history.json.",
      "Clipboard support with optional cmdbook integration via --save.",
      "Supports OPENAI_API_KEY or ASK_CLI_API_KEY.",
    ],
    problem:
      "I wanted a fast way to turn ideas into exact shell commands without losing context.",
    solution:
      "Built a CLI assistant that captures environment context and returns executable commands.",
    impact:
      "Speeds up terminal workflows while keeping command history and shareable snippets.",
    accent: "#38BDF8",
    accentSoft: "rgba(56, 189, 248, 0.2)",
  },
];

function slugify(text?: string) {
  return (
    text
      ?.toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") || ""
  );
}

function mergeProjects(base: Partial<Project> = {}, override: Partial<Project> = {}): Project {
  return {
    ...base,
    ...override,
    tech: override.tech || base.tech || [],
    highlights: override.highlights || base.highlights,
    tasks: override.tasks || base.tasks,
    timeline: override.timeline || base.timeline,
    links: override.links || base.links,
    summary: override.summary || base.summary || base.description,
    description: override.description || base.description,
    headline: override.headline || base.headline,
    image: override.image || base.image,
    detailImage: override.detailImage || base.detailImage,
  } as Project;
}

function finalizeProject(project: Project, config?: any): Project {
  const email = config?.public?.dev?.contacts?.direct?.sources?.email;
  const links: ProjectLink[] = [];

  if (project.links?.length) {
    links.push(...project.links);
  }

  if (project.url && !links.some((l) => l.href === project.url)) {
    links.unshift({ label: "Live", href: project.url, kind: "live" });
  }

  if (email) {
    const href = `mailto:${email}?subject=${encodeURIComponent(project.title)}`;
    if (!links.some((l) => l.href === href)) {
      links.push({ label: "Book a walkthrough", href, kind: "contact" });
    }
  }

  return {
    ...project,
    summary: project.summary || project.description || "",
    headline: project.headline || project.summary || project.description,
    tech: project.tech || [],
    links,
    accent: project.accent || "#5565E8",
    accentSoft: project.accentSoft || "rgba(85, 101, 232, 0.12)",
  };
}

export function buildProjects(config?: any): Project[] {
  const fromConfig: Project[] = Object.values(
    config?.public?.dev?.projects || {}
  )
    .map((p: any) => {
      const image = p.image || p.img;
      const detailImage = p.detailImage || p.detailImg;
      return {
        slug: slugify(p.title),
        title: p.title || "",
        summary: p.description,
        description: p.description,
        url: p.url,
        tech: p.tech || [],
        ...(image ? { image } : {}),
        ...(detailImage ? { detailImage } : {}),
      };
    })
    .filter(
      (p) => p.title && p.slug && p.title !== "Incedo Lead Generator"
    );

  const merged: Project[] = [];

  curatedProjects.forEach((curated) => {
    const match = fromConfig.find((p) => p.slug === curated.slug);
    merged.push(finalizeProject(mergeProjects(match, curated), config));
  });

  fromConfig.forEach((project) => {
    const alreadyIncluded = merged.find((p) => p.slug === project.slug);
    if (!alreadyIncluded) {
      merged.push(finalizeProject(mergeProjects(project), config));
    }
  });

  return merged;
}

export function getProjectBySlug(slug: string, config?: any) {
  return buildProjects(config).find((p) => p.slug === slug);
}
