"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78219],{22208:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(85893),a=i(11151);const s={displayed_sidebar:"English"},r="Performance Optimization",o={id:"administration/Profiling",title:"Performance Optimization",description:"Table Creation",source:"@site/versioned_docs/version-2.3/administration/Profiling.md",sourceDirName:"administration",slug:"/administration/Profiling",permalink:"/docs/2.3/administration/Profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Profiling.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Monitor and Alerting",permalink:"/docs/2.3/administration/Monitor_and_Alert"},next:{title:"Query Management",permalink:"/docs/2.3/administration/Query_management"}},l={},d=[{value:"Table Creation",id:"table-creation",level:2},{value:"Data Model Selection",id:"data-model-selection",level:3},{value:"In-memory tables",id:"in-memory-tables",level:3},{value:"Colocate Table",id:"colocate-table",level:3},{value:"Flat table and star schema",id:"flat-table-and-star-schema",level:3},{value:"Partition and bucket",id:"partition-and-bucket",level:3},{value:"Sparse index and bloomfilter",id:"sparse-index-and-bloomfilter",level:3},{value:"Inverted Index",id:"inverted-index",level:3},{value:"Materialized view (rollup)",id:"materialized-view-rollup",level:3},{value:"Import",id:"import",level:2},{value:"Schema change",id:"schema-change",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,t.jsx)(n.h2,{id:"table-creation",children:"Table Creation"}),"\n",(0,t.jsx)(n.h3,{id:"data-model-selection",children:"Data Model Selection"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks supports three kinds of data model: AGGREGATE KEY, UNIQUE KEY, and DUPLICATE KEY. All three are sorted by KEY."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AGGREGATE KEY: When the AGGREGATE KEY is the same, the old and new records are aggregated. The currently supported aggregate functions are SUM, MIN, MAX, REPLACE. Aggregate  model can aggregate data in advance, which is suitable for reporting and multi-dimensional analyses."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE site_visit\n(\n    siteid      INT,\n    city        SMALLINT,\n    username    VARCHAR(32),\n    pv BIGINT   SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, city, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["UNIQUE KEY: When the UNIQUE KEY is the same, the new record overwrites the old one.. Currently, ",(0,t.jsx)(n.code,{children:"UNIQUE KEY"})," functions similarly as ",(0,t.jsx)(n.code,{children:"REPLACE"})," of ",(0,t.jsx)(n.code,{children:"AGGREGATE KEY"}),".Both are suitable for analyses involving constant updates."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE sales_order\n(\n    orderid     BIGINT,\n    status      TINYINT,\n    username    VARCHAR(32),\n    amount      BIGINT DEFAULT '0'\n)\nUNIQUE KEY(orderid)\nDISTRIBUTED BY HASH(orderid) BUCKETS 10;\n"})}),"\n",(0,t.jsx)(n.p,{children:"DUPLICATE KEY: Only need to specify the sort key. Records with the same DUPLICATE KEY exist at the same time. It is suitable for analyses that don\u2019t involve aggregating data in advance."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE session_data\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"in-memory-tables",children:"In-memory tables"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks supports caching data in memory to speed up queries. In-memory tables are suitable for dimension tables with a small number of rows."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE memory_table\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10\nPROPERTIES (\n           "in_memory"="true"\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"colocate-table",children:"Colocate Table"}),"\n",(0,t.jsxs)(n.p,{children:["To speed up queries, tables with the same distribution can use a common bucketing column. In that case, data can be joined locally without being transferred across the cluster during the ",(0,t.jsx)(n.code,{children:"join"})," operation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE colocate_table\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10\nPROPERTIES(\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For more information about colocate join and replica management, refer to ",(0,t.jsx)(n.a,{href:"/docs/2.3/using_starrocks/Colocate_join",children:"Colocate join"})]}),"\n",(0,t.jsx)(n.h3,{id:"flat-table-and-star-schema",children:"Flat table and star schema"}),"\n",(0,t.jsx)(n.p,{children:"To adapt to the front-end business,  flat tables don\u2019t  differentiate between dimension information and index information. Such flat tables often do not perform as well as expected because:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The schema has many fields When there are a large number of key columns in the aggregation model,  it may lead to an increase in the number of columns that need to be sorted during the import."}),"\n",(0,t.jsx)(n.li,{children:"Updates on dimension information will be reflected to the table. The frequency of updates directly affects query efficiency."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to use star schema to distinguish dimension tables and index tables. This schema can place dimension tables with frequent updates in MySQL, and dimension tables with fewer updates in StarRocks. Creating replicas of dimension tables in StarRocks can improve join performance."}),"\n",(0,t.jsx)(n.h3,{id:"partition-and-bucket",children:"Partition and bucket"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks supports two levels of partitioning storage, the first level is RANGE partition, the second level is HASH bucket."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"RANGE partition: RANGE partition is used to divide the data into different intervals (can be understood as dividing the original table into multiple sub-tables). Most users choose to set partitions by time, which has the following advantages:"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Data can be distinguished between hot and cold"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Be able to leverage StarRocks tiered storage (SSD + SATA)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Faster to delete data by partition"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"HASH bucket: Divides data into different buckets according to the hash value."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"It is recommended to use a column with a large degree of differentiation for bucketing to avoid data skewing"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To facilitate data recovery, it is recommended to keep  the size of each bucket around 10GB. Please consider the number of buckets when creating a table or adding a partition ."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sparse-index-and-bloomfilter",children:"Sparse index and bloomfilter"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks stores data in an ordered manner and builds a sparse index with  block (1024 rows) granularity."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The sparse index selects a fixed-length prefix (currently 36 bytes) in the schema as the index content."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When creating a table, it is recommended to put the common filter fields ahead of the schema. The most differentiated and frequent the query fields should be placed first."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A varchar field should be placed to the end of a  sparse index. If the varchar field appears first and gets truncated, the index may be less than 36 bytes long."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the above ",(0,t.jsx)(n.code,{children:"site_visit"})," table"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"site_visit(siteid, city, username, pv)"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The siteid, city, and username rows occupy 4, 2, and 32 bytes respectively, so the content of the prefix index is the first 30 bytes of siteid + city + username."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In addition to sparse indexes, StarRocks also provides bloomfilter indexes, which are effective for filtering columns with large differentiations. If you don't want to place a varchar field in the sparse index, you can create a bloomfilter index."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"inverted-index",children:"Inverted Index"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks adopts Bitmap Indexing technology to support inverted indexes that can be applied to all columns of the duplicate data model and the key column of the aggregate and unique data models. Bitmap Index is suitable for columns with a small value range, such as gender, city, and province. As the range expands, the bitmap index expands in parallel."}),"\n",(0,t.jsx)(n.h3,{id:"materialized-view-rollup",children:"Materialized view (rollup)"}),"\n",(0,t.jsx)(n.p,{children:"A rollup is essentially a materialized index of the original table (base table). When creating a rollup, only some columns of the base table can be selected as the schema, and the order of the fields in the schema can be different from that of the base table. Below are some use cases of using a rollup:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The data aggregation in the base table is not high, because the base table has differentiated fields. In this case, you may consider selecting some columns to create rollups. For the ",(0,t.jsx)(n.code,{children:"site_visit"})," table above:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"site_visit(siteid, city, username, pv)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"siteid"})," may lead to poor data aggregation. You may create a rollup with only ",(0,t.jsx)(n.code,{children:"city"})," and ",(0,t.jsx)(n.code,{children:"pv"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ALTER TABLE site_visit ADD ROLLUP rollup_city(city, pv);"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The prefix index in the base table cannot be hit, because the way the base table is built cannot cover all the query patterns. In this case, you may consider creating a rollup to adjust the column order. For the ",(0,t.jsx)(n.code,{children:"session_data"})," table above:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"session_data(visitorid, sessionid, visittime, city, province, ip, brower, url)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If there are cases where you can analyze visits by browser and province, you can create a separate rollup."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ALTER TABLE session_data ADD ROLLUP rollup_brower(brower,province,ip,url) DUPLICATE KEY(brower,province);"})}),"\n",(0,t.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks currently supports two types of imports \u2013 broker load and stream load. StarRocks guarantees atomicity for single batch imports, even if multiple tables are imported at once."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"stream load: Import by http in micro batch. Latency of importingf 1 MB data is maintained at the second level. Suitable for high frequency import."}),"\n",(0,t.jsx)(n.li,{children:"broker load: Import by pull. Suitable for batch data import on a daily basis."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"schema-change",children:"Schema change"}),"\n",(0,t.jsx)(n.p,{children:"There are three ways to change schemas in StarRocks \u2013  sorted schema change, direct schema change, and linked schema change."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sorted schema change: Change the sorting of a column and reorder the data. For example, deleting a column in a sorted schema leads to data reorder."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ALTER TABLE site_visit DROP COLUMN city;"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Direct schema change: Transform the data instead of reordering it.For example, changing the column type, adding a column to a sparse index, etc."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ALTER TABLE site_visit MODIFY COLUMN username varchar(64);"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Linked schema change: Complete changes without transforming the  data. For example, adding columns."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ALTER TABLE site_visit ADD COLUMN click bigint SUM default '0';"})}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to consider schemas during table creation to avoid problems in schema changes."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>o,ah:()=>s});var t=i(67294);const a=t.createContext({});function s(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||r:s(e),t.createElement(a.Provider,{value:o},n)}}}]);