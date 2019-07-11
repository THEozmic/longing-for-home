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
  letter-spacing: 1.5px;
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

nav ul {
  box-sizing: border-box;
  z-index: 2;
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: repeat(5, minmax(30px, 1fr));
  height: 100%;
  padding: 33vh 0;
  margin: 0;
  position: fixed;
  top: 0;
  width: 5px;
  right: 1em;
  list-style: none;
}

nav li {
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  position: relative;
}

nav li:hover .tooltip {
  opacity: 1;
  width: auto;
}

nav li .tooltip {
  font-size: 16px;
  right: 20px;
  opacity: 0;
  position: absolute;
  display: inline-block;
  top: 3px;
  color: white;
  transition: opacity 0.2s ease-in;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
}

// nav > div > div {
//   height: 100%;
// }

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

.button {
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
  // content: "";
  // display: block;
  // width: 100%;
  // height: 1px;
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  // -moz-box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  // -webkit-box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  // background-image: url(../public/BG_Texture.png);
  // background-size: cover;
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

  .plyr--full-ui input[type="range"] {
    color: white;
  }

  .plyr__control--overlaid {
    background-color: black;
  }

  .plyr--video .plyr__control.plyr__tab-focus,
  .plyr--video .plyr__control:hover,
  .plyr--video .plyr__control[aria-expanded="true"] {
    background-color: black;
  }

  .plyr--video .plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .plyr__controls {
    bottom: 0;
    height: 10px;
    padding: 45px 300px !important;
    position: fixed;
    background: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.22)
    ) !important;
  }

  .plyr__control--overlaid {
    top: 50vh !important;
  }
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: -70px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.pillar::after {
  // content: "";
  // display: block;
  // width: 100%;
  // height: 1px;
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  // -moz-box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  // -webkit-box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.5);
  // background-image: url(../public/BG_Texture.png);
  // background-size: cover;
}

.pillars {
  height: 100%;
  background-color: red;
  z-index: 3;
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
}

.pillars > .pillar {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
}

.pillars-toggle {
  display: inline-block;
  position: fixed;
  z-index: 2;
}

.pillars-toggle > button {
  background-position: 0px;
  background-size: 115px;
  width: 115px;
  height: 60px;
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
}

.learn-more-btn {
  position: absolute;
  right: 40px;
  top: 40px;
}

.black-btn {
  background-color: rgba(0, 0, 0, 0.78);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  color: white;
}

.bio-pane,
.pop-up {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  right: 0;
  background-color: rgba(23, 35, 34, 0.39);
  display: none;
  opacity: 0;
  transition: all 0.3s ease-in;
}

.bio-pane.visible,
.pop-up.visible {
  display: block;
  opacity: 1;
}

.bio-wrapper {
  margin: 60px;
}

.bio-content-wrapper {
  width: 430px;
  height: 100%;
  background-color: white;
  float: right;
  position: relative;
  overflow: hidden;
  right: -430px;
}

.bio-content {
  height: 100vh;
  font-size: 0.8em;
}

.bio-content::before,
.pop-up-content::before {
  content: "";
  position: absolute;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAHklEQVQoU2NkIAIwQtVIQeln2PSQpAivpTCThpwiABSMAgoOyKRFAAAAAElFTkSuQmCC)
    repeat;
  transform: rotate(3deg);
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
}

.bio-name {
  font-size: 1.8em;
  line-height: 50px;
  font-weight: bolder;
}

.bio-rest {
  margin: 0;
  margin-top: 50px;
  padding: 0;
  list-style: none;
}

.bio-item {
  font-size: 0.7em;
  margin-bottom: 25px;
  line-height: 25px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0 0 15px;
    }
  }
}

.bio-item-label {
  font-size: 0.8em;
}

.close-btn {
  right: 0;
  position: absolute;
  z-index: 1;
  margin: 15px;
  width: 40px;
  height: 40px;
  padding: 0;
}

.pop-up-content {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  overflow: hidden;
  padding: 60px;
}

.tabs {
  margin: 0 5%;

  .tab-content {
    font-size: 0.7em;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: 30px;

    li {
      display: inline-block;
      display: inline-block;
      margin-right: 5em;
      font-size: 0.7em;
      cursor: pointer;
      position: relative;

      &[aria-selected="true"] {
        border-bottom: 2px solid;
      }
    }
  }
}

.vp-controls-wrapper {
  display: none;
}

.footer {
  height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>
