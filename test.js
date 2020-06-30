/** 求平方根 */
function sqrt(n) { 
    return Math.sqrt(n) 
}
const memoize = fn => {
  // 实现
  if(typeof fn !== 'function') throw new Error('params is not a function!')
  let cache = {}
  return function() {
      let params = Array.prototype.slice.call(arguments, 0)
      return cache[params] == undefined ? cache[params] = fn.apply(this, params) :  cache[params]
  }
}
const cachedSqrt = memoize(sqrt)
console.log(cachedSqrt(4)) // 2
console.log(cachedSqrt(4)) // 不经过计算，直接输出结果2


// 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

function platArr(arr) {
    if(!arr || !Array.isArray(arr)) return []
    return [...new Set(arr.toString().split(','))].sort((a,b) => a-b)
}

console.log('platArr', platArr(arr))




function render(template, data) {
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => data[key.trim()]);
}

let template = "My name is {{ name }}, I'm {{age}} years old."
let data = { name: '小王', age: 20 }

console.log('render', render(template, data))



function dfs(node, name){
    if(node.name === name) return node
    let children = node.children
    if(children && children.length) {
        for(let i=0; i<children.length; i++) {
            let result = dfs(node.children[i], name)
            if(result) return result
        }
    }
    return null
}
  var tree = {
    name : '中国',
    children : [
      {
        name : '北京',
        children : [
          {
            name : '朝阳群众'        
          },
          {
            name : '海淀区'        
              },
                  {
            name : '昌平区'        
              }
        ]
      },
      {
        name : '浙江省',
        children : [
          {
            name : '杭州市',
            code : 0571,
          },
          {
            name : '嘉兴市'        
          },
          {
            name : '绍兴市'        
          },
          {
            name : '宁波市'        
           }
        ]
      }
    ]
  };
  var node = dfs(tree, '中国');
  console.log('jnniknmb',node);    // { name: '杭州市', code: 0571 }

按钮点击前
输出>>>
2
3
4

按钮点击后
输出>>>
原生浏览器事件
5
6
React事件
8

原因：



