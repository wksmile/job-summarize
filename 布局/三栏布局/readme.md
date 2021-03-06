#### 题目：假设高度已知，请写出三栏布局，其中左栏、右栏宽度各为300px，中间自适应

> 分析：多种方案：浮动，负外边距法，绝对定位，flex布局，表格布局，网格布局（这个原理需要去看看，比较重要新的布局技术）

> 页面布局小结：语义化掌握到位，页面布局理解深刻，css基础知识扎实，思维灵活且积极上进，

延伸：
- 这五个方案各自的有的优点和缺点，它们之间的比较？

    - 浮动：缺点：关于清除浮动，脱离了文档流，处理不好会带来很多问题，如页面混乱——优点：兼容性很好
    - 绝对定位：缺点：脱离了文档流，使得它的子元素也脱离了文档流——优点：简单快捷，容易配合js使用
    - flex： 比较完美的布局，在现在的移动端使用很多，兼容性对于ie8等不兼容
    - table布局：缺点：当中间的高度增高，需要调整两边的高度——优点：兼容性很好，对于ie6也使用
    - 网格布局：代码优美简洁，不过还是兼容性问题，IE10+才可以用
    
- 如果考虑高度问题，比如中间内容高度撑开了，需要左右两侧的高度也会跟着撑开，那么上面六种方法还有哪些适用，哪个不可以用了
    - 还有flex布局和table表格布局可以适用（要能说出原因）
    - 为什么浮动的内容超出来了：因为没超出高度的部分被左边挡住了，正常浮动显示，到了下面部分左边没有元素可以挡住，所以直接浮动到左边
    - 如果需要浮动布局超出的部分不会影响左右两边，而是沿着中间内容宽度继续向下延伸怎么做：使用<b>BFC技术</b>（需要去查）
    
- 这六种方案的兼容性如何，如果叫你写业务，最优的方案是哪个

### 页面布局的变通

#### 三栏布局

- 左右宽度固定，中间自适应
- 上下高度固定，中间自适应（适用于移动端，应用率很高）

#### 两栏布局

- 左宽度固定，右自适应
- 右宽度固定，左自适应
- 上高度固定，下自适应
- 下高度固定，上自适应