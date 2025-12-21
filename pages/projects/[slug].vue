<template>
  <main id="project-detail" class="page flex flex-col overflow-hidden">
    <div v-if="project" class="flex flex-col flex-1 overflow-hidden">
      <section
        class="detail-hero relative overflow-hidden border-bot"
        :style="{
          '--accent': accent,
          '--accent-soft': accentSoft,
        }"
      >
        <div class="hero-veil hero-veil-a"></div>
        <div class="hero-veil hero-veil-b"></div>

        <div class="relative px-6 py-6 lg:px-10 lg:py-8 space-y-4">
          <div class="flex items-center justify-between gap-3 flex-wrap text-sm text-menu-text">
            <div class="flex items-center gap-2 flex-wrap">
              <NuxtLink to="/projects" class="crumb">Projects</NuxtLink>
              <span class="sep">/</span>
              <span class="crumb active">{{ project.title }}</span>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="pill" v-if="project.badge">{{ project.badge }}</span>
              <span class="pill" v-if="project.period">{{ project.period }}</span>
              <span class="pill" v-else-if="project.role">Role: {{ project.role }}</span>
            </div>
          </div>

          <div class="hero-main">
            <div v-if="project.detailImage || project.image" class="hero-media">
              <img
                :src="project.detailImage || project.image"
                :alt="`${project.title} preview`"
                loading="lazy"
              />
            </div>

            <div class="space-y-3 hero-copy">
              <h1 class="text-white text-2xl lg:text-3xl font-fira_bold leading-snug">
                {{ project.title }}
              </h1>
              <p class="text-base text-menu-text leading-7 max-w-4xl">
                {{ project.summary || project.headline }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.tech" :key="tech" class="chip strong">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex-1 overflow-y-auto p-6 lg:p-10 detail-body">
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="panel lg:col-span-2">
            <div class="panel-title">Case narrative</div>
            <div class="grid gap-4 md:grid-cols-3">
              <div class="callout">
                <p class="label">Problem</p>
                <p class="body">{{ problem }}</p>
              </div>
              <div class="callout">
                <p class="label">Solution</p>
                <p class="body">{{ solution }}</p>
              </div>
              <div class="callout">
                <p class="label">Impact</p>
                <p class="body">{{ impact }}</p>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="panel-title">Highlights</div>
            <ul class="list">
              <li v-for="item in highlightList" :key="item">
                <span class="bullet"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="panel mt-6">
          <div class="panel-title">Build path</div>
          <div v-if="timeline.length" class="timeline">
            <div v-for="(item, idx) in timeline" :key="item.title + idx" class="timeline-row">
              <div class="marker">{{ idx + 1 }}</div>
              <div>
                <p class="step-title">{{ item.title }}</p>
                <p class="step-body">{{ item.detail }}</p>
              </div>
            </div>
          </div>
          <p v-else class="text-menu-text text-sm">
            Timeline coming soon. Reach out for a live walkthrough.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 mt-6">
          <div class="panel">
            <div class="panel-title">Stack</div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.tech" :key="tech" class="chip">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="panel" v-if="links.length">
            <div class="panel-title">Links and next steps</div>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="link in links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener"
                class="link-btn"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div
      v-else
      class="flex flex-1 items-center justify-center flex-col gap-3 p-8 text-menu-text"
    >
      <p class="text-xl text-white">Project not found.</p>
      <NuxtLink to="/projects" class="cta-link">Back to projects</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getProjectBySlug } from "@/utils/projects";

definePageMeta({
  pageTransition: {
    name: "project",
    mode: "out-in",
  },
});

const config = useRuntimeConfig();
const route = useRoute();

const project = computed(() =>
  getProjectBySlug((route.params.slug as string) || "", config)
);

const accent = computed(() => project.value?.accent || "#5565E8");
const accentSoft = computed(
  () => project.value?.accentSoft || "rgba(85, 101, 232, 0.12)"
);

const timeline = computed(() => {
  if (project.value?.timeline?.length) return project.value.timeline;
  if (project.value?.tasks?.length) {
    return project.value.tasks.map((detail, idx) => ({
      title: `Step ${idx + 1}`,
      detail,
    }));
  }
  return [];
});

const highlightList = computed(() => {
  if (project.value?.highlights?.length) return project.value.highlights;
  if (project.value?.tasks?.length) return project.value.tasks;
  return project.value?.summary ? [project.value.summary] : [];
});

const problem = computed(
  () =>
    project.value?.problem ||
    project.value?.summary ||
    "Let's talk through the problem space."
);
const solution = computed(
  () =>
    project.value?.solution ||
    project.value?.highlights?.[0] ||
    "Solution details coming soon."
);
const impact = computed(
  () =>
    project.value?.impact ||
    "Impact and rollout details available on a walkthrough."
);

const links = computed(() => project.value?.links || []);
</script>

<style scoped>
#project-detail {
  background: linear-gradient(180deg, #0b1220 0%, #0a111c 60%, #0b1220 100%);
  display: flex;
  flex-direction: column;
}

.detail-hero {
  background: linear-gradient(135deg, var(--accent-soft, rgba(85, 101, 232, 0.12)) 0%, #0c1422 45%, #0a111c 100%);
}

.hero-veil {
  position: absolute;
  filter: blur(120px);
  opacity: 0.85;
  pointer-events: none;
}

.hero-veil-a {
  width: 420px;
  height: 420px;
  top: -140px;
  left: -100px;
  background: radial-gradient(circle at 40% 40%, var(--accent-soft, rgba(85, 101, 232, 0.16)), transparent 60%);
}

.hero-veil-b {
  width: 320px;
  height: 320px;
  top: -80px;
  right: -120px;
  background: radial-gradient(circle at 60% 40%, rgba(255, 255, 255, 0.08), transparent 60%);
}

.hero-main {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-copy {
  flex: 1;
  min-width: 0;
}

.hero-media {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #1e2d3d;
  background: #0b1420;
  position: relative;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  width: 100%;
  max-width: 380px;
  aspect-ratio: 4 / 3;
}

.hero-media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 20, 32, 0) 0%, rgba(11, 20, 32, 0.4) 100%);
  pointer-events: none;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.01);
  transition: transform 200ms ease;
}

.hero-media:hover img {
  transform: scale(1.03);
}

@media (min-width: 768px) {
  .hero-main {
    flex-direction: row;
    align-items: center;
  }

  .hero-media {
    width: 320px;
    max-width: 320px;
    flex: 0 0 320px;
  }
}

@media (min-width: 1024px) {
  .hero-media {
    width: 360px;
    max-width: 360px;
    flex-basis: 360px;
  }
}

.crumb {
  color: #8da2b8;
}

.crumb.active {
  color: #e5e9f0;
}

.sep {
  color: #394a60;
}

.chip {
  font-size: 12px;
  color: #cbd5e1;
  background: #111c2a;
  border: 1px solid #1e2d3d;
  padding: 6px 10px;
  border-radius: 9999px;
}

.chip.strong {
  border-color: var(--accent, #5565e8);
  background: rgba(85, 101, 232, 0.12);
}

.detail-body {
  background: radial-gradient(circle at 10% 20%, rgba(77, 91, 206, 0.08), transparent 40%);
}

.panel {
  background: #0b1420;
  border: 1px solid #1e2d3d;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.panel-title {
  color: #e5e9f0;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.callout {
  border: 1px solid #1e2d3d;
  background: #0f1a2a;
  border-radius: 12px;
  padding: 12px;
  height: 100%;
}

.label {
  color: #8da2b8;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.body {
  color: #e5e9f0;
  font-size: 14px;
  line-height: 1.6;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: start;
  color: #cbd5e1;
  font-size: 14px;
}

.bullet {
  width: 6px;
  height: 6px;
  margin-top: 6px;
  border-radius: 9999px;
  background: var(--accent, #5565e8);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.timeline-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
}

.marker {
  width: 30px;
  height: 30px;
  border-radius: 12px;
  background: var(--accent-soft, rgba(85, 101, 232, 0.12));
  border: 1px solid var(--accent, #5565e8);
  color: #e5e9f0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
}

.step-title {
  color: #e5e9f0;
  font-weight: 600;
  font-size: 14px;
}

.step-body {
  color: #8da2b8;
  font-size: 13px;
  line-height: 1.55;
}

.link-btn {
  border: 1px solid #1e2d3d;
  color: #e5e9f0;
  padding: 10px 14px;
  border-radius: 12px;
  background: linear-gradient(120deg, var(--accent-soft, rgba(85, 101, 232, 0.12)), rgba(0, 0, 0, 0.1));
  transition: transform 120ms ease, border-color 120ms ease;
}

.link-btn:hover {
  transform: translateY(-2px);
  border-color: var(--accent, #5565e8);
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
