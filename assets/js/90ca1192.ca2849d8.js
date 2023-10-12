"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41560],{79685:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(85893),r=n(11151);const i={},c="weeks_sub",l={id:"sql-reference/sql-functions/date-time-functions/weeks_sub",title:"weeks_sub",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/weeks_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/weeks_sub",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/weeks_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/weeks_sub.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"weeks_diff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/weeks_diff"},next:{title:"year",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/year"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"weeks_sub",children:"weeks_sub"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Returns the value with the number of weeks minused to date."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"DATETIME weeks_sub(DATETIME expr1, INT expr2);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr1"}),": the original date. It must be of the ",(0,t.jsx)(s.code,{children:"DATETIME"})," type."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr2"}),": the number of weeks. It must be of the ",(0,t.jsx)(s.code,{children:"INT"})," type."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(s.p,{children:["returns ",(0,t.jsx)(s.code,{children:"DATETIME"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"NULL"})," is returned if the date does not exist."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:"select weeks_sub('2022-12-22',2);\n+----------------------------+\n| weeks_sub('2022-12-22', 2) |\n+----------------------------+\n|        2022-12-08 00:00:00 |\n+----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:l},s)}}}]);