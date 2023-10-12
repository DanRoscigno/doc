"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61850],{58275:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var c=e(85893),r=e(11151);const l={displayed_sidebar:"Chinese31"},i="cast",t={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",title:"cast",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u7bad\u5934\u51fd\u6570",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function"},next:{title:"get_json_double",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const s=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},(0,r.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"cast",children:"cast"}),"\n",(0,c.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(s.p,{children:"\u4f7f\u7528 CAST \u51fd\u6570\uff0c\u5b9e\u73b0 JSON \u7c7b\u578b\u6570\u636e\u4e0e SQL \u7c7b\u578b\u95f4\u7684\u76f8\u4e92\u8f6c\u6362\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u5c06 JSON \u7c7b\u578b\u7684\u6570\u636e\u8f6c\u4e3a SQL \u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"CAST(json_expr AS sql_data_type)\n"})}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u5c06 SQL \u7c7b\u578b\u7684\u6570\u636e\u8f6c\u4e3a JSON \u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-sql",children:"CAST(sql_expr AS JSON)\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"json_expr"}),"\uff1a\u5f85\u8f6c\u6362\u4e3a SQL \u7c7b\u578b\u7684 JSON \u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"sql_data_type"}),"\uff1a\u8f6c\u6362\u540e\u7684 SQL \u7c7b\u578b\uff0c\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff08\u5305\u62ec STRING\u3001VARCHAR\u3001CHAR\uff09\u3001BOOLEAN\u3001\u6570\u503c\u7c7b\u578b\uff08\u5305\u62ec TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001DOUBLE\u3001FLOAT\uff09\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"sql_expr"}),"\uff1a\u5f85\u8f6c\u6362\u4e3a JSON \u7c7b\u578b\u7684 SQL \u8868\u8fbe\u5f0f\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u540c ",(0,c.jsx)(s.code,{children:"sql_data_type"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"CAST(json_expr AS sql_data_type)"}),"\uff0c\u8fd4\u56de ",(0,c.jsx)(s.code,{children:"sql_data_type"})," \u6307\u5b9a\u7c7b\u578b\u7684\u503c\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"CAST(sql_expr AS JSON)"}),"\uff0c\u8fd4\u56de JSON \u7c7b\u578b\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsx)(s.p,{children:"\u5c06 SQL \u7c7b\u578b\u7684\u6570\u636e\u8f6c\u4e3a JSON \u7c7b\u578b\u65f6:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u5982\u679c\u6570\u503c\u7c7b\u578b\u7684\u503c\u8d85\u51fa JSON \u652f\u6301\u7684\u7cbe\u5ea6\uff0c\u4e3a\u907f\u514d\u6570\u503c\u6ea2\u51fa\uff0c\u4f1a\u8fd4\u56de SQL \u7c7b\u578b\u7684 NULL\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u5bf9\u4e8e SQL \u7c7b\u578b\u7684 NULL \uff0c\u4e0d\u4f1a\u8f6c\u4e3a JSON \u7c7b\u578b\u7684 NULL\uff0c\u4ecd\u4e3a SQL \u7c7b\u578b\u7684 NULL\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u5c06 JSON \u7c7b\u578b\u7684\u6570\u636e\u8f6c\u4e3a SQL \u7c7b\u578b\u65f6:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u652f\u6301\u517c\u5bb9\u7c7b\u578b\u7684\u8f6c\u6362\uff0c\u4f8b\u5982 JSON \u5b57\u7b26\u4e32\u8f6c\u4e3a SQL \u5b57\u7b26\u4e32\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u5982\u679c\u7c7b\u578b\u8f6c\u6362\u4e0d\u517c\u5bb9\uff0c\u4f8b\u5982\u5c06 JSON \u7c7b\u578b\u7684\u6570\u5b57\u8f6c\u6210 SQL \u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u5982\u679c\u6570\u503c\u7c7b\u578b\u8f6c\u578b\u6ea2\u51fa\uff0c\u5219\u8fd4\u56de SQL \u7c7b\u578b\u7684 NULL\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"JSON \u7c7b\u578b\u7684 NULL \u8f6c\u4e3a SQL \u7c7b\u578b\u65f6\uff0c\u4f1a\u8fd4\u56de SQL NULL\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u5c06 JSON \u7c7b\u578b\u7684\u6570\u636e\u8f6c\u4e3a VARCHAR \u7c7b\u578b\u65f6\uff0c\u5982\u679c\u8f6c\u6362\u524d\u4e3a JSON string \u7c7b\u578b\uff0c\u5219\u8fd4\u56de\u7ed3\u679c\u4e3a\u4e0d\u5e26\u5f15\u53f7\u7684 VARCHAR \u7c7b\u578b\u7684\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(s.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5c06 JSON \u7c7b\u578b\u7684\u6570\u636e\u8f6c\u4e3a SQL \u7c7b\u578b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"-- \u5c06 JSON \u8f6c\u4e3a INT\u3002\nmysql> select cast(parse_json('{\"a\": 1}') -> 'a' as int);\n+--------------------------------------------+\n| CAST((parse_json('{\"a\": 1}')->'a') AS INT) |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n\n-- \u5c06 JSON \u5b57\u7b26\u4e32\u8f6c\u4e3a VARCHAR\u3002\nmysql> select cast(parse_json('\"star\"') as varchar);\n+---------------------------------------+\n| CAST(parse_json('\"star\"') AS VARCHAR) |\n+---------------------------------------+\n| star                                  |\n+---------------------------------------+\n\n-- \u5c06 JSON \u5bf9\u8c61\u8f6c\u4e3a VARCHAR\u3002\nmysql> select cast(parse_json('{\"star\": 1}') as varchar);\n+--------------------------------------------+\n| CAST(parse_json('{\"star\": 1}') AS VARCHAR) |\n+--------------------------------------------+\n| {\"star\": 1}                                |\n+--------------------------------------------+\n\n-- \u5c06 JSON \u6570\u7ec4\u8f6c\u4e3a VARCHAR\u3002\nmysql> select cast(parse_json('[1,2,3]') as varchar);\n+----------------------------------------+\n| CAST(parse_json('[1,2,3]') AS VARCHAR) |\n+----------------------------------------+\n| [1, 2, 3]                              |\n+----------------------------------------+\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5c06 SQL \u7c7b\u578b\u7684\u6570\u636e\u8f6c\u4e3a JSON \u7c7b\u578b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:'-- \u5c06INT\u8f6c\u6210JSON\u3002\nmysql> select cast(1 as json);\n+-----------------+\n| CAST(1 AS JSON) |\n+-----------------+\n| 1               |\n+-----------------+\n\n-- \u5c06 VARCHAR \u8f6c\u4e3a JSON\u3002\nmysql> select cast("star" as json);\n+----------------------+\n| CAST(\'star\' AS JSON) |\n+----------------------+\n| "star"               |\n+----------------------+\n\n-- \u5c06 BOOLEAN \u8f6c\u4e3a JSON\u3002\nmysql> select cast(true as json);\n+--------------------+\n| CAST(TRUE AS JSON) |\n+--------------------+\n| true               |\n+--------------------+\n'})})]})}const j=function(n={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),n.components);return s?(0,c.jsx)(s,Object.assign({},n,{children:(0,c.jsx)(d,n)})):d(n)}},11151:(n,s,e)=>{e.d(s,{Zo:()=>t,ah:()=>l});var c=e(67294);const r=c.createContext({});function l(n){const s=c.useContext(r);return c.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}const i={};function t({components:n,children:s,disableParentContext:e}){let t;return t=e?"function"==typeof n?n({}):n||i:l(n),c.createElement(r.Provider,{value:t},s)}}}]);