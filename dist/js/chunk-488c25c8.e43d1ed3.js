(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-488c25c8"],{a7f1:function(e,l,n){e.exports=n.p+"img/language_bio-25.865425fa.png"},b2b4:function(e,l,n){"use strict";n.r(l);var t=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{on:{wheel:e.localScroll}},[e._m(0)])},a=[function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{staticClass:"embed-container"},[n("iframe",{attrs:{src:"https://player.vimeo.com/video/345474463?background=0&autoplay=0&loop=1",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:"",id:"page-nine-iframe"}})])}],o=n("17fb"),c=(n("1209"),n("5118"),n("84c9")),r=n("a7f1"),i=n.n(r),s={name:"PageEight",props:["isVisible","scroll","video"],data:function(){return{views:[],current:0,IMG:i.a,player:null}},watch:{isVisible:function(e){e?this.player.play():this.player.pause()}},created:function(){this.localScroll=Object(o["debounce"])(this.localScroll,100)},methods:{localScroll:function(e){e.wheelDelta>0?this.prev(e):this.next(e),console.log("here")},next:function(e){this.scroll(e)},prev:function(e){this.scroll(e)}},mounted:function(){var e=document.querySelector("#page-nine-iframe");this.player=new c["a"](e)}},u=s,p=n("2877"),f=Object(p["a"])(u,t,a,!1,null,"17d42dca",null);l["default"]=f.exports}}]);
//# sourceMappingURL=chunk-488c25c8.e43d1ed3.js.map