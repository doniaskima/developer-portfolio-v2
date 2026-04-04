export type CustomizationCategory =
  | "Article Management"
  | "Shopping"
  | "Financial Accounting"
  | "Interface"
  | "AI"
  | "Customer Management"
  | "Logistics"
  | "Production"
  | "Sale"
  | "Contracts";

export type CustomizationFeature = {
  field?: string;
  function?: string;
  status?: string;
  description: string;
};

export type CustomizationSection = {
  title: string;
  features: CustomizationFeature[];
};

export type Customization = {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  categories: CustomizationCategory[];
  shortDescription: string;
  price?: string;
  priceNote?: string;
  setupFee?: string;
  highlights: string[];
  details: string;
  detailSections?: { heading: string; body: string }[];
  example?: string;
  standardFeatures?: CustomizationSection[];
  note?: string;
  accent: string;
  accentSoft: string;
  badge?: string;
  /** Single preview (e.g. store card); use `images` for detail carousel. */
  image?: string;
  /** Ordered screenshots for store detail carousel; falls back to `image` if omitted. */
  images?: string[];
  de?: {
    title?: string;
    subtitle?: string;
    shortDescription?: string;
    highlights?: string[];
    details?: string;
    detailSections?: { heading: string; body: string }[];
    example?: string;
    note?: string;
    price?: string;
    priceNote?: string;
    setupFee?: string;
  };
};

const customizations: Customization[] = [
  {
    slug: "line-level-availability-signals",
    title: "Line-Level Availability & Receipt Signals",
    subtitle: "Acumatica row cues for sales orders and purchase orders",
    icon: "palette",
    categories: ["Article Management", "Logistics", "Sale"],
    shortDescription:
      "Turn dense document grids into scannable views: each line gets a clear color cue for stock coverage or receipt progress, with optional footer metrics and a plain-language availability note—so teams spot exceptions before they become fire drills.",
    highlights: [
      "At-a-glance lines: red and green row styles driven by your rules—no extra clicks per line",
      "Faster triage: buyers and sellers focus on the few rows that actually need attention",
      "Earlier conversations: see shortfall risk while the order is still on screen",
      "Shared context: optional footer fields surface on-hand, demand, available, and related quantities in one place",
      "Readable availability: optional narrative text in the Availability field for quick human scan",
    ],
    details:
      "This package is built around practical signal design—not decorative coloring. On sales orders, the row style reflects how well available quantity covers the quantity on that line. On purchase orders, it reflects receipt progress against what was ordered. The goal is simple: make exceptions obvious, keep copy concise, and stay aligned with how Acumatica already thinks about quantities.",
    detailSections: [
      {
        heading: "Procurement & inbound",
        body: "Receiving teams see which PO lines are still open at a glance. Lines that are fully received read green; anything not yet complete—including partial receipts—stays red until received quantity meets or exceeds what was ordered.",
      },
      {
        heading: "Sales orders",
        body: "While lines are entered, coverage logic compares available quantity to the order quantity on the same line. Green means full coverage (available meets or exceeds the line quantity). Red means a gap—including zero or partial stock—so you can substitute, split, or trigger supply before the customer hears a surprise.",
      },
    ],
    example:
      "Picture a multi-line sales order: two lines glow green and two red. Instead of mentally diffing quantity columns, your eye lands on the reds first—then you use the footer or availability note to explain the story in one sentence to a colleague or customer.",
    standardFeatures: [
      {
        title: "Sales Order (SO301000)",
        features: [
          { field: "In Stock", description: "Physical quantity at the selected warehouse/location" },
          { field: "Total Sales Qty", description: "Aggregated open sales demand used in the calculation context" },
          { field: "Available Stock", description: "Derived available quantity for the item (stock minus relevant reservations/demand)" },
          { field: "Order Qty", description: "Quantity on this document line—the target the traffic-light rule compares against" },
          { function: "Footer bar", description: "Optional strip that rolls up on-hand, demand, available, and related figures for quick context" },
          { function: "Availability narrative", description: "Optional formatted text written into the Availability field for easy reading" },
          { function: "Row status coloring", description: "Applies red or green background styling to detail lines from the rules below" },
          { status: "Red", description: "Short coverage — available quantity is less than the order quantity on the line (includes zero)" },
          { status: "Green", description: "Full coverage — available quantity is greater than or equal to the order quantity on the line" },
        ],
      },
      {
        title: "Purchase Order (PO301000)",
        features: [
          { field: "Ordered Qty", description: "Quantity ordered on the line" },
          { field: "Received Qty", description: "Quantity already received against that line" },
          { function: "Goods receipt check", description: "Live alignment of received quantity against ordered quantity for each line" },
          { function: "Row status coloring", description: "Row-level red or green styling from receipt progress" },
          { status: "Red", description: "Open line — received quantity is less than ordered (includes not yet received and partial receipts)" },
          { status: "Green", description: "Complete — received quantity is greater than or equal to ordered" },
        ],
      },
    ],
    accent: "#FEA55F",
    accentSoft: "rgba(254, 165, 95, 0.15)",
    badge: "Logistics",
    images: [
      "/Customizations/IntelligetColor/intelligentColor.png",
      "/Customizations/IntelligetColor/intelligentColor-1.png",
    ],
    de: {
      title: "Status-Signale auf Belegebene",
      subtitle: "Zeilenweise Hinweise in Acumatica für Verkaufsaufträge und Bestellungen",
      shortDescription:
        "Dichte Positionsraster werden lesbar: Jede Zeile erhält eine klare Farbcodierung für Bestandsdeckung oder Wareneingang—ergänzbar um Fußzeilen-Kennzahlen und einen kurzen Verfügbarkeitstext, damit Ausnahmen früh sichtbar werden.",
      highlights: [
        "Sofort erkennbar: Rot- und Grün-Stile pro Zeile nach festen Regeln—ohne Extra-Klicks",
        "Schnellere Priorisierung: Einkauf und Vertrieb konzentrieren sich auf die wenigen kritischen Zeilen",
        "Frühere Reaktion: Engpassrisiko schon beim Auftrag erkennen",
        "Gemeinsamer Kontext: optionale Fußzeile bündelt Bestand, Bedarf, Verfügbarkeit und Mengen",
        "Lesbare Verfügbarkeit: optional formatierter Text im Verfügbarkeitsfeld",
      ],
      details:
        "Dieses Paket setzt auf klare Signale statt Deko-Färbung. Bei Verkaufsaufträgen spiegelt der Zeilenstil, wie gut die verfügbare Menge zur Positionsmenge passt. Bei Bestellungen spiegelt er den Wareneingang gegen die bestellte Menge. Ziel: Ausnahmen auffallen lassen, Texte kurz halten, Logik an Acumatica-Mengenfelder anbinden.",
      detailSections: [
        {
          heading: "Einkauf & Wareneingang",
          body: "Teams sehen auf einen Blick, welche Bestellzeilen noch offen sind. Vollständig erhaltene Zeilen sind grün; alles Unvollständige—auch Teileingänge—bleibt rot, bis die empfangene Menge die bestellte erreicht oder übersteigt.",
        },
        {
          heading: "Verkaufsaufträge",
          body: "Beim Erfassen vergleicht die Logik verfügbare Menge mit der Positionsmenge. Grün heißt volle Deckung (verfügbar ≥ Positionsmenge). Rot heißt Lücke—auch bei Teilmenge oder Null—damit Alternativen, Teillieferungen oder Beschaffung früh starten können.",
        },
      ],
      example:
        "Ein Auftrag mit vielen Zeilen: zwei grün, zwei rot. Statt Spalten im Kopf zu verrechnen, springt der Blick zuerst auf die roten Zeilen—Fußzeile oder Textfeld liefert in einem Satz die Begründung.",
    },
  }
];

function localizeCustomization(c: Customization, locale: string): Customization {
  if (locale !== 'de' || !c.de) return c;
  return {
    ...c,
    title: c.de.title ?? c.title,
    subtitle: c.de.subtitle ?? c.subtitle,
    shortDescription: c.de.shortDescription || c.shortDescription,
    highlights: c.de.highlights || c.highlights,
    details: c.de.details || c.details,
    detailSections: c.de.detailSections || c.detailSections,
    example: c.de.example || c.example,
    note: c.de.note || c.note,
    price: c.de.price || c.price,
    priceNote: c.de.priceNote || c.priceNote,
    setupFee: c.de.setupFee || c.setupFee,
  };
}

export function getAllCustomizations(locale: string = 'en'): Customization[] {
  return customizations.map((c) => localizeCustomization(c, locale));
}

export function getCustomizationBySlug(slug: string, locale: string = 'en'): Customization | undefined {
  const c = customizations.find((c) => c.slug === slug);
  return c ? localizeCustomization(c, locale) : undefined;
}

export function getAllCategories(): CustomizationCategory[] {
  const cats = new Set<CustomizationCategory>();
  customizations.forEach((c) => c.categories.forEach((cat) => cats.add(cat)));
  return Array.from(cats).sort();
}
