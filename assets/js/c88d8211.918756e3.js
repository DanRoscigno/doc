"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35693],{27247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(85893),s=t(11151);const r={displayed_sidebar:"documentation"},a="Query analysis",o={id:"administration/Query_planning",title:"Query analysis",description:"How to optimize query performance is a frequently asked question. Slow queries impair user experience as well as cluster performance. It is important to analyze and optimize query performance.",source:"@site/versioned_docs/version-2.5/administration/Query_planning.md",sourceDirName:"administration",slug:"/administration/Query_planning",permalink:"/doc/docs/2.5/administration/Query_planning",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Query_planning.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Performance Tuning",permalink:"/doc/docs/2.5/category/performance-tuning"},next:{title:"Analyze query profile",permalink:"/doc/docs/2.5/administration/query_profile"}},l={},d=[{value:"Plan analysis",id:"plan-analysis",level:2},{value:"SQL fingerprint",id:"sql-fingerprint",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"query-analysis",children:"Query analysis"}),"\n",(0,i.jsx)(n.p,{children:"How to optimize query performance is a frequently asked question. Slow queries impair user experience as well as cluster performance. It is important to analyze and optimize query performance."}),"\n",(0,i.jsxs)(n.p,{children:["You can view query information in ",(0,i.jsx)(n.code,{children:"fe/log/fe.audit.log"}),". Each query corresponds to a ",(0,i.jsx)(n.code,{children:"QueryID"})," that can be used to search for the ",(0,i.jsx)(n.code,{children:"QueryPlan"})," and ",(0,i.jsx)(n.code,{children:"Profile"})," of a query. ",(0,i.jsx)(n.code,{children:"QueryPlan"})," is the execution plan generated by FE by parsing SQL statements. ",(0,i.jsx)(n.code,{children:"Profile"})," is BE execution result and contains information such as the time consumed by each step and the volume of data processed at each step."]}),"\n",(0,i.jsx)(n.h2,{id:"plan-analysis",children:"Plan analysis"}),"\n",(0,i.jsx)(n.p,{children:"In StarRocks, the lifecycle of an SQL statement can be divided into three phases: query parsing, query planning, and query execution. Query parsing is generally not a bottleneck because the required QPS of analytical workloads is not high."}),"\n",(0,i.jsx)(n.p,{children:"Query performance in StarRocks is determined by query planning and query execution. Query planning is responsible for coordinating operators (Join/Order/Aggregate), and query execution is responsible for running specific operations."}),"\n",(0,i.jsxs)(n.p,{children:["A query plan provides the DBA with a macro perspective to access query information. A query plan is the key to query performance and a good resource for the DBA to reference. The following code snippet uses ",(0,i.jsx)(n.code,{children:"TPCDS query96"})," as an example to show how to view a query plan."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"-- query96.sql\nselect  count(*)\nfrom store_sales\n    ,household_demographics\n    ,time_dim\n    , store\nwhere ss_sold_time_sk = time_dim.t_time_sk\n    and ss_hdemo_sk = household_demographics.hd_demo_sk\n    and ss_store_sk = s_store_sk\n    and time_dim.t_hour = 8\n    and time_dim.t_minute >= 30\n    and household_demographics.hd_dep_count = 5\n    and store.s_store_name = 'ese'\norder by count(*) limit 100;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are two types of query plans \u2013  logical query plan and physical query plan. The query plan described here refers to the logical query plan. The query plan corresponding to ",(0,i.jsx)(n.code,{children:"TPCDS query96.sq"}),"l is shown below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"+------------------------------------------------------------------------------+\n| Explain String                                                               |\n+------------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                              |\n|  OUTPUT EXPRS:<slot 11>                                                      |\n|   PARTITION: UNPARTITIONED                                                   |\n|   RESULT SINK                                                                |\n|   12:MERGING-EXCHANGE                                                        |\n|      limit: 100                                                              |\n|      tuple ids: 5                                                            |\n|                                                                              |\n| PLAN FRAGMENT 1                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 12                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   8:TOP-N                                                                    |\n|   |  order by: <slot 11> ASC                                                 |\n|   |  offset: 0                                                               |\n|   |  limit: 100                                                              |\n|   |  tuple ids: 5                                                            |\n|   |                                                                          |\n|   7:AGGREGATE (update finalize)                                              |\n|   |  output: count(*)                                                        |\n|   |  group by:                                                               |\n|   |  tuple ids: 4                                                            |\n|   |                                                                          |\n|   6:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: left hash join node can not do colocate        |\n|   |  equal join conjunct: `ss_store_sk` = `s_store_sk`                       |\n|   |  tuple ids: 0 2 1 3                                                      |\n|   |                                                                          |\n|   |----11:EXCHANGE                                                           |\n|   |       tuple ids: 3                                                       |\n|   |                                                                          |\n|   4:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: left hash join node can not do colocate        |\n|   |  equal join conjunct: `ss_hdemo_sk`=`household_demographics`.`hd_demo_sk`|\n|   |  tuple ids: 0 2 1                                                        |\n|   |                                                                          |\n|   |----10:EXCHANGE                                                           |\n|   |       tuple ids: 1                                                       |\n|   |                                                                          |\n|   2:HASH JOIN                                                                |\n|   |  join op: INNER JOIN (BROADCAST)                                         |\n|   |  hash predicates:                                                        |\n|   |  colocate: false, reason: table not in same group                        |\n|   |  equal join conjunct: `ss_sold_time_sk` = `time_dim`.`t_time_sk`         |\n|   |  tuple ids: 0 2                                                          |\n|   |                                                                          |\n|   |----9:EXCHANGE                                                            |\n|   |       tuple ids: 2                                                       |\n|   |                                                                          |\n|   0:OlapScanNode                                                             |\n|      TABLE: store_sales                                                      |\n|      PREAGGREGATION: OFF. Reason: `ss_sold_time_sk` is value column          |\n|      partitions=1/1                                                          |\n|      rollup: store_sales                                                     |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 0                                                            |\n|                                                                              |\n| PLAN FRAGMENT 2                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|                                                                              |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 11                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   5:OlapScanNode                                                             |\n|      TABLE: store                                                            |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `store`.`s_store_name` = 'ese'                              |\n|      partitions=1/1                                                          |\n|      rollup: store                                                           |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 3                                                            |\n|                                                                              |\n| PLAN FRAGMENT 3                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 10                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   3:OlapScanNode                                                             |\n|      TABLE: household_demographics                                           |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `household_demographics`.`hd_dep_count` = 5                 |\n|      partitions=1/1                                                          |\n|      rollup: household_demographics                                          |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 1                                                            |\n|                                                                              |\n| PLAN FRAGMENT 4                                                              |\n|  OUTPUT EXPRS:                                                               |\n|   PARTITION: RANDOM                                                          |\n|   STREAM DATA SINK                                                           |\n|     EXCHANGE ID: 09                                                          |\n|     UNPARTITIONED                                                            |\n|                                                                              |\n|   1:OlapScanNode                                                             |\n|      TABLE: time_dim                                                         |\n|      PREAGGREGATION: OFF. Reason: null                                       |\n|      PREDICATES: `time_dim`.`t_hour` = 8, `time_dim`.`t_minute` >= 30        |\n|      partitions=1/1                                                          |\n|      rollup: time_dim                                                        |\n|      tabletRatio=0/0                                                         |\n|      tabletList=                                                             |\n|      cardinality=-1                                                          |\n|      avgRowSize=0.0                                                          |\n|      numNodes=0                                                              |\n|      tuple ids: 2                                                            |\n+------------------------------------------------------------------------------+\n128 rows in set (0.02 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Query 96 shows a query plan that involves several StarRocks concepts."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Explanation"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avgRowSize"}),(0,i.jsx)(n.td,{children:"The average size of the scanned data rows"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cardinality"}),(0,i.jsx)(n.td,{children:"The total number of data rows in the scanned table"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"colocate"}),(0,i.jsx)(n.td,{children:"Whether the table is in colocate mode"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numNodes"}),(0,i.jsx)(n.td,{children:"The number of nodes to be scanned"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rollup"}),(0,i.jsx)(n.td,{children:"Materialized view"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"preaggregation"}),(0,i.jsx)(n.td,{children:"Pre-aggregation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"predicates"}),(0,i.jsx)(n.td,{children:"Predicates, the query filters"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The query plan of Query 96 is divided into five fragments, numbered from 0 to 4. The query plan can be read one by one in a bottom-up manner."}),"\n",(0,i.jsxs)(n.p,{children:["Fragment 4 is responsible for scanning the ",(0,i.jsx)(n.code,{children:"time_dim"})," table and executing the related query condition (i.e. ",(0,i.jsx)(n.code,{children:"time_dim.t_hour = 8 and time_dim.t_minute >= 30"}),") in advance. This step is also known as predicate pushdown. StarRocks decides whether to enable ",(0,i.jsx)(n.code,{children:"PREAGGREGATION"})," for aggregation tables. In the previous figure, preaggregation of ",(0,i.jsx)(n.code,{children:"time_dim"})," is disabled. In this case, all dimension columns of ",(0,i.jsx)(n.code,{children:"time_dim"})," are read, which may negatively affect performance if there are many dimension columns in the table. If the ",(0,i.jsx)(n.code,{children:"time_dim"})," table selects ",(0,i.jsx)(n.code,{children:"range partition"})," for data division, several partitions will be hit in the query plan and irrelevant partitions will be automatically filtered out. If there is a materialized view, StarRocks will automatically select the materialized view based on the query. If there is no materialized view, the query will automatically hit the base table (for example, ",(0,i.jsx)(n.code,{children:"rollup: time_dim"})," in the previous figure)."]}),"\n",(0,i.jsx)(n.p,{children:"When the scan is complete, Fragment 4 ends. Data will be passed to other fragments, as indicated by EXCHANGE ID : 09 in the previous figure, to the receiving node labeled 9."}),"\n",(0,i.jsxs)(n.p,{children:["For the query plan of Query 96, Fragment 2, 3, and 4 have similar functions but they are responsible for scanning different tables. Specifically, the ",(0,i.jsx)(n.code,{children:"Order/Aggregation/Join"})," operations in the query are performed in Fragment 1."]}),"\n",(0,i.jsxs)(n.p,{children:["Fragment 1 uses the ",(0,i.jsx)(n.code,{children:"BROADCAST"})," method to perform ",(0,i.jsx)(n.code,{children:"Order/Aggregation/Join"})," operations i, that is, to broadcast the small table to the large table. If both tables are large, we recommend that you use the ",(0,i.jsx)(n.code,{children:"SHUFFLE"})," method. Currently, StarRocks only supports ",(0,i.jsx)(n.code,{children:"HASH JOIN"}),". The ",(0,i.jsx)(n.code,{children:"colocate"})," field is used to show that the two joined tables are partitioned and bucketed in the same way, so that the join operation can be performed locally without migrating the data. When the Join operation is complete, the upper-level ",(0,i.jsx)(n.code,{children:"aggregation"}),", ",(0,i.jsx)(n.code,{children:"order by"}),", and ",(0,i.jsx)(n.code,{children:"top-n"})," operations will be performed."]}),"\n",(0,i.jsx)(n.p,{children:"By removing the specific expressions (only keep the operators), the query plan can be presented in a more macroscopic view, as shown in the following figure."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"8-5",src:t(32671).Z+"",width:"1644",height:"932"})}),"\n",(0,i.jsx)(n.h2,{id:"sql-fingerprint",children:"SQL fingerprint"}),"\n",(0,i.jsxs)(n.p,{children:["SQL fingerprint is used to optimize slow queries and improve system resource utilization. StarRocks uses the SQL fingerprint feature to normalize SQL statements in the slow query log (",(0,i.jsx)(n.code,{children:"fe.audit.log.slow_query"}),"), categorizes the SQL statements into different types, and calculates the MD5 hash value of each SQL type to identify slow queries. The MD5 hash value is specified by the field ",(0,i.jsx)(n.code,{children:"Digest"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"2021-12-27 15:13:39,108 [slow_query] |Client=172.26.xx.xxx:54956|User=root|Db=default_cluster:test|State=EOF|Time=2469|ScanBytes=0|ScanRows=0|ReturnRows=6|StmtId=3|QueryId=824d8dc0-66e4-11ec-9fdc-00163e04d4c2|IsQuery=true|feIp=172.26.92.195|Stmt=select count(*) from test_basic group by id_bigint|Digest=51390da6b57461f571f0712d527320f4\n"})}),"\n",(0,i.jsx)(n.p,{children:"SQL statement normalization transforms a statement text into a more normalized format and preserves only important statement structure."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Preserves object identifiers, such as database and table names."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Converts constants into a question mark (?)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deletes comments and formats spaces."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following two SQL statements belong to the same type after normalization."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SQL statements before normalization"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM orders WHERE customer_id=10 AND quantity>20\n\n\n\nSELECT * FROM orders WHERE customer_id = 20 AND quantity > 100\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SQL statement after normalization"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM orders WHERE customer_id=? AND quantity>?\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},32671:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/8-5-dd8c4bd914a558415d7eddfe445b9411.png"},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var i=t(67294);const s=i.createContext({});function r(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:r(e),i.createElement(s.Provider,{value:o},n)}}}]);