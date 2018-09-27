##### Mongodb与MySQL比较
[Mongodb与MySQL比较1](https://www.cnblogs.com/web-fusheng/p/6884759.html)

[MongoDB和MySQL对比2](http://ifeve.com/mongodb%E5%92%8Cmysql%E5%AF%B9%E6%AF%94%E8%AF%91/)

[对比MySQL,MongoDB适用场景](https://www.cnblogs.com/imhurley/p/6060229.html)

数据库的平均插入速率：
MongoDB不指定_id插入 > MySQL不指定主键插入 > MySQL指定主键插入 > MongoDB指定_id插入。

**MongoDB特点**：

- 在指定_id插入时，MongoDB每插一条数据，都需要检查此_id可不可用，当数据库中数据条数太多的时候，这一步的查询开销会拖慢整个数据库的插入速度。
- MongoDB会充分使用系统内存作为缓存。插入的数据太多的时候，MongoDB需要将内存中的数据写进硬盘，MySQL需要重新分表。
- MongoDB毕竟还是新生事物，其稳定性没有已应用多年的MySQL优秀。
- 在读取数据规模不是很大的时候MongoDB的查询速度很快。
- 相比较MySQL，MongoDB数据库更适合那些读作业较重的任务模型。
- MongoDB适合那些对数据库具体数据格式不明确或者数据库数据格式经常变化的需求模型，而且对开发者十分友好。
- MongoDB在指定_id与不指定_id插入时速度相差很大，而MySQL的差别却小很多。

**MongoDB缺陷**：
1. 事务关系支持薄弱。这也是所有NoSQL数据库共同的缺陷，不过NoSQL并不是为了事务关系而设计的，具体应用还是很需求。
2. 稳定性有些欠缺，这点从上面的测试便可以看出。
3. MongoDB一方面在方便开发者的同时，另一方面对运维人员却提出了相当多的要求。业界并没有成熟的MongoDB运维经验，MongoDB中数据的存放格式也很随意，等等问题都对运维人员的考验。

**MongoDB**:
- 更高的写入负载
- 高可用性
- 数据量很大或者未来会变得很大
- 基于位置的数据查询
- 表结构不明确，且数据在不断变大
- 没有DBA支持

**MySQL**:

##### 文件系统存储数据,与数据库系统存储数据的差别？
[参考](https://www.cnblogs.com/gswang/p/7586540.html)

##### 数据库的设计思想大概是什么样的？

##### mysql数据库分表原理？
[MySQL面试题(六)数据库的分库分表原理详解](https://blog.csdn.net/weixin_38399962/article/details/80108079)


