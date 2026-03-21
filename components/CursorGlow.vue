<template>
  <div ref="glow" class="cursor-glow" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const glow = ref<HTMLElement>();
let curX = -200;
let curY = -200;
let targetX = -200;
let targetY = -200;
let raf = 0;
let isTouch = false;

function onMouseMove(e: MouseEvent) {
  if (isTouch) return;
  targetX = e.clientX;
  targetY = e.clientY;
}

function onTouchStart() {
  isTouch = true;
  if (glow.value) glow.value.style.opacity = "0";
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function animate() {
  curX = lerp(curX, targetX, 0.12);
  curY = lerp(curY, targetY, 0.12);
  if (glow.value) {
    glow.value.style.transform = `translate(${curX - 200}px, ${curY - 200}px)`;
  }
  raf = requestAnimationFrame(animate);
}

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove, { passive: true });
  window.addEventListener("touchstart", onTouchStart, { once: true, passive: true });
  raf = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  window.removeEventListener("mousemove", onMouseMove);
});
</script>

<style scoped>
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(67, 217, 173, 0.08) 0%,
    rgba(77, 91, 206, 0.04) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: screen;
  will-change: transform;
  transition: opacity 0.6s ease;
}
</style>
