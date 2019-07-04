<template>
  <div>
    <div class="intro-content">
      <img src="../assets/images/Contrast_Logo.png" />
      <p>This experience has sound</p>
      <button @click="next">Begin</button>
    </div>
    <video autoplay loop muted src="../assets/videos/INTRO_video01_InstructionsBG.mp4"></video>
  </div>
</template>

<script>
export default {
  name: "PageOne",
  methods: {
    next() {
      this.$emit("next");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
