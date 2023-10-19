"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9213],{4059:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(85893),i=s(11151);const r={displayed_sidebar:"English"},c="minutes_diff",d={id:"sql-reference/sql-functions/date-time-functions/minutes_diff",title:"minutes_diff",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/minutes_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/minutes_diff",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/minutes_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/minutes_diff.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"minutes_add",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/minutes_add"},next:{title:"minutes_sub",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/minutes_sub"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"minutes_diff",children:"minutes_diff"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the minute difference between two date expressions (",(0,t.jsx)(n.code,{children:"expr1"})," \u2212 ",(0,t.jsx)(n.code,{children:"expr2"}),"), accurate to the minute."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BIGINT minutes_diff(DATETIME expr1,DATETIME expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": the end time. It must be of the DATETIME type."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": the start time. It must be of the DATETIME type."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a BIGINT value."}),"\n",(0,t.jsx)(n.p,{children:"NULL is returned if the date does not exist, for example, 2022-02-29."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select minutes_diff('2010-11-30 23:59:59', '2010-11-30 20:58:59');\n+------------------------------------------------------------+\n| minutes_diff('2010-11-30 23:59:59', '2010-11-30 20:58:59') |\n+------------------------------------------------------------+\n|                                                        181 |\n+------------------------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:d},n)}}}]);