<template>
  <main id="projects" class="page flex flex-col overflow-y-auto">
    <section class="relative overflow-hidden border-bot compact-hero">
      <div class="hero-glow hero-glow-a"></div>
      <div class="hero-glow hero-glow-b"></div>

      <div class="relative px-6 py-4 lg:px-10 lg:py-5">
        <div class="flex items-center justify-between gap-3 flex-wrap text-xs text-menu-text">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="pill">Projects: {{ allProjects.length }}</span>
            <span class="pill">Stacks: {{ techs.length }}</span>
            <span class="pill" v-if="activeFilters.length">
              Active filters: {{ activeFilters.join(", ") }}
            </span>
            <span class="pill" v-else>All stacks visible</span>
          </div>

          <NuxtLink to="/contact-me" class="cta-link">Book a chat</NuxtLink>
        </div>
      </div>
    </section>

    <section class="flex-1 overflow-hidden px-6 pb-8 lg:px-10">
      <div class="flex flex-col lg:flex-row gap-6 h-full">
        <aside class="filter-panel border" :class="{ collapsed: !filtersOpen }">
          <div class="filter-header">
            <div>
              <p class="text-xs uppercase tracking-[0.18em] text-menu-text">Stacks</p>
              <p class="text-white font-semibold text-sm">{{ techs.length }} technologies</p>
            </div>
            <button class="filter-toggle" @click="filtersOpen = !filtersOpen">
              {{ filtersOpen ? "Hide" : "Show" }}
            </button>
          </div>

          <div class="filter-chips column" :class="{ closed: !filtersOpen }">
            <button
              v-for="tech in techs"
              :key="tech"
              class="filter-chip"
              :class="{ active: selectedTechs.has(tech) }"
              @click="toggleTech(tech)"
            >
              <span class="dot" aria-hidden="true"></span>
              <span>{{ tech }}</span>
            </button>
          </div>

          <button v-if="selectedTechs.size" class="clear-btn" @click="clearFilters">
            Clear filters
          </button>
        </aside>

        <div class="flex-1 overflow-auto">
          <div v-if="projects.length === 0" class="empty-state">
            <div class="text-3xl pb-2">X__X</div>
            <p class="text-white text-lg">No projects for those filters.</p>
            <button class="clear-btn mt-3" @click="clearFilters">Reset filters</button>
          </div>

          <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <NuxtLink
              v-for="(project, idx) in projects"
              :key="project.slug"
              :to="`/projects/${project.slug}`"
              class="project-card group"
              :style="{
                '--accent': project.accent || '#5565E8',
                '--accent-soft': project.accentSoft || 'rgba(85, 101, 232, 0.12)',
              }"
              data-aos="fade-up"
              :data-aos-delay="idx * 50"
            >
              <div class="media">
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="`${project.title} preview`"
                  loading="lazy"
                />
                <div v-else class="media-placeholder" aria-hidden="true">
                  <span class="media-title">{{ project.title }}</span>
                </div>
              </div>

              <div class="card-body">
                <div class="card-top">
                  <span class="badge">{{ project.badge || "Case study" }}</span>
                  <span v-if="project.period" class="meta">{{ project.period }}</span>
                  <span v-else class="meta">{{ project.role || "Multi-stack" }}</span>
                </div>

                <h3 class="title">{{ project.title }}</h3>
                <p class="headline">
                  {{ project.headline || project.summary }}
                </p>

                <div class="chips">
                  <span v-for="tech in project.tech" :key="tech" class="chip">
                    {{ tech }}
                  </span>
                </div>

                <div class="divider"></div>

                <div class="foot">
                  <p class="highlight">
                    {{ project.highlights?.[0] || project.summary }}
                  </p>
                  <span class="cta">
                    Open detail
                    <span aria-hidden="true">-></span>
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { buildProjects } from "@/utils/projects";

definePageMeta({
  pageTransition: {
    name: "project",
    mode: "out-in",
  },
});

const config = useRuntimeConfig();
const filtersOpen = ref(true);
const selectedTechs = ref<Set<string>>(new Set());

const allProjects = computed(() => buildProjects(config));
const techs = computed(() =>
  Array.from(new Set(allProjects.value.flatMap((p) => p.tech || []))).sort()
);
const activeFilters = computed(() =>
  selectedTechs.value.size ? Array.from(selectedTechs.value) : []
);
const projects = computed(() => {
  if (!selectedTechs.value.size) return allProjects.value;
  return allProjects.value.filter((p) =>
    (p.tech || []).some((t) => selectedTechs.value.has(t))
  );
});

function toggleTech(tech: string) {
  const next = new Set(selectedTechs.value);
  next.has(tech) ? next.delete(tech) : next.add(tech);
  selectedTechs.value = next;
}

function clearFilters() {
  selectedTechs.value = new Set();
}
</script>

<style scoped>
#projects {
  background: linear-gradient(180deg, #0b1220 0%, #0a111c 60%, #0b1220 100%);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.compact-hero {
  padding-bottom: 0.25rem;
}

.hero-glow {
  position: absolute;
  filter: blur(110px);
  opacity: 0.7;
  pointer-events: none;
}

.hero-glow-a {
  width: 380px;
  height: 380px;
  top: -80px;
  left: -120px;
  background: radial-gradient(circle at 40% 40%, #4d5bce55, transparent 60%);
}

.hero-glow-b {
  width: 320px;
  height: 320px;
  top: -40px;
  right: -120px;
  background: radial-gradient(circle at 60% 40%, #43d9ad55, transparent 60%);
}

.pill {
  border: 1px solid #1e2d3d;
  background: #0b1420;
  color: #cbd5e1;
  padding: 6px 12px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.cta-link {
  border: 1px solid #1e2d3d;
  color: #e5e9f0;
  padding: 8px 14px;
  border-radius: 10px;
  background: linear-gradient(120deg, rgba(85, 101, 232, 0.18), rgba(67, 217, 173, 0.12));
  transition: transform 150ms ease, border-color 150ms ease;
}

.cta-link:hover {
  border-color: #43d9ad;
  transform: translateY(-2px);
}

.filter-panel {
  min-width: 240px;
  max-width: 260px;
  background: #0c1421;
  border-radius: 16px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
}

.filter-panel.collapsed {
  max-height: 62px;
  overflow: hidden;
}

.filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-toggle {
  border: 1px solid #1e2d3d;
  background: #0b1420;
  border-radius: 8px;
  padding: 6px 10px;
  color: #cbd5e1;
  font-size: 12px;
}

.filter-chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-chips.column {
  flex-direction: column;
}

.filter-chips.closed {
  display: none;
}

@media (min-width: 1024px) {
  .filter-panel {
    position: sticky;
    top: 80px;
    align-self: flex-start;
  }

  .filter-chips.closed {
    display: flex;
  }
}

.filter-chip {
  border: 1px solid #1e2d3d;
  background: #0c1727;
  border-radius: 10px;
  color: #cbd5e1;
  font-size: 12px;
  padding: 8px 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: border-color 150ms ease, color 150ms ease, transform 150ms ease;
}

.filter-chip .dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #607b96;
}

.filter-chip.active {
  border-color: #43d9ad;
  color: #e5e9f0;
  transform: translateY(-1px);
}

.filter-chip.active .dot {
  background: #43d9ad;
}

.empty-state {
  border: 1px dashed #1e2d3d;
  padding: 24px;
  border-radius: 14px;
  text-align: center;
  color: #cbd5e1;
}

.clear-btn {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #1e2d3d;
  background: #0b1420;
  color: #e99287;
  font-size: 12px;
}

.project-card {
  position: relative;
  border: 1px solid #223349;
  border-radius: 18px;
  padding: 0;
  background: linear-gradient(160deg, #0d1727 0%, #0e1a2d 45%, #0b1322 100%);
  overflow: hidden;
  transition: transform 150ms ease, box-shadow 180ms ease, border-color 180ms ease;
  min-height: 320px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.project-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 15%, var(--accent-soft, rgba(85, 101, 232, 0.12)), transparent 45%),
    radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.05), transparent 40%);
  opacity: 0.9;
  pointer-events: none;
  transition: opacity 160ms ease;
  z-index: 0;
}

.media {
  position: relative;
  z-index: 1;
  height: 160px;
  overflow: hidden;
  border-bottom: 1px solid #1e2d3d;
  background: #0b1420;
}

.media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 18, 32, 0) 0%, rgba(11, 18, 32, 0.65) 100%);
  opacity: 0.9;
  pointer-events: none;
  z-index: 1;
}

.media img,
.media-placeholder {
  width: 100%;
  height: 100%;
}

.media img {
  object-fit: cover;
  display: block;
  transform: scale(1.02);
  transition: transform 200ms ease, filter 200ms ease;
  filter: saturate(1.02);
  position: relative;
  z-index: 0;
}

.project-card:hover .media img {
  transform: scale(1.05);
  filter: saturate(1.1) contrast(1.02);
}

.media-placeholder {
  display: flex;
  align-items: flex-end;
  padding: 16px;
  background: radial-gradient(circle at 20% 20%, var(--accent-soft, rgba(85, 101, 232, 0.2)), transparent 55%),
    linear-gradient(145deg, #0f1c2b 0%, #0b1420 60%);
  color: #e5e9f0;
  position: relative;
  z-index: 2;
}

.media-title {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.card-body {
  position: relative;
  z-index: 1;
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent, #5565e8);
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.45), 0 0 0 1px var(--accent-soft, rgba(85, 101, 232, 0.12));
}

.project-card:hover::after {
  opacity: 1;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 12px;
}

.badge {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #1e2d3d;
  color: #e5e9f0;
  padding: 6px 10px;
  border-radius: 9999px;
  font-size: 11px;
  letter-spacing: 0.02em;
}

.meta {
  color: #8da2b8;
}

.title {
  color: #e5e9f0;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
}

.headline {
  color: #d7e1ef;
  font-size: 14px;
  line-height: 1.6;
  min-height: 60px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.chip {
  font-size: 12px;
  color: #cbd5e1;
  background: #111c2a;
  border: 1px solid #1e2d3d;
  padding: 6px 10px;
  border-radius: 9999px;
}

.divider {
  height: 1px;
  width: 100%;
  margin: 16px 0 12px 0;
  background: linear-gradient(90deg, transparent, var(--accent, #5565e8), transparent);
  opacity: 0.4;
}

.foot {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
}

.highlight {
  color: #a5b9d2;
  font-size: 13px;
  line-height: 1.5;
  max-width: 75%;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #43d9ad;
  font-size: 13px;
  font-weight: 600;
}

:global(.project-enter-active),
:global(.project-leave-active) {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

:global(.project-enter-from),
:global(.project-leave-to) {
  opacity: 0;
  transform: translateY(8px);
}
</style>
