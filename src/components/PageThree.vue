<template>
  <div @wheel="scroll">
    <div class="intro-content">First Story</div>
    <video autoplay loop muted src="../assets/videos/INTRO_video02.mp4"></video>
    <nav class="page-three-nav">
      <div v-for="(view, index) in views" :key="index">
        <div></div>
      </div>
    </nav>
  </div>
</template>

<script>
import { debounce } from "underscore";
import anime from "animejs";

export default {
  name: "PageThree",
  props: ["isVisible", "scroll"],
  data() {
    return {
      views: [
        {
          content: "Holla"
        },
        {
          content: "Mi Amore"
        },
        {
          content: "Mi Corazon"
        }
      ],
      current: 0
    };
  },
  watch: {
    isVisible(val) {
      if (val) {
        this.timeline.restart();
      }
    }
  },
  mounted() {
    this.timeline = anime.timeline({
      autoplay: false,
      duration: 10000,
      easing: "linear"
    });

    this.views.forEach((view, index) => {
      this.timeline.add({
        targets: document.querySelectorAll(".page-three-nav > div")[index]
          .children[0],
        width: "100%",
        changeBegin: a => {
          this.current = index;
        }
      });
    });

    this.timeline.finished.then(() => {
      this.$emit("next");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
