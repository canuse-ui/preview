(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-form-switch"],{"0042":function(a,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c={name:"canuse-switch",model:{name:"value",event:"input"},props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},color:{type:String,default:"#1E90FF"},width:{type:String,default:"120rpx"},height:{type:String,default:"60rpx"}},methods:{toggleValue:function(){if(this.disabled)return!1;var a=!this.value;this.$emit("input",a),this.$emit("change",a)}},install:function(a){a.component(this.name,this)}};t.default=c},3084:function(a,t,e){"use strict";e.r(t);var c=e("0042"),n=e.n(c);for(var i in c)["default"].indexOf(i)<0&&function(a){e.d(t,a,(function(){return c[a]}))}(i);t["default"]=n.a},"3a90":function(a,t,e){"use strict";e.r(t);var c=e("3ad0"),n=e("bd68");for(var i in n)["default"].indexOf(i)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(i);var o,l=e("f0c5"),r=Object(l["a"])(n["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],o);t["default"]=r.exports},"3ad0":function(a,t,e){"use strict";var c;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return c}));var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"router-view container"},[e("ul",[e("li",[e("div",{staticClass:"cl-basic mb-10"},[a._v("基础")]),e("div",[e("canuse-switch",{model:{value:a.value1,callback:function(t){a.value1=t},expression:"value1"}})],1)]),e("li",[e("div",{staticClass:"cl-basic mb-10 mt-10"},[a._v("自定义颜色")]),e("div",[e("canuse-switch",{attrs:{color:"#FF1493"},model:{value:a.value2,callback:function(t){a.value2=t},expression:"value2"}})],1)]),e("li",[e("div",{staticClass:"cl-basic mb-10 mt-10"},[a._v("自定义大小")]),e("div",[e("canuse-switch",{attrs:{width:"100rpx",height:"50rpx"},model:{value:a.value3,callback:function(t){a.value3=t},expression:"value3"}})],1)]),e("li",[e("div",{staticClass:"cl-basic mb-10 mt-10"},[a._v("禁用（未选中）")]),e("div",[e("canuse-switch",{attrs:{disabled:!0},model:{value:a.value4,callback:function(t){a.value4=t},expression:"value4"}})],1)]),e("li",[e("div",{staticClass:"cl-basic mb-10 mt-10"},[a._v("禁用（已选中）")]),e("div",[e("canuse-switch",{attrs:{disabled:!0},model:{value:a.value5,callback:function(t){a.value5=t},expression:"value5"}})],1)]),e("li",[e("div",{staticClass:"cl-basic mb-10 mt-10"},[a._v("搭配单元格使用")]),e("div",[e("canuse-cell",[e("div",{attrs:{slot:"content"},slot:"content"},[e("canuse-switch",{model:{value:a.value1,callback:function(t){a.value1=t},expression:"value1"}})],1)])],1)])])])},i=[]},"3c62":function(a,t,e){"use strict";e("7a82");var c=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(e("84f3")),i=c(e("40c8")),o={data:function(){return{value1:!0,value2:!0,value3:!0,value4:!1,value5:!0}},components:{"canuse-switch":n.default,"canuse-cell":i.default}};t.default=o},"84f3":function(a,t,e){"use strict";e.r(t);var c=e("fc38"),n=e("3084");for(var i in n)["default"].indexOf(i)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(i);e("f975");var o,l=e("f0c5"),r=Object(l["a"])(n["default"],c["b"],c["c"],!1,null,"72605c6e",null,!1,c["a"],o);t["default"]=r.exports},adf7:function(a,t,e){var c=e("4bad");t=c(!1),t.push([a.i,'@charset "UTF-8";\n/*\n * @Author: fangquan\n * @Purpose: 样式库导入\n */\n/*\n * @Author: fangquan\n * @Purpose:  全局变量\n */.cl-main[data-v-72605c6e]{color:#409eff!important}.bcl-main[data-v-72605c6e]{background-color:#409eff!important}.cl-black[data-v-72605c6e]{color:#303133!important}.bcl-black[data-v-72605c6e]{background-color:#303133!important}.cl-white[data-v-72605c6e]{color:#fff!important}.bcl-white[data-v-72605c6e]{background-color:#fff!important}.cl-basic[data-v-72605c6e]{color:#909399!important}.bcl-basic[data-v-72605c6e]{background-color:#909399!important}.cl-second[data-v-72605c6e]{color:#c0c4cc!important}.bcl-second[data-v-72605c6e]{background-color:#c0c4cc!important}.cl-border[data-v-72605c6e]{color:#ebeef5!important}.bcl-border[data-v-72605c6e]{background-color:#ebeef5!important}.cl-mask[data-v-72605c6e]{color:rgba(0,0,0,.6)!important}.bcl-mask[data-v-72605c6e]{background-color:rgba(0,0,0,.6)!important}.cl-primary[data-v-72605c6e]{color:#409eff!important}.bcl-primary[data-v-72605c6e]{background-color:#409eff!important}.cl-success[data-v-72605c6e]{color:#46d662!important}.bcl-success[data-v-72605c6e]{background-color:#46d662!important}.cl-warning[data-v-72605c6e]{color:#e6a23c!important}.bcl-warning[data-v-72605c6e]{background-color:#e6a23c!important}.cl-danger[data-v-72605c6e]{color:#ff7f88!important}.bcl-danger[data-v-72605c6e]{background-color:#ff7f88!important}.cl-disabled[data-v-72605c6e]{color:#d1d5dc!important}.bcl-disabled[data-v-72605c6e]{background-color:#d1d5dc!important}.cl-active[data-v-72605c6e]{color:#f2f6fc!important}.bcl-active[data-v-72605c6e]{background-color:#f2f6fc!important}.cl-pointer[data-v-72605c6e]{color:rgba(0,0,0,.2)!important}.bcl-pointer[data-v-72605c6e]{background-color:rgba(0,0,0,.2)!important}.canuse-switch[data-v-72605c6e]{position:relative;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;overflow:unset}.canuse-switch .switch-btn[data-v-72605c6e]{position:absolute;top:0;left:0;width:50%;height:100%;-webkit-transition:inherit;transition:inherit}.canuse-switch.checked .switch-btn[data-v-72605c6e]{-webkit-transform:translateX(100%);transform:translateX(100%)}.canuse-switch.disabled.checked[data-v-72605c6e]{opacity:.5}',""]),a.exports=t},afff:function(a,t,e){var c=e("adf7");c.__esModule&&(c=c.default),"string"===typeof c&&(c=[[a.i,c,""]]),c.locals&&(a.exports=c.locals);var n=e("4f06").default;n("d3d08634",c,!0,{sourceMap:!1,shadowMode:!1})},bd68:function(a,t,e){"use strict";e.r(t);var c=e("3c62"),n=e.n(c);for(var i in c)["default"].indexOf(i)<0&&function(a){e.d(t,a,(function(){return c[a]}))}(i);t["default"]=n.a},f975:function(a,t,e){"use strict";var c=e("afff"),n=e.n(c);n.a},fc38:function(a,t,e){"use strict";var c;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return c}));var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"canuse-switch inline-block border radius-around",class:{checked:a.value,disabled:a.disabled},style:{"background-color":a.value?a.color:a.disabled?"#e3e3ed":"white",width:a.width,height:a.height},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.toggleValue.apply(void 0,arguments)}}},[e("div",{staticClass:"switch-btn radius-circle shadow bcl-white"})])},i=[]}}]);