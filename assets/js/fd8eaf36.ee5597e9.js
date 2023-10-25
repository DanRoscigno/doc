"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98904],{56989:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(85893),r=t(11151);const a={displayed_sidebar:"English"},i="Lateral Join",l={id:"using_starrocks/Lateral_join",title:"Lateral Join",description:"Background",source:"@site/versioned_docs/version-2.2/using_starrocks/Lateral_join.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Lateral_join",permalink:"/docs/2.2/using_starrocks/Lateral_join",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Lateral_join.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Cost Based Optimizer",permalink:"/docs/2.2/using_starrocks/Cost_based_optimizer"},next:{title:"Materialized view",permalink:"/docs/2.2/using_starrocks/Materialized_view"}},o={},c=[{value:"Background",id:"background",level:2},{value:"Instructions for use",id:"instructions-for-use",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"Caution",id:"caution",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",img:"img",ul:"ul",li:"li"},(0,r.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"lateral-join",children:"Lateral Join"}),"\n",(0,s.jsx)(e.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(e.p,{children:"Row-to-column conversion is a common operation in ETL processing. Lateral is a special Join keyword that can associate a row with an internal subquery or table function. By using Lateral in conjunction with unnest, we can implement conversion from one-row to multi-row."}),"\n",(0,s.jsx)(e.h2,{id:"instructions-for-use",children:"Instructions for use"}),"\n",(0,s.jsx)(e.p,{children:"To use lateral join, you need to open the new version of optimizer:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"set global enable_cbo = true;\n"})}),"\n",(0,s.jsx)(e.p,{children:"Syntax:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"from table_reference join [lateral] table_reference\n"})}),"\n",(0,s.jsx)(e.p,{children:"The Unnest keyword is a table function that converts an array into multiple rows.Together with Lateral Join, it can implement our common row expansion logic."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"SELECT student, score\nFROM tests\nCROSS JOIN LATERAL UNNEST(scores) AS t (score);\n\nSELECT student, score\nFROM tests, UNNEST(scores) AS t (score);\n"})}),"\n",(0,s.jsx)(e.p,{children:"The second syntax here is a shortened version of the first one, where the Lateral Join can be omitted using the Unnest keyword."}),"\n",(0,s.jsx)(e.h2,{id:"usage-examples",children:"Usage examples"}),"\n",(0,s.jsxs)(e.p,{children:["The current version of StarRocks supports  type transformation between Bitmap, String, Array, and Column.\n",(0,s.jsx)(e.img,{alt:"Some conversions between types in Lateral Join",src:t(33556).Z+"",width:"1044",height:"610"})]}),"\n",(0,s.jsx)(e.p,{children:"Together with Unnest, we can achieve the following features:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Expanding a string into multiple lines"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test2 (\n    `v1` bigint(20) NULL COMMENT "",\n    `v2` string NULL COMMENT ""\n)\nduplicate key(v1)\nDISTRIBUTED BY HASH(`v1`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1",\n    "in_memory" = "false",\n    "storage_format" = "DEFAULT"\n);\n\ninsert into lateral_test2 values (1, "1,2,3"), (2, "1,3");\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'select * from lateral_test2;\n\n+------+-------+\n| v1   | v2    |\n+------+-------+\n|    1 | 1,2,3 |\n|    2 | 1,3   |\n+------+-------+\n\n\nselect v1,unnest from lateral_test2 , unnest(split(v2, ",")) ;\n\n+------+--------+\n| v1   | unnest |\n+------+--------+\n|    1 | 1      |\n|    1 | 2      |\n|    1 | 3      |\n|    2 | 1      |\n|    2 | 3      |\n+------+--------+\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Expanding an array into multiple rows"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test (\n    `v1` bigint(20) NULL COMMENT "",\n    `v2` ARRAY NULL COMMENT ""\n) \nduplicate key(v1)\nDISTRIBUTED BY HASH(`v1`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1",\n    "in_memory" = "false",\n    "storage_format" = "DEFAULT"\n);\n\ninsert into lateral_test values (1, [1,2]), (2, [1, null, 3]), (3, null);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select * from lateral_test;\n\n+------+------------+\n| v1   | v2         |\n+------+------------+\n|    1 | [1,2]      |\n|    2 | [1,null,3] |\n|    3 | NULL       |\n+------+------------+\n\n\nselect v1,v2,unnest from lateral_test , unnest(v2) ;\n\n+------+------------+--------+\n| v1   | v2         | unnest |\n+------+------------+--------+\n|    1 | [1,2]      |      1 |\n|    1 | [1,2]      |      2 |\n|    2 | [1,null,3] |      1 |\n|    2 | [1,null,3] |   NULL |\n|    2 | [1,null,3] |      3 |\n+------+------------+--------+\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Transforming Bitmap output"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE lateral_test3 (\n`v1` bigint(20) NULL COMMENT "",\n`v2` Bitmap BITMAP_UNION COMMENT ""\n)\nAggregate key(v1)\nDISTRIBUTED BY HASH(`v1`) BUCKETS 1;\n\ninsert into lateral_test3 values (1, bitmap_from_string(\'1, 2\')), (2, to_bitmap(3));\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select v1, bitmap_to_string(v2) from lateral_test3;\n\n+------+------------------------+\n| v1   | bitmap_to_string(`v2`) |\n+------+------------------------+\n|    1 | 1,2                    |\n|    2 | 3                      |\n+------+------------------------+\n\n\ninsert into lateral_test3 values (1, to_bitmap(3));\n\nselect v1, bitmap_to_string(v2) from lateral_test3;\n\n+------+------------------------+\n| v1   | bitmap_to_string(`v2`) |\n+------+------------------------+\n|    1 | 1,2,3                  |\n|    2 | 3                      |\n+------+------------------------+\n\n\nselect v1,unnest from lateral_test3 , unnest(bitmap_to_array(v2)) ;\n\n+------+--------+\n| v1   | unnest |\n+------+--------+\n|    1 |      1 |\n|    1 |      2 |\n|    1 |      3 |\n|    2 |      3 |\n+------+--------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"caution",children:"Caution"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Currently, Lateral join is only used with Unnest to achieve row-to-column conversion. Other table functions / UDTF will be supported later."}),"\n",(0,s.jsx)(e.li,{children:"Currently, Lateral join does not support subqueries."}),"\n"]})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)}},33556:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/6.9.1-270680dd532a5190190c8a7fff2e5e18.png"},11151:(n,e,t)=>{t.d(e,{Zo:()=>l,ah:()=>a});var s=t(67294);const r=s.createContext({});function a(n){const e=s.useContext(r);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function l({components:n,children:e,disableParentContext:t}){let l;return l=t?"function"==typeof n?n({}):n||i:a(n),s.createElement(r.Provider,{value:l},e)}}}]);