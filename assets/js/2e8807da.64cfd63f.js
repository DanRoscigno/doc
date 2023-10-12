"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76072],{67726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var s=t(85893),i=t(11151);const a={displayed_sidebar:"documentation"},r="day",d={id:"sql-reference/sql-functions/date-time-functions/day",title:"day",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/day",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/day.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"datediff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/datediff"},next:{title:"dayofweek_iso",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/day_of_week_iso"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"day",children:"day"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Extracts the day part of a date or datetime expression and returns a value that ranges from 1 to 31."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"date"})," parameter must be of the DATE or DATETIME type."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT DAY(DATETIME|DATE date)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select day('1987-01-31');\n+----------------------------+\n| day('1987-01-31 00:00:00') |\n+----------------------------+\n|                         31 |\n+----------------------------+\n\nMySQL > select day('1987-01-31 20:10:59');\n+----------------------------+\n| day('1987-01-31 20:10:59') |\n+----------------------------+\n|                         31 |\n+----------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"DAY, day"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:d},n)}}}]);