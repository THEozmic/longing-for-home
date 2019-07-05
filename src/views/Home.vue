<template>
  <div id="home">
    <div class="slides">
      <section
        :class="['slide', current == index && 'active']"
        v-for="(view, index) in views"
        :key="index"
      >
        <component
          :is="view.component"
          :isVisible="current == index"
          v-on:next="next"
          v-on:prev="prev"
          :scroll="scroll"
          :video="view.video"
        />
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import anime from "animejs";
import Hammer from "hammerjs";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import { debounce } from "underscore";

export default {
  name: "home",
  data() {
    return {
      isStarted: false,
      views: [
        {
          video: "./videos/INTRO_video01_InstructionsBG.mp4",
          component: () => import("../components/PageOne.vue")
        },
        {
          video: "./videos/INTRO_video02.mp4",
          component: () => import("../components/PageTwo.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/PageThree.vue")
        }
      ],
      current: 0
    };
  },
  created() {
    this.scroll = debounce(this.scroll, 100);
  },
  computed: {
    filteredViews() {
      return this.views.filter((view, index) => index == this.current);
    }
  },
  methods: {
    scroll(event) {
      if (event.wheelDelta > 0) {
        this.prev();
      } else {
        this.next();
      }
    },
    next() {
      if (this.current === this.views.length) return;
      this.current += 1;
    },
    prev() {
      if (this.current === 0) return;
      this.current -= 1;
    },
    onPause() {
      this.timeline.pause();
    },
    onPlay() {
      this.timeline.play();
    },
    onStop() {
      if (!this.isStarted) return;
      this.timeline.restart();
      this.timeline.pause();
      this.isStarted = false;
    },
    onStart() {
      if (this.isStarted) return;

      this.isStarted = true;

      this.timeline = anime.timeline({
        autoplay: true,
        duration: 10000,
        easing: "linear",
        loop: true
      });

      this.views.forEach((view, index) => {
        this.timeline.add({
          targets: document.querySelectorAll("nav > div")[index].children[0],
          width: "100%",
          changeBegin: a => {
            this.current = index;
            this.updateBG_VIDEO(view.video);
          }
        });
      });

      let hammertime = new Hammer(document.querySelector(".slides"));

      hammertime.on("press", e => {
        this.timeline.pause();
      });

      hammertime.on("pressup", e => {
        this.timeline.play();
      });

      hammertime.on("tap", e => {
        if (e.center.x > window.innerWidth / 2) {
          if (this.current < this.views.length - 1) {
            this.current += 1;

            this.timeline.pause();
            this.timeline.seek(this.current * 10000);
            this.timeline.play();
          }
        } else {
          if (this.current > 0) {
            this.current -= 1;

            this.timeline.pause();
            this.timeline.seek(this.current * 10000);
            this.timeline.play();
          }
        }
      });
    }
  }
};
</script>

<style>
</style>
