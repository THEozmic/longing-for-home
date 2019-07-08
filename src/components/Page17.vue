<template>
  <div @wheel="localScroll">
    <div class="embed-container">
      <iframe
        src="https://player.vimeo.com/video/345906029?background=0&autoplay=0&loop=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        id="page-17-iframe"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { debounce } from "underscore";
import anime from "animejs";
import { setTimeout } from "timers";
import Player from "@vimeo/player";
import AUDIO from "../assets/audios/FAMILY_TEMP_MUSIC.wav";

export default {
  name: "PageTen",
  props: ["isVisible", "scroll", "video", "parentCurrent"],
  data() {
    return {
      views: [],
      current: 0,
      player: null,
      backgroundAudio: null
    };
  },
  watch: {
    isVisible(val) {
      if (val) {
        this.player.play();
      } else {
        this.player.pause();
      }
    },
    parentCurrent(val) {
      console.log(this.parentCurrent, ">>>>");
      if (val >= 17 && val < 27) {
        this.backgroundAudio.play();
      } else {
        this.backgroundAudio.pause();
      }

      if (val === 5) {
        this.backgroundAudio.pause();
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
      //   this.scroll(event);
    }
  },
  mounted() {
    let iframe = document.querySelector("#page-17-iframe");
    this.player = new Player(iframe);

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
