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

function slugify(text: string) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

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
  },
  {
    slug: "erweiterte-seitenleisten",
    title: "Erweiterte Seitenleisten",
    subtitle: "Extended Sidebars",
    icon: "sidebar",
    categories: ["Interface", "Customer Management"],
    shortDescription:
      "System-wide overview without switching windows: use context-based sidebars in every screen to instantly view relevant additional information. Keep your focus and access cross-module data at a glance.",
    price: "From €99 net per month",
    priceNote: "plus setup fee",
    setupFee: "One-time setup fee of €499 net.",
    highlights: [
      "Instant context: See related data (open orders, invoices, contacts) without navigating away",
      "Reduced clicks: No more tab-switching to find cross-module information",
      "Role-based panels: Each role sees the sidebar content most relevant to their workflow",
      "Consistent UX: Same sidebar pattern across all major screens",
    ],
    details:
      "Extended Sidebars bring the information you need right where you are. Whether you're on a customer record, a sales order, or an inventory item, the sidebar shows related records, KPIs, and quick actions without leaving your current screen.",
    accent: "#43D9AD",
    accentSoft: "rgba(67, 217, 173, 0.14)",
    badge: "Interface",
    de: {
      shortDescription:
        "Systemweite Übersicht ohne Fensterwechsel: Nutzen Sie kontextbasierte Seitenleisten in jedem Bildschirm, um sofort relevante Zusatzinformationen einzusehen. Behalten Sie den Fokus und greifen Sie modulübergreifend auf Daten zu.",
      price: "Ab €99 netto pro Monat",
      priceNote: "zzgl. Einrichtungsgebühr",
      setupFee: "Einmalige Einrichtungsgebühr von €499 netto.",
      highlights: [
        "Sofortiger Kontext: Zugehörige Daten (offene Aufträge, Rechnungen, Kontakte) ohne Navigation sehen",
        "Weniger Klicks: Kein Tab-Wechsel mehr für modulübergreifende Informationen",
        "Rollenbasierte Panels: Jede Rolle sieht die relevantesten Seitenleisten-Inhalte",
        "Konsistente UX: Gleiches Seitenleisten-Pattern über alle wichtigen Bildschirme",
      ],
      details:
        "Erweiterte Seitenleisten bringen die benötigten Informationen direkt an Ihren Arbeitsplatz. Ob auf einem Kundendatensatz, einem Verkaufsauftrag oder einem Lagerartikel – die Seitenleiste zeigt verknüpfte Datensätze, KPIs und Schnellaktionen ohne den aktuellen Bildschirm zu verlassen.",
    },
  },
  {
    slug: "ki-assistenzmodul",
    title: "KI-Assistenzmodul",
    subtitle: "AI Assistance Module",
    icon: "brain",
    categories: ["AI", "Interface"],
    shortDescription:
      "An AI that understands you. Let it guide you through your Haufe X360 environment and receive instant answers, analyses, and easy-to-understand information.",
    price: "Price on request",
    priceNote: "",
    setupFee: "",
    highlights: [
      "Natural language queries against your ERP data",
      "Context-aware suggestions based on current screen and user role",
      "Automated report generation from conversational prompts",
      "Proactive anomaly alerts and recommended actions",
    ],
    details:
      "The AI Assistance Module integrates a conversational interface directly into Haufe X360. Ask questions about inventory levels, sales trends, or outstanding invoices in plain language and get structured answers drawn from live data.",
    accent: "#8B5CF6",
    accentSoft: "rgba(139, 92, 246, 0.18)",
    badge: "AI",
    de: {
      shortDescription:
        "Eine KI, die Sie versteht. Lassen Sie sich durch Ihre Haufe X360 Umgebung führen und erhalten Sie sofortige Antworten, Analysen und leicht verständliche Informationen.",
      price: "Preis auf Anfrage",
      highlights: [
        "Natürlichsprachliche Abfragen gegen Ihre ERP-Daten",
        "Kontextbewusste Vorschläge basierend auf aktuellem Bildschirm und Benutzerrolle",
        "Automatisierte Berichtserstellung aus Konversationsanfragen",
        "Proaktive Anomalie-Warnungen und empfohlene Maßnahmen",
      ],
      details:
        "Das KI-Assistenzmodul integriert eine Konversationsschnittstelle direkt in Haufe X360. Stellen Sie Fragen zu Lagerbeständen, Verkaufstrends oder offenen Rechnungen in natürlicher Sprache und erhalten Sie strukturierte Antworten aus Live-Daten.",
    },
  },
  {
    slug: "oberflaechen-design-optimierung",
    title: "Oberflächen-Design-Optimierung",
    subtitle: "Surface Design Optimization",
    icon: "paintbrush",
    categories: ["Interface"],
    shortDescription:
      "Customize your Haufe X360 system design to your liking! We'll tailor the design to your needs, whether with your company logo and corporate colors or other preferences.",
    price: "From €49 net per month",
    priceNote: "plus setup fee",
    setupFee: "One-time setup fee of €299 net.",
    highlights: [
      "Custom branding with your company logo and corporate colors",
      "Tailored dashboard layouts for different user roles",
      "Improved navigation with reorganized menus and shortcuts",
      "Consistent design language across all customized screens",
    ],
    details:
      "Surface Design Optimization transforms the look and feel of your Haufe X360 instance. We adjust color palettes, inject your corporate identity, and rearrange interface elements so the system feels like a natural extension of your brand.",
    accent: "#F472B6",
    accentSoft: "rgba(244, 114, 182, 0.18)",
    badge: "Interface",
    de: {
      shortDescription:
        "Passen Sie Ihr Haufe X360 Systemdesign nach Ihren Wünschen an! Wir gestalten das Design nach Ihren Bedürfnissen, ob mit Firmenlogo und Unternehmensfarben oder anderen Präferenzen.",
      price: "Ab €49 netto pro Monat",
      priceNote: "zzgl. Einrichtungsgebühr",
      setupFee: "Einmalige Einrichtungsgebühr von €299 netto.",
      highlights: [
        "Individuelles Branding mit Firmenlogo und Unternehmensfarben",
        "Angepasste Dashboard-Layouts für verschiedene Benutzerrollen",
        "Verbesserte Navigation mit reorganisierten Menüs und Shortcuts",
        "Konsistente Designsprache über alle angepassten Bildschirme",
      ],
      details:
        "Die Oberflächen-Design-Optimierung verwandelt das Erscheinungsbild Ihrer Haufe X360 Instanz. Wir passen Farbpaletten an, integrieren Ihre Corporate Identity und ordnen Interface-Elemente neu, damit sich das System wie eine natürliche Erweiterung Ihrer Marke anfühlt.",
    },
  },
  {
    slug: "verkaufsbelege-materialien",
    title: "Verkaufsbelege Materialien",
    subtitle: "Sales Bills of Materials",
    icon: "layers",
    categories: ["Sale", "Article Management"],
    shortDescription:
      "Streamline complex product configurations in sales documents. Manage bills of materials directly within quotes and orders for accurate pricing and inventory allocation.",
    price: "From €79 net per month",
    priceNote: "plus setup fee",
    setupFee: "One-time setup fee of €399 net.",
    highlights: [
      "BOM management directly in sales documents",
      "Automatic price calculation for configured products",
      "Real-time inventory check for all BOM components",
      "Seamless handoff from quote to order with BOM integrity",
    ],
    details:
      "Sales Bills of Materials lets your sales team work with complex product structures without leaving the sales workflow. Components are validated, priced, and reserved as a unit, ensuring that what you quote is what you can deliver.",
    accent: "#4D5BCE",
    accentSoft: "rgba(77, 91, 206, 0.16)",
    badge: "Sale",
    de: {
      shortDescription:
        "Optimieren Sie komplexe Produktkonfigurationen in Verkaufsbelegen. Verwalten Sie Stücklisten direkt in Angeboten und Aufträgen für präzise Preiskalkulation und Bestandszuordnung.",
      price: "Ab €79 netto pro Monat",
      priceNote: "zzgl. Einrichtungsgebühr",
      setupFee: "Einmalige Einrichtungsgebühr von €399 netto.",
      highlights: [
        "Stücklistenverwaltung direkt in Verkaufsbelegen",
        "Automatische Preiskalkulation für konfigurierte Produkte",
        "Echtzeit-Bestandsprüfung für alle Stücklistenkomponenten",
        "Nahtlose Übernahme vom Angebot zum Auftrag mit Stücklistenintegrität",
      ],
      details:
        "Verkaufsbelege Materialien ermöglicht Ihrem Vertriebsteam die Arbeit mit komplexen Produktstrukturen ohne den Verkaufsworkflow zu verlassen. Komponenten werden validiert, bepreist und als Einheit reserviert, sodass Sie liefern können, was Sie anbieten.",
    },
  },
  {
    slug: "standorterweiterung",
    title: "Standorterweiterung",
    subtitle: "Expansion of the Location Function",
    icon: "map-pin",
    categories: ["Logistics", "Customer Management"],
    shortDescription:
      "Extend location management with additional fields, validations, and automation to support multi-site operations and regional business rules.",
    price: "From €69 net per month",
    priceNote: "plus setup fee",
    setupFee: "One-time setup fee of €349 net.",
    highlights: [
      "Multi-site inventory tracking with location-specific rules",
      "Automated warehouse selection based on customer region",
      "Location-aware pricing and tax configuration",
      "Cross-location transfer workflows with approval chains",
    ],
    details:
      "The Location Expansion brings multi-site awareness to your Haufe X360 processes. From automatic warehouse assignment to location-specific pricing rules, every transaction respects the geography of your business.",
    accent: "#22D3EE",
    accentSoft: "rgba(34, 211, 238, 0.2)",
    badge: "Logistics",
    de: {
      shortDescription:
        "Erweitern Sie das Standortmanagement mit zusätzlichen Feldern, Validierungen und Automatisierung für Multi-Standort-Operationen und regionale Geschäftsregeln.",
      price: "Ab €69 netto pro Monat",
      priceNote: "zzgl. Einrichtungsgebühr",
      setupFee: "Einmalige Einrichtungsgebühr von €349 netto.",
      highlights: [
        "Multi-Standort-Bestandsverfolgung mit standortspezifischen Regeln",
        "Automatisierte Lagerauswahl basierend auf Kundenregion",
        "Standortbezogene Preis- und Steuerkonfiguration",
        "Standortübergreifende Transfer-Workflows mit Genehmigungsketten",
      ],
      details:
        "Die Standorterweiterung bringt Multi-Standort-Bewusstsein in Ihre Haufe X360 Prozesse. Von der automatischen Lagerzuordnung bis zu standortspezifischen Preisregeln berücksichtigt jede Transaktion die Geografie Ihres Geschäfts.",
    },
  },
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
