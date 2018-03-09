**考点 、 不变应万变 、 题目到知识再到题目**

##### typeof运算符得到的类型？
```$xslt
   typeof undefined    // undefined
   typeof 'abc'        // string
   typeof 123          // number
   typeof true         // boolean
   /****** typeof是只能区别上面的值类型，引用类型只能区分函数 ******/
   typeof console.log  // function
   typeof {}           // object
   typeof []           // object
   typeof null         // object
```

##### 可能发生值类型转换？
+ 字符串拼接
+ ==运算符
+ if语句
+ 逻辑运算

    
    var b=100+'10'   // '10010'
    100 == '100'     // true
    0 == '' ==false  // true
    null == undefined // true
    if(b){....}
    if(''){}
    !window.abc       // true
    
!!100 可以看到输出true

为false的值: 0, NaN, '', null, undefined, false


##### 如何准确判断一个变量是数组类型
+ 用instanceof, arr instamceof Array,typeof不能判断出数组

    
##### 何时使用 === 何时使用 == 

if(obj.a == null){
    // 这里判断一个变量是否是null或空时用 ==
    // 这是jquery源码中推荐的写法，除了这里其他的全部用 ===
}

##### JS中有哪些内置函数？（不考虑浏览器环境，纯粹js）
Object, Array, Boolean, Number, String, Function, Date, RegExp, Error

##### 如何理解JSON?
+ JSON只不过是一个js对象。JSON.stringfy(),JSON.parse()
+ JSON也是一种数据格式。包括的数据格式：number,boolean,string,null,array,object


