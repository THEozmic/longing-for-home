<template>
  <div @wheel="localScroll">
    <div class="intro-content">
      <img :src="IMG" style="width: 100%;" />
    </div>
  </div>
</template>

<script>
import { debounce } from "underscore";
import anime from "animejs";
import { setTimeout } from "timers";
import IMG from "../assets/images/RELIGION_POPUP_WINDOW02.png";

export default {
  name: "PageEight",
  props: ["isVisible", "scroll", "video"],
  data() {
    return {
      views: [],
      current: 0,
      IMG
    };
  },
  watch: {
    isVisible(val) {}
  },
  created() {
    this.localScroll = debounce(this.localScroll, 100);
  },
  methods: {
    localScroll(event) {
      if (event.wheelDelta > 0) {
        this.prev(event);
      } else {
        this.next(event);
      }
      console.log("here");
    },
    next(event) {
      this.scroll(event);
    },
    prev(event) {
      if (this.current !== 0) {
        this.scroll(event);
      }
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
