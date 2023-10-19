"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[12347],{27272:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var t=n(85893),r=n(11151);const i={displayed_sidebar:"English"},o="hours_sub",u={id:"sql-reference/sql-functions/date-time-functions/hours_sub",title:"hours_sub",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/hours_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/hours_sub",permalink:"/docs/sql-reference/sql-functions/date-time-functions/hours_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/hours_sub.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"hours_diff",permalink:"/docs/sql-reference/sql-functions/date-time-functions/hours_diff"},next:{title:"jodatime_format",permalink:"/docs/sql-reference/sql-functions/date-time-functions/jodatime_format"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"hours_sub",children:"hours_sub"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Reduces the specified date and time by a specified number of hours."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"DATETIME hours_sub(DATETIME|DATE date, INT hours);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"date"}),": It must be a valid DATE or DATETIME expression."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"hours"}),": The number of hours reduced. The supported data type is INT."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(s.p,{children:["Returns a DATETIME value. If the date does not exist, for example, ",(0,t.jsx)(s.code,{children:"2022-21-01"}),", or if the date is not a DATE or DATETIME value, NULL is returned."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select hours_sub('2022-01-01 01:01:01', 1);\n+-------------------------------------+\n| hours_sub('2022-01-01 01:01:01', 1) |\n+-------------------------------------+\n| 2022-01-01 00:01:01                 |\n+-------------------------------------+\n\nselect hours_sub('2022-01-01 01:01:01', -1);\n+--------------------------------------+\n| hours_sub('2022-01-01 01:01:01', -1) |\n+--------------------------------------+\n| 2022-01-01 02:01:01                  |\n+--------------------------------------+\n\nselect hours_sub('2022-01-01', 1);\n+----------------------------+\n| hours_sub('2022-01-01', 1) |\n+----------------------------+\n| 2021-12-31 23:00:00        |\n+----------------------------+\n\nselect hours_sub('2022-01-01', -1);\n+-----------------------------+\n| hours_sub('2022-01-01', -1) |\n+-----------------------------+\n| 2022-01-01 01:00:00         |\n+-----------------------------+\n\nError case:\nselect hours_sub('2022-21-01', -1);\n+--------------------------------------+\n| hours_sub('2022-21-01', -1) |\n+--------------------------------------+\n| NULL                                 |\n+--------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>u,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function u({components:e,children:s,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||o:i(e),t.createElement(r.Provider,{value:u},s)}}}]);