"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[91885],{92171:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>t});var r=s(85893),a=s(11151);const l={displayed_sidebar:"Chinese31"},c="array_agg",i={id:"sql-reference/sql-functions/array-functions/array_agg",title:"array_agg",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/array_agg.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_agg",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_agg.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"any_match",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/any_match"},next:{title:"array_append",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_append"}},d={},t=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function o(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"array_agg",children:"array_agg"}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u5c06\u4e00\u5217\u4e2d\u7684\u503c\uff08\u5305\u62ec\u7a7a\u503c null\uff09\u4e32\u8054\u6210\u4e00\u4e2a\u6570\u7ec4 (\u591a\u884c\u8f6c\u4e00\u884c\uff09\u3002\u5728 3.0 \u7248\u672c\u4e4b\u524d\uff0c\u8be5\u51fd\u6570\u4e0d\u4fdd\u8bc1\u6570\u7ec4\u91cc\u5143\u7d20\u7684\u987a\u5e8f\u3002\u4ece 3.0 \u7248\u672c\u5f00\u59cb\uff0carray_agg() \u652f\u6301\u4f7f\u7528 ORDER BY \u5bf9\u6570\u7ec4\u91cc\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Haskell",children:"ARRAY_AGG(col [order by col0 [desc | asc] [nulls first | nulls last] ...])\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"col"}),"\uff1a\u9700\u8981\u8fdb\u884c\u6570\u503c\u4e32\u8054\u7684\u5217\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001VARCHAR\u3001CHAR\u3001DATETIME\u3001DATE\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"col0"}),": \u6392\u5e8f\u5217\uff0c\u51b3\u5b9a ",(0,r.jsx)(e.code,{children:"col"})," \u4e2d\u5143\u7d20\u7684\u987a\u5e8f\u3002\u53ef\u4ee5\u6709\u591a\u4e2a\u6392\u5e8f\u5217\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"[desc | asc]"}),": \u5bf9\u6570\u7ec4\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u65f6\uff0c\u662f\u57fa\u4e8e ",(0,r.jsx)(e.code,{children:"col0"})," \u7684\u5347\u5e8f\u8fd8\u662f\u964d\u5e8f\u8fdb\u884c\u6392\u5217\u3002\u9ed8\u8ba4\u5347\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"[nulls first | nulls last]"}),": null \u503c\u6392\u5728\u5143\u7d20\u6700\u524d\u9762\u8fd8\u662f\u6700\u540e\u9762\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u4e0d\u6307\u5b9a ORDER BY\uff0c\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u987a\u5e8f\u662f\u968f\u673a\u7684\uff0c\u4e0d\u80fd\u4fdd\u8bc1\u4e0e\u539f\u6765\u5217\u503c\u7684\u987a\u5e8f\u76f8\u540c\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u8fd4\u56de\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u7c7b\u578b\u4e0e ",(0,r.jsx)(e.code,{children:"col"})," \u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u6ca1\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u8f93\u5165\u503c\uff0c\u8fd4\u56de NULL\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(e.p,{children:["\u5bf9\u4e8e\u6574\u884c\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\uff0c\u805a\u5408\u7ed3\u679c\u4e3a ",(0,r.jsx)(e.code,{children:"NULL"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select array_agg(c2) from test where c1>4;\n+-----------------+\n| array_agg(`c2`) |\n+-----------------+\n| NULL            |\n+-----------------+\n"})}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u5982\u4e0b\u6570\u636e\u8868\u8fdb\u884c\u4ecb\u7ecd\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain_Text",children:"mysql> select * from t;\n+------+------+------+\n| a    | name | pv   |\n+------+------+------+\n|   11 |      |   33 |\n|    2 | NULL |  334 |\n|    1 | fzh  |    3 |\n|    1 | fff  |    4 |\n|    1 | fff  |    5 |\n+------+------+------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u793a\u4f8b\u4e00: \u6839\u636e ",(0,r.jsx)(e.code,{children:"a"})," \u5217\u5206\u7ec4\uff0c\u5c06 ",(0,r.jsx)(e.code,{children:"pv"})," \u5217\u7684\u503c\u4e32\u8054\u6210\u6570\u7ec4\uff0c\u6570\u7ec4\u5143\u7d20\u57fa\u4e8e ",(0,r.jsx)(e.code,{children:"name"})," \u7684\u5347\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0cnull \u503c\u6392\u5728\u6700\u524d\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain_Text",children:"mysql> select a, array_agg(pv order by name nulls first) from t group by a;\n+------+---------------------------------+\n| a    | array_agg(pv ORDER BY name ASC) |\n+------+---------------------------------+\n|    2 | [334]                           |\n|   11 | [33]                            |\n|    1 | [4,5,3]                         |\n+------+---------------------------------+\n\n-- \u4e0d\u4f7f\u7528\u6392\u5e8f\u3002\nmysql> select a, array_agg(pv) from t group by a;\n+------+---------------+\n| a    | array_agg(pv) |\n+------+---------------+\n|   11 | [33]          |\n|    2 | [334]         |\n|    1 | [3,4,5]       |\n+------+---------------+\n3 rows in set (0.03 sec)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u793a\u4f8b\u4e8c: \u5c06 ",(0,r.jsx)(e.code,{children:"pv"})," \u5217\u7684\u503c\u4e32\u8054\u6210\u6570\u7ec4\uff0c\u6570\u7ec4\u5143\u7d20\u57fa\u4e8e ",(0,r.jsx)(e.code,{children:"name"})," \u7684\u964d\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0cnull \u503c\u6392\u5728\u6700\u540e\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain_Text",children:"mysql> select array_agg(pv order by name desc nulls last) from t;\n+----------------------------------+\n| array_agg(pv ORDER BY name DESC) |\n+----------------------------------+\n| [3,4,5,33,334]                   |\n+----------------------------------+\n1 row in set (0.02 sec)\n\n-- \u4e0d\u4f7f\u7528\u6392\u5e8f\u3002\nmysql> select array_agg(pv) from t;\n+----------------+\n| array_agg(pv)  |\n+----------------+\n| [3,4,5,33,334] |\n+----------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u793a\u4f8b\u4e09: \u5c06 ",(0,r.jsx)(e.code,{children:"pv"})," \u5217\u7684\u503c\u4e32\u8054\u6210\u6570\u7ec4\uff0c\u4f7f\u7528 where \u5b50\u53e5\u5bf9 ",(0,r.jsx)(e.code,{children:"pv"})," \u503c\u8fdb\u884c\u8fc7\u6ee4\u3002\u6ca1\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u503c\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Plain_Text",children:"mysql> select array_agg(pv order by name desc nulls last) from t where a < 0;\n+----------------------------------+\n| array_agg(pv ORDER BY name DESC) |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n1 row in set (0.02 sec)\n\n-- Aggregate values with no order.\nmysql> select array_agg(pv) from t where a < 0;\n+---------------+\n| array_agg(pv) |\n+---------------+\n| NULL          |\n+---------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(e.p,{children:"ARRAY_AGG, ARRAY"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(o,n)})):o(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>l});var r=s(67294);const a=r.createContext({});function l(n){const e=r.useContext(a);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||c:l(n),r.createElement(a.Provider,{value:i},e)}}}]);