webpackJsonp([8],{Bc1E:function(s,a){},OnHi:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"erc-con"},[t("h2",[s._v("提高表达式速度的技巧")]),s._v(" "),t("p",[s._v("传统型NFA引擎允许我们主导引擎更快地匹配，但有时提高了表达式的匹配效率，却让其难以维护和理解，所以更多的时候我们需要权衡，修改表达式带来好处的程度来决定应用以下这些技巧：")]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("使用起始锚点")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[s._v("若以"),t("span",{staticClass:"reg"},[s._v(".*")]),s._v("开头的正则表达式都应在最前面添加"),t("span",{staticClass:"reg"},[s._v("^")]),s._v("或"),t("span",{staticClass:"reg"},[s._v("\\A")]),s._v("，因为，如果该表达式在某字符串开头不能匹配，那么它一定不能在该字符串的其它位置匹配。")])]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("使用非捕获型括号")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[s._v("若不需要引用括号内的文本，则使用非捕获型括号"),t("span",{staticClass:"reg"},[s._v("(?:)")]),s._v("。这样不但能节省捕获时间，而且还能减少回溯使用的状态数量。")])]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("从量词中“提取”必须的元素")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[s._v("比如，用"),t("span",{staticClass:"reg"},[s._v("xx*")]),s._v("替代"),t("span",{staticClass:"reg"},[s._v("x+")]),s._v("能“提取”必须匹配的"),t("span",{staticClass:"reg"},[s._v("x")]),s._v("。")])]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("“提取”多选结构开头的必须元素")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[s._v("比如，用"),t("span",{staticClass:"reg"},[s._v("regexp(?:er|js)")]),s._v("替代"),t("span",{staticClass:"reg"},[s._v("(?:regexper|regexpjs)")]),s._v("，提取必须匹配的元素"),t("span",{staticClass:"reg"},[s._v("regexp")]),s._v("。")])]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("在表达式前面或末尾独立出锚点")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[t("span",{staticClass:"reg"},[s._v("^(?:orz|luv)")]),s._v("和"),t("span",{staticClass:"reg"},[s._v("^orz|^luv")]),s._v("在逻辑上等价，但传统型NFA引擎只会对前者进行优化，所以前者的效率更高。独立出结尾锚点也是一样的原理，比如："),t("span",{staticClass:"reg"},[s._v("(?:orz|luv)$")]),s._v("与"),t("span",{staticClass:"reg"},[s._v("orz$|luv$")]),s._v("。")])]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("拆分正则表达式")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[s._v("有时候，应用多个小正则表达式的速度比一个大正则表达式快的多，比如，依次检查"),t("span",{staticClass:"reg"},[s._v("orz")]),s._v("、"),t("span",{staticClass:"reg"},[s._v("luv")]),s._v("之类的速度要比检查"),t("span",{staticClass:"reg"},[s._v("orz|luv")]),s._v("的速度快，尤其是检查元素增多后。原因也很简单，因为后者不存在必须匹配成功的文字内容，故不会进行“内嵌文字字符串检查优化”。")])]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("模拟开头字符识别")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[s._v("通过在表达式开头添加环视结构进行手动的开头字符识别优化，在正则表达式的其他部分匹配之前，环视结构可以进行“预查”，选择合适的开始位置。比如可以将上例中的"),t("span",{staticClass:"reg"},[s._v("Orz|Luv")]),s._v("改写成肯定正序环视结构"),t("span",{staticClass:"reg"},[s._v("(?=[OL])(?:Orz|Luv)")]),s._v("，这样写的好处是匹配结果更精确，但性能可能会降。")])]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("使用固化分组与占有优先量词")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[s._v("在多数情况下，固化分组和占有优先量词能极大地提高匹配速度，而且不会改变匹配结果。比如"),t("span",{staticClass:"reg"},[s._v("^[^:]+:")]),s._v("中的冒号第一次尝试是无法匹配，那么任何回溯都是没有意义的。而使用固化分组"),t("span",{staticClass:"reg"},[s._v("^(?>[^:]+):")]),s._v("或者占有优先量词"),t("span",{staticClass:"reg"},[s._v("^[^:]++:")]),s._v("能直接抛弃备用状态或者根本不创建多少备用状态。由于引擎没有内容状态可以进行回溯，就不会进行不必要的回溯而增加开销。")])]),s._v(" "),t("h3",[t("span",{staticClass:"iconfont jh"},[s._v("")]),s._v("将最可能匹配的多选分支放在前面")]),s._v(" "),t("p",[t("span",{staticClass:"ins"},[s._v("若匹配正确与顺序无关时，那么应该将最有可能匹配的多选分支放在首位，比如主机名匹配中的"),t("span",{staticClass:"reg"},[s._v("(?:com|org|net|cn|me)\\b")]),s._v("，将应用最广泛的排在最前面。")])])])}]};var _=t("VU/8")({name:"Faster"},v,!1,function(s){t("Bc1E")},"data-v-319a8c7c",null);a.default=_.exports}});
//# sourceMappingURL=8.d1ba0f894c0f32648d69.js.map