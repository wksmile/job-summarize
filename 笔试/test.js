let wordList = [
    ['热烈', '万分', '非常'],
    ['欢迎', '感谢', '谢谢'],
    ['您', '亲', '老板', '大神'],
    ['光临', '惠顾', '支持'],
    ['小店', '本店', '火女菜馆']
];

let M = 4;

/** @example cross([[1]], [2,3]) // [[1,2], [1,3]] */
let cross = (a1, a2) => a1.reduce((r, s1) => r.concat(a2.map(s2 => [...s1, s2])), []);
//还可以这么写
//let cross = (a1, a2) => [].concat(...a1.map(s1 => a2.map(s2 => [...s1, s2])));

let result = wordList.slice(0, M).reduce(cross, [[]]);

console.log(result);



