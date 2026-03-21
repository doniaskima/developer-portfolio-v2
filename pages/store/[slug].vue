<template>
  <main id="store-detail" class="page flex flex-col overflow-hidden">
    <div v-if="item" class="flex flex-col flex-1 overflow-hidden">
      <section
        class="detail-hero relative overflow-hidden border-bot"
        :style="{ '--accent': item.accent, '--accent-soft': item.accentSoft }"
      >
        <div class="hero-veil hero-veil-a"></div>
        <div class="hero-veil hero-veil-b"></div>

        <div class="relative px-6 py-5 lg:px-10 lg:py-6 space-y-4">
          <div class="flex items-center justify-between gap-3 flex-wrap text-sm text-menu-text">
            <div class="flex items-center gap-3 flex-wrap">
              <NuxtLink to="/store" class="back-btn">
                <span aria-hidden="true">&larr;</span> {{ t('storeDetail.backAll') }}
              </NuxtLink>
              <div class="flex items-center gap-2 flex-wrap">
                <NuxtLink to="/store" class="crumb">{{ t('storeDetail.breadcrumb') }}</NuxtLink>
                <span class="sep">/</span>
                <span class="crumb active">{{ item.title }}</span>
              </div>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <span v-for="cat in item.categories" :key="cat" class="pill">{{ cat }}</span>
            </div>
          </div>

          <div class="hero-main">
            <div class="hero-icon" :style="{ background: item.accentSoft }">
              <component :is="iconMap[item.icon] || 'span'" />
            </div>

            <div class="space-y-3 hero-copy">
              <h1 class="text-white text-2xl lg:text-3xl font-fira_bold leading-snug">
                {{ item.title }}
              </h1>
              <p class="text-base text-menu-text leading-7 max-w-4xl">
                {{ item.shortDescription }}
              </p>
              <div class="hero-price-row">
                <span class="hero-price" v-if="item.price">{{ item.price }}</span>
                <span class="hero-setup" v-if="item.setupFee">{{ item.setupFee }}</span>
              </div>
              <div class="flex gap-3 flex-wrap pt-1">
                <a
                  href="mailto:doniaskima@doniacode.com?subject=Extension%20Inquiry"
                  class="cta-btn primary"
                >
                  {{ t('storeDetail.getInTouch') }}
                </a>
                <a href="#details" class="cta-btn secondary">{{ t('storeDetail.moreInfo') }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex-1 overflow-y-auto p-6 lg:p-10 detail-body detail-scroll" :style="{ '--accent': item.accent, '--accent-soft': item.accentSoft }">
        <!-- Highlights -->
        <div class="panel bracket-decor" v-if="item.highlights.length">
          <div class="panel-title">{{ t('storeDetail.highlights') }}</div>
          <ul class="highlight-list">
            <li v-for="(h, i) in item.highlights" :key="i">
              <span class="check-icon" aria-hidden="true">&#10003;</span>
              <span>{{ h }}</span>
            </li>
          </ul>
        </div>

        <!-- Details -->
        <div id="details" class="panel bracket-decor mt-6">
          <div class="panel-title">{{ t('storeDetail.details') }}</div>
          <p class="detail-text">{{ item.details }}</p>

          <div v-if="item.detailSections?.length" class="detail-sections">
            <div v-for="section in item.detailSections" :key="section.heading" class="detail-section">
              <h3 class="section-heading">{{ section.heading }}</h3>
              <p class="detail-text">{{ section.body }}</p>
            </div>
          </div>
        </div>

        <!-- Example -->
        <div class="panel mt-6" v-if="item.example">
          <div class="panel-title">{{ t('storeDetail.example') }}</div>
          <p class="detail-text">{{ item.example }}</p>
        </div>

        <!-- Standard Features -->
        <div class="panel bracket-decor mt-6" v-if="item.standardFeatures?.length">
          <div class="panel-title">{{ t('storeDetail.standardFeatures') }}</div>

          <div v-for="section in item.standardFeatures" :key="section.title" class="feature-block">
            <h3 class="feature-block-title">{{ section.title }}</h3>
            <ul class="feature-list">
              <li v-for="(f, i) in section.features" :key="i" class="feature-item">
                <span class="feature-label" v-if="f.field">{{ t('storeDetail.fieldLabel') }}: &ldquo;{{ f.field }}&rdquo;</span>
                <span class="feature-label" v-else-if="f.function">{{ t('storeDetail.functionLabel') }}: &ldquo;{{ f.function }}&rdquo;</span>
                <span class="feature-label status" v-else-if="f.status">
                  <span
                    class="status-dot"
                    :class="{
                      red: f.status === 'Red',
                      yellow: f.status === 'Yellow',
                      green: f.status === 'Green',
                    }"
                  ></span>
                  {{ t('storeDetail.statusLabel') }} &ldquo;{{ f.status }}&rdquo;
                </span>
                <span class="feature-desc">{{ f.description }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Note -->
        <div class="panel mt-6" v-if="item.note">
          <div class="panel-title">{{ t('storeDetail.note') }}</div>
          <p class="detail-text note-text">{{ item.note }}</p>
        </div>

        <!-- Setup fee -->
        <div class="panel mt-6" v-if="item.setupFee">
          <div class="panel-title">{{ t('storeDetail.setupFee') }}</div>
          <p class="detail-text">{{ item.setupFee }}</p>
        </div>
      </section>
    </div>

    <div
      v-else
      class="flex flex-1 items-center justify-center flex-col gap-3 p-8 text-menu-text"
    >
      <p class="text-xl text-white">{{ t('storeDetail.notFound') }}</p>
      <NuxtLink to="/store" class="cta-link">{{ t('storeDetail.backToStore') }}</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, h } from "vue";
import { getCustomizationBySlug } from "@/utils/customizations";

definePageMeta({
  pageTransition: { name: "project", mode: "out-in" },
});

const { t, locale } = useI18n();
const route = useRoute();
const item = computed(() => getCustomizationBySlug(route.params.slug as string, locale.value));

const PaletteIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "hero-icon-svg" }, [
    h("circle", { cx: "13.5", cy: "6.5", r: "0.5" }),
    h("circle", { cx: "17.5", cy: "10.5", r: "0.5" }),
    h("circle", { cx: "8.5", cy: "7.5", r: "0.5" }),
    h("circle", { cx: "6.5", cy: "12.5", r: "0.5" }),
    h("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" }),
  ]);

const SidebarIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "hero-icon-svg" }, [
    h("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
    h("line", { x1: "9", y1: "3", x2: "9", y2: "21" }),
  ]);

const BrainIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "hero-icon-svg" }, [
    h("path", { d: "M9.5 2A5.5 5.5 0 0 0 5 5.5a3 3 0 0 0-1 2.34A4.5 4.5 0 0 0 5.5 16H6v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h.5a4.5 4.5 0 0 0 1.5-8.16A3 3 0 0 0 19 5.5 5.5 5.5 0 0 0 14.5 2h-5z" }),
  ]);

const PaintbrushIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "hero-icon-svg" }, [
    h("path", { d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" }),
    h("path", { d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" }),
    h("path", { d: "M14.5 17.5 4.5 15" }),
  ]);

const LayersIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "hero-icon-svg" }, [
    h("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
    h("polyline", { points: "2 17 12 22 22 17" }),
    h("polyline", { points: "2 12 12 17 22 12" }),
  ]);

const MapPinIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "hero-icon-svg" }, [
    h("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
    h("circle", { cx: "12", cy: "10", r: "3" }),
  ]);

const iconMap: Record<string, any> = {
  palette: PaletteIcon,
  sidebar: SidebarIcon,
  brain: BrainIcon,
  paintbrush: PaintbrushIcon,
  layers: LayersIcon,
  "map-pin": MapPinIcon,
};
</script>

<style scoped>
#store-detail {
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

@media (min-width: 768px) {
  .hero-main {
    flex-direction: row;
    align-items: flex-start;
  }
}

.hero-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent, #5565e8);
  flex-shrink: 0;
}

.hero-icon-svg {
  width: 34px;
  height: 34px;
}

.hero-copy {
  flex: 1;
  min-width: 0;
}

.hero-price-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-price {
  color: #e5e9f0;
  font-size: 20px;
  font-weight: 700;
}

.hero-setup {
  color: #8da2b8;
  font-size: 13px;
}

.cta-btn {
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  transition: transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.cta-btn.primary {
  background: var(--accent, #5565e8);
  color: #0b1220;
  border: 1px solid var(--accent, #5565e8);
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.cta-btn.secondary {
  background: transparent;
  color: #e5e9f0;
  border: 1px solid #1e2d3d;
}

.cta-btn.secondary:hover {
  border-color: var(--accent, #5565e8);
  transform: translateY(-2px);
}

.back-btn {
  border: 1px solid #1e2d3d;
  background: #0b1420;
  color: #e5e9f0;
  padding: 6px 10px;
  border-radius: 9999px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: transform 120ms ease, border-color 120ms ease;
}

.back-btn:hover {
  border-color: var(--accent, #5565e8);
  transform: translateY(-1px);
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

.pill {
  border: 1px solid #1e2d3d;
  background: #0b1420;
  color: #cbd5e1;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 11px;
}

/* Body */
.detail-body {
  background: radial-gradient(circle at 10% 20%, var(--accent-soft, rgba(77, 91, 206, 0.08)), transparent 40%);
}

.detail-scroll {
  scrollbar-width: thin;
  scrollbar-color: #607b96 transparent;
}

.detail-scroll::-webkit-scrollbar {
  width: 14px;
  display: block;
}

.detail-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.detail-scroll::-webkit-scrollbar-thumb {
  background: #607b96;
  border-radius: 9999px;
  border: 3px solid transparent;
  background-clip: padding-box;
}

.panel {
  background: #0b1420;
  border: 1px solid #1e2d3d;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.panel-title {
  color: #607b96;
  font-size: 13px;
  font-family: 'Fira Code Retina', monospace;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
}

.panel-title::before {
  content: '// ';
  color: #546e7a;
}

.detail-text {
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.7;
}

.note-text {
  font-style: italic;
  color: #8da2b8;
}

/* Highlights */
.highlight-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.highlight-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.6;
}

.check-icon {
  color: var(--accent, #43d9ad);
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Detail sections */
.detail-sections {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-heading {
  color: #e5e9f0;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 6px;
}

/* Feature blocks */
.feature-block {
  margin-top: 18px;
  border-top: 1px solid #1e2d3d;
  padding-top: 16px;
}

.feature-block-title {
  color: #e5e9f0;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: #cbd5e1;
  line-height: 1.5;
  padding: 6px 0;
  border-bottom: 1px solid #1e2d3d22;
}

.feature-label {
  color: #e5e9f0;
  font-weight: 600;
  min-width: 200px;
  flex-shrink: 0;
}

.feature-label.status {
  display: flex;
  align-items: center;
  gap: 6px;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  flex-shrink: 0;
}

.status-dot.red {
  background: #ef4444;
}

.status-dot.yellow {
  background: #eab308;
}

.status-dot.green {
  background: #22c55e;
}

.feature-desc {
  color: #a5b9d2;
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

@media (max-width: 767px) {
  .feature-item {
    flex-direction: column;
    gap: 2px;
  }

  .feature-label {
    min-width: unset;
  }
}
</style>
