(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b38fd98"],{a256:function(e,l,t){"use strict";t.r(l);var n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{on:{wheel:e.localScroll}},[e._m(0)])},a=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"embed-container"},[t("iframe",{attrs:{src:"https://player.vimeo.com/video/345724331?background=0&autoplay=0&loop=1",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:"",id:"page-ten-iframe"}})])}],o=t("17fb"),r=(t("1209"),t("5118"),t("84c9")),c=t("a7f1"),i=t.n(c),s={name:"PageTen",props:["isVisible","scroll","video"],data:function(){return{views:[],current:0,IMG:i.a,player:null}},watch:{isVisible:function(e){e?this.player.play():this.player.pause()}},created:function(){this.localScroll=Object(o["debounce"])(this.localScroll,100)},methods:{localScroll:function(e){e.wheelDelta>0?this.prev(e):this.next(e),console.log("here")},next:function(e){this.scroll(e)},prev:function(e){this.scroll(e)}},mounted:function(){var e=document.querySelector("#page-ten-iframe");this.player=new r["a"](e)}},u=s,p=t("2877"),f=Object(p["a"])(u,n,a,!1,null,"90e218b2",null);l["default"]=f.exports},a7f1:function(e,l,t){e.exports=t.p+"img/language_bio-25.865425fa.png"}}]);
//# sourceMappingURL=chunk-6b38fd98.eedfc0ae.js.map