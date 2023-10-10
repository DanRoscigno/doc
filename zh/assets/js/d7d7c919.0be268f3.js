"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80588],{22555:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var t=s(85893),r=s(11151);const d={},i="SHOW INDEX",l={id:"sql-reference/sql-statements/Administration/SHOW INDEX",title:"SHOW INDEX",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/Administration/SHOW INDEX.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW INDEX",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW INDEX",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW INDEX.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW FULL COLUMNS",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW FULL COLUMNS"},next:{title:"SHOW PLUGINS",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW PLUGINS"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-index",children:"SHOW INDEX"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b\u7d22\u5f15\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u67e5\u770b\u6307\u5b9a\u8868\u7684\u6240\u6709 ",(0,t.jsx)(n.a,{href:"/zh/docs/3.0/using_starrocks/Bitmap_index",children:"Bitmap \u7d22\u5f15"}),"\u3002\u521b\u5efa bitmap \u7d22\u5f15\u4e3a\u5f02\u6b65\u8fc7\u7a0b\uff0c\u4f7f\u7528\u8be5\u8bed\u53e5\u53ea\u80fd\u67e5\u770b\u5230\u5df2\u7ecf\u521b\u5efa\u5b8c\u6210\u7684\u7d22\u5f15\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW INDEX[ES] FROM [db_name.]table_name [FROM db_name]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6216"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW KEY[S] FROM [db_name.]table_name [FROM db_name]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u8868\u540d\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e",children:"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"+---------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+\n| Table   | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment |\n+---------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key_name"}),(0,t.jsx)(n.td,{children:"\u7d22\u5f15\u540d\u79f0\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Column_name"}),(0,t.jsx)(n.td,{children:"\u521b\u5efa\u7d22\u5f15\u7684\u5217\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Index_type"}),(0,t.jsx)(n.td,{children:"\u7d22\u5f15\u7c7b\u578b\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Comment"}),(0,t.jsx)(n.td,{children:"\u7d22\u5f15\u5907\u6ce8\u3002"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u5f53\u524d\u4ec5\u652f\u6301\u67e5\u770b bitmap \u7d22\u5f15\uff0cbitmap \u7d22\u5f15\u7684\u76f8\u5173\u4fe1\u606f\u4ec5\u5305\u62ec\u4ee5\u4e0a\u56db\u4e2a\u53c2\u6570\u3002\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u5176\u4ed6\u53c2\u6570\u548c bitmap \u7d22\u5f15\u65e0\u5173\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u8868",(0,t.jsx)(n.code,{children:"sales_records"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"item_id"}),"\u5217\u521b\u5efa bitmap \u7d22\u5f15\uff0c\u7d22\u5f15\u540d\u79f0\u4e3a",(0,t.jsx)(n.code,{children:"index3"}),"\u3002\u8868",(0,t.jsx)(n.code,{children:"sales_records"}),"\u6240\u5c5e\u6570\u636e\u5e93\u4e3a",(0,t.jsx)(n.code,{children:"d0"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index3 ON sales_records (item_id) USING BITMAP COMMENT '';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b\u8868",(0,t.jsx)(n.code,{children:"sales_records"}),"\u7684\u6240\u6709\u7d22\u5f15\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"SHOW INDEX FROM d0.sales_records;\n\n+----------------------------------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+\n| Table                            | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment |\n+----------------------------------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+\n| default_cluster:d0.sales_records |            | index3   |              | item_id     |           |             |          |        |      | BITMAP     | NULL    |\n+----------------------------------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6216"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"SHOW KEY FROM sales_records FROM d0;\n\n+----------------------------------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+\n| Table                            | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment |\n+----------------------------------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+\n| default_cluster:d0.sales_records |            | index3   |              | item_id     |           |             |          |        |      | BITMAP     | NULL    |\n+----------------------------------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>d});var t=s(67294);const r=t.createContext({});function d(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:d(e),t.createElement(r.Provider,{value:l},n)}}}]);