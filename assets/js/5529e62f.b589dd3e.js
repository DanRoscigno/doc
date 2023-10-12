"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72767],{87218:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const r={displayed_sidebar:"documentation"},o="positive",c={id:"sql-reference/sql-functions/math-functions/positive",title:"positive",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/math-functions/positive.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/positive",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/positive",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/positive.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"pmod",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/pmod"},next:{title:"pow, power, dpow, fpow",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/pow"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"positive",children:"positive"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns ",(0,t.jsx)(n.code,{children:"x"})," as a value."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"POSITIVE(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": supports the BIGINT, DOUBLE, DECIMALV2, DECIMAL32, DECIMAL64, and DECIMAL128 data types."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["Returns a value whose data type is the same as the data type of the ",(0,t.jsx)(n.code,{children:"x"})," value."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select positive(3);\n+-------------+\n| positive(3) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.01 sec)\n\nmysql> select positive(cast(3.14 as decimalv2));\n+--------------------------------------+\n| positive(CAST(3.14 AS DECIMAL(9,0))) |\n+--------------------------------------+\n|                                 3.14 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||o:r(e),t.createElement(i.Provider,{value:c},n)}}}]);