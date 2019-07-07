<template>
  <div @wheel="localScroll">
    <div class="embed-container">
      <iframe
        src="https://player.vimeo.com/video/345472223?background=0&autoplay=0&loop=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        id="page-seven-iframe"
      ></iframe>
      <!-- <nav class="page-two-nav">
        <div v-for="(view, index) in views" :key="index">
          <div></div>
        </div>
      </nav>-->
    </div>

    <!-- <div
      :class="['tape', (current == index && isVisible) && 'active']"
      v-for="(view, index) in views"
      :key="index"
      :id="'tape_'+index"
    >
      <img :src="require(`@/assets/images/${view.img}.svg`)" />
    </div>-->
  </div>
</template>

<script>
import { debounce } from "underscore";
import anime from "animejs";
import { setTimeout } from "timers";
import Player from "@vimeo/player";
import AUDIO from "../assets/audios/LANGUAGE_TEMP_MUSIC.wav";

export default {
  name: "PageSeven",
  props: ["isVisible", "scroll", "video", "parentCurrent"],
  data() {
    return {
      views: [],
      current: 0,
      backgroundAudio: null,
      player: null
    };
  },
  watch: {
    parentCurrent(val) {
      console.log(this.parentCurrent, ">>>>");
      if (val >= 6 && val < 17) {
        this.backgroundAudio.play();
      } else {
        this.backgroundAudio.pause();
      }

      if (val === 5) {
        this.backgroundAudio.pause();
      }
    },
    isVisible(val) {
      if (val) {
        // this.backgroundAudio.play();
        this.player.play();
        // setTimeout(() => {
        //   anime({
        //     targets: ".tape.active",
        //     translateX: this.views[this.current].X,
        //     translateY: this.views[this.current].Y
        //   });
        // }, 500);
      } else {
        this.player.pause();
        // this.timeline.pause();
        // [...document.querySelectorAll(".page-two-nav > div > div")].forEach(
        //   el => {
        //     el.setAttribute(
        //       "style",
        //       "background-color: rgba(255, 255, 255, 0.25)"
        //     );
        //   }
        // );
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
      //   setTimeout(() => {
      //     anime({
      //       targets: ".tape",
      //       translateX: -1,
      //       translateY: -1
      //     });
      //     anime({
      //       targets: ".tape.active",
      //       translateX: this.views[this.current].X,
      //       translateY: this.views[this.current].Y
      //     });
      //   }, 500);
    },
    next(event) {
      this.scroll(event);
      //   if (this.current + 1 === this.views.length) {
      //     this.scroll(event);
      //     return;
      //   } else {
      //     this.current += 1;
      //     // let currentNav = document.querySelector(
      //     //   `.page-two-nav > div:nth-child(${this.current + 1})`
      //     // );
      //     // currentNav.setAttribute("style", "background-color: white");
      //   }
    },
    prev(event) {
      if (this.current !== 0) {
        this.scroll(event);
      }

      //   if (this.current === 0) {
      //     this.scroll(event);
      //     return;
      //   } else {
      //     this.current -= 1;
      //     // let currentNav = document.querySelector(
      //     //   `.page-two-nav > div:nth-child(${this.current + 2})`
      //     // );
      //     // currentNav.setAttribute(
      //     //   "style",
      //     //   "background-color: rgba(255, 255, 255, 0.25)"
      //     // );
      //   }
    }
  },
  mounted() {
    let iframe = document.querySelector("#page-seven-iframe");
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
    // this.timeline = anime.timeline({
    //   autoplay: false,
    //   duration: 10000,
    //   easing: "linear"
    // });
    // this.views.forEach((view, index) => {
    //   this.timeline.add({
    //     targets: document.querySelectorAll(".page-two-nav > div")[index]
    //       .children[0],
    //     begin: a => {
    //       [...document.querySelectorAll(".page-two-nav > div > div")].forEach(
    //         el => {
    //           el.setAttribute(
    //             "style",
    //             "background-color: rgba(255, 255, 255, 0.25)"
    //           );
    //         }
    //       );
    //       a.animatables[0].target.setAttribute(
    //         "style",
    //         "background-color:#fff"
    //       );
    //       anime({
    //         targets: ".tape",
    //         translateX: -1,
    //         translateY: -1
    //       });
    //       anime({
    //         targets: ".tape.active",
    //         translateX: view.X,
    //         translateY: view.Y
    //       });
    //     },
    //     changeBegin: a => {
    //       // this.current = index;
    //       // if (index === 6) this.timeline.pause();
    //     },
    //     changeComplete: a => {
    //       // if (this.current + 1 === this.views.length) {
    //       //   this.$emit("next");
    //       // }
    //     }
    //   });
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
