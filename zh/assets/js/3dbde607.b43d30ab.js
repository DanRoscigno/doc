"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75420],{34295:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>T,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var c=s(85893),t=s(11151);const r={},l="STRUCT",a={id:"sql-reference/sql-statements/data-types/STRUCT",title:"STRUCT",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-types/STRUCT.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/STRUCT",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/STRUCT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/STRUCT.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"MAP",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/Map"},next:{title:"\u5176\u4ed6\u7c7b\u578b",permalink:"/doc/zh/docs/category/\u5176\u4ed6\u7c7b\u578b"}},d={},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u5b9a\u4e49 STRUCT \u7c7b\u578b\u5217",id:"\u5b9a\u4e49-struct-\u7c7b\u578b\u5217",level:2},{value:"\u4f7f\u7528 SQL \u6784\u5efa STRUCT",id:"\u4f7f\u7528-sql-\u6784\u5efa-struct",level:2},{value:"\u5bfc\u5165 STRUCT \u7c7b\u578b\u6570\u636e",id:"\u5bfc\u5165-struct-\u7c7b\u578b\u6570\u636e",level:2},{value:"INSERT INTO \u5bfc\u5165",id:"insert-into-\u5bfc\u5165",level:3},{value:"\u4ece ORC \u548c Parquet \u6587\u4ef6\u5bfc\u5165",id:"\u4ece-orc-\u548c-parquet-\u6587\u4ef6\u5bfc\u5165",level:3},{value:"\u67e5\u8be2 STRUCT \u6570\u636e",id:"\u67e5\u8be2-struct-\u6570\u636e",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"struct",children:"STRUCT"}),"\n",(0,c.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,c.jsxs)(n.p,{children:["STRUCT \u662f\u4e00\u79cd\u590d\u6742\u6570\u636e\u7c7b\u578b\uff0c\u53ef\u4ee5\u5b58\u50a8\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u7684\u5143\u7d20\uff08\u4e5f\u79f0\u5b57\u6bb5\uff09\uff0c\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"<a INT, b STRING>"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"Struct \u4e2d\u7684\u5b57\u6bb5\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\u3002\u5b57\u6bb5\u53ef\u4ee5\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b (Primitive Type)\uff0c\u4f8b\u5982\u6570\u503c\u3001\u5b57\u7b26\u4e32\u3001\u65e5\u671f\u7c7b\u578b\uff1b\u4e5f\u53ef\u4ee5\u662f\u590d\u6742\u6570\u636e\u7c7b\u578b\uff0c\u4f8b\u5982 ARRAY \u6216 MAP\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["Struct \u4e2d\u7684\u5b57\u6bb5\u53ef\u4ee5\u662f\u53e6\u5916\u4e00\u4e2a Struct\uff0cMap\uff0c\u6216\u8005 Array\uff0c\u65b9\u4fbf\u7528\u6237\u5b9a\u4e49\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u3002\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"STRUCT<a INT, b STRUCT<c INT, d INT>, c MAP<INT, INT>, d ARRAY<INT>>"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301 STRUCT \u6570\u636e\u7c7b\u578b\u3002\u60a8\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u5b9a\u4e49 STRUCT \u5217\uff0c\u5411\u8868\u4e2d\u5bfc\u5165 STRUCT \u6570\u636e\uff0c\u67e5\u8be2 STRUCT \u6570\u636e\u3002"}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u67e5\u8be2\u6570\u636e\u6e56\u4e2d\u7684\u590d\u6742\u6570\u636e\u7c7b\u578b MAP \u548c STRUCT\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 StarRocks \u63d0\u4f9b\u7684 External Catalog \u65b9\u5f0f\u6765\u67e5\u8be2 Apache Hive\u2122\uff0cApache Hudi\uff0cApache Iceberg \u4e2d\u7684 MAP \u548c STRUCT \u6570\u636e\u3002\u4ec5\u652f\u6301\u67e5\u8be2 ORC \u548c Parquet \u7c7b\u578b\u6587\u4ef6\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 External Catalog \u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e90\uff0c\u53c2\u89c1 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/data_source/catalog/catalog_overview",children:"Catalog \u6982\u8ff0"})," \u548c\u5bf9\u5e94\u7684 Catalog \u6587\u6863\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"STRUCT<name type>\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"}),"\uff1a\u5b57\u6bb5\u540d\u79f0\uff0c\u548c\u5efa\u8868\u8bed\u53e5\u4e2d\u7684\u5217\u540d\u76f8\u540c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"type"}),"\uff1a\u5b57\u6bb5\u7c7b\u578b\u3002\u53ef\u4ee5\u662f StarRocks \u652f\u6301\u7684\u4efb\u610f\u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5b9a\u4e49-struct-\u7c7b\u578b\u5217",children:"\u5b9a\u4e49 STRUCT \u7c7b\u578b\u5217"}),"\n",(0,c.jsx)(n.p,{children:"\u5efa\u8868\u65f6\u53ef\u4ee5\u5728 CREATE TABLE \u8bed\u53e5\u4e2d\u5b9a\u4e49 STRUCT \u7c7b\u578b\u7684\u5217\uff0c\u540e\u7eed\u5bfc\u5165 STRUCT \u6570\u636e\u5230\u8be5\u5217\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"-- \u5b9a\u4e49\u7b80\u5355 struct\u3002\nCREATE TABLE t0(\n  c0 INT,\n  c1 STRUCT<a INT, b INT>\n)\nDUPLICATE KEY(c0);\n\n-- \u5b9a\u4e49\u590d\u6742 struct\u3002\nCREATE TABLE t1(\n  c0 INT,\n  c1 STRUCT<a INT, b STRUCT<c INT, d INT>, c MAP<INT, INT>, d ARRAY<INT>>\n)\nDUPLICATE KEY(c0);\n\n-- \u5b9a\u4e49\u975e NULL struct\u3002\nCREATE TABLE t2(\n  c0 INT,\n  c1 STRUCT<a INT, b INT> NOT NULL\n)\nDUPLICATE KEY(c0);\n"})}),"\n",(0,c.jsx)(n.p,{children:"STRUCT \u5217\u6709\u5982\u4e0b\u4f7f\u7528\u9650\u5236\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u4f5c\u4e3a\u8868\u7684 Key \u5217\uff0c\u53ea\u80fd\u4f5c\u4e3a Value \u5217\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u4f5c\u4e3a\u8868\u7684\u5206\u533a\u5217\uff08PARTITION BY \u4e2d\u5b9a\u4e49\u7684\u5217\uff09\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u4f5c\u4e3a\u8868\u7684\u5206\u6876\u5217 \uff08DISTRIBUTED BY \u4e2d\u5b9a\u4e49\u7684\u5217\uff09\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["STRUCT \u4f5c\u4e3a",(0,c.jsx)(n.a,{href:"/doc/zh/docs/table_design/table_types/aggregate_table",children:"\u805a\u5408\u6a21\u578b\u8868"}),"\u7684 Value \u5217\u65f6\uff0c\u4ec5\u652f\u6301 replace() \u4f5c\u4e3a\u805a\u5408\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528-sql-\u6784\u5efa-struct",children:"\u4f7f\u7528 SQL \u6784\u5efa STRUCT"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/struct-functions/row",children:"row/struct"})," \u6216 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/struct-functions/named_struct",children:"named_struct"})," \u51fd\u6570\u6765\u6784\u5efa Struct\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"row"})," \u548c ",(0,c.jsx)(n.code,{children:"struct"})," \u529f\u80fd\u76f8\u540c\uff0c\u652f\u6301 unnamed struct \uff08\u672a\u6307\u5b9a\u5b57\u6bb5\u540d\u79f0\uff09\u3002\u5b57\u6bb5\u540d\u79f0\u7531 StarRocks \u81ea\u52a8\u751f\u6210\uff0c\u6bd4\u5982 ",(0,c.jsx)(n.code,{children:"col1, col2,...colN"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"named_struct"})," \u652f\u6301 named struct \uff08\u6307\u5b9a\u4e86\u5b57\u6bb5\u540d\u79f0\uff09\u3002 Key \u548c Value \u8868\u8fbe\u5f0f\u5fc5\u987b\u6210\u5bf9\u51fa\u73b0\uff0c\u5426\u5219\u6784\u5efa\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u6839\u636e\u8f93\u5165\u7684\u503c\u81ea\u52a8\u786e\u5b9a Struct \u7684\u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'select row(1, 2, 3, 4) as numbers; -- \u8fd4\u56de {"col1":1,"col2":2,"col3":3,"col4":4}\u3002\nselect row(1, 2, null, 4) as numbers; -- \u8fd4\u56de {"col1":1,"col2":2,"col3":null,"col4":4}\u3002\nselect row(null) as nulls; -- \u8fd4\u56de {"col1":null}\u3002\nselect struct(1, 2, 3, 4) as numbers; -- \u8fd4\u56de {"col1":1,"col2":2,"col3":3,"col4":4}\u3002\nselect named_struct(\'a\', 1, \'b\', 2, \'c\', 3, \'d\', 4) as numbers; -- \u8fd4\u56de {"a":1,"b":2,"c":3,"d":4}\u3002\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u5bfc\u5165-struct-\u7c7b\u578b\u6570\u636e",children:"\u5bfc\u5165 STRUCT \u7c7b\u578b\u6570\u636e"}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u65b9\u5f0f\u5bfc\u5165 STRUCT \u6570\u636e\u5230 StarRocks\uff1a",(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT INTO"})," \u548c ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"ORC/Parquet \u6587\u4ef6\u5bfc\u5165"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5bfc\u5165\u8fc7\u7a0b\u4e2d StarRocks \u4f1a\u5bf9\u91cd\u590d\u7684 Key \u503c\u8fdb\u884c\u5220\u9664\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"insert-into-\u5bfc\u5165",children:"INSERT INTO \u5bfc\u5165"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE t0(\n  c0 INT,\n  c1 STRUCT<a INT, b INT>\n)\nDUPLICATE KEY(c0);\n\nINSERT INTO t0 VALUES(1, row(1, 1));\n\nSELECT * FROM t0;\n+------+---------------+\n| c0   | c1            |\n+------+---------------+\n|    1 | {"a":1,"b":1} |\n+------+---------------+\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u4ece-orc-\u548c-parquet-\u6587\u4ef6\u5bfc\u5165",children:"\u4ece ORC \u548c Parquet \u6587\u4ef6\u5bfc\u5165"}),"\n",(0,c.jsxs)(n.p,{children:["StarRocks \u7684 STRUCT \u7c7b\u578b\u5bf9\u5e94 ORC \u548c Parquet \u683c\u5f0f\u4e2d\u7684\u5d4c\u5957\u5217 (nested columns structure)\uff0c\u65e0\u9700\u60a8\u505a\u989d\u5916\u7684\u8f6c\u6362\u6216\u5b9a\u4e49\u3002\u5177\u4f53\u5bfc\u5165\u64cd\u4f5c\uff0c\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load \u6587\u6863"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u67e5\u8be2-struct-\u6570\u636e",children:"\u67e5\u8be2 STRUCT \u6570\u636e"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"."})," \u64cd\u4f5c\u7b26\u6765\u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\u5bf9\u5e94\u7684\u503c\uff0c\u6216\u8005\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"[]"})," \u8fd4\u56de\u6307\u5b9a\u7d22\u5f15\u5bf9\u5e94\u7684\u503c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"mysql> select named_struct('a', 1, 'b', 2, 'c', 3, 'd', 4).a;\n+------------------------------------------------+\n| named_struct('a', 1, 'b', 2, 'c', 3, 'd', 4).a |\n+------------------------------------------------+\n| 1                                              |\n+------------------------------------------------+\n\nmysql> select row(1, 2, 3, 4).col1;\n+-----------------------+\n| row(1, 2, 3, 4).col1  |\n+-----------------------+\n| 1                     |\n+-----------------------+\n\nmysql> select row(2, 4, 6, 8)[2];\n+--------------------+\n| row(2, 4, 6, 8)[2] |\n+--------------------+\n|                  4 |\n+--------------------+\n\nmysql> select row(map{'a':1}, 2, 3, 4)[1];\n+-----------------------------+\n| row(map{'a':1}, 2, 3, 4)[1] |\n+-----------------------------+\n| {\"a\":1}                     |\n+-----------------------------+\n"})})]})}const T=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var c=s(67294);const t=c.createContext({});function r(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:r(e),c.createElement(t.Provider,{value:a},n)}}}]);