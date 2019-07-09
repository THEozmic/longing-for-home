<template>
  <div @wheel="localScroll">
    <div class="embed-container" id="yooo">
      <iframe
        v-for="(video, index) in videos"
        :key="index"
        :src="`${video}?background=0&autoplay=0&loop=1`"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        :id="`page-${pageIndex + 1}-iframe`"
      ></iframe>
    </div>

    <div
      :class="['tape', (current == index && isVisible) && 'active']"
      v-for="(tape, index) in tapes"
      :key="index"
      :id="'tape_'+index"
    >
      <img :src="require(`@/assets/images/${tape.img}.svg`)" />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { debounce } from "underscore";
import { setTimeout } from "timers";

import Player from "@vimeo/player";
import AUDIO from "../assets/audios/LANGUAGE_TEMP_MUSIC.wav";
import language_background_audio from "../assets/audios/LANGUAGE_TEMP_MUSIC.wav";
import family_background_audio from "../assets/audios/FAMILY_TEMP_MUSIC.wav";
import religion_background_audio from "../assets/audios/RELIGION_TEMP_MUSIC.wav";

export default {
  name: "PillarPage",
  props: [
    "isVisible",
    "scroll",
    "videos",
    "parentCurrent",
    "pageIndex",
    "isFirstPage",
    "tapes"
  ],
  data() {
    return {
      current: 0,
      player: null,
      backgroundAudio: null,
      audios: {
        language_background_audio: null,
        family_background_audio: null,
        religion_background_audio: null
      }
    };
  },
  watch: {
    parentCurrent(val) {
      if (val >= 6 && val < 17) {
        this.audios.language_background_audio.play();
      } else {
        this.audios.language_background_audio.pause();
      }

      if (val >= 17 && val < 27) {
        this.audios.family_background_audio.play();
      } else {
        this.audios.family_background_audio.pause();
      }

      if (val >= 26) {
        this.audios.religion_background_audio.play();
      } else {
        this.audios.religion_background_audio.pause();
      }

      if (val === 5) {
        this.audios.language_background_audio.pause();
        this.audios.family_background_audio.pause();
        this.audios.religion_background_audio.pause();
      }
    },
    isVisible(val) {
      if (val) {
        this.player.play();
        if (!this.tapes) return;
        setTimeout(() => {
          anime({
            targets: ".tape.active",
            translateX: this.tapes[this.current].X,
            translateY: this.tapes[this.current].Y
          });
        }, 500);
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

      if (!this.tapes) return;

      setTimeout(() => {
        anime({
          targets: ".tape",
          translateX: -1,
          translateY: -1
        });
        anime({
          targets: ".tape.active",
          translateX: this.tapes[this.current].X,
          translateY: this.tapes[this.current].Y
        });
      }, 500);
    },
    next(event) {
      this.scroll(event);
    },
    prev(event) {
      if (this.isFirstPage) return;
      this.scroll(event);
    }
  },
  mounted() {
    let iframe = document.querySelector(`#page-${this.pageIndex + 1}-iframe`);
    this.player = new Player(iframe);

    this.audios.language_background_audio = new Audio(
      language_background_audio
    );
    this.audios.religion_background_audio = new Audio(
      religion_background_audio
    );
    this.audios.family_background_audio = new Audio(family_background_audio);

    if (typeof this.audios.language_background_audio.loop == "boolean") {
      this.audios.language_background_audio.loop = true;
    } else {
      this.audios.language_background_audio.addEventListener(
        "ended",
        function() {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }

    if (typeof this.audios.religion_background_audio.loop == "boolean") {
      this.audios.religion_background_audio.loop = true;
    } else {
      this.audios.religion_background_audio.addEventListener(
        "ended",
        function() {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }

    if (typeof this.audios.family_background_audio.loop == "boolean") {
      this.audios.family_background_audio.loop = true;
    } else {
      this.audios.family_background_audio.addEventListener(
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
