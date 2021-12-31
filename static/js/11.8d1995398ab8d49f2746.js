webpackJsonp([11],{FxWq:function(s,a){},"T3+n":function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"erc-con"},[t("h2",[s._v("正则表达式的应用原理")]),s._v(" "),t("p",[s._v("在掌握了正则表达式应用的基础知识和了解了回溯的细节后，现在来全面学习正则表达式应用到目标字符串的过程：\n    "),t("ul",[t("li",[s._v("正则表达式编译："),t("span",{staticClass:"ins"},[s._v("检查正则表达式的语法正确性，如果正确，将其编译为内部形式。")])]),s._v(" "),t("li",[s._v("传动开始："),t("span",{staticClass:"ins"},[s._v("正则引擎将正则引擎“定位”到目标字符串的其实位置。")])]),s._v(" "),t("li",[s._v("元素检测："),t("span",{staticClass:"ins"},[s._v("正则引擎开始测试正则表达式和文本，依次测试表达式的各个元素。")])]),s._v(" "),t("li",[s._v("寻找匹配结果："),t("span",{staticClass:"ins"},[s._v("若匹配到一个结果，传统型NFA会“锁定”当前状态，报告匹配成功。")])]),s._v(" "),t("li",[s._v("传动装置的驱动过程："),t("span",{staticClass:"ins"},[s._v("若未找到匹配，传动装置就会驱动引擎，从文本的下一个字符开始新一轮的尝试（回到第三步）。")])]),s._v(" "),t("li",[s._v("匹配彻底失败："),t("span",{staticClass:"ins"},[s._v("如果从目标字符串的每个字符开始尝试都失败了，就会报告匹配彻底失败。")])])])]),s._v(" "),t("p",[s._v("在元素检测这一步中，进行回溯时，还有几点需要注意：\n    "),t("ul",[t("li",[s._v("相连元素："),t("span",{staticClass:"ins"},[s._v("比如"),t("span",{staticClass:"reg"},[s._v("AchooLuv")]),s._v("中的"),t("span",{staticClass:"reg"},[s._v("A")]),s._v(" "),t("span",{staticClass:"reg"},[s._v("c")]),s._v(" "),t("span",{staticClass:"reg"},[s._v("h")]),s._v(" "),t("span",{staticClass:"reg"},[s._v("o")]),s._v(" "),t("span",{staticClass:"reg"},[s._v("o")]),s._v("等等，会依次尝试，只有当某个元素匹配失败时才会停止。")])]),s._v(" "),t("li",[s._v("量词修饰的元素："),t("span",{staticClass:"ins"},[s._v("控制权将在量词和被限定的元素之间轮换。")])]),s._v(" "),t("li",[s._v("控制权在捕获型括号内外切换时会带来一些开销："),t("span",{staticClass:"ins"},[s._v("因为一对括号可能属于某个回溯分支，括号的状态就是用于回溯状态的一部分，所以进入和退出捕获型括号时需要修改状态。")])])])]),s._v(" "),t("p",[s._v("打造高效正则就是要减少这些处理，以及如何适当的应用这些技巧，接下来将讲解这些技巧和注意事项！")])])}]};var _=t("VU/8")({name:"Application"},v,!1,function(s){t("FxWq")},"data-v-248215e1",null);a.default=_.exports}});
//# sourceMappingURL=11.8d1995398ab8d49f2746.js.map