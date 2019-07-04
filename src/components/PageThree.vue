<template>
  <div @wheel="scroll">
    <div class="intro-content">First Story</div>
    <video autoplay loop muted src="../assets/videos/INTRO_video02.mp4"></video>
    <nav>
      <div v-for="(view, index) in views" :key="index">
        <div></div>
      </div>
    </nav>
  </div>
</template>

<script>
import { debounce } from "underscore";

export default {
  name: "PageThree",
  props: ["scroll"],
  data() {
    return {
      views: [1, 2, 3, 4]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
