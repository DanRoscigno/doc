"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64861],{89447:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var t=s(85893),i=s(11151);const c={displayed_sidebar:"Chinese"},l="ST_Contains",o={id:"sql-reference/sql-functions/spatial-functions/st_contains",title:"ST_Contains",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-functions/spatial-functions/st_contains.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_contains",permalink:"/zh/docs/2.2/sql-reference/sql-functions/spatial-functions/st_contains",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/spatial-functions/st_contains.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ST_Circle",permalink:"/zh/docs/2.2/sql-reference/sql-functions/spatial-functions/st_circle"},next:{title:"ST_Distance_Sphere",permalink:"/zh/docs/2.2/sql-reference/sql-functions/spatial-functions/st_distance_sphere"}},a={},r=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u8bcd",id:"\u5173\u952e\u8bcd",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"st_contains",children:"ST_Contains"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(e.p,{children:["\u5224\u65ad\u51e0\u4f55\u56fe\u5f62 ",(0,t.jsx)(e.code,{children:"shape1"})," \u662f\u5426\u5b8c\u5168\u80fd\u591f\u5305\u542b\u51e0\u4f55\u56fe\u5f62 ",(0,t.jsx)(e.code,{children:"shape2"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"ST_Contains(shape1, shape2)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"shape1"}),": \u51e0\u4f55\u56fe\u5f62 1\uff0c\u5305\u542b\u56fe\u5f62, \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a GEOMETRY"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"shape2"}),": \u51e0\u4f55\u56fe\u5f62 2\uff0c\u88ab\u5305\u542b\u56fe\u5f62, \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a GEOMETRY"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOL"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_Contains(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"), ST_Point(5, 5));\n+----------------------------------------------------------------------------------------+\n| st_contains(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))'), st_point(5.0, 5.0)) |\n+----------------------------------------------------------------------------------------+\n|                                                                                      1 |\n+----------------------------------------------------------------------------------------+\n\nMySQL > SELECT ST_Contains(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"), ST_Point(50, 50));\n+------------------------------------------------------------------------------------------+\n| st_contains(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))'), st_point(50.0, 50.0)) |\n+------------------------------------------------------------------------------------------+\n|                                                                                        0 |\n+------------------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5173\u952e\u8bcd",children:"\u5173\u952e\u8bcd"}),"\n",(0,t.jsx)(e.p,{children:"ST_CONTAINS, ST, CONTAINS"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||l:c(n),t.createElement(i.Provider,{value:o},e)}}}]);