<template>
    <header id="navbar" class="w-full hidden lg:flex flex-col">
      <nav class="w-full flex justify-between border-bot">
        <github-corner url="https://github.com/doniaskima" />
          <div class="flex">
            <NuxtLink id="nav-logo" to="/">
              {{ devConfig.logo_name }}
            </NuxtLink>

            <NuxtLink id="nav-link" to="/" :class="{ active: isActive('/') }">
              {{ t('nav.hello') }}
            </NuxtLink>
  
            <NuxtLink id="nav-link" to="/about-me" :class="{ active: isActive('/about-me') }">
              {{ t('nav.aboutMe') }}
            </NuxtLink>
  
            <NuxtLink id="nav-link" to="/projects" :class="{ active: isActive('/projects') }">
              {{ t('nav.projects') }}
            </NuxtLink>
  
            <NuxtLink id="nav-link" to="/store" :class="{ active: isActive('/store') }">
              {{ t('nav.store') }}
            </NuxtLink>
          </div>

          <div class="flex items-center">
            <button id="nav-link" class="locale-toggle" @click="toggleLocale()">
              {{ locale === 'en' ? 'DE' : 'EN' }}
            </button>
            <NuxtLink id="nav-link-contact" to="/contact-me" :class="{ active: isActive('/contact-me')}">
              {{ t('nav.contactMe') }}
            </NuxtLink>
          </div>
      
      </nav>

    </header>

</template>

<script>
import GithubCorner from './GithubCorner.vue';
export default {
  name: 'AppHeader',
  components: {
    GithubCorner
  },
  computed: {
    isActive() {
      return route => {
        if (route === '/projects') {
          return this.$route.path.startsWith('/projects');
        }
        if (route === '/store') {
          return this.$route.path.startsWith('/store');
        }
        return this.$route.path === route;
      };
    }
  },
  setup() {
    const config = useRuntimeConfig()
    const { t, locale, toggleLocale, devConfig } = useI18n()

    return {
      config, t, locale, toggleLocale, devConfig
    }
  },
};

</script>

<style>

#nav-link {
  border-right: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-link-contact {
  border-left: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-link:hover, #nav-link-contact:hover, .locale-toggle:hover {
  background-color: #1e2d3d74;
  color: white;
}

.locale-toggle {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #43d9ad;
  cursor: pointer;
  background: none;
  border: none;
  transition: color 150ms ease;
}

#nav-logo {
  border-right: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-logo:hover {
  background-color: #1e2d3d74;
  color: white;
}

#nav-link.router-link-active, #nav-link-contact.router-link-active {
  border-bottom: 2px solid #FEA55F;
  color: white;
}

#nav-logo.router-link-active {
  border-right: 1px solid #1E2D3D;
  border-bottom: none;
  @apply text-menu-text;
}

#navbar > nav {
  height: 45px;
  font-size: 13px;
}

</style>
