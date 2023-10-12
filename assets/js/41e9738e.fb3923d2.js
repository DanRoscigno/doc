"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67775],{8918:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=s(85893),l=s(11151);const t={},a="least",i={id:"sql-reference/sql-functions/math-functions/least",title:"least",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/math-functions/least.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/least",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/least",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/math-functions/least.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"greatest",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/greatest"},next:{title:"ln, dlog1, log",permalink:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/ln"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"least",children:"least"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Returns the smallest value from a list of one or more parameters."}),"\n",(0,r.jsx)(n.p,{children:"Generally, the return value has the same data type as the input."}),"\n",(0,r.jsxs)(n.p,{children:["The comparison rules are the same as the ",(0,r.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/math-functions/greatest",children:"greatest"})," function."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"LEAST(expr1,...);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr1"}),": the expression to compare. It supports the following data types:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SMALLINT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TINYINT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"INT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"BIGINT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"LARGEINT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"FLOAT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DOUBLE"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DECIMALV2"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DECIMAL32"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DECIMAL64"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DECIMAL128"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DATETIME"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"VARCHAR"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Return the smallest value for a single input."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select least(3);\n+----------+\n| least(3) |\n+----------+\n|        3 |\n+----------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Return the smallest value from a list of values."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select least(3,4,5,5,6);\n+----------------------+\n| least(3, 4, 5, 5, 6) |\n+----------------------+\n|                    3 |\n+----------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 3: One parameter is of the DOUBLE type and a DOUBLE value is returned."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select least(4,4.5,5.5);\n+--------------------+\n| least(4, 4.5, 5.5) |\n+--------------------+\n|                4.0 |\n+--------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 4: The input parameters are a mix of number and string but the string can be converted into a number.  The parameters are compared as numbers."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select least(7,'5');\n+---------------+\n| least(7, '5') |\n+---------------+\n| 5             |\n+---------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 5: The input parameters are a mix of number and string but the string cannot be converted into a number. The parameters are compared as strings. The string ",(0,r.jsx)(n.code,{children:"'1'"})," is less than ",(0,r.jsx)(n.code,{children:"'at'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select least(1,'at');\n+----------------+\n| least(1, 'at') |\n+----------------+\n| 1              |\n+----------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 6: The input parameters are characters."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select least('A','B','Z');\n+----------------------+\n| least('A', 'B', 'Z') |\n+----------------------+\n| A                    |\n+----------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.p,{children:"LEAST, least"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>t});var r=s(67294);const l=r.createContext({});function t(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:t(e),r.createElement(l.Provider,{value:i},n)}}}]);