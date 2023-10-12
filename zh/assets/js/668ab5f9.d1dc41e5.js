"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39016],{51239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>_,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(85893),s=n(11151);const l={displayed_sidebar:"Chinese31"},d="SHOW MATERIALIZED VIEW",c={id:"sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",title:"SHOW MATERIALIZED VIEW",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"DROP MATERIALIZED VIEW",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW"},next:{title:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u6545\u969c\u6392\u9664",permalink:"/doc/zh/docs/2.5/using_starrocks/troubleshooting_asynchronous_materialized_views"}},o={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7\u7cbe\u786e\u5339\u914d\u67e5\u770b\u7279\u5b9a\u7269\u5316\u89c6\u56fe",id:"\u793a\u4f8b\u4e00\u901a\u8fc7\u7cbe\u786e\u5339\u914d\u67e5\u770b\u7279\u5b9a\u7269\u5316\u89c6\u56fe",level:3},{value:"\u793a\u4f8b\u4e8c\uff1a\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u67e5\u770b\u7269\u5316\u89c6\u56fe",id:"\u793a\u4f8b\u4e8c\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u67e5\u770b\u7269\u5316\u89c6\u56fe",level:3}];function a(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"show-materialized-view",children:"SHOW MATERIALIZED VIEW"}),"\n",(0,r.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(t.p,{children:"\u5c55\u793a\u6240\u6709\u6216\u6307\u5b9a\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u4fe1\u606f\u3002"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8be5\u547d\u4ee4\u5f53\u524d\u4ec5\u9488\u5bf9\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u751f\u6548\u3002\u9488\u5bf9\u540c\u6b65\u7269\u5316\u89c6\u56fe\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",children:"SHOW ALTER MATERIALIZED VIEW"})," \u547d\u4ee4\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u540c\u6b65\u7269\u5316\u89c6\u56fe\u7684\u6784\u5efa\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:'SHOW MATERIALIZED VIEW\n[FROM db_name]\n[\nWHERE\n[NAME { = "mv_name" | LIKE "mv_name_matcher"}\n]\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u5fc5\u9009"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db_name"}),(0,r.jsx)(t.td,{children:"\u5426"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u6570\u636e\u5e93\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mv_name"}),(0,r.jsx)(t.td,{children:"\u5426"}),(0,r.jsx)(t.td,{children:"\u7528\u4e8e\u7cbe\u786e\u5339\u914d\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mv_name_matcher"}),(0,r.jsx)(t.td,{children:"\u5426"}),(0,r.jsx)(t.td,{children:"\u7528\u4e8e\u6a21\u7cca\u5339\u914d\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0 matcher\u3002"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,r.jsx)(t.p,{children:"\u8fd4\u56de\u6700\u8fd1\u4e00\u6b21 REFRESH \u4efb\u52a1\u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u8fd4\u56de"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe ID\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"database_name"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u540d\u79f0\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"refresh_type"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u66f4\u65b0\u65b9\u5f0f\uff0c\u5305\u62ec ROLLUP\u3001MANUAL\u3001ASYNC\u3001INCREMENTAL\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"is_active"}),(0,r.jsxs)(t.td,{children:["\u7269\u5316\u89c6\u56fe\u72b6\u6001\u662f\u5426\u4e3a active\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(t.code,{children:"true"})," \u548c ",(0,r.jsx)(t.code,{children:"false"}),"\u3002"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"partition_type"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\u7c7b\u578b\uff0c\u5305\u62ec RANGE \u548c UNPARTITIONED\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"task_id"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u4efb\u52a1 ID\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"task_name"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u7684\u5237\u65b0\u4efb\u52a1\u540d\u79f0\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_start_time"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u5f00\u59cb\u65f6\u95f4\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_finished_time"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u7ed3\u675f\u65f6\u95f4\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_duration"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u8017\u65f6\uff08\u5355\u4f4d\u79d2\uff09\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_state"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u7684\u72b6\u6001\uff0c\u5305\u62ec PENDING\u3001RUNNING\u3001FAILED\u3001SUCCESS\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_force_refresh"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u662f\u5426\u4e3a\u5f3a\u5236\uff08FORCE\uff09\u5237\u65b0\u3002                      \uff5c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_start_partition"}),(0,r.jsx)(t.td,{children:"\u4e0a\u4e00\u6b21\u5237\u65b0\u5f00\u59cb\u7684\u7269\u5316\u89c6\u56fe\u5206\u533a\u3002                                \uff5c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_end_partition"}),(0,r.jsx)(t.td,{children:"\u4e0a\u4e00\u6b21\u5237\u65b0\u7ed3\u675f\u7684\u7269\u5316\u89c6\u56fe\u5206\u533a\u3002                                  \uff5c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_base_refresh_partitions"}),(0,r.jsx)(t.td,{children:"\u4e0a\u4e00\u6b21\u5237\u65b0\u57fa\u8868\u66f4\u65b0\u7684\u5206\u533a\u3002                            \uff5c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_mv_refresh_partitions"}),(0,r.jsx)(t.td,{children:"\u4e0a\u4e00\u6b21\u5237\u65b0\u7269\u5316\u89c6\u56fe\u5237\u65b0\u7684\u5206\u533a\u3002                          \uff5c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_error_code"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u5931\u8d25\u7684 ErrorCode\uff08\u5982\u679c\u7269\u5316\u89c6\u56fe\u72b6\u6001\u4e0d\u4e3a active\uff09\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_error_message"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u4e0a\u4e00\u6b21\u5237\u65b0\u5931\u8d25\u7684 ErrorMessage\uff08\u5982\u679c\u7269\u5316\u89c6\u56fe\u72b6\u6001\u4e0d\u4e3a active\uff09\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rows"}),(0,r.jsx)(t.td,{children:"\u7269\u5316\u89c6\u56fe\u4e2d\u6570\u636e\u884c\u6570\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"\u521b\u5efa\u7269\u5316\u89c6\u56fe\u7684\u67e5\u8be2\u8bed\u53e5\u3002"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(t.h3,{id:"\u793a\u4f8b\u4e00\u901a\u8fc7\u7cbe\u786e\u5339\u914d\u67e5\u770b\u7279\u5b9a\u7269\u5316\u89c6\u56fe",children:"\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7\u7cbe\u786e\u5339\u914d\u67e5\u770b\u7279\u5b9a\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:'<<<<<<< HEAD\nMySQL > SHOW MATERIALIZED VIEW WHERE NAME = "lo_mv1"\\G\n=======\n-- Create Table: customer\nCREATE TABLE customer ( C_CUSTKEY     INTEGER NOT NULL,\n                        C_NAME        VARCHAR(25) NOT NULL,\n                        C_ADDRESS     VARCHAR(40) NOT NULL,\n                        C_NATIONKEY   INTEGER NOT NULL,\n                        C_PHONE       CHAR(15) NOT NULL,\n                        C_ACCTBAL     double   NOT NULL,\n                        C_MKTSEGMENT  CHAR(10) NOT NULL,\n                        C_COMMENT     VARCHAR(117) NOT NULL,\n                        PAD char(1) NOT NULL)\n    ENGINE=OLAP\nDUPLICATE KEY(`c_custkey`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`c_custkey`) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"storage_format" = "DEFAULT"\n);\n\n-- Create MV: customer_mv\nCREATE MATERIALIZED VIEW customer_mv\nDISTRIBUTED BY HASH(c_custkey) buckets 10\nREFRESH MANUAL\nPROPERTIES (\n    "replication_num" = "1"\n)\nAS SELECT\n              c_custkey, c_phone, c_acctbal, count(1) as c_count, sum(c_acctbal) as c_sum\n   FROM\n              customer\n   GROUP BY c_custkey, c_phone, c_acctbal;\n\n-- Refresh the MV\nREFRESH MATERIALIZED VIEW customer_mv;\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7\u7cbe\u786e\u5339\u914d\u67e5\u770b\u7279\u5b9a\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:'mysql> show materialized views  where name=\'customer_mv\'\\G;\n>>>>>>> fe40bbc1 (delete-in_memory-property (#5393))\n*************************** 1. row ***************************\n           id: 475899\n         name: lo_mv1\ndatabase_name: wlc_test\n         text: CREATE MATERIALIZED VIEW `lo_mv1`\nCOMMENT "MATERIALIZED_VIEW"\nDISTRIBUTED BY HASH(`lo_orderkey`) BUCKETS 10 \nREFRESH ASYNC\nPROPERTIES (\n"replication_num" = "3",\n"storage_medium" = "HDD"\n)\nAS SELECT `wlc_test`.`lineorder`.`lo_orderkey` AS `lo_orderkey`, `wlc_test`.`lineorder`.`lo_custkey` AS `lo_custkey`, sum(`wlc_test`.`lineorder`.`lo_quantity`) AS `total_quantity`, sum(`wlc_test`.`lineorder`.`lo_revenue`) AS `total_revenue`, count(`wlc_test`.`lineorder`.`lo_shipmode`) AS `shipmode_count` FROM `wlc_test`.`lineorder` GROUP BY `wlc_test`.`lineorder`.`lo_orderkey`, `wlc_test`.`lineorder`.`lo_custkey` ORDER BY `wlc_test`.`lineorder`.`lo_orderkey` ASC ;\n         rows: 0\n1 row in set (0.42 sec)\n'})}),"\n",(0,r.jsx)(t.h3,{id:"\u793a\u4f8b\u4e8c\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u67e5\u770b\u7269\u5316\u89c6\u56fe",children:"\u793a\u4f8b\u4e8c\uff1a\u901a\u8fc7\u6a21\u7cca\u5339\u914d\u67e5\u770b\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:'MySQL > SHOW MATERIALIZED VIEW WHERE NAME LIKE "lo_mv%"\\G\n*************************** 1. row ***************************\n           id: 475985\n         name: lo_mv2\ndatabase_name: wlc_test\n         text: CREATE MATERIALIZED VIEW `lo_mv2`\nCOMMENT "MATERIALIZED_VIEW"\nPARTITION BY (`lo_orderdate`)\nDISTRIBUTED BY HASH(`lo_orderkey`) BUCKETS 10 \nREFRESH ASYNC START("2023-07-01 10:00:00") EVERY(INTERVAL 1 DAY)\nPROPERTIES (\n"replication_num" = "3",\n"storage_medium" = "HDD"\n)\nAS SELECT `wlc_test`.`lineorder`.`lo_orderkey` AS `lo_orderkey`, `wlc_test`.`lineorder`.`lo_orderdate` AS `lo_orderdate`, `wlc_test`.`lineorder`.`lo_custkey` AS `lo_custkey`, sum(`wlc_test`.`lineorder`.`lo_quantity`) AS `total_quantity`, sum(`wlc_test`.`lineorder`.`lo_revenue`) AS `total_revenue`, count(`wlc_test`.`lineorder`.`lo_shipmode`) AS `shipmode_count` FROM `wlc_test`.`lineorder` GROUP BY `wlc_test`.`lineorder`.`lo_orderkey`, `wlc_test`.`lineorder`.`lo_orderdate`, `wlc_test`.`lineorder`.`lo_custkey` ORDER BY `wlc_test`.`lineorder`.`lo_orderkey` ASC ;\n         rows: 0\n*************************** 2. row ***************************\n           id: 475899\n         name: lo_mv1\ndatabase_name: wlc_test\n         text: CREATE MATERIALIZED VIEW `lo_mv1`\nCOMMENT "MATERIALIZED_VIEW"\nDISTRIBUTED BY HASH(`lo_orderkey`) BUCKETS 10 \nREFRESH ASYNC\nPROPERTIES (\n"replication_num" = "3",\n"storage_medium" = "HDD"\n)\nAS SELECT `wlc_test`.`lineorder`.`lo_orderkey` AS `lo_orderkey`, `wlc_test`.`lineorder`.`lo_custkey` AS `lo_custkey`, sum(`wlc_test`.`lineorder`.`lo_quantity`) AS `total_quantity`, sum(`wlc_test`.`lineorder`.`lo_revenue`) AS `total_revenue`, count(`wlc_test`.`lineorder`.`lo_shipmode`) AS `shipmode_count` FROM `wlc_test`.`lineorder` GROUP BY `wlc_test`.`lineorder`.`lo_orderkey`, `wlc_test`.`lineorder`.`lo_custkey` ORDER BY `wlc_test`.`lineorder`.`lo_orderkey` ASC ;\n         rows: 0\n*************************** 3. row ***************************\n           id: 477338\n         name: lo_mv_sync_2\ndatabase_name: wlc_test\n         text: CREATE MATERIALIZED VIEW lo_mv_sync_2 REFRESH SYNC AS select lo_orderkey, lo_orderdate, lo_custkey, sum(lo_quantity) as total_quantity, sum(lo_revenue) as total_revenue, count(lo_shipmode) as shipmode_count from lineorder group by lo_orderkey, lo_orderdate, lo_custkey\n         rows: 0\n*************************** 4. row ***************************\n           id: 475992\n         name: lo_mv_sync_1\ndatabase_name: wlc_test\n         text: CREATE MATERIALIZED VIEW lo_mv_sync_1ASselect lo_orderkey, lo_orderdate, lo_custkey, sum(lo_quantity) as total_quantity, sum(lo_revenue) as total_revenue, count(lo_shipmode) as shipmode_countfrom lineorder group by lo_orderkey, lo_orderdate, lo_custkey\n         rows: 0\n4 rows in set (0.04 sec)\n'})})]})}const _=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>l});var r=n(67294);const s=r.createContext({});function l(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:l(e),r.createElement(s.Provider,{value:c},t)}}}]);