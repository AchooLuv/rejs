webpackJsonp([18],{"9KSD":function(e,t){},"9n10":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"iconfont nav-pc"},[n("router-link",{staticClass:"home",attrs:{to:"/"}},[e._v("RegExpJS")]),e._v(" "),n("ul",{staticClass:"nav-l1"},e._l(e.navs,function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:t.path},domProps:{innerHTML:e._s(t.name)}}),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.ul,expression:"nav.ul"}],staticClass:"nav-l2"},e._l(t.ul,function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.anchor},domProps:{innerHTML:e._s('<span style="font-size:.3rem;color:rgb(0, 159, 23)">&#xe64a;</span>'+t.name)}})])}),0)],1)}),0),e._v(" "),n("a",{staticClass:"com-disc",attrs:{href:"https://7sun.me"}},[e._v("作者博客")]),e._v(" "),e._m(0)],1),e._v(" "),n("div",{staticClass:"iconfont homeIcon",on:{click:function(t){e.show=!e.show}}},[e._v("")]),e._v(" "),n("transition",{attrs:{name:"navs","enter-active-class":"animated slideInLeft","leave-active-class":"animated slideOutLeft"}},[e.show?n("nav",{staticClass:"iconfont nav-mobile",on:{click:function(t){e.show=!e.show}}},[n("router-link",{staticClass:"home",attrs:{to:"/"}},[e._v("RegExpJS")]),e._v(" "),n("ul",{staticClass:"nav-l1"},e._l(e.navs,function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:t.path},domProps:{innerHTML:e._s(t.name)}}),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.ul,expression:"nav.ul"}],staticClass:"nav-l2"},e._l(t.ul,function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.anchor},domProps:{innerHTML:e._s('<span style="font-size:.3rem;color:rgb(0, 159, 23)">&#xe64a;</span>'+t.name)}})])}),0)],1)}),0),e._v(" "),n("a",{staticClass:"com-disc",attrs:{href:"https://7sun.me"}},[e._v("作者博客")])],1):e._e()])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"info"},[t("p",[this._v("\n        Crafted by\n        "),t("a",{attrs:{href:"https://github.com/AchooLuv",target:"_blank"}},[this._v("AchooLuv")]),this._v("\n        with heart.\n      ")])])}]};var i={name:"Top",data:function(){return{show:!1}},methods:{top:function(){var e=this.$refs.top,t=this,n=null,a=!0,o=document.documentElement.clientHeight||document.body.clientHeight;window.addEventListener("scroll",function(){(document.documentElement.scrollTop||document.body.scrollTop)>=o?(t.show=!0,e.classList.add("zoomIn")):(e.classList.remove("zoomIn"),e.classList.add("fadeOutUp")),a||clearInterval(n),a=!1}),e.addEventListener("click",function(){n=setInterval(function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=Math.floor(-e/5);document.documentElement.scrollTop=document.body.scrollTop=e+t,a=!0,0===e&&clearInterval(n)},50)})}},activated:function(){window.addEventListener("scroll",this.top)},deactivated:function(){window.addEventListener("scroll",this.top)}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("a",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],ref:"top",staticClass:"iconfont animated top",on:{click:this.top}},[this._v("")])},staticRenderFns:[]};var c={name:"App",components:{Nav:n("VU/8")({name:"Nav",data:function(){return{show:!1,screenWidth:100,navs:[{id:1,name:"元字符",path:"/mc",ul:[{id:1,name:"计数功能型",anchor:"/mc/counter"},{id:2,name:"匹配位置型",anchor:"/mc/location"},{id:3,name:"匹配单个字符型",anchor:"/mc/single"},{id:4,name:"进阶型元字符",anchor:"/mc/advance"},{id:5,name:"其它类型",anchor:"/mc/other"},{id:6,name:"运算优先级",anchor:"/mc/priority"}]},{id:2,name:"匹配原理",path:"/mp",ul:[{id:1,name:"正则引擎介绍",anchor:"/mp/engines"},{id:2,name:"引擎匹配的规则",anchor:"/mp/rules"},{id:3,name:"NFA引擎与回溯",anchor:"/mp/recall"}]},{id:3,name:"高效正则",path:"/er",ul:[{id:1,name:"正则应用原理",anchor:"/er/application"},{id:2,name:"传动装置优化",anchor:"/er/transmission"},{id:3,name:"表达式本身优化",anchor:"/er/itself"},{id:4,name:"提高表达式速度",anchor:"/er/faster"},{id:5,name:"消除表达式循环",anchor:"/er/loop"}]}]}}},o,!1,function(e){n("9KSD")},"data-v-c45c9b30",null).exports,Top:n("VU/8")(i,r,!1,function(e){n("qp1G")},"data-v-1a521cf2",null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Nav"),this._v(" "),t("router-view",{staticClass:"docs"}),this._v(" "),t("keep-alive",[t("Top")],1)],1)},staticRenderFns:[]};var l=n("VU/8")(c,s,!1,function(e){n("RqY0")},"data-v-f52d6b56",null).exports,u=n("/ocq"),m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-con"},[n("h1",[e._v("正则表达式")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"tools"},[e._v("正则学习工具推荐：")]),e._v(" "),e._l(e.tools,function(t){return n("a",{key:t.id,staticClass:"iconfont tool animated zoomInLeft",attrs:{href:t.url}},[n("i",{domProps:{innerHTML:e._s(e.icon)}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(t.name)}}),e._v(" "),n("p",{domProps:{innerHTML:e._s(t.desc)}})])})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n    正则表达式是一门功能极其强大的文本处理语言，现在几乎被所有的高级语言所支持。本教程是网站作者在学习\n    "),t("a",{attrs:{href:"https://www.amazon.cn/mn/detailApp/ref=asc_df_05965281242949480/?asin=0596528124&tag=douban-23&creative=2384&creativeASIN=0596528124&linkCode=df0",target:"_blank"}},[this._v("《精通正则表达式 第三版》")]),this._v("\n    一书后，总结的一些学习感悟与收获！教程将会以"),t("span",[this._v("JavaScript")]),this._v("为载体，由浅入深的讲解正则表达式的匹配原理、使用方法以及如何编写高效正则表达式。\n  ")])}]};var d=n("VU/8")({name:"Home",data:function(){return{icon:"&#xe613;",tools:[{id:1,name:"RegExr",desc:"提供了非常详细的可查询内容的正则表达式学习网站！",url:"https://regexr.com/"},{id:2,name:"RegExper",desc:"一个真正的正则表达式匹配规则图示化的学习网站！",url:"https://regexper.com/"},{id:3,name:"RegExp&nbsp;Preview",desc:"一款图示化正则规则的轻量级VS&nbsp;Code可扩展插件",url:"https://marketplace.visualstudio.com/items?itemName=le0zh.vscode-regexp-preivew"}]}}},m,!1,function(e){n("VCLw")},"data-v-cf7f776e",null).exports;a.a.use(u.a);var p=new u.a({mode:"history",routes:[{path:"/",name:"Home",meta:{title:"RegExpJS - Crafted by AchooLuv"},component:d},{path:"/mc",name:"Mc",redirect:"/mc/counter",meta:{title:"元字符 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(13).then(n.bind(null,"8Xw3"))},children:[{path:"counter",name:"Counter",meta:{title:"计数功能型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(2).then(n.bind(null,"UdCf"))}},{path:"location",name:"Location",meta:{title:"匹配位置型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(14).then(n.bind(null,"U/hw"))}},{path:"single",name:"Single",meta:{title:"匹配单个字符型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(4).then(n.bind(null,"Yv3h"))}},{path:"advance",name:"Advance",meta:{title:"进阶型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(7).then(n.bind(null,"cYsG"))}},{path:"other",name:"Other",meta:{title:"其它类型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(0).then(n.bind(null,"eRe/"))}},{path:"priority",name:"Priority",meta:{title:"元字符运算优先级 - 元字符 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(10).then(n.bind(null,"56f4"))}}]},{path:"/mp",name:"Mp",redirect:"/mp/engines",meta:{title:"匹配原理 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(6).then(n.bind(null,"msIz"))},children:[{path:"engines",name:"Engines",meta:{title:"正则引擎介绍 - 高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(12).then(n.bind(null,"YcNA"))}},{path:"rules",name:"Rules",meta:{title:"引擎的匹配规则 - 高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(5).then(n.bind(null,"968/"))}},{path:"recall",name:"Recall",meta:{title:"NFA引擎与回溯 - 高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(15).then(n.bind(null,"f+y1"))}}]},{path:"/er",name:"Er",redirect:"/er/application",meta:{title:"高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(3).then(n.bind(null,"aE13"))},children:[{path:"application",name:"Application",meta:{title:"正则应用原理 - 高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(11).then(n.bind(null,"T3+n"))}},{path:"transmission",name:"Transmission",meta:{title:"传动装置优化 - 高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(1).then(n.bind(null,"c0gc"))}},{path:"itself",name:"Itself",meta:{title:"表达式本身优化 - 高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(16).then(n.bind(null,"FZum"))}},{path:"faster",name:"Faster",meta:{title:"提高表达式速度 - 高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(8).then(n.bind(null,"OnHi"))}},{path:"loop",name:"Loop",meta:{title:"消除表达式循环 - 高效正则 - RegExpJS - Crafted by AchooLuv"},component:function(){return n.e(9).then(n.bind(null,"SaAw"))}}]}],scrollBehavior:function(e,t,n){return{x:0,y:0}}});p.beforeEach(function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()});var h=p,v=n("oPmM"),f=n.n(v),_=n("5CJf"),b=n.n(_);n("9n10"),n("TzC8"),n("TJvI");a.a.use(f.a),a.a.use(b.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:h,components:{App:l},template:"<App/>"})},RqY0:function(e,t){},TJvI:function(e,t){},TzC8:function(e,t){},VCLw:function(e,t){},oPmM:function(e,t){},qp1G:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.74ba0f3a0560a71bce54.js.map