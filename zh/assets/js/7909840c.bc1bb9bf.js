"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45136],{25853:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=s(85893),t=s(11151);const a={displayed_sidebar:"Chinese31"},r="SHOW CREATE TABLE",i={id:"sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",title:"SHOW CREATE TABLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"SHOW CREATE MATERIALIZED VIEW",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_MATERIALIZED_VIEW"},next:{title:"SHOW CREATE VIEW",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW"}},d={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5efa\u8868\u65f6\u672a\u6307\u5b9a\u5206\u6876\u6570",id:"\u5efa\u8868\u65f6\u672a\u6307\u5b9a\u5206\u6876\u6570",level:3},{value:"\u5efa\u8868\u65f6\u6307\u5b9a\u4e86\u5206\u6876\u6570",id:"\u5efa\u8868\u65f6\u6307\u5b9a\u4e86\u5206\u6876\u6570",level:3}];function E(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,t.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"show-create-table",children:"SHOW CREATE TABLE"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u6307\u5b9a\u8868\u7684\u5efa\u8868\u8bed\u53e5\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u81ea 2.5.7 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u5728\u5efa\u8868\u548c\u65b0\u589e\u5206\u533a\u65f6\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf (BUCKETS)\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/2.5/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u60a8\u5728\u5efa\u8868\u65f6\u6307\u5b9a\u4e86\u5206\u6876\u6570\uff0cSHOW CREATE TABLE \u7684\u7ed3\u679c\u4f1a\u663e\u793a\u5206\u6876\u6570\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5728\u5efa\u8868\u65f6\u6ca1\u6709\u6307\u5b9a\u5206\u6876\u6570\uff0cSHOW CREATE TABLE \u4e0d\u4f1a\u663e\u793a\u5206\u6876\u6570\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",children:"SHOW PARTITIONS"})," \u67e5\u770b\u5206\u533a\u7684\u5206\u6876\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"2.5.7 \u4e4b\u524d\u7684\u7248\u672c\u5728\u5efa\u8868\u65f6\u5fc5\u987b\u8bbe\u7f6e\u5206\u6876\u6570\uff0c\u56e0\u6b64 SHOW CREATE TABLE \u4f1a\u663e\u793a\u5206\u6876\u6570\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ea\u6709\u62e5\u6709\u8be5\u8868 SELECT_PRIV \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u67e5\u770b\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW CREATE TABLE [db_name.]table_name\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"db_name"}),(0,l.jsx)(n.td,{children:"\u5426"}),(0,l.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u6307\u5b9a\uff0c\u5219\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u67d0\u5f20\u8868\u7684\u5efa\u8868\u8bed\u53e5\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"table_name"}),(0,l.jsx)(n.td,{children:"\u662f"}),(0,l.jsx)(n.td,{children:"\u8868\u540d\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",children:"+-----------+----------------+\n| Table     | Create Table   |       \n+-----------+----------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Table"}),(0,l.jsx)(n.td,{children:"\u8868\u540d\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Create Table"}),(0,l.jsx)(n.td,{children:"\u5efa\u8868\u8bed\u53e5\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u5efa\u8868\u65f6\u672a\u6307\u5b9a\u5206\u6876\u6570",children:"\u5efa\u8868\u65f6\u672a\u6307\u5b9a\u5206\u6876\u6570"}),"\n",(0,l.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u8868 ",(0,l.jsx)(n.code,{children:"example_table"}),"\uff0cDISTRIBUTED BY \u4e2d\u672a\u6307\u5b9a\u5206\u6876\u6570\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1) BUCKETS 10;\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u67e5\u770b\u8868 ",(0,l.jsx)(n.code,{children:"example_table"})," \u7684\u5efa\u8868\u8bed\u53e5\uff0c\u7ed3\u679c\u4e2d\u4e0d\u663e\u793a\u5206\u6876\u6570\u3002\u6ce8\u610f\u5efa\u8868\u65f6\u5982\u679c\u672a\u6307\u5b9a PROPERTIES\uff0cSHOW CREATE TABLE \u8bed\u53e5\u4f1a\u663e\u793a\u9ed8\u8ba4\u7684 PROPERTIES\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",children:'SHOW CREATE TABLE example_table\\G\n*************************** 1. row ***************************\n       Table: example_table\nCreate Table: CREATE TABLE `example_table` (\n  `k1` tinyint(4) NULL COMMENT "",\n  `k2` decimal64(10, 2) NULL DEFAULT "10.5" COMMENT "",\n  `v1` char(10) REPLACE NULL COMMENT "",\n  `v2` int(11) SUM NULL COMMENT ""\n) ENGINE=OLAP \nAGGREGATE KEY(`k1`, `k2`)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(`k1`)\nPROPERTIES (\n"replication_num" = "3",\n"in_memory" = "false",\n"enable_persistent_index" = "false",\n"replicated_storage" = "true",\n"compression" = "LZ4"\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u5efa\u8868\u65f6\u6307\u5b9a\u4e86\u5206\u6876\u6570",children:"\u5efa\u8868\u65f6\u6307\u5b9a\u4e86\u5206\u6876\u6570"}),"\n",(0,l.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u8868 ",(0,l.jsx)(n.code,{children:"example_table1"}),"\uff0cDISTRIBUTED BY \u4e2d\u6307\u5b9a\u5206\u6876\u6570\u4e3a 10\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_table1\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1) BUCKETS 10;\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u67e5\u770b\u8868 ",(0,l.jsx)(n.code,{children:"example_table"})," \u7684\u5efa\u8868\u8bed\u53e5\uff0c\u7ed3\u679c\u4e2d\u663e\u793a\u5206\u6876\u6570\u3002\u6ce8\u610f\u5efa\u8868\u65f6\u5982\u679c\u672a\u6307\u5b9a PROPERTIES\uff0cSHOW CREATE TABLE \u8bed\u53e5\u4f1a\u663e\u793a\u9ed8\u8ba4\u7684 PROPERTIES\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",children:'SHOW CREATE TABLE example_table1\\G\n*************************** 1. row ***************************\n       Table: example_table1\nCreate Table: CREATE TABLE `example_table1` (\n  `k1` tinyint(4) NULL COMMENT "",\n  `k2` decimal64(10, 2) NULL DEFAULT "10.5" COMMENT "",\n  `v1` char(10) REPLACE NULL COMMENT "",\n  `v2` int(11) SUM NULL COMMENT ""\n) ENGINE=OLAP \nAGGREGATE KEY(`k1`, `k2`)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(`k1`) BUCKETS 10 \nPROPERTIES (\n"replication_num" = "3",\n"in_memory" = "false",\n"enable_persistent_index" = "false",\n"replicated_storage" = "true",\n"compression" = "LZ4"\n);\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(E,e)})):E(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>a});var l=s(67294);const t=l.createContext({});function a(e){const n=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:a(e),l.createElement(t.Provider,{value:i},n)}}}]);