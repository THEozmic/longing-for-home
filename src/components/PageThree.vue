<template>
  <div @wheel="scroll">
    <div class="intro-content">Second Story</div>
    <video autoplay loop muted :src="video"></video>
    <nav class="page-three-nav">
      <div v-for="(view, index) in views" :key="index">
        <div></div>
      </div>
    </nav>

    <div
      :class="['tape', current == index && 'active']"
      v-for="(view, index) in views"
      :key="index"
      :id="'tape_'+index"
    >
      <img :src="require(`@/assets/images/${view.img}.svg`)" />
    </div>
  </div>
</template>

<script>
import { debounce } from "underscore";
import anime from "animejs";

export default {
  name: "PageThree",
  props: ["isVisible", "scroll", "video"],
  data() {
    return {
      views: []
    };
  },
  watch: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
