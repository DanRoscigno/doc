"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76072],{67726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(85893),r=t(11151);const i={},a="day",c={id:"sql-reference/sql-functions/date-time-functions/day",title:"day",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/day",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/day.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"datediff",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/datediff"},next:{title:"dayofweek_iso",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/day_of_week_iso"}},d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"day",children:"day"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Extracts the day part of a date or datetime expression and returns a value that ranges from 1 to 31."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"date"})," parameter must be of the DATE or DATETIME type."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT DAY(DATETIME|DATE date)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select day('1987-01-31');\n+----------------------------+\n| day('1987-01-31 00:00:00') |\n+----------------------------+\n|                         31 |\n+----------------------------+\n\nMySQL > select day('1987-01-31 20:10:59');\n+----------------------------+\n| day('1987-01-31 20:10:59') |\n+----------------------------+\n|                         31 |\n+----------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"DAY, day"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:c},n)}}}]);