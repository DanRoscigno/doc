"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28154],{72350:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var a=r(85893),s=r(11151);const t={displayed_sidebar:"English"},c="array_avg",i={id:"sql-reference/sql-functions/array-functions/array_avg",title:"array_avg",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_avg.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_avg",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_avg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_avg.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_append",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_append"},next:{title:"array_concat",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_concat"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_avg",children:"array_avg"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Calculates the average value of all data in an ARRAY and return this result."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"array_avg(array(type))\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"array(type)"})," supports the following types of elements: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMALV2."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_avg([11, 11, 12]);\n+-----------------------+\n| array_avg([11,11,12]) |\n+-----------------------+\n| 11.333333333333334    |\n+-----------------------+\n\nmysql> select array_avg([11.33, 11.11, 12.324]);\n+---------------------------------+\n| array_avg([11.33,11.11,12.324]) |\n+---------------------------------+\n| 11.588                          |\n+---------------------------------+\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(n.p,{children:"ARRAY_AVG,ARRAY"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:t(e),a.createElement(s.Provider,{value:i},n)}}}]);