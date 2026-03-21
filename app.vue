<template>
  <CursorGlow />
  <MobileMenu/>
  <AppHeader/>
  <NuxtPage />
  <AppFooter/>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  watch: {
    $route(to, from) {
      console.log('De', from.fullPath, 'a', to.fullPath);
    }
  },
  mounted() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s cubic-bezier(.16, 1, .3, 1),
              transform 0.35s cubic-bezier(.16, 1, .3, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
