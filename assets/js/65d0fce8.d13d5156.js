"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3234],{16150:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var n=r(85893),i=r(11151);const t={displayed_sidebar:"documentation"},a="StarRocks version 2.2",l={id:"release_notes/release-2.2",title:"StarRocks version 2.2",description:"Release date: April 6, 2023",source:"@site/versioned_docs/version-3.1/release_notes/release-2.2.md",sourceDirName:"release_notes",slug:"/release_notes/release-2.2",permalink:"/doc/docs/release_notes/release-2.2",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/release_notes/release-2.2.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation"},c={},o=[{value:"Improvements",id:"improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"2.2.10",id:"2210",level:2},{value:"Improvements",id:"improvements-1",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"2.2.9",id:"229",level:2},{value:"Improvements",id:"improvements-2",level:3},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"Behavior Change",id:"behavior-change",level:3},{value:"2.2.8",id:"228",level:2},{value:"Bug Fixes",id:"bug-fixes-3",level:3},{value:"2.2.7",id:"227",level:2},{value:"Bug Fixes",id:"bug-fixes-4",level:3},{value:"2.2.6",id:"226",level:2},{value:"Bug Fixes",id:"bug-fixes-5",level:3},{value:"Behavior Change",id:"behavior-change-1",level:3},{value:"2.2.5",id:"225",level:2},{value:"Improvements",id:"improvements-3",level:3},{value:"Bug Fixes",id:"bug-fixes-6",level:3},{value:"2.2.4",id:"224",level:2},{value:"Improvements",id:"improvements-4",level:3},{value:"Bug Fixes",id:"bug-fixes-7",level:3},{value:"2.2.3",id:"223",level:2},{value:"Bug Fixes",id:"bug-fixes-8",level:3},{value:"2.2.2",id:"222",level:2},{value:"Improvements",id:"improvements-5",level:3},{value:"Bug Fixes",id:"bug-fixes-9",level:3},{value:"2.2.1",id:"221",level:2},{value:"Improvements",id:"improvements-6",level:3},{value:"Bug Fixes",id:"bug-fixes-10",level:3},{value:"2.2.0",id:"220",level:2},{value:"New Features",id:"new-features",level:3},{value:"Improvements",id:"improvements-7",level:3},{value:"Bug Fixes",id:"bug-fixes-11",level:3},{value:"Others",id:"others",level:3},{value:"Upgrade notes",id:"upgrade-notes",level:3}];function h(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",code:"code",strong:"strong"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"starrocks-version-22",children:"StarRocks version 2.2"}),"\n",(0,n.jsx)(s.p,{children:"Release date: April 6, 2023"}),"\n",(0,n.jsx)(s.h2,{id:"improvements",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Optimized the bitmap_contains() function to reduce its memory consumption and improve its performance in some scenarios. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/20616",children:"#20616"})]}),"\n",(0,n.jsxs)(s.li,{children:["Optimized the Compaction framework to reduce its CPU resource consumption. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/11746",children:"#11746"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If the requested URL in a Stream Load job is not correct, the responsible FE hangs and is unable to handle the HTTP request. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/18468",children:"#18468"})]}),"\n",(0,n.jsxs)(s.li,{children:["When the responsible FE collects statistics, it may consume an abnormally large amount of memory, which causes OOM. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/16331",children:"#16331"})]}),"\n",(0,n.jsxs)(s.li,{children:["BEs crash if memory release is not properly handled in some queries. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/11395",children:"#11395"})]}),"\n",(0,n.jsxs)(s.li,{children:["After the command TRUNCATE TABLE is executed, a NullPointerException may occur and the responsible FE fails to restart. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/16773",children:"#16773"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"2210",children:"2.2.10"}),"\n",(0,n.jsx)(s.p,{children:"Release date: December 2, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"improvements-1",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Optimized the error message returned for Routine Load jobs. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12203",children:"#12203"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Supports the logical operator ",(0,n.jsx)(s.code,{children:"&&"}),". ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/11819",children:"#11819"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Queries are immediately canceled when the BE crashes, preventing system stuck issues caused by expired queries. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12954",children:"#12954"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Optimized the FE start script. Java version is now checked during FE start. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/14094",children:"#14094"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Supports deleting large volumes of data from Primary Key tables. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4772",children:"#4772"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-1",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When users create a view from multiple tables (UNION), BEs crash if the leftmost child of UNION operations uses NULL constants. (",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13792",children:"#13792"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["BEs crash if the Parquet file to query has inconsistent column types with Hive table schema. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/8848",children:"#8848"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When a query contains a large number of OR operators, the planner needs to perform excessive recursive calculations, which causes the query to time out. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12788",children:"#12788"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The query result is incorrect when the subquery contains a LIMIT clause. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12466",children:"#12466"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The CREATE VIEW statement fails when double quotation marks in the SELECT clause are mixed with single quotation marks. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/13102",children:"#13102"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"229",children:"2.2.9"}),"\n",(0,n.jsx)(s.p,{children:"Release date: November 15, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"improvements-2",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Added the session variable ",(0,n.jsx)(s.code,{children:"hive_partition_stats_sample_size"})," to control the number of Hive partitions from which to collect statistics. An excessive number of partitions will cause errors in obtaining Hive metadata. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12700",children:"#12700"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Elasticsearch external tables support custom time zones. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12662",children:"#12662"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-2",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The DECOMMISSION operation is stuck if an error occurs during metadata synchronization for external tables. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12368",children:"#12369"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Compaction crashes if a column that is newly added is deleted. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12907",children:"#12907"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["SHOW CREATE VIEW does not display the comments that were added when creating the view. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/4163",children:"#4163"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Memory leak in Java UDF may cause OOM. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12418",children:"#12418"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The node alive status stored in Follower FEs is not accurate in some scenarios because the status depends on ",(0,n.jsx)(s.code,{children:"heartbeatRetryTimes"}),". To fix this issue, a property ",(0,n.jsx)(s.code,{children:"aliveStatus"})," is added to ",(0,n.jsx)(s.code,{children:"HeartbeatResponse"})," to indicate the node alive status. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12481",children:"#12481"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"behavior-change",children:"Behavior Change"}),"\n",(0,n.jsxs)(s.p,{children:["Extended the length of Hive STRING columns that can be queried by StarRocks from 64 KB to 1 MB. If a STRING column exceeds 1 MB, it will be processed as a null column during queries. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/12986",children:"#12986"})]}),"\n",(0,n.jsx)(s.h2,{id:"228",children:"2.2.8"}),"\n",(0,n.jsx)(s.p,{children:"Release date: October 17, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-3",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["BEs may crash if an expression encounters an error in the initialization stage. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11395",children:"#11395"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["BEs may crash if invalid JSON data is loaded. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/10804",children:"#10804"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Parallel writing encounters an error when the pipeline engine is enabled. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/11451",children:"#11451"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["BEs crash when the ORDER BY NULL LIMIT clause is used. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/11648",children:"#11648"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["BEs crash if the Parquet file to query has inconsistent column type with Hive table schema. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/11839",children:"#11839"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"227",children:"2.2.7"}),"\n",(0,n.jsx)(s.p,{children:"Release date: September 23, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-4",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Data may be lost when users load JSON data into StarRocks. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/11054",children:"#11054"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The output from SHOW FULL TABLES is incorrect. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/11126",children:"#11126"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["In previous versions, to access data in a view, users must have permissions on both the base tables and the view. In the current version, users are only required to have permissions on the view. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11290",children:"#11290"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The result from a complex query that is nested with EXISTS or IN is incorrect. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11415",children:"#11415"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["REFRESH EXTERNAL TABLE fails if the schema of the corresponding Hive table is changed. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11406",children:"#11406"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"An error may occur when a non-leader FE replays the bitmap index creation operation. [#11261]("}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"226",children:"2.2.6"}),"\n",(0,n.jsx)(s.p,{children:"Release date: September 14, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-5",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The result of ",(0,n.jsx)(s.code,{children:"order by... limit...offset"})," is incorrect when the subquery contains LIMIT. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/9698",children:"#9698"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The BE crashes if partial update is performed on a table with large data volume. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/9809",children:"#9809"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Compaction causes BEs to crash if the size of BITMAP data to compact exceeds 2 GB. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/11159",children:"#11159"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The like() and regexp() functions do not work if the pattern length exceeds 16 KB. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/10364",children:"#10364"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"behavior-change-1",children:"Behavior Change"}),"\n",(0,n.jsxs)(s.p,{children:["The format used to represent JSON values in an array in the output is modified. Escape characters are no longer used in the returned JSON values. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/10790",children:"#10790"})]}),"\n",(0,n.jsx)(s.h2,{id:"225",children:"2.2.5"}),"\n",(0,n.jsx)(s.p,{children:"Release date: August 18, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"improvements-3",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Improved the system performance when the pipeline engine is enabled. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9580",children:"#9580"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Improved the accuracy of memory statistics for index metadata. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9837",children:"#9837"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-6",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["BEs may be stuck in querying Kafka partition offsets (",(0,n.jsx)(s.code,{children:"get_partition_offset"}),") during Routine Load. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9937",children:"#9937"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["An error occurs when multiple Broker Load threads attempt to load the same HDFS file. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9507",children:"#9507"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"224",children:"2.2.4"}),"\n",(0,n.jsx)(s.p,{children:"Release date: August 3, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"improvements-4",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Supports synchronizing schema changes on Hive table to the corresponding external table. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9010",children:"#9010"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Supports loading ARRAY data in Parquet files via Broker Load. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9131",children:"#9131"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-7",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Broker Load cannot handle Kerberos logins with multiple keytab files. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/8820",children:"#8820"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/8837",children:"#8837"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Supervisor may fail to restart services if ",(0,n.jsx)(s.strong,{children:"stop_be.sh"})," exits immediately after it is executed. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9175",children:"#9175"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:['Incorrect Join Reorder precedence causes error "Column cannot be resolved". ',(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9063",children:"#9063"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/9487",children:"#9487"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"223",children:"2.2.3"}),"\n",(0,n.jsx)(s.p,{children:"Release date: July 24, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-8",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["An error occurs when users delete a resource group. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/8036",children:"#8036"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Thrift server exits when the number of threads is insufficient. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7974",children:"#7974"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["In some scenarios, join reorder in CBO returns no results. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7099",children:"#7099"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7831",children:"#7831"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6866",children:"#6866"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"222",children:"2.2.2"}),"\n",(0,n.jsx)(s.p,{children:"Release date: June 29, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"improvements-5",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["UDFs can be used across databases. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6865",children:"#6865"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7211",children:"#7211"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Optimized concurrency control for internal processing such as schema change. This reduces pressure on FE metadata management. In addition, the possibility that load jobs may pile up or slow down is reduced in scenarios where huge volume of data needs to be loaded at high concurrency. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6838",children:"#6838"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-9",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The number of replicas (",(0,n.jsx)(s.code,{children:"replication_num"}),") created by using CTAS is incorrect. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7036",children:"#7036"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Metadata may be lost after ALTER ROUTINE LOAD is performed. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7068",children:"#7068"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Runtime filters fail to be pushed down. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7206",children:"#7206"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7258",children:"#7258"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Pipeline issues that may cause memory leaks.  ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7295",children:"#7295"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Deadlock may occur when a Routine Load job is aborted. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6849",children:"#6849"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Some profile statistics information is inaccurate. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7074",children:"#7074"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6789",children:"#6789"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The get_json_string function incorrectly processes JSON arrays. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/7671",children:"#7671"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"221",children:"2.2.1"}),"\n",(0,n.jsx)(s.p,{children:"Release date: June 2, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"improvements-6",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Optimized the data loading performance and reduced long tail latency by reconstructing part of the hotspot code and reducing lock granularity. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6641",children:"#6641"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Added the CPU and memory usage information of the machines on which BEs are deployed for each query to the FE audit log. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6208",children:"#6208"})," ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6209",children:"#6209"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Supported JSON data types in the Primary Key tables and Unique Key tables. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6544",children:"#6544"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Reduced FEs load by reducing lock granularity and deduplicating BE report requests. Optimized the report performance when a large number of BEs are deployed, and solved the issue of Routine Load tasks getting stuck in a large cluster. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6293",children:"#6293"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-10",children:"Bug Fixes"}),"\n",(0,n.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["An error occurs when StarRocks parses the escape characters specified in the ",(0,n.jsx)(s.code,{children:"SHOW FULL TABLES FROM DatabaseName"})," statement. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/6559",children:"#6559"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["FE disk space usage rises sharply (Fix this bug by rolling back the BDBJE version). ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6708",children:"#6708"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["BEs become faulty because relevant fields cannot be found in the data returned after columnar scanning is enabled (",(0,n.jsx)(s.code,{children:"enable_docvalue_scan=true"}),"). ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/6600",children:"#6600"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"220",children:"2.2.0"}),"\n",(0,n.jsx)(s.p,{children:"Release date: May 22, 2022"}),"\n",(0,n.jsx)(s.h3,{id:"new-features",children:"New Features"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"[Preview] The resource group management feature is released. This feature allows StarRocks to isolate and efficiently use CPU and memory resources when StarRocks processes both complex queries and simple queries from different tenants in the same cluster."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"[Preview] A Java-based user-defined function (UDF) framework is implemented. This framework supports UDFs that are compiled in compliance with the syntax of Java to extend the capabilities of StarRocks."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"[Preview] The Primary Key table supports updates only to specific columns when data is loaded to the Primary Key table in real-time data update scenarios such as order updates and multi-stream joins."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"[Preview] JSON data types and JSON functions are supported."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["External tables can be used to query data from Apache Hudi. This further improves users' data lake analytics experience with StarRocks. For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/data_source/External_table",children:"External tables"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The following functions are added:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["ARRAY functions: ",(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/array_agg",children:"array_agg"}),", array_sort, array_distinct, array_join, reverse, array_slice, array_concat, array_difference, arrays_overlap, and array_intersect"]}),"\n",(0,n.jsx)(s.li,{children:"BITMAP functions: bitmap_max and bitmap_min"}),"\n",(0,n.jsx)(s.li,{children:"Other functions: retention and square"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"improvements-7",children:"Improvements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The parser and analyzer of the cost-based optimizer (CBO) are restructured, the code structure is optimized, and syntaxes such as INSERT with Common Table Expression (CTE) are supported. These improvements are made to increase the performance of complex queries, such as queries that involve the reuse of CTEs."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The performance of queries on Apache Hive\u2122 external tables that are stored in cloud object storage services such as AWS Simple Storage Service (S3), Alibaba Cloud Object Storage Service (OSS), and Tencent Cloud Object Storage (COS) is optimized. After the optimization, the performance of object storage-based queries is comparable to that of HDFS-based queries. Additionally, late materialization of ORC files is supported, and queries on small files are accelerated. For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/data_source/External_table",children:"Apache Hive\u2122 external table"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["When queries from Apache Hive\u2122 are run by using external tables, StarRocks automatically performs incremental updates to the cached metadata by consuming Hive metastore events such as data changes and partition changes. StarRocks also supports queries on data of the DECIMAL and ARRAY types from Apache Hive\u2122. For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/data_source/External_table",children:"Apache Hive\u2122 external table"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The UNION ALL operator is optimized to run 2 to 25 times faster than before."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"A pipeline engine that supports adaptive parallelism and provides optimized profiles is released to improve the performance of simple queries in high concurrency scenarios."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Multiple characters can be combined and used as a single row delimiter for CSV files that are to be imported."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bug-fixes-11",children:"Bug Fixes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Deadlocks occur if data is loaded or changes are committed into tables that are based on the primary Key table. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4998",children:"#4998"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Frontends (FEs), including FEs that run Oracle Berkeley DB Java Edition (BDB JE), are unstable. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4428",children:"#4428"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4666",children:"#4666"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/bdb-je/pull/2",children:"#2"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The result that is returned by the SUM function encounters an arithmetic overflow if the function is invoked on a large amount of data. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/3944",children:"#3944"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The precision of the results that are returned by the ROUND and TRUNCATE functions is unsatisfactory. ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4256",children:"#4256"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["A few bugs are detected by Synthesized Query Lancer (SQLancer). For more information, see ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues?q=is:issue++label:sqlancer++milestone:2.2",children:"SQLancer-related issues"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"others",children:"Others"}),"\n",(0,n.jsx)(s.p,{children:"Flink-connector-starrocks supports Apache Flink\xae v1.14."}),"\n",(0,n.jsx)(s.h3,{id:"upgrade-notes",children:"Upgrade notes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["If you use a StarRocks version later than 2.0.4 or a StarRocks version 2.1.x later than 2.1.6, you can disable the tablet clone feature before the upgrade (",(0,n.jsx)(s.code,{children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "0");'})," and ",(0,n.jsx)(s.code,{children:'ADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "0");'}),"). After the upgrade, you can enable this feature (",(0,n.jsx)(s.code,{children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "2000");'})," and ",(0,n.jsx)(s.code,{children:'ADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "100");'}),")."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["To roll back to the previous version that was used before the upgrade, add the ",(0,n.jsx)(s.code,{children:"ignore_unknown_log_id"})," parameter to the ",(0,n.jsx)(s.strong,{children:"fe.conf"})," file of each FE and set the parameter to ",(0,n.jsx)(s.code,{children:"true"}),". The parameter is required because new types of logs are added in StarRocks v2.2.0. If you do not add the parameter, you cannot roll back to the previous version. We recommend that you set the ",(0,n.jsx)(s.code,{children:"ignore_unknown_log_id"})," parameter to ",(0,n.jsx)(s.code,{children:"false"})," in the ",(0,n.jsx)(s.strong,{children:"fe.conf"})," file of each FE after checkpoints are created. Then, restart the FEs to restore the FEs to the previous configurations."]}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>l,ah:()=>t});var n=r(67294);const i=n.createContext({});function t(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function l({components:e,children:s,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||a:t(e),n.createElement(i.Provider,{value:l},s)}}}]);