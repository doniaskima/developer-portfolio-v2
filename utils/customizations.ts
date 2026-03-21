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
  image?: string;
  de?: {
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
    slug: "intelligente-farblogik-belegzeilen",
    title: "Intelligente Farblogik für Belegzeilen",
    subtitle: "Intelligent Color Logic for Document Lines",
    icon: "palette",
    categories: ["Article Management", "Logistics", "Sale"],
    shortDescription:
      "Maximum overview in document processing: automatic status coloring transforms complex tables into intuitive dashboards. Instantly identify supply bottlenecks and inventory visually — for error-free disposition and faster processes.",
    price: "From €99 net per month",
    priceNote: "plus setup fee",
    setupFee: "One-time setup fee of €499 net.",
    highlights: [
      "Visual real-time control: Status traffic light directly in position lines without manual inspection",
      "Optimized workflow: Drastic time savings by focusing on critical deviations",
      "Proactive action: Identify bottlenecks before they become a problem in the delivery process",
      "Excellent customer service: Immediate, reliable delivery dates already during entry",
      "Error minimization: Visual guidance systems support your purchasing, warehouse, and sales sustainably",
    ],
    details:
      "Take your document processing to the next level. Your intelligent color logic acts as a visual guidance system in your daily work. Instead of checking each position individually for availability or delivery status, the system provides an intuitive traffic light logic.",
    detailSections: [
      {
        heading: "Purchasing & Orders",
        body: "Keep full overview of your suppliers. Green signals completion, while Yellow and Red immediately show where delivery dates are shaky or follow-up actions are needed on your end.",
      },
      {
        heading: "Sales & Order Management",
        body: "Already when entering quotes or orders, the system checks your warehouse stock in the background. Green means immediately deliverable — an important promise to your customers. With Yellow or Red you can react immediately, offer alternatives or trigger procurement processes without losing time.",
      },
    ],
    example:
      "Imagine opening a large collective order. Instead of tediously comparing delivery documents, you see immediately: two positions are green (completed), one yellow (partial quantities), and one red. Your eye goes straight to the problem — you save valuable minutes per document.",
    standardFeatures: [
      {
        title: "Sales Order (SO301000)",
        features: [
          { field: "In Stock", description: "Physical stock at warehouse location" },
          { field: "Total Sales Qty", description: "Sum of all open orders" },
          { field: "Available Stock", description: "Calculated: Stock minus open orders" },
          { field: "Order Qty", description: "Expected inflow from open purchase orders" },
          { function: "Footer Bar", description: "Extension of inventory check for open order and sales data" },
          { function: "Info-Text Availability", description: "Formats stock data as readable text in the Availability field" },
          { function: "Traffic Light Coloring", description: "Status indication of positions" },
          { status: "Red", description: "Not available (Available Stock <= 0)" },
          { status: "Yellow", description: "Partially available (Available Stock > 0 but < Order Qty)" },
          { status: "Green", description: "Fully available (Available Stock >= Order Qty)" },
        ],
      },
      {
        title: "Quote (CR304500)",
        features: [
          { field: "In Stock", description: "Physical stock at warehouse location" },
          { field: "Total Sales Qty", description: "Sum of all open orders" },
          { field: "Available Stock", description: "Calculated: Stock minus open orders" },
          { field: "Order Qty", description: "Expected inflow from open purchase orders" },
          { function: "Footer Bar", description: "Extension of inventory check for open order and sales data" },
          { function: "Info-Text Availability", description: "Formats stock data as readable text in the Availability field" },
          { function: "Traffic Light Coloring", description: "Status indication of positions" },
          { status: "Red", description: "Not available (Available Stock <= 0)" },
          { status: "Yellow", description: "Partially available (Available Stock > 0 but < Order Qty)" },
          { status: "Green", description: "Fully available (Available Stock >= Order Qty)" },
        ],
      },
      {
        title: "Purchase Order (PO301000)",
        features: [
          { field: "Order Qty", description: "Ordered quantity per position" },
          { field: "Received Qty", description: "Already received quantity" },
          { function: "Traffic Light Coloring", description: "Status indication of positions" },
          { status: "Red", description: "No goods received (Qty = 0)" },
          { status: "Yellow", description: "Partially delivered (Qty > 0 but < Ordered)" },
          { status: "Green", description: "Fully delivered (Qty >= Ordered)" },
        ],
      },
    ],
    note: "The scope of services at the stated base price is conclusively defined in the standard service description. Customizations beyond the standard are possible at any time after prior coordination. These lead to an adjustment of the monthly fee and require a joint written agreement between the customer and us.",
    accent: "#FEA55F",
    accentSoft: "rgba(254, 165, 95, 0.15)",
    badge: "Logistics",
    de: {
      shortDescription:
        "Maximale Übersicht in der Belegverarbeitung: automatische Statusfärbung verwandelt komplexe Tabellen in intuitive Dashboards. Engpässe und Bestände sofort visuell erkennen – für fehlerfreie Disposition und schnellere Prozesse.",
      price: "Ab €99 netto pro Monat",
      priceNote: "zzgl. Einrichtungsgebühr",
      setupFee: "Einmalige Einrichtungsgebühr von €499 netto.",
      highlights: [
        "Visuelle Echtzeitkontrolle: Status-Ampel direkt in Positionszeilen ohne manuelle Prüfung",
        "Optimierter Workflow: Drastische Zeitersparnis durch Fokus auf kritische Abweichungen",
        "Proaktives Handeln: Engpässe erkennen, bevor sie im Lieferprozess zum Problem werden",
        "Exzellenter Kundenservice: Sofortige, verlässliche Liefertermine bereits bei der Erfassung",
        "Fehlerminimierung: Visuelle Leitsysteme unterstützen Einkauf, Lager und Vertrieb nachhaltig",
      ],
      details:
        "Heben Sie Ihre Belegverarbeitung auf das nächste Level. Ihre intelligente Farblogik fungiert als visuelles Leitsystem im täglichen Arbeiten. Statt jede Position einzeln auf Verfügbarkeit oder Lieferstatus zu prüfen, liefert das System eine intuitive Ampellogik.",
      detailSections: [
        {
          heading: "Einkauf & Bestellungen",
          body: "Behalten Sie die volle Übersicht über Ihre Lieferanten. Grün signalisiert Vollständigkeit, während Gelb und Rot sofort zeigen, wo Liefertermine wackeln oder Nachfassaktionen nötig sind.",
        },
        {
          heading: "Vertrieb & Auftragsmanagement",
          body: "Bereits bei der Erfassung von Angeboten oder Aufträgen prüft das System im Hintergrund Ihren Lagerbestand. Grün bedeutet sofort lieferbar – ein wichtiges Versprechen an Ihre Kunden. Bei Gelb oder Rot können Sie sofort reagieren, Alternativen anbieten oder Beschaffungsprozesse auslösen.",
        },
      ],
      example:
        "Stellen Sie sich vor, Sie öffnen einen großen Sammelauftrag. Statt mühsam Lieferbelege zu vergleichen, sehen Sie sofort: zwei Positionen sind grün (abgeschlossen), eine gelb (Teilmengen) und eine rot. Ihr Blick geht direkt zum Problem – Sie sparen wertvolle Minuten pro Beleg.",
      note: "Der Leistungsumfang zum genannten Basispreis ist in der Standard-Leistungsbeschreibung abschließend definiert. Anpassungen über den Standard hinaus sind jederzeit nach vorheriger Abstimmung möglich. Diese führen zu einer Anpassung der monatlichen Gebühr und bedürfen einer gemeinsamen schriftlichen Vereinbarung.",
    },
  }
];

function localizeCustomization(c: Customization, locale: string): Customization {
  if (locale !== 'de' || !c.de) return c;
  return {
    ...c,
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
