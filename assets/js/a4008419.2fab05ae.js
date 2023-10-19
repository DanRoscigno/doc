"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62948],{23764:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},a="STDDEV,STDDEV_POP,std",d={id:"sql-reference/sql-functions/aggregate-functions/stddev",title:"STDDEV,STDDEV_POP,std",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/stddev.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/stddev",permalink:"/docs/sql-reference/sql-functions/aggregate-functions/stddev",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/stddev.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"STD",permalink:"/docs/sql-reference/sql-functions/aggregate-functions/std"},next:{title:"STDDEV_SAMP",permalink:"/docs/sql-reference/sql-functions/aggregate-functions/stddev_samp"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"stddevstddev_popstd",children:"STDDEV,STDDEV_POP,std"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the population standard deviation of the expr expression. Since v2.5.10, this function can also be used as a window function."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"STDDEV(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": the expression. If it is a table column, it must evaluate to TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, or DECIMAL."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a DOUBLE value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT stddev(lo_quantity), stddev_pop(lo_quantity) from lineorder;\n+---------------------+-------------------------+\n| stddev(lo_quantity) | stddev_pop(lo_quantity) |\n+---------------------+-------------------------+\n|   14.43100708360797 |       14.43100708360797 |\n+---------------------+-------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"STDDEV,STDDEV_POP,POP"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:d},n)}}}]);