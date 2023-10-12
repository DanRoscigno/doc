"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97924],{23037:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese31"},l="any_match",i={id:"sql-reference/sql-functions/array-functions/any_match",title:"any_match",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/array-functions/any_match.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/any_match",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/any_match",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/any_match.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"all_match",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/all_match"},next:{title:"array_agg",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_agg"}},t={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",a:"a"},(0,c.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"any_match",children:"any_match"}),"\n",(0,a.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(e.p,{children:"\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u6709\u5143\u7d20\u5339\u914d\u8c13\u8bcd\u4e2d (predicate) \u6307\u5b9a\u7684\u6761\u4ef6\u3002"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u5339\u914d\uff0c\u5219\u8fd4\u56de True (1)\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u6ca1\u6709\u4efb\u4f55\u5143\u7d20\u5339\u914d\u6216\u6570\u7ec4\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de False (0)\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u6570\u7ec4\u4e2d\u6709\u5143\u7d20\u4e3a NULL\uff0c\u800c\u5176\u4ed6\u5143\u7d20\u90fd\u4e0d\u5339\u914d\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0.6 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Haskell",children:"any_match(lambda_function, arr1, arr2...)\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u6709\u5143\u7d20\u5339\u914d Lambda \u8868\u8fbe\u5f0f\u4e2d\u6307\u5b9a\u7684\u6761\u4ef6\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"arr"}),": \u8fdb\u884c\u5224\u65ad\u7684\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"lambda_function"}),": \u4f5c\u4e3a\u5339\u914d\u6761\u4ef6\u7684 Lambda \u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,a.jsx)(e.p,{children:"\u8fd4\u56de BOOLEAN \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u5173\u4e8e Lambda \u8868\u8fbe\u5f0f\u7684\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879\uff0c\u53c2\u89c1 ",(0,a.jsx)(e.a,{href:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),"\u3002"]}),"\n",(0,a.jsx)(e.li,{children:"\u5982\u679c\u8f93\u5165\u7684\u6570\u7ec4\u4e3a NULL \u6216\u8005 Lambda \u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,a.jsxs)(e.li,{children:["\u5982\u679c\u7b2c\u4e00\u4e2a\u6570\u7ec4\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de ",(0,a.jsx)(e.code,{children:"false"}),"\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:["\u5982\u679c\u8981\u5c06\u8be5\u51fd\u6570\u5e94\u7528\u5728 MAP \u4e0a\uff0c\u53ef\u4ee5\u5c06 ",(0,a.jsx)(e.code,{children:"any_match((k,v)->k>v,map)"})," \u6539\u5199\u4e3a ",(0,a.jsx)(e.code,{children:"any_match(map_values(transform_values((k,v)->k>v, map)))"}),"\u3002\u4f8b\u5982\uff0c",(0,a.jsx)(e.code,{children:"select any_match(map_values(transform_values((k,v)->k>v, map{2:1})));"})," \u8fd4\u56de 1\u3002"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsxs)(e.p,{children:["\u5224\u65ad\u6570\u7ec4 ",(0,a.jsx)(e.code,{children:"x"})," \u4e2d\u662f\u5426\u6709\u5143\u7d20\u5c0f\u4e8e\u6570\u7ec4 ",(0,a.jsx)(e.code,{children:"y"})," \u4e2d\u7684\u5143\u7d20\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Plain",children:"select any_match((x,y) -> x < y, [1,2,8], [4,5,6]);\n+--------------------------------------------------+\n| any_match((x, y) -> x < y, [1, 2, 8], [4, 5, 6]) |\n+--------------------------------------------------+\n|                                                1 |\n+--------------------------------------------------+\n\nselect any_match((x,y) -> x < y, [11,12,8], [4,5,6]);\n+----------------------------------------------------+\n| any_match((x, y) -> x < y, [11, 12, 8], [4, 5, 6]) |\n+----------------------------------------------------+\n|                                                  0 |\n+----------------------------------------------------+\n\nselect any_match((x,y) -> x < y, [11,12,null], [4,5,6]);\n+-------------------------------------------------------+\n| any_match((x, y) -> x < y, [11, 12, NULL], [4, 5, 6]) |\n+-------------------------------------------------------+\n|                                                  NULL |\n+-------------------------------------------------------+\n\nselect any_match((x,y) -> x < y, [], []);\n+------------------------------------+\n| any_match((x, y) -> x < y, [], []) |\n+------------------------------------+\n|                                  0 |\n+------------------------------------+\n\nselect any_match((x,y) -> x < y, null, [4,5,6]);\n+---------------------------------------------+\n| any_match((x, y) -> x < y, NULL, [4, 5, 6]) |\n+---------------------------------------------+\n|                                        NULL |\n+---------------------------------------------+\n"})})]})}const o=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(h,n)})):h(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>r});var a=s(67294);const c=a.createContext({});function r(n){const e=a.useContext(c);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||l:r(n),a.createElement(c.Provider,{value:i},e)}}}]);