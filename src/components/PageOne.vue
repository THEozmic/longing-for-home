<template>
  <div class="video-wrapper">
    <video autoplay src="../assets/videos/INTRO_video01_InstructionsBG.mp4"></video>
  </div>
</template>

<script>
export default {
  name: "PageOne"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.video-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

video::-webkit-media-controls {
  display: none !important;
}
</style>
