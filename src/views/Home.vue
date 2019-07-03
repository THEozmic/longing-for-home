<template>
  <div id="home">
    <nav>
      <div v-for="(view, index) in views" :key="index">
        <div></div>
      </div>
    </nav>

    <section
      v-for="(view, index) in filteredViews"
      :key="index"
      :style="{ background: view.color }"
    >
      <component :is="view.component" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import anime from "animejs";
import Hammer from "hammerjs";

export default {
  name: "home",
  data() {
    return {
      views: [
        {
          color: "#D53738",
          component: () => import("../components/PageOne.vue")
        },
        {
          color: "#638867",
          component: () => import("../components/PageTwo.vue")
        },
        {
          color: "#2C3576",
          component: () => import("../components/PageThree.vue")
        }
      ],
      current: 0
    };
  },
  computed: {
    filteredViews() {
      return this.views.filter((view, index) => index == this.current);
    }
  },
  mounted() {
    let timeline = anime.timeline({
      autoplay: true,
      duration: 10000,
      easing: "linear",
      loop: true
    });

    this.views.forEach((view, index) => {
      timeline.add({
        targets: document.querySelectorAll("nav > div")[index].children[0],
        width: "100%",
        changeBegin: a => {
          this.current = index;
        }
      });
    });

    let hammertime = new Hammer(document.querySelector("#app"));

    hammertime.on("press", e => {
      timeline.pause();
    });

    hammertime.on("pressup", e => {
      timeline.play();
    });

    hammertime.on("tap", e => {
      if (e.center.x > window.innerWidth / 2) {
        if (this.current < this.views.length - 1) {
          this.current += 1;

          timeline.pause();
          timeline.seek(this.current * 10000);
          timeline.play();
        }
      } else {
        if (this.current > 0) {
          this.current -= 1;

          timeline.pause();
          timeline.seek(this.current * 10000);
          timeline.play();
        }
      }
    });
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
}

section {
  transition: all 0.3s linear;
}

nav {
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  height: 0.3em;
  padding: 0 1em;
  position: fixed;
  bottom: 1em;
  width: 100%;
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
