##### wepack配置？babel配置？es6转es5工具有哪些?

##### webpack与grunt和gulp的区别
[前端工程的构建工具对比 Gulp vs Grunt](https://segmentfault.com/a/1190000002491282)

[gulp和webpack究竟有什么区别？](https://segmentfault.com/q/1010000008058766)

gulp的五个api:gulp.task,gulp.run,gulp.watch,gulp.src,gulp.dest

1. Gulp相比Grunt更简洁，而且遵循代码优于配置策略，维护Gulp更像是写代码。而且Gulp遵循CommonJS规范，因此跟写Node程序没有差别，没有产生中间文件。

2. Gulp相比Grunt更有设计感，核心设计基于Unix流的概念，通过管道连接，不需要写中间文件。

3. Gulp的每个插件只完成一个功能，这也是Unix的设计原则之一，各个功能通过流进行整合并完成复杂的任务。
   
4. 使用Grunt的I/O过程中会产生一些中间态的临时文件，一些任务生成临时文件，其它任务可能会基于临时文件再做处理并生成最终的构建后文件。Grunt频繁操作IO
   而使用Gulp的优势就是利用流的方式进行文件的处理，通过管道将多个任务和操作连接起来，因此只有一次I/O的过程，流程更清晰，更纯粹。

**grunt**:许多常见的任务都有现成的Grunt插件，而且有众多第三方插件。grunt更像是写配置。

**gulp**:gulp强调的是前端开发的工作流程，我们可以通过配置一系列的task，定义task处理的事务（例如文件压缩合并、雪碧图、启动server、版本控制等），然后定义执行顺序，来让gulp执行这些task，从而构建项目的整个前端开发流程。

**webpack**:webpack是一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源（图片、js文件、css，sass,coffeescript文件等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源。拆分依赖树成块并按需加载,让初始化加载时间更少,每一个静态资源应该是一个模块,能够集成第三方类库,适用于大型项目,能够定制模块打包的每一个部分.

##### 一个项目中gulp和webpack分别承担什么任务？
[gulp+webpack配置](https://blog.csdn.net/sinat_17775997/article/details/52748615)

**gulp**是基于Nodejs的自动任务运行器， 她能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。

**webpack**它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。




