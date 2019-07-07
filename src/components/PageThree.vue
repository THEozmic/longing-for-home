<template>
  <div @wheel="localScroll">
    <div class="embed-container">
      <iframe
        src="https://player.vimeo.com/video/345442052?background=1&autoplay=1&loop=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <!-- <nav class="page-two-nav">
        <div v-for="(view, index) in views" :key="index">
          <div></div>
        </div>
      </nav>-->
    </div>

    <div
      :class="['tape', (current == index && isVisible) && 'active']"
      v-for="(view, index) in views"
      :key="index"
      :id="'tape_'+index"
    >
      <img :src="require(`@/assets/images/${view.img}.svg`)" />
    </div>
  </div>
</template>

<script>
import { debounce } from "underscore";
import anime from "animejs";
import { setTimeout } from "timers";

export default {
  name: "PageTwo",
  props: ["isVisible", "scroll", "video"],
  data() {
    return {
      views: [
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
      current: 0
    };
  },
  watch: {
    isVisible(val) {
      if (val) {
        // this.timeline.restart();
        // let currentNav = document.querySelector(
        //   `.page-two-nav > div:nth-child(${this.current + 1})`
        // );
        // currentNav.setAttribute("style", "background-color: white");
        // document.getElementsByClassName("tape")[0].classList.add("active");
        // console.log(this.views[this.current]);
        setTimeout(() => {
          anime({
            targets: ".tape.active",
            translateX: this.views[this.current].X,
            translateY: this.views[this.current].Y
          });
        }, 500);
      } else {
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
      setTimeout(() => {
        anime({
          targets: ".tape",
          translateX: -1,
          translateY: -1
        });
        anime({
          targets: ".tape.active",
          translateX: this.views[this.current].X,
          translateY: this.views[this.current].Y
        });
      }, 500);
    },
    next(event) {
      if (this.current + 1 === this.views.length) {
        this.scroll(event);
        return;
      } else {
        this.current += 1;
        // let currentNav = document.querySelector(
        //   `.page-two-nav > div:nth-child(${this.current + 1})`
        // );
        // currentNav.setAttribute("style", "background-color: white");
      }
    },
    prev(event) {
      if (this.current === 0) {
        this.scroll(event);
        return;
      } else {
        this.current -= 1;
        // let currentNav = document.querySelector(
        //   `.page-two-nav > div:nth-child(${this.current + 2})`
        // );
        // currentNav.setAttribute(
        //   "style",
        //   "background-color: rgba(255, 255, 255, 0.25)"
        // );
      }
    }
  },
  mounted() {
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
