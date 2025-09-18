<template>
  <main class="flex flex-col flex-auto lg:flex-row overflow-hidden">
    <!-- Mobile page title -->
    <div id="mobile-page-title">
      <h2>_projects</h2>
    </div>

    <!-- section title (mobile) -->
    <button
      id="section-content-title"
      class="flex lg:hidden items-center px-4 py-3"
      @click="showFilters = !showFilters"
    >
      <span :class="['section-caret', showFilters ? 'rotate-90' : '']">▸</span>
      <span class="font-fira_regular text-white text-sm ml-2">projects</span>
    </button>

    <!-- Filters (no images) -->
    <aside
      v-if="showFilters"
      id="filter-menu"
      class="w-full lg:w-72 flex-col border-right font-fira_regular text-menu-text lg:flex"
    >
      <div
        id="section-content-title"
        class="hidden lg:flex items-center min-w-full px-3 py-2"
      >
        <span class="section-caret mx-1">▸</span>
        <p class="font-fira_regular text-white text-sm">projects</p>
      </div>

      <nav id="filters" class="w-full flex-col">
        <label
          v-for="tech in techs"
          :key="tech"
          class="flex items-center py-2 px-3 cursor-pointer select-none"
        >
          <input
            type="checkbox"
            :checked="active.has(tech)"
            @change="toggleTech(tech)"
          />
          <span
            class="w-5 h-5 mx-4 inline-flex items-center justify-center tech-dot"
            :class="{ active: active.has(tech) }"
            >•</span
          >
          <span :class="{ active: active.has(tech) }">{{ tech }}</span>
        </label>
      </nav>
    </aside>

    <!-- Content -->
    <section class="flex flex-col w-full overflow-hidden">
      <!-- Active filters (desktop) -->
      <div
        class="tab-height w-full hidden lg:flex border-bot items-center justify-between"
      >
        <div class="flex items-center border-right h-full flex-wrap">
          <p
            v-for="filter in activeList.length ? activeList : ['all']"
            :key="filter"
            class="font-fira_regular text-menu-text text-sm px-3"
          >
            {{ filter }};
          </p>
        </div>
        <button
          v-if="active.size"
          class="text-xs text-menu-text px-3 py-2"
          @click="clearFilters"
        >
          clear
        </button>
      </div>

      <!-- Active filters (mobile) -->
      <div id="tab" class="flex lg:hidden items-center">
        <span class="text-white"> // </span>
        <p class="font-fira_regular text-white text-sm px-3">projects</p>
        <span class="text-menu-text"> / </span>
        <p
          v-for="filter in activeList.length ? activeList : ['all']"
          :key="filter"
          class="font-fira_regular text-menu-text text-sm px-3"
        >
          {{ filter }};
        </p>
      </div>

      <!-- Projects -->
      <div
        id="projects-case"
        class="grid grid-cols-1 lg:grid-cols-2 max-w-full h-full overflow-auto lg:self-center"
      >
        <div
          v-if="displayed.length === 0"
          id="not-found"
          class="flex flex-col font-fira_retina text-menu-text my-5 h-full justify-center items-center"
        >
          <span class="flex justify-center text-4xl pb-3"> X__X </span>
          <span class="text-white flex justify-center text-xl"
            >No matching projects</span
          >
          <span class="flex justify-center">for these technologies</span>
        </div>

        <article
          v-for="p in displayed"
          :key="p.id"
          class="m-4 p-4 rounded-lg border bg-[#0f1822]/60"
        >
          <header class="flex items-center justify-between">
            <h3 class="text-white font-medium text-lg">{{ p.title }}</h3>
          </header>

          <!-- meta -->
          <div
            v-if="p.period || p.client"
            class="text-xs text-menu-text mt-1 flex gap-3 flex-wrap"
          >
            <span v-if="p.period">{{ p.period }}</span>
            <span v-if="p.client">client: {{ p.client }}</span>
          </div>

          <!-- Prefer tasks; fallback to description -->
          <ul
            v-if="p.tasks?.length"
            class="list-disc list-inside text-sm text-menu-text space-y-1 mt-2"
          >
            <li v-for="t in p.tasks" :key="t">{{ t }}</li>
          </ul>
          <p
            v-else-if="p.description"
            class="text-sm text-menu-text mt-2 leading-6"
          >
            {{ p.description }}
          </p>

          <!-- Tech chips -->
          <ul class="flex flex-wrap gap-2 mt-3">
            <li
              v-for="t in p.tech"
              :key="t"
              class="text-xs px-2 py-1 bg-[#1c2b3a] rounded"
            >
              {{ t }}
            </li>
          </ul>

          <!-- Links / details -->
          <div class="mt-4 flex gap-3">
            <a
              v-if="p.url"
              :href="p.url"
              target="_blank"
              rel="noopener"
              id="view-button"
              class="px-3 py-2 rounded text-sm"
              >Visit</a
            >

            <details v-if="p.details" class="text-sm">
              <summary
                id="view-details"
                class="px-3 py-2 rounded inline-block cursor-pointer"
              >
                Details
              </summary>
              <div class="mt-2 text-menu-text leading-6 whitespace-pre-line">
                {{ p.details }}
              </div>
            </details>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
const config = useRuntimeConfig();

/**
 * Start from config.public.dev.projects, then:
 * - Remove "Incedo Lead Generator"
 * - Replace "Aermax" with tasks + period/client (no image)
 * - Add:
 *   - Haufe X360 – ERP Customizations (tasks)
 *   - JotForm → Haufe X360 Integration (tasks)
 *   - Fleischeslust – Portatour ↔ X360 Integration (description)
 */
const fromCfg = config?.public?.dev?.projects || {};
let base = Object.entries(fromCfg)
  .map(([id, p]) => ({ id, ...p }))
  .filter((p) => p.title !== "Incedo Lead Generator")
  .filter((p) => p.title !== "Aermax") // we will inject curated Aermax below
  .map((p) => {
    const { img, ...rest } = p; // strip images everywhere
    return rest;
  });

// Curated/added entries
const curated = [
  // Aermax (tasks + meta)
  {
    id: "aermax",
    title: "Aermax — Industrial Climbers Platform",
    period: "Jan 2024 – Jun 2024",
    client: "Aermax (Germany)",
    tasks: [
      "Fixed bugs and built features across the platform.",
      "Maintained and shipped features on the legacy app (Spring Boot + React).",
      "Built a rewards system for subcontractors (XP/tokens) with gated features.",
      "Implemented a new NestJS microservice; inter-service comms via RabbitMQ.",
      "Wrote docs with Storybook, JSDoc, Markdown, and README files.",
    ],
    tech: [
      "Spring Boot",
      "React",
      "NestJS",
      "RabbitMQ",
      "Flutter",
      "TypeScript",
      "CSS",
    ],
    url: "https://app.aermax.de/",
    details: "",
  },

  // Haufe X360 ERP Customizations (tasks)
  {
    id: "x360-erp-customizations",
    title: "Haufe X360 — ERP Customizations",
    tasks: [
      "Added DAC fields/attributes across AR/AP/SO/IN; enforced validations and business rules.",
      "Graph extensions for automation (events, persistence hooks, workflow fixes).",
      "UI streamlining: selectors, field visibility by role/context, grid tweaks.",
      "Pricing/freight logic (price fetch, tax category/account mapping).",
      "Parent→Child payment methods sync (clone/cleanup for virtual & real PMs).",
      "CRQuote→SOOrder transfer for custom text/fields.",
    ],
    tech: [
      "C#",
      "ASPX",
      "Acumatica BQL",
      "Haufe X360",
      "REST",
      "OData",
      "Microsoft SQL Server",
    ],
    url: "",
  },

  // JotForm → X360 Integration (tasks)
  {
    id: "triqbriq-jotform-x360",
    title: "JotForm → Haufe X360 Integration",
    tasks: [
      "Webhook intake from JotForm with schema validation and error handling.",
      "Normalization: phone formatting, postal code checks, attribute mapping.",
      "Duplicate detection & safe upsert into X360 via REST/OData.",
      "Salesperson & contact role validation; ID reconciliation.",
      "Structured logs/monitoring (New Relic) with retries/backoff.",
      "End-to-end mapping for Leads/Contacts/Business Accounts.",
    ],
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
    url: "",
  },

  // Fleischeslust — Portatour ↔ X360 Integration (short description)
  {
    id: "fleischeslust-portatour-x360",
    title: "Fleischeslust — Portatour ↔ Haufe X360 Integration",
    description:
      "Implemented bidirectional sync: export customers from X360 to Portatour with upsert; import visit appointments from Portatour (delta since last export) into X360. Aligned master data, ensured referential integrity, and stabilized operational flows.",
    tech: [
      "C#",
      "ASPX",
      "Haufe X360",
      "Portatour API",
      "REST",
      "Microsoft SQL Server",
    ],
    url: "",
  },
];

// Merge curated + remaining originals (no images)
const allProjects = [...curated, ...base];

// Build filter tech set dynamically
const techs = Array.from(
  new Set(allProjects.flatMap((p) => p.tech || []))
).sort();

// Filter state
const showFilters = ref(true);
const active = ref(new Set());
const activeList = computed(() =>
  active.value.size ? Array.from(active.value) : []
);

function toggleTech(tech) {
  const n = new Set(active.value);
  n.has(tech) ? n.delete(tech) : n.add(tech);
  active.value = n;
}
function clearFilters() {
  active.value = new Set();
}

const displayed = computed(() => {
  if (!active.value.size) return allProjects;
  return allProjects.filter((p) =>
    (p.tech || []).some((t) => active.value.has(t))
  );
});
</script>

<style>
#filters {
  padding: 10px 25px;
}
#tab {
  padding: 25px 25px 5px;
  flex-wrap: wrap;
}

.section-caret {
  display: inline-block;
  transition: transform 0.2s ease;
}
.rotate-90 {
  transform: rotate(90deg);
}

.tech-dot {
  opacity: 0.4;
}
.tech-dot.active {
  opacity: 1;
}
span.active {
  color: white;
}

#view-button {
  background-color: #1c2b3a;
}
#view-button:hover {
  background-color: #263b50;
}
#view-details {
  background-color: #1c2b3a;
  color: #cbd5e1;
}
#view-details:hover {
  background-color: #263b50;
}

input[type="checkbox"] {
  appearance: none;
  background-color: transparent;
  width: 1.15em;
  height: 1.15em;
  border: 2px solid currentColor;
  border-radius: 0.15em;
  margin-top: 1px;
}
input[type="checkbox"]:checked {
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
}
input[type="checkbox"]:checked:hover {
  box-shadow: #607b968b 0px 0px 0px 2px;
}
input[type="checkbox"]:not(:checked) {
  border-color: currentColor;
}
input[type="checkbox"]:hover {
  cursor: pointer;
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: #607b968b 0px 0px 0px 2px;
}
input[type="checkbox"]:hover:not(:checked) {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: none;
  box-shadow: #607b968b 0px 0px 0px 2px;
}
input[type="checkbox"]:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  #projects-case {
    padding: 0px 25px 40px;
  }
}
@media (min-width: 768px) {
  #projects-case {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 50px 50px 40px;
  }
}
@media (min-width: 1350px) {
  #projects-case {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 50px 80px 40px;
  }
}
</style>
