<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
img {
  width: 600px;
  object-fit: cover;
  height: 200px;
}

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

video::-webkit-media-controls {
  display: none !important;
}

button {
  background-color: black;
  border: 0;
  padding: 10px;
  font-size: 1.5em;
  color: #fff;
  text-transform: uppercase;
  border-radius: 10px 0;
}

.intro-content {
  background-color: transparent;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  color: white;
}

.slides {
  background: black;
  transition: background 1s ease;
  height: 100%;
}

.slide.active {
  // display: block;
  transition: opacity 1s ease;
  opacity: 1;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
  z-index: 1;
}

.slide {
  opacity: 0;
  z-index: 0;
  transition: opacity 1s ease;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
