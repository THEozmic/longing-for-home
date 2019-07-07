<template>
  <div @wheel="localScroll">
    <div class="embed-container">
      <iframe
        src="https://player.vimeo.com/video/345474463?background=0&autoplay=0&loop=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        id="page-nine-iframe"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { debounce } from "underscore";
import anime from "animejs";
import { setTimeout } from "timers";
import Player from "@vimeo/player";

import IMG from "../assets/images/language_bio-25.png";

export default {
  name: "PageEight",
  props: ["isVisible", "scroll", "video"],
  data() {
    return {
      views: [],
      current: 0,
      IMG,
      player: null
    };
  },
  watch: {
    isVisible(val) {
      if (val) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
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
      this.scroll(event);
    }
  },
  mounted() {
    let iframe = document.querySelector("#page-nine-iframe");
    this.player = new Player(iframe);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
