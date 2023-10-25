"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4582],{85377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const d={displayed_sidebar:"English"},r="minutes_add",a={id:"sql-reference/sql-functions/date-time-functions/minutes_add",title:"minutes_add",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/minutes_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/minutes_add",permalink:"/docs/2.5/sql-reference/sql-functions/date-time-functions/minutes_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/minutes_add.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"minute",permalink:"/docs/2.5/sql-reference/sql-functions/date-time-functions/minute"},next:{title:"minutes_diff",permalink:"/docs/2.5/sql-reference/sql-functions/date-time-functions/minutes_diff"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"minutes_add",children:"minutes_add"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Adds the specified minutes to the date, accurate to the minute."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"DATETIME minutes_add(DATETIME|DATE date, INT minutes);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"date"}),": the start time. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"minutes"}),": the minutes to add. It must be of the INT type, it could be greater, equal or less than zero."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a DATETIME value."}),"\n",(0,s.jsxs)(n.p,{children:["Returns NULL if either ",(0,s.jsx)(n.code,{children:"date"})," or ",(0,s.jsx)(n.code,{children:"minutes"})," is NULL."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select minutes_add('2022-01-01 01:01:01', 2);\n+---------------------------------------+\n| minutes_add('2022-01-01 01:01:01', 2) |\n+---------------------------------------+\n| 2022-01-01 01:03:01                   |\n+---------------------------------------+\n\nselect minutes_add('2022-01-01 01:01:01', -1);\n+----------------------------------------+\n| minutes_add('2022-01-01 01:01:01', -1) |\n+----------------------------------------+\n| 2022-01-01 01:00:01                    |\n+----------------------------------------+\n\nselect minutes_add('2022-01-01', 1);\n+------------------------------+\n| minutes_add('2022-01-01', 1) |\n+------------------------------+\n| 2022-01-01 00:01:00          |\n+------------------------------+\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>d});var s=t(67294);const i=s.createContext({});function d(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||r:d(e),s.createElement(i.Provider,{value:a},n)}}}]);