"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77058],{51304:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=s(85893),r=s(11151);const a={displayed_sidebar:"English"},i="Use Lateral Join for column-to-row conversion",l={id:"using_starrocks/Lateral_join",title:"Use Lateral Join for column-to-row conversion",description:"Column-to-row conversion is a common operation in ETL processing. Lateral is a special Join keyword that can associate a row with an internal subquery or table function. By using Lateral in conjunction with unnest(), you can expand one row into multiple rows. For more information, see unnest.",source:"@site/versioned_docs/version-2.3/using_starrocks/Lateral_join.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Lateral_join",permalink:"/docs/2.3/using_starrocks/Lateral_join",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Lateral_join.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Cost Based Optimizer",permalink:"/docs/2.3/using_starrocks/Cost_based_optimizer"},next:{title:"Materialized view",permalink:"/docs/2.3/using_starrocks/Materialized_view"}},o={},c=[{value:"Limits",id:"limits",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use Lateral Join",id:"use-lateral-join",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"Expand a string into multiple rows",id:"expand-a-string-into-multiple-rows",level:3},{value:"Expand an array into multiple rows",id:"expand-an-array-into-multiple-rows",level:3},{value:"Expand Bitmap data",id:"expand-bitmap-data",level:3}];function d(n){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",h3:"h3",ol:"ol"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"use-lateral-join-for-column-to-row-conversion",children:"Use Lateral Join for column-to-row conversion"}),"\n",(0,t.jsxs)(e.p,{children:["Column-to-row conversion is a common operation in ETL processing. Lateral is a special Join keyword that can associate a row with an internal subquery or table function. By using Lateral in conjunction with unnest(), you can expand one row into multiple rows. For more information, see ",(0,t.jsx)(e.a,{href:"/docs/2.3/sql-reference/sql-functions/array-functions/unnest",children:"unnest"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"limits",children:"Limits"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Currently, Lateral Join is only used with unnest() to achieve column-to-row conversion. Other table functions and UDTFs will be supported later."}),"\n",(0,t.jsx)(e.li,{children:"Currently, Lateral Join does not support subqueries."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(e.p,{children:"To use Lateral Join, you must use the new version of optimizer:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"set global enable_cbo = true;\n"})}),"\n",(0,t.jsx)(e.h2,{id:"use-lateral-join",children:"Use Lateral Join"}),"\n",(0,t.jsx)(e.p,{children:"Syntax:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"from table_reference join [lateral] table_reference;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Examples:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"SELECT student, score\nFROM tests\nCROSS JOIN LATERAL UNNEST(scores) AS t (score);\n\nSELECT student, score\nFROM tests, UNNEST(scores) AS t (score);\n"})}),"\n",(0,t.jsx)(e.p,{children:"The second syntax here is a shortened version of the first one, where the Lateral keyword can be omitted using the UNNEST keyword. The UNNEST keyword is a table function that converts an array into multiple rows. Together with Lateral Join, it can implement common row expansion logic."}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(e.p,{children:["If you want to perform unnest on multiple volumns, you must specify an alias for each column, for example, ",(0,t.jsx)(e.code,{children:"select v1, t1.unnest as v2, t2.unnest as v3 from lateral_test, unnest(v2) t1, unnest(v3) t2;"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"The current version of StarRocks supports type conversion between Bitmap, String, Array, and Column."}),"\n",(0,t.jsx)(e.h2,{id:"usage-examples",children:"Usage examples"}),"\n",(0,t.jsx)(e.p,{children:"Together with unnest(), you can achieve the following column-to-row conversion features:"}),"\n",(0,t.jsx)(e.h3,{id:"expand-a-string-into-multiple-rows",children:"Expand a string into multiple rows"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Create a table and insert data into this table."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test2 (\n    `v1` bigint(20) NULL COMMENT "",\n    `v2` string NULL COMMENT ""\n)\nDUPLICATE KEY(v1)\nDISTRIBUTED BY HASH(`v1`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1",\n    "in_memory" = "false",\n    "storage_format" = "DEFAULT"\n);\n\nINSERT INTO lateral_test2 VALUES (1, "1,2,3"), (2, "1,3");\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Query data before expansion."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select * from lateral_test2;\n\n+------+-------+\n| v1   | v2    |\n+------+-------+\n|    1 | 1,2,3 |\n|    2 | 1,3   |\n+------+-------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Expand ",(0,t.jsx)(e.code,{children:"v2"})," into multiple rows."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'-- Perform unnest on a single column.\n\nselect v1,unnest from lateral_test2, unnest(split(v2, ","));\n\n+------+--------+\n| v1   | unnest |\n+------+--------+\n|    1 | 1      |\n|    1 | 2      |\n|    1 | 3      |\n|    2 | 1      |\n|    2 | 3      |\n+------+--------+\n\n-- Perform unnest on multiple columns. You must specify an alias for each operation.\n\nselect v1, t1.unnest as v2, t2.unnest as v3 from lateral_test2, unnest(split(v2, ",")) t1, unnest(split(v3, ",")) t2;\n\n+------+------+------+\n| v1   | v2   | v3   |\n+------+------+------+\n|    1 | 1    | 1    |\n|    1 | 1    | 2    |\n|    1 | 2    | 1    |\n|    1 | 2    | 2    |\n|    1 | 3    | 1    |\n|    1 | 3    | 2    |\n|    2 | 1    | 1    |\n|    2 | 1    | 3    |\n|    2 | 3    | 1    |\n|    2 | 3    | 3    |\n+------+------+------+\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"expand-an-array-into-multiple-rows",children:"Expand an array into multiple rows"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"From v2.5, unnest() can take multiple arrays of different types and lengths."})," For more information, see ",(0,t.jsx)(e.a,{href:"/docs/2.3/sql-reference/sql-functions/array-functions/unnest",children:"unnest()"}),"."]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Create a table and insert data into this table."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test (\n    `v1` bigint(20) NULL COMMENT "",\n    `v2` ARRAY NULL COMMENT ""\n) \nDUPLICATE KEY(v1)\nDISTRIBUTED BY HASH(`v1`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1",\n    "in_memory" = "false",\n    "storage_format" = "DEFAULT"\n);\n\nINSERT INTO lateral_test VALUES (1, [1,2]), (2, [1, null, 3]), (3, null);\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Query data before expansion."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select * from lateral_test;\n\n+------+------------+\n| v1   | v2         |\n+------+------------+\n|    1 | [1,2]      |\n|    2 | [1,null,3] |\n|    3 | NULL       |\n+------+------------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Expand ",(0,t.jsx)(e.code,{children:"v2"})," into multiple rows."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select v1,v2,unnest from lateral_test , unnest(v2) ;\n\n+------+------------+--------+\n| v1   | v2         | unnest |\n+------+------------+--------+\n|    1 | [1,2]      |      1 |\n|    1 | [1,2]      |      2 |\n|    2 | [1,null,3] |      1 |\n|    2 | [1,null,3] |   NULL |\n|    2 | [1,null,3] |      3 |\n+------+------------+--------+\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"expand-bitmap-data",children:"Expand Bitmap data"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Create a table and insert data into this table."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test3 (\n`v1` bigint(20) NULL COMMENT "",\n`v2` Bitmap BITMAP_UNION COMMENT ""\n)\nAGGREGATE KEY(v1)\nDISTRIBUTED BY HASH(`v1`) BUCKETS 1;\n\nINSERT INTO lateral_test3 VALUES (1, bitmap_from_string(\'1, 2\')), (2, to_bitmap(3));\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Query data before expansion."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select v1, bitmap_to_string(v2) from lateral_test3;\n\n+------+------------------------+\n| v1   | bitmap_to_string(`v2`) |\n+------+------------------------+\n|    1 | 1,2                    |\n|    2 | 3                      |\n+------+------------------------+\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Insert a new row."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"insert into lateral_test3 values (1, to_bitmap(3));\n\nselect v1, bitmap_to_string(v2) from lateral_test3;\n\n+------+------------------------+\n| v1   | bitmap_to_string(`v2`) |\n+------+------------------------+\n|    1 | 1,2,3                  |\n|    2 | 3                      |\n+------+------------------------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Expand data in ",(0,t.jsx)(e.code,{children:"v2"})," into multiple rows."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select v1,unnest from lateral_test3 , unnest(bitmap_to_array(v2));\n\n+------+--------+\n| v1   | unnest |\n+------+--------+\n|    1 |      1 |\n|    1 |      2 |\n|    1 |      3 |\n|    2 |      3 |\n+------+--------+\n"})}),"\n"]}),"\n"]})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||i:a(n),t.createElement(r.Provider,{value:l},e)}}}]);