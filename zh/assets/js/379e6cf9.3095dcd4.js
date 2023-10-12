"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3363],{13297:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=s(85893),t=s(11151);const c={displayed_sidebar:"Chinese31"},i="unnest",l={id:"sql-reference/sql-functions/array-functions/unnest",title:"unnest",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/array-functions/unnest.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/unnest",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/unnest",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/unnest.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"reverse",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/reverse"},next:{title:"bit_shift_left",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bit-functions/bit_shift_left"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"<strong>\u793a\u4f8b</strong>",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00\uff1aUNNEST \u63a5\u6536\u4e00\u4e2a\u53c2\u6570",id:"\u793a\u4f8b\u4e00unnest-\u63a5\u6536\u4e00\u4e2a\u53c2\u6570",level:3},{value:"\u793a\u4f8b\u4e8c\uff1aUNNEST \u63a5\u6536\u591a\u4e2a\u53c2\u6570",id:"\u793a\u4f8b\u4e8cunnest-\u63a5\u6536\u591a\u4e2a\u53c2\u6570",level:3}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"unnest",children:"unnest"}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"UNNEST \u662f\u4e00\u79cd\u8868\u51fd\u6570 (table function)\uff0c\u7528\u4e8e\u5c06\u4e00\u4e2a\u6570\u7ec4\u5c55\u5f00\u6210\u591a\u884c\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u5c06 StarRocks \u7684 Lateral Join \u4e0e UNNEST \u529f\u80fd\u7ed3\u5408\u4f7f\u7528\uff0c\u5b9e\u73b0\u5e38\u89c1\u7684\u5217\u8f6c\u884c\u903b\u8f91\uff0c\u6bd4\u5982\u5c55\u5f00 STRING\uff0cARRAY\uff0c\u548c BITMAP \u7c7b\u578b\u7684\u6570\u636e\u3002\u66f4\u591a\u4f7f\u7528\u793a\u4f8b\uff0c\u53c2\u89c1 ",(0,r.jsx)(e.a,{href:"/doc/zh/docs/2.5/using_starrocks/Lateral_join",children:"Lateral join"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4ece 2.5 \u7248\u672c\u5f00\u59cb\uff0cUNNEST \u652f\u6301\u4f20\u5165\u591a\u4e2a array \u53c2\u6570\uff0c\u5e76\u4e14\u591a\u4e2a array \u7684\u5143\u7d20\u7c7b\u578b\u548c\u957f\u5ea6\uff08\u5143\u7d20\u4e2a\u6570\uff09\u53ef\u4ee5\u4e0d\u540c\u3002\u5bf9\u4e8e\u957f\u5ea6\u4e0d\u540c\u7684\u60c5\u51b5\uff0c\u4ee5\u6700\u957f\u6570\u7ec4\u7684\u957f\u5ea6\u4e3a\u57fa\u51c6\uff0c\u957f\u5ea6\u5c0f\u4e8e\u8fd9\u4e2a\u957f\u5ea6\u7684\u6570\u7ec4\u4f7f\u7528 NULL \u8fdb\u884c\u5143\u7d20\u8865\u5145\uff0c\u53c2\u89c1 ",(0,r.jsx)(e.a,{href:"#%E7%A4%BA%E4%BE%8B%E4%BA%8Cunnest-%E6%8E%A5%E6%94%B6%E5%A4%9A%E4%B8%AA%E5%8F%82%E6%95%B0",children:"\u793a\u4f8b\u4e8c"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Haskell",children:"unnest(array0[, array1 ...])\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"array"}),"\uff1a\u5f85\u8f6c\u6362\u7684\u6570\u7ec4\u6216\u8005\u80fd\u8f6c\u5316\u6210\u6570\u7ec4\u7684\u8868\u8fbe\u5f0f\uff0c\u5fc5\u586b\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u6570\u7ec4\u5c55\u5f00\u540e\u7684\u591a\u884c\u6570\u636e\u3002\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u53d6\u51b3\u4e8e\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u6709\u5173 StarRocks \u652f\u6301\u7684\u6570\u7ec4\u5143\u7d20\u7c7b\u578b\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(e.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-types/Array",children:"ARRAY"}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"UNNEST \u5fc5\u987b\u4e0e lateral join \u4e00\u8d77\u4f7f\u7528\uff0c\u4f46\u662f lateral join \u5173\u952e\u5b57\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u7701\u7565\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u8f93\u5165\u591a\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u957f\u5ea6\u548c\u7c7b\u578b\u53ef\u4ee5\u4e0d\u540c\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u8f93\u5165\u7684\u6570\u7ec4\u4e3a NULL \u6216 \u7a7a\uff0c\u5219\u8ba1\u7b97\u65f6\u8df3\u8fc7\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u6570\u7ec4\u4e2d\u7684\u67d0\u4e2a\u5143\u7d20\u4e3a NULL\uff0c\u8be5\u5143\u7d20\u5bf9\u5e94\u7684\u4f4d\u7f6e\u8fd4\u56de NULL\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b"})}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00unnest-\u63a5\u6536\u4e00\u4e2a\u53c2\u6570",children:"\u793a\u4f8b\u4e00\uff1aUNNEST \u63a5\u6536\u4e00\u4e2a\u53c2\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:'-- \u521b\u5efa\u8868 student_score\uff0c\u5176\u4e2d scores \u4e3a ARRAY \u7c7b\u578b\u7684\u5217\u3002\nCREATE TABLE student_score\n(\n    `id` bigint(20) NULL COMMENT "",\n    `scores` ARRAY<int> NULL COMMENT ""\n)\nDUPLICATE KEY (id)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1;\n\n-- \u5411\u8868\u63d2\u5165\u6570\u636e\u3002\nINSERT INTO student_score VALUES\n(1, [80,85,87]),\n(2, [77, null, 89]),\n(3, null),\n(4, []),\n(5, [90,92]);\n\n--\u67e5\u8be2\u8868\u6570\u636e\u3002\nSELECT * FROM student_score ORDER BY id;\n+------+--------------+\n| id   | scores       |\n+------+--------------+\n|    1 | [80,85,87]   |\n|    2 | [77,null,89] |\n|    3 | NULL         |\n|    4 | []           |\n|    5 | [90,92]      |\n+------+--------------+\n\n-- \u5c06 scores \u5217\u4e2d\u7684\u6570\u7ec4\u5143\u7d20\u5c55\u5f00\u6210\u591a\u884c\u3002\nSELECT id, scores, unnest FROM student_score, unnest(scores);\n+------+--------------+--------+\n| id   | scores       | unnest |\n+------+--------------+--------+\n|    1 | [80,85,87]   |     80 |\n|    1 | [80,85,87]   |     85 |\n|    1 | [80,85,87]   |     87 |\n|    2 | [77,null,89] |     77 |\n|    2 | [77,null,89] |   NULL |\n|    2 | [77,null,89] |     89 |\n|    5 | [90,92]      |     90 |\n|    5 | [90,92]      |     92 |\n+------+--------------+--------+\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u5bf9\u4e8e ",(0,r.jsx)(e.code,{children:"id = 1"})," \u7684 ",(0,r.jsx)(e.code,{children:"scores"})," \u6570\u7ec4\uff0c\u6839\u636e\u5143\u7d20\u4e2a\u6570\u62c6\u6210\u4e86 3 \u884c\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"id = 2"}),"\u7684 ",(0,r.jsx)(e.code,{children:"scores"})," \u6570\u7ec4\u4e2d\u5305\u542b null \u5143\u7d20\uff0c\u5bf9\u5e94\u4f4d\u7f6e\u8fd4\u56de null\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"id = 3"})," \u548c ",(0,r.jsx)(e.code,{children:"id = 4"})," \u7684 ",(0,r.jsx)(e.code,{children:"scores"})," \u6570\u7ec4\u5206\u522b\u662f NULL \u548c \u7a7a\uff0c\u8ba1\u7b97\u65f6\u8df3\u8fc7\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8cunnest-\u63a5\u6536\u591a\u4e2a\u53c2\u6570",children:"\u793a\u4f8b\u4e8c\uff1aUNNEST \u63a5\u6536\u591a\u4e2a\u53c2\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:'-- \u521b\u5efa\u8868\u3002\nCREATE TABLE example_table (\nid varchar(65533) NULL COMMENT "",\ntype varchar(65533) NULL COMMENT "",\nscores ARRAY<int> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(id)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES (\n"replication_num" = "3");\n\n-- \u5411\u8868\u63d2\u5165\u6570\u636e\u3002\nINSERT INTO example_table VALUES\n("1", "typeA;typeB", [80,85,88]),\n("2", "typeA;typeB;typeC", [87,90,95]);\n\n-- \u67e5\u8be2\u8868\u4e2d\u6570\u636e\u3002\nSELECT * FROM example_table;\n+------+-------------------+------------+\n| id   | type              | scores     |\n+------+-------------------+------------+\n| 1    | typeA;typeB       | [80,85,88] |\n| 2    | typeA;typeB;typeC | [87,90,95] |\n+------+-------------------+------------+\n\n-- \u4f7f\u7528 UNNEST \u5c06 type \u548c scores \u8fd9\u4e24\u5217\u4e2d\u7684\u5143\u7d20\u5c55\u5f00\u4e3a\u591a\u884c\u3002\nSELECT id, unnest.type, unnest.scores\nFROM example_table, unnest(split(type, ";"), scores) as unnest(type,scores);\n+------+-------+--------+\n| id   | type  | scores |\n+------+-------+--------+\n| 1    | typeA |     80 |\n| 1    | typeB |     85 |\n| 1    | NULL  |     88 |\n| 2    | typeA |     87 |\n| 2    | typeB |     90 |\n| 2    | typeC |     95 |\n+------+-------+--------+\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"UNNEST"})," \u51fd\u6570\u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"type"})," \u5217\u548c ",(0,r.jsx)(e.code,{children:"scores"})," \u5217\u6570\u636e\u7c7b\u578b\u4e0d\u76f8\u540c\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"type"})," \u5217\u4e3a VARCHAR \u7c7b\u578b\uff0c\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u4f7f\u7528 split() \u51fd\u6570\u8f6c\u4e3a\u4e86 ARRAY \u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"id = 1"})," \u7684 ",(0,r.jsx)(e.code,{children:"type"}),' \u8f6c\u5316\u540e\u5f97\u5230\u6570\u7ec4 ["typeA","typeB"]\uff0c\u5305\u542b 2 \u4e2a\u5143\u7d20\uff1b',(0,r.jsx)(e.code,{children:"id = 2"})," \u7684 ",(0,r.jsx)(e.code,{children:"type"}),' \u8f6c\u5316\u540e\u5f97\u5230\u6570\u7ec4 ["typeA","typeB","typeC"]\uff0c\u5305\u542b 3 \u4e2a\u5143\u7d20\u3002\u4ee5\u6570\u7ec4\u6700\u957f\u957f\u5ea6 3 \u4e3a\u57fa\u51c6\uff0c\u5bf9 ["typeA","typeB"] \u8865\u5145\u4e86 NULL\u3002']})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(n){const e=r.useContext(t);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||i:c(n),r.createElement(t.Provider,{value:l},e)}}}]);