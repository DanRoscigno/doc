"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30317],{39299:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=s(85893),a=s(11151);const t={displayed_sidebar:"documentation"},i="Lambda expression",o={id:"sql-reference/sql-functions/Lambda_expression",title:"Lambda expression",description:"Lambda expressions are anonymous functions that can be passed as parameters into higher-order SQL functions. Lambda expressions allow you to develop code that is more concise, elegant, and extensible.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/Lambda_expression.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/Lambda_expression",permalink:"/doc/docs/sql-reference/sql-functions/Lambda_expression",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/Lambda_expression.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Window function",permalink:"/doc/docs/sql-reference/sql-functions/Window_function"},next:{title:"any_value",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/any_value"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lambda-expression",children:"Lambda expression"}),"\n",(0,r.jsx)(n.p,{children:"Lambda expressions are anonymous functions that can be passed as parameters into higher-order SQL functions. Lambda expressions allow you to develop code that is more concise, elegant, and extensible."}),"\n",(0,r.jsxs)(n.p,{children:["Lambda expressions are written with the ",(0,r.jsx)(n.code,{children:"->"}),' operator, which reads "goes to". The left side of ',(0,r.jsx)(n.code,{children:"->"})," is the input parameters (if any) and the right side is an expression."]}),"\n",(0,r.jsxs)(n.p,{children:["From v2.5 onwards, StarRocks supports using lambda expressions in the following higher-order SQL functions: ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),", ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/array_filter",children:"array_filter()"}),", ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/array_sum",children:"array_sum()"}),", and ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/array_sortby",children:"array_sortby()"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"parameter -> expression\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parameter"}),": the input parameters for the lambda expression, which can accept zero, one, or more parameters. Two or more input parameters are enclosed in parentheses."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expression"}),": a simple expression that references ",(0,r.jsx)(n.code,{children:"parameter"}),". The expression must be valid for the input parameters."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsxs)(n.p,{children:["The type of the return value is determined by the result type of ",(0,r.jsx)(n.code,{children:"expression"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsx)(n.p,{children:"Almost all scalar functions can be used in a lambda body. But there are a few exceptions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Subqueries are not supported, for example, ",(0,r.jsx)(n.code,{children:"x -> 5 + (SELECT 3)"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Aggregate functions are not supported, for example, ",(0,r.jsx)(n.code,{children:"x -> min(y)"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Window functions are not supported."}),"\n",(0,r.jsx)(n.li,{children:"Table functions are not supported."}),"\n",(0,r.jsx)(n.li,{children:"Correlated columns cannot occur in lambda functions."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Simple examples of lambda expressions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'-- Accepts no parameters and returns 5.\n() -> 5    \n-- Takes x and returns the value of (x + 2).\nx -> x + 2 \n-- Takes x and y, and returns their sum.\n(x, y) -> x + y \n-- Takes x and applies a function to x.\nx -> COALESCE(x, 0)\nx -> day(x)\nx -> split(x,",")\nx -> if(x>0,"positive","negative")\n'})}),"\n",(0,r.jsx)(n.p,{children:"An example of using lambda expressions in higher-order functions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"select array_map((x,y,z) -> x + y, [1], [2], [4]);\n+----------------------------------------------+\n| array_map((x, y, z) -> x + y, [1], [2], [4]) |\n+----------------------------------------------+\n| [3]                                          |\n+----------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>t});var r=s(67294);const a=r.createContext({});function t(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:t(e),r.createElement(a.Provider,{value:o},n)}}}]);