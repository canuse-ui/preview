(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-style-layout-basic"],{"5dde":function(t,n,a){"use strict";a.r(n);var s=a("7bbe"),e=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(n,t,(function(){return s[t]}))}(i);n["default"]=e.a},"7bbe":function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{status:1}},methods:{changeStatus:function(){this.status<3?this.status+=1:this.status=1}}};n.default=s},ad3c:function(t,n,a){"use strict";a.r(n);var s=a("fd3b"),e=a("5dde");for(var i in e)["default"].indexOf(i)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(i);var c,u=a("f0c5"),r=Object(u["a"])(e["default"],s["b"],s["c"],!1,null,"11c7e1fc",null,!1,s["a"],c);n["default"]=r.exports},fd3b:function(t,n,a){"use strict";var s;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return s}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"router-view container"},[a("ul",[t._m(0),a("li",{staticClass:"mt-20"},[a("div",{staticClass:"cl-basic mb-10"},[t._v("盒子类型")]),a("div",[a("div",{staticClass:"container shadow mb-20 mr-20",class:[1==t.status?"block":2==t.status?"inline-block":"hidden"]},[t._v(t._s(1==t.status?"block":"inline-block"))]),a("canuse-button",{attrs:{type:"main"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeStatus.apply(void 0,arguments)}}},[t._v("切换状态")])],1)])])])},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("li",[a("div",{staticClass:"cl-basic mb-10"},[t._v("基础")]),a("div",{staticClass:"container shadow"},[t._v("我是内容")])])}]}}]);