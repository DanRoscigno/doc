"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89465],{4790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var s=n(85893),a=n(11151);const d={displayed_sidebar:"documentation"},i="date_add",r={id:"sql-reference/sql-functions/date-time-functions/date_add",title:"date_add",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/date_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_add",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/date_add.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"date",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date"},next:{title:"date_format",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date_format"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"date_add",children:"date_add"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Adds a specified time interval to a date."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATETIME DATE_ADD(DATETIME|DATE date,INTERVAL expr type)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"date"}),": It must be a valid date or datetime expression."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"expr"}),": the time interval you want to add. It must be of the INT type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"type"}),": the unit of the time interval. It can only be set to any of the following values: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(t.p,{children:["Returns a DATETIME value. If the date does not exist, for example, ",(0,s.jsx)(t.code,{children:"2020-02-30"}),", NULL is returned. If the date is a DATE value, it will be converted into a DATETIME value."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"select date_add('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_add('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-12-02 23:59:59                             |\n+-------------------------------------------------+\n\nselect date_add('2010-12-03', INTERVAL 2 DAY);\n+----------------------------------------+\n| date_add('2010-12-03', INTERVAL 2 DAY) |\n+----------------------------------------+\n| 2010-12-05 00:00:00                    |\n+----------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>d});var s=n(67294);const a=s.createContext({});function d(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:d(e),s.createElement(a.Provider,{value:r},t)}}}]);