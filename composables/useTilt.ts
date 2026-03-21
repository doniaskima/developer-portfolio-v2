import { type Directive } from "vue";

const MAX_TILT = 8;
const PERSPECTIVE = 800;
const TRANSITION_MS = 400;
const GLARE_OPACITY = 0.07;

export const vTilt: Directive<HTMLElement> = {
  mounted(el) {
    el.style.transformStyle = "preserve-3d";
    el.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(.03,.98,.52,.99)`;

    const glare = document.createElement("div");
    Object.assign(glare.style, {
      position: "absolute",
      inset: "0",
      borderRadius: "inherit",
      pointerEvents: "none",
      zIndex: "10",
      opacity: "0",
      transition: `opacity ${TRANSITION_MS}ms ease`,
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
    });
    el.style.position = el.style.position || "relative";
    el.appendChild(glare);

    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateY = cx * MAX_TILT * 2;
      const rotateX = -cy * MAX_TILT * 2;

      el.style.transition = "none";
      el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      glare.style.opacity = String(GLARE_OPACITY + Math.abs(cx) * 0.12);
    }

    function onLeave() {
      el.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(.03,.98,.52,.99)`;
      el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      glare.style.opacity = "0";
    }

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);

    (el as any)._tiltCleanup = () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      glare.remove();
    };
  },

  unmounted(el) {
    (el as any)._tiltCleanup?.();
  },
};
