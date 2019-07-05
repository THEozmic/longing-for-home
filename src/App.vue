<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "Oswald", sans-serif;
  font-size: 1.05em;
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
  grid-row-gap: 10px;
  grid-template-rows: repeat(8, 1fr);
  height: 90%;
  padding: 0 1em;
  position: fixed;
  top: 30px;
  width: 54px;
  right: 1em;
}

nav > div {
  background: rgba(255, 255, 255, 0.25);
}

nav > div > div {
  height: 100%;
}

.header-img {
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

.slide::before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  background-image: url(../public/BG_Texture.png);
  background-size: cover;
}

.tape {
  left: -500px;
  top: -500px;
  position: absolute;
  transition: transform 0.25s linear;
  width: 300px;
  height: 100px;
}

.tape.active {
}

.tape img {
  width: 300px;
  object-fit: contain;
}

#tape_0 {
  top: -140px;
  left: 50px;
}

#tape_1 {
  top: -140px;
  left: 50px;
}

#tape_2 {
  top: -140px;
  right: 90px;
  left: unset;
}

#tape_3 {
  top: -140px;
  right: 90px;
  left: unset;
}

#tape_4 {
  top: -140px;
  right: 90px;
  left: unset;
}

#tape_5 {
  right: 90px;
  left: unset;
  bottom: -115px;
  top: unset;
}

#tape_6 {
  top: -140px;
  right: 90px;
  left: unset;
}

#tape_7 {
  top: -140px;
  right: 90px;
  left: unset;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  height: 100vh;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
