<template>
  <div @wheel="localScroll">
    <button class="learn-more-btn black-btn" v-if="bio" @click="isBioVisible = true">LEARN MORE</button>
    <aside
      :class="['bio-pane', `${isBioVisible ? 'visible' : ''}`]"
      @click.self="isBioVisible = false"
      v-if="bio"
      @wheel.stop
    >
      <button @click="isBioVisible = false" class="close-btn black-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div class="bio-content-wrapper">
        <simplebar data-simplebar-auto-hide="false" class="bio-content">
          <div class="bio-wrapper">
            <div class="bio-name">{{bio.name}}</div>
            <ul class="bio-rest">
              <li class="bio-item">
                <div class="bio-item-label">AGE:</div>
                <div>{{bio.age}}</div>
              </li>
              <li class="bio-item">
                <div class="bio-item-label">HOMETOWN:</div>
                <div>{{bio.hometown}}</div>
              </li>
              <li class="bio-item">
                <div class="bio-item-label">DATE ARRIVED TURKEY:</div>
                <div>{{bio.arrived}}</div>
              </li>
              <li class="bio-item">
                <div class="bio-item-label">FAMILY:</div>
                <ul>
                  <li v-for="(fam, index) in bio.family" :key="index">{{fam}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </simplebar>
      </div>
    </aside>

    <button class="learn-more-btn black-btn" v-if="popup" @click="isPopupVisible = true">READ MORE</button>
    <aside :class="['pop-up', `${isPopupVisible ? 'visible' : ''}`]" v-if="popup" @wheel.stop>
      <button @click="isPopupVisible = false" class="close-btn black-btn">
        <svg
          width="20"
          height="20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          enable-background="new 0 0 64 64"
        >
          <g>
            <path
              fill="#FFF"
              d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"
            />
          </g>
        </svg>
      </button>

      <div class="pop-up-content">
        <tabs class="tabs">
          <tab :title="tab.title" v-for="(tab, index) in popup.tabs" :key="index">
            <simplebar data-simplebar-auto-hide="false" style="height: calc(100vh - 132px)">
              <component :is="tab.content" class="tab-content" />
            </simplebar>
          </tab>
        </tabs>
      </div>
    </aside>

    <div :class="`embed-container`">
      <div
        class="plyr__video-embed"
        v-if="videos.length < 2"
        :id="`page-${pageIndex + 1}-iframe-${0}`"
      >
        <iframe
          :src="`https://player.vimeo.com/video/${videos && videos[0]}?loop=true&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        ></iframe>
      </div>
      <div
        :id="`page-${pageIndex + 1}-iframe-${index}`"
        class="plyr__video-embed"
        v-else
        v-for="(video, index) in videos"
        :key="index"
        :style="`height: ${players ? (players[index].playing ? 'auto' : '0px') : 'auto'}`"
      >
        <iframe
          :src="`https://player.vimeo.com/video/${video}?loop=true&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        ></iframe>
      </div>
      <!-- <div
        :style="`height: ${players && players[index].playing ? 'auto' : '0px'}`"
        :id="`page-${pageIndex + 1}-iframe-${index}`"
        data-plyr-provider="vimeo"
        :data-plyr-embed-id="video"
        v-for="(video, index) in videos"
        :key="index"
      ></div>-->
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
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.css";

import anime from "animejs";
import { debounce } from "underscore";
import { setTimeout } from "timers";
import { Tabs, Tab } from "vue-slim-tabs";

import Plyr from "plyr";

// import language_background_audio from "../assets/audios/LANGUAGE_TEMP_MUSIC.wav";
// import family_background_audio from "../assets/audios/FAMILY_TEMP_MUSIC.wav";
// import religion_background_audio from "../assets/audios/RELIGION_TEMP_MUSIC.wav";

export default {
  name: "Slide",
  props: [
    "isVisible",
    "scroll",
    "videos",
    "parentCurrent",
    "pageIndex",
    "isFirstPage",
    "tapes",
    "bio",
    "popup"
  ],
  components: {
    simplebar
  },
  data() {
    return {
      current: 0,
      isBioVisible: false,
      isPopupVisible: false,
      player: null,
      players: null
      // backgroundAudio: null,
      // audios: {
      //   language_background_audio: null,
      //   family_background_audio: null,
      //   religion_background_audio: null
      // }
    };
  },
  watch: {
    isBioVisible(val) {
      if (val) {
        anime({
          targets: ".bio-content-wrapper",
          translateX: -430,
          easing: "linear",
          duration: 300
        });
      } else {
        anime({
          targets: ".bio-content-wrapper",
          translateX: 430,
          easing: "linear",
          duration: 300
        });
      }
    },
    parentCurrent(val) {
      // if (val >= 6 && val < 17) {
      //   this.audios.language_background_audio.play();
      // } else {
      //   this.audios.language_background_audio.pause();
      // }
      // if (val >= 17 && val < 27) {
      //   this.audios.family_background_audio.play();
      // } else {
      //   this.audios.family_background_audio.pause();
      // }
      // if (val >= 26) {
      //   this.audios.religion_background_audio.play();
      // } else {
      //   this.audios.religion_background_audio.pause();
      // }
      // if (val === 5) {
      //   this.audios.language_background_audio.pause();
      //   this.audios.family_background_audio.pause();
      //   this.audios.religion_background_audio.pause();
      // }
    },
    isVisible(val) {
      if (val) {
        if (this.player) {
          this.player.play();

          if (!this.bio) {
            this.player.volume = 0;
          }
        }

        if (this.players) {
          this.players[0].play();
        }

        if (!this.tapes) return;
        setTimeout(() => {
          anime({
            targets: ".tape.active",
            translateX: this.tapes[this.current].X,
            translateY: this.tapes[this.current].Y
          });
        }, 500);
      } else {
        if (this.player) {
          this.player.stop();
        }
      }
    }
  },
  created() {
    this.localScroll = debounce(this.localScroll, 100);
  },
  methods: {
    localScroll(event) {
      if (this.players) {
        this.players[this.current].stop();
      }

      if (event.wheelDelta > 0) {
        this.prev(event);
      } else {
        this.next(event);
      }

      if (!this.tapes) return;

      if (this.players) {
        this.players[this.current].play();
      }

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
      if (!this.tapes) {
        this.scroll(event);
        return;
      }

      if (this.current + 1 === this.tapes.length) {
        this.scroll(event);
        return;
      } else {
        this.current += 1;
      }
    },
    prev(event) {
      if (this.isFirstPage) return;
      if (!this.tapes) {
        this.scroll(event);
        return;
      }
      if (this.current === 0) {
        this.scroll(event);
        return;
      } else {
        this.current -= 1;
      }
    }
  },
  mounted() {
    if (this.videos.length === 1) {
      this.player = new Plyr(`#page-${this.pageIndex + 1}-iframe-0`, {
        ...(this.bio
          ? { controls: ["progress", "play-large"] }
          : { controls: [] }),
        debug: true,
        loop: { active: true }
      });
    } else {
      this.players = this.videos.map(
        (p, i) =>
          new Plyr(`#page-${this.pageIndex + 1}-iframe-${i}`, {
            loop: { active: true },
            debug: true,
            controls: []
          })
      );
    }

    // this.audios.language_background_audio = new Audio(
    //   language_background_audio
    // );
    // this.audios.religion_background_audio = new Audio(
    //   religion_background_audio
    // );
    // this.audios.family_background_audio = new Audio(family_background_audio);

    // if (typeof this.audios.language_background_audio.loop == "boolean") {
    //   this.audios.language_background_audio.loop = true;
    // } else {
    //   this.audios.language_background_audio.addEventListener(
    //     "ended",
    //     function() {
    //       this.currentTime = 0;
    //       this.play();
    //     },
    //     false
    //   );
    // }

    // if (typeof this.audios.religion_background_audio.loop == "boolean") {
    //   this.audios.religion_background_audio.loop = true;
    // } else {
    //   this.audios.religion_background_audio.addEventListener(
    //     "ended",
    //     function() {
    //       this.currentTime = 0;
    //       this.play();
    //     },
    //     false
    //   );
    // }

    // if (typeof this.audios.family_background_audio.loop == "boolean") {
    //   this.audios.family_background_audio.loop = true;
    // } else {
    //   this.audios.family_background_audio.addEventListener(
    //     "ended",
    //     function() {
    //       this.currentTime = 0;
    //       this.play();
    //     },
    //     false
    //   );
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
