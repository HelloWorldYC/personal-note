(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{651:function(_,v,a){"use strict";a.r(v);var t=a(18),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("blockquote",[a("p",[_._v("这篇文章以问答的形式用于快速回顾知识点以及用于自测。"),a("br"),_._v("\n因为知识点相当多，即使在看时能够理解记住，但过后也往往只是有印象，大概知道是什么东西，但想回答出来却总是卡壳，看了忘，忘了看。因此，这篇文章用于帮助速记回忆，自测时可以由这些点延伸。")])]),_._v(" "),a("h2",{attrs:{id:"mysql-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-基础"}},[_._v("#")]),_._v(" MySQL 基础")]),_._v(" "),a("h4",{attrs:{id:"什么是关系型数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是关系型数据库"}},[_._v("#")]),_._v(" 什么是关系型数据库？")]),_._v(" "),a("p",[_._v("Relational Database (RDB)，就是一种建立在关系模型的基础上的数据库。关系模型表明了数据库中所存储的数据之间的联系。大部分关系型数据库都是用 SQL 来操作数据库中的数据。并且大部分关系型数据库支持事务的四大特性。")]),_._v(" "),a("h4",{attrs:{id:"什么是-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sql"}},[_._v("#")]),_._v(" 什么是 SQL？")]),_._v(" "),a("p",[_._v("Structured Query Language，结构化查询语言，专门用来与数据库打交道，目的是提供一种从数据库中读写数据的简单有效的方法。")]),_._v(" "),a("h4",{attrs:{id:"什么是-mysql-它的优点有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mysql-它的优点有哪些"}},[_._v("#")]),_._v(" 什么是 MySQL？它的优点有哪些？")]),_._v(" "),a("p",[_._v("MySQL 是一种关系型数据库，使用广泛。MySQL 默认端口号是 3306。优点如下;")]),_._v(" "),a("ul",[a("li",[_._v("成熟稳定，功能完善。")]),_._v(" "),a("li",[_._v("开源免费。")]),_._v(" "),a("li",[_._v("文档丰富。")]),_._v(" "),a("li",[_._v("开箱即用，操作简单，维护成本低。")]),_._v(" "),a("li",[_._v("兼容性好，支持常见操作系统，支持多种开发语言。")]),_._v(" "),a("li",[_._v("社区活跃，生态完善。")]),_._v(" "),a("li",[_._v("事务支持优秀。")]),_._v(" "),a("li",[_._v("支持分库分表，读写分离，高可用。")])]),_._v(" "),a("h4",{attrs:{id:"mysql-有哪几类字段类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-有哪几类字段类型"}},[_._v("#")]),_._v(" MySQL 有哪几类字段类型？")]),_._v(" "),a("ul",[a("li",[_._v("数值类型：TINYINT、SMALLINT、MEDIUMINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL。")]),_._v(" "),a("li",[_._v("字符串类型：CHAR、VARCHAR、TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT、TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB。")]),_._v(" "),a("li",[_._v("日期类型：YEAR、TIME、DATE、DATETIME、TIMESTAMP。")])]),_._v(" "),a("h4",{attrs:{id:"char-和-varchar-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#char-和-varchar-的区别是什么"}},[_._v("#")]),_._v(" CHAR 和 VARCHAR 的区别是什么？")]),_._v(" "),a("ul",[a("li",[_._v("CHAR 是定长字符串、VARCHAR 是变长字符串。")]),_._v(" "),a("li",[_._v("CHAR 存储会在右边填充空格以达到指定长度，检索时去掉空格；VARCHAR 存储时需要 1 或 2 个额外字节记录字符串长度，检索时不需要处理。")]),_._v(" "),a("li",[_._v("CHAR 适合存储长度较短或长度都差不多的字符串，VARCHAR 适合存储长度不确定或者差异较大的字符串。")])]),_._v(" "),a("h4",{attrs:{id:"varchar-10-和-varchar-100-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#varchar-10-和-varchar-100-的区别是什么"}},[_._v("#")]),_._v(" VARCHAR(10) 和 VARCHAR(100) 的区别是什么？")]),_._v(" "),a("ul",[a("li",[_._v("VARCHAR（100）能够存储更多的字符，有更好的业务拓展性。CHAR 的存储范围是 0 ~ 255 字节，VARCHAR 的存储范围是 0 ~ 65535 字节。")]),_._v(" "),a("li",[_._v("VARCHAR（10）和 VARCHAR（100）存储相同的字符串，所占用磁盘的存储空间一样。")]),_._v(" "),a("li",[_._v("VARCHAR（100）会消耗更多的内存，因为 VARCHAR 类型在内存中操作时，通常会分配固定大小的内存块来保存值。")])]),_._v(" "),a("h4",{attrs:{id:"decimal-和-float-double-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decimal-和-float-double-的区别是什么"}},[_._v("#")]),_._v(" DECIMAL 和 FLOAT/DOUBLE 的区别是什么？")]),_._v(" "),a("ul",[a("li",[_._v("DECIMAL 是定点数，FLOAT/DOUBLE 是浮点数。")]),_._v(" "),a("li",[_._v("DECIMAL 可以存储精确的小数值，FLOAT/DOUBLE 只能存储近似的小数值。")])]),_._v(" "),a("h4",{attrs:{id:"为什么不推荐使用-text-和-blob"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么不推荐使用-text-和-blob"}},[_._v("#")]),_._v(" 为什么不推荐使用 TEXT 和 BLOB？")]),_._v(" "),a("p",[_._v("TEXT 类型类似 CHAR 和 VARCHAR，但可以存储更长的字符串。BLOB 类型主要用于存储二进制大对象，例如图片、音视频等。"),a("br"),_._v("\n数据库规范不推荐使用 BLOB 和 TEXT，因为这两种类型有一些缺点和限制：")]),_._v(" "),a("ul",[a("li",[_._v("不能有默认值。")]),_._v(" "),a("li",[_._v("在使用临时表时无法使用内存临时表，只能在磁盘上创建临时表。")]),_._v(" "),a("li",[_._v("检索效率低。")]),_._v(" "),a("li",[_._v("不能直接创建索引，需要指定前缀长度。")]),_._v(" "),a("li",[_._v("可能会消耗大量的网络和 IO 带宽。")]),_._v(" "),a("li",[_._v("可能导致表上的 DML 操作变慢。")])]),_._v(" "),a("h4",{attrs:{id:"datetime-和-timestamp-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datetime-和-timestamp-的区别"}},[_._v("#")]),_._v(" DATETIME 和 TIMESTAMP 的区别？")]),_._v(" "),a("ul",[a("li",[_._v("DATETIME 类型没有时区信息，TIMESTAMP 和时区有关。")]),_._v(" "),a("li",[_._v("TIMESTAMP 使用 4 个字节存储，DATETIME 使用 8 个字节存储。")]),_._v(" "),a("li",[_._v("TIMESTAMP 表示的时间范围更小。")])]),_._v(" "),a("h4",{attrs:{id:"null-和-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-和-的区别是什么"}},[_._v("#")]),_._v(" NULL 和 '' 的区别是什么？")]),_._v(" "),a("ul",[a("li",[_._v("NULL 代表一个不确定的值，就算是两个 NULL，它俩也不一定相等。")]),_._v(" "),a("li",[_._v("'' 的长度是 0，是不占用空间的，而 NULL 是需要占用空间的。")]),_._v(" "),a("li",[_._v("NULL 会影响聚合函数的结果。例如，SUM、AVG、MIN、MAX 等会忽略 NULL 值，而 COUNT 的处理方式则取决于参数类型，若 COUNT(*) 则包括 NULL 值，若是 COUNT(列名) 则忽略 NULL 值。")]),_._v(" "),a("li",[_._v("查询 NULL 值时，必须使用 IS NULL 或 IS NOT NULL 来判断，而不能使用 =、!=、<、> 之类的比较运算符。而 '' 则可以使用这些比较运算符。")])]),_._v(" "),a("h4",{attrs:{id:"mysql-中-boolean-类型如何表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-中-boolean-类型如何表示"}},[_._v("#")]),_._v(" MySQL 中 Boolean 类型如何表示？")]),_._v(" "),a("p",[_._v("MySQL 中没有专门的布尔类型，而是用 TINYINT(1) 来表示。")]),_._v(" "),a("h4",{attrs:{id:"重点-mysql-的基础架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点-mysql-的基础架构"}},[_._v("#")]),_._v(" （重点）MySQL 的基础架构？")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("连接器")]),_._v("：管理链接，权限验证。")]),_._v(" "),a("li",[a("strong",[_._v("查询缓存")]),_._v("：执行查询语句的时候，会先查询缓存。（MySQL 8.0 之后移除，不实用）")]),_._v(" "),a("li",[a("strong",[_._v("分析器")]),_._v("：词法分析和语法分析。")]),_._v(" "),a("li",[a("strong",[_._v("优化器")]),_._v("：选择最优的方案，索引选择。")]),_._v(" "),a("li",[a("strong",[_._v("执行器")]),_._v("：执行语句，操作存储引擎。")]),_._v(" "),a("li",[a("strong",[_._v("存储引擎")]),_._v("：负责数据的存储和读取，采用的是插件式架构，支持 InnoDB、MyISAM、Memory 等多种存储引擎。")])]),_._v(" "),a("h4",{attrs:{id:"一个-sql-语句在-mysql-中的执行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个-sql-语句在-mysql-中的执行流程"}},[_._v("#")]),_._v(" 一个 SQL 语句在 MySQL 中的执行流程？")]),_._v(" "),a("ul",[a("li",[_._v("查询语句：权限校验 -> 查询缓存 -> 分析器 -> 优化器 -> 权限校验 -> 执行器 -> 存储引擎。")]),_._v(" "),a("li",[_._v("更新语句：分析器 -> 权限校验 -> 执行器 -> 存储引擎 -> redo log (prepare 状态) -> binlog -> redo log (commit 状态)")])]),_._v(" "),a("h2",{attrs:{id:"mysql-存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-存储引擎"}},[_._v("#")]),_._v(" MySQL 存储引擎")]),_._v(" "),a("h4",{attrs:{id:"mysql-支持哪些存储引擎-默认使用哪个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-支持哪些存储引擎-默认使用哪个"}},[_._v("#")]),_._v(" MySQL 支持哪些存储引擎？默认使用哪个？")]),_._v(" "),a("p",[_._v("MySQL 支持 InnoDB、MyISAM、Memory 等存储引擎，默认存储引擎是 InnoDB，并且所有存储引擎中只有 InnoDB 是支持事务的。")]),_._v(" "),a("h4",{attrs:{id:"mysql-存储引擎架构了解吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-存储引擎架构了解吗"}},[_._v("#")]),_._v(" MySQL 存储引擎架构了解吗？")]),_._v(" "),a("p",[_._v("MySQL 存储引擎用的是插件式架构，支持多种存储引擎。并且存储引擎是基于表的，不是基于数据库的，所以可以为不同的表设置不同的存储引擎以适应不同的场景。")]),_._v(" "),a("h4",{attrs:{id:"myisam-和-innodb-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam-和-innodb-有什么区别"}},[_._v("#")]),_._v(" MyISAM 和 InnoDB 有什么区别？")]),_._v(" "),a("ul",[a("li",[_._v("MyISAM 只有表级锁，而 InnoDB 支持行级锁和表级锁，默认为行级锁。")]),_._v(" "),a("li",[_._v("MyISAM 不支持事务，而 InnoDB 支持事务。")]),_._v(" "),a("li",[_._v("MyISAM 不支持外键，而 InnoDB 支持外键。")]),_._v(" "),a("li",[_._v("MyISAM 不支持数据库异常崩溃后的安全恢复，而 InnoDB 通过 redo log 可以恢复。")]),_._v(" "),a("li",[_._v("MyISAM 不支持 MVCC，而 InnoDB 支持。")]),_._v(" "),a("li",[_._v("MyISAM 和 InnoDB 都是使用 B+ Tree 作为索引结构，但实现方式不太一样。")]),_._v(" "),a("li",[_._v("InnoDB 的性能比 MyISAM 强大。")])]),_._v(" "),a("h4",{attrs:{id:"myisam-和-innodb-如何选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam-和-innodb-如何选择"}},[_._v("#")]),_._v(" MyISAM 和 InnoDB 如何选择？")]),_._v(" "),a("p",[_._v("基本上都是选择 InnoDB。")]),_._v(" "),a("h2",{attrs:{id:"mysql-索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-索引"}},[_._v("#")]),_._v(" MySQL 索引")]),_._v(" "),a("h4",{attrs:{id:"什么是索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是索引"}},[_._v("#")]),_._v(" 什么是索引？")]),_._v(" "),a("p",[_._v("索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。索引的作用就相当于书的目录。")]),_._v(" "),a("h4",{attrs:{id:"索引的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的优缺点"}},[_._v("#")]),_._v(" 索引的优缺点")]),_._v(" "),a("p",[_._v("优点：")]),_._v(" "),a("ul",[a("li",[_._v("使用索引可以大大加快检索的速度（减少检索的数据量）。")]),_._v(" "),a("li",[_._v("通过创建唯一性索引，可以保证数据库表中的每一行数据的唯一性。")])]),_._v(" "),a("p",[_._v("缺点:")]),_._v(" "),a("ul",[a("li",[_._v("创建索引和维护索引需要耗费许多时间。当对表中数据进行增删改的时候，索引也需要动态修改，会降低 SQL 执行效率。")]),_._v(" "),a("li",[_._v("索引需要使用物理文件存储，也会耗费一定空间。")])]),_._v(" "),a("h4",{attrs:{id:"使用索引一定能提高查询性能吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用索引一定能提高查询性能吗"}},[_._v("#")]),_._v(" 使用索引一定能提高查询性能吗？")]),_._v(" "),a("p",[_._v("大多数情况下，索引查询都是比全表扫描快的，但是如果数据库的数据量不大，那么使用索引也不一定能够带来很大提升。")]),_._v(" "),a("h4",{attrs:{id:"索引的底层数据结构-hash-有什么优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的底层数据结构-hash-有什么优缺点"}},[_._v("#")]),_._v(" 索引的底层数据结构 Hash 有什么优缺点？")]),_._v(" "),a("p",[_._v("优点：检索快。"),a("br"),_._v("\n缺点：不支持顺序查询和范围查询。")]),_._v(" "),a("h4",{attrs:{id:"索引的底层数据结构-b-树和-b-树有什么不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的底层数据结构-b-树和-b-树有什么不同"}},[_._v("#")]),_._v(" 索引的底层数据结构 B 树和 B+ 树有什么不同？")]),_._v(" "),a("ul",[a("li",[_._v("B 树的所有节点既放 key 也放 data，而 B+ 树只有叶子节点存放 key 和 data，其他内节点只放 key。")]),_._v(" "),a("li",[_._v("B 树的叶子节点都是独立的；B+ 树的叶子节点有一条引用链指向与它相邻的叶子节点。")]),_._v(" "),a("li",[_._v("B 树的检索效率不稳定，检索过程相当于对范围内的每个节点的关键字做二分查找。B+ 树的检索效率很稳定，都是从根节点到叶子节点的过程。")]),_._v(" "),a("li",[_._v("在 B 树种进行范围查询时，首先要找到要查找的下限，然后对 B 树进行中序遍历，直到找到查找的上限；而 B+ 树的范围查询，只需要对链表进行遍历即可。")])]),_._v(" "),a("h4",{attrs:{id:"索引类型总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引类型总结"}},[_._v("#")]),_._v(" 索引类型总结")]),_._v(" "),a("ul",[a("li",[_._v("按数据结构维度：B 树索引、哈希索引、R 树索引。")]),_._v(" "),a("li",[_._v("按底层存储方式：聚簇索引、非聚簇索引。")]),_._v(" "),a("li",[_._v("按应用维度划分：主键索引、普通索引、唯一索引、覆盖索引、联合索引、全文索引。")])]),_._v(" "),a("h4",{attrs:{id:"主键索引和二级索引-二级索引有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主键索引和二级索引-二级索引有哪些"}},[_._v("#")]),_._v(" 主键索引和二级索引？二级索引有哪些？")]),_._v(" "),a("p",[_._v("二级索引又称为辅助索引，是因为二级索引的叶子节点存储的数据是主键。也就是说，通过二级索引，可以定位主键的位置。唯一索引、普通索引、前缀索引等都属于二级索引。")]),_._v(" "),a("h4",{attrs:{id:"聚簇索引和非聚簇索引-它们各自的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引和非聚簇索引-它们各自的优缺点"}},[_._v("#")]),_._v(" 聚簇索引和非聚簇索引？它们各自的优缺点？")]),_._v(" "),a("ul",[a("li",[_._v("聚簇索引：索引结构和数据一起存放的索引，并不是一种单独的索引类型。InnoDB 中的主键索引就属于聚簇索引。对于 InnoDB 引擎表来说，该表的索引的每个非叶子节点存储索引，叶子节点存储索引和索引对应的数据。\n"),a("ul",[a("li",[_._v("优点：查询速度快，相比于非聚簇索引，少了一次读取数据的 IO 操作。对主键的排序查找和范围查找速度非常快。")]),_._v(" "),a("li",[_._v("缺点：依赖于有序的数据。更新代价大。")])])]),_._v(" "),a("li",[_._v("非聚簇索引：索引结构和数据分开存放的索引，并不是一种单独的索引结构。二级索引就属于非聚簇索引。MySQL 的 MyISAM 引擎，不管主键还是非主键，使用的都是非聚簇索引。\n"),a("ul",[a("li",[_._v("优点：更新代价比聚簇索引小。")]),_._v(" "),a("li",[_._v("缺点：依赖于有序的数据。可能会二次查询（回表）。")])])])]),_._v(" "),a("h4",{attrs:{id:"非聚簇索引一定需要回表吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非聚簇索引一定需要回表吗"}},[_._v("#")]),_._v(" 非聚簇索引一定需要回表吗？")]),_._v(" "),a("p",[_._v("不一定，如果查询的数据刚好就是索引，那么就直接返回即可，无需回表。这种情况就称为覆盖索引。")]),_._v(" "),a("h4",{attrs:{id:"覆盖索引和联合索引-它们各自是什么意思"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引和联合索引-它们各自是什么意思"}},[_._v("#")]),_._v(" 覆盖索引和联合索引？它们各自是什么意思？")]),_._v(" "),a("p",[_._v("覆盖索引即需要查询的字段正好是索引的字段，那么直接根据该索引，就可以查到数据了，无需回表查询。"),a("br"),_._v("\n联合索引则是使用表中的多个字段创建索引，也称为组合索引或复合索引。")]),_._v(" "),a("h4",{attrs:{id:"什么是最左前缀匹配原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是最左前缀匹配原则"}},[_._v("#")]),_._v(" 什么是最左前缀匹配原则？")]),_._v(" "),a("p",[_._v("最左前缀匹配原则指的是，在使用联合索引时，会根据联合索引中的字段顺序，从左到右依次到查询条件中匹配，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则使用该字段过滤数据，直至联合索引中全部字段匹配完成，或者在执行过程中遇到范围查询（如 >、<）才会停止匹配。对于 >=、<=、BETWEEN、LIKE 前缀匹配的范围查询，并不会停止匹配。")]),_._v(" "),a("h4",{attrs:{id:"什么是索引下推"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是索引下推"}},[_._v("#")]),_._v(" 什么是索引下推？")]),_._v(" "),a("p",[_._v("索引下推是 MySQL 5.6 版本中提供的一项索引优化功能，可以在非聚簇索引遍历过程中，对索引中包含的字段先做判断，过滤掉不符合条件的记录，减少回表次数。")]),_._v(" "),a("h4",{attrs:{id:"正确使用索引的一些建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确使用索引的一些建议"}},[_._v("#")]),_._v(" 正确使用索引的一些建议？")]),_._v(" "),a("ul",[a("li",[_._v("选择合适的字段创建索引")]),_._v(" "),a("li",[_._v("被频繁更新的字段应该慎重建立索引")]),_._v(" "),a("li",[_._v("限制每张表上的索引数量")]),_._v(" "),a("li",[_._v("尽可能的考虑建立联合索引而不是单列索引")]),_._v(" "),a("li",[_._v("注意避免冗余索引")]),_._v(" "),a("li",[_._v("字符串类型的字段使用前缀索引代替普通索引")]),_._v(" "),a("li",[_._v("避免索引失效")]),_._v(" "),a("li",[_._v("删除长期未使用的索引")])]),_._v(" "),a("h2",{attrs:{id:"mysql-查询缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-查询缓存"}},[_._v("#")]),_._v(" MySQL 查询缓存")]),_._v(" "),a("h4",{attrs:{id:"查询缓存在什么情况下能够命中-在哪些情况下不会命中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存在什么情况下能够命中-在哪些情况下不会命中"}},[_._v("#")]),_._v(" 查询缓存在什么情况下能够命中？在哪些情况下不会命中？")]),_._v(" "),a("p",[_._v("开启查询缓存后在同样的查询条件以及数据情况下，能够命中缓存，直接返回结果。这里查询条件包括查询本身、要查询的数据库、客户端协议版本号等可能影响结果的信息。"),a("br"),_._v("\n查询缓存不命中的情况:")]),_._v(" "),a("ul",[a("li",[_._v("查询的字符不同")]),_._v(" "),a("li",[_._v("查询中包含任何用户自定义函数、存储函数、用户变量、临时表、MySQL 中的系统表")]),_._v(" "),a("li",[_._v("缓存后表（数据或结构）发生变化，则和这张表相关的所有缓存失效。")])]),_._v(" "),a("h2",{attrs:{id:"mysql-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-日志"}},[_._v("#")]),_._v(" MySQL 日志")]),_._v(" "),a("h4",{attrs:{id:"mysql-种常见的日志有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-种常见的日志有哪些"}},[_._v("#")]),_._v(" MySQL 种常见的日志有哪些？")]),_._v(" "),a("p",[_._v("错误日志、查询日志、慢查询日志、事务日志（redo log）、二进制日志(bin log)、回滚日志(undo log)。")]),_._v(" "),a("h4",{attrs:{id:"慢查询日志有什么用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢查询日志有什么用"}},[_._v("#")]),_._v(" 慢查询日志有什么用？")]),_._v(" "),a("p",[_._v("能够查询哪些 SQL 执行得慢，可以用来进行性能分析及优化、以及可以用来做故障排查，监控系统健康。")]),_._v(" "),a("h4",{attrs:{id:"三大日志是哪三大日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三大日志是哪三大日志"}},[_._v("#")]),_._v(" 三大日志是哪三大日志？")]),_._v(" "),a("p",[_._v("redo log、bin log、undo log")]),_._v(" "),a("h4",{attrs:{id:"redo-log-有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-有什么作用"}},[_._v("#")]),_._v(" redo log 有什么作用？")]),_._v(" "),a("p",[_._v("redo log 是 InnoDB 存储引擎独有的，它让 MySQL 拥有了崩溃恢复的能力。")]),_._v(" "),a("h4",{attrs:{id:"redo-log-记录的是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-记录的是什么"}},[_._v("#")]),_._v(" redo log 记录的是什么？")]),_._v(" "),a("p",[_._v("redo log 是物理日志，记录的是物理修改，即记录“在某个数据页上做了什么修改”，每条 redo log 记录由 "),a("code",[_._v("表空间号 + 数据页号 + 偏移量 + 修改数据长度 + 具体修改的数据")]),_._v(" 组成。")]),_._v(" "),a("p",[_._v("MySQL 中数据是以页为单位的，查询一条记录时，会从硬盘把一页的数据加载出来，加载出来的数据叫数据页，放入到 "),a("code",[_._v("Buffer Pool")]),_._v(" 中。后续的查询都是先从 "),a("code",[_._v("Buffer Pool")]),_._v(" 中找，没有命中再到磁盘中加载，减少磁盘 IO 开销，提升性能。更新时也是类似，发现 "),a("code",[_._v("Buffer Pool")]),_._v(" 中存在要更新的数据，就直接在 "),a("code",[_._v("Buffer Pool")]),_._v(" 里更新。更新完成后记录到 "),a("code",[_._v("redo log buffer")]),_._v(" 中，再刷盘到 redo log 文件中。"),a("br"),_._v("\nMySQL 重启时读取数据文件恢复数据，再通过 redo log 和 undo log 使数据库恢复到之前的状态。")]),_._v(" "),a("h4",{attrs:{id:"redo-log-的刷盘时机有哪些情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-的刷盘时机有哪些情况"}},[_._v("#")]),_._v(" redo log 的刷盘时机有哪些情况？")]),_._v(" "),a("ol",[a("li",[_._v("事务提交")]),_._v(" "),a("li",[_._v("redo log buffer 空间不足时（占满总容量一半）")]),_._v(" "),a("li",[_._v("事务日志缓冲区满（transaction log buffer）")]),_._v(" "),a("li",[_._v("checkpoint：定期执行检查点操作，将修改但尚未写入磁盘的数据刷盘，重做日志也会一同刷盘。")]),_._v(" "),a("li",[_._v("后台刷新线程：后台线程周期性地（间隔一秒）将脏页（已修改但尚未写入磁盘的数据页）刷盘，相关重做日志一同刷盘。")]),_._v(" "),a("li",[_._v("正常关闭服务器时")])]),_._v(" "),a("h4",{attrs:{id:"redo-log-有几种刷盘策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-有几种刷盘策略"}},[_._v("#")]),_._v(" redo log 有几种刷盘策略？")]),_._v(" "),a("p",[_._v("刷盘策略可以由 "),a("code",[_._v("innodb_flush_log_at_trx_commit")]),_._v(" 设置：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("0")]),_._v("：每次事务提交时不进行刷盘策略，也没有写入 page cache，由后台线程去刷盘。")]),_._v(" "),a("li",[a("strong",[_._v("1")]),_._v("：每次事务提交都进行刷盘，默认是这个。")]),_._v(" "),a("li",[a("strong",[_._v("2")]),_._v("：每次事务提交都只把 "),a("code",[_._v("redo log buffer")]),_._v(" 中的内容写入 "),a("code",[_._v("page cache")]),_._v("。再由后台线程调用 "),a("code",[_._v("fsync")]),_._v(" 去刷盘。")])]),_._v(" "),a("h4",{attrs:{id:"一个没有提交事务的-redo-log-记录-会刷盘吗-为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个没有提交事务的-redo-log-记录-会刷盘吗-为什么"}},[_._v("#")]),_._v(" 一个没有提交事务的 redo log 记录，会刷盘吗？为什么？")]),_._v(" "),a("p",[_._v("一个没有提交事务的 redo log 记录，也有可能刷盘。"),a("br"),_._v("\n因为在事务执行过程中，会写入 redo log buffer，当 redo log buffer 占用空间达到一半时有可能刷盘，此外，后台线程每隔一秒也会进行刷盘。")]),_._v(" "),a("h4",{attrs:{id:"redo-log-的日志文件组-什么是-write-pos、check-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-的日志文件组-什么是-write-pos、check-point"}},[_._v("#")]),_._v(" redo log 的日志文件组？什么是 write pos、check point？")]),_._v(" "),a("p",[_._v("硬盘上存储的 redo log 日志文件不止一个，而是以一个 "),a("strong",[_._v("日志文件组")]),_._v(" 的形式出现的，每个的 redo log 文件大小都是一样的，在后面的版本中文件数被固定为32。")]),_._v(" "),a("p",[_._v("日志文件组采用的是环形数组形式，从头开始写，写到末尾又回到头循环写。")]),_._v(" "),a("p",[_._v("日志文件组中有两个重要属性："),a("code",[_._v("write pos")]),_._v("、"),a("code",[_._v("checkpoint")])]),_._v(" "),a("ul",[a("li",[a("code",[_._v("write pos")]),_._v(" 是当前记录的位置，一边写一边往后移。")]),_._v(" "),a("li",[a("code",[_._v("checkpoint")]),_._v(" 是当前要擦除的位置，也是往后移，每次 MySQL 加载日志文件组恢复数据时，会清空加载过的 "),a("code",[_._v("redo log")]),_._v(" 记录，并把 "),a("code",[_._v("checkpoint")]),_._v(" 后移更新。")])]),_._v(" "),a("h4",{attrs:{id:"为什么要用-redo-log-的形式记录修改内容而不是直接刷数据页的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用-redo-log-的形式记录修改内容而不是直接刷数据页的数据"}},[_._v("#")]),_._v(" 为什么要用 redo log 的形式记录修改内容而不是直接刷数据页的数据？")]),_._v(" "),a("p",[_._v("主要有这几个原因：")]),_._v(" "),a("ul",[a("li",[_._v("数据页大小是 16kB，刷盘比较耗时，而我们修改的数据可能就几Byte，直接刷数据页效率太低。")]),_._v(" "),a("li",[_._v("数据页刷盘是随机写，因为一个数据页对应的位置可能在硬盘文件的随机位置，性能较差。")]),_._v(" "),a("li",[_._v("写 redo log 的话，一行记录可能就占几十Byte，只包含表空间号、数据页号、磁盘文件偏移量、更新值，而且是顺序写，刷盘速度快。")])]),_._v(" "),a("h4",{attrs:{id:"bin-log-主要记录了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bin-log-主要记录了什么"}},[_._v("#")]),_._v(" bin log 主要记录了什么？")]),_._v(" "),a("p",[_._v("bin log 是逻辑日志，记录内容是语句的原始逻辑，类似于“给 ID = 2 这一行的 c 字段加 1”，属于 MySQL Server 层。不管用什么存储引擎，只要发生表数据更新，都会产生 bin log 日志。")]),_._v(" "),a("h4",{attrs:{id:"bin-log-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bin-log-的作用"}},[_._v("#")]),_._v(" bin log 的作用？")]),_._v(" "),a("p",[_._v("MySQL 的数据备份、主备、主主、主从都离不开 bin log，需要依靠 bin log 来同步数据，保证数据一致性。")]),_._v(" "),a("h4",{attrs:{id:"bin-log-有哪几种记录格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bin-log-有哪几种记录格式"}},[_._v("#")]),_._v(" bin log 有哪几种记录格式？")]),_._v(" "),a("p",[_._v("有三种格式，可以通过 "),a("code",[_._v("binlog_format")]),_._v(" 参数来指定：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("statement")]),_._v("：记录的内容是 SQL 语句原文。当语句中涉及字段与时间有关时从库直接执行会导致与原库不一致。")]),_._v(" "),a("li",[a("code",[_._v("row")]),_._v("：记录的内容不是简单的 SQL 语句，还包含了具体的数据。这种格式记录的内容看不到详细信息，要通过 "),a("code",[_._v("mysqlbinlog")]),_._v(" 工具解析出来。能保证数据一致性，但需要更大容量记录，占用更大的空间，恢复与同步时会更消耗 IO 资源，影响执行速度。")]),_._v(" "),a("li",[a("code",[_._v("mixed")]),_._v("："),a("code",[_._v("statement")]),_._v(" 和 "),a("code",[_._v("row")]),_._v(" 的折中方案。MySQL 会判断这条 SQL 语句是否可能引起数据不一致性，是的话就用 "),a("code",[_._v("row")]),_._v("，否则用 "),a("code",[_._v("statement")]),_._v("。")])]),_._v(" "),a("h4",{attrs:{id:"bin-log-有几种刷盘策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bin-log-有几种刷盘策略"}},[_._v("#")]),_._v(" bin log 有几种刷盘策略？")]),_._v(" "),a("p",[_._v("事务执行过程中，先把日志写到 bin log cache，事务提交的时候，把 bin log cache 写到 page cache 中，再刷盘到 bin log 文件中。"),a("br"),_._v("\n有三种刷盘策略，由 "),a("code",[_._v("sync_binlog")]),_._v(" 控制，默认是 1：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("0")]),_._v("：每次提交事务只写入 "),a("code",[_._v("page cache")]),_._v("，由系统决定刷盘时机（"),a("code",[_._v("fsync")]),_._v("）。")]),_._v(" "),a("li",[a("strong",[_._v("1")]),_._v("：每次提交事务都会写入 "),a("code",[_._v("page cache")]),_._v("，并调用 "),a("code",[_._v("fsync")]),_._v(" 刷盘。")]),_._v(" "),a("li",[a("strong",[_._v("N")]),_._v("：每次提交事务都 "),a("code",[_._v("write")]),_._v("，写入 "),a("code",[_._v("page cache")]),_._v("，但积累了 N 个事务后才 "),a("code",[_._v("fsync")]),_._v("。")])]),_._v(" "),a("h4",{attrs:{id:"什么是两阶段提交-为什么使用两阶段提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是两阶段提交-为什么使用两阶段提交"}},[_._v("#")]),_._v(" 什么是两阶段提交？为什么使用两阶段提交？")]),_._v(" "),a("p",[_._v("将 redo log 的写入拆成了两个步骤："),a("code",[_._v("prepare")]),_._v(" 和 "),a("code",[_._v("commit")]),_._v("。"),a("br"),_._v("\n因为 redo log 和 bin log 的写入时机不同，redo log 在事务执行过程中可以不断写入，而 bin log 只有在提交事务时才能写入，这样在两个日志写入过程中若发生意外会导致两份日志之间逻辑不一致。而使用两阶段提交则可以解决这个问题。"),a("br"),_._v("\n执行过程："),a("code",[_._v("redo log prepare")]),_._v("  -> "),a("code",[_._v("bin log")]),_._v(" -> "),a("code",[_._v("redo log commit")]),_._v("。")]),_._v(" "),a("h4",{attrs:{id:"什么是-undo-log-有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-undo-log-有什么作用"}},[_._v("#")]),_._v(" 什么是 undo log ？有什么作用？")]),_._v(" "),a("p",[a("code",[_._v("undo log")]),_._v(" 是回滚日志，在事务发生异常时可以回滚数据恢复到事务之前的状态。此外，MVCC 的实现也依赖于 undo log。"),a("br"),_._v("\n并且，undo log 会先于数据持久化到磁盘上，保证了即使遇到数据库宕机等情况下，用户再次启动数据库仍能回滚之前未完成的事务。")]),_._v(" "),a("h2",{attrs:{id:"mysql-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-事务"}},[_._v("#")]),_._v(" MySQL 事务")]),_._v(" "),a("h4",{attrs:{id:"何谓事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何谓事务"}},[_._v("#")]),_._v(" 何谓事务？")]),_._v(" "),a("p",[_._v("事务是逻辑上的一组操作，要么都执行，要么都不执行。")]),_._v(" "),a("h4",{attrs:{id:"何谓数据库事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何谓数据库事务"}},[_._v("#")]),_._v(" 何谓数据库事务？")]),_._v(" "),a("p",[_._v("数据库事务可以保证多个对数据库的操作构成一个逻辑上的整体。这些操作要么都执行成功，要么都不执行。")]),_._v(" "),a("h4",{attrs:{id:"事务有哪些特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务有哪些特性"}},[_._v("#")]),_._v(" 事务有哪些特性？")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("原子性(Atomicity)")]),_._v("：")]),_._v(" "),a("li",[a("strong",[_._v("一致性(Consistency)")])]),_._v(" "),a("li",[a("strong",[_._v("隔离性(Isolation)")])]),_._v(" "),a("li",[a("strong",[_._v("持久性(Durability)")])])]),_._v(" "),a("p",[_._v("只有保证了事务的持久性、原子性、隔离性之后，一致性才能得到保障。即 A、I、D 是手段，C 是目的")]),_._v(" "),a("h4",{attrs:{id:"并发事务带来了哪些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发事务带来了哪些问题"}},[_._v("#")]),_._v(" 并发事务带来了哪些问题？")]),_._v(" "),a("ul",[a("li",[_._v("脏读")]),_._v(" "),a("li",[_._v("丢失修改")]),_._v(" "),a("li",[_._v("不可重复读")]),_._v(" "),a("li",[_._v("幻读")])]),_._v(" "),a("h4",{attrs:{id:"不可重复读和幻读有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读和幻读有什么区别"}},[_._v("#")]),_._v(" 不可重复读和幻读有什么区别？")]),_._v(" "),a("ul",[a("li",[_._v("不可重复读的重点是内容修改导致两次读取之间数据不一致")]),_._v(" "),a("li",[_._v("幻读的重点是记录新增")])]),_._v(" "),a("h4",{attrs:{id:"并发事务的控制方式有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发事务的控制方式有哪些"}},[_._v("#")]),_._v(" 并发事务的控制方式有哪些？")]),_._v(" "),a("p",[_._v("有两种："),a("strong",[_._v("锁和 MVCC")]),_._v("。锁可以看作是悲观控制模式，MVCC 可以看作是乐观控制模式。")]),_._v(" "),a("h4",{attrs:{id:"sql-标准定义了哪些隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-标准定义了哪些隔离级别"}},[_._v("#")]),_._v(" SQL 标准定义了哪些隔离级别？")]),_._v(" "),a("ul",[a("li",[_._v("Read-Uncommitted（读未提交）")]),_._v(" "),a("li",[_._v("Read-Committed（读已提交）")]),_._v(" "),a("li",[_._v("Repeatable-Read（可重复读）")]),_._v(" "),a("li",[_._v("Serializable（序列化）")])]),_._v(" "),a("h4",{attrs:{id:"mysql-的隔离级别是通过锁来实现的吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-的隔离级别是通过锁来实现的吗"}},[_._v("#")]),_._v(" MySQL 的隔离级别是通过锁来实现的吗？")]),_._v(" "),a("p",[_._v("MySQL 的隔离级别是基于锁和 MVCC 机制共同实现的。"),a("br"),_._v("\nSerializable 是通过锁实现的，Read-Committed 和 Repeatable-Read 是通过 MVCC 实现的。"),a("br"),_._v("\n但是，Serializable 之外的其他隔离级别可能也需要用到锁机制，如 Repeatable-Read 在当前读的情况下需要加锁来保证不会出现幻读。")]),_._v(" "),a("h4",{attrs:{id:"mysql-的默认隔离级别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-的默认隔离级别是什么"}},[_._v("#")]),_._v(" MySQL 的默认隔离级别是什么？")]),_._v(" "),a("p",[_._v("Repeatable-Read")]),_._v(" "),a("h4",{attrs:{id:"innodb-引擎的-repeatable-read-怎么解决幻读问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb-引擎的-repeatable-read-怎么解决幻读问题"}},[_._v("#")]),_._v(" InnoDB 引擎的 Repeatable Read 怎么解决幻读问题？")]),_._v(" "),a("p",[_._v("有两种情况：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("快照读")]),_._v("：由 MVCC 机制保证不出现幻读。")]),_._v(" "),a("li",[a("strong",[_._v("当前读")]),_._v("：使用 Next-Key Lock 进行加锁来保证不出现幻读。Next-Key Lock 是行锁（Record Lock）和间隙锁（Gap Lock）的结合。")])]),_._v(" "),a("p",[_._v("InnoDB 存储引擎在分布式事务的情况下一般会用到 Serializable 隔离级别。")]),_._v(" "),a("h4",{attrs:{id:"解决幻读的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决幻读的方法"}},[_._v("#")]),_._v(" 解决幻读的方法？")]),_._v(" "),a("p",[_._v("解决幻读的核心思想就是一个事务在操作某张表数据的时候，另外一个事务不允许新增或者删除这张表中的数据。")]),_._v(" "),a("ol",[a("li",[_._v("将事务隔离级别调整为 Serializable。")]),_._v(" "),a("li",[_._v("在可重复读的事务级别下，给事务操作的这张表添加表锁。")]),_._v(" "),a("li",[_._v("在可重复读的事务级别下，给事务操作的这张表添加 Next-Key Lock。")])]),_._v(" "),a("h2",{attrs:{id:"mysql-锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-锁"}},[_._v("#")]),_._v(" MySQL 锁")]),_._v(" "),a("h4",{attrs:{id:"表级锁和行级锁有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表级锁和行级锁有什么区别"}},[_._v("#")]),_._v(" 表级锁和行级锁有什么区别？")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("表级锁")]),_._v("：MySQL 中锁粒度最大的一种锁（全局锁除外），是针对非索引字段加的锁，对当前操作的整张表加锁，实现简单，资源消耗少，加锁快，不会出现死锁。但锁冲突的概率很高，高并发下效率极低。表级锁与存储引擎无关，每个存储引擎都支持表级锁。")]),_._v(" "),a("li",[a("strong",[_._v("行级锁")]),_._v("：MySQL 中锁粒度最小的一种锁，是 "),a("strong",[_._v("针对索引字段加的锁")]),_._v("，只针对当前操作的行记录进行加锁。行级锁能大大减小数据库操作的冲突，并发度高，但加锁的开销也最大，加锁慢，有可能会出现死锁。行级锁与存储引擎有关，是在存储引擎层面实现的。")])]),_._v(" "),a("h4",{attrs:{id:"行级锁的使用有哪些注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行级锁的使用有哪些注意事项"}},[_._v("#")]),_._v(" 行级锁的使用有哪些注意事项？")]),_._v(" "),a("p",[_._v("InnoDB 的行锁是针对索引字段加锁的。当我们执行 "),a("code",[_._v("update")]),_._v("、"),a("code",[_._v("delete")]),_._v(" 语句时，如果 "),a("code",[_._v("where")]),_._v(" 条件中字段没有命中唯一索引或者索引失效的话，就会导致扫描全表对表中的所有行记录进行加锁。（日常工作开发中经常遇到，要注意！）")]),_._v(" "),a("h4",{attrs:{id:"innodb-有哪几种行锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb-有哪几种行锁"}},[_._v("#")]),_._v(" InnoDB 有哪几种行锁？")]),_._v(" "),a("p",[_._v("三种：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("记录锁（Record Lock）")])]),_._v(" "),a("li",[a("strong",[_._v("间隙锁（Gap Lock）")])]),_._v(" "),a("li",[a("strong",[_._v("临建锁（Next-Key Lock）")])])]),_._v(" "),a("p",[_._v("在 InnoDB 默认的隔离级别 Repeatable-Read 下，行锁默认使用的是 Next-Key Lock。但是，如果操作的索引是唯一索引或主键，InnoDB 会对 Next-Key Lock 进行优化，将其降级为 Record Lock，即仅锁住索引本身，而不是范围。")]),_._v(" "),a("h4",{attrs:{id:"共享锁和排他锁有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享锁和排他锁有什么区别"}},[_._v("#")]),_._v(" 共享锁和排他锁有什么区别？")]),_._v(" "),a("p",[_._v("不论是表级锁还是行级锁，都存在共享锁（Share Lock，S锁）和排他锁（Exclusive Lock，X锁）这两类：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("共享锁")]),_._v("：又称读锁，事务在读取记录的时候获取共享锁。共享锁仅与共享锁兼容。由于 MVCC 的存在，对于一般的 "),a("code",[_._v("select")]),_._v(" 语句，InnoDB 不会加任何锁。")]),_._v(" "),a("li",[a("strong",[_._v("排他锁")]),_._v("：又称写锁/独占锁，事务在修改记录的时候获取排他锁。排他锁与任何锁都不兼容。")])]),_._v(" "),a("h4",{attrs:{id:"意向锁有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#意向锁有什么作用"}},[_._v("#")]),_._v(" 意向锁有什么作用？")]),_._v(" "),a("p",[_._v("意向锁是用来快速判断是否可以对某个表使用表锁，它是表级锁，共有两种：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("意向共享锁（Intention Shared Lock, IS 锁）")]),_._v("：事务有意向对表中的某些记录加共享锁（S锁），加共享锁之前必须先取得该表的 IS 锁。")]),_._v(" "),a("li",[a("strong",[_._v("意向排他锁（Intention Exclusive Lock，IX 锁）")]),_._v("：事务有意向对表中的某些记录加排他锁（X锁），加排他锁之前必须先取得该表的 IX 锁。")])]),_._v(" "),a("p",[_._v("意向锁是由数据引擎自己维护的，用户无法手动操作意向锁，在为数据行加共享/排他锁之前，InnoDB 会先获取该数据行所在数据表的对应意向锁。"),a("br"),_._v("\n意向锁之间是互相兼容的，但它们与"),a("strong",[_._v("表级")]),_._v("的共享锁和排他锁互斥，不会与行级的共享锁和排他锁互斥。")]),_._v(" "),a("h4",{attrs:{id:"当前读和快照读有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前读和快照读有什么区别"}},[_._v("#")]),_._v(" 当前读和快照读有什么区别？")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("快照读（一致性非锁定读）")]),_._v("：单纯的 "),a("code",[_._v("select")]),_._v(" 语句。如果读取的记录正在执行 "),a("code",[_._v("update/delete")]),_._v(" 操作，读取操作不会因此去等待记录上写锁的释放，而是会读取行的一个快照。只有在事务隔离级别 RC 和 RR 下，InnoDB 才会使用一致性非锁定读：\n"),a("ul",[a("li",[_._v("在 RC 下，一致性非锁定读总是读取被锁定行的最新一份快照数据。")]),_._v(" "),a("li",[_._v("在 RR 下，一致性非锁定读总是读取本事务开始时的行数据版本。")])])]),_._v(" "),a("li",[a("strong",[_._v("当前读（一致性锁定读）")]),_._v("：读取的是最新版本，并且对读取的记录加锁，阻塞其他事务同时改动该记录，避免出现安全问题。")])]),_._v(" "),a("h4",{attrs:{id:"自增锁-了解即可"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自增锁-了解即可"}},[_._v("#")]),_._v(" 自增锁？（了解即可）")]),_._v(" "),a("p",[_._v("InnoDB 中的自增长的列（"),a("code",[_._v("AUTO_INCREMENT")]),_._v("）会涉及一种比较特殊的表级锁——"),a("strong",[_._v("自增锁")]),_._v("。"),a("br"),_._v("\n如果一个事务正在插入数据到有自增列的表时，会先获取自增锁，拿不到就可能会被阻塞住。")]),_._v(" "),a("h2",{attrs:{id:"mysql-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-性能优化"}},[_._v("#")]),_._v(" MySQL 性能优化")]),_._v(" "),a("h4",{attrs:{id:"能用-mysql-直接存储文件-比如图片-吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#能用-mysql-直接存储文件-比如图片-吗"}},[_._v("#")]),_._v(" 能用 MySQL 直接存储文件（比如图片）吗？")]),_._v(" "),a("p",[_._v("可以，直接存储文件对应的二进制数据即可，但不建议。")]),_._v(" "),a("h4",{attrs:{id:"mysql-如何存储-ip-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-如何存储-ip-地址"}},[_._v("#")]),_._v(" MySQL 如何存储 ip 地址？")]),_._v(" "),a("p",[_._v("可以将 IP 地址转换成整型数据存储，性能更好，占用空间也更小。"),a("br"),_._v("\nMySQL 提供了两个方法来处理 IP 地址：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("INET_ATON()")]),_._v("：把 ip 转为无符号整型（4—8位）")]),_._v(" "),a("li",[a("code",[_._v("INET_NTOA()")]),_._v("：把整型的 ip 转为地址")])]),_._v(" "),a("h4",{attrs:{id:"有哪些常见的-sql-优化手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有哪些常见的-sql-优化手段"}},[_._v("#")]),_._v(" 有哪些常见的 SQL 优化手段？")]),_._v(" "),a("ul",[a("li",[_._v("避免使用 "),a("code",[_._v("select *")])]),_._v(" "),a("li",[_._v("分页的时候利用延迟关联或者子查询进行优化")]),_._v(" "),a("li",[_._v("尽量避免多表做 join")]),_._v(" "),a("li",[_._v("建议不要使用外键与级联")]),_._v(" "),a("li",[_._v("选择合适的字段类型")]),_._v(" "),a("li",[_._v("尽量用 UNION ALL 代替 UNION")]),_._v(" "),a("li",[_._v("对于数据库中的更新，能使用批量操作就尽量使用，减少请求数据库的次数，提高性能。")]),_._v(" "),a("li",[_._v("Show Profile 分析 SQL 执行性能")]),_._v(" "),a("li",[_._v("通过慢查询日志优化慢 SQL")])]),_._v(" "),a("h4",{attrs:{id:"如何分析-sql-的性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何分析-sql-的性能"}},[_._v("#")]),_._v(" 如何分析 SQL 的性能？")]),_._v(" "),a("p",[_._v("可以用 "),a("code",[_._v("EXPLAIN")]),_._v(" 命令分析 SQL 的执行计划。")]),_._v(" "),a("h4",{attrs:{id:"对于分库分表、读写分离了解吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于分库分表、读写分离了解吗"}},[_._v("#")]),_._v(" 对于分库分表、读写分离了解吗？")]),_._v(" "),a("h2",{attrs:{id:"innodb-存储引擎对-mvcc-的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb-存储引擎对-mvcc-的实现"}},[_._v("#")]),_._v(" InnoDB 存储引擎对 MVCC 的实现")]),_._v(" "),a("h4",{attrs:{id:"innodb-对于一致性非锁定读和一致性锁定读的处理有何不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb-对于一致性非锁定读和一致性锁定读的处理有何不同"}},[_._v("#")]),_._v(" InnoDB 对于一致性非锁定读和一致性锁定读的处理有何不同？")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("一致性非锁定读")]),_._v("：MVCC 就是对非锁定读的实现。如果读取的行正在执行 "),a("code",[_._v("delete")]),_._v(" 或 "),a("code",[_._v("update")]),_._v(" 操作，这时读取操作不会去等待行上锁的释放。相反地，InnoDB 存储引擎会去读取行的一个快照数据，这种方式也被称为快照读。")]),_._v(" "),a("li",[a("strong",[_._v("一致性锁定读")]),_._v("：也就是当前读，这种方式每次读取到的都是最新数据，如果两次查询中间有其他事务插入数据，就会产生幻读。所以，InnoDB 在实现 RR 时，如果执行的是当前读，则会对读取的记录使用 Next-Key Lock。")])]),_._v(" "),a("h4",{attrs:{id:"mvcc-的实现依赖于什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvcc-的实现依赖于什么"}},[_._v("#")]),_._v(" MVCC 的实现依赖于什么？")]),_._v(" "),a("p",[_._v("MVCC 的实现依赖于："),a("strong",[_._v("隐藏字段、Read View、Undo log")]),_._v("。在内部实现中，InnoDB 通过数据行的 "),a("code",[_._v("DB_TRX_ID")]),_._v(" 和 "),a("code",[_._v("Read View")]),_._v(" 来判断数据的可见性，如不可见，则通过数据行的 "),a("code",[_._v("DB_ROLL_PTR")]),_._v(" 找到 "),a("code",[_._v("undo log")]),_._v(" 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 "),a("code",[_._v("Read View")]),_._v(" 之前已经提交的修改和该事务本身做的修改。")]),_._v(" "),a("h4",{attrs:{id:"每行的隐藏字段有哪三个-分别表示什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每行的隐藏字段有哪三个-分别表示什么"}},[_._v("#")]),_._v(" 每行的隐藏字段有哪三个？分别表示什么？")]),_._v(" "),a("p",[_._v("InnoDB 存储引擎为每行数据添加了三个隐藏字段：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("DB_TRX_ID（6字节）")]),_._v("：表示最后一次插入或更新该行的事务 id。此外，"),a("code",[_._v("delete")]),_._v(" 操作在内部被视为更新，只不过会在记录头 "),a("code",[_._v("Record header")]),_._v(" 中的 "),a("code",[_._v("delete_flag")]),_._v(" 字段将其标记为已删除。")]),_._v(" "),a("li",[a("code",[_._v("DB_ROLL_PTR（7字节）")]),_._v("：回滚指针，指向该行的 undo log。如果该行未被更新，则为空。")]),_._v(" "),a("li",[a("code",[_._v("DB_ROW_ID")]),_._v("：如果没有设置主键且该表没有唯一非空索引时，InnoDB 会使用该 id 来生成聚簇索引。")])]),_._v(" "),a("h4",{attrs:{id:"read-view-中有哪些参数-代表什么意思"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-view-中有哪些参数-代表什么意思"}},[_._v("#")]),_._v(" Read View 中有哪些参数？代表什么意思？")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("m_low_limit_id")]),_._v("：目前出现过的最大的事务ID + 1，即下一个将被分配的事务 ID。大于等于这个 ID 的数据版本不可见。")]),_._v(" "),a("li",[a("code",[_._v("m_up_limit_id")]),_._v("：活跃事务列表 "),a("code",[_._v("m_ids")]),_._v(" 中最小的事务 ID，如果 "),a("code",[_._v("m_ids")]),_._v(" 为空，则 "),a("code",[_._v("m_up_limit_id")]),_._v(" 为 "),a("code",[_._v("m_low_limit_id")]),_._v("。小于这个ID的数据版本均可见。")]),_._v(" "),a("li",[a("code",[_._v("m_ids")]),_._v("："),a("code",[_._v("Read View")]),_._v(" 创建时其他未提交的活跃事务 ID 列表。后续即使这些事务修改了记录行的值，对当前事务也是不可见的。")]),_._v(" "),a("li",[a("code",[_._v("m_creator_trx_id")]),_._v("：创建该 "),a("code",[_._v("Read View")]),_._v(" 的事务 ID。")])]),_._v(" "),a("h4",{attrs:{id:"undo-log-有什么作用-分为哪两种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo-log-有什么作用-分为哪两种"}},[_._v("#")]),_._v(" undo log 有什么作用？分为哪两种？")]),_._v(" "),a("p",[_._v("undo log 主要有两个作用：")]),_._v(" "),a("ul",[a("li",[_._v("当事务回滚时用于将数据恢复到修改前的样子。")]),_._v(" "),a("li",[_._v("用于 MVCC。当读取记录时，若该记录被其他事务占用或当前版本对该事务不可见，则可以通过 undo log 读取之前的版本数据，以此实现非锁定读。")])]),_._v(" "),a("p",[_._v("在 InnoDB 存储引擎中 undo log 分为两种："),a("code",[_._v("insert undo log")]),_._v(" 和 "),a("code",[_._v("update undo log")]),_._v("。")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("insert undo log")]),_._v("：在 "),a("code",[_._v("insert")]),_._v(" 操作中产生的 undo log。insert 操作的记录只对事务本身可见，对其他事务不可见，故该 undo log 可以在事务提交后直接删除，不需要 purge 操作。")]),_._v(" "),a("li",[a("code",[_._v("update undo log")]),_._v("：在 "),a("code",[_._v("update")]),_._v(" 或 "),a("code",[_._v("delete")]),_._v(" 操作中产生的 undo log。该 undo log 可能需要提供 MVCC 机制，因此提交时放入 undo log 链表中，等待 purge 线程进行最后的删除。")])]),_._v(" "),a("p",[_._v("不同事务或者相同事务对同一记录行的修改，会使该记录行的 undo log 成为一条链表，链首就是最新的记录，链尾就是最早的旧纪录。")]),_._v(" "),a("h4",{attrs:{id:"数据可见性算法-怎么判断数据是否可见"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据可见性算法-怎么判断数据是否可见"}},[_._v("#")]),_._v(" 数据可见性算法？（怎么判断数据是否可见）")]),_._v(" "),a("p",[_._v("其实就是通过比较数据行隐藏字段 "),a("code",[_._v("DB_TRX_ID")]),_._v(" 与事务视图中的字段 "),a("code",[_._v("m_up_limit_id")]),_._v("、"),a("code",[_._v("m_low_limit_id")]),_._v("、"),a("code",[_._v("m_ids")]),_._v("，如果 "),a("code",[_._v("DB_TRX_ID")]),_._v(" 在事务创建视图前就提交了，那么就对该事务可见，否则就不可见，需要从 undo log 中取出快照版本进行比较。")]),_._v(" "),a("h4",{attrs:{id:"rc-和-rr-隔离级别下-mvcc-的不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-和-rr-隔离级别下-mvcc-的不同"}},[_._v("#")]),_._v(" RC 和 RR 隔离级别下 MVCC 的不同？")]),_._v(" "),a("ul",[a("li",[_._v("在 RC 隔离级别下的每次 "),a("code",[_._v("select")]),_._v(" 查询前都生成一个 "),a("code",[_._v("Read View")]),_._v("，因此可能会出现不可重复读。")]),_._v(" "),a("li",[_._v("在 RR 隔离级别下只在事务开始后第一次 "),a("code",[_._v("select")]),_._v(" 查询前生成一个 "),a("code",[_._v("Read View")]),_._v("，并贯穿事务始终。")])]),_._v(" "),a("h4",{attrs:{id:"innodb-有哪些防止幻读的方式-各自在什么情况下使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb-有哪些防止幻读的方式-各自在什么情况下使用"}},[_._v("#")]),_._v(" InnoDB 有哪些防止幻读的方式？各自在什么情况下使用？")]),_._v(" "),a("p",[_._v("InnoDB 存储引擎在 RR 级别下通过 MVCC 和 Next-Key Lock 来解决幻读问题：")]),_._v(" "),a("ul",[a("li",[_._v("执行普通 "),a("code",[_._v("select")]),_._v("，此时会以 MVCC 快照读的方式读取数据")]),_._v(" "),a("li",[_._v("执行 "),a("code",[_._v("select...for update/ lock in share mode、insert、update、delete")]),_._v(" 等当前读时，使用 Next-Key Lock 来防止幻读。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);