webpackJsonp([12],{"1NXa":function(s,t){},YcNA:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"mpc-con"},[a("h2",[s._v("正则引擎的介绍")]),s._v(" "),a("p",[a("span",{staticClass:"ins"},[s._v("正则引擎主要分为基本不同的两大类：一种是"),a("span",[s._v("DFA")]),s._v("引擎，可类比于电动汽车的电动发动机；另一种则是我们要详细讲解的"),a("span",[s._v("NFA")]),s._v("引擎，可类比于汽车的汽油发动机！两类引擎都有很长的历史，不过，正如汽油发动机一样，"),a("span",[s._v("NFA")]),s._v("引擎的历史更长一些，当今的绝大多数主流编程语言采用的也是"),a("span",[s._v("NFA")]),s._v("引擎，下表列举了一些主流的编程语言或工具采用的正则引擎：\n    ")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("正则引擎类型")]),s._v(" "),a("th",[s._v("编程语言或工具")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("DFA")]),s._v(" "),a("td",[s._v("MySQL、flex、lex、egrep")])]),s._v(" "),a("tr",[a("td",[s._v("POSIX NFA")]),s._v(" "),a("td",[s._v("mawk、GNU Emacs")])]),s._v(" "),a("tr",[a("td",[s._v("传统型 NFA")]),s._v(" "),a("td",[s._v("Perl、Java、JavaScript、Python、C、C#、C++、PHP、Ruby、.Net")])]),s._v(" "),a("tr",[a("td",[s._v("NFA/DFA混合")]),s._v(" "),a("td",[s._v("GNU awk、Tcl")])])])]),s._v(" "),a("p",[a("span",{staticClass:"ins"},[s._v("JavaScript采用的正则引擎是传统型NFA引擎，NFA引擎是基于表达式的匹配，这和基于文本的匹配的DFA引擎是完全不同的，NFA引擎与DFA引擎的区别有很多，让我对比来了解NFA引擎：")])]),s._v(" "),a("h3",[a("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("NFA与DFA在预编译期的区别：")]),s._v(" "),a("p",[a("span",{staticClass:"ins"},[s._v("在预编译期间，通常NFA的编译速度快于DFA，占用的内存也更少！")])]),s._v(" "),a("h3",[a("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("NFA与DFA在匹配速度上的区别：")]),s._v(" "),a("p",[a("span",{staticClass:"ins"},[s._v("在匹配速度上，由于NFA是基于表达式的匹配，在报告无法匹配之前，必须尝试正则表达式的所有变体，所以，通常NFA的匹配速度慢于DFA！")])]),s._v(" "),a("h3",[a("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("NFA与DFA在匹配结果上的区别：")]),s._v(" "),a("p",[a("span",{staticClass:"ins"},[s._v("在匹配结果上，DFA或者POSIX NFA会返回最左边的最长的匹配文本，匹配结果是确定的，而传统型NFA则不一定返回这样的文本，也可能是其它文本，所以传统型NFA的匹配结果是不确定的！")])]),s._v(" "),a("h3",[a("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("NFA与DFA在能力上的区别：")]),s._v(" "),a("p",[a("span",{staticClass:"ins"},[s._v("NFA提供了一些DFA不支持的功能：捕获分组、环视及其它复杂的零长度确认、忽略优先量词及有序的多选分支结构（POSIX NFA也不支持此功能）、占有优先量词、固化分组！")])]),s._v(" "),a("p",[s._v("总结以上区别，在不考虑混用NFA/DFA的情况下，很容易发现：若引擎支持"),a("span",{staticClass:"ins"},[s._v("忽略优先量词(非贪婪模式)")]),s._v("，则该引擎一定是传统型NFA引擎；若引擎不支持"),a("span",{staticClass:"ins"},[s._v("忽略优先量词(非贪婪模式)")]),s._v("，但是支持"),a("span",{staticClass:"ins"},[s._v("捕获分组和回溯")]),s._v("，则该引擎一定是POSIX NFA引擎;若引擎以上三个功能都不支持，则一定是DFA引擎！")])])}]};var _=a("VU/8")({name:"Engines"},v,!1,function(s){a("1NXa")},"data-v-14088261",null);t.default=_.exports}});
//# sourceMappingURL=12.e753e5d03a3987e552c8.js.map