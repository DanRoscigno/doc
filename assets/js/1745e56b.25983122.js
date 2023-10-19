"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8921],{32381:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var i=s(85893),t=s(11151);const d={displayed_sidebar:"English"},r="pmod",o={id:"sql-reference/sql-functions/math-functions/pmod",title:"pmod",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/pmod.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/pmod",permalink:"/docs/sql-reference/sql-functions/math-functions/pmod",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/pmod.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"pi",permalink:"/docs/sql-reference/sql-functions/math-functions/pi"},next:{title:"positive",permalink:"/docs/sql-reference/sql-functions/math-functions/positive"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pmod",children:"pmod"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Returns the positive remainder of ",(0,i.jsx)(n.code,{children:"dividend"})," divided by",(0,i.jsx)(n.code,{children:"divisor"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"pmod(dividend, divisor)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dividend"}),": the number to be divided."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"divisor"}),": the number that divides."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Both ",(0,i.jsx)(n.code,{children:"arg1"})," and ",(0,i.jsx)(n.code,{children:"arg2"})," support the following data types:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BIGINT"}),"\n",(0,i.jsx)(n.li,{children:"DOUBLE"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dividend"})," and ",(0,i.jsx)(n.code,{children:"divisor"})," must agree in the data type. StarRocks performs an implicit conversion if they do not agree in the data type."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsxs)(n.p,{children:["Returns a value of the same data type as the ",(0,i.jsx)(n.code,{children:"dividend"}),". StarRocks returns NULL if ",(0,i.jsx)(n.code,{children:"divisor"})," is specified as 0."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"mysql> select pmod(3.14,3.14);\n+------------------+\n| pmod(3.14, 3.14) |\n+------------------+\n|                0 |\n+------------------+\n\nmysql> select pmod(3,6);\n+------------+\n| pmod(3, 6) |\n+------------+\n|          3 |\n+------------+\n\nmysql> select pmod(11,5);\n+-------------+\n| pmod(11, 5) |\n+-------------+\n|           1 |\n+-------------+\n\nmysql> select pmod(-11,5);\n+--------------+\n| pmod(-11, 5) |\n+--------------+\n|            4 |\n+--------------+\n\nmysql> SELECT pmod(11,-5);\n+--------------+\n| pmod(11, -5) |\n+--------------+\n|           -4 |\n+--------------+\n\nmysql> SELECT pmod(-11,-5);\n+---------------+\n| pmod(-11, -5) |\n+---------------+\n|            -1 |\n+---------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>d});var i=s(67294);const t=i.createContext({});function d(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:d(e),i.createElement(t.Provider,{value:o},n)}}}]);