<template>
  <main id="blog" class="page flex flex-col overflow-y-auto">
    <section class="relative overflow-hidden border-bot compact-hero">
      <div class="hero-glow hero-glow-a"></div>
      <div class="hero-glow hero-glow-b"></div>

      <div class="relative px-6 py-4 lg:px-10 lg:py-5">
        <p class="comment-header">{{ t('blog.header') }}</p>
        <div class="flex items-center justify-between gap-3 flex-wrap text-xs text-menu-text">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="pill">{{ filteredPosts.length }} {{ t('blog.found') }}</span>
            <span class="pill" v-if="activeTag">{{ activeTag }}</span>
            <span class="pill" v-else>{{ t('blog.allTags') }}</span>
          </div>

          <div class="flex items-center gap-3">
            <label for="blog-sort" class="text-menu-text text-xs">{{ t('blog.sortedBy') }}</label>
            <select id="blog-sort" v-model="sortBy" class="sort-select">
              <option value="date">{{ t('blog.sortDate') }}</option>
              <option value="title">{{ t('blog.sortTitle') }}</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section class="flex-1 overflow-hidden px-6 pt-6 pb-16 lg:px-10 lg:pt-8">
      <div class="flex flex-col lg:flex-row gap-6 h-full">
        <aside class="filter-panel border">
          <div class="filter-header">
            <div>
              <p class="text-xs uppercase tracking-[0.18em] text-menu-text">{{ t('blog.tagsTitle') }}</p>
              <p class="text-white font-semibold text-sm">{{ tags.length }} {{ t('blog.tagsCount') }}</p>
            </div>
          </div>

          <div class="filter-chips">
            <button
              v-for="tag in tags"
              :key="tag"
              class="filter-chip"
              :class="{ active: activeTag === tag }"
              @click="toggleTag(tag)"
            >
              <span class="dot" aria-hidden="true"></span>
              <span>{{ tag }}</span>
            </button>
          </div>

          <button v-if="activeTag" class="clear-btn" @click="activeTag = ''">
            {{ t('blog.resetFilter') }}
          </button>
        </aside>

        <div class="flex-1 overflow-auto blog-scroll">
          <div class="tag-row">
            <button
              v-for="tag in tags"
              :key="tag"
              class="cat-tag"
              :class="{ active: activeTag === tag }"
              @click="toggleTag(tag)"
            >
              {{ tag }}
            </button>
          </div>

          <div v-if="filteredPosts.length === 0" class="empty-state">
            <div class="text-3xl pb-2">X__X</div>
            <p class="text-white text-lg">{{ t('blog.noPosts') }}</p>
            <button class="clear-btn mt-3" @click="activeTag = ''">{{ t('blog.resetFilter') }}</button>
          </div>

          <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <NuxtLink
              v-for="(post, idx) in filteredPosts"
              :key="post.slug"
              :to="`/blog/${post.slug}`"
              v-tilt
              v-reveal="idx"
              class="blog-card group"
              :style="{
                '--accent': post.accent,
                '--accent-soft': post.accentSoft,
              }"
            >
              <div class="card-meta">
                <time :datetime="post.publishedAt" class="card-date">{{ formatDate(post.publishedAt) }}</time>
                <span v-if="post.readingMinutes" class="card-read">{{ post.readingMinutes }} {{ t('blog.minRead') }}</span>
              </div>
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-desc">{{ post.excerpt }}</p>
              <div class="card-tags">
                <span v-for="t in post.tags" :key="t" class="mini-tag">{{ t }}</span>
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
import { getAllPosts, getAllBlogTags } from "@/utils/blogs";
import { vTilt } from "@/composables/useTilt";
import { vReveal } from "@/directives/reveal";

definePageMeta({
  pageTransition: { name: "project", mode: "out-in" },
});

const { t, locale } = useI18n();
const activeTag = ref("");
const sortBy = ref<"date" | "title">("date");

const allPosts = computed(() => getAllPosts(locale.value));
const tags = getAllBlogTags();

const filteredPosts = computed(() => {
  let items = [...allPosts.value];
  if (activeTag.value) {
    items = items.filter((p) => p.tags.includes(activeTag.value));
  }
  if (sortBy.value === "title") {
    items.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    items.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }
  return items;
});

function toggleTag(tag: string) {
  activeTag.value = activeTag.value === tag ? "" : tag;
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat(locale.value === "de" ? "de-DE" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
</script>

<style scoped>
#blog {
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
  background: radial-gradient(circle at 40% 40%, #7c9ef055, transparent 60%);
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

.tag-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-top: 8px;
}

@media (min-width: 1024px) {
  .tag-row {
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

.blog-card {
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
  gap: 12px;
}

.blog-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 15%, var(--accent-soft, rgba(85, 101, 232, 0.12)), transparent 45%);
  opacity: 0.9;
  pointer-events: none;
  transition: opacity 160ms ease;
  z-index: 0;
}

.blog-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent, #5565e8);
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.45), 0 0 0 1px var(--accent-soft);
}

.blog-card > * {
  position: relative;
  z-index: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}

.card-date {
  color: #607b96;
  font-size: 12px;
  font-family: "Fira Code Retina", monospace;
}

.card-read {
  color: var(--accent, #43d9ad);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.card-title {
  color: #e5e9f0;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.35;
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

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 4px;
  border-top: 1px solid #1e2d3d;
  margin-top: auto;
}

.mini-tag {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #8da2b8;
  border: 1px solid #1e2d3d;
  padding: 4px 8px;
  border-radius: 9999px;
  background: #0b1420;
}

.blog-scroll {
  scrollbar-width: thin;
  scrollbar-color: #607b96 transparent;
}

.blog-scroll::-webkit-scrollbar {
  width: 14px;
  display: block;
}

.blog-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.blog-scroll::-webkit-scrollbar-thumb {
  background: #607b96;
  border-radius: 9999px;
  border: 3px solid transparent;
  background-clip: padding-box;
}

.blog-scroll::-webkit-scrollbar-thumb:hover {
  background: #7b9bbb;
}
</style>
