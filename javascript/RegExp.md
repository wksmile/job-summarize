# 正则表达式
**RegExp对象的方法：**
- *test*,形式regexp.test(str),测试字符串，符合模式返回true，否则返回false.
- *exec*,形式regexp.exec(str),返回一个数组，数组中的第一个元素为完整的匹配内容。返回的数组第1到n元素中包含的是匹配中出现的任意一个子匹配。不匹配时返回null。

**RegExp对象的属性：**
- regexp.source,对象的正则表达式字符串。
- RegExp对象的实例具有lastIndex属性,它是被查找字符串中下一次成功匹配的开始位置,默认值是-1。lastIndex 属性被RegExp对象的exec和test方法修改并且它是可写的。需要设置`g`才会有用。
当匹配失败（后面没有匹配），或lastIndex值大于字符串长度时，再执行exec等方法会将lastIndex设为0(开始位置)

**字符串中正则表达式的方法：**
- *replace*,形式`str.replace(regexp,newStr)`,如果正则没有带上 `g` 参数只会将第一次出现的一堆空白字符替换掉。加上 `g` 会匹配整个字符串。
- *split*,  形式`str.split(regexp)`
- *search*,形式`str.search(regexp)`,查找返回第一次匹配的开始下标，无论是否加`g`都是一样，没有找到匹配时返回-1。
- *match*,形式`str.match(regexp)`,返回匹配的结果数组，不匹配返回null.

