"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59552],{29248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(85893),l=t(11151);const i={displayed_sidebar:"English"},r="multiply",c={id:"sql-reference/sql-functions/math-functions/multiply",title:"multiply",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/multiply.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/multiply",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/multiply",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/multiply.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"mod",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/mod"},next:{title:"negative",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/negative"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"multiply",children:"multiply"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Computes the product of the arguments."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"multiply(arg1, arg2)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"arg1"}),": numeric source column or literal.\n",(0,s.jsx)(n.code,{children:"arg2"}),": numeric source column or literal."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns the product of the two arguments. The return type depends on the arguments."}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsx)(n.p,{children:"If you specify a non-numeric value, this function will fail."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"MySQL > select multiply(10,2);\n+-----------------+\n| multiply(10, 2) |\n+-----------------+\n|              20 |\n+-----------------+\n1 row in set (0.01 sec)\n\nMySQL [test]> select multiply(1,2.1);\n+------------------+\n| multiply(1, 2.1) |\n+------------------+\n|              2.1 |\n+------------------+\n1 row in set (0.01 sec)\n\nMySQL > select * from t;\n+------+------+------+------+\n| id   | name | job1 | job2 |\n+------+------+------+------+\n|    2 |    2 |    2 |    2 |\n+------+------+------+------+\n1 row in set (0.08 sec)\n\nMySQL > select multiply(1.0,id) from t;\n+-------------------+\n| multiply(1.0, id) |\n+-------------------+\n|                 2 |\n+-------------------+\n1 row in set (0.01 sec) \n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"multiply"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const l=s.createContext({});function i(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:i(e),s.createElement(l.Provider,{value:c},n)}}}]);