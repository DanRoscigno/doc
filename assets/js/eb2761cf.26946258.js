"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14134],{50177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>E,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(85893),a=n(11151);const r={},i="SHOW CREATE TABLE",l={id:"sql-reference/sql-statements/data-manipulation/SHOW CREATE TABLE",title:"SHOW CREATE TABLE",description:"Returns the CREATE TABLE statement that was used to create a given table.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW CREATE TABLE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW CREATE TABLE",permalink:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW CREATE TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW CREATE TABLE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW CREATE MATERIALIZED VIEW",permalink:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW CREATE MATERIALIZED VIEW"},next:{title:"SHOW CREATE VIEW",permalink:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW CREATE VIEW"}},c={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2},{value:"Bucket number is not specified",id:"bucket-number-is-not-specified",level:3},{value:"Bucket number is specified",id:"bucket-number-is-specified",level:3},{value:"References",id:"references",level:2}];function o(e){const t=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",code:"code",a:"a",ul:"ul",li:"li",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-create-table",children:"SHOW CREATE TABLE"}),"\n",(0,s.jsx)(t.p,{children:"Returns the CREATE TABLE statement that was used to create a given table."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(t.p,{children:["In versions earlier than v3.0, the SHOW CREATE TABLE statement requires you to have the ",(0,s.jsx)(t.code,{children:"SELECT_PRIV"})," privilege on the table. Since v3.0, the SHOW CREATE TABLE statement requires you to have the ",(0,s.jsx)(t.code,{children:"SELECT"})," privilege on the table."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Since v3.0, you can use the SHOW CREATE TABLE statement to view the CREATE TABLE statements of the tables that are managed by an external catalog and are stored in Apache Hive\u2122, Apache Iceberg, Apache Hudi, or Delta Lake."}),"\n",(0,s.jsxs)(t.p,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,s.jsx)(t.a,{href:"/docs/3.0/table_design/Data_distribution#determine-the-number-of-buckets",children:"Determine the number of buckets"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you specified the number of buckets when creating a table, the output of SHOW CREATE TABLE will display the number of buckets."}),"\n",(0,s.jsxs)(t.li,{children:["If you did not specify the number of buckets when creating a table, the output of SHOW CREATE TABLE will not display the number of buckets. You can run ",(0,s.jsx)(t.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20PARTITIONS",children:"SHOW PARTITIONS"})," to view the number of buckets for each partition."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In versions earlier than v2.5.7, you are required to set the number of buckets when creating a table. Therefore, SHOW CREATE TABLE displays the number of buckets by default."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW CREATE TABLE [db_name.]table_name\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db_name"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The database name. If this parameter is not specified, the CREATE TABLE statement of a given table in your current database is returned by default."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"table_name"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The table name."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"+-----------+----------------+\n| Table     | Create Table   |                                               \n+-----------+----------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"The following table describes the parameters returned by this statement."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Table"}),(0,s.jsx)(t.td,{children:"The table name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Create Table"}),(0,s.jsx)(t.td,{children:"The CREATE TABLE statement of the table."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"bucket-number-is-not-specified",children:"Bucket number is not specified"}),"\n",(0,s.jsxs)(t.p,{children:["Create a table named ",(0,s.jsx)(t.code,{children:"example_table"})," with no bucket number specified in DISTRIBUTED BY."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Run SHOW CREATE TABLE to display the CREATE TABLE statement of ",(0,s.jsx)(t.code,{children:"example_table"}),". No bucket number is displayed in DISTRIBUTED BY. Note that if you did not specify PROPERTIES when you create the table, the default properties are displayed in the output of SHOW CREATE TABLE."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:'SHOW CREATE TABLE example_table\\G\n*************************** 1. row ***************************\n       Table: example_table\nCreate Table: CREATE TABLE `example_table` (\n  `k1` tinyint(4) NULL COMMENT "",\n  `k2` decimal64(10, 2) NULL DEFAULT "10.5" COMMENT "",\n  `v1` char(10) REPLACE NULL COMMENT "",\n  `v2` int(11) SUM NULL COMMENT ""\n) ENGINE=OLAP \nAGGREGATE KEY(`k1`, `k2`)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(`k1`)\nPROPERTIES (\n"replication_num" = "3",\n"in_memory" = "false",\n"enable_persistent_index" = "false",\n"replicated_storage" = "true",\n"compression" = "LZ4"\n);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"bucket-number-is-specified",children:"Bucket number is specified"}),"\n",(0,s.jsxs)(t.p,{children:["Create a table named ",(0,s.jsx)(t.code,{children:"example_table1"})," with bucket number set to 10 in DISTRIBUTED BY."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE example_table1\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1) BUCKETS 10;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Run SHOW CREATE TABLE to display the CREATE TABLE statement of ",(0,s.jsx)(t.code,{children:"example_table"}),". The bucket number (",(0,s.jsx)(t.code,{children:"BUCKETS 10"}),") is displayed in DISTRIBUTED BY. Note that if you did not specify PROPERTIES when you create the table, the default properties are displayed in the output of SHOW CREATE TABLE."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",children:'SHOW CREATE TABLE example_table1\\G\n*************************** 1. row ***************************\n       Table: example_table1\nCreate Table: CREATE TABLE `example_table1` (\n  `k1` tinyint(4) NULL COMMENT "",\n  `k2` decimal64(10, 2) NULL DEFAULT "10.5" COMMENT "",\n  `v1` char(10) REPLACE NULL COMMENT "",\n  `v2` int(11) SUM NULL COMMENT ""\n) ENGINE=OLAP \nAGGREGATE KEY(`k1`, `k2`)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(`k1`) BUCKETS 10 \nPROPERTIES (\n"replication_num" = "3",\n"in_memory" = "false",\n"enable_persistent_index" = "false",\n"replicated_storage" = "true",\n"compression" = "LZ4"\n);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE TABLE"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20TABLES",children:"SHOW TABLES"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"ALTER%20TABLE.md",children:"ALTER TABLE"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"DROP%20TABLE.md",children:"DROP TABLE"})}),"\n"]})]})}const E=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:l},t)}}}]);