(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225286"],{e2cf:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{wheel:t.localScroll}},[t._m(0),t._l(t.views,function(e,s){return n("div",{key:s,class:["tape",t.current==s&&t.isVisible&&"active"],attrs:{id:"tape_"+s}},[n("img",{attrs:{src:r("f57b")("./"+e.img+".svg")}})])})],2)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"embed-container"},[r("iframe",{attrs:{src:"https://player.vimeo.com/video/345467379?background=1&autoplay=1&loop=1",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}})])}],c=r("17fb"),i=r("1209"),a=r("5118"),l={name:"PageFour",props:["isVisible","scroll","video"],data:function(){return{views:[{img:"TEMP_TITLE_CARDS-07",Y:200,X:-15},{img:"TEMP_TITLE_CARDS-08",Y:200,X:-15}],current:0}},watch:{isVisible:function(t){var e=this;t&&Object(a["setTimeout"])(function(){Object(i["a"])({targets:".tape.active",translateX:e.views[e.current].X,translateY:e.views[e.current].Y})},500)}},created:function(){this.localScroll=Object(c["debounce"])(this.localScroll,100)},methods:{localScroll:function(t){var e=this;t.wheelDelta>0?this.prev(t):this.next(t),console.log("here"),Object(a["setTimeout"])(function(){Object(i["a"])({targets:".tape",translateX:-1,translateY:-1}),Object(i["a"])({targets:".tape.active",translateX:e.views[e.current].X,translateY:e.views[e.current].Y})},500)},next:function(t){this.current+1!==this.views.length?this.current+=1:this.scroll(t)},prev:function(t){0!==this.current?this.current-=1:this.scroll(t)}},mounted:function(){}},o=l,u=r("2877"),f=Object(u["a"])(o,n,s,!1,null,"729df25b",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d225286.b4f62421.js.map