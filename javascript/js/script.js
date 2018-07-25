// 实现 ECMA-262, Edition 5, 15.4.4.19
// 参考: http://es5.github.com/#x15.4.4.19
// js实现map函数
// [callback]生成新数组的函数，有三个参数currentValue,index,array
// [thisArg]执行callback函数时使用的this
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    var T, A, k;
    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }
    // 1. 将O赋值为调用map方法的数组.将this包装成对象
    var O = Object(this);
    // 2.将len赋值为数组O的长度.
    var len = O.length >>> 0;
    // 3.如果callback不是函数,则抛出TypeError异常.
    if (Object.prototype.toString.call(callback) !== "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }
    // 4. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
    if (thisArg) T = thisArg;
    // 5. 创建新数组A,长度为原数组O长度len
    A = new Array(len);
    // 6. 将k赋值为0
    k = 0;
    // 7. 当 k < len 时,执行循环.
    while(k < len) {
      var kValue, mappedValue;
      //遍历O,k为原数组索引
      if (k in O) {
        //kValue为索引k对应的值.
        kValue = O[ k ];
        // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
        mappedValue = callback.call(T, kValue, k, O);
        // 返回值添加到新数组A中.
        A[ k ] = mappedValue;
      }
      k++;
    }
    return A;
  };
}

// dom树的深度遍历,
function interator(node) {
  console.log(node)
  var children = node.children
  if(children.length){
    for(var i=0;i<children.length;i++){
      console.log(children[i])
    }
  }
}

// dom树的广度遍历,模拟一个队列的形式
function interator(node) {
  var arr = []
  arr.push(node)
  while (arr.length>0){
    node = arr.shift()
    console.log(node)
    var children = node.children;
    if(node.children.length>0){
      for(var i=0;i<children.length;i++){
        node.push(children[i])
      }
    }
  }
}

// 先序遍历
var preOrder = function (node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}

// 中序遍历
var inOrder = function (node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

// 后序遍历
var postOrder = function (node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}

// ajax Promise的实现 -------------------------------
// 要熟悉原生ajax实现流程，参考 https://blog.csdn.net/u013100656/article/details/78702017
//readyState  0：请求未初始化
//  1：服务器连接已建立
//  2：请求已接收
//  3：请求处理中
//  4：请求已完成，且响应已就绪
function getJson(url,data) {
  return new Promise((resolve,reject)=>{
    var xhr = new XMLHttpRequest();
    var method = data === undefined ? 'get' : 'post';
    if(data){
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    // FormData对象数据可以直接发送 [JavaScript FormData的详细介绍及使用](https://blog.csdn.net/liupeifeng3514/article/details/78988001)
    var data = data === undefined ? null : JSON.stringify(data);
    // open的第三个参数表示是否异步
    xhr.open(method,url,true);
    xhr.onreadystatechange = function () {
      if(xhr.readyState == 4){
        if((xhr.status>=200 && xhr.status<300) || xhr.status===304){
          resolve(JSON.parse(xhr.responseText));
        } else {
          var resJson = { code: xhr.status, response: xhr.response }
          reject(resJson)
        }
      }
    }
    xhr.send(data);
  })
}

getJson('www.baidu.com').catch(function (err) {
  console.log(err);
})


// 对象深度拷贝
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function deepClone(data){
  var type = getType(data);
  var obj;
  if(type === 'Array'){
    obj = [];
  } else if(type === 'Object'){
    obj = {};
  } else if(type === 'Function'){
    return new Function("return"+data.toString());
  }
  else{
    //不再具有下一层次
    return data;
  }
  if(type === 'array'){
    for(var i = 0, len = data.length; i < len; i++){
      obj.push(deepClone(data[i]));
    }
  } else if(type === 'object'){
    for(var key in data){
      if(obj[key]===data) continue;
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
}
