"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99328],{1651:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=s(85893),r=s(11151);const c={},i="STD",a={id:"sql-reference/sql-functions/aggregate-functions/std",title:"STD",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/std.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/std",permalink:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/std",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/std.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"retention",permalink:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/retention"},next:{title:"STDDEV,STDDEV_POP,std",permalink:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/stddev"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"std",children:"STD"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the standard deviation of an expression. Since v2.5.10, this function can also be used as a window function."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"STD(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": the expression. If it is a table column, it must evaluate to TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, or DECIMAL."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a DOUBLE value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"MySQL > select * from std_test;\n+------+------+\n| col0 | col1 |\n+------+------+\n|    0 |    0 |\n|    1 |    2 |\n|    2 |    4 |\n|    3 |    6 |\n|    4 |    8 |\n+------+------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Calculate the standard deviation of ",(0,t.jsx)(n.code,{children:"col0"})," and ",(0,t.jsx)(n.code,{children:"col1"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"MySQL > select std(col0) as std_of_col0, std(col1) as std_of_col1 from std_test;\n+--------------------+--------------------+\n| std_of_col0        | std_of_col1        |\n+--------------------+--------------------+\n| 1.4142135623730951 | 2.8284271247461903 |\n+--------------------+--------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"STD"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:a},n)}}}]);