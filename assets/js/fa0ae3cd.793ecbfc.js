"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36026],{56056:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(85893),i=n(11151);const r={displayed_sidebar:"English"},c="microseconds_sub",o={id:"sql-reference/sql-functions/date-time-functions/microseconds_sub",title:"microseconds_sub",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/date-time-functions/microseconds_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/microseconds_sub",permalink:"/docs/2.3/sql-reference/sql-functions/date-time-functions/microseconds_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/microseconds_sub.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"microseconds_add",permalink:"/docs/2.3/sql-reference/sql-functions/date-time-functions/microseconds_add"},next:{title:"minute",permalink:"/docs/2.3/sql-reference/sql-functions/date-time-functions/minute"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"microseconds_sub",children:"microseconds_sub"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Subtracts a time interval from a date value. The time interval is in microseconds."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"DATETIME microseconds_sub(DATETIME expr1,INT expr2);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr1"}),": the time expression. It must be of the DATETIME type."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr2"}),": the time interval you want to substract, in microseconds. It must be of the INT type."]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(s.p,{children:["Returns a value of the DATETIME type. If the input value is of the DATE type, the hour, minute, and seconds parts are processed as ",(0,t.jsx)(s.code,{children:"00:00:00"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select microseconds_sub('2010-11-30 23:50:50', 2);\n+--------------------------------------------+\n| microseconds_sub('2010-11-30 23:50:50', 2) |\n+--------------------------------------------+\n| 2010-11-30 23:50:49.999998                 |\n+--------------------------------------------+\n\nselect microseconds_sub('2010-11-30', 2);\n+-----------------------------------+\n| microseconds_sub('2010-11-30', 2) |\n+-----------------------------------+\n| 2010-11-29 23:59:59.999998        |\n+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>r});var t=n(67294);const i=t.createContext({});function r(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:o},s)}}}]);