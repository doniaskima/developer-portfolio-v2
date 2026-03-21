<template>
  <main id="store" class="page flex flex-col overflow-y-auto">
    <section class="relative overflow-hidden border-bot compact-hero">
      <div class="hero-glow hero-glow-a"></div>
      <div class="hero-glow hero-glow-b"></div>

      <div class="relative px-6 py-4 lg:px-10 lg:py-5">
        <p class="comment-header">{{ t('store.header') }}</p>
        <div class="flex items-center justify-between gap-3 flex-wrap text-xs text-menu-text">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="pill">{{ filteredCustomizations.length }} {{ t('store.found') }}</span>
            <span class="pill" v-if="activeCategory">{{ activeCategory }}</span>
            <span class="pill" v-else>{{ t('store.allCategories') }}</span>
          </div>

          <div class="flex items-center gap-3">
            <label for="sort" class="text-menu-text text-xs">{{ t('store.sortedBy') }}</label>
            <select
              id="sort"
              v-model="sortBy"
              class="sort-select"
            >
              <option value="name">{{ t('store.sortName') }}</option>
              <option value="price">{{ t('store.sortPrice') }}</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section class="flex-1 overflow-hidden px-6 pb-16 lg:px-10">
      <div class="flex flex-col lg:flex-row gap-6 h-full">
        <aside class="filter-panel border">
          <div class="filter-header">
            <div>
              <p class="text-xs uppercase tracking-[0.18em] text-menu-text">{{ t('store.categoriesTitle') }}</p>
              <p class="text-white font-semibold text-sm">{{ categories.length }} {{ t('store.categoriesCount') }}</p>
            </div>
          </div>

          <div class="filter-chips">
            <button
              v-for="cat in categories"
              :key="cat"
              class="filter-chip"
              :class="{ active: activeCategory === cat }"
              @click="toggleCategory(cat)"
            >
              <span class="dot" aria-hidden="true"></span>
              <span>{{ cat }}</span>
            </button>
          </div>

          <button v-if="activeCategory" class="clear-btn" @click="activeCategory = ''">
            {{ t('store.resetFilter') }}
          </button>
        </aside>

        <div class="flex-1 overflow-auto store-scroll">
          <div class="category-tags">
            <button
              v-for="cat in categories"
              :key="cat"
              class="cat-tag"
              :class="{ active: activeCategory === cat }"
              @click="toggleCategory(cat)"
            >
              {{ cat }}
            </button>
          </div>

          <div v-if="filteredCustomizations.length === 0" class="empty-state">
            <div class="text-3xl pb-2">X__X</div>
            <p class="text-white text-lg">{{ t('store.noExtensions') }}</p>
            <button class="clear-btn mt-3" @click="activeCategory = ''">{{ t('store.resetFilter') }}</button>
          </div>

          <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <NuxtLink
              v-for="(item, idx) in filteredCustomizations"
              :key="item.slug"
              :to="`/store/${item.slug}`"
              v-tilt
              v-reveal="idx"
              class="store-card group"
              :style="{
                '--accent': item.accent,
                '--accent-soft': item.accentSoft,
              }"
            >
              <div class="card-icon-row">
                <div class="card-icon" :style="{ background: item.accentSoft }">
                  <component :is="iconMap[item.icon] || 'span'" />
                </div>
                <span v-if="item.badge" class="card-badge">{{ item.badge }}</span>
              </div>

              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-subtitle">{{ item.subtitle }}</p>
              <p class="card-desc">{{ item.shortDescription }}</p>

              <div class="card-footer">
                <span class="card-price" v-if="item.price">{{ item.price }}</span>
                <span class="card-price-note" v-if="item.priceNote">{{ item.priceNote }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, h } from "vue";
import { getAllCustomizations, getAllCategories } from "@/utils/customizations";
import type { CustomizationCategory } from "@/utils/customizations";
import { vTilt } from "@/composables/useTilt";
import { vReveal } from "@/directives/reveal";

definePageMeta({
  pageTransition: { name: "project", mode: "out-in" },
});

const { t, locale } = useI18n();
const activeCategory = ref<CustomizationCategory | "">("");
const sortBy = ref("name");

const allCustomizations = computed(() => getAllCustomizations(locale.value));
const categories = getAllCategories();

const filteredCustomizations = computed(() => {
  let items = [...allCustomizations.value];
  if (activeCategory.value) {
    items = items.filter((c) => c.categories.includes(activeCategory.value as CustomizationCategory));
  }
  if (sortBy.value === "name") {
    items.sort((a, b) => a.title.localeCompare(b.title));
  }
  return items;
});

function toggleCategory(cat: CustomizationCategory) {
  activeCategory.value = activeCategory.value === cat ? "" : cat;
}

const PaletteIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "icon-svg" }, [
    h("circle", { cx: "13.5", cy: "6.5", r: "0.5" }),
    h("circle", { cx: "17.5", cy: "10.5", r: "0.5" }),
    h("circle", { cx: "8.5", cy: "7.5", r: "0.5" }),
    h("circle", { cx: "6.5", cy: "12.5", r: "0.5" }),
    h("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" }),
  ]);

const SidebarIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "icon-svg" }, [
    h("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
    h("line", { x1: "9", y1: "3", x2: "9", y2: "21" }),
  ]);

const BrainIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "icon-svg" }, [
    h("path", { d: "M9.5 2A5.5 5.5 0 0 0 5 5.5a3 3 0 0 0-1 2.34A4.5 4.5 0 0 0 5.5 16H6v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h.5a4.5 4.5 0 0 0 1.5-8.16A3 3 0 0 0 19 5.5 5.5 5.5 0 0 0 14.5 2h-5z" }),
  ]);

const PaintbrushIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "icon-svg" }, [
    h("path", { d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" }),
    h("path", { d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" }),
    h("path", { d: "M14.5 17.5 4.5 15" }),
  ]);

const LayersIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "icon-svg" }, [
    h("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
    h("polyline", { points: "2 17 12 22 22 17" }),
    h("polyline", { points: "2 12 12 17 22 12" }),
  ]);

const MapPinIcon = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "icon-svg" }, [
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
#store {
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
  background: radial-gradient(circle at 40% 40%, #fea55f55, transparent 60%);
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

.sort-select {
  background: #0b1420;
  border: 1px solid #1e2d3d;
  color: #cbd5e1;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  outline: none;
}

.sort-select:focus {
  border-color: #43d9ad;
}

/* Filter panel */
.filter-panel {
  min-width: 240px;
  max-width: 260px;
  background: #0c1421;
  border-radius: 16px;
  padding: 14px;
  display: none;
  flex-direction: column;
  gap: 12px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
}

@media (min-width: 1024px) {
  .filter-panel {
    display: flex;
    position: sticky;
    top: 80px;
    align-self: flex-start;
  }
}

.filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-chips {
  display: flex;
  gap: 8px;
  flex-direction: column;
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
  text-align: left;
}

.filter-chip .dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #607b96;
  flex-shrink: 0;
}

.filter-chip.active {
  border-color: #43d9ad;
  color: #e5e9f0;
  transform: translateY(-1px);
}

.filter-chip.active .dot {
  background: #43d9ad;
}

/* Category tags row (mobile + desktop top bar) */
.category-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-top: 8px;
}

@media (min-width: 1024px) {
  .category-tags {
    display: none;
  }
}

.cat-tag {
  border: 1px solid #1e2d3d;
  background: #0c1727;
  color: #cbd5e1;
  font-size: 12px;
  padding: 8px 14px;
  border-radius: 9999px;
  transition: all 150ms ease;
}

.cat-tag.active {
  background: #43d9ad22;
  border-color: #43d9ad;
  color: #e5e9f0;
}

.clear-btn {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #1e2d3d;
  background: #0b1420;
  color: #e99287;
  font-size: 12px;
}

.empty-state {
  border: 1px dashed #1e2d3d;
  padding: 24px;
  border-radius: 14px;
  text-align: center;
  color: #cbd5e1;
}

/* Store card */
.store-card {
  position: relative;
  border: 1px solid #223349;
  border-radius: 18px;
  padding: 20px;
  background: linear-gradient(160deg, #0d1727 0%, #0e1a2d 45%, #0b1322 100%);
  overflow: hidden;
  transition: transform 150ms ease, box-shadow 180ms ease, border-color 180ms ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.store-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 15%, var(--accent-soft, rgba(85, 101, 232, 0.12)), transparent 45%);
  opacity: 0.9;
  pointer-events: none;
  transition: opacity 160ms ease;
  z-index: 0;
}

.store-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent, #5565e8);
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.45), 0 0 0 1px var(--accent-soft);
}

.store-card > * {
  position: relative;
  z-index: 1;
}

.card-icon-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent, #5565e8);
  flex-shrink: 0;
}

.icon-svg {
  width: 22px;
  height: 22px;
}

.card-badge {
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 9999px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.card-title {
  color: #e5e9f0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
}

.card-subtitle {
  color: #8da2b8;
  font-size: 13px;
}

.card-desc {
  color: #a5b9d2;
  font-size: 13px;
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid #1e2d3d;
  margin-top: auto;
}

.card-price {
  color: #e5e9f0;
  font-size: 14px;
  font-weight: 600;
}

.card-price-note {
  color: #607b96;
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.store-scroll {
  scrollbar-width: thin;
  scrollbar-color: #607b96 transparent;
}

.store-scroll::-webkit-scrollbar {
  width: 14px;
  display: block;
}

.store-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.store-scroll::-webkit-scrollbar-thumb {
  background: #607b96;
  border-radius: 9999px;
  border: 3px solid transparent;
  background-clip: padding-box;
}

.store-scroll::-webkit-scrollbar-thumb:hover {
  background: #7b9bbb;
}
</style>
