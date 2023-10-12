"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96006],{87330:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(85893),n=s(11151);const i={displayed_sidebar:"documentation"},a="SHOW MATERIALIZED VIEWS",c={id:"sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",title:"SHOW MATERIALIZED VIEWS",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SHOW LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_LOAD"},next:{title:"SHOW PARTITIONS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"show-materialized-views",children:"SHOW MATERIALIZED VIEWS"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Shows all or one specific asynchronous materialized view."}),"\n",(0,r.jsx)(t.p,{children:"Since v3.0, the name of this statement is changed from SHOW MATERIALIZED VIEW to SHOW MATERIALIZED VIEWS."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:'SHOW MATERIALIZED VIEWS\n[FROM db_name]\n[\nWHERE NAME { = "mv_name" | LIKE "mv_name_matcher"}\n]\n'})}),"\n",(0,r.jsx)(t.p,{children:"Parameters in brackets [] is optional."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Parameter"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Required"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db_name"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"The name of the database to which the materialized view resides. If this parameter is not specified, the current database is used by default."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mv_name"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"The name of the materialized view to show."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mv_name_matcher"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"The matcher used to filter materialized views."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Return"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"The ID of the materialized view."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"database_name"}),(0,r.jsx)(t.td,{children:"The name of the database in which the materialized view resides."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the materialized view."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"refresh_type"}),(0,r.jsx)(t.td,{children:"The refresh type of the materialized view, including ROLLUP, MANUAL, ASYNC, and INCREMENTAL."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"is_active"}),(0,r.jsxs)(t.td,{children:["Whether the materialized view state is active. Valid Value: ",(0,r.jsx)(t.code,{children:"true"})," and ",(0,r.jsx)(t.code,{children:"false"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"partition_type"}),(0,r.jsx)(t.td,{children:"The partition type of the materialized view, including RANGE and UNPARTITIONED."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"task_id"}),(0,r.jsx)(t.td,{children:"ID of the materialized view refresh task."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"task_name"}),(0,r.jsx)(t.td,{children:"Name of the materialized view refresh task."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_start_time"}),(0,r.jsx)(t.td,{children:"The start time of the last refresh of the materialized view."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_finished_time"}),(0,r.jsx)(t.td,{children:"The end time of the last refresh of the materialized view."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_duration"}),(0,r.jsx)(t.td,{children:"The time taken by the last refresh. Unit: seconds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_state"}),(0,r.jsx)(t.td,{children:"The status of the last refresh, including PENDING, RUNNING, FAILED, and SUCCESS."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_force_refresh"}),(0,r.jsx)(t.td,{children:"Whether the last refresh is a FORCE refresh."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_start_partition"}),(0,r.jsx)(t.td,{children:"The start partition of the last refresh in the materialized view."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_end_partition"}),(0,r.jsx)(t.td,{children:"The end partition of the last refresh in the materialized view."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_base_refresh_partitions"}),(0,r.jsx)(t.td,{children:"The base table partitions that were refreshed in the last refresh."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_mv_refresh_partitions"}),(0,r.jsx)(t.td,{children:"The materialized view partitions that were refreshed in the last refresh."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_error_code"}),(0,r.jsx)(t.td,{children:"The error code for the last failed refresh of the materialized view (if the materialized view state is not active)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_refresh_error_message"}),(0,r.jsx)(t.td,{children:"The reason why the last refresh failed (if the materialized view state is not active)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rows"}),(0,r.jsx)(t.td,{children:"The number of data rows in the materialized view."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"The statement used to create the materialized view."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"The following examples is based on this business scenario:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:'-- Create Table: customer\nCREATE TABLE customer ( C_CUSTKEY     INTEGER NOT NULL,\n                        C_NAME        VARCHAR(25) NOT NULL,\n                        C_ADDRESS     VARCHAR(40) NOT NULL,\n                        C_NATIONKEY   INTEGER NOT NULL,\n                        C_PHONE       CHAR(15) NOT NULL,\n                        C_ACCTBAL     double   NOT NULL,\n                        C_MKTSEGMENT  CHAR(10) NOT NULL,\n                        C_COMMENT     VARCHAR(117) NOT NULL,\n                        PAD char(1) NOT NULL)\n    ENGINE=OLAP\nDUPLICATE KEY(`c_custkey`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`c_custkey`)\nPROPERTIES (\n"replication_num" = "1",\n"storage_format" = "DEFAULT"\n);\n\n-- Create MV: customer_mv\nCREATE MATERIALIZED VIEW customer_mv\nDISTRIBUTED BY HASH(c_custkey)\nREFRESH MANUAL\nPROPERTIES (\n    "replication_num" = "1"\n)\nAS SELECT\n              c_custkey, c_phone, c_acctbal, count(1) as c_count, sum(c_acctbal) as c_sum\n   FROM\n              customer\n   GROUP BY c_custkey, c_phone, c_acctbal;\n\n-- Refresh the MV\nREFRESH MATERIALIZED VIEW customer_mv;\n'})}),"\n",(0,r.jsx)(t.p,{children:"Example 1: Show a specific materialized view."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:'mysql> SHOW MATERIALIZED VIEWS WHERE NAME=\'customer_mv\'\\G;\n*************************** 1. row ***************************\n                        id: 10142\n                      name: customer_mv\n             database_name: test\n              refresh_type: MANUAL\n                 is_active: true\n   last_refresh_start_time: 2023-02-17 10:27:33\nlast_refresh_finished_time: 2023-02-17 10:27:33\n     last_refresh_duration: 0\n        last_refresh_state: SUCCESS\n             inactive_code: 0\n           inactive_reason:\n                      text: CREATE MATERIALIZED VIEW `customer_mv`\nCOMMENT "MATERIALIZED_VIEW"\nDISTRIBUTED BY HASH(`c_custkey`)\nREFRESH MANUAL\nPROPERTIES (\n"replication_num" = "1",\n"storage_medium" = "HDD"\n)\nAS SELECT `customer`.`c_custkey`, `customer`.`c_phone`, `customer`.`c_acctbal`, count(1) AS `c_count`, sum(`customer`.`c_acctbal`) AS `c_sum`\nFROM `test`.`customer`\nGROUP BY `customer`.`c_custkey`, `customer`.`c_phone`, `customer`.`c_acctbal`;\n                      rows: 0\n1 row in set (0.11 sec)\n'})}),"\n",(0,r.jsx)(t.p,{children:"Example 2: Show materialized views by matching the name."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:'mysql> SHOW MATERIALIZED VIEWS WHERE NAME LIKE \'customer_mv\'\\G;\n*************************** 1. row ***************************\n                        id: 10142\n                      name: customer_mv\n             database_name: test\n              refresh_type: MANUAL\n                 is_active: true\n   last_refresh_start_time: 2023-02-17 10:27:33\nlast_refresh_finished_time: 2023-02-17 10:27:33\n     last_refresh_duration: 0\n        last_refresh_state: SUCCESS\n             inactive_code: 0\n           inactive_reason:\n                      text: CREATE MATERIALIZED VIEW `customer_mv`\nCOMMENT "MATERIALIZED_VIEW"\nDISTRIBUTED BY HASH(`c_custkey`)\nREFRESH MANUAL\nPROPERTIES (\n"replication_num" = "1",\n"storage_medium" = "HDD"\n)\nAS SELECT `customer`.`c_custkey`, `customer`.`c_phone`, `customer`.`c_acctbal`, count(1) AS `c_count`, sum(`customer`.`c_acctbal`) AS `c_sum`\nFROM `test`.`customer`\nGROUP BY `customer`.`c_custkey`, `customer`.`c_phone`, `customer`.`c_acctbal`;\n                      rows: 0\n1 row in set (0.12 sec)\n'})})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>i});var r=s(67294);const n=r.createContext({});function i(e){const t=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:i(e),r.createElement(n.Provider,{value:c},t)}}}]);