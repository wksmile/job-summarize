[参考](https://www.jianshu.com/p/e1e9692f3d88)
[参考](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

##### 对你使用的git工具的了解？不要只说你用什么。而是要分析优劣势。为什么用哪个工具？为什么不用哪个工具？

**git和svn的比较**：
1. Git是分布式的，SVN是集中式的，好处是跟其他同事不会有太多的冲突，自己写的代码放在自己电脑上，一段时间后再提交、合并，也可以不用联网在本地提交；
2. Git下载下来后，在本地不必联网就可以看到所有的log，很方便学习，SVN却需要联网；
3. Git鼓励分Branch，而SVN，说实话，Branch的次数还挺少的，

##### git add和git stage区别及了解
git仓库三个组成部分（工作区working directory,暂存区stage,历史记录区history）,他们的操作关系如下图。

参见 git.png 图片

git reset HEAD^ ：回退版本，一个^表示一个版本，可以多个，另外也可以使用 git reset HEAD～n这种形式。将文件从暂存区回退到工作区 。

git checkout命令用于切换分支或恢复工作树文件。git checkout是git最常用的命令之一，同时也是一个很危险的命令，因为这条命令会重写工作区。

git add和git stage是同义的

##### git reset、git revert 和 git checkout 有什么区别？
共同点：用来撤销代码仓库中的某些更改。
