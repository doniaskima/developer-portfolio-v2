<template>
  <main id="blog-detail" class="page flex flex-col overflow-hidden">
    <div v-if="post" class="flex flex-col flex-1 overflow-hidden">
      <section
        class="detail-hero relative overflow-hidden border-bot"
        :style="{ '--accent': post.accent, '--accent-soft': post.accentSoft }"
      >
        <div class="hero-veil hero-veil-a"></div>
        <div class="hero-veil hero-veil-b"></div>

        <div class="relative px-6 py-5 lg:px-10 lg:py-6 space-y-4">
          <div class="flex items-center justify-between gap-3 flex-wrap text-sm text-menu-text">
            <div class="flex items-center gap-3 flex-wrap">
              <NuxtLink to="/blog" class="back-btn">
                <span aria-hidden="true">&larr;</span> {{ t('blogDetail.backAll') }}
              </NuxtLink>
              <div class="flex items-center gap-2 flex-wrap">
                <NuxtLink to="/blog" class="crumb">{{ t('blogDetail.breadcrumb') }}</NuxtLink>
                <span class="sep">/</span>
                <span class="crumb active line-clamp-1 max-w-[min(100%,280px)]">{{ post.title }}</span>
              </div>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
              <span v-for="tag in post.tags" :key="tag" class="pill">{{ tag }}</span>
            </div>
          </div>

          <div class="hero-main">
            <div class="hero-meta">
              <time :datetime="post.publishedAt" class="hero-date">{{ formatDate(post.publishedAt) }}</time>
              <span v-if="post.readingMinutes" class="hero-read">
                {{ post.readingMinutes }} {{ t('blog.minRead') }}
              </span>
            </div>
            <div class="space-y-3 hero-copy">
              <h1 class="text-white text-2xl lg:text-3xl font-fira_bold leading-snug">
                {{ post.title }}
              </h1>
              <p class="text-base text-menu-text leading-7 max-w-4xl">
                {{ post.excerpt }}
              </p>
              <div v-if="post.canonicalUrl" class="flex gap-3 flex-wrap pt-1">
                <a :href="post.canonicalUrl" class="cta-btn primary" rel="noopener noreferrer" target="_blank">
                  {{ t('blogDetail.readOriginal') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article
        class="flex-1 overflow-y-auto p-6 lg:p-10 detail-body detail-scroll"
        :style="{ '--accent': post.accent, '--accent-soft': post.accentSoft }"
      >
        <div class="panel max-w-3xl">
          <div class="panel-title">{{ t('blogDetail.article') }}</div>
          <div class="prose-flow">
            <p v-for="(para, i) in post.body" :key="i" class="detail-text">
              {{ para }}
            </p>
          </div>
        </div>

        <div class="mt-8 max-w-3xl">
          <NuxtLink to="/blog" class="cta-link">{{ t('blogDetail.backToBlog') }}</NuxtLink>
        </div>
      </article>
    </div>

    <div v-else class="flex flex-1 items-center justify-center flex-col gap-3 p-8 text-menu-text">
      <p class="text-xl text-white">{{ t('blogDetail.notFound') }}</p>
      <NuxtLink to="/blog" class="cta-link">{{ t('blogDetail.backToBlog') }}</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getPostBySlug } from "@/utils/blogs";

definePageMeta({
  pageTransition: { name: "project", mode: "out-in" },
});

const { t, locale } = useI18n();
const route = useRoute();
const post = computed(() => getPostBySlug(route.params.slug as string, locale.value));

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat(locale.value === "de" ? "de-DE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
</script>

<style scoped>
#blog-detail {
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
    gap: 28px;
  }
}

.hero-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}

.hero-date {
  color: #8da2b8;
  font-size: 13px;
  font-family: "Fira Code Retina", monospace;
}

.hero-read {
  color: var(--accent, #43d9ad);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.hero-copy {
  flex: 1;
  min-width: 0;
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
  font-family: "Fira Code Retina", monospace;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
}

.panel-title::before {
  content: "// ";
  color: #546e7a;
}

.prose-flow {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.detail-text {
  color: #cbd5e1;
  font-size: 15px;
  line-height: 1.75;
}

.cta-link {
  border: 1px solid #1e2d3d;
  color: #e5e9f0;
  padding: 8px 14px;
  border-radius: 10px;
  display: inline-block;
  background: linear-gradient(120deg, rgba(85, 101, 232, 0.18), rgba(67, 217, 173, 0.12));
  transition: transform 150ms ease, border-color 150ms ease;
}

.cta-link:hover {
  border-color: #43d9ad;
  transform: translateY(-2px);
}
</style>
