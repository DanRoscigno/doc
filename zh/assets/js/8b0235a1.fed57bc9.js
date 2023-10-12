"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40643],{11315:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>i});var a=s(85893),l=s(11151);const c={displayed_sidebar:"Chinese31"},r="MAP",t={id:"sql-reference/sql-statements/data-types/Map",title:"MAP",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-types/Map.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/Map",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/Map",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/Map.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"JSON",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/JSON"},next:{title:"STRUCT",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/STRUCT"}},d={},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u5b9a\u4e49 MAP \u7c7b\u578b\u5217",id:"\u5b9a\u4e49-map-\u7c7b\u578b\u5217",level:2},{value:"\u4f7f\u7528 SQL \u6784\u5efa MAP",id:"\u4f7f\u7528-sql-\u6784\u5efa-map",level:2},{value:"\u5bfc\u5165 MAP \u7c7b\u578b\u6570\u636e",id:"\u5bfc\u5165-map-\u7c7b\u578b\u6570\u636e",level:2},{value:"INSERT INTO \u5bfc\u5165",id:"insert-into-\u5bfc\u5165",level:3},{value:"\u4ece ORC \u548c Parquet \u6587\u4ef6\u5bfc\u5165",id:"\u4ece-orc-\u548c-parquet-\u6587\u4ef6\u5bfc\u5165",level:3},{value:"\u67e5\u8be2 MAP \u6570\u636e",id:"\u67e5\u8be2-map-\u6570\u636e",level:2},{value:"\u76f8\u5173\u53c2\u8003",id:"\u76f8\u5173\u53c2\u8003",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"map",children:"MAP"}),"\n",(0,a.jsx)(n.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["MAP \u662f\u4e00\u79cd\u590d\u6742\u6570\u636e\u7c7b\u578b\uff0c\u7528\u4e8e\u5b58\u50a8\u65e0\u5e8f\u7684\u952e\u503c\u5bf9\uff08key-value pair)\uff0c\u4f8b\u5982 ",(0,a.jsx)(n.code,{children:"{a:1, b:2, c:3}"}),"\u3002Map \u4e2d\u7684 Key \u4e0d\u80fd\u91cd\u590d\u3002\u4e00\u4e2a Map \u6700\u591a\u652f\u6301 14 \u5c42\u5d4c\u5957\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"StarRocks \u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301 MAP \u6570\u636e\u7c7b\u578b\u3002\u60a8\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u5b9a\u4e49 MAP \u5217\uff0c\u5411\u8868\u4e2d\u5bfc\u5165 MAP \u6570\u636e\uff0c\u67e5\u8be2 MAP \u6570\u636e\u3002"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks \u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u67e5\u8be2\u6570\u636e\u6e56\u4e2d\u7684\u590d\u6742\u6570\u636e\u7c7b\u578b MAP \u548c STRUCT\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 StarRocks \u63d0\u4f9b\u7684 External Catalog \u65b9\u5f0f\u6765\u67e5\u8be2 Apache Hive\u2122\uff0cApache Hudi\uff0cApache Iceberg \u4e2d\u7684 MAP \u548c STRUCT \u6570\u636e\u3002\u4ec5\u652f\u6301\u67e5\u8be2 ORC \u548c Parquet \u7c7b\u578b\u6587\u4ef6\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 External Catalog \u67e5\u8be2\u5916\u90e8\u6570\u636e\u6e90\uff0c\u53c2\u89c1 ",(0,a.jsx)(n.a,{href:"/doc/zh/docs/data_source/catalog/catalog_overview",children:"Catalog \u6982\u8ff0"})," \u548c\u5bf9\u5e94\u7684 Catalog \u6587\u6863\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"MAP<key_type,value_type>\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"key_type"}),"\uff1aKey \u7684\u6570\u636e\u7c7b\u578b\u3002\u5fc5\u987b\u662f StarRocks \u652f\u6301\u7684\u57fa\u672c\u6570\u636e\u7c7b\u578b (Primitive Type)\uff0c\u4f8b\u5982\u6570\u503c\u3001\u5b57\u7b26\u4e32\u3001\u65e5\u671f\u7c7b\u578b\u3002\u4e0d\u652f\u6301\u590d\u6742\u7c7b\u578b\uff0c\u4f8b\u5982 HLL\u3001JSON\u3001ARRAY\u3001MAP\u3001BITMAP\u3001STRUCT\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"value_type"}),"\uff1aValue \u7684\u6570\u636e\u7c7b\u578b\u3002\u53ef\u4ee5\u662f StarRocks \u652f\u6301\u7684\u4efb\u610f\u7c7b\u578b\uff0c\u5305\u62ec\u590d\u6742\u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Key \u548c Value \u53d6\u503c\u90fd\u53ef\u4ee5\u4e3a NULL\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5b9a\u4e49-map-\u7c7b\u578b\u5217",children:"\u5b9a\u4e49 MAP \u7c7b\u578b\u5217"}),"\n",(0,a.jsx)(n.p,{children:"\u5efa\u8868\u65f6\u53ef\u4ee5\u5728 CREATE TABLE \u8bed\u53e5\u4e2d\u5b9a\u4e49 MAP \u7c7b\u578b\u7684\u5217\uff0c\u540e\u7eed\u5bfc\u5165 MAP \u6570\u636e\u5230\u8be5\u5217\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- \u5b9a\u4e49\u7b80\u5355 map\u3002\nCREATE TABLE t0(\n  c0 INT,\n  c1 MAP<INT,INT>\n)\nDUPLICATE KEY(c0);\n\n-- \u5b9a\u4e49\u5d4c\u5957 map\u3002\nCREATE TABLE t1(\n  c0 INT,\n  c1 MAP<DATE, MAP<VARCHAR(10), INT>>\n)\nDUPLICATE KEY(c0);\n\n-- \u5b9a\u4e49\u975e NULL map\u3002\nCREATE TABLE t2(\n  c0 INT,\n  c1 MAP<INT,DATETIME> NOT NULL\n)\nDUPLICATE KEY(c0);\n"})}),"\n",(0,a.jsx)(n.p,{children:"MAP \u5217\u6709\u5982\u4e0b\u4f7f\u7528\u9650\u5236\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u4f5c\u4e3a\u8868\u7684 Key \u5217\uff0c\u53ea\u80fd\u4f5c\u4e3a Value \u5217\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u4f5c\u4e3a\u8868\u7684\u5206\u533a\u5217\uff08PARTITION BY \u4e2d\u5b9a\u4e49\u7684\u5217\uff09\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u4f5c\u4e3a\u8868\u7684\u5206\u6876\u5217 \uff08DISTRIBUTED BY \u4e2d\u5b9a\u4e49\u7684\u5217\uff09\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528-sql-\u6784\u5efa-map",children:"\u4f7f\u7528 SQL \u6784\u5efa MAP"}),"\n",(0,a.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd\u8bed\u6cd5\u6784\u5efa Map\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"map{key_expr:value_expr, ...}"}),"\uff1aMap \u4e2d\u7684\u5143\u7d20\u4ee5\u9017\u53f7\u5206\u9694 (",(0,a.jsx)(n.code,{children:","}),") \uff0c\u5143\u7d20\u4e2d\u7684 Key \u548c Value \u4ee5\u5192\u53f7\u5206\u9694 (",(0,a.jsx)(n.code,{children:":"}),") \uff0c\u4f8b\u5982 ",(0,a.jsx)(n.code,{children:"map{a:1, b:2, c:3}"}),"\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"map(key_expr, value_expr ...)"}),"\uff1aKey \u548c Value \u7684\u8868\u8fbe\u5f0f\u5fc5\u987b\u6210\u5bf9\u51fa\u73b0\uff0c\u5426\u5219\u6784\u5efa\u5931\u8d25\uff0c\u4f8b\u5982 ",(0,a.jsx)(n.code,{children:"map(a,1,b,2,c,3)"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"StarRocks \u53ef\u4ee5\u6839\u636e\u8f93\u5165\u7684 Key \u548c Value \u63a8\u5bfc\u51fa Key \u548c Value \u7684\u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'select map{1:1, 2:2, 3:3} as numbers;\nselect map(1,1,2,2,3,3) as numbers; -- \u8fd4\u56de {1:1,2:2,3:3}\u3002\nselect map{1:"apple", 2:"orange", 3:"pear"} as fruit;\nselect map(1, "apple", 2, "orange", 3, "pear") as fruit; -- \u8fd4\u56de {1:"apple",2:"orange",3:"pear"}\u3002\nselect map{true:map{3.13:"abc"}, false:map{}} as nest;\nselect map(true, map(3.13, "abc"), false, map{}) as nest; -- \u8fd4\u56de {1:{3.13:"abc"},0:{}}\u3002\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c Key \u6216 Value \u7684\u6570\u636e\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0cStarRocks \u81ea\u52a8\u63a8\u5bfc\u51fa\u5408\u9002\u7684\u6570\u636e\u7c7b\u578b (supertype)\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'select map{1:2.2, 1.2:21} as floats_floats; -- \u8fd4\u56de {1.0:2.2,1.2:21.0}\u3002\nselect map{12:"a", "100":1, NULL:NULL} as string_string; -- \u8fd4\u56de {"12":"a","100":"1",null:null}\u3002\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u5728\u6784\u5efa Map \u65f6\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"<>"})," \u6765\u5b9a\u4e49 map \u7684\u6570\u636e\u7c7b\u578b\u3002\u8f93\u5165\u7684 Key \u503c\u548c Value \u503c\u5fc5\u987b\u80fd\u591f\u8f6c\u6362\u6210\u5b9a\u4e49\u7684\u7c7b\u578b\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'select map<FLOAT,INT>{1:2}; -- \u8fd4\u56de {1:2}\u3002\nselect map<INT,INT>{"12": "100"}; -- \u8fd4\u56de {12:100}\u3002\n'})}),"\n",(0,a.jsx)(n.p,{children:"Key \u548c Value \u53ef\u4ee5\u4e3a NULL\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"select map{1:NULL};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6784\u5efa\u7a7a Map\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"select map{} as empty_map;\nselect map() as empty_map; -- \u8fd4\u56de {}\u3002\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5bfc\u5165-map-\u7c7b\u578b\u6570\u636e",children:"\u5bfc\u5165 MAP \u7c7b\u578b\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u65b9\u5f0f\u5bfc\u5165 MAP \u6570\u636e\u5230 StarRocks\uff1a",(0,a.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT INTO"})," \u548c ",(0,a.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"ORC/Parquet \u6587\u4ef6\u5bfc\u5165"}),"\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5bfc\u5165\u8fc7\u7a0b\u4e2d StarRocks \u4f1a\u5bf9\u91cd\u590d\u7684 Key \u503c\u8fdb\u884c\u5220\u9664\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"insert-into-\u5bfc\u5165",children:"INSERT INTO \u5bfc\u5165"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"  CREATE TABLE t0(\n    c0 INT,\n    c1 MAP<INT,INT>\n  )\n  DUPLICATE KEY(c0);\n  \n  INSERT INTO t0 VALUES(1, map{1:2,3:NULL});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4ece-orc-\u548c-parquet-\u6587\u4ef6\u5bfc\u5165",children:"\u4ece ORC \u548c Parquet \u6587\u4ef6\u5bfc\u5165"}),"\n",(0,a.jsxs)(n.p,{children:["StarRocks \u7684 MAP \u7c7b\u578b\u5bf9\u5e94 ORC \u548c Parquet \u683c\u5f0f\u4e2d\u7684 MAP\uff0c\u65e0\u9700\u60a8\u505a\u989d\u5916\u7684\u8f6c\u6362\u6216\u5b9a\u4e49\u3002\u5177\u4f53\u5bfc\u5165\u64cd\u4f5c\uff0c\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load \u6587\u6863"}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u67e5\u8be2-map-\u6570\u636e",children:"\u67e5\u8be2 MAP \u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["**\u793a\u4f8b\u4e00\uff1a**\u67e5\u8be2\u8868 ",(0,a.jsx)(n.code,{children:"t0"})," \u4e2d\u7684 MAP \u5217 ",(0,a.jsx)(n.code,{children:"c1"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"mysql> select c1 from t0;\n+--------------+\n| c1           |\n+--------------+\n| {1:2,3:null} |\n+--------------+\n"})}),"\n",(0,a.jsxs)(n.p,{children:["**\u793a\u4f8b\u4e8c\uff1a**\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"[ ]"})," \u64cd\u4f5c\u7b26\uff0c\u6216 ",(0,a.jsx)(n.code,{children:"element_at(any_map, any_key)"})," \u51fd\u6570\u6765\u67e5\u8be2 key \u5bf9\u5e94\u7684 value \u503c\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0b\u5217\u4e24\u4e2a\u793a\u4f8b\u67e5\u8be2 Key ",(0,a.jsx)(n.code,{children:"1"})," \u5bf9\u5e94\u7684 Value \u503c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"mysql> select map{1:2,3:NULL}[1];\n+-----------------------+\n| map(1, 2, 3, NULL)[1] |\n+-----------------------+\n|                     2 |\n+-----------------------+\n\nmysql> select element_at(map{1:2,3:NULL},1);\n+--------------------+\n| map{1:2,3:NULL}[1] |\n+--------------------+\n|                  2 |\n+--------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c Key \u4e0d\u5b58\u5728\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"mysql> select map{1:2,3:NULL}[2];\n+-----------------------+\n| map(1, 2, 3, NULL)[2] |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n"})}),"\n",(0,a.jsxs)(n.p,{children:["**\u793a\u4f8b\u4e09\uff1a**\u9012\u5f52\u67e5\u8be2\u590d\u6742 MAP \u4e2d\u7684\u5143\u7d20\u3002 \u4e0b\u5217\u793a\u4f8b\u9996\u5148\u67e5\u8be2 Key ",(0,a.jsx)(n.code,{children:"1"})," \u5bf9\u5e94\u7684\u503c\uff0c\u503c\u4e3a ",(0,a.jsx)(n.code,{children:"map{2:1}"}),"\u3002\u7136\u540e\u8fdb\u4e00\u6b65\u67e5\u8be2\u8be5 Map \u4e2d Key ",(0,a.jsx)(n.code,{children:"2"})," \u5bf9\u5e94\u7684\u503c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select map{1:map{2:1},3:NULL}[1][2];\n\n+----------------------------------+\n| map(1, map(2, 1), 3, NULL)[1][2] |\n+----------------------------------+\n|                                1 |\n+----------------------------------+\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u76f8\u5173\u53c2\u8003",children:"\u76f8\u5173\u53c2\u8003"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/map-functions/map_values",children:"Map \u51fd\u6570"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/array-functions/element_at",children:"element_at"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>c});var a=s(67294);const l=a.createContext({});function c(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||r:c(e),a.createElement(l.Provider,{value:t},n)}}}]);