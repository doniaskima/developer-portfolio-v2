import { type Directive } from "vue";

const STAGGER_MS = 80;

export const vReveal: Directive<HTMLElement> = {
  mounted(el, binding) {
    const index = typeof binding.value === "number" ? binding.value : 0;
    const delay = index * STAGGER_MS;

    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.5s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.5s cubic-bezier(.16,1,.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);

    (el as any)._revealCleanup = () => observer.disconnect();
  },

  unmounted(el) {
    (el as any)._revealCleanup?.();
  },
};
