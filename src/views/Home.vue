<template>
  <div id="home">
    <div class="pillars-toggle">
      <button @click="togglePillars" :style="`background-image: url(${ICON})`"></button>
    </div>
    <nav v-if="(current >= 1) && (current <= 4)">
      <ul>
        <li v-for="(nav, index) in navs" :key="index" @click="() => { go(index); next(); }">
          <div class="tooltip">{{nav.title}}</div>
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
          v-on:play-audio="playAudio"
          :scroll="scroll"
          :videos="view.videos"
          :tapes="view.tapes"
          :parentCurrent="current"
          :pageIndex="index"
          :bio="view.bio"
          :popup="view.popup"
        />
      </section>
    </div>
    <div class="footer">
      <button class="footer-btn" @click="isAudioMuted = !isAudioMuted">
        <svg
          v-if="isAudioMuted"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-volume-x"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-volume-2"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      </button>
      <button class="footer-btn">SHARE</button>
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

import language_background_audio from "../assets/audios/LANGUAGE_TEMP_MUSIC.wav";
import family_background_audio from "../assets/audios/FAMILY_TEMP_MUSIC.wav";
import religion_background_audio from "../assets/audios/RELIGION_TEMP_MUSIC.wav";
import intro_background_audio from "../assets/audios/INTRO_TEMP_MUSIC.wav";

export default {
  name: "home",
  data() {
    return {
      audios: {
        intro_background_audio: null,
        language_background_audio: null,
        family_background_audio: null,
        religion_background_audio: null
      },
      isAudioMuted: false,
      playing_audio: null,
      isStarted: false,
      ICON: STORIES_ICON,
      navs: [
        {
          title: "Tooltip Text 1"
        },
        {
          title: "Tooltip Text 2"
        },
        {
          title: "Tooltip Text 3"
        },
        {
          title: "Tooltip Text 4"
        }
      ],
      views: [
        {
          audio: "intro_background_audio",
          component: () => import("../components/PageOne.vue")
        },
        {
          videos: ["346702899", "346702951", "346702980"],
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
            }
          ],
          component: () => import("../components/Slide.vue")
        },
        {
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
          component: () => import("../components/Slide.vue")
        },
        {
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
          audio: "language_background_audio",
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
        }
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/PageEleven.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/PageTwelve.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page13.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page14.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page15.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page16.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page16.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page17.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page18.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page19.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page20.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page21.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page22.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page23.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page24.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page25.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page25.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page26.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page27.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page28.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page29.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page30.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page31.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page32.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page33.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page34.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page35.vue")
        // },
        // {
        //   video: "./videos/INTRO_video03.mp4",
        //   component: () => import("../components/Page35.vue")
        // }
      ],
      current: 0
    };
  },
  created() {
    this.scroll = debounce(this.scroll, 100);
  },
  watch: {
    isAudioMuted(val) {
      if (val) {
        this.audios.language_background_audio.pause();
        this.audios.religion_background_audio.pause();
        this.audios.family_background_audio.pause();
        this.audios.intro_background_audio.pause();
      } else {
        this.audios[this.playing_audio].play();
      }
    },
    current(val) {
      if (val === 6) {
        this.ICON = STORIES_ICON_1;
      }

      if (this.views[val].audio) {
        if (this.views[val].audio !== this.playing_audio) {
          this.audios.language_background_audio.pause();
          this.audios.religion_background_audio.pause();
          this.audios.family_background_audio.pause();
          this.audios.intro_background_audio.pause();

          this.audios[this.views[val].audio].play();
          this.playing_audio = this.views[val].audio;
        }
      }

      this.updateNav();
    }
  },
  methods: {
    playAudio(name) {
      this.audios[name].play();
      this.playing_audio = name;
    },
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
    },
    prev() {
      if (this.current === 0) return;
      this.current -= 1;
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
    loadBackgroundAudio(name, audio) {
      this.audios[name] = new Audio(audio);
      if (typeof this.audios[name].loop == "boolean") {
        this.audios[name].loop = true;
      } else {
        this.audios[name].addEventListener(
          "ended",
          function() {
            this.currentTime = 0;
            this.play();
          },
          false
        );
      }
    }
  },
  mounted() {
    this.loadBackgroundAudio(
      "language_background_audio",
      language_background_audio
    );

    this.loadBackgroundAudio(
      "religion_background_audio",
      religion_background_audio
    );

    this.loadBackgroundAudio(
      "family_background_audio",
      family_background_audio
    );

    this.loadBackgroundAudio("intro_background_audio", intro_background_audio);
  }
};
</script>

<style>
</style>
