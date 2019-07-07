<template>
  <div id="home">
    <div class="pillars-toggle">
      <button @click="togglePillars" :style="`background-image: url(${ICON})`"></button>
    </div>
    <nav v-if="(current >= 1) && (current <= 4)">
      <div v-for="(view, index) in views" :key="index">
        <div></div>
      </div>
    </nav>
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
          v-on:go="go"
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
import { debounce } from "underscore";
import STORIES_ICON from "../assets/images/Icons_STORIES_WHITE.png";
import STORIES_ICON_1 from "../assets/images/Icons_STORIES_WHITE.png";
import INTRO_ICON from "../assets/images/INTRODUCTION_ICON-26.png";

export default {
  name: "home",
  data() {
    return {
      isStarted: false,
      ICON: STORIES_ICON,
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
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/PageFour.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/PageFive.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/PageSix.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/PageSeven.vue")
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
  watch: {
    current(val) {
      if (val === 6) {
        this.ICON = STORIES_ICON_1;
      }
    }
  },
  methods: {
    togglePillars() {
      if (this.current === 5) {
        this.current = 0;
        this.ICON = STORIES_ICON;
        return;
      }

      this.current = 5;
      this.ICON = INTRO_ICON;
    },
    scroll(event) {
      if (event.wheelDelta > 0) {
        this.prev();
      } else {
        this.next();
      }
    },
    go(where) {
      this.current = where;
    },
    next() {
      if (this.current === this.views.length) return;
      (that => {
        that.current += 1;

        setTimeout(() => {
          let currentNav = document.querySelector(
            `nav > div:nth-child(${that.current})`
          );
          if (!currentNav) return;
          currentNav.setAttribute("style", "background-color: white");
        }, 500);
      })(this);
    },
    prev() {
      if (this.current === 0) return;
      this.current -= 1;
      let currentNav = document.querySelector(
        `nav > div:nth-child(${this.current + 2})`
      );
      currentNav.setAttribute(
        "style",
        "background-color: rgba(255, 255, 255, 0.25)"
      );
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
