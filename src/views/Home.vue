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
      currentStage: "intro_1",
      views: [
        {
          component: () => import("../components/PageOne.vue")
        },
        {
          component: () => import("../components/PageTwo.vue")
        },
        {
          component: () => import("../components/PageThree.vue")
        }
      ],
      current: 0
    };
  },
  created() {
    this.scroll = debounce(this.scroll, 50);
  },
  computed: {
    filteredViews() {
      return this.views.filter((view, index) => index == this.current);
    }
  },
  methods: {
    scroll(event) {
      console.log("scroll");
      if (event.wheelDelta > 0) {
        this.prev();
      } else {
        this.next();
      }
    },
    next() {
      this.current += 1;
    },
    prev() {
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
* {
  box-sizing: border-box;
}
h1 {
  display: inline-block;
}
html,
body,
main,
section,
#app,
#home {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

.section {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: opacity 1s ease;
}

nav {
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  height: 0.3em;
  padding: 0 1em;
  position: fixed;
  top: 24em;
  width: 80vh;
  right: -18em;
  transform: rotate(90deg);
}

nav > div {
  background: rgba(255, 255, 255, 0.25);
  height: 100%;
}

nav > div > div {
  background: #ffffff;
  height: 100%;
  width: 0%;
}
</style>
