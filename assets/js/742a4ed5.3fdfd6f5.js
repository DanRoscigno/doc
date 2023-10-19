"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75405],{59708:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(85893),l=s(11151);const i={displayed_sidebar:"English"},r="log",c={id:"sql-reference/sql-functions/math-functions/log",title:"log",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/log.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/log",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/log",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/log.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ln, dlog1, log",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/ln"},next:{title:"log10, dlog10",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/log10"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",em:"em"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"log",children:"log"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Calculates the logarithm of a number to a specified base (or radix). If the base is not specified, this function is equivalent to ",(0,t.jsx)(n.a,{href:"/docs/2.5/sql-reference/sql-functions/math-functions/ln",children:"ln"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"log([base,] arg)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"base"}),": Optional. The base. Only DOUBLE data type is supported. If this parameter is not specified, this function is equivalent to ",(0,t.jsx)(n.a,{href:"/docs/2.5/sql-reference/sql-functions/math-functions/ln",children:"ln"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(n.p,{children:["StarRocks returns NULL if ",(0,t.jsx)(n.code,{children:"base"})," is specified as a negative, 0, or 1."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"arg"}),": The value whose logarithm you want to calculate. Only DOUBLE data type is supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(n.p,{children:["StarRocks returns NULL if ",(0,t.jsx)(n.code,{children:"arg"})," is specified as a negative or 0."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the DOUBLE data type."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Calculate the logarithm of 8 to the base 2."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select log(2,8);\n+-----------+\n| log(2, 8) |\n+-----------+\n|         3 |\n+-----------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Calculate the logarithm of 10 to the base ",(0,t.jsx)(n.em,{children:"e"})," (with the base not specified)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> select log(10);\n+-------------------+\n| log(10)           |\n+-------------------+\n| 2.302585092994046 |\n+-------------------+\n1 row in set (0.09 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const l=t.createContext({});function i(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(l.Provider,{value:c},n)}}}]);