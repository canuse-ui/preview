(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-navigation-tab"],{"0a17":function(t,a,e){"use strict";e.r(a);var n=e("1afc"),i=e("8960");for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(c);var s,o=e("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"2461309a",null,!1,n["a"],s);a["default"]=r.exports},"1a97":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"canuse-tabs canuse-tabs--line"},[t.isUni?e("v-uni-scroll-view",{staticClass:"canuse-tabs__wrap bcl-white",class:{"border-bottom":t.border,"canuse-tabs__wrap--scrollable":t.list.length>4,sticky:t.sticky},attrs:{"scroll-left":t.scrollLeft,"scroll-x":!0,"scroll-with-animation":!0}},[e("div",{staticClass:"canuse-tabs__nav canuse-tabs__uni canuse-tabs__nav--line canuse-tabs__nav--complete"},t._l(t.list,(function(a,n){return e("div",{key:a.id,ref:"vanTabs",refInFor:!0,staticClass:"canuse-tab",class:{"canuse-tab--active active":t.value==n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeIndex(n)}}},[e("span",{staticClass:"canuse-tab__text canuse-tab__text--ellipsis"},[t._v(t._s(a))])])})),0)]):e("div",{staticClass:"canuse-tabs__wrap ",class:{"border-bottom":t.border,"canuse-tabs__wrap--scrollable":t.list.length>4,sticky:t.sticky}},[e("div",{staticClass:"canuse-tabs__nav canuse-tabs__nav--line canuse-tabs__nav--complete",class:{isUniFalse:!t.isUni}},t._l(t.list,(function(a,n){return e("div",{key:a.id,ref:"vanTabs",refInFor:!0,staticClass:"canuse-tab ",class:{"canuse-tab--active active":t.value==n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeIndex(n)}}},[e("span",{staticClass:"canuse-tab__text canuse-tab__text--ellipsis"},[t._v(t._s(a))])])})),0)]),t._t("default")],2)},c=[]},"1afc":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"router-view bcl-active"},[e("ul",[e("li",{staticClass:"cl-basic container mt-10"},[t._v("基础")]),e("canuse-tab",{attrs:{list:t.list},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.changeIndex.apply(void 0,arguments)}},model:{value:t.active1,callback:function(a){t.active1=a},expression:"active1"}},[e("div",{staticClass:"container bcl-white"},[t._v(t._s(t.list[t.active1]))])]),e("li",{staticClass:"cl-basic container mt-30"},[t._v("标签栏滚动")]),e("canuse-tab",{attrs:{list:t.list2},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.changeIndex.apply(void 0,arguments)}},model:{value:t.active2,callback:function(a){t.active2=a},expression:"active2"}},[e("div",{staticClass:"container bcl-white"},[t._v(t._s(t.list2[t.active2]))])]),e("li",{staticClass:"cl-basic container mt-30"},[t._v("粘性布局")]),e("canuse-tab",{attrs:{list:t.list3,sticky:!0},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.changeIndex.apply(void 0,arguments)}},model:{value:t.active4,callback:function(a){t.active4=a},expression:"active4"}},[e("div",{staticClass:"container bcl-white"},t._l(100,(function(a){return e("div",{key:a},[t._v(t._s(a))])})),0)])],1)])},c=[]},4130:function(t,a,e){"use strict";var n=e("a99b"),i=e.n(n);i.a},"58ab":function(t,a,e){"use strict";e.r(a);var n=e("cb53"),i=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(c);a["default"]=i.a},8960:function(t,a,e){"use strict";e.r(a);var n=e("d141"),i=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(c);a["default"]=i.a},a99b:function(t,a,e){var n=e("c163");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("58e78562",n,!0,{sourceMap:!1,shadowMode:!1})},b63e:function(t,a,e){"use strict";e.r(a);var n=e("1a97"),i=e("58ab");for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(c);e("4130");var s,o=e("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6f93d08f",null,!1,n["a"],s);a["default"]=r.exports},c163:function(t,a,e){var n=e("4bad");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/*\n * @Author: fangquan\n * @Purpose: 样式库导入\n */\n/*\n * @Author: fangquan\n * @Purpose:  全局变量\n */.cl-main[data-v-6f93d08f]{color:#409eff!important}.bcl-main[data-v-6f93d08f]{background-color:#409eff!important}.cl-black[data-v-6f93d08f]{color:#303133!important}.bcl-black[data-v-6f93d08f]{background-color:#303133!important}.cl-white[data-v-6f93d08f]{color:#fff!important}.bcl-white[data-v-6f93d08f]{background-color:#fff!important}.cl-basic[data-v-6f93d08f]{color:#909399!important}.bcl-basic[data-v-6f93d08f]{background-color:#909399!important}.cl-second[data-v-6f93d08f]{color:#c0c4cc!important}.bcl-second[data-v-6f93d08f]{background-color:#c0c4cc!important}.cl-border[data-v-6f93d08f]{color:#ebeef5!important}.bcl-border[data-v-6f93d08f]{background-color:#ebeef5!important}.cl-mask[data-v-6f93d08f]{color:rgba(0,0,0,.6)!important}.bcl-mask[data-v-6f93d08f]{background-color:rgba(0,0,0,.6)!important}.cl-primary[data-v-6f93d08f]{color:#409eff!important}.bcl-primary[data-v-6f93d08f]{background-color:#409eff!important}.cl-success[data-v-6f93d08f]{color:#46d662!important}.bcl-success[data-v-6f93d08f]{background-color:#46d662!important}.cl-warning[data-v-6f93d08f]{color:#e6a23c!important}.bcl-warning[data-v-6f93d08f]{background-color:#e6a23c!important}.cl-danger[data-v-6f93d08f]{color:#ff7f88!important}.bcl-danger[data-v-6f93d08f]{background-color:#ff7f88!important}.cl-disabled[data-v-6f93d08f]{color:#d1d5dc!important}.bcl-disabled[data-v-6f93d08f]{background-color:#d1d5dc!important}.cl-active[data-v-6f93d08f]{color:#f2f6fc!important}.bcl-active[data-v-6f93d08f]{background-color:#f2f6fc!important}.cl-pointer[data-v-6f93d08f]{color:rgba(0,0,0,.2)!important}.bcl-pointer[data-v-6f93d08f]{background-color:rgba(0,0,0,.2)!important}.canuse-tabs[data-v-6f93d08f]{position:relative}.canuse-tabs--line .canuse-tabs__wrap[data-v-6f93d08f]{height:44px}.canuse-tabs__wrap[data-v-6f93d08f]{overflow:hidden}.canuse-tabs__wrap.canuse-tabs__wrap--scrollable .canuse-tabs__nav--complete[data-v-6f93d08f]{padding-right:8px;padding-left:8px}.canuse-tabs__wrap.canuse-tabs__wrap--scrollable .canuse-tabs__nav--complete .canuse-tab[data-v-6f93d08f]{-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto;padding:0 12px}.canuse-tabs__wrap .canuse-tabs__nav[data-v-6f93d08f]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;-webkit-user-select:none;user-select:none}.canuse-tabs__wrap .canuse-tabs__nav .canuse-tabs__line[data-v-6f93d08f]{position:absolute;bottom:15px;left:0;z-index:1;border-radius:3px}.canuse-tabs__wrap .canuse-tabs__nav--line[data-v-6f93d08f]{box-sizing:initial;height:100%;padding-bottom:15px}.canuse-tabs__wrap .canuse-tab[data-v-6f93d08f]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;color:#646566;padding:0 4px;font-size:14px;line-height:20px;cursor:pointer}.canuse-tabs__wrap .canuse-tab .canuse-tab__text--ellipsis[data-v-6f93d08f]{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.canuse-tabs__wrap .canuse-tab.canuse-tab--active[data-v-6f93d08f]{color:#323233;font-weight:500}.canuse-tabs__wrap .canuse-tab.active[data-v-6f93d08f]::after{position:absolute;content:"";bottom:0;left:50%;width:40px;height:3px;background-color:#ee0a24;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.isUniFalse[data-v-6f93d08f]{overflow-x:auto;overflow-y:hidden}',""]),t.exports=a},cb53:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3"),e("b680"),e("acd8"),e("ac1f");var n={name:"canuse-tab",model:{prop:"value",event:"input"},props:{value:{type:Number,default:0},list:{type:Array,default:[]},sticky:{type:Boolean,default:!1},border:{type:Boolean,default:!1}},data:function(){return{tabWidth:0,tabsDur:.3,isUni:"undefined"!=typeof uni,scrollLeft:0}},mounted:function(){var t=this;this.$nextTick((function(){t.isUni||(t.tabWidth=parseFloat(t.$refs["vanTabs"][0].getBoundingClientRect().width).toFixed(1)||0)}))},computed:{tabsLine:function(){if(this.list.length<=4)return this.tabWidth/2+this.tabWidth*this.value;if(0==this.value)return this.tabWidth/2+8+this.tabWidth*this.value;var t=0;if(!this.isUni){for(var a=0,e=0;e<this.value;e++)a+=1*parseFloat(this.$refs["vanTabs"][e].getBoundingClientRect().width).toFixed(1)||0;var n=1*parseFloat(this.$refs["vanTabs"][this.value].getBoundingClientRect().width).toFixed(1)||0;t=n/2+8+a}return t}},methods:{changeIndex:function(t){var a=this;if(this.value==t)return!1;this.$emit("input",t),this.$emit("change",t),this.isUni&&uni.createSelectorQuery().in(this).selectAll(".canuse-tabs__nav .canuse-tab").boundingClientRect((function(e){for(var n=0,i=0;i<t;i++)n+=e[i].width;var c=uni.getSystemInfoSync().windowWidth/2;n>c&&a.list.length>4?a.scrollLeft=e[t].width/2+n-c:a.scrollLeft=0})).exec()}},install:function(t){t.component(this.name,this)}};a.default=n},d141:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("b63e")),c={data:function(){return{active:[0,0,0,0],active1:0,active2:0,active3:0,active4:0,list:["标签一","标签二","标签三","标签四"],list2:["标签一","标签二","标签三","标签四","标签五","标签六","标签七","标签八"],list3:["标签一","标签二","标签三"]}},methods:{changeIndex:function(t){console.log(t)}},components:{"canuse-tab":i.default}};a.default=c}}]);