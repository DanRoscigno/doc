"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8970],{16119:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=s(85893),d=s(11151);const c={displayed_sidebar:"documentation"},i="seconds_add",o={id:"sql-reference/sql-functions/date-time-functions/seconds_add",title:"seconds_add",description:"description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/seconds_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/seconds_add",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/seconds_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/seconds_add.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"second",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/second"},next:{title:"seconds_diff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/seconds_diff"}},r={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"seconds_add",children:"seconds_add"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME SECONDS_ADD(DATETIME expr1,INT expr2)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add a specified time interval to the date. Unit is second."}),"\n",(0,t.jsx)(n.p,{children:"The expr1 parameter is a valid datetime expression."}),"\n",(0,t.jsx)(n.p,{children:"The expr2 parameter is the seconds you want to add."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select seconds_add('2010-11-30 23:50:50', 2);\n+---------------------------------------+\n| seconds_add('2010-11-30 23:50:50', 2) |\n+---------------------------------------+\n| 2010-11-30 23:50:52                   |\n+---------------------------------------+\n\nselect seconds_add('2010-11-30', 2);\n+------------------------------+\n| seconds_add('2010-11-30', 2) |\n+------------------------------+\n| 2010-11-30 00:00:02          |\n+------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"SECONDS_ADD,ADD"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var t=s(67294);const d=t.createContext({});function c(e){const n=t.useContext(d);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(d.Provider,{value:o},n)}}}]);