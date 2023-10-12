"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74993],{50365:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(85893),c=s(11151);const a={displayed_sidebar:"documentation"},o="acos",r={id:"sql-reference/sql-functions/math-functions/acos",title:"acos",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/acos.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/acos",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/acos",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/acos.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"abs",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/abs"},next:{title:"asin",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/asin"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"acos",children:"acos"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Computes the arc cosine of an argument."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DOUBLE acos(DOUBLE arg)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"arg"}),": You can specify only a numeric value. This function converts the numeric value into a DOUBLE value before it computes the arc cosine of the value."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.p,{children:["If you specify a non-numeric value, this function returns ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select acos(-1);\n+-------------------+\n| acos(-1)          |\n+-------------------+\n| 3.141592653589793 |\n+-------------------+\n\nmysql> select acos(0);\n+--------------------+\n| acos(0)            |\n+--------------------+\n| 1.5707963267948966 |\n+--------------------+\n\nmysql> select acos(1);\n+---------+\n| acos(1) |\n+---------+\n|       0 |\n+---------+\n\nmysql> select acos(\"\");\n+----------+\n| acos('') |\n+----------+\n|     NULL |\n+----------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"ACOS"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>a});var t=s(67294);const c=t.createContext({});function a(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||o:a(e),t.createElement(c.Provider,{value:r},n)}}}]);