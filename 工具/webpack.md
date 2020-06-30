###### webpack的原理


###### 怎么加快webpack构建
[参考1](http://hpoenixf.com/%E5%8A%A0%E5%BF%ABwebpack%E6%9E%84%E5%BB%BA.html)
[参考2](https://www.cnblogs.com/imwtr/p/7801973.html)

- 可以从以下几个方面来考量：
    + 搜索所有的依赖项，这需要占用一定的时间，减少搜索时间
        1. 优化loader的配置，test,include,exclude
        2. 优化 resolve.module 配置
    + loader解析文件的解析时间
        1. thread-loader将loader单独开启线程，多线程解析
    + 代码压缩时间
        1. ParallelUglifyPlugin实现多线程压缩
    + 二次打包时间
        1. cache-loader缓存，减少二次loader打包时间

1. 在开发环境不使用babel转码，仅在生产环境使用。本地开发的chrome的es6的兼容性足够好，不需要babel转码，经测试，这一操作可以减少25%的构建时间。
2. 在开发环境不使用post-css，关闭压缩css，可以提升10%的速度。
3. 在entry中仅引入当前开发的页面，这一举措可以提升一倍的构建速度，在其他步奏完成后，还需要12秒左右的构建速度，完成该步骤后，仅需五秒的构建时间。
4. 开发环境启用热更新替换,线上环境的编译，加个 --watch 参数就可以了
5. 启动HappyPack,会采用多进程去打包构建，但并不是支持所有的loader,首先引入，定义一下这个插件所开启的线程，推荐是四个，其实也可以直接使用默认的就行了
6. 代码压缩用ParallelUglifyPlugin代替自带的 UglifyJsPlugin插件,ParallelUglifyPlugin可以并行执行。

##### 利用webpack如何优化前端性能? 
1. 提取React、jQuery等库文件，提取公共代码。并且得到长时间的缓存。WebPack.optimize.CommonsChunkPlugin
2. 压缩代码
3. 用webpack时一般都会选择多入口文件吧，为的就是将自己的源码跟第三方库代码分离。首页需要的库先加载。

##### 手写webpack4.0的配置？
[参考](https://juejin.im/post/5b4609f5e51d4519596b66a7)

#### vue 3.0新增特性？


