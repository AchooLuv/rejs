webpackJsonp([1],{"7GWS":function(s,t){},c0gc:function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"erc-con"},[i("h2",[s._v("通过传动装置进行优化")]),s._v(" "),i("p",[s._v("通过传动装置优化正则表达式时，即使正则引擎无法预知某个字符串能否匹配，也能减少传动装置真正应用正则表达式的次数！优化传动装置可以通过以下方面进行：")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s._v("    "),i("code",{staticClass:"javascript"},[s._v("      console.time();     // 启动定时器\n      /^orz|^luv/.test('luv is ok');   // 测试用例\n      console.timeEnd();    //结束定时器，输出用时 ==> default: 0.1201171875ms\n      console.time();    // 启动定时器\n      /^(?:orz|luv)/.test('luv is ok');   // 测试用例\n      console.timeEnd();    //结束定时器，输出用时 ==> default: 0.10693359375ms")]),s._v("\n  ")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s._v("    "),i("code",{staticClass:"javascript"},[s._v("      /(.+)X\\1/.test('123X234');    // 返回True\n      /^(.+)X\\1/.test('123X234');     // 返回false ==>这才是期望的结果")]),s._v("\n  ")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12)])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("span",{staticClass:"iconfont jh"},[this._v("")]),this._v("字符串起始/行锚点优化")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("span",{staticClass:"ins"},[this._v("这种优化措施能够判断，任何以"),t("span",{staticClass:"reg"},[this._v("^")]),this._v("开头的正则表达式只能在"),t("span",{staticClass:"reg"},[this._v("^")]),this._v("能够匹配的情况下才可能匹配，所以只需要在这些位置应用即可。例如下面这个例子：")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("span",{staticClass:"ins"},[this._v("由此可见，使用"),t("span",{staticClass:"reg"},[this._v("^(?:orz|luv)")]),this._v("代替"),t("span",{staticClass:"reg"},[this._v("^orz|^luv")]),this._v("能够显著的正则的提高匹配速度！")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("span",{staticClass:"iconfont jh"},[this._v("")]),this._v("隐式锚点优化")])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("p",[i("span",{staticClass:"ins"},[s._v("若正则表达式以"),i("span",{staticClass:"reg"},[s._v(".*")]),s._v("或"),i("span",{staticClass:"reg"},[s._v(".+")]),s._v("开头，并且没有全局性多选结构，则认为此正则表达式在开头有一个看不见的"),i("span",{staticClass:"reg"},[s._v("^")]),s._v("。即使开头的"),i("span",{staticClass:"reg"},[s._v(".*")]),s._v("或"),i("span",{staticClass:"reg"},[s._v(".+")]),s._v("在括号内，也可以进行同样的优化，但是在遇见捕获型括号时情况就有了变化。比如下例中，期望字符串"),i("span",{staticClass:"reg"},[s._v("X")]),s._v("两侧是相同的：")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("span",{staticClass:"iconfont jh"},[this._v("")]),this._v("字符串结束/行锚点优化")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("span",{staticClass:"ins"},[this._v("该优化遇到末尾的"),t("span",{staticClass:"reg"},[this._v("$")]),this._v("或其他结束锚点的正则表达式时，会从字符串末尾倒数若干字符的位置开始尝试匹配。比如正则表达式"),t("span",{staticClass:"reg"},[this._v("/Achoo(luv)?$/")]),this._v("匹配时只能从字符串末尾倒数第9个字符开始匹配。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("span",{staticClass:"iconfont jh"},[this._v("")]),this._v("开头字符/字符组/子串识别优化")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("span",{staticClass:"ins"},[this._v("该优化能使传动装置进行快速子字符串检查，在字符串中的合适位置应用正则表达式。比如"),t("span",{staticClass:"reg"},[this._v("this|that|other")]),this._v("只能从"),t("span",{staticClass:"reg"},[this._v("[ot]")]),this._v("的位置开始匹配，所以传动装置预先检查字符串中的每个字符，只在可能的位置进行尝试应用，这样就能节约大量的时间。能预先检查的子串越长，“错误的开始位置”就越少！")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("span",{staticClass:"iconfont jh"},[this._v("")]),this._v("内嵌文字字符串检查优化")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("span",{staticClass:"ins"},[this._v("该优化针对的是匹配中固定位置出现的文字字符串，只有在内嵌文字字符串与表达式起始位置的距离固定时才能进行优化。比如"),t("span",{staticClass:"reg"},[this._v("\\b(www|luv)\\.regexpjs\\.com\\b")]),this._v("能进行该优化，而"),t("span",{staticClass:"reg"},[this._v("\\b(www|m)\\.regexpjs\\.com\\b")]),this._v("则不行，因为字符串到匹配起始位置的距离不确定（3个字符或1个字符）。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("span",{staticClass:"iconfont jh"},[this._v("")]),this._v("长度识别传动优化")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("span",{staticClass:"ins"},[this._v("该优化规则为：若当前位置距字符串末尾的长度小于成功匹配所需的最小长度，传动装置会停止匹配尝试。")])])}]};var a=i("VU/8")({name:"Transmission"},e,!1,function(s){i("7GWS")},"data-v-d4296226",null);t.default=a.exports}});
//# sourceMappingURL=1.c5a77e89bbfb8976eb89.js.map