<template>
  <div>
    <div class="embed-container">
      <iframe
        src="https://player.vimeo.com/video/345639171?background=1&autoplay=1&loop=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <div v-if="current === 0">
        <div class="intro-content">
          <img class="header-img" src="../assets/images/Contrast_Logo.png" />
          <p>This experience has sound</p>
          <button @click="next">Begin</button>
        </div>
        <!-- <video autoplay loop muted>
        <source :src="video" type="video/mp4" />
        </video>-->
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
import AUDIO from "../assets/audios/INTRO_TEMP_MUSIC.wav";

export default {
  name: "PageOne",
  props: ["video", "scroll"],
  data() {
    return {
      current: 0,
      backgroundAudio: null
    };
  },
  methods: {
    next() {
      this.backgroundAudio.play();
      this.current = 1;
    }
  },
  mounted() {
    this.backgroundAudio = new Audio(AUDIO);
    if (typeof this.backgroundAudio.loop == "boolean") {
      this.backgroundAudio.loop = true;
    } else {
      this.backgroundAudio.addEventListener(
        "ended",
        function() {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
