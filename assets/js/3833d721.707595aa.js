"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53611],{82682:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var t=s(85893),r=s(11151);const d={},a="hours_add",i={id:"sql-reference/sql-functions/date-time-functions/hours_add",title:"hours_add",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/hours_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/hours_add",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/hours_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/hours_add.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"hour",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/hour"},next:{title:"hours_diff",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/hours_diff"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hours_add",children:"hours_add"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Adds hours to a date or datetime."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME hours_add(DATETIME|DATE date, INT hours);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"date"}),": Base date or datetime."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"hours"}),": Hours to be added."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a DATETIME value."}),"\n",(0,t.jsx)(n.p,{children:"NULL is returned when any of the input parameters is NULL."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select hours_add('2022-01-01 01:01:01', 2);\n+-------------------------------------+\n| hours_add('2022-01-01 01:01:01', 2) |\n+-------------------------------------+\n| 2022-01-01 03:01:01                 |\n+-------------------------------------+\n\nselect hours_add('2022-01-01 01:01:01', -1);\n+--------------------------------------+\n| hours_add('2022-01-01 01:01:01', -1) |\n+--------------------------------------+\n| 2022-01-01 00:01:01                  |\n+--------------------------------------+\n\nselect hours_add('2022-01-01', 1);\n+----------------------------+\n| hours_add('2022-01-01', 1) |\n+----------------------------+\n| 2022-01-01 01:00:00        |\n+----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>d});var t=s(67294);const r=t.createContext({});function d(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:d(e),t.createElement(r.Provider,{value:i},n)}}}]);