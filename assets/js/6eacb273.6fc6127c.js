"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49657],{91774:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=s(85893),t=s(11151);const a={displayed_sidebar:"English"},r="Synchronous materialized view",o={id:"using_starrocks/Materialized_view-single_table",title:"Synchronous materialized view",description:"This topic describes how to create, use, and manage a synchronous materialized view (Rollup).",source:"@site/versioned_docs/version-3.0/using_starrocks/Materialized_view-single_table.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Materialized_view-single_table",permalink:"/docs/3.0/using_starrocks/Materialized_view-single_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Materialized_view-single_table.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Use Lateral Join for column-to-row conversion",permalink:"/docs/3.0/using_starrocks/Lateral_join"},next:{title:"Asynchronous materialized views",permalink:"/docs/3.0/using_starrocks/Materialized_view"}},l={},c=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Create a synchronous materialized view",id:"create-a-synchronous-materialized-view",level:2},{value:"Check the building status of a synchronous materialized view",id:"check-the-building-status-of-a-synchronous-materialized-view",level:2},{value:"Query with the synchronous materialized view",id:"query-with-the-synchronous-materialized-view",level:2},{value:"Check if a query hits the synchronous materialized view",id:"check-if-a-query-hits-the-synchronous-materialized-view",level:2},{value:"Show synchronous materialized views",id:"show-synchronous-materialized-views",level:2},{value:"Drop a synchronous materialized view",id:"drop-a-synchronous-materialized-view",level:2},{value:"Drop an unfinished synchronous materialized view",id:"drop-an-unfinished-synchronous-materialized-view",level:3},{value:"Drop an existing synchronous materialized view",id:"drop-an-existing-synchronous-materialized-view",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Exact count distinct",id:"exact-count-distinct",level:3},{value:"Approximate count distinct",id:"approximate-count-distinct",level:3},{value:"Set extra sort keys",id:"set-extra-sort-keys",level:3},{value:"Correspondence of aggregate functions",id:"correspondence-of-aggregate-functions",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",blockquote:"blockquote",h3:"h3"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"synchronous-materialized-view",children:"Synchronous materialized view"}),"\n",(0,i.jsxs)(n.p,{children:["This topic describes how to create, use, and manage a ",(0,i.jsx)(n.strong,{children:"synchronous materialized view (Rollup)"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For a synchronous materialized view, all changes in the base table are simultaneously updated to the corresponding synchronous materialized views. The refresh of a synchronous materialized view is triggered automatically. Synchronous materialized views are significantly inexpensive to maintain and update, making them suitable for transparent acceleration of real-time, single-table aggregate queries."}),"\n",(0,i.jsxs)(n.p,{children:["Synchronous materialized views in StarRocks can be created only on a single base table from ",(0,i.jsx)(n.a,{href:"/docs/3.0/data_source/catalog/default_catalog",children:"the default catalog"}),". They are essentially a special index for query acceleration. You cannot query synchronous materialized views directly."]}),"\n",(0,i.jsxs)(n.p,{children:["From v2.4 onwards, StarRocks provides asynchronous materialized views, which supports creation on multiple tables and more aggregation operators. For the usage of ",(0,i.jsx)(n.strong,{children:"asynchronous materialized views"}),", see ",(0,i.jsx)(n.a,{href:"/docs/3.0/using_starrocks/Materialized_view",children:"Asynchronous materialized view"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following table compares the asynchronous materialized views (ASYNC MVs) in StarRocks v2.5, v2.4, and the synchronous materialized view (SYNC MV) in the perspective of features that they support:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Single-table aggregation"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Multi-table join"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Query rewrite"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Refresh strategy"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Base table"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"ASYNC MV"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Asynchronous refresh"}),(0,i.jsx)("li",{children:"Manual refresh"})]})}),(0,i.jsxs)(n.td,{children:["Multiple tables from:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Default catalog"}),(0,i.jsx)("li",{children:"External catalogs (v2.5)"}),(0,i.jsx)("li",{children:"Existing materialized views (v2.5)"})]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"SYNC MV (Rollup)"})}),(0,i.jsxs)(n.td,{children:["Limited choices of ",(0,i.jsx)(n.a,{href:"#correspondence-of-aggregate-functions",children:"aggregate functions"})]}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Synchronous refresh during data loading"}),(0,i.jsx)(n.td,{children:"Single table in the default catalog"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Base table"})}),"\n",(0,i.jsx)(n.p,{children:"Base tables are the driving tables of a materialized view."}),"\n",(0,i.jsxs)(n.p,{children:["For StarRocks' synchronous materialized views, base tables must be a single native table from the ",(0,i.jsx)(n.a,{href:"/docs/3.0/data_source/catalog/default_catalog",children:"default catalog"}),". StarRocks supports creating synchronous materialized views on Duplicate Key table, Aggregate tables, and Unique Key tables."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Refresh"})}),"\n",(0,i.jsx)(n.p,{children:"A synchronous materialized view updates itself every time the data in the base table changes. You do not need to trigger the refresh manually."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Query rewrite"})}),"\n",(0,i.jsx)(n.p,{children:"Query rewrite means that when executing a query on base tables with materialized views built on, the system automatically judges whether the pre-computed results in the materialized view can be reused for the query. If they can be reused, the system will load the data directly from the relevant materialized view to avoid the time- and resource-consuming computations or joins."}),"\n",(0,i.jsxs)(n.p,{children:["Synchronous materialized views support query rewrite based on some of the aggregate operators. For more information, see ",(0,i.jsx)(n.a,{href:"#correspondence-of-aggregate-functions",children:"Correspondence of aggregate functions"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsx)(n.p,{children:"Before creating a synchronous materialized view, check if your data warehouse is eligible for query acceleration through synchronous materialized views. For example, check if the queries reuse certain sub-query statements."}),"\n",(0,i.jsxs)(n.p,{children:["The following example is based on the table ",(0,i.jsx)(n.code,{children:"sales_records"}),", which contains the transaction ID ",(0,i.jsx)(n.code,{children:"record_id"}),", salesperson ID ",(0,i.jsx)(n.code,{children:"seller_id"}),", store ID ",(0,i.jsx)(n.code,{children:"store_id"}),", date ",(0,i.jsx)(n.code,{children:"sale_date"}),", and sales amount ",(0,i.jsx)(n.code,{children:"sale_amt"})," for each transaction. Follow these steps to create the table and insert data into it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE sales_records(\n    record_id INT,\n    seller_id INT,\n    store_id INT,\n    sale_date DATE,\n    sale_amt BIGINT\n) DISTRIBUTED BY HASH(record_id);\n\nINSERT INTO sales_records\nVALUES\n    (001,01,1,"2022-03-13",8573),\n    (002,02,2,"2022-03-14",6948),\n    (003,01,1,"2022-03-14",4319),\n    (004,03,3,"2022-03-15",8734),\n    (005,03,3,"2022-03-16",4212),\n    (006,02,2,"2022-03-17",9515);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The business scenario of this example demands frequent analyses on the sales amounts of different stores. As a result, the ",(0,i.jsx)(n.code,{children:"sum()"})," function is used on each query, consuming a massive amount of compute resources. You can run the query to record its time, and view its query profile by using EXPLAIN command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > SELECT store_id, SUM(sale_amt)\nFROM sales_records\nGROUP BY store_id;\n+----------+-----------------+\n| store_id | sum(`sale_amt`) |\n+----------+-----------------+\n|        2 |           16463 |\n|        3 |           12946 |\n|        1 |           12892 |\n+----------+-----------------+\n3 rows in set (0.02 sec)\n\nMySQL > EXPLAIN SELECT store_id, SUM(sale_amt)\nFROM sales_records\nGROUP BY store_id;\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:3: store_id | 6: sum                                          |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   4:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:                                                              |\n|   PARTITION: HASH_PARTITIONED: 3: store_id                                  |\n|                                                                             |\n|   STREAM DATA SINK                                                          |\n|     EXCHANGE ID: 04                                                         |\n|     UNPARTITIONED                                                           |\n|                                                                             |\n|   3:AGGREGATE (merge finalize)                                              |\n|   |  output: sum(6: sum)                                                    |\n|   |  group by: 3: store_id                                                  |\n|   |                                                                         |\n|   2:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 2                                                             |\n|  OUTPUT EXPRS:                                                              |\n|   PARTITION: RANDOM                                                         |\n|                                                                             |\n|   STREAM DATA SINK                                                          |\n|     EXCHANGE ID: 02                                                         |\n|     HASH_PARTITIONED: 3: store_id                                           |\n|                                                                             |\n|   1:AGGREGATE (update serialize)                                            |\n|   |  STREAMING                                                              |\n|   |  output: sum(5: sale_amt)                                               |\n|   |  group by: 3: store_id                                                  |\n|   |                                                                         |\n|   0:OlapScanNode                                                            |\n|      TABLE: sales_records                                                   |\n|      PREAGGREGATION: ON                                                     |\n|      partitions=1/1                                                         |\n|      rollup: sales_records                                                  |\n|      tabletRatio=10/10                                                      |\n|      tabletList=12049,12053,12057,12061,12065,12069,12073,12077,12081,12085 |\n|      cardinality=1                                                          |\n|      avgRowSize=2.0                                                         |\n|      numNodes=0                                                             |\n+-----------------------------------------------------------------------------+\n45 rows in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It can be observed that the query takes about 0.02 seconds, and no synchronous materialized view is used to accelerate the query because the value of ",(0,i.jsx)(n.code,{children:"rollup"})," field in the query profile is ",(0,i.jsx)(n.code,{children:"sales_records"}),", which is the base table."]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-synchronous-materialized-view",children:"Create a synchronous materialized view"}),"\n",(0,i.jsxs)(n.p,{children:["You can create a synchronous materialized view based on a specific query statement using ",(0,i.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW",children:"CREATE MATERIALIZED VIEW"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Based on the table ",(0,i.jsx)(n.code,{children:"sales_records"})," and the query statement mentioned above, the following example creates the synchronous materialized view ",(0,i.jsx)(n.code,{children:"store_amt"})," to analyze the sum of sales amount in each store."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW store_amt AS\nSELECT store_id, SUM(sale_amt)\nFROM sales_records\nGROUP BY store_id;\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When using aggregate functions in synchronous materialized views, you must use the GROUP BY clause and specify at least one GROUP BY column in your SELECT list."}),"\n",(0,i.jsxs)(n.li,{children:["Synchronous materialized views do not support using one aggregate function on multiple columns. Query statements in the form of ",(0,i.jsx)(n.code,{children:"sum(a+b)"})," are not supported."]}),"\n",(0,i.jsxs)(n.li,{children:["Synchronous materialized views do not support using multiple aggregate functions on one column. Query statements in the form of ",(0,i.jsx)(n.code,{children:"select sum(a), min(a) from table"})," are not supported."]}),"\n",(0,i.jsx)(n.li,{children:"JOIN and WHERE clauses are not supported when creating a synchronous materialized view."}),"\n",(0,i.jsx)(n.li,{children:"When using ALTER TABLE DROP COLUMN to drop a specific column in a base table, you need to ensure that all synchronous materialized views of the base table do not contain the dropped column, otherwise the drop operation cannot be performed. To drop a column that used in synchronous materialized views, you need to first drop all synchronous materialized views that contain the column, and then drop the column."}),"\n",(0,i.jsxs)(n.li,{children:["Creating too many synchronous materialized views for a table will affect the data loading efficiency. When data is being loaded to the base table, the data in synchronous materialized views and base table are updated synchronously. If the base table contains ",(0,i.jsx)(n.code,{children:"n"})," synchronous materialized views, the efficiency of loading data into the base table is about the same as that of loading data into ",(0,i.jsx)(n.code,{children:"n"})," tables."]}),"\n",(0,i.jsx)(n.li,{children:"Currently, StarRocks does not support creating multiple synchronous materialized views at the same time. A new synchronous materialized view can only be created when the previous one is completed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"check-the-building-status-of-a-synchronous-materialized-view",children:"Check the building status of a synchronous materialized view"}),"\n",(0,i.jsxs)(n.p,{children:["Creating a synchronous materialized view is an asynchronous operation. Executing CREATE MATERIALIZED VIEW successfully indicates that the task of creating the materialized view is submitted successfully. You can view the building status of the synchronous materialized view in a database via ",(0,i.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",children:"SHOW ALTER MATERIALIZED VIEW"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > SHOW ALTER MATERIALIZED VIEW\\G\n*************************** 1. row ***************************\n          JobId: 12090\n      TableName: sales_records\n     CreateTime: 2022-08-25 19:41:10\n   FinishedTime: 2022-08-25 19:41:39\n  BaseIndexName: sales_records\nRollupIndexName: store_amt\n       RollupId: 12091\n  TransactionId: 10\n          State: FINISHED\n            Msg: \n       Progress: NULL\n        Timeout: 86400\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RollupIndexName"})," section indicates the name of the synchronous materialized view, and ",(0,i.jsx)(n.code,{children:"State"})," section indicates if the building is completed."]}),"\n",(0,i.jsx)(n.h2,{id:"query-with-the-synchronous-materialized-view",children:"Query with the synchronous materialized view"}),"\n",(0,i.jsx)(n.p,{children:"The synchronous materialized view you created contains the complete set of pre-computed results in accordance with the query statement. Subsequent queries use the data within it. You can run the same query to test the query time as you did in the preparation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > SELECT store_id, SUM(sale_amt)\nFROM sales_records\nGROUP BY store_id;\n+----------+-----------------+\n| store_id | sum(`sale_amt`) |\n+----------+-----------------+\n|        2 |           16463 |\n|        3 |           12946 |\n|        1 |           12892 |\n+----------+-----------------+\n3 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"It can be observed that the query time is reduced to 0.01 seconds."}),"\n",(0,i.jsx)(n.h2,{id:"check-if-a-query-hits-the-synchronous-materialized-view",children:"Check if a query hits the synchronous materialized view"}),"\n",(0,i.jsx)(n.p,{children:"Execute EXPLAIN command again to check if the query hits the synchronous materialized view."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > EXPLAIN SELECT store_id, SUM(sale_amt) FROM sales_records GROUP BY store_id;\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:3: store_id | 6: sum                                          |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   4:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:                                                              |\n|   PARTITION: HASH_PARTITIONED: 3: store_id                                  |\n|                                                                             |\n|   STREAM DATA SINK                                                          |\n|     EXCHANGE ID: 04                                                         |\n|     UNPARTITIONED                                                           |\n|                                                                             |\n|   3:AGGREGATE (merge finalize)                                              |\n|   |  output: sum(6: sum)                                                    |\n|   |  group by: 3: store_id                                                  |\n|   |                                                                         |\n|   2:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 2                                                             |\n|  OUTPUT EXPRS:                                                              |\n|   PARTITION: RANDOM                                                         |\n|                                                                             |\n|   STREAM DATA SINK                                                          |\n|     EXCHANGE ID: 02                                                         |\n|     HASH_PARTITIONED: 3: store_id                                           |\n|                                                                             |\n|   1:AGGREGATE (update serialize)                                            |\n|   |  STREAMING                                                              |\n|   |  output: sum(5: sale_amt)                                               |\n|   |  group by: 3: store_id                                                  |\n|   |                                                                         |\n|   0:OlapScanNode                                                            |\n|      TABLE: sales_records                                                   |\n|      PREAGGREGATION: ON                                                     |\n|      partitions=1/1                                                         |\n|      rollup: store_amt                                                      |\n|      tabletRatio=10/10                                                      |\n|      tabletList=12092,12096,12100,12104,12108,12112,12116,12120,12124,12128 |\n|      cardinality=6                                                          |\n|      avgRowSize=2.0                                                         |\n|      numNodes=0                                                             |\n+-----------------------------------------------------------------------------+\n45 rows in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It can be observed that the value of ",(0,i.jsx)(n.code,{children:"rollup"})," section in the query profile is now ",(0,i.jsx)(n.code,{children:"store_amt"}),", which is the synchronous materialized view you have built. That means this query has hit the synchronous materialized view."]}),"\n",(0,i.jsx)(n.h2,{id:"show-synchronous-materialized-views",children:"Show synchronous materialized views"}),"\n",(0,i.jsx)(n.p,{children:"You can execute DESC <tbl_name> ALL to check the schema of a table and its subordinate synchronous materialized views."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"MySQL > DESC sales_records ALL;\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n| IndexName     | IndexKeysType | Field     | Type   | Null | Key   | Default | Extra |\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n| sales_records | DUP_KEYS      | record_id | INT    | Yes  | true  | NULL    |       |\n|               |               | seller_id | INT    | Yes  | true  | NULL    |       |\n|               |               | store_id  | INT    | Yes  | true  | NULL    |       |\n|               |               | sale_date | DATE   | Yes  | false | NULL    | NONE  |\n|               |               | sale_amt  | BIGINT | Yes  | false | NULL    | NONE  |\n|               |               |           |        |      |       |         |       |\n| store_amt     | AGG_KEYS      | store_id  | INT    | Yes  | true  | NULL    |       |\n|               |               | sale_amt  | BIGINT | Yes  | false | NULL    | SUM   |\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n8 rows in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"drop-a-synchronous-materialized-view",children:"Drop a synchronous materialized view"}),"\n",(0,i.jsx)(n.p,{children:"Under the following circumstances, you need to drop the synchronous materialized view:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You have created a wrong materialized view and you need to drop it before the building completed."}),"\n",(0,i.jsx)(n.li,{children:"You have created too many materialized views, which results in a huge drop in load performance, and some of the materialized views are duplicate."}),"\n",(0,i.jsx)(n.li,{children:"The frequency of the involved queries is low, and you can tolerate a relatively high query latency."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"drop-an-unfinished-synchronous-materialized-view",children:"Drop an unfinished synchronous materialized view"}),"\n",(0,i.jsxs)(n.p,{children:["You can drop a synchronous materialized view that is being created by canceling the in-progress creation task. First, you need to get the job ID ",(0,i.jsx)(n.code,{children:"JobID"})," of the materialized view creation task by ",(0,i.jsx)(n.a,{href:"#check-the-building-status-of-a-synchronous-materialized-view",children:"checking the building status of the materialized view"}),". After getting the job ID, you need to cancel the creation task with the CANCEL ALTER command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"CANCEL ALTER TABLE ROLLUP FROM sales_records (12090);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"drop-an-existing-synchronous-materialized-view",children:"Drop an existing synchronous materialized view"}),"\n",(0,i.jsxs)(n.p,{children:["You can drop an existing synchronous materialized view with the ",(0,i.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",children:"DROP MATERIALIZED VIEW"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"DROP MATERIALIZED VIEW store_amt;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsx)(n.h3,{id:"exact-count-distinct",children:"Exact count distinct"}),"\n",(0,i.jsxs)(n.p,{children:["The following example is based on an advertisement business analysis table ",(0,i.jsx)(n.code,{children:"advertiser_view_record"}),", which records the date that the ad is viewed ",(0,i.jsx)(n.code,{children:"click_time"}),", the name of the ad ",(0,i.jsx)(n.code,{children:"advertiser"}),", the channel of the ad ",(0,i.jsx)(n.code,{children:"channel"}),", and the ID of the user who viewed the ID ",(0,i.jsx)(n.code,{children:"user_id"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE advertiser_view_record(\n    click_time DATE,\n    advertiser VARCHAR(10),\n    channel VARCHAR(10),\n    user_id INT\n) distributed BY hash(click_time);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Analysis is mainly focused on the UV of the ads."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT advertiser, channel, count(distinct user_id)\nFROM advertiser_view_record\nGROUP BY advertiser, channel;\n"})}),"\n",(0,i.jsx)(n.p,{children:"To accelerate exact count distinct, you can create a synchronous materialized view based on this table and use the bitmap_union function to pre-aggregate the data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW advertiser_uv AS\nSELECT advertiser, channel, bitmap_union(to_bitmap(user_id))\nFROM advertiser_view_record\nGROUP BY advertiser, channel;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After the synchronous materialized view is created, the sub-query ",(0,i.jsx)(n.code,{children:"count(distinct user_id)"})," in the subsequent queries will be automatically rewritten as ",(0,i.jsx)(n.code,{children:"bitmap_union_count (to_bitmap(user_id))"})," so that they can hit the synchronous materialized view."]}),"\n",(0,i.jsx)(n.h3,{id:"approximate-count-distinct",children:"Approximate count distinct"}),"\n",(0,i.jsxs)(n.p,{children:["Use the table ",(0,i.jsx)(n.code,{children:"advertiser_view_record"})," above as an example again. To accelerate approximate count distinct, you can create a synchronous materialized view based on this table and use the ",(0,i.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_union",children:"hll_union()"})," function to pre-aggregate the data."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW advertiser_uv2 AS\nSELECT advertiser, channel, hll_union(hll_hash(user_id))\nFROM advertiser_view_record\nGROUP BY advertiser, channel;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"set-extra-sort-keys",children:"Set extra sort keys"}),"\n",(0,i.jsxs)(n.p,{children:["Suppose that the base table ",(0,i.jsx)(n.code,{children:"tableA"})," contains columns ",(0,i.jsx)(n.code,{children:"k1"}),", ",(0,i.jsx)(n.code,{children:"k2"})," and ",(0,i.jsx)(n.code,{children:"k3"}),", where only ",(0,i.jsx)(n.code,{children:"k1"})," and ",(0,i.jsx)(n.code,{children:"k2"})," are sort keys. If the query including the sub-query ",(0,i.jsx)(n.code,{children:"where k3=x"})," must be accelerated, you can create a synchronous materialized view with ",(0,i.jsx)(n.code,{children:"k3"})," as the first column."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW k3_as_key AS\nSELECT k3, k2, k1\nFROM tableA\n"})}),"\n",(0,i.jsx)(n.h2,{id:"correspondence-of-aggregate-functions",children:"Correspondence of aggregate functions"}),"\n",(0,i.jsx)(n.p,{children:"When a query is executed with a synchronous materialized view, the original query statement will be automatically rewritten and used to query the intermediate results stored in the synchronous materialized view. The following table shows the correspondence between the aggregate function in the original query and the aggregate function used to construct the synchronous materialized view. You can select the corresponding aggregate function to build a synchronous materialized view according to your business scenario."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"aggregate function in the original query"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"aggregate function of the materialized view"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sum"}),(0,i.jsx)(n.td,{children:"sum"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"min"}),(0,i.jsx)(n.td,{children:"min"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"max"}),(0,i.jsx)(n.td,{children:"max"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"count"}),(0,i.jsx)(n.td,{children:"count"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bitmap_union, bitmap_union_count, count(distinct)"}),(0,i.jsx)(n.td,{children:"bitmap_union"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hll_raw_agg, hll_union_agg, ndv, approx_count_distinct"}),(0,i.jsx)(n.td,{children:"hll_union"})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>a});var i=s(67294);const t=i.createContext({});function a(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:a(e),i.createElement(t.Provider,{value:o},n)}}}]);