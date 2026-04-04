<template>
  <main v-if="!loading" id="hello">
    <!-- gradients -->
    <div class="css-blurry-gradient-blue"></div>
    <div class="css-blurry-gradient-green"></div>

    <section class="hero">
      <div class="terminal-block">
        <div class="term-line stagger stagger-1">
          <span class="line-num">1</span>
          <span class="term-prompt">$</span>
          <span class="term-cmd">{{ t('hero.cmdWhoami') }}</span>
        </div>
        <div class="term-line name-line stagger stagger-2">
          <span class="line-num">2</span>
          <h1
            class="gradient-name"
            :style="{
              background: 'linear-gradient(270deg, #43d9ad, #4d5bce, #fea55f, #e99287, #43d9ad)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }"
          >{{ devConfig.name }}</h1>
        </div>
        <div class="term-line stagger stagger-3">
          <span class="line-num">3</span>
          <span class="term-prompt">$</span>
          <span class="term-cmd">{{ t('hero.cmdCatRole') }}</span>
        </div>
        <div class="term-line role-line stagger stagger-3">
          <span class="line-num">4</span>
          <span class="term-output">&gt;&nbsp;</span>
          <h2 class="role-heading">
            {{ devConfig.role }}<span class="role-cursor" aria-hidden="true">|</span>
          </h2>
        </div>
        <div class="term-line stagger stagger-4 game-comment-gap">
          <span class="line-num">5</span>
          <span class="term-comment">{{ t('hero.commentGame') }}</span>
        </div>
        <div class="term-line stagger stagger-4" :class="{ hide: isMobile }">
          <span class="line-num">6</span>
          <span class="term-comment">{{ t('hero.commentGithub') }}</span>
        </div>
        <div class="term-line stagger stagger-4" :class="{ hide: !isMobile }">
          <span class="line-num">6</span>
          <span class="term-comment">{{ t('hero.commentGithubMobile') }}</span>
        </div>
        <div class="term-line stagger stagger-5">
          <span class="line-num">7</span>
          <span class="code">
            <span class="identifier">const </span>
            <span class="variable-name">githubLink </span>
            <span class="operator">= </span>
            <a
              class="string"
              :href="'https://github.com/' + devConfig.contacts.social.github.user"
            >"https://github.com/{{ devConfig.contacts.social.github.user }}"</a>
          </span>
        </div>
        <div class="term-line stagger stagger-6">
          <span class="line-num">8</span>
          <span class="term-prompt">$</span>
          <span class="cursor-blink"></span>
        </div>
      </div>
    </section>

    <section data-aos="fade-up" class="game" v-if="!isMobile">
      <SnakeGame />
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const { t, devConfig } = useI18n();

const isMobile = ref(false);
const loading = ref(false);

onMounted(() => {
  if (window.innerWidth <= 1024) isMobile.value = true;
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

function handleResize() {
  if (window.innerWidth <= 1024) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
}
</script>

<style scoped>
#hello {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  padding-left: 275px;
  padding-right: 1.25rem;
  gap: 1.5rem;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: stretch;
}

.hero {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.game {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  height: 100%;
  justify-content: center;
  z-index: 20;
}

.terminal-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 2rem;
}

.term-line {
  display: flex;
  align-items: baseline;
  font-family: "Fira Code Retina";
  font-size: 14px;
  min-height: 1.6em;
}

.term-prompt {
  color: #43d9ad;
  margin-right: 8px;
  font-weight: 600;
}

.term-cmd {
  color: #e5e9f0;
}

.term-output {
  color: #4d5bce;
  font-size: 32px;
  line-height: 1;
  font-family: "Fira Code Retina";
}

.term-comment {
  color: #607b96;
  font-style: normal;
}

.name-line {
  padding: 0.6rem 0;
}

.name-line h1 {
  font-size: 58px;
  line-height: 1;
  font-family: "Fira Code Regular";
}

.role-line {
  margin-bottom: 0.25rem;
  align-items: flex-start;
}

.role-heading {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 32px;
  line-height: 1.25;
  color: #4d5bce;
  font-family: "Fira Code Retina";
  font-weight: 400;
  overflow-wrap: break-word;
  word-break: break-word;
}

.role-cursor {
  color: rgba(255, 255, 255, 0.75);
  animation: blinkTextCursor 800ms steps(1) infinite;
}

/* Breathing room between role and “complete the game” comment */
.game-comment-gap {
  margin-top: 1.25rem;
  padding-top: 0.35rem;
}

.code {
  font-family: "Fira Code Medium";
  color: #e5e9f0;
}

.code .identifier {
  color: #4d5bce;
}

.code .variable-name {
  color: #43d9ad;
}

.code .operator {
  color: white;
}

.code .string {
  color: #e99287;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

.hide {
  display: none;
}

.css-blurry-gradient-blue {
  position: fixed;
  bottom: 25%;
  right: 5%;
  width: 300px;
  height: 300px;
  border-radius: 0% 0% 50% 50%;
  rotate: 10deg;
  filter: blur(70px);
  background: radial-gradient(
    circle at 50% 50%,
    rgba(77, 91, 206, 1),
    rgba(76, 0, 255, 0)
  );
  opacity: 0.5;
  z-index: 10;
}

.css-blurry-gradient-green {
  position: absolute;
  top: 20%;
  right: 30%;
  width: 300px;
  height: 300px;
  border-radius: 0% 50% 0% 50%;
  filter: blur(70px);
  background: radial-gradient(
    circle at 50% 50%,
    rgba(67, 217, 173, 1),
    rgba(76, 0, 255, 0)
  );
  opacity: 0.5;
  z-index: 10;
}

#info {
  font-size: 14px;
}

/* Gradient Name: styles moved to unscoped block below */

/* Staggered Entrance */
.stagger {
  opacity: 0;
  transform: translateY(18px);
  animation: staggerIn 0.6s cubic-bezier(.16, 1, .3, 1) forwards;
}

.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.3s; }
.stagger-3 { animation-delay: 0.55s; }
.stagger-4 { animation-delay: 0.8s; }
.stagger-5 { animation-delay: 0.95s; }
.stagger-6 { animation-delay: 1.1s; }

@keyframes staggerIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blinkTextCursor {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

/* mobile */
@media (max-width: 768px) {
  #hello {
    padding-left: 0;
  }

  .hero {
    margin: 1.75rem;
  }

  .terminal-block {
    padding-top: 2rem;
  }

  .name-line h1 {
    font-size: 36px;
  }

  .role-heading {
    font-size: 20px;
    color: #43d9ad;
  }

  .term-output {
    font-size: 20px;
  }

  .line-num {
    display: none;
  }
}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  #hello {
    padding-left: 0;
  }

  .hero {
    margin: 1.75rem;
  }

  .terminal-block {
    padding-top: 2rem;
  }
}

@media (min-width: 1024px) and (max-width: 1320px) {
  #hello {
    padding-left: 135px;
  }
}

/* LG */

@media (min-width: 1024px) {
  .css-blurry-gradient-blue {
    position: fixed;
    bottom: 10%;
    right: 10%;
    width: 500px;
    height: 500px;
    opacity: 0.7;
    border-radius: 100% 50% 100% 0%;
  }

  .css-blurry-gradient-green {
    position: fixed;
    top: 10%;
    right: 35%;
    filter: blur(100px);
    rotate: 10deg;
    width: 400px;
    height: 400px;
    opacity: 0.5;
    border-radius: 100% 0% 0% 0%;
    rotate: 20deg;
  }
}

@media (min-width: 1920px) {
  #hello {
    padding-left: 310px;
  }
  #hello .head h1 {
    font-size: 62px;
  }
}
</style>

<style>
.gradient-name {
  animation: gradientShift 6s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
