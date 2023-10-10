"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21473],{59559:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=s(85893),r=s(11151);const c={},i="URL_DECODE",o={id:"sql-reference/sql-functions/string-functions/url_decode",title:"URL_DECODE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/url_decode.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/url_decode",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/url_decode",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/url_decode.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"UPPER",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/upper"},next:{title:"URL_ENCODE",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/url_encode"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"url_decode",children:"URL_DECODE"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Converts an url to a decode string."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-haskell",children:"url_decode(str)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"}),": the string to decode. If ",(0,t.jsx)(n.code,{children:"str"})," is not a string type, it will try implicit cast first."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-values",children:"Return values"}),"\n",(0,t.jsx)(n.p,{children:"Return an encode string."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> select url_decode('https%3A%2F%2Fdocs.starrocks.io%2Fen-us%2Flatest%2Fquick_start%2FDeploy');\n+---------------------------------------------------------------------------------------+\n| url_decode('https%3A%2F%2Fdocs.starrocks.io%2Fen-us%2Flatest%2Fquick_start%2FDeploy') |\n+---------------------------------------------------------------------------------------+\n| https://docs.starrocks.io/en-us/latest/quick_start/Deploy                             |\n+---------------------------------------------------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:o},n)}}}]);