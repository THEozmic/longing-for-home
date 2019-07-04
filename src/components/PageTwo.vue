<template>
  <div @wheel="scroll">
    <div class="intro-content">
      <h1>Longing For Home</h1>
      <p>Scroll or use keyboard to navigate</p>
    </div>
    <video autoplay loop muted src="../assets/videos/INTRO_video01_InstructionsBG.mp4"></video>
  </div>
</template>

<script>
import AUDIO from "../assets/audios/INTRO_TEMP_MUSIC.wav";
import { debounce } from "underscore";

export default {
  name: "PageTwo",
  props: ["isVisible", "scroll"],
  data() {
    return {
      backgroundAudio: null
    };
  },
  watch: {
    isVisible(val) {
      if (val) {
        this.backgroundAudio.play();
      }
    }
  },
  methods: {},
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
