"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51697],{17566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(85893),s=t(11151);const a={},o="Data distribution",r={id:"table_design/Data_distribution",title:"Data distribution",description:"When you create a table, you must specify the data distribution method by configuring the number of partitions and the number of tablets in a table. An appropriate data distribution method helps evenly distribute data across the nodes of your StarRocks cluster, reduces table scans, makes full use of the concurrency of the cluster, thereby improving query performance.",source:"@site/versioned_docs/version-2.5/table_design/Data_distribution.md",sourceDirName:"table_design",slug:"/table_design/Data_distribution",permalink:"/doc/en/2.5/table_design/Data_distribution",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/table_design/Data_distribution.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"Introduction",permalink:"/doc/en/2.5/table_design/"},next:{title:"Sort keys and prefix indexes",permalink:"/doc/en/2.5/table_design/Sort_key"}},l={},c=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Partitioning methods",id:"partitioning-methods",level:2},{value:"Design partitioning and bucketing rules",id:"design-partitioning-and-bucketing-rules",level:2},{value:"Choose partitioning columns",id:"choose-partitioning-columns",level:3},{value:"Choose bucketing columns",id:"choose-bucketing-columns",level:3},{value:"Precautions",id:"precautions",level:4},{value:"Examples",id:"examples",level:4},{value:"Determine the number of tablets",id:"determine-the-number-of-tablets",level:3},{value:"Manage  partitions",id:"manage--partitions",level:2},{value:"Create partitions",id:"create-partitions",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Add a partition",id:"add-a-partition",level:3},{value:"Delete a partition",id:"delete-a-partition",level:3},{value:"Restore a partition",id:"restore-a-partition",level:3},{value:"View partitions",id:"view-partitions",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",img:"img",strong:"strong",code:"code",pre:"pre",h3:"h3",h4:"h4",blockquote:"blockquote",a:"a"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"data-distribution",children:"Data distribution"}),"\n",(0,i.jsx)(n.p,{children:"When you create a table, you must specify the data distribution method by configuring the number of partitions and the number of tablets in a table. An appropriate data distribution method helps evenly distribute data across the nodes of your StarRocks cluster, reduces table scans, makes full use of the concurrency of the cluster, thereby improving query performance."}),"\n",(0,i.jsx)(n.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,i.jsx)(n.p,{children:"Before you dive into the details of designing and managing data distribution, familiarize yourself with the following concepts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Partitioning"}),"\n",(0,i.jsx)(n.p,{children:"Partitioning divides a table into multiple segments called partitions based on the partitioning column you specified. You can set a storage strategy for partitions, including the number of replicas, strategy of storing hot or cold data, and storage medium. StarRocks allows you to use multiple storage mediums within a cluster. For example, you can store the latest data on solid-state drives (SSD) to improve query performance, and historical data on SATA hard drives to reduce storage costs."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Bucketing"}),"\n",(0,i.jsx)(n.p,{children:"Bucketing divides a partition into multiple more manageable parts called tablets, which is the smallest unit of storage that you can use and allocate. StarRocks uses a hash algorithm to bucket data. Data with the same hash value of the bucketing column is distributed to the same tablet. StarRocks creates multiple replicas (three by default) for each tablet to prevent data loss. These replicas are managed by a separate local storage engine. You must specify the bucketing column when you create a table."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"partitioning-methods",children:"Partitioning methods"}),"\n",(0,i.jsx)(n.p,{children:"Modern distributed database systems generally use four basic partitioning methods: round-robin, range, list, and hash."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Data distribution method",src:t(23940).Z+"",width:"1599",height:"1503"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Round-robin"}),": distributes data across different nodes in a cyclic."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Range"}),": distributes data across different nodes based on the value range of partitioning columns."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"List"}),": distributes data across different nodes based on the discrete values of partitioning columns, such as age."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hash"}),": distributes data across different nodes based on a hash algorithm."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To achieve more flexible data distribution, you can combine the preceding four partitioning methods based on your business requirements, such as hash-hash, range-hash, and hash-list. ",(0,i.jsx)(n.strong,{children:"StarRocks offers the following two partitioning methods:"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hash"}),": A hash-partitioned table has only one partition (the entire table is considered a partition). The partition is divided into tablets based on the bucketing column and the number of tablets that you specified."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, the following statement creates a table ",(0,i.jsx)(n.code,{children:"site_access"}),". The table is divided into 10 tablets based on the ",(0,i.jsx)(n.code,{children:"site_id"})," column."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(site_id, city_code, user_name)\nDISTRIBUTED BY HASH(site_id) BUCKETS 10;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Range-hash"}),": A range-hash partitioned table divides data into multiple partitions based on the partitioning column. Each partition is further divided into tablets based on the bucketing column and the number of tablets that you specified."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, the following statement creates a table ",(0,i.jsx)(n.code,{children:"site_access"})," that is partitioned by the ",(0,i.jsx)(n.code,{children:"event_day"})," column. The table contains 3 partitions: ",(0,i.jsx)(n.code,{children:"p1"}),", ",(0,i.jsx)(n.code,{children:"p2"}),", and ",(0,i.jsx)(n.code,{children:"p3"}),". Each partition is divided into 10 tablets based on the ",(0,i.jsx)(n.code,{children:"site_id"})," column."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access(\n    event_day DATE,\n    site_id INT DEFAULT '10',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY RANGE(event_day)\n(\n    PARTITION p1 VALUES LESS THAN (\"2020-01-31\"),\n    PARTITION p2 VALUES LESS THAN (\"2020-02-29\"),\n    PARTITION p3 VALUES LESS THAN (\"2020-03-31\")\n)\nDISTRIBUTED BY HASH(site_id) BUCKETS 10;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"design-partitioning-and-bucketing-rules",children:"Design partitioning and bucketing rules"}),"\n",(0,i.jsx)(n.p,{children:"Before you partition a table, determine the partitioning column, bucketing column, and the number of tablets."}),"\n",(0,i.jsx)(n.h3,{id:"choose-partitioning-columns",children:"Choose partitioning columns"}),"\n",(0,i.jsx)(n.p,{children:"Data in a partitioned table is divided based on partitioning columns, also called partition keys. Generally, date or area is used as the partitioning column. In StarRocks, only the column of the DATE, DATETIME or INT type can be used as the partitioning column. We recommend that you follow the suggestions below to decide the partitioning column:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The column with low cardinality."}),"\n",(0,i.jsx)(n.li,{children:"The column that is often used as a filter in queries."}),"\n",(0,i.jsx)(n.li,{children:"The amount of data in each partition must be less than 100 GB."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"choose-bucketing-columns",children:"Choose bucketing columns"}),"\n",(0,i.jsx)(n.p,{children:"Data in partitions can be subdivided into tablets based on the hash values of the bucketing columns and the number of buckets. We recommend that you choose the column that satisfy the following two requirements as the bucketing column."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"high cardinality column such as ID"}),"\n",(0,i.jsx)(n.li,{children:"column that often used as a filter in queries"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"But if the column that satisfies both requirements does not exist, you need to determine the bucketing column according to the complexity of queries."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the query is complex, it is recommended that you select the high cardinality column as the bucketing column to ensure that the data is as balanced as possible in each bucket and improve the cluster resource utilization."}),"\n",(0,i.jsx)(n.li,{children:"If the query is relatively simple, then it is recommended to select the column that is often used as in the query condition as the bucketing column to improve the query efficiency."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If partition data cannot be evenly distributed into each tablet by using one bucketing column, you can choose multiple bucketing columns. You can decide on the number of bucketing columns based on the following scenarios:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One bucketing column: This method can reduce data transmission between nodes. It improves the performance of short-running query because short-running query only runs on one server and scan a small amount of data."}),"\n",(0,i.jsx)(n.li,{children:"Multiple bucketing columns: This method makes the most of the concurrency performance of a distributed cluster. It improves the performance of long-running query because long-running query runs across multiple servers and scan a large amount of data by using multiple servers in parallel. We recommend that you choose three bucketing columns at most."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"precautions",children:"Precautions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"When a table is created, you must specify the bucketing columns"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The data types of bucketing columns must be INTEGER, DECIMAL, DATE/DATETIME, or CHAR/VARCHAR/STRING."}),"\n",(0,i.jsx)(n.li,{children:"Bucketing columns cannot be modified after they are specified."}),"\n",(0,i.jsx)(n.li,{children:"The values of bucketing columns cannot be updated."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["The following statement creates a table named ",(0,i.jsx)(n.code,{children:"site_access"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access(\n    event_day DATE,\n    site_id INT DEFAULT '10',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY RANGE(event_day)\n(\n    PARTITION p1 VALUES LESS THAN (\"2020-01-31\"),\n    PARTITION p2 VALUES LESS THAN (\"2020-02-29\"),\n    PARTITION p3 VALUES LESS THAN (\"2020-03-31\")\n)\nDISTRIBUTED BY HASH(site_id) BUCKETS 10;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, ",(0,i.jsx)(n.code,{children:"site_access"})," uses ",(0,i.jsx)(n.code,{children:"site_id"})," as the bucketing column because this column is always used as a filter in queries. When the bucketing column is used as a filter in queries, StarRocks only scans the relevant tablets, which greatly improves query performance."]}),"\n",(0,i.jsxs)(n.p,{children:["Suppose you execute the following statement to query ",(0,i.jsx)(n.code,{children:"site_access"}),". After you send the query, StarRocks only scans data in one tablet of ",(0,i.jsx)(n.code,{children:"site_access"}),". The overall query speed is much faster than scanning 10 tablets."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"select sum(pv)\nfrom site_access\nwhere site_id = 54321;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["However, if ",(0,i.jsx)(n.code,{children:"site_id"})," is unevenly distributed and a large number of queries are destined for only a few sites, the preceding bucketing method will cause severe data skew, causing system performance bottlenecks. In this case, you can use a combination of bucketing columns. For example, the following statement uses ",(0,i.jsx)(n.code,{children:"site_id"})," and ",(0,i.jsx)(n.code,{children:"city_code"})," as bucketing columns."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(site_id, city_code, user_name)\nDISTRIBUTED BY HASH(site_id,city_code) BUCKETS 10;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"determine-the-number-of-tablets",children:"Determine the number of tablets"}),"\n",(0,i.jsx)(n.p,{children:"Tablets reflect how data files are organized in StarRocks. Since StarRocks 2.5, you do not need to set the number of buckets when a table is created, and StarRocks sets the number of buckets automatically."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(site_id, city_code, user_name)\nDISTRIBUTED BY HASH(site_id,city_code); --do not need to set the number of buckets\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you intend to set the number of buckets, StarRocks 2.4 and later versions support using multiple threads to scan a tablet in parallel during a query, thereby reducing the dependency of scanning performance on the tablet count. We recommend that each tablet contains about 10 GB of raw data. You can estimate the amount of data in each partition of a table and then decide the number of tablets. To enable the parallel scanning on tablets, make sure the ",(0,i.jsx)(n.code,{children:"GLOBAL enable_tablet_internal_parallel"})," is enabled."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: You cannot modify the number of tablets for an existing partition. You can only modify the number of tablets when you add a partition."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"manage--partitions",children:"Manage  partitions"}),"\n",(0,i.jsx)(n.h3,{id:"create-partitions",children:"Create partitions"}),"\n",(0,i.jsxs)(n.p,{children:["You can partition a table in threes ways by using ",(0,i.jsx)(n.code,{children:"PARTITION BY RANGE"})," clause:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Partition a table with the LESS THAN clause. For more information, see ",(0,i.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'PARTITION BY RANGE (k1, k2, ...)\n(\n    PARTITION partition_name1 VALUES LESS THAN ("value1", "value2", ...),\n    PARTITION partition_name2 VALUES LESS THAN ("value1", "value2", ...),\n    PARTITION partition_name3 VALUES LESS THAN (MAXVALUE)\n)\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Partition a table by specifying values of a fixed range. For more information, see CREATE TABLE."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'PARTITION BY RANGE (k1, k2, k3, ...)\n(\n    PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ...)],\n    PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, )],\n    "k3-upper1-2", ...\n)\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Partition a table by specifying START, END, and EVERY. You can create multiple partitions at a time by using this method. For more information, see CREATE TABLE."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'PARTITION BY RANGE (k1, k2, ...) \n(\n    START ("value1") END ("value2") EVERY (INTERVAL value3 day)\n)\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"The following examples demonstrate how to partition a table by specifying START, END, and EVERY."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The data type of the partitioning column is DATE and you specify the time range of partitioning via START and END and define the time range via EVERY. Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE site_access (\n   datekey DATE,\n   site_id INT,\n   city_code SMALLINT,\n   user_name VARCHAR(32),\n   pv BIGINT DEFAULT \'0\'\n)\nENGINE=olap\nDUPLICATE KEY(datekey, site_id, city_code, user_name)\nPARTITION BY RANGE (datekey) (\n   START ("2021-01-01") END ("2021-01-04") EVERY (INTERVAL 1 DAY)\n)\nDISTRIBUTED BY HASH(site_id) BUCKETS 10\nPROPERTIES ("replication_num" = "3" \n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"The PARTITION BY RANGE clause in this example is equal to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"PARTITION BY RANGE (datekey) (\nPARTITION p20210101 VALUES [('2021-01-01'), ('2021-01-02')),\nPARTITION p20210102 VALUES [('2021-01-02'), ('2021-01-03')),\nPARTITION p20210103 VALUES [('2021-01-03'), ('2021-01-04'))\n)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The data type of the partitioning column is DATE and you specify different EVERY clauses for different time ranges (which cannot overlap with each other). Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE site_access(\n    datekey DATE,\n    site_id INT,\n    city_code SMALLINT,\n    user_name VARCHAR(32),\n    pv BIGINT DEFAULT \'0\'\n)\nENGINE=olap\nDUPLICATE KEY(datekey, site_id, city_code, user_name)\nPARTITION BY RANGE (datekey) \n(\n    START ("2019-01-01") END ("2021-01-01") EVERY (INTERVAL 1 YEAR),\n    START ("2021-01-01") END ("2021-05-01") EVERY (INTERVAL 1 MONTH),\n    START ("2021-05-01") END ("2021-05-04") EVERY (INTERVAL 1 DAY)\n)\nDISTRIBUTED BY HASH(site_id) BUCKETS 10\nPROPERTIES(\n    "replication_num" = "1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"The PARTITION BY RANGE clause in this example is equal to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"PARTITION BY RANGE (datekey) (\nPARTITION p2019 VALUES [('2019-01-01'), ('2020-01-01')),\nPARTITION p2020 VALUES [('2020-01-01'), ('2021-01-01')),\nPARTITION p202101 VALUES [('2021-01-01'), ('2021-02-01')),\nPARTITION p202102 VALUES [('2021-02-01'), ('2021-03-01')),\nPARTITION p202103 VALUES [('2021-03-01'), ('2021-04-01')),\nPARTITION p202104 VALUES [('2021-04-01'), ('2021-05-01')),\nPARTITION p20210501 VALUES [('2021-05-01'), ('2021-05-02')),\nPARTITION p20210502 VALUES [('2021-05-02'), ('2021-05-03')),\nPARTITION p20210503 VALUES [('2021-05-03'), ('2021-05-04'))\n)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The data type of the partitioning column is INT and you specify the value range of partitioning by using START and END and define the incremental value via EVERY. Example:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: Do not double quote the incremental value defined by EVERY."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE site_access (\n    datekey INT,\n    site_id INT,\n    city_code SMALLINT,\n    user_name VARCHAR(32),\n    pv BIGINT DEFAULT \'0\'\n)\nENGINE=olap\nDUPLICATE KEY(datekey, site_id, city_code, user_name)\nPARTITION BY RANGE (datekey) (START ("1") END ("5") EVERY (1)\n)\nDISTRIBUTED BY HASH(site_id) BUCKETS 10\nPROPERTIES ("replication_num" = "1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"The PARTITION BY RANGE clause in this example is equal to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"PARTITION BY RANGE (datekey) (\nPARTITION p2019 VALUES [('2019-01-01'), ('2020-01-01')),\nPARTITION p2020 VALUES [('2020-01-01'), ('2021-01-01')),\nPARTITION p202101 VALUES [('2021-01-01'), ('2021-02-01')),\nPARTITION p202102 VALUES [('2021-02-01'), ('2021-03-01')),\nPARTITION p202103 VALUES [('2021-03-01'), ('2021-04-01')),\nPARTITION p202104 VALUES [('2021-04-01'), ('2021-05-01')),\nPARTITION p20210501 VALUES [('2021-05-01'), ('2021-05-02')),\nPARTITION p20210502 VALUES [('2021-05-02'), ('2021-05-03')),\nPARTITION p20210503 VALUES [('2021-05-03'), ('2021-05-04'))\n)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After a table is created, you can use the ",(0,i.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})," statement to add partitions for the table."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE site_access \nADD PARTITIONS START ("2021-01-04") END ("2021-01-06") EVERY (INTERVAL 1 DAY);\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"add-a-partition",children:"Add a partition"}),"\n",(0,i.jsx)(n.p,{children:"You can add new partitions to store input data in a table. By default, the number of tablets in the new partition is equal to the number of tablets in the existing partitions. You can also adjust the number of tablets according to the amount of data in the new partition."}),"\n",(0,i.jsxs)(n.p,{children:["The following statement adds a new partition ",(0,i.jsx)(n.code,{children:"p4"})," to table ",(0,i.jsx)(n.code,{children:"site_access"})," to store data generated in April."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE site_access\nADD PARTITION p4 VALUES LESS THAN ("2020-04-30")\nDISTRIBUTED BY HASH(site_id) BUCKETS 20;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"delete-a-partition",children:"Delete a partition"}),"\n",(0,i.jsxs)(n.p,{children:["The following statement deletes partition ",(0,i.jsx)(n.code,{children:"p1"})," from table ",(0,i.jsx)(n.code,{children:"site_access"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE site_access\nDROP PARTITION p1;\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: If a partition is deleted within 24 hours, the data of the partition remains in Trash. During the period, you can execute the ",(0,i.jsx)(n.a,{href:"/doc/en/2.5/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})," statement to restore this data."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"restore-a-partition",children:"Restore a partition"}),"\n",(0,i.jsxs)(n.p,{children:["The following statement restores partition ",(0,i.jsx)(n.code,{children:"p1"})," to table ",(0,i.jsx)(n.code,{children:"site_access"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"RECOVER PARTITION p1 FROM site_access;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"view-partitions",children:"View partitions"}),"\n",(0,i.jsxs)(n.p,{children:["The following statement displays all partitions in table ",(0,i.jsx)(n.code,{children:"site_access"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SHOW PARTITIONS FROM site_access;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},23940:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/3.3.2-1-a538e1b34e20e55ee8a4b7e523ae3f4c.png"},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:a(e),i.createElement(s.Provider,{value:r},n)}}}]);