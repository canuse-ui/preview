(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-exhibition-h5-swipe"],{"0713":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("b8a1"));a("f23b");var o={name:"canuse-h5-swipe-item",data:function(){return{}},components:{vantSwipeItem:n.default},install:function(t){t.component(this.name,this)}};e.default=o},"0832":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"router-view bcl-active"},[a("ul",[a("li",[a("div",{staticClass:"cl-basic mb-10 container"},[t._v("基础")]),a("canuse-h5-swipe",{staticClass:"my-swipe",attrs:{indicatorColor:"white",autoplay:3e3}},[a("canuse-h5-swipe-item",[t._v("1")]),a("canuse-h5-swipe-item",[t._v("2")]),a("canuse-h5-swipe-item",[t._v("3")]),a("canuse-h5-swipe-item",[t._v("4")])],1)],1),a("li",[a("div",{staticClass:"cl-basic mb-10 container"},[t._v("轮播图")]),a("canuse-h5-swipe",{attrs:{autoplay:3e3}},t._l(t.images,(function(t,e){return a("canuse-h5-swipe-item",{key:e},[a("img",{staticClass:"imgStyle",attrs:{src:t}})])})),1)],1),a("li",[a("div",{staticClass:"cl-basic mb-10 container"},[t._v("监听change事件")]),a("canuse-h5-swipe",{staticClass:"my-swipe",attrs:{indicatorColor:"white"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[a("canuse-h5-swipe-item",[t._v("1")]),a("canuse-h5-swipe-item",[t._v("2")]),a("canuse-h5-swipe-item",[t._v("3")]),a("canuse-h5-swipe-item",[t._v("4")])],1)],1),a("li",[a("div",{staticClass:"cl-basic mb-10 container"},[t._v("纵向滚动")]),a("canuse-h5-swipe",{staticClass:"my-swipe-vertical",staticStyle:{height:"150px"},attrs:{autoplay:3e3,indicatorColor:"white",vertical:!0}},[a("canuse-h5-swipe-item",[t._v("1")]),a("canuse-h5-swipe-item",[t._v("2")]),a("canuse-h5-swipe-item",[t._v("3")]),a("canuse-h5-swipe-item",[t._v("4")])],1)],1),a("li",[a("div",{staticClass:"cl-basic mb-10 container"},[t._v("自定义滑块大小")]),a("canuse-h5-swipe",{staticClass:"my-swipe",attrs:{loop:!1,indicatorColor:"white",width:"300"}},[a("canuse-h5-swipe-item",[t._v("1")]),a("canuse-h5-swipe-item",[t._v("2")]),a("canuse-h5-swipe-item",[t._v("3")]),a("canuse-h5-swipe-item",[t._v("4")])],1)],1),a("li",[a("div",{staticClass:"cl-basic mb-10 container"},[t._v("自定义指示器")]),a("canuse-h5-swipe",{staticClass:"my-swipe",attrs:{showIndicators:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change2.apply(void 0,arguments)}}},[a("canuse-h5-swipe-item",[t._v("1")]),a("canuse-h5-swipe-item",[t._v("2")]),a("canuse-h5-swipe-item",[t._v("3")]),a("canuse-h5-swipe-item",[t._v("4")]),a("div",{attrs:{slot:"indicator"},slot:"indicator"},[a("div",{staticClass:"custom-indicator"},[t._v(t._s(t.current+1)+"/4")])])],1)],1)])])},o=[]},"11ca":function(t,e,a){"use strict";e.__esModule=!0,e.ChildrenMixin=n,e.ParentMixin=o;var i=a("c35f");function n(t,e){var a,n;void 0===e&&(e={});var o=e.indexKey||"index";return{inject:(a={},a[t]={default:null},a),computed:(n={parent:function(){return this.disableBindRelation?null:this[t]}},n[o]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},n),watch:{disableBindRelation:function(t){t||this.bindRelation()}},mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);(0,i.sortChildren)(t,this.parent),this.parent.children=t}}}}}function o(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"15df":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canuse-swipe relative"},[a("vantSwipe",{attrs:{"show-indicators":t.showIndicators,"indicator-color":t.indicatorColor,loop:t.loop,vertical:t.vertical,touchable:t.touchable,"stop-propagation":t.stopPropagation,autoplay:t.autoplay,duration:t.duration,"initial-swipe":t.initialSwipe,width:t.width,height:t.height},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._t("default")],2),t._t("indicator")],2)},o=[]},"17ab":function(t,e,a){var i=a("b1bf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6272e481",i,!0,{sourceMap:!1,shadowMode:!1})},"18e1":function(t,e,a){"use strict";a.r(e);var i=a("0713"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"1e99":function(t,e,a){"use strict";a.r(e);var i=a("9b56"),n=a("18e1");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("5a06");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"60dc682f",null,!1,i["a"],r);e["default"]=c.exports},"221d":function(t,e,a){var i=a("cb92");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("28c1b6e5",i,!0,{sourceMap:!1,shadowMode:!1})},"2c58":function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/*\n * @Author: fangquan\n * @Purpose: 样式库导入\n */\n/*\n * @Author: fangquan\n * @Purpose:  全局变量\n */.cl-main[data-v-60dc682f]{color:#409eff!important}.bcl-main[data-v-60dc682f]{background-color:#409eff!important}.cl-black[data-v-60dc682f]{color:#303133!important}.bcl-black[data-v-60dc682f]{background-color:#303133!important}.cl-white[data-v-60dc682f]{color:#fff!important}.bcl-white[data-v-60dc682f]{background-color:#fff!important}.cl-basic[data-v-60dc682f]{color:#909399!important}.bcl-basic[data-v-60dc682f]{background-color:#909399!important}.cl-second[data-v-60dc682f]{color:#c0c4cc!important}.bcl-second[data-v-60dc682f]{background-color:#c0c4cc!important}.cl-border[data-v-60dc682f]{color:#ebeef5!important}.bcl-border[data-v-60dc682f]{background-color:#ebeef5!important}.cl-mask[data-v-60dc682f]{color:rgba(0,0,0,.6)!important}.bcl-mask[data-v-60dc682f]{background-color:rgba(0,0,0,.6)!important}.cl-primary[data-v-60dc682f]{color:#409eff!important}.bcl-primary[data-v-60dc682f]{background-color:#409eff!important}.cl-success[data-v-60dc682f]{color:#46d662!important}.bcl-success[data-v-60dc682f]{background-color:#46d662!important}.cl-warning[data-v-60dc682f]{color:#e6a23c!important}.bcl-warning[data-v-60dc682f]{background-color:#e6a23c!important}.cl-danger[data-v-60dc682f]{color:#ff7f88!important}.bcl-danger[data-v-60dc682f]{background-color:#ff7f88!important}.cl-disabled[data-v-60dc682f]{color:#d1d5dc!important}.bcl-disabled[data-v-60dc682f]{background-color:#d1d5dc!important}.cl-active[data-v-60dc682f]{color:#f2f6fc!important}.bcl-active[data-v-60dc682f]{background-color:#f2f6fc!important}.cl-pointer[data-v-60dc682f]{color:rgba(0,0,0,.2)!important}.bcl-pointer[data-v-60dc682f]{background-color:rgba(0,0,0,.2)!important}.van-swipe-item img[data-v-60dc682f]{display:block;box-sizing:border-box;width:100%;height:240px;padding:30px 60px;background-color:#fff;pointer-events:none}',""]),t.exports=e},"3e6b":function(t,e,a){a("221d"),a("613b")},"47a1":function(t,e,a){"use strict";a.r(e);var i=a("5937"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},5937:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("7cec")),o=i(a("1e99")),r={data:function(){return{images:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"],current:0}},methods:{change:function(t){this.$toast("当前 Swipe 索引：".concat(t))},change2:function(t){this.current=t}},components:{"canuse-h5-swipe":n.default,"canuse-h5-swipe-item":o.default}};e.default=r},"5a06":function(t,e,a){"use strict";var i=a("d4b3"),n=a.n(i);n.a},"5c17":function(t,e,a){"use strict";a.r(e);var i=a("0832"),n=a("47a1");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("873e");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"b69a1586",null,!1,i["a"],r);e["default"]=c.exports},"613b":function(t,e,a){var i=a("e236");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7917ccc6",i,!0,{sourceMap:!1,shadowMode:!1})},7813:function(t,e,a){var i=a("ea0d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6ccb2bea",i,!0,{sourceMap:!1,shadowMode:!1})},"7cec":function(t,e,a){"use strict";a.r(e);var i=a("15df"),n=a("bc0e");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},8410:function(t,e,a){"use strict";(function(t){e.__esModule=!0,e.raf=l,e.doubleRaf=d,e.cancelRaf=u;var i=a("c798"),n=Date.now();function o(t){var e=Date.now(),a=Math.max(0,16-(e-n)),i=setTimeout(t,a);return n=e+a,i}var r=i.isServer?t:window,s=r.requestAnimationFrame||o,c=r.cancelAnimationFrame||r.clearTimeout;function l(t){return s.call(r,t)}function d(t){l((function(){l(t)}))}function u(t){c.call(r,t)}}).call(this,a("c8ba"))},"873e":function(t,e,a){"use strict";var i=a("17ab"),n=a.n(i);n.a},"9b56":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vantSwipeItem",[t._t("default")],2)},o=[]},a838:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n=i(a("b92c"));a("3e6b");var o={name:"canuse-h5-swipe",props:{loop:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},indicatorColor:{type:String,default:"#1989fa"},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0},autoplay:{type:Number,default:0},duration:{type:Number,default:500},initialSwipe:{type:[String,Number],default:0},width:{type:[String,Number],default:"auto"},height:{type:[String,Number],default:"auto"}},methods:{change:function(t){this.$emit("change",t)}},install:function(t){t.components(this.name,this)},components:{vantSwipe:n.default}};e.default=o},aa32:function(t,e,a){"use strict";function i(t){var e=window.getComputedStyle(t),a="none"===e.display,i=null===t.offsetParent&&"fixed"!==e.position;return a||i}e.__esModule=!0,e.isHidden=i},b1bf:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/*\n * @Author: fangquan\n * @Purpose: 样式库导入\n */\n/*\n * @Author: fangquan\n * @Purpose:  全局变量\n */.cl-main[data-v-b69a1586]{color:#409eff!important}.bcl-main[data-v-b69a1586]{background-color:#409eff!important}.cl-black[data-v-b69a1586]{color:#303133!important}.bcl-black[data-v-b69a1586]{background-color:#303133!important}.cl-white[data-v-b69a1586]{color:#fff!important}.bcl-white[data-v-b69a1586]{background-color:#fff!important}.cl-basic[data-v-b69a1586]{color:#909399!important}.bcl-basic[data-v-b69a1586]{background-color:#909399!important}.cl-second[data-v-b69a1586]{color:#c0c4cc!important}.bcl-second[data-v-b69a1586]{background-color:#c0c4cc!important}.cl-border[data-v-b69a1586]{color:#ebeef5!important}.bcl-border[data-v-b69a1586]{background-color:#ebeef5!important}.cl-mask[data-v-b69a1586]{color:rgba(0,0,0,.6)!important}.bcl-mask[data-v-b69a1586]{background-color:rgba(0,0,0,.6)!important}.cl-primary[data-v-b69a1586]{color:#409eff!important}.bcl-primary[data-v-b69a1586]{background-color:#409eff!important}.cl-success[data-v-b69a1586]{color:#46d662!important}.bcl-success[data-v-b69a1586]{background-color:#46d662!important}.cl-warning[data-v-b69a1586]{color:#e6a23c!important}.bcl-warning[data-v-b69a1586]{background-color:#e6a23c!important}.cl-danger[data-v-b69a1586]{color:#ff7f88!important}.bcl-danger[data-v-b69a1586]{background-color:#ff7f88!important}.cl-disabled[data-v-b69a1586]{color:#d1d5dc!important}.bcl-disabled[data-v-b69a1586]{background-color:#d1d5dc!important}.cl-active[data-v-b69a1586]{color:#f2f6fc!important}.bcl-active[data-v-b69a1586]{background-color:#f2f6fc!important}.cl-pointer[data-v-b69a1586]{color:rgba(0,0,0,.2)!important}.bcl-pointer[data-v-b69a1586]{background-color:rgba(0,0,0,.2)!important}.router-view ul li[data-v-b69a1586]{margin:%?40?% 0}.router-view ul li .canuse-button[data-v-b69a1586],\n.router-view ul li canuse-button[data-v-b69a1586]{margin:0 %?20?% %?20?% 0}.router-view .my-swipe .van-swipe-item[data-v-b69a1586]{color:#fff;font-size:20px;line-height:150px;text-align:center}.router-view .my-swipe .van-swipe-item[data-v-b69a1586]:nth-child(odd){background-color:#39a9ed}.router-view .my-swipe .van-swipe-item[data-v-b69a1586]:nth-child(even){background-color:#66c6f2}.router-view .imgStyle[data-v-b69a1586]{display:block;box-sizing:border-box;width:100%;height:240px;padding:30px 60px;background-color:#fff;object-fit:contain;pointer-events:none}.router-view .custom-indicator[data-v-b69a1586]{position:absolute;right:5px;bottom:5px;padding:2px 5px;font-size:12px;color:#fff;background:rgba(0,0,0,.1)}.router-view .my-swipe-vertical[data-v-b69a1586] .van-swipe,\n.router-view .my-swipe-vertical .van-swipe__track[data-v-b69a1586],\n.router-view .my-swipe-vertical .van-swipe-item[data-v-b69a1586]{height:100%}.router-view .my-swipe-vertical .van-swipe-item[data-v-b69a1586]{color:#fff;font-size:20px;line-height:150px;text-align:center}.router-view .my-swipe-vertical .van-swipe-item[data-v-b69a1586]:nth-child(odd){background-color:#39a9ed}.router-view .my-swipe-vertical .van-swipe-item[data-v-b69a1586]:nth-child(even){background-color:#66c6f2}',""]),t.exports=e},b8a1:function(t,e,a){"use strict";var i=a("6f14");e.__esModule=!0,e.default=void 0;var n=i(a("7d3f")),o=a("c798"),r=a("11ca"),s=(0,o.createNamespace)("swipe-item"),c=s[0],l=s[1],d=c({mixins:[(0,r.ChildrenMixin)("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},e=this.parent,a=e.size,i=e.vertical;return a&&(t[i?"height":"width"]=a+"px"),this.offset&&(t.transform="translate"+(i?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,e=this.inited,a=this.parent,i=this.mounted;if(!a.lazyRender||e)return!0;if(!i)return!1;var n=a.activeIndicator,o=a.count-1,r=0===n&&a.loop?o:n-1,s=n===o&&a.loop?0:n+1,c=t===n||t===r||t===s;return c&&(this.inited=!0),c}},render:function(){var t=arguments[0];return t("div",{class:l(),style:this.style,on:(0,n.default)({},this.$listeners)},[this.shouldRender&&this.slots()])}});e.default=d},b92c:function(t,e,a){"use strict";e.__esModule=!0,e.default=void 0;var i=a("c798"),n=a("aa32"),o=a("c0f0"),r=a("8410"),s=a("eecb"),c=a("c93f"),l=a("11ca"),d=a("58d6"),u=(0,i.createNamespace)("swipe"),f=u[0],h=u[1],v=f({mixins:[c.TouchMixin,(0,l.ParentMixin)("vanSwipe"),(0,d.BindEventMixin)((function(t,e){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),e?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t={transitionDuration:(this.swiping?0:this.duration)+"ms",transform:"translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)"};if(this.size){var e=this.vertical?"height":"width",a=this.vertical?"width":"height";t[e]=this.trackSize+"px",t[a]=this[a]?this[a]+"px":""}return t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!(0,n.isHidden)(this.$el)){clearTimeout(this.timer);var e={width:this.$el.offsetWidth,height:this.$el.offsetHeight};this.rect=e,this.swiping=!0,this.active=t,this.computedWidth=+this.width||e.width,this.computedHeight=+this.height||e.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&((0,o.preventDefault)(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,e=this.delta,a=Date.now()-this.touchStartTime,i=e/a,n=Math.abs(i)>.25||Math.abs(e)>t/2;if(n&&this.isCorrectDirection){var o=this.vertical?this.offsetY:this.offsetX,r=0;r=this.loop?o>0?e>0?-1:1:0:-Math[e>0?"ceil":"floor"](e/t),this.move({pace:r,emitChange:!0})}else e&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,a=this.count,i=this.maxCount;return t?this.loop?(0,s.range)(e+t,-1,a):(0,s.range)(e+t,0,i):e},getTargetOffset:function(t,e){void 0===e&&(e=0);var a=t*this.size;this.loop||(a=Math.min(a,-this.minOffset));var i=e-a;return this.loop||(i=(0,s.range)(i,this.minOffset,0)),i},move:function(t){var e=t.pace,a=void 0===e?0:e,i=t.offset,n=void 0===i?0:i,o=t.emitChange,r=this.loop,s=this.count,c=this.active,l=this.children,d=this.trackSize,u=this.minOffset;if(!(s<=1)){var f=this.getTargetActive(a),h=this.getTargetOffset(f,n);if(r){if(l[0]&&h!==u){var v=h<u;l[0].offset=v?d:0}if(l[s-1]&&0!==h){var p=h>0;l[s-1].offset=p?-d:0}}this.active=f,this.offset=h,o&&f!==c&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),(0,r.doubleRaf)((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),(0,r.doubleRaf)((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,e){var a=this;void 0===e&&(e={}),this.correctPosition(),this.resetTouchStatus(),(0,r.doubleRaf)((function(){var i;i=a.loop&&t===a.count?0===a.active?0:t:t%a.count,e.immediate?(0,r.doubleRaf)((function(){a.swiping=!1})):a.swiping=!1,a.move({pace:i-a.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),e))},genIndicator:function(){var t=this,e=this.$createElement,a=this.count,i=this.activeIndicator,n=this.slots("indicator");return n||(this.showIndicators&&a>1?e("div",{class:h("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(a)).map((function(a,n){return e("i",{class:h("indicator",{active:n===i}),style:n===i?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:h()},[t("div",{ref:"track",style:this.trackStyle,class:h("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}});e.default=v},bc0e:function(t,e,a){"use strict";a.r(e);var i=a("a838"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},c35f:function(t,e,a){"use strict";function i(t){var e=[];function a(t){t.forEach((function(t){e.push(t),t.componentInstance&&a(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&a(t.children)}))}return a(t),e}function n(t,e){var a=e.$vnode.componentOptions;if(a&&a.children){var n=i(a.children);t.sort((function(t,e){return n.indexOf(t.$vnode)-n.indexOf(e.$vnode)}))}}e.__esModule=!0,e.sortChildren=n},cb92:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'html{-webkit-tap-highlight-color:transparent}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,miui,Hiragino Sans GB,Microsoft Yahei,sans-serif}a{text-decoration:none}uni-button,uni-input,uni-textarea{color:inherit;font:inherit}[class*=van-]:focus,a:focus,uni-button:focus,uni-input:focus,uni-textarea:focus{outline:0}ol,ul{margin:0;padding:0;list-style:none}.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.van-clearfix::after{display:table;clear:both;content:""}[class*=van-hairline]::after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--top::after{border-top-width:1px}.van-hairline--left::after{border-left-width:1px}.van-hairline--right::after{border-right-width:1px}.van-hairline--bottom::after{border-bottom-width:1px}.van-hairline--top-bottom::after,.van-hairline-unset--top-bottom::after{border-width:1px 0}.van-hairline--surround::after{border-width:1px}@-webkit-keyframes van-slide-up-enter{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-enter{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-down-enter{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-enter{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-left-enter{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-enter{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-right-enter{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-enter{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-fade-in{from{opacity:0}to{opacity:1}}@keyframes van-fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes van-fade-out{from{opacity:1}to{opacity:0}}@keyframes van-fade-out{from{opacity:1}to{opacity:0}}@-webkit-keyframes van-rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes van-rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.van-fade-enter-active{-webkit-animation:.3s van-fade-in both ease-out;animation:.3s van-fade-in both ease-out}.van-fade-leave-active{-webkit-animation:.3s van-fade-out both ease-in;animation:.3s van-fade-out both ease-in}.van-slide-up-enter-active{-webkit-animation:van-slide-up-enter .3s both ease-out;animation:van-slide-up-enter .3s both ease-out}.van-slide-up-leave-active{-webkit-animation:van-slide-up-leave .3s both ease-in;animation:van-slide-up-leave .3s both ease-in}.van-slide-down-enter-active{-webkit-animation:van-slide-down-enter .3s both ease-out;animation:van-slide-down-enter .3s both ease-out}.van-slide-down-leave-active{-webkit-animation:van-slide-down-leave .3s both ease-in;animation:van-slide-down-leave .3s both ease-in}.van-slide-left-enter-active{-webkit-animation:van-slide-left-enter .3s both ease-out;animation:van-slide-left-enter .3s both ease-out}.van-slide-left-leave-active{-webkit-animation:van-slide-left-leave .3s both ease-in;animation:van-slide-left-leave .3s both ease-in}.van-slide-right-enter-active{-webkit-animation:van-slide-right-enter .3s both ease-out;animation:van-slide-right-enter .3s both ease-out}.van-slide-right-leave-active{-webkit-animation:van-slide-right-leave .3s both ease-in;animation:van-slide-right-leave .3s both ease-in}',""]),t.exports=e},d4b3:function(t,e,a){var i=a("2c58");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1fe7bb74",i,!0,{sourceMap:!1,shadowMode:!1})},e236:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,".van-swipe{position:relative;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);cursor:grab;-webkit-user-select:none;user-select:none}.van-swipe__track{display:-webkit-box;display:-webkit-flex;display:flex;height:100%}.van-swipe__track--vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-swipe__indicators{position:absolute;bottom:12px;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{top:50%;bottom:auto;left:12px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{width:6px;height:6px;background-color:#ebedf0;border-radius:100%;opacity:.3;-webkit-transition:opacity .2s,background-color .2s;transition:opacity .2s,background-color .2s}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#1989fa;opacity:1}",""]),t.exports=e},ea0d:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,".van-swipe-item{position:relative;-webkit-flex-shrink:0;flex-shrink:0;width:100%;height:100%}",""]),t.exports=e},eecb:function(t,e,a){"use strict";function i(t,e,a){return Math.min(Math.max(t,e),a)}function n(t,e,a){var i=t.indexOf(e),n="";return-1===i?t:"-"===e&&0!==i?t.slice(0,i):("."===e&&t.match(/^(\.|-\.)/)&&(n=i?"-0":"0"),n+t.slice(0,i+1)+t.slice(i).replace(a,""))}function o(t,e,a){void 0===e&&(e=!0),void 0===a&&(a=!0),t=e?n(t,".",/\./g):t.split(".")[0],t=a?n(t,"-",/-/g):t.replace(/-/,"");var i=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(i,"")}function r(t,e){var a=Math.pow(10,10);return Math.round((t+e)*a)/a}e.__esModule=!0,e.range=i,e.formatNumber=o,e.addNumber=r},f23b:function(t,e,a){a("221d"),a("7813")}}]);