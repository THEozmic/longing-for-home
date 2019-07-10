<template>
  <div id="home">
    <div class="pillars-toggle">
      <button @click="togglePillars" :style="`background-image: url(${ICON})`"></button>
    </div>
    <nav v-if="(current >= 1) && (current <= 4)">
      <ul>
        <li
          v-for="(view, index) in views"
          :key="index"
          v-if="view.isIntro"
          @click="() => { go(index); next(); }"
        >
          <div class="tooltip">{{view.title}}</div>
          <div class="nav-item"></div>
        </li>
      </ul>
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
          :videos="view.videos"
          :tapes="view.tapes"
          :parentCurrent="current"
          :pageIndex="index"
          :bio="view.bio"
          :popup="view.popup"
        />
      </section>
    </div>
  </div>
</template>

<script>
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
          title: "Tooltip text 1",
          video: "./videos/INTRO_video01_InstructionsBG.mp4",
          isIntro: true,
          component: () => import("../components/PageOne.vue")
        },
        {
          title: "Tooltip text 2",
          videos: ["345440635"],
          tapes: [
            {
              img: "TEMP_TITLE_CARDS-01",
              Y: 200,
              X: 0
            },
            {
              img: "TEMP_TITLE_CARDS-02",
              Y: 200,
              X: 0
            },
            {
              img: "TEMP_TITLE_CARDS-03",
              Y: 200,
              X: -15
            },
            {
              img: "TEMP_TITLE_CARDS-04",
              Y: 200,
              X: -15
            }
          ],
          isIntro: true,
          component: () => import("../components/Slide.vue")
        },
        {
          title: "Tooltip text 3",
          videos: ["345442052"],
          tapes: [
            {
              img: "TEMP_TITLE_CARDS-05",
              Y: 200,
              X: -15
            },
            {
              img: "TEMP_TITLE_CARDS-06",
              Y: 200,
              X: -15
            },
            {
              img: "TEMP_TITLE_CARDS-07",
              Y: 200,
              X: -15
            },
            {
              img: "TEMP_TITLE_CARDS-08",
              Y: 200,
              X: -15
            }
          ],
          isIntro: true,
          component: () => import("../components/Slide.vue")
        },
        {
          title: "Tooltip text 4",
          videos: ["345467379"],
          tapes: [
            {
              img: "TEMP_TITLE_CARDS-07",
              Y: 200,
              X: -15
            },
            {
              img: "TEMP_TITLE_CARDS-08",
              Y: 200,
              X: -15
            }
          ],
          isIntro: true,
          component: () => import("../components/Slide.vue")
        },
        {
          videos: ["345718645"],
          tapes: [
            {
              img: "TEMP_TITLE_CARDS-01",
              Y: 200,
              X: 0
            }
          ],
          component: () => import("../components/Slide.vue")
        },
        {
          component: () => import("../components/Pillars.vue")
        },
        {
          videos: ["345472223"],
          bio: {
            name: "ILMINUR MUTELLIP",
            age: "22 YEARS",
            hometown: "HAMI; KUMUL",
            arrived: "2017",
            family: [
              "Mother - Recently released from detention; Lives in China",
              "Father - Detained in China",
              "Two sisters in China"
            ]
          },
          component: () => import("../components/Slide.vue")
        },
        {
          videos: ["345474463"],
          popup: {
            tabs: [
              {
                title: "FIGHTING SEPARATISM",
                content: () =>
                  import("../components/tabs/FightingSeparatism.vue")
              },
              {
                title: "RELIGIOUS EXTREMISM",
                content: () =>
                  import("../components/tabs/ReligiousExtremism.vue")
              },
              {
                title: "THE SCALE OF THE USE",
                content: () => import("../components/tabs/TheScaleOfUse.vue")
              }
            ]
          },
          component: () => import("../components/Slide.vue")
        },
        {
          videos: ["345724331"],
          component: () => import("../components/Slide.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/PageEleven.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/PageTwelve.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page13.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page14.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page15.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page16.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page16.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page17.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page18.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page19.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page20.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page21.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page22.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page23.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page24.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page25.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page25.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page26.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page27.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page28.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page29.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page30.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page31.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page32.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page33.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page34.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page35.vue")
        },
        {
          video: "./videos/INTRO_video03.mp4",
          component: () => import("../components/Page35.vue")
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

      this.updateNav();
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
      if (this.current === 16) {
        this.current = 5;
        return;
      }

      if (this.current === 24) {
        this.current = 5;
        return;
      }

      if (this.current === 35) {
        this.current = 5;
        return;
      }

      if (this.current === this.views.length) return;

      this.current += 1;
      console.log(this.current, "oooohhhyeeeahhh");
    },
    prev() {
      if (this.current === 0) return;
      this.current -= 1;
      console.log("yeah", this.current);

      // let currentNav = document.querySelector(
      //   `nav > div:nth-child(${this.current + 2})`
      // );

      // if (!currentNav) return;
      // currentNav.setAttribute(
      //   "style",
      //   "background-color: rgba(255, 255, 255, 0.25)"
      // );
    },
    updateNav(isUp) {
      let navs = document.querySelectorAll("nav li");
      if (navs) {
        [...navs].forEach(el => {
          el.setAttribute(
            "style",
            "background-color: rgba(255, 255, 255, 0.25)"
          );
        });
      }

      (that => {
        setTimeout(() => {
          let currentNav = document.querySelector(
            `nav li:nth-child(${that.current})`
          );
          if (!currentNav) return;
          currentNav.setAttribute("style", "background-color: white");
        }, 500);
      })(this);
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
