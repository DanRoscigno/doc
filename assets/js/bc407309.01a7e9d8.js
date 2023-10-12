"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37157],{74320:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=n(85893),c=n(11151);const i={displayed_sidebar:"documentation"},r="microseconds_sub",o={id:"sql-reference/sql-functions/date-time-functions/microseconds_sub",title:"microseconds_sub",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/microseconds_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/microseconds_sub",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/microseconds_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/microseconds_sub.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"microseconds_add",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/microseconds_add"},next:{title:"minute",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/minute"}},d={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"microseconds_sub",children:"microseconds_sub"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Subtracts a time interval from a date value. The time interval is in microseconds."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"DATETIME microseconds_sub(DATETIME expr1,INT expr2);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr1"}),": the time expression. It must be of the DATETIME type."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr2"}),": the time interval you want to substract, in microseconds. It must be of the INT type."]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(s.p,{children:["Returns a value of the DATETIME type. If the input value is of the DATE type, the hour, minute, and seconds parts are processed as ",(0,t.jsx)(s.code,{children:"00:00:00"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select microseconds_sub('2010-11-30 23:50:50', 2);\n+--------------------------------------------+\n| microseconds_sub('2010-11-30 23:50:50', 2) |\n+--------------------------------------------+\n| 2010-11-30 23:50:49.999998                 |\n+--------------------------------------------+\n\nselect microseconds_sub('2010-11-30', 2);\n+-----------------------------------+\n| microseconds_sub('2010-11-30', 2) |\n+-----------------------------------+\n| 2010-11-29 23:59:59.999998        |\n+-----------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>i});var t=n(67294);const c=t.createContext({});function i(e){const s=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:i(e),t.createElement(c.Provider,{value:o},s)}}}]);