"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76863],{23717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=t(85893),a=t(11151);const l={displayed_sidebar:"Chinese"},r="SHOW CREATE TABLE",d={id:"sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",title:"SHOW CREATE TABLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW BACKUP",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP"},next:{title:"SHOW CREATE VIEW",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW"}},i={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-create-table",children:"SHOW CREATE TABLE"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u6307\u5b9a\u8868\u7684\u5efa\u8868\u8bed\u53e5\u3002\u53ea\u6709\u62e5\u6709\u8be5\u8868",(0,s.jsx)(n.code,{children:"SELECT_PRIV"}),"\u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u67e5\u770b\u3002\u6ce8\u610f\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/zh/docs/2.3/data_source/Manage_data",children:"external catalog"})," \u7ba1\u7406\u7684\u8868\uff0c\u5982 Apache Hive\u2122 \u8868\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u8be5\u8bed\u53e5\u67e5\u770b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW CREATE TABLE [db_name.]table_name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db_name"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u6307\u5b9a\uff0c\u5219\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u67d0\u5f20\u8868\u7684\u5efa\u8868\u8bed\u53e5\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"table_name"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u8868\u540d\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"+-----------+----------------+\n| Table     | Create Table   |       \n+-----------+----------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u8868\u540d\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Create Table"}),(0,s.jsx)(n.td,{children:"\u5efa\u8868\u8bed\u53e5\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u8868",(0,s.jsx)(n.code,{children:"example_table"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1) BUCKETS 10;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u8868",(0,s.jsx)(n.code,{children:"example_table"}),"\u7684\u5efa\u8868\u8bed\u53e5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'SHOW CREATE TABLE example_db.example_table;\n\n+---------------+--------------------------------------------------------+\n| Table         | Create Table                                           |\n+---------------+--------------------------------------------------------+\n| example_table | CREATE TABLE `example_table` (\n  `k1` tinyint(4) NULL COMMENT "",\n  `k2` decimal64(10, 2) NULL DEFAULT "10.5" COMMENT "",\n  `v1` char(10) REPLACE NULL COMMENT "",\n  `v2` int(11) SUM NULL COMMENT ""\n) ENGINE=OLAP \nAGGREGATE KEY(`k1`, `k2`)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(`k1`) BUCKETS 10 \nPROPERTIES (\n"replication_num" = "3",\n"storage_format" = "DEFAULT",\n"enable_persistent_index" = "false"\n); |\n+---------------+----------------------------------------------------------+\n'})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>l});var s=t(67294);const a=s.createContext({});function l(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||r:l(e),s.createElement(a.Provider,{value:d},n)}}}]);