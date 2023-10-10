"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99853],{83727:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=s(85893),r=s(11151);const c={},o="to_base64",i={id:"sql-reference/sql-functions/crytographic-functions/to_base64",title:"to_base64",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/to_base64.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/to_base64",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/to_base64",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/to_base64.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"sm3",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/sm3"},next:{title:"add_months",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/add_months"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"to_base64",children:"to_base64"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Converts a string into a Base64-encoded string. This function is an inverse of ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/from_base64",children:"from_base64"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"to_base64(str);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"str"}),": the string to encode. It must be of the VARCHAR type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the VARCHAR type. If the input is NULL, NULL is returned. If the input is empty, an error is returned."}),"\n",(0,t.jsx)(n.p,{children:"This function accepts only one string. More than one input string causes an error."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select to_base64(\"starrocks\");\n+------------------------+\n| to_base64('starrocks') |\n+------------------------+\n| c3RhcnJvY2tz           |\n+------------------------+\n1 row in set (0.00 sec)\n\nmysql> select to_base64(123);\n+----------------+\n| to_base64(123) |\n+----------------+\n| MTIz           |\n+----------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:c(e),t.createElement(r.Provider,{value:i},n)}}}]);