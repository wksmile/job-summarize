##### 什么是DOCTYPE及作用？
1. <!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器以何种模式来渲染文档。 
2. 严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。
3. 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
4. DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。 

- HTML5-----<!DOCTYPE html>
- HTML 4.01 Strict(严格模式)该DTD包含所有HTML元素和属性，但不包括展示型的和弃用的元素<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">(这个不用记)
- HTML 4.01 Transitional （松散模式）该DTD包含所有HTML元素和属性，包括展示性的和弃用的元素<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">（这个不用记）

##### BOM和DOM的区别
DOM: DOM是一个使程序和脚本有能力动态地访问和更新文档的内容、结构以及样式的平台和语言中立的接口
BOM: BOM定义了JavaScript可以进行操作的浏览器的各个功能部件的接口

