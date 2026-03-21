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
  de?: {
    title?: string;
    headline?: string;
    summary?: string;
    description?: string;
    highlights?: string[];
    tasks?: string[];
    problem?: string;
    solution?: string;
    impact?: string;
    timeline?: ProjectTimelineItem[];
  };
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
    de: {
      title: "Haufe X360 – ERP-Anpassungen",
      headline:
        "Individuelle Preislogik, Workflows und Datenströme für Haufe X360.",
      summary:
        "Erweiterung von Haufe X360 mit neuen DAC-Feldern, Preislogik, Workflow-Automatisierung und Angebots-/Auftragsabgleich für Finanz- und Vertriebsteams.",
      highlights: [
        "DAC-Felder und Attribute in AR/AP/SO/IN mit Validierungen hinzugefügt.",
        "Graph-Erweiterungen und Persistenz-Hooks für Automatisierung erstellt.",
        "UI optimiert: Selektoren, rollenbasierte Sichtbarkeit und Grid-Anpassungen.",
        "Preis- und Frachtlogik mit zugeordneten Steuerkategorien implementiert.",
        "Zahlungsmethoden für virtuelle und reale ZMs synchronisiert.",
        "Benutzerdefinierte Texte und Felder von CRQuote nach SOOrder übertragen.",
      ],
      tasks: [
        "Geschäftsprozesse analysiert und Lücken zwischen Standard-ERP und Anforderungen identifiziert.",
        "Haufe X360-Anpassungen entworfen und umgesetzt für unternehmensspezifische Workflows.",
        "Geschäftsregeln, Validierungen und Datensynchronisation automatisiert.",
        "Standardfunktionalität upgrade-sicher erweitert ohne Änderungen am ERP-Kern.",
        "Intelligentes UI-Verhalten und Schutzmaßnahmen für korrekte Dateneingabe implementiert.",
        "Integrationen mit externen Systemen über APIs erstellt und gepflegt.",
        "Zuverlässigkeit durch Tests, Dokumentation und wartbare Muster sichergestellt.",
      ],
      timeline: [
        {
          title: "Datenmodell",
          detail:
            "DAC-Felder und Validierungen in Finanz- und Vertriebsdokumenten eingeführt.",
        },
        {
          title: "Automatisierung",
          detail:
            "Graphs und Hooks erweitert, um Geschäftsregeln durchzusetzen und manuelle Korrekturen zu reduzieren.",
        },
        {
          title: "Erfahrung",
          detail:
            "Selektoren, Grids und rollenbasierte Sichtbarkeit angepasst, damit die UI zu Workflows passt.",
        },
        {
          title: "Preis und Sync",
          detail:
            "Preis-/Frachtlogik und Zahlungsmethoden-Sync für vertrauenswürdige Aufträge umgesetzt.",
        },
      ],
      problem:
        "Finanz- und Vertriebsteams benötigten ein auf ihre Regeln zugeschnittenes Haufe X360 ohne Kompromisse bei der Datenintegrität.",
      solution:
        "Die richtigen Felder, Validierungen, Automatisierungen und Preislogik hinzugefügt, damit Workflows zum Geschäft passen.",
      impact:
        "Manuelle Korrekturen reduziert, Dokumente synchron gehalten und Teams vertrauen ihren ERP-Daten.",
    },
    accent: "#FEA55F",
    accentSoft: "rgba(254, 165, 95, 0.15)",
  },
  {
    slug: "jotform-x360-integration",
    title: "JotForm to Haufe X360 Integration (Contributor)",
    headline:
      "Contributor on form-to-ERP automation with validation and retries.",
    image: "/x360/x360.png",
    detailImage: "/x360/x360-2.png",
    summary:
      "Contributed to the delivery of a JotForm to Haufe X360 integration that automated form submissions into X360.",
    badge: "Integration",
    tech: [
      "Node.js",
      "TypeScript",
      "Koa",
      "OpenAPI + Swagger UI",
      "MongoDB",
      "OpenID Connect",
      "Asana API",
      "Haufe X360 REST",
      "OData",
      "JotForm Webhooks",
      "Axios",
      "Handlebars",
      "Multer",
      "Pino (pino-pretty)",
      "UUID",
      "Moment Timezone",
      "Jest (extended/junit)",
      "ESLint + Prettier",
      "JSDoc (better-docs)",
      "Husky + lint-staged",
      "Nodemon",
      "New Relic",
    ],
    links: [{ label: "JotForm", href: "https://www.jotform.com/" }],
    highlights: [
      "Contributed to webhook intake, schema validation, and error handling.",
      "Supported normalization for phones, postal codes, and attribute mapping.",
      "Assisted with duplicate detection and safe upserts via REST/OData.",
      "Helped validate salesperson assignments, roles, and ID reconciliation.",
      "Improved New Relic logging/monitoring with retry and backoff patterns.",
      "Supported lead, contact, and business account mapping.",
    ],
    tasks: [
      "Contributed to pipeline improvements for webhook intake, schema validation, and robust error handling.",
      "Supported data normalization (phone formatting, postal-code checks, attribute mapping) to match X360 rules.",
      "Assisted with duplicate detection and safe upsert flows using X360 REST/OData endpoints.",
      "Implemented parts of the form integration into Haufe X360, supporting validation, normalization, and safe upserts.",
      "Supported end-to-end mapping for leads, contacts, and business accounts.",
    ],
    timeline: [
      {
        title: "Ingest safely",
        detail:
          "Contributed to validation and normalization of inbound JotForm payloads before touching X360.",
      },
      {
        title: "Protect the CRM",
        detail:
          "Helped with duplicate detection, ID reconciliation, and salesperson/role rules.",
      },
      {
        title: "Upsert with guardrails",
        detail:
          "Supported REST/OData upserts with retries and structured monitoring.",
      },
      {
        title: "Observe",
        detail:
          "Improved New Relic traces and logs so issues surfaced quickly with context.",
      },
    ],
    problem:
      "Inbound form submissions were inconsistent and prone to duplication when syncing to the ERP.",
    solution:
      "Contributed to a webhook pipeline with validation, normalization, deduplication, and observable upserts into Haufe X360.",
    impact:
      "Reduced bad records and made lead ingestion repeatable with traceability for ops.",
    de: {
      title: "JotForm zu Haufe X360 Integration (Mitwirkender)",
      headline:
        "Mitwirkung an der Formular-zu-ERP-Automatisierung mit Validierung und Wiederholungsversuchen.",
      summary:
        "Beitrag zur JotForm-zu-Haufe-X360-Integration, die Formulareinreichungen automatisiert in X360 überführt.",
      highlights: [
        "Webhook-Aufnahme, Schema-Validierung und Fehlerbehandlung unterstützt.",
        "Normalisierung für Telefonnummern, Postleitzahlen und Attribut-Mapping.",
        "Duplikaterkennung und sichere Upserts via REST/OData.",
        "Salesperson-Zuweisungen, Rollen und ID-Abgleich validiert.",
        "New Relic Logging/Monitoring mit Retry- und Backoff-Mustern verbessert.",
        "Lead-, Kontakt- und Geschäftskonto-Mapping unterstützt.",
      ],
      tasks: [
        "Pipeline-Verbesserungen für Webhook-Aufnahme und Fehlerbehandlung.",
        "Datennormalisierung (Telefon, PLZ, Attribute) nach X360-Regeln.",
        "Duplikaterkennung und sichere Upsert-Flows über X360 REST/OData.",
        "Teile der Formularintegration in Haufe X360 implementiert.",
        "End-to-End-Mapping für Leads, Kontakte und Geschäftskonten.",
      ],
      timeline: [
        {
          title: "Sicher aufnehmen",
          detail:
            "Beitrag zur Validierung und Normalisierung eingehender JotForm-Daten vor X360-Kontakt.",
        },
        {
          title: "CRM schützen",
          detail:
            "Unterstützung bei Duplikaterkennung, ID-Abgleich und Vertriebsmitarbeiter-/Rollenregeln.",
        },
        {
          title: "Upsert mit Leitplanken",
          detail:
            "Unterstützung von REST/OData-Upserts mit Wiederholungsversuchen und strukturiertem Monitoring.",
        },
        {
          title: "Beobachten",
          detail:
            "New Relic Traces und Logs verbessert, damit Probleme schnell mit Kontext auftauchen.",
        },
      ],
      problem:
        "Eingehende Formulardaten waren inkonsistent und anfällig für Duplikate bei der ERP-Synchronisation.",
      solution:
        "Beitrag zu einer Webhook-Pipeline mit Validierung, Normalisierung, Deduplizierung und beobachtbaren Upserts in Haufe X360.",
      impact:
        "Fehlerhafte Datensätze reduziert und Lead-Erfassung wiederholbar mit Nachverfolgbarkeit gemacht.",
    },
    accent: "#4D5BCE",
    accentSoft: "rgba(77, 91, 206, 0.16)",
  },
  {
    slug: "portatour-x360-integration",
    title: "Portatour and Haufe X360 Integration",
    headline: "Sales route planning sync between Portatour and Haufe X360.",
    image: "/x360/x360.png",
    detailImage: "/x360/x360-2.png",
    summary:
      "Portatour is a sales route planning and field sales optimization tool. Contributed to syncing customers, leads, and revenue data between Portatour and Haufe X360 with safe, validated pipelines.",
    badge: "Integration",
    tech: [
      "C#",
      "ASPX",
      "Node.js",
      "TypeScript",
      "Haufe X360",
      "Portatour API",
      "REST",
      "MongoDB",
      "Microsoft SQL Server",
      "Docker",
    ],
    links: [{ label: "Portatour", href: "https://www.portatour.com/en" }],
    highlights: [
      "Synced customers and leads between Haufe X360 and Portatour.",
      "Contributed to revenue synchronization back into Haufe X360.",
      "Supported validation and mapping to prevent mismatches or duplicates.",
    ],
    tasks: [
      "Worked on synchronizing customers and leads between Haufe X360 and Portatour.",
      "Contributed to revenue synchronization from Portatour back into Haufe X360 (customer revenue endpoints).",
      "Supported data validation and mapping to avoid broken links or mismatches between systems.",
      "Focused on safe sync behavior (no duplicate customers, no inconsistent references).",
      "Operated scheduled/background sync jobs to keep systems aligned.",
      "Used Docker deployments and MongoDB-backed services for integration workflows.",
    ],
    timeline: [
      {
        title: "Align data models",
        detail:
          "Supported mapping and validation so customer and lead records stayed consistent across systems.",
      },
      {
        title: "Sync revenue",
        detail:
          "Contributed to revenue endpoints syncing from Portatour back into Haufe X360.",
      },
      {
        title: "Protect integrity",
        detail:
          "Focused on safe sync behavior to prevent duplicates and broken references.",
      },
    ],
    problem:
      "Scheduling and ERP data drifted between Portatour and Haufe X360, creating integrity issues.",
    solution:
      "Contributed to a bidirectional sync that validated mappings and safely moved customers, leads, and revenue data between Portatour and Haufe X360.",
    impact:
      "Kept route planning and ERP data aligned without duplicates or broken references.",
    de: {
      title: "Portatour und Haufe X360 Integration",
      headline:
        "Vertriebsrouten-Synchronisation zwischen Portatour und Haufe X360.",
      summary:
        "Synchronisation von Kunden, Leads und Umsatzdaten zwischen Portatour und Haufe X360 mit sicheren, validierten Pipelines.",
      highlights: [
        "Kunden und Leads zwischen Haufe X360 und Portatour synchronisiert.",
        "Umsatzsynchronisation zurück in Haufe X360.",
        "Validierung und Mapping zur Vermeidung von Unstimmigkeiten oder Duplikaten.",
      ],
      tasks: [
        "Synchronisation von Kunden und Leads zwischen Haufe X360 und Portatour.",
        "Umsatzsynchronisation von Portatour zurück in Haufe X360.",
        "Datenvalidierung und -mapping zur Vermeidung fehlerhafter Verknüpfungen.",
        "Sichere Synchronisation ohne doppelte Kunden oder inkonsistente Referenzen.",
        "Geplante Hintergrund-Sync-Jobs zum Abgleich der Systeme.",
        "Docker-Deployments und MongoDB-basierte Services für Integrations-Workflows.",
      ],
      timeline: [
        {
          title: "Datenmodelle abgleichen",
          detail:
            "Mapping und Validierung unterstützt, damit Kunden- und Lead-Datensätze systemübergreifend konsistent bleiben.",
        },
        {
          title: "Umsatz synchronisieren",
          detail:
            "Beitrag zu Umsatz-Endpunkten für Sync von Portatour zurück in Haufe X360.",
        },
        {
          title: "Integrität schützen",
          detail:
            "Fokus auf sicheres Sync-Verhalten zur Vermeidung von Duplikaten und fehlerhaften Referenzen.",
        },
      ],
      problem:
        "Planungs- und ERP-Daten drifteten zwischen Portatour und Haufe X360 auseinander.",
      solution:
        "Bidirektionale Synchronisation mit validierten Mappings für Kunden, Leads und Umsatzdaten.",
      impact:
        "Routenplanung und ERP-Daten ohne Duplikate oder fehlerhafte Referenzen abgeglichen.",
    },
    accent: "#67E8F9",
    accentSoft: "rgba(103, 232, 249, 0.18)",
  },
  {
    slug: "x360-asana-everhour-integration",
    title: "Haufe X360, Asana, and Everhour Integration",
    headline: "Syncs projects, tasks, and time across three tools.",
    image: "/x360/x360.png",
    detailImage: "/x360/x360-2.png",
    summary:
      "Connected Haufe X360 projects, Asana task planning, and Everhour time tracking so work and time stayed aligned.",
    badge: "Integration",
    tech: [
      "Bun",
      "Elysia",
      "Swagger/OpenAPI",
      "Bree",
      "MongoDB",
      "Asana API",
      "X360 API",
      "Everhour API",
      "Pino",
      "Docker",
      "Docker Compose",
    ],
    links: [
      { label: "Asana API", href: "https://developers.asana.com/" },
      { label: "Everhour API", href: "https://everhour.docs.apiary.io/" },
    ],
    highlights: [
      "Kept Asana projects and tasks aligned with X360 changes.",
      "Recorded Everhour time entries in X360 as project activity.",
      "Stored cross-links so time mapped to the right project.",
      "API endpoints for sync triggers, health checks, and retries.",
    ],
    tasks: [
      "When a project becomes active in X360, it creates a matching project in Asana.",
      "That Asana project is built from a template, including the right sections and tasks.",
      "It keeps the X360 ↔ Asana project mapping so everything stays linked.",
      "It maps Everhour time entries to the correct X360 project and pushes them into X360.",
      "It has a small API to trigger syncs and retry failed time pushes.",
      "It can run on a schedule to keep everything up to date automatically.",
    ],
    timeline: [
      {
        title: "Connect tools",
        detail:
          "Linked X360 projects to Asana tasks and Everhour time tracking.",
      },
      {
        title: "Sync tasks",
        detail: "Kept Asana projects and tasks updated when X360 changed.",
      },
      {
        title: "Post time",
        detail:
          "Captured Everhour time entries and wrote them back to X360 activity.",
      },
      {
        title: "Operate reliably",
        detail:
          "Added API endpoints and scheduled jobs for health checks and retries.",
      },
    ],
    problem:
      "Project planning and time tracking lived in separate tools, creating drift between work and ERP activity.",
    solution:
      "Built an integration that synced Asana tasks, recorded Everhour time into X360, and provided APIs plus scheduled jobs for reliable sync.",
    impact:
      "Reduced manual updates and kept planning, time, and ERP data aligned.",
    de: {
      title: "Haufe X360, Asana und Everhour Integration",
      headline:
        "Synchronisiert Projekte, Aufgaben und Zeiten über drei Tools.",
      summary:
        "Verbindung von Haufe X360 Projekten, Asana Aufgabenplanung und Everhour Zeiterfassung, damit Arbeit und Zeit abgeglichen bleiben.",
      highlights: [
        "Asana-Projekte und -Aufgaben mit X360-Änderungen abgeglichen.",
        "Everhour-Zeiteinträge als Projektaktivität in X360 erfasst.",
        "Cross-Links gespeichert, damit Zeit dem richtigen Projekt zugeordnet wird.",
        "API-Endpunkte für Sync-Trigger, Health-Checks und Wiederholungsversuche.",
      ],
      tasks: [
        "Aktive X360-Projekte erstellen automatisch ein Asana-Projekt.",
        "Asana-Projekt wird aus Template mit Sektionen und Aufgaben erstellt.",
        "X360 ↔ Asana Projekt-Mapping wird gepflegt.",
        "Everhour-Zeiteinträge werden dem richtigen X360-Projekt zugeordnet.",
        "Kleine API für Sync-Trigger und fehlgeschlagene Zeitbuchungen.",
        "Geplante Ausführung für automatische Aktualisierung.",
      ],
      timeline: [
        {
          title: "Tools verbinden",
          detail:
            "X360-Projekte mit Asana-Aufgaben und Everhour-Zeiterfassung verknüpft.",
        },
        {
          title: "Aufgaben synchronisieren",
          detail:
            "Asana-Projekte und -Aufgaben bei X360-Änderungen aktualisiert.",
        },
        {
          title: "Zeit buchen",
          detail:
            "Everhour-Zeiteinträge erfasst und in X360-Aktivität zurückgeschrieben.",
        },
        {
          title: "Zuverlässig betreiben",
          detail:
            "API-Endpunkte und geplante Jobs für Health-Checks und Wiederholungsversuche hinzugefügt.",
        },
      ],
      problem:
        "Projektplanung und Zeiterfassung in separaten Tools verursachten Drift zwischen Arbeit und ERP.",
      solution:
        "Integration für Asana-Aufgaben-Sync, Everhour-Zeiterfassung in X360 und APIs plus geplante Jobs.",
      impact:
        "Manuelle Updates reduziert und Planung, Zeit und ERP-Daten abgeglichen.",
    },
    accent: "#F97316",
    accentSoft: "rgba(249, 115, 22, 0.18)",
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
        detail:
          "Created XP and token flows with role-based gating for subcontractors.",
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
    de: {
      title: "Industriekletterer-Plattform",
      headline:
        "Belohnungsbasierte Feldoperationen für Teams und Subunternehmer.",
      summary:
        "Stabilisierung und Weiterentwicklung der Multi-Stack-Plattform mit Belohnungssystem und einem NestJS-Microservice.",
      highlights: [
        "Kritische Bugs behoben und Features über Spring Boot und React ausgeliefert.",
        "XP/Token-Belohnungen mit gestuften Fähigkeiten für Subunternehmer entwickelt.",
        "NestJS-Microservice über RabbitMQ-Events eingeführt.",
        "Dokumentation in Storybook, JSDoc und Markdown erstellt.",
      ],
      tasks: [
        "Bugs behoben und Features plattformübergreifend entwickelt.",
        "Legacy-App (Spring Boot + React) gepflegt und Features ausgeliefert.",
        "Belohnungssystem für Subunternehmer (XP/Token) mit gestuften Features entwickelt.",
        "Neuen NestJS-Microservice implementiert; Kommunikation via RabbitMQ.",
        "Dokumentation mit Storybook, JSDoc und Markdown geschrieben.",
      ],
      timeline: [
        {
          title: "Stabilisieren und priorisieren",
          detail:
            "Blockierende Bugs gepatcht und inkrementelle Fixes auf der Spring Boot + React Legacy-App ausgeliefert.",
        },
        {
          title: "Belohnungen entwerfen",
          detail:
            "XP- und Token-Flows mit rollenbasiertem Gating für Subunternehmer erstellt.",
        },
        {
          title: "Services verbinden",
          detail:
            "NestJS-Microservice aufgebaut und über RabbitMQ-Messaging mit der Plattform verbunden.",
        },
        {
          title: "Dokumentieren",
          detail:
            "Storybook-Einträge und Markdown/JSDoc für die neue Oberfläche hinterlassen, um Velocity zu halten.",
        },
      ],
      problem:
        "Ein geteilter Stack brauchte Stabilität bei gleichzeitiger Einführung eines Belohnungsmodells.",
      solution:
        "Legacy-Stack gehärtet, Belohnungssystem entworfen, NestJS-Microservice aufgebaut und dokumentiert.",
      impact:
        "Vereinheitlichte Abläufe, verbesserte Engagement durch Belohnungen und reduzierte Einarbeitungszeit.",
    },
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
    de: {
      title: "Plot",
      headline: "Social-Video-Intelligenz-UI für Creator.",
      summary:
        "Frontend-Beiträge mit neuen Features und Feinschliff für Plots Creator-Tools und Analysen.",
      highlights: [
        "Feature-Arbeit und UI-Fixes über die Creator-Experience hinweg.",
        "Wiederverwendbare Interface-Bausteine für konsistente neue Screens.",
        "Interaktionsdetails und Leerzustände für Analyseansichten poliert.",
      ],
      timeline: [
        {
          title: "Verstehen und scopen",
          detail:
            "Bestehende Patterns und Designs geprüft, um Velocity ohne Markenbruch zu halten.",
        },
        {
          title: "UI ausliefern",
          detail:
            "Frontend-Aufgaben für Creator-Flows mit Fokus auf Geschwindigkeit und Zugänglichkeit umgesetzt.",
        },
        {
          title: "Polieren",
          detail:
            "Abstände, Zustände und Performance verfeinert für ein Premium-Erlebnis.",
        },
      ],
      problem:
        "Die Social-Video-Oberfläche brauchte konsistente, schnelle UI-Lieferung.",
      solution:
        "Neue Frontend-Workstreams mit wiederverwendbaren Bausteinen und sorgfältigem State-Handling.",
      impact:
        "Plot konnte Features schnell liefern und gleichzeitig die Oberfläche kohärent halten.",
    },
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
    impact: "Faster prototyping and consistent interface patterns across apps.",
    de: {
      title: "react-crafitify",
      headline:
        "Komposierbare Komponentenbibliothek für schnelle UI-Erstellung.",
      summary:
        "Eine React-Komponentenbibliothek mit Fokus auf Anpassung, die Teams fertige Bausteine bietet.",
      highlights: [
        "Anpassbare Komponenten mit klaren Props und Slots.",
        "Theming-Hooks für verschiedene Produkte.",
        "Dokumentierte Patterns für konsistente Nutzung.",
      ],
      timeline: [
        {
          title: "Primitives entwerfen",
          detail:
            "Basis-Patterns und API-Form für wiederverwendbare Komponenten skizziert.",
        },
        {
          title: "Bauen",
          detail:
            "Bibliothek mit Fokus auf Anpassung und sinnvolle Standardwerte implementiert.",
        },
        {
          title: "Dokumentieren",
          detail:
            "Nutzungsanleitungen geschrieben, damit neue Nutzer schnell einsteigen können.",
        },
      ],
      problem:
        "Projekte brauchten wiederverwendbare UI-Bausteine statt jedes Mal Layouts neu zu erstellen.",
      solution:
        "Komposierbare React-Bibliothek mit Theming-Hooks und Dokumentation.",
      impact:
        "Schnelleres Prototyping und konsistente Interface-Patterns über Apps hinweg.",
    },
    accent: "#22D3EE",
    accentSoft: "rgba(34, 211, 238, 0.2)",
  },
  {
    slug: "cmdbook-cli",
    title: "cmdbook-cli",
    headline:
      "Command Book for saving and finding the shell commands you care about.",
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
    de: {
      title: "cmdbook-cli",
      headline:
        "Command Book zum Speichern und Finden wichtiger Shell-Befehle.",
      summary:
        "CmdBook ist ein kleines CLI zum Speichern und Abrufen von Shell-Befehlen mit Tags, Beschreibungen und Volltextsuche.",
      highlights: [
        "Befehle mit Beschreibungen, Tags, Shell und Arbeitsverzeichnis speichern.",
        "FTS5-Suche über Befehle und Beschreibungen.",
        "Favoriten, Tag-Filter und Duplikaterkennung.",
        "Export/Import als JSON für Backup und Migration.",
        "Lokale Daten in ~/.cmdbook/cmdbook.db.",
      ],
      problem:
        "Ich habe immer wieder dieselben Shell-Befehle gegoogelt und brauchte einen schnelleren Weg.",
      solution:
        "Ein lokales Befehlsnotizbuch mit Tags und Sofortsuche via SQLite FTS5.",
      impact:
        "Spart Zeit bei der Befehlssuche und hält Lieblings-Snippets an einem Ort.",
    },
    accent: "#F59E0B",
    accentSoft: "rgba(245, 158, 11, 0.2)",
  },
  {
    slug: "ask-cli",
    title: "ask-cli",
    headline:
      "Natural-language to shell commands with local context awareness.",
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
    de: {
      title: "ask-cli",
      headline:
        "Natürliche Sprache zu Shell-Befehlen mit lokalem Kontextbewusstsein.",
      summary:
        "ask ist ein kleiner Terminal-Assistent, der Shell-Befehle aus natürlicher Sprache mit Umgebungskontext generiert.",
      highlights: [
        "Befehle mit Kontext (OS, Shell, cwd, Dateien, Git-Status) generiert.",
        "ask und ask explain Modi für Befehle oder Erklärungen.",
        "Verlaufsprotokoll in ~/.ask-cli/history.json.",
        "Zwischenablage-Support mit optionaler cmdbook-Integration via --save.",
        "Unterstützt OPENAI_API_KEY oder ASK_CLI_API_KEY.",
      ],
      problem:
        "Ich wollte Ideen schnell in exakte Shell-Befehle umwandeln, ohne den Kontext zu verlieren.",
      solution:
        "CLI-Assistent, der Umgebungskontext erfasst und ausführbare Befehle zurückgibt.",
      impact:
        "Beschleunigt Terminal-Workflows mit Befehlshistorie und teilbaren Snippets.",
    },
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

function mergeProjects(
  base: Partial<Project> = {},
  override: Partial<Project> = {}
): Project {
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

function finalizeProject(
  project: Project,
  config?: any,
  locale: string = "en"
): Project {
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
      const label =
        locale === "de" ? "Vorstellung buchen" : "Book a walkthrough";
      links.push({ label, href, kind: "contact" });
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

export function getLocalizedProject(
  project: Project,
  locale: string = "en"
): Project {
  if (locale === "de" && project.de) {
    const { de, ...rest } = project;
    return {
      ...rest,
      ...(de.title !== undefined && { title: de.title }),
      ...(de.headline !== undefined && { headline: de.headline }),
      ...(de.summary !== undefined && { summary: de.summary }),
      ...(de.description !== undefined && { description: de.description }),
      ...(de.highlights !== undefined && { highlights: de.highlights }),
      ...(de.tasks !== undefined && { tasks: de.tasks }),
      ...(de.problem !== undefined && { problem: de.problem }),
      ...(de.solution !== undefined && { solution: de.solution }),
      ...(de.impact !== undefined && { impact: de.impact }),
      ...(de.timeline !== undefined && { timeline: de.timeline }),
    };
  }
  return project;
}

export function buildProjects(config?: any, locale: string = "en"): Project[] {
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
    .filter((p) => p.title && p.slug && p.title !== "Incedo Lead Generator");

  const merged: Project[] = [];

  curatedProjects.forEach((curated) => {
    const match = fromConfig.find((p) => p.slug === curated.slug);
    let project = finalizeProject(mergeProjects(match, curated), config, locale);
    if (locale === "de" && project.de) {
      project = getLocalizedProject(project, locale);
    }
    merged.push(project);
  });

  fromConfig.forEach((project) => {
    const alreadyIncluded = merged.find((p) => p.slug === project.slug);
    if (!alreadyIncluded) {
      merged.push(finalizeProject(mergeProjects(project), config, locale));
    }
  });

  return merged;
}

export function getProjectBySlug(
  slug: string,
  config?: any,
  locale: string = "en"
) {
  return buildProjects(config, locale).find((p) => p.slug === slug);
}
