"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95037],{82447:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=r(85893),a=r(11151);const t={displayed_sidebar:"English"},i="array_min",c={id:"sql-reference/sql-functions/array-functions/array_min",title:"array_min",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/array-functions/array_min.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_min",permalink:"/docs/2.3/sql-reference/sql-functions/array-functions/array_min",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_min.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_max",permalink:"/docs/2.3/sql-reference/sql-functions/array-functions/array_max"},next:{title:"array_position",permalink:"/docs/2.3/sql-reference/sql-functions/array-functions/array_position"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"array_min",children:"array_min"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Obtains the minimum value of all data in an ARRAY and return this result."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"array_min(array(type))\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_min([113, 11, 12]);\n+------------------------+\n| array_min([113,11,12]) |\n+------------------------+\n| 11                     |\n+------------------------+\n\nmysql> select array_min([11.33, 11.11, 12.324]);\n+---------------------------------+\n| array_min([11.33,11.11,12.324]) |\n+---------------------------------+\n| 11.11                           |\n+---------------------------------+\n\nmysql> select array_min([cast('2020-02-25 11:35:17' as datetime), cast('2019-08-25 17:07:10' as datetime), cast('2025-08-25 17:07:10' as datetime)]);\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| array_min([CAST('2020-02-25 11:35:17' AS DATETIME),CAST('2019-08-25 17:07:10' AS DATETIME),CAST('2025-08-25 17:07:10' AS DATETIME)]) |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| 2019-08-25 17:07:10                                                                                                                  |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"ARRAY_MIN,ARRAY"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>c,ah:()=>t});var s=r(67294);const a=s.createContext({});function t(n){const e=s.useContext(a);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function c({components:n,children:e,disableParentContext:r}){let c;return c=r?"function"==typeof n?n({}):n||i:t(n),s.createElement(a.Provider,{value:c},e)}}}]);