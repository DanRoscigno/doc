"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27994],{62085:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const r={displayed_sidebar:"documentation"},o="GROUPING_ID",c={id:"sql-reference/sql-functions/aggregate-functions/grouping_id",title:"GROUPING_ID",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/grouping_id.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/grouping_id",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/grouping_id",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/grouping_id.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"GROUPING",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/grouping"},next:{title:"hll_empty",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/hll_empty"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"grouping_id",children:"GROUPING_ID"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"GROUPING_ID is used to distinguish the grouping statistics results of the same grouping standard."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"GROUPING_ID(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"MySQL > SELECT COL1,GROUPING_ID(COL2) AS 'GroupingID' FROM tbl GROUP BY ROLLUP (COL1, COL2);\n+------+------------+\n| COL1 | GroupingID |\n+------+------------+\n| NULL |          1 |\n| 2.20 |          1 |\n| 2.20 |          0 |\n| 1.10 |          1 |\n| 1.10 |          0 |\n+------+------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||o:r(e),t.createElement(i.Provider,{value:c},n)}}}]);