"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[24295],{43927:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=s(85893),r=s(11151);const c={displayed_sidebar:"English"},i="cot",o={id:"sql-reference/sql-functions/math-functions/cot",title:"cot",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/cot.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/cot",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/cot",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/cot.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"cos_similarity_norm",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/cos_similarity_norm"},next:{title:"degrees",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/degrees"}},l={},a=[{value:"Description",id:"description",level:2},{value:"<strong>Syntax</strong>",id:"syntax",level:2},{value:"<strong>Parameters</strong>",id:"parameters",level:2},{value:"<strong>Return value</strong>",id:"return-value",level:2},{value:"<strong>Examples</strong>",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cot",children:"cot"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the cotangent of the angle in radians ",(0,t.jsx)(n.code,{children:"x"}),". If the angle in radians ",(0,t.jsx)(n.code,{children:"x"})," is ",(0,t.jsx)(n.code,{children:"0"})," or ",(0,t.jsx)(n.code,{children:"NULL"}),", ",(0,t.jsx)(n.code,{children:"NULL"})," is returned."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"COT(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": the angle in radians. DOUBLE is supported."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:(0,t.jsx)(n.strong,{children:"Return value"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:(0,t.jsx)(n.strong,{children:"Examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plaintext",children:"mysql> select cot(3.1415926/2);\n+------------------------+\n| cot(3.1415926 / 2)     |\n+------------------------+\n| 2.6794896585028646e-08 |\n+------------------------+\n1 row in set (0.25 sec)\n\nmysql> select cot(0);\n+--------+\n| cot(0) |\n+--------+\n|   NULL |\n+--------+\n1 row in set (0.03 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:o},n)}}}]);