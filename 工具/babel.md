##### babel的原理，具体怎么做的？怎么区分<是小于号还是开始的符号。
[Babel是如何读懂JS代码的](https://zhuanlan.zhihu.com/p/27289600)

如果是开始符号<，肯定有结束符号>对应的，小于号<是双目运算符，左右两边应该是数值

Babel的功能非常纯粹，以字符串的形式将源代码传给它，它就会返回一段新的代码字符串（以及sourcemap）。他既不会运行你的代码，也不会将多个代码打包到一起，它就是个编译器，输入语言是ES6+，编译目标语言是ES5。

1. 解析：将代码字符串解析成抽象语法树。 
可以验证语法的正确性，同时由字符串变为对象结构后更有利于精准地分析以及进行代码结构调整。

    1. 分词：将整个代码字符串分割成 **语法单元** 数组
    2. 语义分析：在分词结果的基础之上分析语法单元之间的关系

2. 变换：对抽象语法树进行变换操作。 
遍历这个对象所描述的抽象语法树，遇到哪里需要做一下改变，就直接在对象上进行操作。

3. 再建：根据变换后的抽象语法树再生成代码字符串。 
递归遍历这颗语法树，然后生成相应的代码

##### babel的了解，写babel插件
[你了解过Babel吗？写过Babel插件吗? 答: 没有。卒](https://cnodejs.org/topic/5a9317d38d6e16e56bb808d1)


