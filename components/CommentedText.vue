<template>
  <div class="code-container flex font-fira_retina text-menu-text">
    <div class="line-numbers lg:flex flex-col w-32 hidden">

      <!-- line numbers and asteriscs -->
      <div v-for="n in lines" class="grid grid-cols-2 justify-end" :key="n">
        <span class="col-span-1 mr-3">{{ n }}</span>
        <div v-if="n == 1" class="col-span-1 flex justify-center">/**</div>
        <div class="col-span-1 flex justify-center" v-if="n > 1 && n < lines">*</div>
        <div class="col-span-1 flex justify-center pl-2" v-if="n == lines">*/</div>
      </div>
    </div>

    <!-- text (div: v-html may include block nodes, e.g. bio image) -->
    <div class="text-container">
      <div class="text-container-inner" v-html="text"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lines: 0
    };
  },
  mounted() {
    this.updateLines();
    window.addEventListener("resize", this.updateLines);
    window.addEventListener("click", this.updateLines);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateLines);
    window.removeEventListener("click", this.updateLines);
  },
  methods: {
    updateLines() {
      const textContainer = this.$el.querySelector(".text-container-inner");
      const style = window.getComputedStyle(textContainer);
      const fontSize = parseInt(style.fontSize);
      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = textContainer.offsetHeight;
      this.lines = Math.ceil(maxHeight / lineHeight) + 1;
    }
  }
};
</script>

<style>
.code-container {
  display: flex;
  align-items: flex-start;
}

.line-numbers {
  text-align: right;
}

.text-container {
  width: 100%;
  padding-left: 10px;
  word-wrap: break-word;
}

.text-container-inner {
  word-wrap: break-word;
  max-width: min(42rem, 100%);
  line-height: 1.75;
  letter-spacing: 0.01em;
  /* Room to scroll past the last line so the ending never sits on the viewport edge */
  padding-bottom: clamp(5rem, 20vh, 14rem);
}

.text-container-inner > p {
  margin: 0 0 1.35em;
}

.text-container-inner > p:last-child {
  margin-bottom: 0;
}

.text-container-inner ul {
  margin: 0.25em 0 1.45em;
  padding: 0.15em 0 0.15em 1.35em;
  list-style-type: disc;
}

.text-container-inner li {
  margin-bottom: 0.5em;
  line-height: 1.7;
  padding-left: 0.2em;
}

.text-container-inner li:last-child {
  margin-bottom: 0;
}

.text-container-inner img {
  display: block;
  max-width: min(100%, 22rem);
  height: auto;
  border-radius: 0.5rem;
  margin: 1.75rem auto 2rem;
  border: 1px solid rgba(96, 123, 150, 0.28);
  box-shadow: 0 6px 28px rgba(1, 22, 39, 0.4);
}

.text-container-inner .bio-guilty {
  margin: 2rem 0 0;
  padding: 1.1rem 1.15rem 1.15rem;
  border-left: 3px solid rgba(85, 101, 232, 0.4);
  background: rgba(1, 22, 39, 0.42);
  border-radius: 0 0.4rem 0.4rem 0;
}

.text-container-inner .bio-guilty p {
  margin: 0;
}

.text-container-inner .bio-guilty strong {
  color: #a8b9cf;
  font-weight: 600;
}
</style>