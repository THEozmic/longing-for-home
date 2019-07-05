<template>
  <div @wheel="scroll">
    <div class="embed-container">
      <iframe
        src="https://player.vimeo.com/video/345440635?background=1&autoplay=1&loop=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        :style="`visibility: ${current < 4 ? 'visible' : 'hidden'}`"
      ></iframe>
      <iframe
        src="https://player.vimeo.com/video/345442052?background=1&autoplay=1&loop=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        :style="`visibility: ${current >= 4 ? 'visible' : 'hidden'}`"
      ></iframe>
      <nav class="page-two-nav">
        <div v-for="(view, index) in views" :key="index">
          <div></div>
        </div>
      </nav>
    </div>

    <div
      :class="['tape', current == index && 'active']"
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

export default {
  name: "PageThree",
  props: ["isVisible", "scroll", "video"],
  data() {
    return {
      views: [
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
        },
        {
          img: "TEMP_TITLE_CARDS-05",
          Y: 200,
          X: -15
        },
        {
          img: "TEMP_TITLE_CARDS-06",
          Y: -210,
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
        this.timeline.restart();
      } else {
        this.timeline.pause();
      }
    }
  },
  mounted() {
    this.timeline = anime.timeline({
      autoplay: false,
      duration: 1000,
      easing: "linear"
    });

    this.views.forEach((view, index) => {
      this.timeline.add({
        targets: document.querySelectorAll(".page-two-nav > div")[index]
          .children[0],
        begin: a => {
          [...document.querySelectorAll(".page-two-nav > div > div")].forEach(
            el => {
              el.setAttribute(
                "style",
                "background-color: rgba(255, 255, 255, 0.25)"
              );
            }
          );
          a.animatables[0].target.setAttribute(
            "style",
            "background-color:#fff"
          );
          anime({
            targets: ".tape",
            translateX: -1,
            translateY: -1
          });
          anime({
            targets: ".tape.active",
            translateX: view.X,
            translateY: view.Y
          });
        },
        changeBegin: a => {
          this.current = index;
          // if (index === 6) this.timeline.pause();
        },
        changeComplete: a => {
          if (this.current + 1 === this.views.length) {
            this.$emit("next");
          }
        }
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
