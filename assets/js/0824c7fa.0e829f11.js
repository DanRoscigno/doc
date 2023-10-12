"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59810],{51626:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var t=s(85893),r=s(11151);const c={displayed_sidebar:"documentation"},i="sqrt, dsqrt",a={id:"sql-reference/sql-functions/math-functions/sqrt",title:"sqrt, dsqrt",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/sqrt.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/sqrt",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/sqrt",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/sqrt.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"sin",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/sin"},next:{title:"square",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/square"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sqrt-dsqrt",children:"sqrt, dsqrt"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Calculates the square root of a value. dsqrt is same as sqrt."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DOUBLE SQRT(DOUBLE x);\nDOUBLE DSQRT(DOUBLE x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": You can specify only a numeric value. This function converts the numeric value into a DOUBLE value before calculation."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["If you specify a non-numeric value, this function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select sqrt(3.14);\n+-------------------+\n| sqrt(3.14)        |\n+-------------------+\n| 1.772004514666935 |\n+-------------------+\n1 row in set (0.01 sec)\n\n\nmysql> select dsqrt(3.14);\n+-------------------+\n| dsqrt(3.14)       |\n+-------------------+\n| 1.772004514666935 |\n+-------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:a},n)}}}]);