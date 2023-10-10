"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16762],{76393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=t(85893),a=t(11151);const r={},c="atan",i={id:"sql-reference/sql-functions/math-functions/atan",title:"atan",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/atan.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/atan",permalink:"/docs/sql-reference/sql-functions/math-functions/atan",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/atan.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"asin",permalink:"/docs/sql-reference/sql-functions/math-functions/asin"},next:{title:"atan2",permalink:"/docs/sql-reference/sql-functions/math-functions/atan2"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"atan",children:"atan"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Computes the arc tangent of the argument."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"DOUBLE atan(DOUBLE arg)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"arg"}),": You can specify only a numeric value. This function converts the numeric value into a DOUBLE value before it computes the arc tangent of the value."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.p,{children:["If you specify a non-numeric value, this function returns ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select atan(1);\n+--------------------+\n| atan(1)            |\n+--------------------+\n| 0.7853981633974483 |\n+--------------------+\n\nmysql> select atan(0);\n+---------+\n| atan(0) |\n+---------+\n|       0 |\n+---------+\n\nmysql> select atan(-1);\n+---------------------+\n| atan(-1)            |\n+---------------------+\n| -0.7853981633974483 |\n+---------------------+\n\nmysql> select atan(\"\");\n+----------+\n| atan('') |\n+----------+\n|     NULL |\n+----------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ATAN"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var s=t(67294);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(a.Provider,{value:i},n)}}}]);