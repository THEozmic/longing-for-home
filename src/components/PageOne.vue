<template>
  <div>
    <div class="embed-container">
      <iframe
        src="https://player.vimeo.com/video/345440635?background=1&autoplay=1&loop=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <div v-if="current === 0">
        <div class="intro-content">
          <img class="header-img" src="../assets/images/Contrast_Logo.png" />
          <p>This experience has sound</p>
          <button class="button" @click="next">Begin</button>
        </div>
      </div>
      <div v-else>
        <div @wheel="scroll">
          <div class="intro-content">
            <h1>Longing For Home</h1>
            <p>Scroll or use keyboard to navigate</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageOne",
  props: ["video", "scroll", "parentCurrent"],
  data() {
    return {
      current: 0
    };
  },

  methods: {
    next() {
      this.current = 1;
      this.$emit("play-audio", "intro_background_audio");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
