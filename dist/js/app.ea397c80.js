(function(e){function n(n){for(var i,r,u=n[0],d=n[1],s=n[2],a=0,h=[];a<u.length;a++)r=u[a],o[r]&&h.push(o[r][0]),o[r]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);l&&l(n);while(h.length)h.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],i=!0,r=1;r<t.length;r++){var d=t[r];0!==o[d]&&(i=!1)}i&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var i={},o={app:0},c=[];function r(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-12e5c6d5":"84976329","chunk-2d0c1cae":"602c0a81","chunk-2d0de528":"b7fe513e","chunk-2d0c54d1":"c93f65ca","chunk-2d0c7324":"35303fa6","chunk-2d0c86c4":"f591c9cd","chunk-2d0cbe2a":"176efff4","chunk-2d0cfde8":"0ab44c3d","chunk-2d0df483":"210310f8","chunk-2d20ebe8":"600fb00f","chunk-2d20fe30":"0523fec6","chunk-2d213ca6":"f2289b5d","chunk-2d21d15c":"4ba6fb59","chunk-2d230484":"44d1e9a3","chunk-2d230c09":"566de77a","chunk-2d237ad4":"901a447a","chunk-3feb3308":"05593b05","chunk-488c25c8":"e43d1ed3","chunk-6b38fd98":"eedfc0ae","chunk-7a69860f":"7dd25549","chunk-7bcf6b56":"3b891161","chunk-2d0e982f":"f48b67cd","chunk-2d21aed6":"aff945e3","chunk-2d225286":"b4f62421","chunk-4739b858":"3ed63d84","chunk-47be995a":"0d4012de","chunk-4ae75181":"ce56b301","chunk-547e9a82":"aae0278c","chunk-56c16476":"a7549417","chunk-574da2e8":"e75a13c0","chunk-598f7e24":"d18d17fa","chunk-6a1908d9":"63ea9c52","chunk-9b99a296":"ec5de9aa","chunk-aee6d744":"c4d52114","chunk-d2de3ae4":"e05cc8b2"}[e]+".js"}function u(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise(function(n,i){t=o[e]=[n,i]});n.push(t[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=r(e),c=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+i+": "+c+")");r.type=i,r.request=c,t[1](r)}o[e]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=i,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)u.d(t,i,function(n){return e[n]}.bind(null,i));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var a=0;a<d.length;a++)n(d[a]);var l=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"08b1":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{on:{wheel:e.localScroll}},[e._m(0),e._l(e.views,function(n,o){return i("div",{key:o,class:["tape",e.current==o&&e.isVisible&&"active"],attrs:{id:"tape_"+o}},[i("img",{attrs:{src:t("f57b")("./"+n.img+".svg")}})])})],2)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"embed-container"},[t("iframe",{attrs:{src:"https://player.vimeo.com/video/345442052?background=1&autoplay=1&loop=1",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}})])}],c=t("17fb"),r=t("1209"),u=t("5118"),d={name:"PageTwo",props:["isVisible","scroll","video"],data:function(){return{views:[{img:"TEMP_TITLE_CARDS-05",Y:200,X:-15},{img:"TEMP_TITLE_CARDS-06",Y:200,X:-15},{img:"TEMP_TITLE_CARDS-07",Y:200,X:-15},{img:"TEMP_TITLE_CARDS-08",Y:200,X:-15}],current:0}},watch:{isVisible:function(e){var n=this;e&&Object(u["setTimeout"])(function(){Object(r["a"])({targets:".tape.active",translateX:n.views[n.current].X,translateY:n.views[n.current].Y})},500)}},created:function(){this.localScroll=Object(c["debounce"])(this.localScroll,100)},methods:{localScroll:function(e){var n=this;e.wheelDelta>0?this.prev(e):this.next(e),console.log("here"),Object(u["setTimeout"])(function(){Object(r["a"])({targets:".tape",translateX:-1,translateY:-1}),Object(r["a"])({targets:".tape.active",translateX:n.views[n.current].X,translateY:n.views[n.current].Y})},500)},next:function(e){this.current+1!==this.views.length?this.current+=1:this.scroll(e)},prev:function(e){0!==this.current?this.current-=1:this.scroll(e)}},mounted:function(){}},s=d,a=t("2877"),l=Object(a["a"])(s,i,o,!1,null,"2e643d15",null);n["default"]=l.exports},"18aa":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-09.acecc9bf.svg"},"1b65":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-01.1a0398d1.svg"},"2a25":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-04.d5e35862.svg"},"2e98":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-06.4628b303.svg"},"4e46":function(e,n,t){e.exports=t.p+"img/Icons_STORIES_WHITE.6435e34f.png"},5443:function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-03.d6a53b66.svg"},5536:function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-05.344df137.svg"},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var i=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],r=(t("5c0b"),t("2877")),u={},d=Object(r["a"])(u,o,c,!1,null,null,null),s=d.exports,a=t("8c4f"),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"home"}},[t("div",{staticClass:"pillars-toggle"},[t("button",{style:"background-image: url("+e.ICON+")",on:{click:e.togglePillars}})]),e.current>=1&&e.current<=4?t("nav",e._l(e.views,function(n,i){return n.isIntro?t("div",{key:i},[t("div")]):e._e()}),0):e._e(),t("div",{staticClass:"slides"},e._l(e.views,function(n,i){return t("section",{key:i,class:["slide",e.current==i&&"active"]},[t(n.component,{tag:"component",attrs:{isVisible:e.current==i,scroll:e.scroll,video:n.video,parentCurrent:e.current},on:{next:e.next,prev:e.prev,go:e.go}})],1)}),0)])},h=[],v=(t("ac6a"),t("1209")),f=t("c8b5"),p=t.n(f),m=t("17fb"),b=t("4e46"),T=t.n(b),_=t("a3da"),k=t.n(_),g={name:"home",data:function(){return{isStarted:!1,ICON:T.a,views:[{video:"./videos/INTRO_video01_InstructionsBG.mp4",isIntro:!0,component:function(){return t.e("chunk-47be995a").then(t.bind(null,"e158"))}},{video:"./videos/INTRO_video02.mp4",isIntro:!0,component:function(){return t.e("chunk-2d0c1cae").then(t.bind(null,"480d"))}},{video:"./videos/INTRO_video03.mp4",isIntro:!0,component:function(){return Promise.resolve().then(t.bind(null,"08b1"))}},{video:"./videos/INTRO_video03.mp4",isIntro:!0,component:function(){return t.e("chunk-2d225286").then(t.bind(null,"e2cf"))}},{video:"./videos/INTRO_video03.mp4",isIntro:!0,component:function(){return t.e("chunk-2d0e982f").then(t.bind(null,"8e9e"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-2d21aed6").then(t.bind(null,"be30"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-3feb3308")]).then(t.bind(null,"d24c"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-4739b858").then(t.bind(null,"9780"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-488c25c8")]).then(t.bind(null,"b2b4"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-6b38fd98")]).then(t.bind(null,"a256"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-574da2e8").then(t.bind(null,"ab8e"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d0cfde8")]).then(t.bind(null,"660b"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-aee6d744").then(t.bind(null,"20b2"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d0c7324")]).then(t.bind(null,"501d"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-12e5c6d5").then(t.bind(null,"d3c7"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d0cbe2a")]).then(t.bind(null,"4c27"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d0cbe2a")]).then(t.bind(null,"4c27"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-7bcf6b56")]).then(t.bind(null,"5023"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-547e9a82").then(t.bind(null,"5e7a"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d0df483")]).then(t.bind(null,"88f3"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-9b99a296").then(t.bind(null,"e7e8"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d21d15c")]).then(t.bind(null,"d093"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d20fe30")]).then(t.bind(null,"b617"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-56c16476").then(t.bind(null,"a2af"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d20ebe8")]).then(t.bind(null,"b158"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d230484")]).then(t.bind(null,"ec2b"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d230484")]).then(t.bind(null,"ec2b"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-7a69860f")]).then(t.bind(null,"380c"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-d2de3ae4").then(t.bind(null,"967c"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d230c09")]).then(t.bind(null,"ee2e"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-6a1908d9").then(t.bind(null,"e30d"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d213ca6")]).then(t.bind(null,"add1"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-4ae75181").then(t.bind(null,"97dc"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d237ad4")]).then(t.bind(null,"fbac"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return t.e("chunk-598f7e24").then(t.bind(null,"ec66"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d0c86c4")]).then(t.bind(null,"558f"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d0c54d1")]).then(t.bind(null,"3f08"))}},{video:"./videos/INTRO_video03.mp4",component:function(){return Promise.all([t.e("chunk-2d0de528"),t.e("chunk-2d0c54d1")]).then(t.bind(null,"3f08"))}}],current:0}},created:function(){this.scroll=Object(m["debounce"])(this.scroll,100)},computed:{filteredViews:function(){var e=this;return this.views.filter(function(n,t){return t==e.current})}},watch:{current:function(e){6===e&&(this.ICON=T.a)}},methods:{togglePillars:function(){if(5===this.current)return this.current=0,void(this.ICON=T.a);this.current=5,this.ICON=k.a},scroll:function(e){e.wheelDelta>0?this.prev():this.next()},go:function(e){this.current=e},next:function(){16!==this.current&&24!==this.current&&35!==this.current?(console.log(this.current,"oooohhhyeeeahhh"),this.current!==this.views.length&&function(e){e.current+=1,setTimeout(function(){var n=document.querySelector("nav > div:nth-child(".concat(e.current,")"));n&&n.setAttribute("style","background-color: white")},500)}(this)):this.current=5},prev:function(){if(0!==this.current){this.current-=1;var e=document.querySelector("nav > div:nth-child(".concat(this.current+2,")"));e&&e.setAttribute("style","background-color: rgba(255, 255, 255, 0.25)")}},onPause:function(){this.timeline.pause()},onPlay:function(){this.timeline.play()},onStop:function(){this.isStarted&&(this.timeline.restart(),this.timeline.pause(),this.isStarted=!1)},onStart:function(){var e=this;if(!this.isStarted){this.isStarted=!0,this.timeline=v["a"].timeline({autoplay:!0,duration:1e4,easing:"linear",loop:!0}),this.views.forEach(function(n,t){e.timeline.add({targets:document.querySelectorAll("nav > div")[t].children[0],width:"100%",changeBegin:function(i){e.current=t,e.updateBG_VIDEO(n.video)}})});var n=new p.a(document.querySelector(".slides"));n.on("press",function(n){e.timeline.pause()}),n.on("pressup",function(n){e.timeline.play()}),n.on("tap",function(n){n.center.x>window.innerWidth/2?e.current<e.views.length-1&&(e.current+=1,e.timeline.pause(),e.timeline.seek(1e4*e.current),e.timeline.play()):e.current>0&&(e.current-=1,e.timeline.pause(),e.timeline.seek(1e4*e.current),e.timeline.play())})}}}},I=g,E=Object(r["a"])(I,l,h,!1,null,null,null),R=E.exports;t("08b1");i["a"].use(a["a"]);var O=new a["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"home",component:R}]}),P=t("2f62");i["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:O,store:S,render:function(e){return e(s)}}).$mount("#app")},"5ac5":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-07.24bae621.svg"},"5c0b":function(e,n,t){"use strict";var i=t("5e27"),o=t.n(i);o.a},"5e27":function(e,n,t){},"61d9":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-11.ae14a418.svg"},"62e2":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-12.86a63fc0.svg"},"79ec":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-08.88d421be.svg"},"8bf4":function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-13.f5cf9456.svg"},a3da:function(e,n,t){e.exports=t.p+"img/INTRODUCTION_ICON-26.9609e355.png"},c3d7:function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-02.2ac2f802.svg"},c604:function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-14.f6a0fafb.svg"},d2ef:function(e,n,t){e.exports=t.p+"img/TEMP_TITLE_CARDS-10.c54826dd.svg"},f57b:function(e,n,t){var i={"./TEMP_TITLE_CARDS-01.svg":"1b65","./TEMP_TITLE_CARDS-02.svg":"c3d7","./TEMP_TITLE_CARDS-03.svg":"5443","./TEMP_TITLE_CARDS-04.svg":"2a25","./TEMP_TITLE_CARDS-05.svg":"5536","./TEMP_TITLE_CARDS-06.svg":"2e98","./TEMP_TITLE_CARDS-07.svg":"5ac5","./TEMP_TITLE_CARDS-08.svg":"79ec","./TEMP_TITLE_CARDS-09.svg":"18aa","./TEMP_TITLE_CARDS-10.svg":"d2ef","./TEMP_TITLE_CARDS-11.svg":"61d9","./TEMP_TITLE_CARDS-12.svg":"62e2","./TEMP_TITLE_CARDS-13.svg":"8bf4","./TEMP_TITLE_CARDS-14.svg":"c604"};function o(e){var n=c(e);return t(n)}function c(e){var n=i[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(i)},o.resolve=c,e.exports=o,o.id="f57b"}});
//# sourceMappingURL=app.ea397c80.js.map