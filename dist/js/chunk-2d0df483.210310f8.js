(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df483"],{"88f3":function(e,l,t){"use strict";t.r(l);var n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{on:{wheel:e.localScroll}},[e._m(0)])},o=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"embed-container"},[t("iframe",{attrs:{src:"https://player.vimeo.com/video/345906225?background=0&autoplay=0&loop=1",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:"",id:"page-19-iframe"}})])}],r=t("17fb"),a=(t("1209"),t("5118"),t("84c9")),c={name:"PageTen",props:["isVisible","scroll","video"],data:function(){return{views:[],current:0,player:null,backgroundAudio:null}},watch:{isVisible:function(e){e?this.player.play():this.player.pause()}},created:function(){this.localScroll=Object(r["debounce"])(this.localScroll,100)},methods:{localScroll:function(e){e.wheelDelta>0?this.prev(e):this.next(e),console.log("here")},next:function(e){this.scroll(e)},prev:function(e){this.scroll(e)}},mounted:function(){var e=document.querySelector("#page-19-iframe");this.player=new a["a"](e)}},i=c,s=t("2877"),u=Object(s["a"])(i,n,o,!1,null,"be67ac02",null);l["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0df483.210310f8.js.map