"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[5049],{99542:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var c=s(85893),i=s(11151);const a={displayed_sidebar:"Chinese31"},t="cardinality",l={id:"sql-reference/sql-functions/map-functions/cardinality",title:"cardinality",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/map-functions/cardinality.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/cardinality",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/cardinality",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/map-functions/cardinality.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"Map Functions",permalink:"/doc/zh/docs/3.0/category/map-functions-1"},next:{title:"element_at",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/element_at"}},r={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"cardinality",children:"cardinality"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u8ba1\u7b97 Map \u4e2d\u5143\u7d20\u7684\u4e2a\u6570\uff0c\u8fd4\u56de\u503c\u7c7b\u578b\u662f INT\u3002MAP \u4e2d\u4fdd\u5b58\u7684\u662f\u952e\u503c\u5bf9 (key-value pair)\uff0c\u6bd4\u5982 ",(0,c.jsx)(n.code,{children:'{"a":1, "b":2}'}),"\u3002\u4e00\u4e2a\u952e\u503c\u5bf9\u7b97\u4f5c\u4e00\u4e2a\u5143\u7d20\uff0c",(0,c.jsx)(n.code,{children:'{"a":1, "b":2}'})," \u7684\u5143\u7d20\u4e2a\u6570\u4e3a 2\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\u51fd\u6570\u522b\u540d\u4e3a ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/map-functions/map_size",children:"map_size"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"INT cardinality(any_map)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"any_map"}),": \u8981\u83b7\u53d6\u5143\u7d20\u4e2a\u6570\u7684 MAP \u503c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de INT \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u7ed3\u679c\u4e5f\u662f NULL\u3002"}),"\n",(0,c.jsx)(n.p,{children:"MAP \u4e2d\u7684 Key \u548c Value \u53ef\u4ee5\u4e3a NULL\uff0c\u4f1a\u6b63\u5e38\u8ba1\u7b97\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8bbe Hive \u4e2d\u6709\u8868 ",(0,c.jsx)(n.code,{children:"hive_map"}),"\uff0c\u6570\u636e\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:'SELECT * FROM hive_map ORDER BY col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u5728 StarRocks \u96c6\u7fa4\u4e2d",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/data_source/catalog/hive_catalog#%E5%88%9B%E5%BB%BA-hive-catalog",children:"\u521b\u5efa Hive catalog"})," \u6765\u8bbf\u95ee\u8be5\u8868\uff0c\u8ba1\u7b97 ",(0,c.jsx)(n.code,{children:"col_map"})," \u5217\u6bcf\u884c\u7684\u5143\u7d20\u4e2a\u6570\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plaintext",children:"SELECT cardinality(col_map) FROM hive_map ORDER BY col_int;\n+----------------------+\n| cardinality(col_map) |\n+----------------------+\n|                    2 |\n|                    1 |\n|                    2 |\n+----------------------+\n3 rows in set (0.05 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var c=s(67294);const i=c.createContext({});function a(e){const n=c.useContext(i);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||t:a(e),c.createElement(i.Provider,{value:l},n)}}}]);