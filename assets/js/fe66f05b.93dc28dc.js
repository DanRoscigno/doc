"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40434],{24254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(85893),s=t(11151);const a={displayed_sidebar:"documentation"},o="Query analysis",r={id:"administration/Query_planning",title:"Query analysis",description:"How to optimize query performance is a frequently asked question. Slow queries impair user experience as well as cluster performance. It is important to analyze and optimize query performance.",source:"@site/versioned_docs/version-3.0/administration/Query_planning.md",sourceDirName:"administration",slug:"/administration/Query_planning",permalink:"/doc/docs/3.0/administration/Query_planning",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/Query_planning.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Performance Tuning",permalink:"/doc/docs/3.0/category/performance-tuning"},next:{title:"Analyze query profile",permalink:"/doc/docs/3.0/administration/query_profile"}},l={},d=[{value:"Plan analysis",id:"plan-analysis",level:2},{value:"Query hint",id:"query-hint",level:2},{value:"Variable-Setting hint",id:"variable-setting-hint",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:4},{value:"Join hint",id:"join-hint",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"View join execution method",id:"view-join-execution-method",level:3},{value:"SQL fingerprint",id:"sql-fingerprint",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img",h3:"h3",a:"a",h4:"h4",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"query-analysis",children:"Query analysis"}),"\n",(0,i.jsx)(n.p,{children:"How to optimize query performance is a frequently asked question. Slow queries impair user experience as well as cluster performance. It is important to analyze and optimize query performance."}),"\n",(0,i.jsxs)(n.p,{children:["You can view query information in ",(0,i.jsx)(n.code,{children:"fe/log/fe.audit.log"}),". Each query corresponds to a ",(0,i.jsx)(n.code,{children:"QueryID"})," that can be used to search for the ",(0,i.jsx)(n.code,{children:"QueryPlan"})," and ",(0,i.jsx)(n.code,{children:"Profile"})," of a query. ",(0,i.jsx)(n.code,{children:"QueryPlan"})," is the execution plan generated by FE by parsing SQL statements. ",(0,i.jsx)(n.code,{children:"Profile"})," is BE execution result and contains information such as the time consumed by each step and the volume of data processed at each step."]}),"\n",(0,i.jsx)(n.h2,{id:"plan-analysis",children:"Plan analysis"}),"\n",(0,i.jsx)(n.p,{children:"In StarRocks, the lifecycle of an SQL statement can be divided into three phases: query parsing, query planning, and query execution. Query parsing is generally not a bottleneck because the required QPS of analytical workloads is not high."}),"\n",(0,i.jsx)(n.p,{children:"Query performance in StarRocks is determined by query planning and query execution. Query planning is responsible for coordinating operators (Join/Order/Aggregate), and query execution is responsible for running specific operations."}),"\n",(0,i.jsxs)(n.p,{children:["A query plan provides the DBA with a macro perspective to access query information. A query plan is the key to query performance and a good resource for the DBA to reference. The following code snippet uses ",(0,i.jsx)(n.code,{children:"TPCDS query96"})," as an example to show how to view a query plan."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"-- query96.sql\nselect  count(*)\nfrom store_sales\n    ,household_demographics\n    ,time_dim\n    , store\nwhere ss_sold_time_sk = time_dim.t_time_sk\n    and ss_hdemo_sk = household_demographics.hd_demo_sk\n    and ss_store_sk = s_store_sk\n    and time_dim.t_hour = 8\n    and time_dim.t_minute >= 30\n    and household_demographics.hd_dep_count = 5\n    and store.s_store_name = 'ese'\norder by count(*) limit 100;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are two types of query plans \u2013  logical query plan and physical query plan. The query plan described here refers to the logical query plan. The query plan corresponding to ",(0,i.jsx)(n.code,{children:"TPCDS query96.sq"}),"l is shown below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+------------------------------------------------------------------------------+\n| Explain String                                                               |\n+------------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                              |\n|  OUTPUT EXPRS:<slot 11>                                                      |\n|   PARTITION: UNPARTITIONED                                                   |\n|   RESULT SINK                                                                |\n|   12:MERGING-EXCHANGE                                                        |\n|      limit: 100                                                              |\n|      tuple ids: 5                                                            |\n|                                                                              |\n| PLAN FRAGMENT 1                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 12                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   8:TOP-N                                                                    |\n|   |  order by: <slot 11> ASC                                                 |\n|   |  offset: 0                                                               |\n|   |  limit: 100                                                              |\n|   |  tuple ids: 5                                                            |\n|   |                                                                          |\n|   7:AGGREGATE (update finalize)                                              |\n|   |  output: count(*)                                                        |\n|   |  group by:                                                               |\n|   |  tuple ids: 4                                                            |\n|   |                                                                          |\n|   6:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: left hash join node can not do colocate        |\n|   |  equal join conjunct: `ss_store_sk` = `s_store_sk`                       |\n|   |  tuple ids: 0 2 1 3                                                      |\n|   |                                                                          |\n|   |----11:EXCHANGE                                                           |\n|   |       tuple ids: 3                                                       |\n|   |                                                                          |\n|   4:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: left hash join node can not do colocate        |\n|   |  equal join conjunct: `ss_hdemo_sk`=`household_demographics`.`hd_demo_sk`|\n|   |  tuple ids: 0 2 1                                                        |\n|   |                                                                          |\n|   |----10:EXCHANGE                                                           |\n|   |       tuple ids: 1                                                       |\n|   |                                                                          |\n|   2:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: table not in same group                        |\n|   |  equal join conjunct: `ss_sold_time_sk` = `time_dim`.`t_time_sk`         |\n|   |  tuple ids: 0 2                                                          |\n|   |                                                                          |\n|   |----9:EXCHANGE                                                            |\n|   |       tuple ids: 2                                                       |\n|   |                                                                          |\n|   0:OlapScanNode                                                             |\n|      TABLE: store_sales                                                      |\n|      PREAGGREGATION: OFF. Reason: `ss_sold_time_sk` is value column          |\n|      partitions=1/1                                                          |\n|      rollup: store_sales                                                     |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 0                                                            |\n|                                                                              |\n| PLAN FRAGMENT 2                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|                                                                              |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 11                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   5:OlapScanNode                                                             |\n|      TABLE: store                                                            |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `store`.`s_store_name` = 'ese'                              |\n|      partitions=1/1                                                          |\n|      rollup: store                                                           |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 3                                                            |\n|                                                                              |\n| PLAN FRAGMENT 3                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 10                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   3:OlapScanNode                                                             |\n|      TABLE: household_demographics                                           |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `household_demographics`.`hd_dep_count` = 5                 |\n|      partitions=1/1                                                          |\n|      rollup: household_demographics                                          |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 1                                                            |\n|                                                                              |\n| PLAN FRAGMENT 4                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 09                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   1:OlapScanNode                                                             |\n|      TABLE: time_dim                                                         |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `time_dim`.`t_hour` = 8, `time_dim`.`t_minute` >= 30        |\n|      partitions=1/1                                                          |\n|      rollup: time_dim                                                        |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 2                                                            |\n+------------------------------------------------------------------------------+\n128 rows in set (0.02 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Query 96 shows a query plan that involves several StarRocks concepts."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Explanation"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avgRowSize"}),(0,i.jsx)(n.td,{children:"The average size of the scanned data rows"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cardinality"}),(0,i.jsx)(n.td,{children:"The total number of data rows in the scanned table"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"colocate"}),(0,i.jsx)(n.td,{children:"Whether the table is in colocate mode"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numNodes"}),(0,i.jsx)(n.td,{children:"The number of nodes to be scanned"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rollup"}),(0,i.jsx)(n.td,{children:"Materialized view"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"preaggregation"}),(0,i.jsx)(n.td,{children:"Pre-aggregation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"predicates"}),(0,i.jsx)(n.td,{children:"Predicates, the query filters"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The query plan of Query 96 is divided into five fragments, numbered from 0 to 4. The query plan can be read one by one in a bottom-up manner."}),"\n",(0,i.jsxs)(n.p,{children:["Fragment 4 is responsible for scanning the ",(0,i.jsx)(n.code,{children:"time_dim"})," table and executing the related query condition (i.e. ",(0,i.jsx)(n.code,{children:"time_dim.t_hour = 8 and time_dim.t_minute >= 30"}),") in advance. This step is also known as predicate pushdown. StarRocks decides whether to enable ",(0,i.jsx)(n.code,{children:"PREAGGREGATION"})," for aggregation tables. In the previous figure, preaggregation of ",(0,i.jsx)(n.code,{children:"time_dim"})," is disabled. In this case, all dimension columns of ",(0,i.jsx)(n.code,{children:"time_dim"})," are read, which may negatively affect performance if there are many dimension columns in the table. If the ",(0,i.jsx)(n.code,{children:"time_dim"})," table selects ",(0,i.jsx)(n.code,{children:"range partition"})," for data division, several partitions will be hit in the query plan and irrelevant partitions will be automatically filtered out. If there is a materialized view, StarRocks will automatically select the materialized view based on the query. If there is no materialized view, the query will automatically hit the base table (for example, ",(0,i.jsx)(n.code,{children:"rollup: time_dim"})," in the previous figure)."]}),"\n",(0,i.jsx)(n.p,{children:"When the scan is complete, Fragment 4 ends. Data will be passed to other fragments, as indicated by EXCHANGE ID : 09 in the previous figure, to the receiving node labeled 9."}),"\n",(0,i.jsxs)(n.p,{children:["For the query plan of Query 96, Fragment 2, 3, and 4 have similar functions but they are responsible for scanning different tables. Specifically, the ",(0,i.jsx)(n.code,{children:"Order/Aggregation/Join"})," operations in the query are performed in Fragment 1."]}),"\n",(0,i.jsxs)(n.p,{children:["Fragment 1 uses the ",(0,i.jsx)(n.code,{children:"BROADCAST"})," method to perform ",(0,i.jsx)(n.code,{children:"Order/Aggregation/Join"})," operations i, that is, to broadcast the small table to the large table. If both tables are large, we recommend that you use the ",(0,i.jsx)(n.code,{children:"SHUFFLE"})," method. Currently, StarRocks only supports ",(0,i.jsx)(n.code,{children:"HASH JOIN"}),". The ",(0,i.jsx)(n.code,{children:"colocate"})," field is used to show that the two joined tables are partitioned and bucketed in the same way, so that the join operation can be performed locally without migrating the data. When the Join operation is complete, the upper-level ",(0,i.jsx)(n.code,{children:"aggregation"}),", ",(0,i.jsx)(n.code,{children:"order by"}),", and ",(0,i.jsx)(n.code,{children:"top-n"})," operations will be performed."]}),"\n",(0,i.jsx)(n.p,{children:"By removing the specific expressions (only keep the operators), the query plan can be presented in a more macroscopic view, as shown in the following figure."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"8-5",src:t(16860).Z+"",width:"1644",height:"932"})}),"\n",(0,i.jsx)(n.h2,{id:"query-hint",children:"Query hint"}),"\n",(0,i.jsx)(n.p,{children:"Query hints are directives or comments that explicitly suggest the query optimizer on how to execute a query. Currently, StarRocks supports two types of hints: variable-setting hint and join hint. Hints only take effect within a single query."}),"\n",(0,i.jsx)(n.h3,{id:"variable-setting-hint",children:"Variable-Setting hint"}),"\n",(0,i.jsxs)(n.p,{children:["You can set one or more ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/reference/System_variable",children:"system variables"})," by using the ",(0,i.jsx)(n.code,{children:"SET_VAR"})," hint in the form of the syntax ",(0,i.jsx)(n.code,{children:"/*+ SET_VAR(var_name = value) */"})," in SELECT and SUBMIT TASK statements, or in the SELECT clause that is included in other statement, such as CREATE MATERIALIZED VIEW AS SELECT and CREATE VIEW AS SELECT."]}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"[...] SELECT [/*+ SET_VAR(key=value [, key = value]*) */] ...\nSUBMIT [/*+ SET_VAR(key=value [, key = value]*) */] TASK ...\n"})}),"\n",(0,i.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Hint the aggregation method for an aggregate query by setting the system variables ",(0,i.jsx)(n.code,{children:"streaming_preaggregation_mode"})," and ",(0,i.jsx)(n.code,{children:"new_planner_agg_stage"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT /*+ SET_VAR (streaming_preaggregation_mode = 'force_streaming',new_planner_agg_stage = '2') */ SUM(sales_amount) AS total_sales_amount FROM sales_orders;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Hint the query's task execution timeout period by setting the system variable ",(0,i.jsx)(n.code,{children:"query_timeout"})," in the SUBMIT TASK statement."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SUBMIT /*+ SET_VAR(query_timeout=3) */ TASK AS CREATE TABLE temp AS SELECT count(*) AS cnt FROM tbl1;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Hint the query's execution timeout period by setting the system variable ",(0,i.jsx)(n.code,{children:"query_timeout"})," in the SELECT clause when creating a materialized view."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW mv \nPARTITION BY dt \nDISTRIBUTED BY HASH(`key`) \nBUCKETS 10 \nREFRESH ASYNC \nAS SELECT /*+ SET_VAR(query_timeout=500) */ * from dual;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"join-hint",children:"Join hint"}),"\n",(0,i.jsxs)(n.p,{children:["For multi-table join queries, the optimizer usually selects the optimal join execution method. In special cases, you can use a join hint to explicitly suggest the join execution method to the optimizer or disable Join Reorder. Currently, a join hint supports suggesting Shuffle Join, Broadcast Join, Bucket Shuffle Join, or Colocate Join as a join execution method. When a join hint is used, the optimizer does not perform Join Reorder. So you need to select the smaller table as the right table. Additionally, when suggesting ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/using_starrocks/Colocate_join",children:"Colocate Join"})," or Bucket Shuffle Join as the join execution method, make sure that the data distribution of the joined table meets the requirements of these join execution methods. Otherwise, the suggested join execution method cannot take effect."]}),"\n",(0,i.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"... JOIN { [BROADCAST] | [SHUFFLE] | [BUCKET] | [COLOCATE] | [UNREORDER]} ...\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsx)(n.p,{children:"Join Hint is case-insensitive."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shuffle Join"}),"\n",(0,i.jsx)(n.p,{children:"If you need to shuffle the data rows with the same bucketing key values from tables A and B onto the same machine before a Join operation is performed, you can hint the join execution method as Shuffle Join."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"select k1 from t1 join [SHUFFLE] t2 on t1.k1 = t2.k2 group by t2.k2;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Broadcast Join"}),"\n",(0,i.jsx)(n.p,{children:"If table A is a large table and table B is a small table, you can hint the join execution method as Broadcast Join. The data of the table B is fully broadcasted to the machines on which the data of table A resides, and then the Join operation is performed. Compared to Shuffle Join, Broadcast Join saves the cost of shuffling the data of table A."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"select k1 from t1 join [BROADCAST] t2 on t1.k1 = t2.k2 group by t2.k2;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Bucket Shuffle Join"}),"\n",(0,i.jsx)(n.p,{children:"If the Join equijoin expression in the join query contains the bucketing key of table A, especially when both tables A and B are large tables, you can hint the join execution method as Bucket Shuffle Join. The data of table B is shuffled to the machines on which the data of table A resides, according to the data distribution of table A, and then the Join operation is performed. Compared to Broadcast Join, Bucket Shuffle Join significantly reduces data transferring because the data of table B is shuffled only once globally."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"select k1 from t1 join [BUCKET] t2 on t1.k1 = t2.k2 group by t2.k2;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Colocate Join"}),"\n",(0,i.jsx)(n.p,{children:"If tables A and B belong to the same Colocation Group which is specified during table creation, the data rows with the same bucketing key values from tables A and B are distributed on the same BE node. When the Join equijoin expression contains the bucketing key of tables A and B in the join query, you can hint the join execution method as Colocate Join. Data with the same key values are directly joined locally, reducing the time spent on data transmission between nodes and improving query performance."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"select k1 from t1 join [COLOCATE] t2 on t1.k1 = t2.k2 group by t2.k2;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"view-join-execution-method",children:"View join execution method"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"EXPLAIN"})," command to view the actual join execution method. If the returned result shows that the join execution method matches the join hint, it means that the join hint is effective."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"EXPLAIN select k1 from t1 join [COLOCATE] t2 on t1.k1 = t2.k2 group by t2.k2;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"8-9",src:t(88539).Z+"",width:"651",height:"243"})}),"\n",(0,i.jsx)(n.h2,{id:"sql-fingerprint",children:"SQL fingerprint"}),"\n",(0,i.jsxs)(n.p,{children:["SQL fingerprint is used to optimize slow queries and improve system resource utilization. StarRocks uses the SQL fingerprint feature to normalize SQL statements in the slow query log (",(0,i.jsx)(n.code,{children:"fe.audit.log.slow_query"}),"), categorizes the SQL statements into different types, and calculates the MD5 hash value of each SQL type to identify slow queries. The MD5 hash value is specified by the field ",(0,i.jsx)(n.code,{children:"Digest"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"2021-12-27 15:13:39,108 [slow_query] |Client=172.26.xx.xxx:54956|User=root|Db=default_cluster:test|State=EOF|Time=2469|ScanBytes=0|ScanRows=0|ReturnRows=6|StmtId=3|QueryId=824d8dc0-66e4-11ec-9fdc-00163e04d4c2|IsQuery=true|feIp=172.26.92.195|Stmt=select count(*) from test_basic group by id_bigint|Digest=51390da6b57461f571f0712d527320f4\n"})}),"\n",(0,i.jsx)(n.p,{children:"SQL statement normalization transforms a statement text into a more normalized format and preserves only important statement structure."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Preserves object identifiers, such as database and table names."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Converts constants into a question mark (?)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deletes comments and formats spaces."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following two SQL statements belong to the same type after normalization."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SQL statements before normalization"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM orders WHERE customer_id=10 AND quantity>20\n\n\n\nSELECT * FROM orders WHERE customer_id = 20 AND quantity > 100\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SQL statement after normalization"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM orders WHERE customer_id=? AND quantity>?\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},16860:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/8-5-dd8c4bd914a558415d7eddfe445b9411.png"},88539:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/8-9-9999cb1cdef4159128d20893137e56e9.png"},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:a(e),i.createElement(s.Provider,{value:r},n)}}}]);