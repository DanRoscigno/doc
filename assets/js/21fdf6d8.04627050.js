"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99197],{99585:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=s(85893),t=s(11151);const a={displayed_sidebar:"English"},l="greatest",i={id:"sql-reference/sql-functions/math-functions/greatest",title:"greatest",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/greatest.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/greatest",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/greatest",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/greatest.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"fmod",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/fmod"},next:{title:"least",permalink:"/docs/2.5/sql-reference/sql-functions/math-functions/least"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"greatest",children:"greatest"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Returns the largest value from a list of one or more parameters."}),"\n",(0,r.jsx)(n.p,{children:"Generally, the return value has the same data type as the input."}),"\n",(0,r.jsx)(n.p,{children:"The parameters are compared based on the following rules:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"NULL is returned if any of the input parameters is NULL."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If at least one parameter is of the DOUBLE type, all the parameters are compared as DOUBLE values. The same rule applies to the DECIMAL and FLOAT data types."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the parameters are a mix of numbers and strings but the strings can be converted into numbers, the parameters are compared as numbers. If the strings cannot be converted into numbers, the parameters are compared as strings."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the parameters are characters, they are compared based on the alphabetical order of the first letter."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"GREATEST(expr1,...);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr1"}),": the expression to compare. It supports the following data types:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SMALLINT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TINYINT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"INT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"BIGINT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"LARGEINT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"FLOAT"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DOUBLE"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DECIMALV2"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DECIMAL32"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DECIMAL64"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DECIMAL128"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DATETIME"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"VARCHAR"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Return the largest value for a single input."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select greatest(3);\n+-------------+\n| greatest(3) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Return the largest value from a list of values."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select greatest(3,4,5,5,6);\n+-------------------------+\n| greatest(3, 4, 5, 5, 6) |\n+-------------------------+\n|                       6 |\n+-------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 3: One parameter is of the DOUBLE type and a DOUBLE value is returned."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select greatest(7,4.5);\n+------------------+\n| greatest(7, 4.5) |\n+------------------+\n|              7.0 |\n+------------------+\n1 row in set (0.05 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 4: The input parameters are a mix of number and string but the string can be converted into a number. The parameters are compared as numbers."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select greatest(7,'9');\n+------------------+\n| greatest(7, '9') |\n+------------------+\n| 9                |\n+------------------+\n1 row in set (0.04 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 5: The input parameters are a mix of number and string but the string cannot be converted into a number. The parameters are compared as strings. The string ",(0,r.jsx)(n.code,{children:"'1'"})," is less than ",(0,r.jsx)(n.code,{children:"'at'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"select greatest(1,'at');\n+-------------------+\n| greatest(1, 'at') |\n+-------------------+\n| at                |\n+-------------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 6: The input parameters are characters. The letter ",(0,r.jsx)(n.code,{children:"Z"})," has the largest value."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select greatest('A','B','Z');\n+-------------------------+\n| greatest('A', 'B', 'Z') |\n+-------------------------+\n| Z                       |\n+-------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.p,{children:"GREATEST, greatest"})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>a});var r=s(67294);const t=r.createContext({});function a(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:a(e),r.createElement(t.Provider,{value:i},n)}}}]);