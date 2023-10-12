"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64834],{10450:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=s(85893),t=s(11151);const o={},c="COVAR_POP",a={id:"sql-reference/sql-functions/aggregate-functions/covar_pop",title:"COVAR_POP",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/covar_pop.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/covar_pop",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/covar_pop",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/aggregate-functions/covar_pop.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"count",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/count"},next:{title:"COVAR_SAMP",permalink:"/doc/docs/2.5/sql-reference/sql-functions/aggregate-functions/covar_samp"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",img:"img",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"covar_pop",children:"COVAR_POP"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Returns the population covariance of two expressions. This function is supported from v2.5.10. It can also be used as a window function."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"COVAR_POP(expr1, expr2)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr1"})," and ",(0,r.jsx)(n.code,{children:"expr2"})," must evaluate to TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, or DECIMAL."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"expr1"})," and ",(0,r.jsx)(n.code,{children:"expr2"})," are table columns, this function calculates the population covariance of these two columns."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsxs)(n.p,{children:["Returns a DOUBLE value. The formula is as follows, where ",(0,r.jsx)(n.code,{children:"n"})," represents the row count of the table:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"covar_pop formula",src:s(52749).Z+"",width:"484",height:"250"})}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A data row is counted only when the two columns in this row are non-null values. Otherwise, this data row is eliminated from the result."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"NULL is returned in any input is NULL."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Suppose table ",(0,r.jsx)(n.code,{children:"agg"})," has the following data:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> select * from agg;\n+------+-------+-------+\n| no   | k     | v     |\n+------+-------+-------+\n|    1 | 10.00 |  NULL |\n|    2 | 10.00 | 11.00 |\n|    2 | 20.00 | 22.00 |\n|    2 | 25.00 |  NULL |\n|    2 | 30.00 | 35.00 |\n+------+-------+-------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Calculate the population covariance of the ",(0,r.jsx)(n.code,{children:"k"})," and ",(0,r.jsx)(n.code,{children:"v"})," columns:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> select no,COVAR_POP(k,v) from agg group by no;\n+------+-------------------+\n| no   | covar_pop(k, v)   |\n+------+-------------------+\n|    1 |              NULL |\n|    2 | 79.99999999999999 |\n+------+-------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},52749:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/covar_pop_formula-e72ba738bcac2b27294ab3c024c46954.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>o});var r=s(67294);const t=r.createContext({});function o(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:o(e),r.createElement(t.Provider,{value:a},n)}}}]);