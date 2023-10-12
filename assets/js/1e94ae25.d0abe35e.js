"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95252],{45798:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(85893),i=s(11151);const o={displayed_sidebar:"documentation"},c="ST_Contains",a={id:"sql-reference/sql-functions/spatial-functions/st_contains",title:"ST_Contains",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/spatial-functions/st_contains.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_contains",permalink:"/doc/docs/2.5/sql-reference/sql-functions/spatial-functions/st_contains",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/spatial-functions/st_contains.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ST_Circle",permalink:"/doc/docs/2.5/sql-reference/sql-functions/spatial-functions/st_circle"},next:{title:"ST_Distance_Sphere",permalink:"/doc/docs/2.5/sql-reference/sql-functions/spatial-functions/st_distance_sphere"}},r={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"st_contains",children:"ST_Contains"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"Checks whether the geometric figure shape1 can fully contain shape2."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"BOOL ST_Contains(GEOMETRY shape1, GEOMETRY shape2)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_Contains(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"), ST_Point(5, 5));\n+----------------------------------------------------------------------------------------+\n| st_contains(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))'), st_point(5.0, 5.0)) |\n+----------------------------------------------------------------------------------------+\n|                                                                                      1 |\n+----------------------------------------------------------------------------------------+\n\nMySQL > SELECT ST_Contains(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"), ST_Point(50, 50));\n+------------------------------------------------------------------------------------------+\n| st_contains(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))'), st_point(50.0, 50.0)) |\n+------------------------------------------------------------------------------------------+\n|                                                                                        0 |\n+------------------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"ST_CONTAINS,ST,CONTAINS"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>a,ah:()=>o});var t=s(67294);const i=t.createContext({});function o(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function a({components:n,children:e,disableParentContext:s}){let a;return a=s?"function"==typeof n?n({}):n||c:o(n),t.createElement(i.Provider,{value:a},e)}}}]);