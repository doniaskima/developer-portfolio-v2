<template>
  <footer class="status-bar border-top font-fira_retina text-menu-text">
    <div class="status-left">
      <span class="status-segment branch-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
        main
      </span>
      <span class="status-segment route-path">
        ~/portfolio{{ currentPath }}
      </span>
      <span class="status-segment lang-badge">TypeScript</span>
      <span class="status-segment encoding-badge hidden md:inline-flex">UTF-8</span>
    </div>

    <div class="status-right">
      <span class="status-segment find-label">{{ t('footer.findMeIn') }}</span>
      <NuxtLink
        :to="social.github.url + social.github.user"
        target="_blank"
        class="status-segment github-link"
      >
        @{{ social.github.user }}
        <img src="/icons/social/github.svg" alt="GitHub" />
      </NuxtLink>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentPath() {
      const path = this.$route.path;
      if (path === '/') return '/index';
      return path;
    },
  },
  setup() {
    const { t, devConfig } = useI18n();
    return {
      social: useRuntimeConfig().dev.contacts.social,
      t,
    };
  },
};
</script>

<style scoped>
.status-bar {
  height: 40px;
  min-height: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  overflow: hidden;
}

.status-left,
.status-right {
  display: flex;
  align-items: center;
  height: 100%;
}

.status-segment {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
  height: 100%;
  border-right: 1px solid #1e2d3d;
  white-space: nowrap;
  transition: background 150ms ease, color 150ms ease;
}

.status-right .status-segment {
  border-right: none;
  border-left: 1px solid #1e2d3d;
}

.branch-badge {
  color: #43d9ad;
}

.branch-badge svg {
  flex-shrink: 0;
}

.route-path {
  color: #8da2b8;
  font-family: 'Fira Code Retina', monospace;
}

.lang-badge {
  color: #fea55f;
}

.encoding-badge {
  color: #607b96;
}

.find-label {
  color: #607b96;
}

.github-link {
  color: #e5e9f0;
  text-decoration: none;
}

.github-link img {
  width: 16px;
  height: 16px;
  opacity: 0.6;
  transition: opacity 150ms ease;
}

.github-link:hover {
  background: #1e2d3d74;
  color: white;
}

.github-link:hover img {
  opacity: 1;
}

.status-segment:hover {
  background: #1e2d3d74;
}

@media (max-width: 768px) {
  .status-bar {
    height: 50px;
    min-height: 50px;
    font-size: 13px;
  }

  .route-path,
  .lang-badge {
    display: none;
  }
}
</style>
