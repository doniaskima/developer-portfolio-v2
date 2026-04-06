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
  },
  {
    slug: "extended-context-sidebars",
    title: "Extended Context Sidebars",
    subtitle: "Linked grids beside invoices, customers, quotes, orders, and shipments",
    icon: "sidebar",
    categories: ["Interface", "Sale", "Customer Management", "Financial Accounting", "Logistics"],
    shortDescription:
      "Keep the document you are working on in the center and open a companion pane for related records—shipments, orders, quotes, tickets, returns, and more—without bouncing through separate windows. A slim icon rail picks the view; the panel fills in with the matching list or preview so context stays on one screen.",
    highlights: [
      "Stays in one layout: the main form stays put while a second column loads related grids or previews you choose from the rail",
      "Fewer detours: answer “what shipments belong to this invoice?” or “which orders sit on this customer?” without a module scavenger hunt",
      "Consistent pattern: the same sidebar interaction appears across AR, sales, and logistics screens so training carries over",
      "Dense work stays readable: lists such as shipments or sales orders open with familiar toolbar actions next to the record you already have open",
      "Covers the flows shown in the screenshots—customer cards, quotes, sales orders, invoices, and shipment documents—with tabs that change by screen",
      "Helps handoffs: service, sales, and warehouse roles see linked history faster when everything is one click away on the same page",
    ],
    details:
      "This customization adds a vertical strip of context actions to the right of key ERP screens. Pick an icon and the system opens a dedicated panel with the related dataset—still on the same page as your primary document. The goal is straightforward: reduce how often people open new tabs or hunt menus just to confirm linked activity. The screenshots walk through several real combinations: on an invoice, “Deliveries” surfaces a shipments grid; on a customer, “Orders” opens sales orders; on a quote, “Customer” shows linked business accounts; on a sales order, the rail includes returns, tracking, deliveries, and more; on a shipment, “Offer” lists related sales quotes. Exact tab labels and counts can vary by screen and how your site is configured, so treat the feature list below as what is visible in the demo captures—not an exhaustive catalog of every possible sidebar everywhere in the product.",
    detailSections: [
      {
        heading: "How the panel behaves",
        body: "You work in the standard header and lines as usual. The sidebar sits between that content and the far edge: icons for each available context view, then an expandable grid or reader pane. Switching icons swaps the panel content while the underlying document remains active, which keeps orientation in long sessions.",
      },
      {
        heading: "What the sample screenshots show",
        body: "Invoice and memo: shipments beside the bill while other icons cover offers, orders, preview, and tickets. Customer: orders, invoices, offers, deliveries, and tickets from one profile. Sales quote: customer linkage plus invoices, orders, preview, and stock items. Sales order: a wider rail including customer details, invoices, deliveries, offers, returns, tracking, and related returns. Shipment: invoices, linked quotes, orders, and returns—with quote results labeled as sales quotes in the panel header.",
      },
    ],
    example:
      "An AR clerk is on an open invoice and needs proof of what shipped. They tap Deliveries in the rail; the Shipments grid appears with statuses and dates, still beside the invoice totals. No new window, no lost scroll position on the main form—just the answer in context.",
    standardFeatures: [
      {
        title: "Invoices and Memos (AR301000) — sidebar views visible in screenshot",
        features: [
          { function: "Deliveries", description: "Opens a Shipments grid tied to the invoice (status, shipment number, dates)" },
          { function: "Offers", description: "Context list for related quotes or commercial offers" },
          { function: "Orders", description: "Jump to sales order activity linked to the invoice" },
          { function: "Preview", description: "Document-style preview without leaving the invoice" },
          { function: "Tickets", description: "Service or case-style follow-ups adjacent to the AR document" },
        ],
      },
      {
        title: "Customers (AR303000) — sidebar views visible in screenshot",
        features: [
          { function: "Deliveries", description: "Outbound/delivery-oriented related lines from the customer context" },
          { function: "Invoices and Credit Notes", description: "AR documents connected to the account" },
          { function: "Offers", description: "Quote-level activity for the customer" },
          { function: "Orders", description: "Sales orders list (grid with type, number, status, date in the sample)" },
          { function: "Tickets", description: "Support-style items associated with the customer" },
        ],
      },
      {
        title: "Sales Quotes (CR304500) — sidebar views visible in screenshot",
        features: [
          { function: "Customer", description: "Business accounts grid (e.g. primary customer linkage for the quote)" },
          { function: "Invoices and Credit Notes", description: "Billing history relevant to the quote’s account" },
          { function: "Orders", description: "Sales orders that relate to the opportunity or quote" },
          { function: "Preview", description: "Readable preview of quote output" },
          { function: "Stock items", description: "Item-centric context next to the quote" },
        ],
      },
      {
        title: "Sales Orders (SO301000) — sidebar views visible in screenshot",
        features: [
          { function: "Invoices and Memos", description: "Invoice-side documents tied to the order" },
          { function: "Customer Details", description: "Account context without navigating away from the SO" },
          { function: "Related Return Documents", description: "Return paperwork associated with the order" },
          { function: "Deliveries", description: "Fulfillment-oriented related records" },
          { function: "Invoices and Credit Notes", description: "AR views aligned with the sales order" },
          { function: "Offers", description: "Quote history connected to the order" },
          { function: "Orders", description: "Related sales orders grid (e.g. siblings or roll-ups in the sample)" },
          { function: "Returns", description: "Return flows linked to the order" },
          { function: "Tracking", description: "Shipment tracking style information from the order context" },
        ],
      },
      {
        title: "Shipments (SO302000) — sidebar views visible in screenshot",
        features: [
          { function: "Invoices and Credit Notes", description: "Billing documents related to the shipment" },
          { function: "Offer", description: "Opens a Sales Quotes list tied to the shipment context" },
          { function: "Orders", description: "Sales orders feeding or tied to the shipment" },
          { function: "Returns", description: "Return documents relevant to shipped lines" },
        ],
      },
    ],
    accent: "#6B9FFF",
    accentSoft: "rgba(107, 159, 255, 0.18)",
    badge: "Interface",
    images: [
      "/Customizations/ExtendedSidebar/extended-sidebar-1.png",
      "/Customizations/ExtendedSidebar/extended-sidebar-2.png",
      "/Customizations/ExtendedSidebar/extended-sidebar-3.png",
      "/Customizations/ExtendedSidebar/extended-sidebar-4.png",
      "/Customizations/ExtendedSidebar/extended-sidebar-5.png",
    ],
    de: {
      title: "Erweiterte Kontext-Seitenleisten",
      subtitle: "Verknüpfte Tabellen neben Rechnungen, Kunden, Angeboten, Aufträgen und Sendungen",
      shortDescription:
        "Das aktive Dokument bleibt im Fokus; daneben öffnen Sie über eine schmale Symbolleiste passende Zusatzansichten—Lieferungen, Aufträge, Angebote, Tickets, Retouren u. a.—ohne ständig zwischen Fenstern zu wechseln. Ein Klick wählt die Ansicht, das Panel zeigt die zugehörige Liste oder Vorschau auf derselben Oberfläche.",
      highlights: [
        "Ein Layout: die Hauptmaske bleibt sichtbar, während in einer zweiten Spalte die gewählte Liste oder Vorschau erscheint",
        "Weniger Umwege: Fragen zu Lieferungen, Aufträgen oder Angeboten klären Sie ohne langes Suchen in den Modulen",
        "Gleiches Muster: dieselbe Seitenleisten-Logik auf AR-, Vertriebs- und Logistik-Masken",
        "Lesbare Arbeit: Tabellen wie Sendungen oder Verkaufsaufträge erscheinen mit gewohnter Symbolleiste neben dem Datensatz",
        "Die Screenshots zeigen u. a. Kundenstamm, Angebot, Auftrag, Rechnung und Sendung—mit je passenden Registerkarten",
        "Schnellere Übergaben zwischen Vertrieb, Buchhaltung und Lager, wenn Folgedaten nur einen Klick entfernt sind",
      ],
      details:
        "Die Anpassung ergänzt ausgewählte ERP-Masken um eine vertikale Leiste mit Kontextaktionen. Nach der Auswahl öffnet sich ein Panel mit der passenden Datenmenge—auf derselben Seite wie Ihr Hauptbeleg. Ziel ist weniger Fensterwechsel und weniger Menü-Suche nur zur Kontrolle verknüpfter Vorgänge. Die Beispielbilder zeigen konkrete Kombinationen: bei der Rechnung liefert „Lieferungen“ eine Sendungstabelle; beim Kunden zeigt „Aufträge“ Verkaufsaufträge; beim Angebot verknüpft „Kunde“ Geschäftspartner; beim Auftrag umfasst die Leiste u. a. Retouren, Sendungsverfolgung und Lieferungen; bei der Sendung listet „Angebot“ im Panel zugehörige Verkaufsangebote. Welche Registerkarten pro Maske sichtbar sind, hängt von Bildschirm und Konfiguration ab—die nachfolgende Liste entspricht den Demo-Screenshots, nicht jeder denkbaren Registerkarte im gesamten System.",
      detailSections: [
        {
          heading: "Bedienung des Panels",
          body: "Kopf- und Positionsdaten bleiben im gewohnten Bereich. Rechts daneben liegen die Symbole für die Kontextansichten; das Panel zeigt die gewählte Liste oder Vorschau. Beim Wechsel bleibt der Hauptbeleg aktiv—so bleibt die Orientierung auch bei längerer Bearbeitung erhalten.",
        },
        {
          heading: "Was die Beispiel-Screenshots zeigen",
          body: "Rechnung: Sendungen neben dem Beleg, weitere Symbole u. a. für Angebote, Aufträge, Vorschau und Tickets. Kunde: Aufträge, Rechnungen, Angebote, Lieferungen und Tickets aus einem Profil. Verkaufsangebot: Kundenbezug sowie Rechnungen, Aufträge, Vorschau und Artikel. Verkaufsauftrag: breitere Leiste inkl. Kundendetails, Rechnungen, Lieferungen, Angebote, Retouren, Sendungsverfolgung und zugehörigen Retourenbelegen. Sendung: Rechnungen, Angebote (im Panel als Verkaufsangebote ausgewiesen), Aufträge und Retouren.",
        },
      ],
      example:
        "Die Buchhaltung prüft eine offene Rechnung und braucht die zugehörigen Sendungen. Ein Klick auf „Lieferungen“ in der Leiste—die Tabelle erscheint mit Status und Datum, die Rechnung bleibt sichtbar. Kein neues Fenster, kein Verlieren der Scrollposition.",
    },
  },
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
