// 题目：请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
// 思路：使用正则表达式，\s+代表多个空格，？则表示取尽可能少的空格，然后通过replace函数替换为%20

function replaceSpace(str) {
    return str.replace(/\s+?/g,'%20');
}

console.log(replaceSpace('We are  happy'));
